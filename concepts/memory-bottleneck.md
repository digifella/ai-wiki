---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "memory-bottleneck"
  - "llm-inference"
  - "kv-cache"
  - "memory-bandwidth"
  - "gpu-optimization"
  - "compute-throughput"
aliases:
  - "Memory Wall"
  - "Memory-Bound Inference"
  - "Bandwidth Saturation"
summary: The memory bottleneck describes the disparity between processor speed and memory access speed, which constrains LLM inference throughput due to KV-cache pressure and memory-bound operations.
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Memory Bottleneck

The **[[concepts/memory|Memory]] Bottleneck** (or Memory Wall) refers to the growing disparity between the [[concepts/speed|speed]] of [[concepts/central-processing-units|Processors]] (CPUs/GPUs) and the speed of Main Memory (RAM/VRAM). As [[concepts/computational-resources|compute]] power increases exponentially, [[concepts/storage-bandwidth|memory bandwidth]] and latency improvements lag significantly, causing processors to idle while waiting for data.

## In Large Language Models (LLMs)

In the context of [[concepts/large-language-model]] [[concepts/inference|inference]], the memory bottleneck is the primary constraint on throughput and latency, particularly during the **prefill** and **decode** phases.

### Key Constraints
- **[[concepts/prompt-caching|KV-Cache]] Pressure**: The Key-Value Cache grows linearly with sequence length. [[concepts/storing|Storing]] and [[concepts/retrieving|retrieving]] these tensors consumes significant [[concepts/vram|Video RAM]] (VRAM) [[concepts/network-speed|bandwidth]].
- **Memory-Bound Inference**: Unlike training, which is often compute-bound, inference (especially decoding) is heavily memory-bound. The GPU spends more time moving [[concepts/parameters|weights]] and activations than performing arithmetic operations.
- **Bandwidth Saturation**: High-throughput serving requires maximizing memory bandwidth utilization. Inefficient memory access patterns lead to underutilized Tensor Cores.

### Recent Optimizations
- **[[entities/deepseek|DeepSeek]]'s DualPath: Optimizing LLM [[concepts/gpu-compute-throughput|GPU Compute Throughput]] via KV-Cache**: A 2026 approach by [[concepts/deepseek-ai|DeepSeek-AI]] addressing inefficient utilization of GPU [[concepts/compute|compute]] during KV-Cache operations.
	- Focuses on optimizing GPU [[concepts/feynmans-three-step-scientific-method|compute]] throughput specifically via KV-Cache management.
	- Aims to resolve the "billion-dollar problem" of inefficient resource usage in [[concepts/ai-agentic-applications|agentic AI systems]] and LLMs.
	- Source: [DeepSeek's DualPath: Optimizing LLM GPU Compute Throughput via KV-Cache](https://www.youtube.com/watch?v=mG4SmhWyeFA)

## Mitigation Strategies
- **[[concepts/parameter-reduction|Quantization]]**: Reducing [[concepts/accuracy|precision]] (e.g., FP16, INT8) to decrease [[concepts/4gb-memory|memory footprint]] and increase effective bandwidth.
- **PagedAttention**: Managing KV-Cache memory non-contiguously to reduce fragmentation and improve utilization.
- **Model Parallelism**: Distributing [[concepts/model-weights|model weights]] across multiple GPUs to bypass single-device memory limits.
- **FlashAttention**: Optimizing memory access patterns to minimize HBM reads/writes.

## Related Concepts
- Von Neumann Architecture
- [[concepts/memory|Memory]] [[concepts/network-speed|Bandwidth]]
- Latency
- [[concepts/gpu-architecture]]
- [[concepts/inference-optimization]]
## Source Notes
- 2026-06-23: [[lab-notes/2026-06-23-DeepSeeks-DualPath-Optimizing-LLM-GPU-Compute-Throughput|DeepSeek's DualPath: Optimizing LLM GPU Compute Throughput via KV-Cache]]
