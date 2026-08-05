---
type: concept
domain: science-physics-research
tags:
  - "concept"
  - "transformer-training"
  - "computational-scaling"
  - "pdp-11"
  - "artificial-intelligence"
  - "legacy-hardware"
aliases:
  - "scaling"
summary: The concept examines transformer training on a 1979 PDP-11 computer.
updated: 2026-07-11
group: scientific-modelling-discovery
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Computational Scaling

[[concepts/scale-effect|Computational scaling]] examines the relationship between available [[concepts/computational-resources|computational resources]], [[concepts/architecturetechnique|model architecture]] complexity, and training outcomes in [[concepts/machine-learning-systems|machine learning systems]]. It encompasses how processing power, [[concepts/memory|memory]] capacity, [[entities/storage|storage]], and data availability constrain or enable the development of increasingly sophisticated models. This concept is fundamental to understanding both the practical limitations and possibilities of [[concepts/machine-learning|machine learning]] research and deployment.

## Historical Context

Early machine learning systems operated within severe computational constraints. A transformer model trained on a [[entities/pdp-1144|1979 PDP-11]] computer would face fundamental barriers: the [[concepts/pdp-11-architecture|PDP-11]] typically offered 64 kilobytes to a few megabytes of addressable memory, processing speeds measured in kilohertz, and no specialized hardware for numerical computation. This historical perspective illustrates how [[concepts/scaling|computational scaling]] has evolved, as modern training runs leverage GPUs and [[entities/tpus|TPUs]] with gigabytes of memory and teraflops of processing power—improvements spanning many orders of magnitude.

## Scaling Laws and Modern Research

Contemporary research has identified empirical [[concepts/scaling-laws|scaling laws]] that describe how [[concepts/vllm|model performance]] improves with increased [[concepts/feynmans-three-step-scientific-method|compute]], data, and [[concepts/code-size|model size]]. These [[concepts/relationships|relationships]] suggest that larger models trained on more data with more [[concepts/compute-capacity|computational resources]] achieve better results, following predictable power-law trends. Understanding computational scaling is essential for researchers planning experiments, allocating resources efficiently, and predicting how architectural or algorithmic improvements might benefit from additional compute.

## Practical Implications

Computational scaling shapes what is feasible in practice. Resource constraints determine whether researchers can train models of a given size, how long training takes, and what techniques become viable. The democratization of machine learning has partially addressed historical inequities by increasing access to [[concepts/cloud-based-solutions|cloud computing]] resources, though significant [[concepts/hardware-limitations|computational barriers]] still exist for many research groups and developing regions.
## Source Notes
- 2026-04-11: [[lab-notes/2026-04-11-Claudes-Advisor-Strategy-Monitor-Tool-and-Managed-Agents-for-AI-Develo|Claudes Advisor Strategy Monitor Tool and Managed Agents for AI Develo]] · [▶ source](https://www.youtube.com/watch?v=Q-QznaH1WS0)
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
- 2026-04-26: DeepSeek · [▶ source](https://www.youtube.com/watch?v=nHDnyNzvF50)
