---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "subagents"
  - "task-specialization"
  - "context-management"
  - "claude-code"
  - "workflow-optimization"
aliases:
  - "Sub-agents"
  - "Specialized agents"
  - "Task-specific agents"
summary: Subagents are specialized AI agent instances designed for task-specific workflows and optimized context management.
updated: 2026-07-12
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Subagents are specialized [[concepts/ai-agent|AI agent]] instances within a larger system, designed for [[concepts/task-specific-workflows|task-specific workflows]] and optimized [[concepts/context-management|context management]]. Each subagent operates within its own dedicated [[concepts/context-window|context window]] (e.g., 200,000 [[concepts/tokens|tokens]] in [[entities/claude-code]]), reducing [[concepts/cognitive-load|cognitive load]] and improving task [[concepts/solution|resolution]].

**Key characteristics:**
- Task-specialized [[concepts/expertise|expertise]] (e.g., [[concepts/debugging|debugging]], documentation, architecture)
- Isolated context [[concepts/preservation|preservation]] (prevents cross-task interference)
- Structured handoff between specialized roles
- Enhanced scalability for [[concepts/complex-workflows|complex workflows]]

**Example implementation & Insights:**
- [[entities/claude-code]] employs subagents to transform [[concepts/coding|coding]] from single-agent interactions into a coordinated workflow, enabling deeper problem decomposition and context-aware solutions beyond standard [[concepts/ai-agent|AI agent]] capabilities.
- [[concepts/claude-code|Claude Code]] utilizes a structured approach with subagents to extend functionality beyond standard [[concepts/ai-coding|AI coding]] [[concepts/agent-capabilities|agent capabilities]].
- Source: [[entities/ai-labs|AI Labs]] via [YouTube](https://www.youtube.com/watch?v=7Sx0o-41r2k).

**Backlinks:**
- 2026 04 14 [[concepts/developer-workflow|Claude Code workflow]] using [[concepts/sub-agents|sub agents]]

2026 04 14 [[entities/claude-code-workflow|Claude Code workflow]] using [[concepts/sub-agents|sub agents]]
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Maximizing-Claude-Code-20-Features-and-Tips-for-AI-Automation|Maximizing Claude Code 20 Features and Tips for AI Automation]] · [▶ source](https://www.youtube.com/watch?v=fUShvacDLtw)
- 2026-04-14: # a comprehensive
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)
