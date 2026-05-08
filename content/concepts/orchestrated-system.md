---
domain: ai-agents
group: agent-systems-skills
type: concept
tags:
  - "ai"
  - "agent-system"
  - "orchestration"
  - "multi-agent"
updated: 2026-04-14
---
# Orchestrated System

A coordinated framework where multiple autonomous [[concepts/agentic-ai|agents]] collaborate through shared context, workspace, and file systems to execute [[concepts/complex-tasks|complex tasks]] without manual intervention, moving beyond isolated chatbot interactions.

## Key Characteristics
- **Shared Context**: [[concepts/agents|Agents]] maintain persistent context across interactions (no copy-pasting between sessions)
- **Unified Workspace**: Collaborative environment with shared [[concepts/files|files]] and state
- **Task Coordination**: [[concepts/agents|Agents]] dynamically assign roles (e.g., Planner, Worker, Critic) under a coordinating "Orchestrator" layer for complex [[concepts/workflow|workflows]]
- **Autonomy**: Agents operate independently while adhering to shared objectives

## Implementation Examples
- **[[concepts/claude-code|Claude Code]] [[concepts/ai-work-team|AI Work Team]]**: Demonstrates building an [[concepts/orchestrated-system|orchestrated system]] using [[entities/claude-code]] where agents share workspace/files to collaborate on tasks (e.g., [[concepts/ai-coding|code generation]], analysis). Includes comprehensive [[concepts/tutorial|tutorial]] by [[entities/grace-leung|Grace Leung]]: [Building an Autonomous AI Work Team with Claude Code](https://youtu.be/0J2_YGuNrDo).
- **IBM AI Trends**: [Multi-agent Orchestration in Practice](https://youtu.be/zt0JA5rxdfM) showing Planner/Worker/Critic [[concepts/agent-collaboration|agent collaboration]].

## References
- 2026 04 14 [[concepts/ai-assisted-coding|Claude Code]] and agent team [[entities/grace-leung|Grace Leung]]

## Source Notes
- 2026-04-10: [[lab-notes/2026-04-10-Claude-Managed-Agents-API-Suite-for-Building-and-Deploying-Autonomous-|Claude Managed Agents API Suite for Building and Deploying Autonomous ]] · [▶ source](https://www.youtube.com/watch?v=NLWiIj47IdI)