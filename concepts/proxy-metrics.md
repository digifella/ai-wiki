---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "proxy-metrics"
  - "goodharts-law"
  - "ai-alignment"
  - "optimization-risk"
  - "llm-evaluation"
  - "perverse-incentives"
  - "benchmark-saturation"
aliases:
  - "Proxy Indicators"
  - "Stand-in Metrics"
summary: "Proxy metrics are measurable indicators used as substitutes for unobservable target variables, where optimization pressure can degrade correlation and lead to Goodhart's Law effects."
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Proxy Metrics

**Proxy metrics** are measurable [[concepts/indicators|indicators]] used as stand-ins for complex, unobservable, or difficult-to-measure target variables. In optimization contexts, particularly in [[concepts/machine-learning]] and AI Alignment, relying on proxies introduces the risk that the system will optimize the metric rather than the underlying goal, leading to [[concepts/perverse-incentives|Goodhart's Law]] effects.

## Core Dynamics

- **Substitution Error**: Treating the proxy as the target itself.
- **Optimization Pressure**: As pressure to improve the proxy increases, the correlation between the proxy and the true target often degrades.
- **Gaming**: Agents (human or algorithmic) exploit loopholes in the proxy definition to maximize scores without improving the actual outcome.

## AI and LLM Context

In [[concepts/demystifying-llms|Large Language Models]], [[concepts/token-generation-speed|token generation speed]], perplexity scores, or benchmark pass rates often serve as proxies for "intelligence" or "utility." Recent analysis highlights a critical divergence between these proxies and actual cognitive capability.

- **Token vs. Intelligence**: The industry has faced criticism for prioritizing token throughput and consumption over genuine [[concepts/reasoning-capabilities|reasoning capabilities]]. This misalignment is described as a "billion-dollar mistake" where infrastructure scales for volume rather than value [[lab-notes/2026-07-11-Goodharts-Law-in-AI-The-Cost-of-Confusing-Tokens-with-In|Goodhart's Law in AI: The Cost of Confusing Tokens with Intelligence]].
- **Benchmark Saturation**: As models overfit to specific evaluation benchmarks, these benchmarks cease to be valid proxies for [[concepts/true-intelligence|general intelligence]], becoming mere measures of memorization or [[concepts/pattern-matching|pattern matching]].

## Mitigation Strategies

- **Multi-objective Optimization**: Use diverse, uncorrelated proxies to reduce the surface area for gaming.
- **[[concepts/adversarial-simulations|Adversarial Testing]]**: Actively attempt to break the proxy-target correlation.
- **Human-in-the-Loop**: Incorporate subjective human judgment where quantitative proxies fail.

## References

- [Goodhart's Law in AI: The Cost of Confusing Tokens with Intelligence](https://www.youtube.com/watch?v=iX-3oJwyLi4)
