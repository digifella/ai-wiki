---
type: schema
updated: 2026-04-08
---
# NemoClaw Wiki Schema

## Purpose
This wiki is maintained by the local Ollama wiki-ingest model
qwen2.5:14b-instruct-q4_K_M. New notes from inbox/ are automatically ingested:
concepts and entities are extracted, pages are created or updated, and
everything is cross-linked. The broader NemoClaw loop still uses gemma4:26b for
voice routing and general vault Q&A; this schema describes the wiki conversion
stage. The human curates sources and asks questions. The LLM handles
summarisation, cross-referencing, and maintenance.

## Folder structure
- wiki/concepts/   — one page per idea, topic, method
- wiki/entities/   — one page per named person, company, book, project
- wiki/INDEX.md    — master index, auto-rebuilt after each ingest
- wiki/SCHEMA.md   — this file (human + LLM co-evolve conventions here)

## Page conventions
- Obsidian WikiLink format for all cross-references
- Frontmatter: type, tags, updated
- Concept frontmatter also carries a human navigation taxonomy:
  `domain` is the top-level shelf, `group` is the shelf subcluster
- Bullet points preferred over prose
- Source backlinks always included: [[inbox/YYYY-MM-DD-title]]
- Keep pages concise — dense, linked knowledge beats long prose

## Taxonomy shelves

The public mindmap uses broad human-centred shelves instead of a flat pile of
LLM-generated domains. The shelf list is data-driven from
`nemoclaw_taxonomy.py`, so it is not limited to a fixed count. Current shelves
are:

- AI & Agents — frontier models, labs, agent systems, reasoning, prompting
- Undecided — public review bucket for notes that do not yet fit a stable shelf
- Tools & Platforms — software platforms, APIs, runtimes, web systems, no-code builders
- Creative Pursuits — photography, design, video, writing, visualisation
- Business & Strategy — market intelligence, pricing, enterprise work
- Biology & Life Sciences — biology, animals, ecology, life systems
- Science & Physics — mathematics, physics, engineering, mechanisms
- Earth Systems, Geology & Climate — geology, landscapes, climate, earth history
- History & Culture — history, cities, material culture, institutions
- Built Environment & Architecture — buildings, urban systems, architecture, heritage
- Society, Politics & Institutions — politics, institutions, governance, civic life
- Travels & Journeys — places, travel, itineraries, movement, lived experience
- Security & Infrastructure — privacy, local compute, deployment, hardware
- Cosmology & Space — astronomy, planetary environments, Mars, space systems
- Health & Wellbeing — resilience, pain, patient practice, recovery

Major entities and model families such as Claude, Anthropic, Gemini, OpenAI,
Qwen, Gemma, NemoClaw, OpenClaw, Obsidian, and NotebookLM are classified by
explicit deterministic overrides before Qwen is asked to enrich metadata.

Second-layer groups are meant to be human browsing handles, not LLM-generated
topic residue. For example, the AI & Agents shelf splits into model-family and
use-case groups such as Anthropic & Claude, Google Gemini & Gemma, OpenAI &
GPT, Alibaba & Qwen, Agent Frameworks & Skills, AI Coding & Developer Agents,
Reasoning Context & Prompting, and Safety Governance & Evaluation.

## Source folders processed
- inbox/        — voice notes, Telegram text notes
- Inbox/        — notes synced from sandbox
- market-intel/ — market intelligence

## Source Relevance Check (pre-publish)

Every wiki note carries `## Source Notes` linking to the lab-note that produced
it. Over time, notes can accumulate sources that are semantically irrelevant —
usually because the ingest model over-generalised or the note was later
refactored to cover a different topic.

The **source relevance checker** (`nemoclaw-source-relevance-check.py`) runs
automatically before every publish. It compares each note's body against its
linked lab-note sources using cosine similarity
(all-MiniLM-L6-v2). Sources scoring below a configurable threshold (default
-0.05, i.e. semantically opposed) are flagged.

### How it works
1. Index all lab-notes by title
2. For each wiki note, extract body (excluding Source Notes section)
3. Embed note body + each linked lab-note body
4. Score cosine similarity; skip pairs sharing ≥3 keywords (false-positive guard)
5. Flag sources below threshold

### Usage
```bash
# Report only (default, runs in publish pipeline)
python3 ~/nemoclaw-source-relevance-check.py

# JSON report to stdout
python3 ~/nemoclaw-source-relevance-check.py --report

# Auto-remove flagged sources
python3 ~/nemoclaw-source-relevance-check.py --auto-remove

# Dry-run (report without removing)
DRY_RUN=1 python3 ~/nemoclaw-source-relevance-check.py --auto-remove

# Custom threshold
THRESHOLD=0.0 python3 ~/nemoclaw-source-relevance-check.py
```

### Threshold tuning
- **-0.05** (default): removes sources that are semantically opposed to the note
- **0.0**: stricter — also removes sources with zero similarity
- **0.15**: very strict — removes anything not clearly related (high FP rate)
- **0.30**: aggressive — only keeps sources that are highly similar

Reports are saved to `/tmp/source_relevance_report.json`. The publish pipeline
warns but does not abort when irrelevant sources are detected — the human
reviews and cleans up.
