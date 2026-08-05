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
updated: 2026-07-18
title: Sub-agents
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sub Agents

Sub-agents are specialized agents that operate as components within larger hierarchical or multi-agent systems rather than functioning independently. They handle specific tasks, domains, or workflows while remaining coordinated with a parent agent or central orchestrating system. This architectural pattern allows complex problems to be decomposed into smaller, more manageable units with clearly defined responsibilities and boundaries.

## Structure and Coordination

In a typical sub-agent system, a parent agent or orchestrator manages the delegation of work to specialized sub-agents based on task requirements or domain expertise. Sub-agents maintain awareness of their role within the broader system and communicate results back to the coordinating layer. This creates a hierarchical structure where decision-making and task execution can be distributed across multiple agents, each optimized for particular types of problems or information domains.

## Practical Applications

Sub-agents are commonly employed in systems requiring handling of diverse, interconnected tasks—such as customer service platforms that route inquiries to specialized agents, research systems that distribute analysis across domain-specific models, or workflow automation where different processing stages require different capabilities. The approach reduces complexity by allowing each agent to maintain focused objectives while the parent system manages orchestration, priority, and integration of results across the network.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
