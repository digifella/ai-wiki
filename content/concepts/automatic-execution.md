---
type: concept
domain: tools-platforms
tags:
  - "AI"
  - "Agent"
  - "Automation"
  - "Claude"
updated: 2026-04-15
group: automation-scheduling-sync
---
# Automatic Execution

The ability of a system to perform tasks without manual intervention, typically through pre-defined rules, scripts, or [[concepts/ai-agent-workflows|AI agent workflows]].

## Key Implementation Methods

- **[[entities/claude|Claude]] [[concepts/skills|Skills]]**: Reusable instruction manuals (folders containing [[concepts/instructions|instructions]], scripts, and resources) that teach [[concepts/ai-models|AI models]] like [[concepts/claude-ai|Claude]] *how* to execute tasks, including tool usage and [[concepts/open-standards|standards]]. Enables automatic execution of [[concepts/complex-workflows|complex workflows]] without repeated [[concepts/prompting|prompting]].
- **[[concepts/execution-orchestration|AI Agent Orchestration]]**: Using predefined agent behaviors (like [[concepts/instruction-reuse|Claude Skills]]) to chain actions across tools, reducing human oversight in multi-step processes.
- **Workflow [[concepts/templates|Templates]]**: Pre-configured execution paths (e.g., data processing, content generation) that trigger automatically upon input conditions.

## Related Concepts

- [[concepts/ai-agent|AI Agent]]
- [[concepts/workflow-automation]]
- [[entities/prompt-engineering]]
- [[concepts/claude-code]]

2026 04 14 [[entities/grace-leung|Grace Leung]] Claude skills
