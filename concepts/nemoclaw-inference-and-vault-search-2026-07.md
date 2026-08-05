---
type: concept
domain: ai-agents
tags:
  - "nemoclaw"
  - "lm-studio"
  - "local-inference"
  - "gpu-management"
  - "agent-operations"
  - "troubleshooting"
aliases:
  - "NemoClaw LM Studio migration"
  - "NemoClaw inference architecture 2026-07"
  - "vault search timeout fix"
summary: Operational changelog for the NemoClaw agent stack (July 2026) — agent inference moved from Ollama to a shared LM Studio server to end GPU double-loading, and vault search latency was fixed by restoring ripgrep and bounding all slow fallback paths.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# NemoClaw — inference and vault-search changes (July 2026)

**Agent note:** this page summarises two operational changes to the [[concepts/nemoclaw|NemoClaw]] stack made on 2026-07-04. Full internal detail (endpoints, paths, patches) lives in the private ops repo (`nemoclaw_ops`, dated doc + patches directory) and in the private vault's How-To [[concepts/notes|notes]] — this public page intentionally omits host and network specifics.

## 1. Agent inference now served by LM Studio, not Ollama

The sandbox agent's model ([[concepts/qwen3-model|Qwen 3.6]] 27B) is now served by a single shared **[[concepts/lm-studio|LM Studio]]** instance rather than being loaded a second time under [[concepts/task-specific-modeling|Ollama]].

**Why:** the host GPU (46 GB) can hold only one copy of a 27B model alongside its serving stack. When onboarding tried to [[concepts/prime-lens|prime]] a duplicate copy via [[entities/ollama|Ollama]], the load spilled to CPU and generation slowed to minutes, failing the onboarding [[concepts/health|health]] probe. The fix routes the agent's OpenAI-compatible [[concepts/inference|inference]] to the already-resident [[entities/lm-studio|LM Studio]] model — one model, one load, no contention.

**Operational notes for agents:**

- The wiki knowledge [[concepts/loop|loop]] is a separate consumer and **still uses Ollama** — the two must not be conflated.
- The provider integration required small local patches to the vendored `nemoclaw` npm package; these are **lost on package update** and must be re-applied from the ops repo's patches directory.
- A failed onboarding can orphan the dashboard port-forward, which then blocks every retry at preflight with a "port not available" error — clear the stale forward processes before retrying.
- The first agent reply after LM Studio idle-unloads the model takes one to two minutes while it reloads. This is expected behaviour, not a hang.

## 2. Vault search timeouts fixed

Every conversational vault search had begun timing out at the 30-second cap. Three compounding latency sinks were found in the keyword-search stage, all related to scanning a large note collection on a slow cross-OS filesystem bridge:

1. **ripgrep was missing**, so searches silently fell back to reading every note file in both vaults one by one (2–3 minutes per query). Installing ripgrep restored the fast path.
2. A **full recursive directory listing ran on every query** even when unused (~80 seconds on the larger vault). It is now lazy and uses ripgrep's file lister.
3. When ripgrep timed out on a cold filesystem, the code **fell back to an even slower full scan**. It now skips file-based keyword [[concepts/recall|recall]] for that vault instead — lexical [[concepts/retrieving|recall]] is still provided by full-text anchors inside the semantic (vector) search stage, so results degrade gracefully.

**Result:** worst-case query time went from ~200 seconds to ~15 seconds; typical queries [[concepts/solution|answer]] in about 5 seconds.

**Design takeaway:** never let a timeout fall back to a slower method than the one that timed out — degrade by *skipping* the stage, provided another stage (here, [[concepts/hybrid-search|hybrid semantic + lexical search]]) still covers the recall.
