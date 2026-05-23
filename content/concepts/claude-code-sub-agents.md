---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "claude-code"
  - "sub-agents"
  - "context-management"
  - "context-engineering"
  - "agentic-systems"
  - "anthropic"
aliases:
  - "Claude Code sub-agents"
summary: Claude Code sub-agents are used to address challenges in agentic systems such as context management and tool usage.
updated: 2026-05-23
group: anthropic-claude
---
# Claude Code Sub Agents

[[concepts/compact-command|Claude Code sub-agents]] are specialized autonomous components within [[entities/anthropic-institute|Anthropic]]'s [[concepts/ai-assisted-coding|Claude Code]] framework designed to handle specific tasks within larger [[concepts/agentic-patterns|agentic workflows]]. They function as subordinate [[concepts/agents|agents]] that can be instantiated and managed by a parent [[entities/agent|agent]], enabling more modular and scalable approaches to complex problems that would be difficult for a single agent to manage effectively.

## Primary Use Cases

Sub-agents address key challenges inherent to [[concepts/agentic-frameworks|agentic systems]], particularly in [[concepts/context-management|context management]] and tool usage. By distributing work across [[concepts/specialized-sub-agents|specialized sub-agents]], systems can maintain cleaner [[concepts/context-windows|context windows]], as each agent focuses on a narrower problem domain. This [[concepts/specialization|specialization]] also improves tool usage patterns, as sub-agents can be configured with specific tool access relevant to their assigned tasks rather than granting all tools to a single agent.

## Architecture and Implementation

The [[concepts/sub-agent-architecture|sub-agent pattern]] enables hierarchical [[concepts/task-decomposition|task decomposition]], where complex objectives are broken down into smaller, more manageable sub-tasks delegated to child agents. A parent agent determines when to spawn sub-agents, what tasks to assign them, and how to integrate their results back into the main [[concepts/workflow|workflow]]. This approach reduces cognitive load on individual agents and can improve both [[concepts/software-reliability|reliability]] and efficiency in multi-step [[concepts/problem-solving|problem-solving]] [[concepts/scenarios|scenarios]].
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Obsidian-Integration-Creating-a-Persistent-AI-Operating-System|Claude Obsidian Integration Creating a Persistent AI Operating System]] · [▶ source](https://www.youtube.com/watch?v=eIXheJcxDIg)