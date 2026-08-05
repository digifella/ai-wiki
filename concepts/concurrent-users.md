---
type: concept
domain: ai-agents
tags:
  - "llm-serving"
  - "concurrency"
  - "vram-optimization"
  - "inference-scaling"
  - "system-metrics"
aliases:
  - "Simultaneous Users"
  - "Concurrent Sessions"
  - "System Concurrency"
  - "LLM Concurrency"
summary: Concurrent Users is a metric representing the number of simultaneous sessions processed by a system, constrained by hardware resources like VRAM and compute throughput in LLM serving.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Concurrent Users

**Concurrent Users** refers to the number of distinct sessions or requests processed by a system simultaneously. In the context of [[concepts/large-language-model]] (LLM) serving, this metric is strictly bounded by hardware resources, primarily [[concepts/vram]] capacity and [[concepts/gpu-compute-throughput|compute throughput]].

## Key Constraints & Optimization

*   **[[concepts/memory|Memory]] Bottlenecks**: High concurrency leads to VRAM exhaustion if key-value states are not managed efficiently.
*   **Throughput vs. Latency**: Increasing concurrent users often trades off individual request latency for higher aggregate throughput.
*   **[[concepts/low-vram-generation|VRAM Optimization]]**: Techniques like [[concepts/inference-optimization]] management are critical for [[concepts/computational-scaling|scaling]] concurrent user limits without linear hardware increases.

## Related Concepts

*   [[concepts/inference-optimization]]: Stores intermediate [[concepts/attention-mechanisms|attention]] states to avoid recomputation.
*   Paged [[concepts/attention-mechanisms|Attention]]: A [[concepts/memory-management|memory management]] technique that reduces fragmentation and allows higher concurrency by treating [[concepts/vram|VRAM]] like virtual [[concepts/memory|memory]].
*   [[concepts/llm-inference]]: The process of generating outputs from trained models.

## References

*   [KV Cache and Paged Attention: Accelerating LLM Inference through VRAM Optimization](https://www.youtube.com/watch?v=o0gkdZBtwEg)
*   [[lab-notes/2026-07-05-KV-Cache-and-Paged-Attention-Accelerating-LLM-Inference|KV Cache and Paged Attention: Accelerating LLM Inference through VRAM Optimization]]
