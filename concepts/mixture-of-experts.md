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
  - "mistral-large-4"
  - "european-ai-sovereignty"
aliases:
  - "MoE"
summary: Mixture of Experts is a machine learning architecture that routes inputs to a subset of specialized sub-networks via a gating mechanism to scale capacity without proportional computational cost increases.
updated: 2026-10-07
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-07T19:38:25+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Mixture of Experts

**[[entities/mixture-of-experts|Mixture of Experts]] (MoE)** is a [[concepts/machine-learning|machine learning]] architecture where the input is routed to a subset of specialized sub-networks ("experts") via a gating mechanism. This approach enables [[concepts/computational-scaling|scaling]] model capacity without proportional increases in computational cost during [[concepts/ai-inference|inference]], as only a fraction of parameters are activated per token.

## Core Mechanics
- **Gating Network:** A lightweight [[concepts/neural-network|neural network]] that determines which experts should process the input and how their outputs should be weighted.
- **[[concepts/parameter-activation|Sparse Activation]]:** Only the top-k experts are selected for each input, significantly reducing latency and computational overhead compared to [[concepts/dense-models|dense models]].
- **[[concepts/load-balancing|Load Balancing]]:** Techniques to ensure experts are utilized evenly to prevent bottlenecks and improve training stability.

## Industry Adoption & Case Studies
- **[[concepts/mistral-large-4|Mistral Large 4]] ("Le Chonk"):** A recent example of MoE adoption for [[concepts/european-ai-sovereignty|European AI Sovereignty]]. Developed entirely in Europe from scratch, this 1-trillion parameter model uses MoE to achieve 49 billion [[concepts/activated-parameters|active parameters]], balancing massive capacity with [[concepts/context-efficiency|efficient inference]].
  - See detailed analysis: [[lab-notes/2026-10-07-European-AI-Sovereignty-Mistral-Large-4-Capabilities-Per|European AI Sovereignty: Mistral Large 4 Capabilities, Performance, Challenges]]
- **[[concepts/granite-suite|IBM Granite]] & [[concepts/enterprise-ai|Meta Muse]]:** Early adopters leveraging MoE for specialized domain tasks and large-scale language modeling.

## References
- Mistral is BACK! (Le Chonk) by [[entities/matthew-berman|Matthew Berman]]: [European AI Sovereignty: Mistral Large 4 Capabilities, Performance, Challenges](https://www.youtube.com/watch?v=Hu1JOK6aXsI)
