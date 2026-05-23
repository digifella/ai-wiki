---
type: concept
domain: ai-agents
tags:
  - "model-selection"
  - "ensemble-methods"
  - "routing"
  - "cost-optimization"
  - "latency-tradeoffs"
  - "system-design"
  - "llm-orchestration"
aliases:
  - "multi-model systems"
  - "model routing"
  - "ensemble LLMs"
summary: Model Mixing combines multiple LLMs within a single system to optimize task performance, cost, and latency through specialization, ensemble methods, and dynamic routing.
updated: 2026-05-23
group: coding-agents-dev-workflows
---
```

# Model Mixing

**Model Mixing** refers to strategies and techniques for combining multiple [[concepts/large-language-model]]s (LLMs) or leveraging different [[concepts/models|models]] within a single system to optimize for specific tasks, balancing [[concepts/cost|cost]], latency, and performance.

## Core Principles

- **[[concepts/specialization|Specialization]] vs. Generalization**: Using smaller, [[concepts/custom-models|specialized models]] for rote tasks (e.g., formatting, parsing) and larger, more capable models for [[concepts/complex-reasoning|complex reasoning]] or creative generation.
- **Ensemble Methods**: Aggregating outputs from multiple models to reduce [[concepts/data-hallucination|hallucination]] rates and improve [[concepts/robustness|robustness]].
- **Routing**: Dynamically directing queries to the most appropriate model based on input complexity or user constraints.

## Critiques and Alternatives

Recent analysis suggests that the efficacy of AI systems may depend less on the raw capability of the underlying LLM and more on the structural [[concepts/design|design]] of the surrounding system.

- **The [[concepts/harness|Harness]] Hypothesis**: The "harness" ([[concepts/context-management|context management]], tool usage, error correction [[concepts/loops|loops]]) often outweighs the marginal gains of switching between top-tier LLMs. See [[lab-notes/2026-05-18-Optimizing-AI-Coding-Agents-Harness-Design-Over-LLM-Choi|Optimizing AI Coding Agents: Harness Design Over LLM Choice]] for details on how prompt [[concepts/architecture|architecture]] and [[entities/agent|agent]] logic can mitigate model limitations.
- **[[concepts/diminishing-returns|Diminishing Returns]]**: Blindly mixing models without optimizing the orchestration layer can lead to increased latency and complexity without proportional quality improvements.

## Related Concepts

- [[entities/agent|Agent]] [[concepts/design|Design]]
- [[entities/prompt-engineering]]
- LLM [[concepts/benchmark-testing|Benchmarking]]
- [[concepts/system-prompting]]
