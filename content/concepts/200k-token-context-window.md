---
type: concept
domain: ai-agents
summary: A 200k-token context window enables AI models to process and maintain context for up to 200,000 tokens in a single input or conversation.
updated: 2026-05-23
group: reasoning-context-prompting
---
# 200k-token context window

A 200k-token [[concepts/context-window|context window]] enables [[concepts/ai-models|AI models]] to process and maintain context for up to 200,000 [[concepts/tokens|tokens]] in a single input or conversation. This significantly exceeds standard context [[entities/windows|windows]] (e.g., 8k–32k tokens), allowing for:
- Processing entire source [[concepts/code|code]] repositories or lengthy technical documents without truncation
- Maintaining coherent long-form [[concepts/reasoning|reasoning]] across extended dialogues
- Eliminating context resets during complex multi-step tasks

Key [[concepts/software|applications]]:
- [[entities/claude-code]]'s subagent [[concepts/architecture|architecture]] (each specialized subagent operates within its own dedicated 200k-token context)
- Handling full-stack application [[concepts/development-workflows|development workflows]] without [[concepts/context-loss|context loss]]
- Analyzing extensive documentation or research papers in single prompts

Example: In the [[concepts/claude-code|Claude Code]] [[concepts/workflow|workflow]] using sub-[[concepts/agents|agents]], [[concepts/specialized-sub-agents|specialized agents]] manage distinct tasks (e.g., [[concepts/code-generation|code generation]], [[concepts/debugging|debugging]]) within isolated 200k-token contexts, improving [[concepts/accuracy|accuracy]] and reducing cross-[[entities/agent|agent]] interference.

Backlink: 2026 04 14 [[concepts/developer-workflow|Claude Code workflow]] using [[concepts/sub-agents|sub agents]]
