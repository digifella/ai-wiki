---
type: concept
domain: ai-agents
tags:
  - "agent"
  - "ai"
  - "coding"
  - "workflow"
  - "context"
  - "task-decomposition"
  - "context-window"
  - "incremental-generation"
  - "memory-buffers"
aliases:
  - "iterative-agent-workflow"
summary: "Agent Workflow is a structured sequence of iterative actions for AI agents to handle complex tasks through task decomposition, addressing context window limitations in long-running sessions."
updated: 2026-04-15
group: agent-systems-skills
---
# Agent Workflow

Structured sequence of actions for [[concepts/agentic-ai|AI agents]] to handle [[concepts/complex-tasks|complex tasks]], especially addressing **[[concepts/context-window|context window]] limitations** in [[concepts/long-running-sessions|long-running sessions]]. Key principle: avoid "one-shot" generation of large [[concepts/software|applications]].

- **Core Challenge**: [[concepts/ai-coding-agents|AI coding agents]] (e.g., [[entities/claude-ai]]) fail when attempting monolithic code generation due to [[concepts/context-window-limitations]].
- **Effective [[concepts/solution|Solution]]**: Iterative [[concepts/task-decomposition|task decomposition]] and refinement (adapted from [[entities/anthropic]]'s approach), breaking complex features into manageable steps.
- **Practical Implementation**:
  - Use incremental code generation with explicit context resets
  - Maintain task-specific [[concepts/memory|memory]] buffers
  - Validate intermediate outputs before proceeding
- **Source**: Fixing long [[concepts/running|running]] [[concepts/claude-code|Claude code]] sessions demonstrates this workflow for [[concepts/ai-coding|AI Coding]] Agent sessions.

2026 04 14 Fixing long running [[concepts/ai-assisted-coding|Claude code]] sessions

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Recursive-Self-Improvement-The-Dawn-of-Intelligence-Explosion|AI Recursive Self Improvement The Dawn of Intelligence Explosion]] · [▶ source](https://www.youtube.com/watch?v=mhoFqhLXc3g)
- 2026-04-08: [[lab-notes/2026-04-08-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Code-20-Upgrade-Enhanced-AI-Coding-Workflow-Automation-and|Claude Code 20 Upgrade Enhanced AI Coding Workflow Automation and]] · [▶ source](https://www.youtube.com/watch?v=ShTxTquBDxY)