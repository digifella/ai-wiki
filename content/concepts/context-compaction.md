---
type: concept
domain: ai-agents
updated: 2026-05-23
group: reasoning-context-prompting
---
# Context Compaction

A technique to manage AI context overflow in long-[[concepts/running|running]] tasks by selectively preserving critical information while discarding less relevant details. Solves the core limitation of fixed context [[entities/windows|windows]] in [[concepts/models|models]] like [[entities/claude]] during complex [[concepts/code-generation|code generation]].

## Key Principles

- **Replaces "one-shot" [[concepts/coding|coding]]** with **stepwise execution** (e.g., generating one function [[concepts/assistive-technology|at]] a time instead of entire modules)
- **Summarizes progress** after each step (e.g., "Implemented `calculate_total` with test coverage")
- **Preserves decision logic** while pruning redundant code/output
- **Maintains task coherence** across multiple agent interactions

## Workflow Implementation

1. Break feature into atomic subtasks (e.g., "Write auth module → test → deploy")
2. After each step, generate **compact context [[concepts/summary|summary]]** (max 20% of original context)
3. Use summary as new context for next step
4. **Never exceed [[concepts/context-window|context window]]** by [[concepts/design|design]]

## Why It Works

- Avoids [[concepts/context-window]] saturation during extended sessions
- Maintains model's **task understanding** through progressive [[concepts/summarization|summarization]]
- Enables **long-running [[concepts/agents|agents]]** to handle complex projects (e.g., full application builds)
- Proven effective for [[concepts/ai-agent|AI Agent]] code generation in production environments

## Related Concepts

- [[entities/agent|AI Agent]]
- [[concepts/context-window]]
- [[concepts/ai-coding]]
- Stepwise [[concepts/problem-solving|Problem Solving]]

2026 04 14 Fixing long [[concepts/running|running]] [[concepts/ai-assisted-coding|Claude code]] sessions
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Optimizing-Claude-Code-Hidden-Settings-for-Workflow-Output-and-Privacy|Optimizing Claude Code Hidden Settings for Workflow Output and Privacy]] · [▶ source](https://www.youtube.com/watch?v=pDoBe4qbFPE)
- 2026-04-10: [[lab-notes/2026-04-10-OpenClaw-and-Obsidian-Integration-for-Enhanced-AI-Agent-Memory-and-Col|OpenClaw and Obsidian Integration for Enhanced AI Agent Memory and Col]] · [▶ source](https://www.youtube.com/watch?v=6V-b073qhPA)
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)