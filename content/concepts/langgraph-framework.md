---
type: concept
domain: tools-platforms
tags:
  - "agent-framework"
  - "langchain"
  - "open-source"
  - "workflow-automation"
  - "agentic-ai"
aliases:
  - "LangGraph"
  - "Langgraph Workflows"
summary: An open-source framework used to build highly configurable agents, such as the LangChain Deep Research Agent.
updated: 2026-05-23
group: apis-integrations-mcp
---
# Langgraph Framework

[[concepts/langgraph|Langgraph]] is an [[concepts/open-source|open-source]] framework designed for building stateful, configurable [[concepts/agents|agents]] and [[concepts/agentic-frameworks|agentic systems]]. It extends the [[entities/langchain|LangChain]] ecosystem by providing infrastructure for managing complex [[concepts/multi-agent-workflows|agent workflows]] that require [[concepts/decision-making|decision-making]], state management, and multi-step [[concepts/reasoning|reasoning]]. The framework enables developers to define [[entities/agent|agent]] behavior through explicit [[concepts/power|control]] [[concepts/flow|flow]] rather than relying solely on [[concepts/statistical-language-modeling|language model]] decisions.

## Core Capabilities

The framework supports the creation of highly configurable agents by allowing developers to [[concepts/structure|structure]] agent logic as a series of steps or "[[concepts/nodes|nodes]]" connected by conditional transitions. This approach provides greater predictability and control compared to purely emergent agent behavior. Langgraph handles the orchestration of these workflows, managing state [[concepts/data-persistence|persistence]] and enabling agents to maintain context across multiple interactions.

## Applications

A notable application of Langgraph is the [[concepts/deep-research-agent|LangChain Deep Research Agent]], which demonstrates the framework's capability to support complex, multi-turn reasoning tasks. Such agents can decompose research problems, gather information from multiple sources, and synthesize findings—all while maintaining structured control over the execution flow. This makes Langgraph particularly suited for [[concepts/software|applications]] requiring transparent, auditable agent behavior.
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-05-01: [[lab-notes/2026-05-01-Modern-AI-Agentic-Harness-Architecture-Components-and-Fr|Modern AI Agentic Harness: Architecture, Components, and Framework Differences]] · [▶ source](https://www.youtube.com/watch?v=nWzXyjXCoCE)