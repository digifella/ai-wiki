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
updated: 2026-05-01
title: Sub-agents
---
# Sub Agents

Sub-[[concepts/agents|agents]] are [[concepts/specialized-sub-agents|specialized agents]] that operate as components within larger, hierarchical [[concepts/agentic-systems|agent systems]]. Rather than functioning as standalone autonomous systems, sub-agents are designed to handle specific tasks or domains while remaining coordinated with a parent agent or orchestrating system. This [[concepts/architecture|architecture]] enables [[concepts/complex-workflows|complex workflows]] to be decomposed into manageable, specialized units that can operate with clear boundaries and defined responsibilities.

## Structure and Coordination

In a multi-agent system, sub-agents typically receive [[concepts/instructions|instructions]] or goals from a parent agent or central coordinator. They execute their designated functions—whether code execution, data retrieval, analysis, or other domain-specific tasks—and return results back to the higher-level system. This hierarchical arrangement allows for more sophisticated [[concepts/problem-solving|problem-solving]] than individual agents might achieve alone, as coordination and delegation distribute cognitive load across multiple specialized components.

## Practical Applications

Sub-agents are particularly valuable in complex workflows such as [[concepts/coding|software development]], data processing, and research tasks. In these contexts, one sub-agent might handle code generation while another manages [[concepts/testing|testing]] or documentation, all working within a unified framework. This modular approach has become increasingly relevant as [[concepts/large-language-model-llm|large language models]] are integrated with tools and specialized capabilities, allowing systems to maintain coherence across diverse technical requirements while delegating specific expertise to appropriately-configured agents.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)