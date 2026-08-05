---
type: concept
domain: ai-agents
tags:
  - "context-management"
  - "ai-agents"
  - "prompt-engineering"
  - "summarization"
  - "code-generation"
  - "stepwise-execution"
aliases:
  - "Context Compression"
  - "Progressive Context Management"
  - "Stepwise Context Pruning"
  - "AI Context Overflow Solution"
summary: Context Compaction is a technique for managing AI context limits by summarizing progress and preserving critical information while discarding less relevant details during long-running tasks.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Context Compaction

A technique to manage AI context overflow in long-running tasks by selectively preserving critical information while discarding less relevant details. Solves the core limitation of fixed context [[entities/windows|windows]] in models like [[entities/claude]] during complex [[concepts/code-generation|code generation]].

## Key Principles

- **Replaces "one-shot" [[concepts/coding|coding]]** with **stepwise execution** (e.g., generating one function at a time instead of entire modules)
- **Summarizes progress** after each step (e.g., "Implemented `calculate_total` with test coverage")
- **Preserves decision [[concepts/open-source-philosophy|logic]]** while pruning redundant code/output
- **Maintains task coherence** across multiple agent interactions

## Workflow Implementation

1. Break feature into atomic subtasks (e.g., "Write auth module → test → [[concepts/deployment|deploy]]")
2. After each step, generate **compact context summary** (max 20% of original context)
3. Use summary as new context for next step
4. **Never exceed [[concepts/context-window|context window]]** by design

## Why It Works

- Avoids [[concepts/context-window]] saturation during extended sessions
- Maintains model's **task understanding** through progressive [[concepts/summarization|summarization]]
- Enables **long-running agents** to handle complex projects (e.g., full application builds)
- Proven effective for [[concepts/ai-agent|AI Agent]] code generation in production environments

## Related Concepts

- [[entities/agent|AI Agent]]
- [[concepts/context-window]]
- [[concepts/ai-coding]]
- Stepwise [[concepts/problem-solving|Problem Solving]]

2026 04 14 Fixing long running [[concepts/ai-assisted-coding|Claude code]] sessions
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Optimizing-Claude-Code-Hidden-Settings-for-Workflow-Output-and-Privacy|Optimizing Claude Code Hidden Settings for Workflow Output and Privacy]] · [▶ source](https://www.youtube.com/watch?v=pDoBe4qbFPE)
- 2026-04-10: [[lab-notes/2026-04-10-OpenClaw-and-Obsidian-Integration-for-Enhanced-AI-Agent-Memory-and-Col|OpenClaw and Obsidian Integration for Enhanced AI Agent Memory and Col]] · [▶ source](https://www.youtube.com/watch?v=6V-b073qhPA)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
