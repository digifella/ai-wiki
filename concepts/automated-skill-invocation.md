---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "claude-agent-skills"
  - "agent-skills"
  - "automation"
  - "ai-agents"
  - "skill-invocation"
aliases:
  - "Agent Skills"
  - "Claude Agent Skills"
summary: An overview of the Agent Skills feature for Claude Agents.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
group: automation-scheduling-sync
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Automated Skill Invocation

Automated [[concepts/skill|Skill]] Invocation is a core capability of [[entities/claude-api|Claude Agents]] that enables agents to independently identify, select, and execute tools during task execution. Rather than requiring explicit human [[concepts/instructions|instructions]] for each [[concepts/acting|tool use]], agents autonomously determine when a skill is needed based on the current task context. This mechanism allows the agent to retrieve the appropriate tool from its available set and invoke it with the necessary parameters without direct human intervention for every step.

This process relies on the agent's ability to analyze the immediate state of the workflow and match it against the descriptions and capabilities of available [[concepts/skills|skills]]. By evaluating the relevance of each tool to the ongoing [[concepts/purpose|objective]], the agent selects the most suitable option for the specific sub-task at hand. The invocation includes formatting the request according to the tool's schema, ensuring that the output is correctly interpreted for subsequent steps in the chain.

The feature supports complex [[concepts/ai-driven-workflow-automation|workflow automation]] by reducing the need for rigid, pre-defined scripts. Agents can dynamically adapt their tool usage as the context changes, allowing for more flexible and robust handling of diverse tasks. This autonomy is essential for [[concepts/computational-scaling|scaling]] [[concepts/agent-deployment|agent operations]], as it permits the system to manage intricate sequences of actions while maintaining [[concepts/coherence|coherence]] with the overall goal.
