---
type: concept
domain: ai-agents
tags:
  - "ai-coding-agents"
  - "conversation-management"
  - "context-optimization"
  - "agent-workflow"
  - "prompt-engineering"
aliases:
  - "agent-harness-design"
  - "long-running-agent-management"
summary: This document outlines a workflow for managing long-running AI coding agents using effective harnesses.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Conversation Compaction

Conversation compaction is a technique for managing [[concepts/context-window-limitations|context window limitations]] in long-running [[concepts/ai-coding-agents|AI coding agents]]. As agents execute extended workflows—such as complex [[concepts/code-generation|code generation]], [[concepts/debugging|debugging]], or multi-step development tasks—their conversation histories accumulate substantially. This growth consumes token budgets rapidly and degrades [[concepts/vllm|model performance]], as the [[concepts/statistical-language-modeling|language model]] must process increasingly lengthy context with each new interaction.

## Core Problem

The fundamental challenge arises from the finite nature of [[concepts/context-windows|context windows]] in language models. Long-running agents maintain full conversation histories to preserve task [[concepts/continuity|continuity]] and [[concepts/reasoning|reasoning]] context. However, as these histories expand over dozens or hundreds of interactions, earlier exchanges become less relevant while occupying valuable token space that could be allocated to current problems or new information.

## Implementation Approach

Conversation compaction reduces context overhead by summarizing, filtering, or abstracting earlier conversation segments while preserving essential information needed for task continuation. Effective compaction strategies identify which historical exchanges remain critical for current execution—such as decisions made, constraints established, or code structures defined—and discard redundant or resolved discussions. This allows agents to maintain functional context [[entities/windows|windows]] across longer workflows without constant token depletion.

## Practical Application

For [[concepts/mcps|AI coding agents]], compaction typically occurs at logical breakpoints in extended tasks: after completing major phases, resolving particular bugs, or finishing substantial code modules. Agents may summarize completed work, retain only the final outputs and key decisions, and discard intermediate attempts. This enables agents to work on projects spanning thousands of [[concepts/tokens|tokens]] of actual development while remaining within practical token budget constraints.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Optimizing-Claude-Code-Hidden-Settings-for-Workflow-Output-and-Privacy|Optimizing Claude Code Hidden Settings for Workflow Output and Privacy]] · [▶ source](https://www.youtube.com/watch?v=pDoBe4qbFPE)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
