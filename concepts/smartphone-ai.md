---
type: concept
domain: ai-agents
tags:
  - "on-device-ai"
  - "mobile-ml"
  - "model-compression"
  - "edge-computing"
  - "privacy-preserving-ai"
  - "llm-optimization"
aliases:
  - "On-Device AI"
  - "Mobile AI"
  - "Edge AI"
  - "Local AI Processing"
summary: "Smartphone AI integrates artificial intelligence capabilities directly into mobile devices to enable on-device processing, thereby reducing latency, enhancing privacy, and lowering dependency on cloud infrastructure."
updated: 2026-07-16
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Smartphone AI

**Smartphone AI** refers to the integration of [[concepts/ai-technologies|artificial intelligence]] capabilities directly into [[concepts/portable-devices|mobile devices]], enabling [[concepts/local-execution|on-device processing]] for tasks such as image recognition, [[concepts/language-processing|natural language processing]], and [[concepts/auto-complete|predictive text]]. This shift aims to reduce latency, enhance [[concepts/privacy|privacy]] by keeping data local, and lower dependency on [[concepts/cloud-based-services|cloud infrastructure]].

## Key Developments

### On-Device Model Optimization
Recent advancements focus on compressing [[concepts/demystifying-llms|Large Language Models]] ([[concepts/llm]]) to run efficiently on [[concepts/consumer-grade-hardware|consumer-grade hardware]] with limited [[concepts/memory|memory]] and [[concepts/computational-resources|compute]] resources.

*   **[[entities/bonsai-27b|Bonsai 27B]]**: A highly compressed variant of the [[concepts/qwen-llm|Qwen]] 27B model developed by [[concepts/bonsai-8b-prismml|PrismML]].
    *   Achieves **10x less memory usage** compared to standard implementations.
    *   Enables powerful [[concepts/llm-inference|LLM inference]] on consumer hardware without requiring specialized server-grade GPUs.
    *   See detailed analysis: [[lab-notes/2026-07-15-Bonsai-27B-Qwen-27B-LLM-for-Consumer-Hardware-with-10x-L|Bonsai 27B: Qwen 27B LLM for Consumer Hardware with 10x Less Memory]]

## Related Concepts
*   [[concepts/edge-computing]]
*   [[concepts/model-quantization]]
*   [[concepts/privacy-preserving-ai]]

## References
*   [Bonsai 27B: Qwen 27B LLM for Consumer Hardware with 10x Less Memory](https://www.youtube.com/watch?v=V6LmF7TuBmY)
