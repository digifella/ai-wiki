---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "gpu-compute"
  - "llm-inference"
  - "memory-bandwidth"
  - "kv-cache"
  - "optimization"
  - "throughput"
aliases:
  - "GPU Throughput"
  - "LLM Inference Throughput"
  - "Compute Throughput"
  - "GPU Performance"
summary: GPU Compute Throughput measures the rate of arithmetic operations in LLM inference, which is constrained by memory bandwidth and KV-Cache overhead during different processing phases.
updated: 2026-07-11
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# GPU Compute Throughput

**GPU [[concepts/computational-resources|Compute]] Throughput** refers to the rate at which a [[concepts/webgpu|Graphics]] Processing Unit performs arithmetic operations, typically measured in FLOPS (Floating Point Operations Per Second). In the context of [[concepts/large-language-model]] (LLM) [[concepts/inference|inference]], throughput is constrained not just by raw [[concepts/compute|compute]] power, but by [[concepts/memory|memory]] [[concepts/network-speed|bandwidth]] and the efficiency of data [[concepts/exercise|movement]], particularly regarding the Key-Value Cache.

## Key Bottlenecks
- **Memory Bound vs. [[concepts/feynmans-three-step-scientific-method|Compute]] Bound:** [[concepts/llm-inference|LLM inference]] is often memory-bound during the [[concepts/prompt-prefill|prefill phase]] and compute-bound during the decoding [[concepts/phase|phase]].
- **[[concepts/prompt-caching|KV-Cache]] Overhead:** The Key-Value Cache grows linearly with sequence length, consuming significant [[concepts/vram|VRAM]] and limiting batch sizes, thereby reducing overall throughput.

## Optimization Strategies
- **DualPath Architecture:** Recent advancements, such as those detailed in [[lab-notes/2026-06-23-DeepSeeks-DualPath-Optimizing-LLM-GPU-Compute-Throughput|DeepSeek's DualPath: Optimizing LLM GPU Compute Throughput via KV-Cache]], propose separating the processing paths for key and value states to optimize memory access patterns and reduce latency.
- **[[concepts/speculative-decoding|Speculative Decoding]]:** Reduces the number of autoregressive steps required, effectively increasing [[concepts/token-generation-speed|tokens-per-second]] throughput.
- **[[concepts/parameter-reduction|Quantization]]:** Using lower [[concepts/accuracy|precision]] formats (e.g., FP8, INT4) to increase batch size and reduce [[concepts/storage-bandwidth|memory bandwidth]] pressure.

## References
- [DeepSeek's DualPath: Optimizing LLM GPU Compute Throughput via KV-Cache](https://www.youtube.com/watch?v=mG4SmhWyeFA)
