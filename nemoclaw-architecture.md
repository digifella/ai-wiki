---
title: NemoClaw — Private Local AI Assistant with Living Knowledge Base
created: 2026-04-07
tags:
  - "nemoclaw"
  - "architecture"
  - "local-ai"
  - "knowledge-management"
  - "obsidian"
  - "telegram"
type: architecture
---
# NemoClaw — Private Local AI Assistant with Living Knowledge Base

NemoClaw is a fully private, locally-run AI assistant that responds to Telegram voice and text messages, maintains a self-updating knowledge wiki, and publishes it as a browsable website — with zero cloud AI dependency. Everything runs on your own hardware.

---

## What It Does

- **Voice → Action**: Send a voice memo on Telegram. NemoClaw transcribes it (Whisper), routes it intelligently, and takes action — saving a note, answering a question from your vault, sending an email, creating a calendar entry, or fetching weather.
- **Living Wiki**: Every note is automatically processed by a local LLM which extracts concepts and entities, updates cross-linked wiki pages, and rebuilds a master index — the [Karpathy LLM Wiki pattern](concepts/llm-wiki).
- **Lab Pipeline**: YouTube summaries and research notes emailed from an external lab system are automatically ingested into the vault and wiki.
- **Public Website**: The wiki is automatically published to GitHub Pages as a searchable, graph-linked website — updated every 30 minutes.

---

## Hardware & Software Requirements

### Hardware
- A machine capable of running a 26B parameter LLM locally (tested on **NVIDIA Quadro RTX 8000, 48GB VRAM**)
- Smaller models (7B–14B) will work on 8–16GB VRAM with reduced quality
- Windows 11 with WSL2 (Ubuntu 24.04) — or native Linux

### Core Software Stack

