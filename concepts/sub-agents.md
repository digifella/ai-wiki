---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "ai-agents"
  - "sub-agents"
  - "agent-systems"
  - "hierarchical-agents"
  - "agent-composition"
aliases:
  - "child-agents"
  - "nested-agents"
summary: Sub-agents are agents that function within larger agent systems.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
title: Sub-agents
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sub Agents

Sub-agents are specialized entities that operate as components within larger hierarchical or multi-agent systems, rather than functioning as independent units. They are designed to handle specific tasks, domains, or workflows while remaining coordinated with a parent agent or a central orchestrating system. This architectural pattern enables complex problems to be decomposed into smaller, more manageable units with clearly defined responsibilities and boundaries.

In a typical sub-agent system, a parent agent or orchestrator manages the delegation of work to these specialized sub-agents. The sub-agents execute their designated functions and return results to the orchestrator, which then integrates these outputs to form a cohesive solution. This structure allows for modular development and scaling, as individual sub-agents can be updated or replaced without disrupting the entire system.

The use of sub-agents facilitates efficient resource allocation and parallel processing. By distributing tasks across multiple specialized agents, the system can address complex queries or operations more effectively than a single monolithic agent might. Coordination mechanisms ensure that data flows correctly between components, maintaining consistency and accuracy throughout the workflow.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
