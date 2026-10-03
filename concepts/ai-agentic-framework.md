---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "agentic-frameworks"
  - "autonomy"
  - "tool-use"
  - "planning"
  - "memory"
  - "hermes-agent"
  - "loop-feature"
aliases:
  - "AI Agentic Architecture"
  - "Autonomous AI Framework"
summary: An architectural paradigm enabling AI systems to autonomously perceive, reason, and act via planning, memory, and tool use, with notable implementations like Hermes Agent supporting automated recurring tasks.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-18T22:46:05+00:00" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# AI Agentic Framework

An architectural paradigm where AI systems autonomously perceive, reason, and act to achieve complex goals without continuous human intervention. Key components include planning, [[concepts/memory|memory]], tool use, and execution loops.

## Core Concepts

- **Autonomy**: The ability to operate independently within defined constraints.
- **Tool Use**: Integration with external APIs, code interpreters, or databases to perform actions.
- **Memory**: Short-term context management and long-term knowledge retrieval.
- **Planning**: Breaking down high-level goals into executable steps.

## Notable Implementations

- [[concepts/hermes-agent]]: An open-source agentic framework by [[entities/nous-research|Nous Research]].
  - Focuses on transparency and [[concepts/open-weight-models|open-weight models]].
  - Supports various LLM backends for flexibility.

## Recent Developments

- **[[entities/hermes-agent|Hermes Agent]] /loop Feature**:
  - Introduced automated recurring task capabilities.
  - Allows agents to execute tasks on a scheduled basis without manual triggering.
  - Demonstrated with [[entities/qwen38-27b|Qwen3.8 27B]] model for efficient loop management.
  - See [[lab-notes/2026-08-19-Hermes-Agents-New-loop-Feature-Automated-Recurring-Task|Hermes Agent's New /loop Feature: Automated Recurring Task Demo]] for hands-on details.

## References

- [Hermes Agent's New /loop Feature: Automated Recurring Task Demo](https://www.youtube.com/watch?v=ZBDBOJQ9tLc)
