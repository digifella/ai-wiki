---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "vram-optimization"
  - "model-quantization"
  - "llm-inference"
  - "local-deployment"
  - "memory-efficiency"
  - "kv-cache"
  - "paged-attention"
  - "bonsai-27b"
  - "comfyui"
  - "int8"
  - "swift-1.5"
  - "qwen3.8"
  - "gsq-rcq"
  - "iq3_s"
  - "rtx-2000-ada"
  - "sparse-moe"
  - "strata-runtime"
  - "qwen3.8-flash-next"
aliases:
  - "VRAM reduction"
  - "memory optimization"
  - "MoE optimization"
summary: Techniques for reducing video memory requirements when running large language models locally, including quantization approaches like Intel's AutoRound, inference optimizations like KV Cache management, specialized compressed models like Bonsai 27B, and ComfyUI's native INT8 support. Includes benchmarks for Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S on 16GB VRAM. Extends to sparse Mixture-of-Experts (MoE) architectures via Strata runtime, enabling 125B parameter models on 12GB consumer GPUs.
updated: 2026-10-07
group: model-efficiency-compression
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-06T21:57:42+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# VRAM Optimization

[[concepts/vram|VRAM]] optimization refers to techniques and methodologies for reducing the video [[concepts/memory|memory]] (VRAM) requirements needed to run [[concepts/large-language-model-llm|large language models]] and other [[concepts/ai-models|AI systems]] locally on [[concepts/consumer-hardware|consumer hardware]]. As models have grown larger, with billions of parameters, the [[concepts/4gb-memory|memory footprint]] has become a significant barrier to [[concepts/local-deployment|local deployment]]. Optimization approaches allow researchers and practitioners to run capable models on devices with limited GPU memory, [[concepts/rtx-2000-ada|RTX 2000 Ada]] and [[concepts/gpu|GPU]]s with 12GB+ VRAM.

## Core Techniques

*   **[[concepts/precision-reduction|Quantization]]:** Reducing precision of weights (e.g., [[concepts/int8|int8]], [[concepts/iq3_s|IQ3_S]]) to shrink [[concepts/code-size|model size]].
*   **KV Cache Management:** Optimizing key-value cache storage during inference to reduce peak memory usage.
*   **[[concepts/inference-optimization|Paged Attention]]:** [[concepts/paged-attention|PagedAttention]] [[concepts/causes|mechanisms]] to manage memory fragmentation and improve efficiency.
*   **[[concepts/sparse-mixture-of-experts|Sparse Mixture-of-Experts]] (MoE):** Utilizing sparse architectures where only a subset of parameters is activated per token, drastically reducing compute and memory requirements compared to [[concepts/dense-models|dense models]].

## Sparse MoE & Strata Runtime

Recent advancements in [[concepts/sparse-moe|Sparse MoE]] architectures enable massive models to run on constrained hardware.

*   **Strata Runtime:** An [[concepts/open-source|open-source]] runtime that facilitates the execution of large sparse MoE models on consumer GPUs.
*   **Case Study:** Running the 125-billion parameter [[concepts/qwen3.8-flash-next|Qwen 3.8 Flash Next]] model on an [[concepts/rtx-5070|RTX 5070]] with only 12GB of VRAM.
*   **Mechanism:** Strata leverages [[concepts/parameter-activation|sparse activation]] patterns to bypass the memory bottlenecks typically associated with dense 125B+ [[concepts/parameter-models|parameter models]].
*   **Detailed Analysis:** See [[lab-notes/2026-10-07-Strata-Running-125B-Sparse-MoE-LLM-on-12GB-Consumer-GPUs|Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs]] for technical breakdown.

## Previous Benchmarks & Models

*   **Swift 1.5:** Benchmarked [[concepts/qwen3.8|Qwen3.8-27B]] with [[concepts/gsq-rcq|GSQ-RCO]] and [[concepts/iq3_s|IQ3_S]] quantization on 16GB VRAM.
*   **[[concepts/bonsai-27b|Bonsai 27B]]:** Specialized compressed model for efficient [[concepts/local-control|local deployment]].
*   **ComfyUI:** Native [[concepts/int8|int8]] support for efficient image and model processing.

## References

*   [Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs](https://www.youtube.com/watch?v=4q_VlobZU0A)
