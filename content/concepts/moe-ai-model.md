---
type: concept
domain: ai-agents
tags:
  - "ai/mixture-of-experts"
  - "ai/architecture"
  - "llm"
  - "efficiency"
  - "sparse-ml"
  - "inference"
  - "mixture-of-experts"
  - "sparse-activation"
  - "conditional-computation"
  - "routing-mechanism"
  - "parameter-scaling"
  - "inference-efficiency"
  - "expert-networks"
aliases:
  - "MoE"
  - "Mixture of Experts architecture"
  - "sparse expert model"
summary: MoE is a conditional computation architecture that routes input tokens through a sparse subset of expert networks via a gating mechanism, enabling parameter scaling with bounded per-token compute cost.
updated: 2026-05-23
group: model-efficiency-compression
---
# MoE AI Model

**[[concepts/mixture-of-experts|Mixture of Experts]] (MoE)** is a conditional computation [[concepts/architecture|architecture]] for `[[concepts/large-language-model]]`s comprising multiple `Expert Network`s and a dynamic `Gating Network` routing mechanism. Only a sparse subset of experts processes each input token, enabling exponential [[concepts/parameter-scaling|parameter scaling]] with bounded [[concepts/compute|compute]] [[concepts/cost|cost]] per token.

## Architecture & Mechanics
- **Sparse Activation:** Top-k routing selects specific experts per token; inactive experts consume no compute during [[concepts/inference|inference]].
- **Parameter/Compute Decoupling:** Total [[concepts/parameter-count|parameter count]] [[concepts/musical-scales|scales]] additively with expert depth/width, while FLOPs remain proportional to [[concepts/active-parameters|active parameters]].
- **Routing Strategy:** Learnable gating balances load across experts to prevent "expert collapse" and ensure coverage of diverse feature spaces.
- **Shared [[concepts/weights|Weights]]:** Dense backbone layers handle general representation; expert layers capture specialized sub-patterns.

## Advantages
- **Scalability:** Supports massive model capacity on limited [[concepts/hardware|hardware]] via sparsity; active footprint fits within constrained [[concepts/vram|VRAM]].
- **Inference Efficiency:** Lower [[concepts/memory|memory]] bandwidth pressure compared to dense [[concepts/models|models]] of equivalent total parameter count.
- **[[concepts/specialization|Specialization]]:** Experts can diverge to optimize for distinct domains, modalities, or [[concepts/reasoning|reasoning]] tasks.

## Challenges
- **Routing Overhead:** Latency sensitivity to routing logic efficiency and expert load imbalance.
- **Communication Costs:** Distributed [[concepts/training|training]] requires frequent cross-device expert exchange; bottlenecked by interconnect bandwidth.
- **[[concepts/parameter-reduction|Quantization]] Sensitivity:** Routing logits often require higher precision than weights to maintain [[concepts/top-k-retrieval|top-k selection]] [[concepts/accuracy|accuracy]] under aggressive `[[concepts/model-quantization]]`.

## Recent Implementations & Performance
- **[[concepts/qwen-36-35b-a3b|Qwen 3.6 35B-A3B]]:** Demonstrates extreme efficiency; 35B [[concepts/total-parameters|total parameters]] with approximately 3B active [[concepts/parameters|parameters]] per token.
- **[[concepts/inference-engine|Llama.cpp]] Optimization:** Advanced kernel optimizations enable fast inference of large MoE structures on consumer-grade hardware.
- **Low-VRAM [[concepts/deployment|Deployment]]:** Successful execution on 6GB VRAM using 8-year-old GPUs, validating MoE viability for edge and legacy hardware `[[lab-notes/2026-05-10-Achieving-Fast-35B-MoE-AI-Model-Performance-on-6GB-VRAM|Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp]]`.
- **Active Parameter Ratio:** High total-to-active parameter ratios facilitate [[concepts/running|running]] foundation-scale capacity on resource-constrained endpoints without proportional inference latency.

## Related Concepts
- `Sparse Mixture of Experts`
- `Switch Transformer`
- `Token Routing`
- `Inference Acceleration`
- `Expert Balancing`
