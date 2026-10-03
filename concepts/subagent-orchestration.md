---
type: concept
domain: ai-agents
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
updated: 2026-07-12
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Subagent Orchestration

Subagent orchestration is an architectural pattern for coordinating multiple [[entities/claude-api|Claude agents]] to work together on [[concepts/complex-tasks|complex tasks]]. Rather than deploying a single monolithic agent, this approach divides work across [[concepts/specialized-sub-agents|specialized agents]] that operate under the direction of a central task manager. The task manager is typically implemented as a document derived from product requirements, which breaks down the overall [[concepts/purpose|objective]] into discrete subtasks and tracks their execution state.

## Architecture and Task Management

The core of subagent orchestration is a task manager document that functions as a shared state object. This document translates high-level product requirements into a structured set of subtasks, each assigned to an appropriate specialized agent. The task manager maintains visibility into task status, dependencies, and results, allowing agents to understand the broader context while focusing on their specific responsibilities.

## Coordination and Specialization

Each subagent is designed with particular [[concepts/expertise|expertise]] or capabilities suited to its assigned work. The orchestration pattern allows these agents to operate semi-independently while remaining coordinated through the shared task management layer. Agents can query the task manager to understand priorities, access results from other agents, and report completion status, enabling asynchronous or sequential execution depending on task dependencies.

This approach offers benefits in scalability, maintainability, and modularity compared to single-[[concepts/agentic-systems|agent systems]], particularly when handling tasks that naturally decompose into distinct workstreams or require different specialized capabilities.
## Source Notes
