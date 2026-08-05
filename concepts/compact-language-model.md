---
type: concept
domain: ai-agents
tags:
  - "small-language-models"
  - "edge-computing"
  - "parameter-efficiency"
  - "ai-optimization"
  - "on-device-ml"
aliases:
  - "Small Language Models"
  - "SLMs"
  - "Compact AI"
  - "Efficient LLMs"
summary: Compact Language Models are neural network architectures designed to maximize performance-per-parameter and reduce computational overhead while maintaining reasoning capabilities comparable to larger models.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Compact Language Model

**[[concepts/small-language-models-slms|Compact Language Models]]** (CLMs), often referred to as **[[concepts/small-language-models|Small Language Models]]** ([[concepts/slms|SLMs]]), are [[concepts/deep-learning-models|neural network architectures]] designed to maximize performance-per-parameter and reduce computational overhead while maintaining capability comparable to larger counterparts. They prioritize efficiency in [[concepts/inference|inference]], deployment constraints, and latency without significant degradation in [[concepts/reasoning|reasoning]] or generation quality.

## Key Characteristics
- **Parameter Efficiency**: Achieves high capability with significantly fewer parameters than [[concepts/foundation-model]] giants (often <10B params).
- **Deployment Flexibility**: Runs on [[concepts/edge-devices|edge devices]], local hardware, or constrained server environments due to lower [[concepts/4gb-memory|memory footprint]].
- **Reasoning [[concepts/density|Density]]**: Emerging architectures focus on "reasoning density," where smaller models are trained specifically for logical deduction and [[concepts/advanced-reasoning|complex problem-solving]] rather than just next-token [[concepts/user-attention-prediction|prediction]] breadth.

## Recent Developments & Case Studies
- **VibeThinker-3B (2026)**:
	- Developed by [[entities/weibo-ai-lab|Weibo AI Lab]], this [[concepts/3-billion-parameter-model|3-billion-parameter model]] demonstrates frontier-level [[concepts/reasoning-capabilities|reasoning capabilities]] that outperform significantly larger models in specific tasks.
	- Highlights the trend of specialized, compact models surpassing [[concepts/jacks-of-all-trades|generalist]] giants in efficiency and targeted [[concepts/ai-performance-evaluation|performance metrics]].
	- See also: [[lab-notes/2026-06-20-VibeThinker-3B-Small-Model-Achieves-Frontier-Reasoning-O|VibeThinker-3B: Small Model Achieves Frontier Reasoning, Outperforming Giants]]

## Technical Approaches
- **Distillation**: [[concepts/transfer-learning|Knowledge transfer]] from large teacher models to smaller student models.
- **Sparse [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE)**: Activating only a subset of parameters per inference step.
- **[[concepts/google-qat|Quantization-aware Training]]**: Optimizing [[concepts/parameters|weights]] for lower [[concepts/accuracy|precision]] formats (INT4/INT8) without loss of fidelity.
- **Synthetic [[concepts/data-curation|Data Curation]]**: Using [[concepts/excellence|high-quality]], reasoning-focused synthetic datasets to train smaller models effectively.

## References
- [VibeThinker-3B: Small Model Achieves Frontier Reasoning, Outperforming Giants](https://www.youtube.com/watch?v=_a9Vv5dfW24)
