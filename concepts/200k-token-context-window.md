---
type: concept
domain: ai-agents
tags:
  - "context-window"
  - "large-language-models"
  - "token-capacity"
  - "ai-memory"
  - "claude-code"
aliases:
  - "200k context"
  - "extended context window"
  - "long-context processing"
summary: A 200k-token context window enables AI models to process and maintain context for up to 200,000 tokens in a single input or conversation.
updated: 2026-07-04
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-04" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# 200k-token context window

A 200k-token [[concepts/context-window|context window]] enables [[concepts/ai-models|AI models]] to process and maintain context for up to 200,000 [[concepts/tokens|tokens]] in a single input or conversation. This significantly exceeds standard context [[entities/windows|windows]] (e.g., 8k–32k tokens), allowing for:
- Processing entire source code repositories or lengthy technical documents without truncation
- Maintaining coherent long-form [[concepts/reasoning|reasoning]] across extended dialogues
- Eliminating context resets during complex multi-step tasks

Key applications:
- [[entities/claude-code]]'s subagent architecture (each specialized subagent operates within its own dedicated [[concepts/200k-context-window|200k-token context]])
- Handling full-stack application [[concepts/development-workflows|development workflows]] without [[concepts/context-loss|context loss]]
- Analyzing extensive documentation or research papers in single prompts

Example: In the [[concepts/claude-code|Claude Code]] workflow using [[concepts/subagents|sub-agents]], [[concepts/specialized-sub-agents|specialized agents]] manage distinct tasks (e.g., [[concepts/code-generation|code generation]], [[concepts/debugging|debugging]]) within isolated 200k-token contexts, improving accuracy and reducing cross-agent interference.

Backlink: 2026 04 14 [[concepts/developer-workflow|Claude Code workflow]] using [[concepts/sub-agents|sub agents]]
