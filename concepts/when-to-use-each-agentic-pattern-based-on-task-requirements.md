---
type: concept
domain: ai-agents
tags:
  - "agent-patterns"
  - "task-requirements"
  - "agent-selection"
  - "multi-agent-systems"
  - "agent-design"
aliases:
  - "Agentic Pattern Selection"
  - "Agent Pattern Matching"
summary: Framework for selecting appropriate agentic patterns based on specific task characteristics and requirements.
updated: 2026-07-09
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-09" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# When To Use Each Agentic Pattern Based On Task Requirements

Selecting the appropriate agentic pattern depends on several key task characteristics: problem complexity, degree of required autonomy, need for [[concepts/coordination|coordination]] between agents, and whether the task has a clear decomposition strategy. Single-agent patterns suit well-defined problems with clear objectives and linear workflows, while multi-agent patterns become necessary when tasks require diverse [[concepts/expertise|expertise]], [[concepts/parallel-processing|parallel processing]], or distributed [[concepts/decision-making|decision-making]]. The choice also reflects practical constraints around [[concepts/computational-resources|computational resources]], latency requirements, and the availability of pre-built capabilities versus the need for [[concepts/emergent-behavior|emergent behavior]].

## Task Complexity and Agent Count

Simple, sequential tasks typically benefit from reactive or deliberative single-agent architectures that follow predetermined [[concepts/open-source-philosophy|logic]] or respond to specific stimuli. As task complexity increases—particularly when problems involve multiple interdependent sub-problems or require handling uncertainty across domains—[[concepts/expertise-based-ai-assistants|multi-agent systems]] become more appropriate. Hierarchical patterns work well when clear authority structures and [[concepts/task-decomposition|task decomposition]] strategies exist, whereas peer-to-peer or swarm patterns better suit problems where no single agent has sufficient information to guide the entire process.

## Coordination Requirements

Tasks requiring tight coupling between [[concepts/specialized-sub-agents|specialized agents]] often use coordinated multi-agent patterns with explicit communication protocols and shared goals. Loosely coupled tasks where agents can operate more independently may benefit from stigmergic or blackboard-[[concepts/style|style]] coordination, where agents interact indirectly through shared information spaces rather than direct [[concepts/communication|messaging]]. High-stakes domains like logistics or scientific research may require deterministic coordination strategies, while exploratory or creative tasks might leverage more emergent coordination [[concepts/causes|mechanisms]].

## Scalability and Runtime Constraints

Pattern selection must account for scalability demands and computational budgets. Single-agent patterns scale in capability but not in distributed [[concepts/problem-solving|problem-solving]]. Swarm and multi-agent patterns can scale horizontally but introduce coordination overhead and potential communication bottlenecks. Real-time systems often favor simpler reactive patterns, while batch or offline tasks can support more computationally intensive deliberative approaches with extensive planning and negotiation phases.
