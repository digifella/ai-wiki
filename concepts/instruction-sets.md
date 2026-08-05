---
type: concept
domain: ai-agents
tags:
  - "instruction-sets"
  - "ai-agent"
  - "prompt-engineering"
  - "claude-skills"
  - "task-automation"
  - "agent-workflows"
aliases:
  - "Instruction Manuals"
  - "Agent Skills"
  - "Claude Skills"
  - "Task Instructions"
summary: Instruction Sets are reusable, structured collections of instructions that define how AI agents perform tasks by specifying tools, standards, and resources for consistent execution.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Instruction Sets

Reusable, structured collections of [[concepts/instructions|instructions]] defining how an [[concepts/ai-agent|AI agent]] performs tasks. Include tools, standards, and resources for consistent execution.

## Key Features
- **Reusable**: Apply across multiple tasks and contexts
- **Comprehensive**: Encompass [[concepts/task-description|task description]], tools, standards, and resources
- **Modular**: Organized as folders (e.g., [[concepts/claude-code]])

## Example: Claude Skills
[[concepts/instruction-reuse|Claude Skills]] ([[concepts/agent-skills|Agent Skills]]) are a specific implementation:
- **Reusable instruction manuals**: Folders containing instructions, scripts, and resources teaching [[concepts/claude-ai|Claude]] *how* to perform tasks, what tools to use, and what standards to follow
- **Structured format**: Typically includes `skill.json` and supporting files

See [[entities/grace-leung|Grace Leung]] [[concepts/progressive-disclosure|Claude skills]] for detailed implementation examples.

## Related
- [[entities/agent|AI Agent]]
- [[concepts/workflow-automation]]
- [[entities/prompt-engineering]]

2026 04 14 [[entities/grace-leung|Grace Leung]] [[concepts/tokens|Claude skills]]
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Obsidian-Integration-Creating-a-Persistent-AI-Operating-System|Claude Obsidian Integration Creating a Persistent AI Operating System]] · [▶ source](https://www.youtube.com/watch?v=eIXheJcxDIg)
- 2026-04-22: AI Agent Skills · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)
