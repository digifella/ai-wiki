---
type: entity
tags:
  - "OpenAI"
  - "coding model"
  - "developer tools"
  - "openai-tools"
  - "code-generation"
  - "software-development"
  - "terminal-interaction"
  - "coding-models"
updated: 2026-04-14
aliases:
  - "Codex"
  - "OpenAI Codex"
  - "GPT-5.3 Codex"
  - "Codex AI"
  - "Coding Assistant"
summary: "Codex is an OpenAI model line focused on coding and [[concepts/software|software]] tasks, offering tools for terminal work and code generation."
title: "Codex"
---
# Codex
[[entities/openai|OpenAI]]'s [[concepts/coding|coding]]-focused model line and agent interface for [[concepts/software|software]] tasks, [[concepts/cli-tools|terminal]] work, and [[concepts/ai-coding|code generation]].

## Ecosystem
- [[entities/openai]]
- [[entities/chatgpt]]
- [[entities/sora]]

## Competitors
- **[[entities/gemini-cli|Gemini CLI]]** (Google's [[concepts/open-source|open-source]] AI [[concepts/coding|coding]] agent, introduced via [[entities/david-ondrej|David Ondrej]]'s CLI implementation, positioning itself as a direct competitor to Codex and [[concepts/claude-code|Claude Code]]) 2026 04 14 David Ondrej [[concepts/gemini|Gemini]] via CLI for coding

## Implementation (17 March 2026)
- **Collaboration with [[entities/claude|Claude]]:**
    - `site/admin/queue_api_shared.php`: Added `[[concepts/stakeholder-graph-view|stakeholder_graph_view]]` to `$JOB_TYPES` (hidden, no file upload) and `defaultScheduleType()` (returning 'window').
    - `site/lab/market_radar_api.php`: Added `[[concepts/stakeholder-graph-view|stakeholder_graph_view]]` to `mrQueueCortexJob()` allowed types and `$mrTypes` in both `list_mr_jobs` and `clear_mr_jobs`; added 3 new `[[concepts/api-actions|API actions]]`.

## Related Notes
- 2026 04 10 [[concepts/self-evolving-ai|Self Evolving AI]] [[concepts/automated-diagnostic-analysis|Autonomous Optimization]] via [[concepts/iterative-harness|Iterative Harness]]
- 2026 04 10 Nvidias Open Source [[concepts/ai-safety|Guardrails]] vs OpenAIs [[concepts/ai-agent|AI Agent]] [[concepts/consulting|Consulting]] Strategy
- 2026 04 10 Karpathys [[concepts/llm-wiki|LLM Wiki]] [[concepts/structured-ai-context|Beyond RAG]] for Persistent [[concepts/knowledge-bases|Knowledge Bases]]
- 2026 04 10 [[concepts/anti-gravity-ai|Anti Gravity AI]] [[concepts/ai-agent-configuration-backup|Agent Data Export]] and [[concepts/github-sync|GitHub Sync]] for Control
- 2026 04 10 [[concepts/agent-skills|Agent Skills]] 
- 2026 04 14 [[concepts/claude-ai|Claude]] and Codex 17 March 2026

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Recursive-Self-Improvement-The-Dawn-of-Intelligence-Explosion|AI Recursive Self Improvement The Dawn of Intelligence Explosion]] · [▶ source](https://www.youtube.com/watch?v=mhoFqhLXc3g)
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-17: [[lab-notes/2026-04-17-OpenAI-Codex-Becomes-Unified-AI-Everything-App-for-Software-Developmen|OpenAI Codex Becomes Unified AI Everything App for Software Developmen]] · [▶ source](https://www.youtube.com/watch?v=QW_07aHH_L4)
- 2026-05-01: [[lab-notes/2026-05-01-Local-vs.-Cloud-LLMs-for-Code-Generation-Performance-Com|Local vs. Cloud LLMs for Code Generation: Performance Comparison for an Interpreter Task]] · [▶ source](https://www.youtube.com/watch?v=TMwHAvNQjNw)