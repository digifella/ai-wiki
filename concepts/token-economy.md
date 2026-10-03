---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "sub-agents"
  - "context-engineering"
  - "api-optimization"
  - "claude-code"
  - "best-practices"
  - "token-efficiency"
aliases:
  - "sub-agent implementation"
  - "Claude Code optimization"
summary: This concept discusses best practices and pitfalls when using sub-agents within Claude Code, focusing on context engineering and optimization.
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Token Economy

Token economy in the context of AI agents refers to the strategic management of computational resources and API costs when implementing multi-agent systems within Claude Code. As agent systems scale in complexity, the cumulative token usage across multiple sub-agents can quickly become prohibitively expensive if not carefully managed. Each interaction with a language model consumes tokens, and in architectures where agents delegate tasks to specialized sub-agents, these costs multiply across the chain of operations.

## Context Engineering

Effective token economy requires careful context engineering—deliberately structuring what information each agent receives and maintains. Rather than passing complete conversation histories or full system contexts to every sub-agent, selective context sharing minimizes redundant token consumption. This involves identifying which information is essential for each agent's specific task and omitting irrelevant details. Agents should be designed with narrow, well-defined responsibilities so they operate on focused context windows rather than bloated ones.

## Common Pitfalls

Several patterns lead to poor token economy in multi-agent systems. Redundant prompting occurs when similar instructions are repeated across multiple agents without consolidation. Excessive context passing—sending large amounts of information that agents don't actually need—wastes tokens unnecessarily. Circular agent interactions where agents repeatedly query one another can compound costs exponentially. Inefficient state management, where agents maintain and pass along unnecessary historical data, also contributes to bloat.

## Optimization Practices

Effective token economy relies on explicit choices about agent design and communication patterns. Agents should be designed with clear input/output contracts that specify exactly what context they require. Caching common system prompts and reusing them across multiple agent instances reduces duplication. Regular auditing of actual token usage during development helps identify unexpected consumption patterns before systems reach production scale.

## Source Notes
- 2026-04-26: DeepSeek V4: China
