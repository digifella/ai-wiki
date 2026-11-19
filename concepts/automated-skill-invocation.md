---
type: concept
domain: tools-platforms-infrastructure
group: automation-scheduling-sync
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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Automated Skill Invocation

Automated Skill Invocation is a core capability of Claude Agents that enables the system to independently identify, select, and execute tools during task execution. This mechanism allows the agent to retrieve the appropriate tool from its available set and invoke it with the necessary parameters without direct human intervention. By autonomously determining when a skill is needed based on the current task context, the agent reduces the reliance on explicit human instructions for each individual tool use.

## Contextual Analysis and Selection

The process relies on the agent's ability to analyze the current conversation history and task requirements to determine the most suitable tool. The system evaluates the available tools against the immediate needs of the user's request, selecting the one that best aligns with the intended outcome. This selection is driven by contextual cues rather than predefined scripts, allowing for dynamic adaptation to varying inputs and complex workflows.

## Execution and Parameter Generation

Once a tool is selected, the agent generates the specific parameters required for invocation. This involves parsing the user's intent and any relevant context to construct a valid function call. The agent executes the tool and processes the resulting output, integrating the information back into the conversation flow to inform subsequent actions or final responses. This closed-loop process ensures that tool usage is tightly coupled with the evolving state of the task.
