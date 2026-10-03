---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "mixture-of-experts"
  - "moe"
  - "architecture"
  - "deep-learning"
  - "sparse-activation"
  - "gating-mechanism"
  - "model-efficiency"
  - "llm-architecture"
  - "load-balancing"
  - "industry-adoption"
  - "ibm-granite"
  - "meta-muse"
  - "lunar-ai"
  - "nasa-ibm"
aliases:
  - "MoE"
summary: Mixture of Experts is a machine learning architecture that routes inputs to a subset of specialized sub-networks via a gating mechanism to scale capacity without proportional computational cost increases.
updated: 2026-09-28
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-27T21:45:22+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Mixture of Experts

**Mixture of Experts (MoE)** is a machine learning architecture where the input is routed to a subset of specialized sub-networks ("experts") via a gating mechanism. This approach enables scaling model capacity without proportional increases in computational cost during [[concepts/ai-inference|inference]], as only a fraction of parameters are activated per token.

## Core Mechanics
- **Gating Network:** A lightweight neural network that determines which experts should process the input and how their outputs should be weighted.
- **Sparse Activation:** Only the top-k experts are selected for each input, significantly reducing latency and energy consumption compared to dense models.
- **Load Balancing:** Training objectives often include penalties to prevent "expert collapse," ensuring all experts are utilized evenly.

## Industry Context & Evolution
- **Shift to Specialization:** Recent industry discourse highlights a strategic pivot from scaling model size alone toward efficiency and specialization [[lab-notes/2026-09-28-AI-Model-Evolution-Efficiency-Specialization-and-NASA-IB|AI Model Evolution: Efficiency, Specialization, and NASA-IBM Lunar AI]].
- **Collaborative Applications:** MoE architectures are increasingly relevant in high-stakes domains, such as the NASA-IBM collaboration for lunar AI systems, where resource constraints and specialized task handling are critical.
- **Ecosystem Trends:** The evolution of MoE is part of a broader trend involving entities like TypeSafe’s [[concepts/democratization-of-creativity|Jev AI]], emphasizing modular and efficient AI development.

## References
- [AI Model Evolution: Efficiency, Specialization, and NASA-IBM Lunar AI](https://www.youtube.com/watch?v=O4n1jtWzt30)
