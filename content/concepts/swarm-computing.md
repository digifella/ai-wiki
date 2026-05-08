---
type: concept
domain: tools-platforms
group: platforms-runtimes-environments
tags:
  - "multi-agent-systems"
  - "ai-orchestration"
  - "agent-coordination"
  - "distributed-computing"
  - "agent-frameworks"
aliases:
  - "multi-agent orchestration"
  - "agent swarms"
  - "orchestrated agent teams"
summary: A computing approach where a team of agents, including a Planner, Worker, and Critic, collaborate under a coordinating orchestrator layer.
updated: 2026-05-01
---
# Swarm Computing

Swarm Computing is a distributed computing approach where multiple autonomous [[concepts/agents|agents]] work together to solve problems or complete tasks. Rather than operating independently, these agents coordinate their efforts through a central orchestration layer that manages their interactions and ensures coherent collaboration toward shared objectives.

## Core Components

The typical swarm computing [[concepts/architecture|architecture]] consists of three primary agent roles. The Planner agent determines strategy and breaks down tasks into components. The Worker agent executes assigned tasks and performs the actual computational work. The Critic agent evaluates outcomes, identifies issues, and provides [[concepts/feedback|feedback]] to improve performance. An Orchestrator layer sits above these agents, managing task [[concepts/distribution|distribution]], synchronizing activities, and facilitating communication between components.

## Relationship to Multi-Agent Systems

Swarm Computing represents a specific implementation of [[concepts/multi-agent-ai-management|multi-agent orchestration]] principles. It extends beyond simple agent interaction by introducing structured coordination mechanisms that allow heterogeneous agents with different capabilities and responsibilities to function as an integrated system. This approach has gained [[concepts/attention-mechanisms|attention]] as [[concepts/ai-technologies|artificial intelligence]] systems become more complex and require specialized components for planning, execution, and [[concepts/quality-assurance|quality assurance]].
