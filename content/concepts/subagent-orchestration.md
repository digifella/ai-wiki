---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "claude-ai"
  - "product-development"
  - "task-management"
  - "agent-coordination"
  - "markdown-documentation"
aliases:
  - "agent-task-orchestration"
  - "multi-agent-coordination"
summary: Pattern for organizing multiple Claude agents using a task manager document derived from product requirements.
updated: 2026-05-01
---
# Subagent Orchestration

Subagent orchestration is an architectural pattern for coordinating multiple [[concepts/anthropic-ai|Claude AI]] [[concepts/agents|agents]] to work together on [[concepts/complex-tasks|complex tasks]]. Rather than deploying a single monolithic agent, this approach divides work across [[concepts/specialized-sub-agents|specialized agents]] that operate under the direction of a central task manager. The task manager is typically implemented as a document derived from product requirements, which breaks down the overall objective into discrete subtasks and routes them to appropriate agents.

## How It Works

The pattern relies on a shared task management layer that maintains state and coordinates execution flow. Product requirements are transformed into a structured task document that specifies what needs to be done, acceptance criteria, and task dependencies. Individual agents then pull work from this document, execute their assigned tasks, and report results back. This [[concepts/separation-of-concerns|separation of concerns]] allows each agent to focus on a narrow domain of expertise while maintaining visibility across the entire operation.

## Benefits and Use Cases

This approach [[concepts/musical-scales|scales]] better than single-[[concepts/agentic-systems|agent systems]] for problems with multiple distinct phases or specialized knowledge domains. It is particularly suited to workflows that involve sequential or [[concepts/parallel-work-streams|parallel work streams]]—such as analysis followed by synthesis, or multiple independent processing steps that later converge. The task manager document provides a natural audit trail and makes it easier to diagnose failures or restart interrupted work.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!