| Component | Purpose |
|---|---|
| [Ollama](https://ollama.ai) | Local LLM server — serves the assistant and wiki models |
| [gemma4:26b](https://ollama.com/library/gemma4) | Primary assistant model for voice routing, summaries, general Q&A, and vault search answers |
| qwen2.5:14b-instruct-q4_K_M | Wiki-ingest model for concept/entity extraction, page updates, taxonomy metadata, and infographic summaries |
| [OpenShell / NemoClaw gateway](https://clawhub.ai) | Sandboxed AI agent runtime that handles Telegram bot |
| [Whisper](https://github.com/openai/whisper) | Local speech-to-text for voice messages |
| [Obsidian](https://obsidian.md) | Markdown vault viewer (Windows) |
| [Quartz v4](https://quartz.jzhao.xyz) | Static site generator for the public wiki |
| Python 3.11+ | All automation scripts |
| Git + GitHub | Vault sync and Pages hosting |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  YOUR PHONE (Telegram)                                          │
│  Voice memo / text message                                      │
└────────────────────────┬────────────────────────────────────────┘
                         │ Telegram Bot API
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  SANDBOX (OpenShell / NemoClaw gateway)                         │
│  openclaw-gateway receives messages                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ voice-watcher.py  — tails gateway log for voice URLs     │   │
│  │ downloads .oga → /sandbox/voice-inbox/{ts}.oga + .json   │   │
│  └──────────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────────┘
                         │ OpenShell sandbox download
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  WSL HOST (Ubuntu 24.04)                                        │
│                                                                 │
│  nemoclaw-voice-processor.py                                    │
│  ├── Whisper (small model) → transcript                         │
│  └── Route by intent:                                           │
│       ├── Calendar  → ICS email → Gmail → Google Calendar       │
│       ├── Email     → Gmail SMTP → contact                      │
│       ├── Weather   → wttr.in → Telegram reply                  │
│       ├── Shopping  → vault/lists/shopping.md                   │
│       ├── Search    → DuckDuckGo → Ollama summary               │
│       ├── Intel     → email radar + vault/market-intel/         │
│       ├── Query     → search vault → Ollama → reply             │
│       └── Note      → vault/inbox/ + git push                   │
│                                                                 │
│  nemoclaw-lab-poller.py  (cron: */15)                           │
│  └── Gmail IMAP → "Your Lab job is complete" emails             │
│      → extract ## body → vault/lab-notes/                       │
│                                                                 │
│  nemoclaw-wiki-ingest.py  (cron: */30)                          │
│  └── scan inbox/ Inbox/ market-intel/ lab-notes/                │
│      → Ollama/qwen2.5: extract concepts + entities              │
│      → create/update wiki/concepts/ + wiki/entities/            │
│      → rebuild wiki/INDEX.md                                    │
│      → git push vault → GitHub                                  │
│                                                                 │
│  nemoclaw-wiki-publish.sh  (cron: */10)                         │
│  └── rsync vault/wiki/ → ~/ai-wiki/content/                     │
│      → sanitise frontmatter → fix INDEX paths                   │
│      → npx quartz build → push public/ → gh-pages               │
└─────────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  OUTPUTS                                                        │
│  ├── Obsidian vault  C:\Users\paul\Documents\AI-Vault\          │
│  ├── GitHub repo     github.com/digifella/AI-Vault (private)    │
│  └── Public wiki     digifella.github.io/ai-wiki                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Voice Routing in Detail

`nemoclaw-voice-processor.py` routes each transcript through a priority chain. The **first match** wins:

| Priority | Trigger Detection | Action |
|---|---|---|
| 1 | Calendar trigger words OR time + date reference | Generate ICS → email → Google Calendar |
| 2 | Email trigger words OR send/to/saying regex | Gmail SMTP to resolved contact |
| 3 | Weather/rain words OR weather + time word | `wttr.in` → condition, temp, rain, humidity, wind |
| 4 | Shopping list trigger phrases | Append to `vault/lists/shopping.md` |
| 5 | "Look up / search for / google" prefix | DuckDuckGo instant answers → Ollama summary |
| 6 | Market intel / market update keywords | Email intel radar + save to `vault/market-intel/` |
| 7 | Question words (what/when/how…) or ends with `?` | Keyword-scored vault search → Ollama → reply |
| 8 | Everything else | Save as Obsidian note → git push |

### Whisper Robustness
The system handles Whisper transcription variations (present/past tense, `a.m.` vs `am` vs `o'clock`, missing trigger words) through:
- Expanded trigger word lists with past-tense variants
- Compiled regex matching anywhere in text (not just start)
- Implicit detection: time reference + date reference = calendar intent

---

## The Living Wiki (Karpathy LLM Wiki Pattern)

Based on [Andrej Karpathy's LLM Wiki pattern](concepts/llm-wiki) — the LLM maintains the wiki, the human curates sources.

The broader NemoClaw assistant loop still uses `gemma4:26b`. The wiki ingest
path deliberately uses `qwen2.5:14b-instruct-q4_K_M` because it is faster for
the repeated conversion tasks: extract concepts/entities, update wiki markdown,
enrich taxonomy metadata, and generate short infographic summaries. The cron
`flock` command only prevents overlapping ingest jobs; it does not change the
sandbox or voice model globally.

### Taxonomy Layer

The public mindmap no longer treats every domain as an equal top-level bucket.
Concepts now use broad human-centred shelves with subgroups. The shelf list is
read from the taxonomy source, so it can grow past eight or ten shelves without
changing the navigator code:

- AI & Agents
- Undecided
- Tools & Platforms
- Creative Pursuits
- Business & Strategy
- Biology & Life Sciences
- Science & Physics
- Earth Systems, Geology & Climate
- History & Culture
- Built Environment & Architecture
- Society, Politics & Institutions
- Travels & Journeys
- Security & Infrastructure
- Cosmology & Space
- Health & Wellbeing

Major model families and tools are classified by deterministic overrides before
LLM enrichment runs. For example, Claude, Anthropic, Gemini, Qwen, and Gemma are
kept under AI & Agents; NemoClaw, Obsidian, and NotebookLM are kept under
Undecided; zipper/YKK/Clasp Locker are kept under History & Culture.
This prevents the older failure mode where a generic tools shelf became a junk
drawer and major AI entities were hard to find.

### Ingest Flow (per note)

```
New note in inbox/
       │
       ▼
Ollama/qwen2.5 prompt 1: extract CONCEPTS + ENTITIES + SUMMARY
       │
       ├── for each concept → read existing wiki/concepts/CONCEPT.md
       │       └── Ollama/qwen2.5 prompt 2: update page with new info + backlinks
       │
       └── for each entity → read existing wiki/entities/ENTITY.md
               └── Ollama/qwen2.5 prompt 3: update page with new info + backlinks
       │
       ▼
Mark note: wiki-ingested: true (prevents re-processing)
       │
       ▼
Rebuild wiki/INDEX.md (scan all pages, generate linked index)
       │
       ▼
git push → GitHub → Telegram digest notification
```

### Key Design Decisions
- **Idempotency**: backlink `[[source/note]]` checked before each page update — no duplicate content on retry
- **Crash recovery**: notes only marked processed after full completion — timeouts auto-retry next run
- **Pacing**: 2s between LLM calls, 3s between notes — prevents Ollama overload
- **Lockfile**: `flock -n` in cron prevents concurrent ingest runs hammering the GPU
- **Context management**: note body truncated to 800 chars, existing page to 1500 chars — fits in model context

### Folder Structure

```
AI-Vault/
├── inbox/          ← voice notes (voice processor)
├── Inbox/          ← text notes (sandbox sync)
├── market-intel/   ← market intelligence notes
├── lab-notes/      ← YouTube/article summaries (lab email pipeline)
├── lists/
│   └── shopping.md ← shopping list (voice: "add X to shopping list")
└── wiki/
    ├── INDEX.md    ← master index (auto-rebuilt)
    ├── SCHEMA.md   ← LLM conventions guide
    ├── concepts/   ← one .md per concept (LLM-maintained)
    └── entities/   ← one .md per named entity (LLM-maintained)
```

---

## Lab Email Pipeline

External research pipelines (YouTube summarisers, article scrapers) send results to `intel.longboardfella@gmail.com` with subject `Your Lab job is complete — [topic]`.

`nemoclaw-lab-poller.py` (cron `*/15`):
1. Connects via Gmail IMAP
2. Searches for unread emails matching subject pattern
3. Extracts body from first `##` heading to `────` footer line
4. Saves to `vault/lab-notes/YYYY-MM-DD-title.md` with frontmatter
5. Marks email as read — no duplicates
6. Git pushes vault — wiki ingest picks up on next 30-min cycle

---

## Public Wiki Publishing (Quartz)

`nemoclaw-wiki-publish.sh` (cron `*/10`, lockfile protected):

1. `rsync` vault wiki content → `~/ai-wiki/content/`
2. Create homepage `index.md`
3. Fix `INDEX.md` link paths (`wiki/concepts/` → `concepts/`)
4. Sanitise LLM-generated frontmatter (fix missing closing `---`, quote values with colons)
5. `npx quartz build` → `~/ai-wiki/public/`
6. Copy `INDEX.html` → `index.html` (GitHub Pages needs lowercase)
7. Add `.nojekyll` (prevents Jekyll interference)
8. `git push -f origin gh-pages` → GitHub Pages live within ~60s

**Node.js**: Quartz v4 requires Node 22+ (install via nvm).

---

## Cron Schedule

```bash
0  13 * * *  run_daily_maintenance.sh          # cortex suite
*/15 * * * * nemoclaw-sync-notes.sh            # sandbox → vault sync
*/30 * * * * flock -n /tmp/nemoclaw-wiki.lock python3 nemoclaw-wiki-ingest.py
*/15 * * * * nemoclaw-lab-poller.py            # lab email → vault
10,25,40,55 * * * * flock -n /tmp/nemoclaw-publish.lock nemoclaw-wiki-publish.sh
```

**GPU note**: Wiki ingest is the most GPU-intensive operation (multiple Ollama calls per note). The `flock -n` lockfile ensures runs never overlap. Reduce frequency if GPU load is a concern.

---

## Key Files

| File | Location | Purpose |
|---|---|---|
| `nemoclaw-voice-processor.py` | `~/` | Main voice routing engine |
| `nemoclaw-wiki-ingest.py` | `~/` | Karpathy wiki pattern ingest |
| `nemoclaw-lab-poller.py` | `~/` | Gmail → lab-notes pipeline |
| `nemoclaw-wiki-publish.sh` | `~/` | Quartz build + GitHub Pages push |
| `voice-watcher.py` | `/tmp/` (sandbox) | Log tailer → voice file downloader |
| `quartz.config.ts` | `~/ai-wiki/` | Quartz site configuration |

---

## Replication Guide

1. **Telegram Bot**: Create via [@BotFather](https://t.me/BotFather), get token
2. **OpenShell/NemoClaw**: Sign up at [clawhub.ai](https://clawhub.ai), create sandbox, configure bot token
3. **Ollama**: Install, pull the assistant model (`ollama pull gemma4:26b`) and wiki-ingest model (`ollama pull qwen2.5:14b-instruct-q4_K_M`)
4. **Whisper**: `pip install openai-whisper`
5. **Obsidian vault**: Create vault, init git repo, push to GitHub
6. **Gmail**: Create dedicated account, enable app password, set up forwarding rules
7. **Scripts**: Copy and configure the Python scripts with your tokens/paths
8. **Cron**: Set up the four cron jobs with flock protection
9. **Quartz**: `git clone https://github.com/jackyzha0/quartz.git ~/ai-wiki && npm ci`
10. **GitHub Pages**: Create public `ai-wiki` repo, enable Pages from `gh-pages` branch

---

## Related Pages

- [[concepts/llm-wiki|LLM Wiki Pattern]] — the Karpathy knowledge base approach
- [[entities/nemoclaw|NemoClaw]] — the agent platform
- [[entities/ollama|Ollama]] — local LLM server
- [[entities/obsidian|Obsidian]] — markdown vault
- [[entities/telegram|Telegram]] — messaging interface

---

*This article is itself maintained within the NemoClaw wiki and published automatically to [digifella.github.io/ai-wiki](https://digifella.github.io/ai-wiki).*
