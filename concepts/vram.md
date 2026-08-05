---
type: concept
domain: ai-agents
tags:
  - "gpu-memory"
  - "llm-inference"
  - "model-weights"
  - "quantization"
  - "local-ai"
  - "kv-cache"
  - "paged-attention"
aliases:
  - "Video RAM"
  - "GPU Memory"
summary: VRAM is the dedicated memory on a GPU used to store model weights, activations, and intermediate data during inference and training. Capacity constraints drive optimizations like quantization and KV cache management.
updated: 2026-07-12
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "vram"
  - "gpu"
  - "[[concepts/machine-learning|machine-learning]]"
  - "[[concepts/parameter-reduction|quantization]]"
  - "llm"
  - "video-ram"
  - "gpu-[[concepts/memory|memory]]"
  - "[[concepts/model-compression|model-compression]]"
  - "llm-[[concepts/inference|inference]]"
  - "[[concepts/kv-cache|kv-cache]]"
  - "[[concepts/paged-attention|paged-attention]]"
group: open-systems-local-models
aliases:
  - "Video RAM"
  - "GPU [[concepts/memory|memory]]"

# VRAM

Video RAM (VRAM) is the dedicated memory on a GPU used to store [[concepts/model-weights|model weights]], activations, and intermediate data during [[concepts/inference|inference]] and training. Its capacity directly limits the size of models that can be executed on a single GPU, especially for resource-intensive tasks like [[concepts/large-language-model]] (LLM) deployment.

- **VRAM Constraints in LLMs**: [[concepts/full-precision|Full-precision]] (32-bit) LLMs like [[entities/nvidia|NVIDIA]]'s [[entities/llama|Llama]] 3.1 [[entities/nemotron|Nemotron]] 70B (70.6 billion parameters) require ~30GB+ of VRAM (e.g., 30+ files at ~5GB each), exceeding most consumer GPUs.
- **[[concepts/precision-reduction|Quantization]] as a [[concepts/vram-optimization|VRAM optimization]]**: Reducing [[concepts/accuracy|precision]] (e.g., 4-bit or 8-bit) significantly lowers [[concepts/4gb-memory|memory footprint]], enabling larger models to fit within limited VRAM.
- **Inference [[concepts/memory-overhead|Memory Overhead]]**: Beyond static [[concepts/parameters|weights]], VRAM must accommodate dynamic data structures during generation:
  - **Activations**: Intermediate tensor values computed during forward passes.
  - **[[concepts/kv-cache|KV Cache]]**: Stores key and value vectors for previous [[concepts/tokens|tokens]] to avoid redundant computation in [[concepts/autoregressive-decoding|autoregressive generation]]. This cache grows linearly with sequence length, often becoming the bottleneck for long-context inference.
  - **[[concepts/paged-attention|Paged Attention]]**: A [[concepts/memory-management|memory management]] technique that treats VRAM as virtual memory, allowing non-contiguous allocation of [[concepts/prompt-caching|KV cache]] blocks to reduce fragmentation and improve throughput [[lab-notes/2026-07-05-KV-Cache-and-Paged-Attention-Accelerating-LLM-Inference|KV Cache and Paged Attention: Accelerating LLM Inference through VRAM Optimization]].

## References

- [KV Cache and Paged Attention: Accelerating LLM Inference through VRAM Optimization](https://www.youtube.com/watch?v=o0gkdZBtwEg)
