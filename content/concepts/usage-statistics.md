---
type: concept
domain: maths-cryptography
tags:
  - "analytics"
  - "monitoring"
  - "claude-code"
  - "resource-consumption"
  - "usage-metrics"
  - "session-management"
aliases:
  - "Claude Code metrics"
  - "Usage tracking"
summary: "Provides metrics and monitoring capabilities within Claude Code to track resource consumption, session history, and operational limits."
updated: 2026-04-18
group: probability-statistics-models
---
# Usage statistics

Backlink: 2026 04 14 Major updates for [[concepts/ai-assisted-coding|Claude Code]] [[entities/alex-finn|Alex Finn]]

Metrics and monitoring capabilities within [[entities/claude-code]] used to track resource consumption, [[concepts/session|session]] history, and operational limits.

### Key Monitoring Commands
- `/stats`: Provides usage metrics and tracks proximity to LLM Limits.
- `/context`: Inspects the current [[concepts/context-window]] to identify heavy contributors; essential for [[concepts/debugging|debugging]] [[concepts/data-hallucination|Hallucination]] or model non-[[concepts/compliance|compliance]].
- `[[concepts/claude-ai|claude]] --resume`: Allows for the reactivation of previous [[entities/claude-code]] sessions to preserve existing context.

## Source Notes

- 2026-04-23: Anthropic · [▶ source](https://www.youtube.com/watch?v=aO5k3haUz9Q)
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.