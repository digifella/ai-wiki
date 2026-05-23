---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "llm-inference"
  - "model-loading"
  - "memory-mapping"
  - "performance-optimization"
  - "inference-engines"
aliases:
  - "loading-models"
summary: This concept covers model loading in the context of LLM inference engines, memory mapping, and performance optimization.
updated: 2026-05-23
group: model-efficiency-compression
---
# Model Loading

Model loading is the process of initializing a [[concepts/large-language-model-llm|large language model (LLM)]] into [[concepts/memory|memory]] before [[concepts/inference|inference]] can begin. This foundational step determines both the feasibility and performance characteristics of LLM [[concepts/deployment|deployment]]. The efficiency of model loading directly impacts startup time, resource utilization, and overall system responsiveness in [[concepts/inference-engines|inference engines]].

## Memory Mapping and Efficient Loading

[[concepts/memory-mapping|Memory mapping]] is a key technique for optimizing model loading. Rather than loading an entire model into [[concepts/ram|RAM]] [[concepts/assistive-technology|at]] once, memory mapping allows the operating system to map [[concepts/model-weights|model weights]] directly from disk into the virtual address space. This approach enables loading [[concepts/models|models]] larger than available physical memory and reduces initial load times. Pages of the model are fetched on-demand as they are accessed during inference, striking a balance between startup performance and [[concepts/memory-efficiency|memory efficiency]].

## Performance Considerations

The choice of loading strategy affects inference latency and throughput. Fully pre-loading models into GPU or high-[[concepts/speed|speed]] memory provides the fastest inference but requires substantial resources. Partial loading and lazy loading strategies reduce memory pressure but may introduce latency during inference as weights are fetched. Inference engines must balance these tradeoffs based on deployment constraints, [[concepts/code-size|model size]], [[concepts/hardware|hardware]] [[concepts/capabilities|capabilities]], and latency requirements.
## Source Notes
- 2026-04-22: LLM Inference: Engines, Memory Mapping, and Performance Optimization · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)