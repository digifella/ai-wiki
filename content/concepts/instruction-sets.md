---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "agent"
  - "instruction"
  - "workflow"
updated: 2026-04-15
group: reasoning-context-prompting
---
# Instruction Sets

Reusable, structured collections of [[concepts/instructions|instructions]] defining how an [[concepts/ai-agent|AI agent]] performs tasks. Include tools, [[concepts/open-standards|standards]], and resources for consistent execution.

## Key Features
- **Reusable**: Apply across multiple tasks and contexts
- **Comprehensive**: Encompass [[concepts/task-description|task description]], tools, standards, and resources
- **Modular**: Organized as folders (e.g., [[concepts/claude-code]])

## Example: Claude Skills
[[concepts/instruction-reuse|Claude Skills]] ([[concepts/agent-skills|Agent Skills]]) are a specific implementation:
- **Reusable instruction manuals**: Folders containing instructions, scripts, and resources teaching [[concepts/claude-ai|Claude]] *how* to perform tasks, what tools to use, and what standards to follow
- **Structured format**: Typically includes `skill.json` and supporting files

See [[entities/grace-leung|Grace Leung]] Claude skills for detailed implementation examples.

## Related
- AI Agent
- [[concepts/workflow-automation]]
- [[entities/prompt-engineering]]

2026 04 14 [[entities/grace-leung|Grace Leung]] Claude skills

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-08: [[lab-notes/2026-04-08-Claude-Obsidian-Integration-Creating-a-Persistent-AI-Operating-System|Claude Obsidian Integration Creating a Persistent AI Operating System]] · [▶ source](https://www.youtube.com/watch?v=eIXheJcxDIg)
- 2026-04-22: AI Agent Skills · [▶ source](https://www.youtube.com/watch?v=Lg-meK5IU8Q)