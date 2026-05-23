---
type: concept
domain: ai-agents
summary: Agent orchestration is a method for multiple AI agents to work together on complex tasks by sharing a common workspace, context, and files—leveraging specialized sub-agents to automate task-specific configurations and eliminate manual handoffs.
updated: 2026-05-23
group: agent-systems-skills
---
# Agent Orchestration

A method for multiple [[concepts/agentic-ai|AI agents]] to work together on [[concepts/complex-tasks|complex tasks]] by sharing a common workspace, context, and [[concepts/files|files]]—eliminating manual handoffs between separate interactions.

## Core Principles
- **Shared workspace**: [[concepts/agents|Agents]] collaborate within a single environment instead of isolated chat sessions
- **Context [[concepts/preservation|preservation]]**: [[concepts/continuity|Continuity]] of task context across [[entities/agent|agent]] interactions
- **[[concepts/file-sharing|File sharing]]**: Agents access and modify shared documents during collaboration
- **Orchestration**: Central system (e.g., [[entities/claude-code]]) coordinates agent roles and handoffs
- **[[concepts/sub-agents|Sub-agents]]**: Specialized assistants within [[entities/claude-code|Claude Code]] that address challenges in [[concepts/context-management|context management]] and [[concepts/tool-selection|tool selection]] by using [[concepts/task-specific-configurations|task-specific configurations]] (customized [[concepts/system-prompts|system prompts]] and tools) 2026 04 14 Mastering [[concepts/claude-code-sub-agents|Claude Code sub agents]]

## Implementation Example
- **[[concepts/claude-code|Claude Code]] [[concepts/ai-work-team|AI Work Team]]** ([[entities/grace-leung|Grace Leung]], [[concepts/date-2026-04-13|2026]]):
  Uses [[entities/claude-code]] to build [[concepts/swarm-computing|orchestrated agent teams]] where:
  - Agents share context and files without user intervention
  - Complex tasks (e.g., [[concepts/code-generation|code generation]], analysis) are decomposed across sp
## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-08: Obsidian + Claude Code: The Second Brain [[concepts/setup|Setup That Actually Works]]
- 2026-04-10: What is [[concepts/claude|Claude Managed Agents?]]
- 2026-04-07: [[lab-notes/2026-04-07-DeepMind-Aletheia-Groundbreaking-Self-Correcting-AI-for-Scientific|DeepMind Aletheia Groundbreaking Self Correcting AI for Scientific]] · [▶ source](https://www.youtube.com/watch?v=Io_GqmbNBbY)
- 2026-04-26: Karpathy
- 2026-04-27: Claude AI · [▶ source](https://www.youtube.com/watch?v=Ph-maUAiSU8)