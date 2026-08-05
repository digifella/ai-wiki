---
type: entity
tags:
  - "ai-model"
  - "coding-assistant"
  - "openai"
  - "code-generation"
  - "terminal-tools"
aliases:
  - "OpenAI Codex"
  - "GPT-5.3 Codex"
  - "Codex AI"
  - "Coding Assistant"
summary: Codex is an OpenAI model line focused on coding and software tasks, offering tools for terminal work and code generation.
updated: 2026-07-15
stub: true
title: Codex
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
status: draft
---
# Codex
[[entities/openai|OpenAI]]'s [[concepts/coding|coding]]-focused model line and agent interface for software tasks, [[concepts/cli-tools|terminal]] work, and [[concepts/ai-coding|code generation]].

## Ecosystem
- [[entities/openai]]
- [[entities/chatgpt]]
- [[entities/sora]]

## Competitors
- **[[entities/gemini-cli|Gemini CLI]]** ([[concepts/google-search|Google]]'s [[concepts/open-source|open-source]] AI [[concepts/coding|coding]] agent, introduced via [[entities/david-ondrej|David Ondrej]]'s CLI implementation, positioning itself as a direct competitor to [[concepts/codex|Codex]] and [[concepts/claude-code|Claude Code]]) 2026 04 14 [[entities/david|David]] Ondrej [[concepts/gemini|Gemini]] via CLI for coding
- **[[concepts/pi-agent|Pi Agent]]**: An [[concepts/open-source|open-source]] [[concepts/coding-agent-framework|coding agent framework]] emphasizing [[concepts/resilience|adaptability]] and extensibility, presented as an alternative to proprietary agents like Codex and [[concepts/ai-assisted-coding|Claude Code]]. See [[lab-notes/2026-07-15-Pi-Agent-Open-Source-Coding-Agent-Frameworks-Adaptabilit|Pi Agent: Open-Source Coding Agent Framework's Adaptability and Extensibility]] for details on its [[concepts/philosophy|philosophy]] and comparison to other agents.

## Implementation (17 March 2026)
- **Collaboration with [[entities/claude|Claude]]:**
    - `site/admin/queue_api_shared.php`: Added `[[concepts/stakeholder-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` (hidden, no file upload) and `defaultScheduleType()` (returning 'window').
    - `site/lab/market_radar_api.php`: Added `[[concepts/stakeholder-graph-view|stakeholder_graph_vi`

## References
- [Pi Agent: Open-Source Coding Agent Framework's Adaptability and Extensibility](https://www.youtube.com/watch?v=MsPhMhfvgD4)
