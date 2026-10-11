---
type: concept
domain: ai-agents
tags:
  - "sparse-mixture-of-experts"
  - "llm"
  - "inference"
  - "hardware-efficiency"
  - "strata"
  - "moe"
  - "llm-efficiency"
  - "inference-optimization"
  - "hardware-deployment"
  - "load-balancing"
aliases:
  - "SMoE"
  - "Sparse Mixture of Experts"
summary: "Sparse Mixture of Experts is a neural network architecture that activates only a small subset of expert sub-networks per token to achieve massive capacity with reduced computational cost during inference."
updated: 2026-10-07
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-06T21:53:39+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sparse Mixture of Experts

**Sparse [[concepts/mixture-of-experts|Mixture of Experts]] (SMoE)** is a [[concepts/neural-network-architecture|neural network architecture]] where the model is composed of multiple "expert" sub-networks. For each input token, a gating mechanism selects a small subset of experts to process the data, while the remaining experts remain inactive. This allows for massive model capacity with significantly reduced computational cost during [[concepts/ai-inference|inference]], as only a fraction of parameters are activated per token.

## Core Mechanism
- **Expert Routing:** A router network determines which experts are most relevant for a given input.
- **Sparsity:** Only the top-$k$ experts (typically $k=1$ or $2$) are activated per token, keeping latency low despite the large total [[concepts/parameter-count|parameter count]].
- **[[concepts/load-balancing|Load Balancing]]:** Techniques are employed to ensure experts are utilized evenly to prevent bottlenecks.

## Hardware Efficiency & Inference
SMoE architectures are particularly suited for deployment on [[concepts/consumer-grade-hardware|consumer-grade hardware]] through advanced runtime optimizations that leverage MoE sparsity.

- **[[concepts/model-compression|Strata Runtime]]:** The [[concepts/open-source|open-source]] runtime Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs demonstrates how SMoE models can be executed efficiently on limited [[concepts/vram|VRAM]].
- **Consumer [[concepts/gpu-deployment|GPU Deployment]]:** By utilizing [[concepts/parameter-activation|sparse activation]] patterns, models like [[entities/qwen38-flash-next|Qwen3.8-Flash-Next]] (125B parameters) can run on an RTX 5070 with only 12GB of VRAM, a feat traditionally impossible for [[concepts/dense-models|dense models]] of this scale.
- **Key Enabler:** The runtime optimizes [[concepts/memory|memory]] access and expert loading to fit within the constraints of [[concepts/consumer-hardware|consumer hardware]], making large-scale MoE [[concepts/inference|inference]] accessible outside of data-center clusters.

## Related Concepts
- [[entities/mixture-of-experts]]
- [[concepts/large-language-model]]
- [[concepts/precision-reduction|Quantization]]
- Model Parallelism

## References
- [Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs](https://www.youtube.com/watch?v=4q_VlobZU0A)
## Source Notes
- 2026-10-07: [[lab-notes/2026-10-07-Strata-Running-125B-Sparse-MoE-LLM-on-12GB-Consumer-GPUs|Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs]]
