---
type: concept
domain: biology-life-sciences
tags:
  - "evolutionary-algorithms"
  - "black-box-optimization"
  - "gradient-free-learning"
  - "llm-fine-tuning"
  - "parameter-mutation"
  - "selection-pressure"
aliases:
  - "Evolution Strategies"
  - "ES"
  - "Black-box Optimization Methods"
  - "Gradient-free Optimization"
summary: Evolution Strategies are evolutionary algorithms that optimize parameters through mutation and selection without requiring gradient information, recently finding renewed application in fine-tuning large language models.
updated: 2026-07-11
group: evolution-ecology-natural-systems
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=biology-life-sciences name=Biology & Life Sciences

# Evolution Strategies

**Evolution Strategies (ES)** are a family of Evolutionary [[concepts/algorithms|Algorithms]] that use mutation and selection to optimize parameters, often operating without gradient information. While historically deemed inefficient for high-dimensional [[concepts/neural-network]]s compared to [[concepts/backpropagation]], recent developments suggest a resurgence in specific domains.

## Core Mechanics
- **Black-box Optimization**: ES treats the [[concepts/purpose|objective]] function as a black box, querying it to estimate gradients or directly selecting superior candidates.
- **Parameter Mutation**: Perturbs [[concepts/model-weights|model weights]] or hyperparameters based on a distribution, followed by evaluation.
- **Selection Pressure**: Retains and reproduces high-performing variants, mimicking natural selection.

## Historical Context & Limitations
- Traditionally overshadowed by Stochastic Gradient Descent due to sample inefficiency in high-dimensional spaces.
- Previously considered unsuitable for training complex Deep [[concepts/learning|Learning]] architectures due to computational overhead.

## Recent Developments: LLM Fine-tuning
- **Resurgence**: Unexpected renewed interest in applying ES to [[concepts/large-language-model]]s, challenging prior assumptions about scalability [[lab-notes/2026-06-01-Evolution-Strategies-for-Fine-tuning-Large-Language-Mode|Evolution Strategies for Fine-tuning Large Language Models]].
- **Application**: Utilized for [[concepts/pre-trained-llms|fine-tuning LLMs]], offering an alternative to Gradient-Based [[concepts/fine-tuning|Fine-tuning]] methods like [[concepts/lora-adapter|LoRA]] or full-parameter tuning.
- **Efficiency Gains**: Recent studies indicate potential for efficient adaptation in specific [[concepts/scenarios|scenarios]], bypassing the need for explicit gradient computation during the optimization [[concepts/loop|loop]].

## See Also
- Genetic Algorithms
- Gradient-Free Optimization
- [[concepts/machine-learning]]
