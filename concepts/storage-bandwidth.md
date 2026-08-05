---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "storage-bandwidth"
  - "memory-wall"
  - "llm-inference"
  - "gpu-optimization"
  - "hbm"
  - "decoding-phase"
  - "moe"
  - "consumer-hardware"
aliases:
  - "Memory Bandwidth"
  - "Storage Throughput"
  - "Data Transfer Rate"
  - "Memory-Bound Performance"
  - "Colibri"
summary: Storage bandwidth defines the rate of data read/write operations in storage hierarchies, serving as a critical bottleneck for memory-bound tasks like LLM decoding phases. Recent innovations like Colibri demonstrate techniques to run massive MoE models on consumer hardware.
updated: 2026-07-22
group: data-pipelines-sync-storage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Storage Bandwidth

**[[entities/storage|Storage]] [[concepts/network-speed|Bandwidth]]** refers to the rate at which data can be read from or written to storage devices or [[concepts/memory|memory]] hierarchies. In the context of [[entities/high-performance|high-performance]] computing and [[concepts/large-language-model]] (LLM) [[concepts/inference|inference]], it is often the primary bottleneck limiting throughput, particularly during the decoding [[concepts/phase|phase]] where [[concepts/inference-optimization]] access dominates [[concepts/computational-resources|compute]] requirements.

## Key Characteristics
- **[[concepts/memory-bottleneck|Memory Wall]]**: The disparity between [[concepts/cpu|processor]] [[concepts/speed|speed]] and memory access speed.
- **Bandwidth-Bound Operations**: Tasks where performance is limited by data transfer rates rather than arithmetic operations (e.g., Matrix Multiplication with low arithmetic intensity).
- **HBM vs. [[concepts/vram|VRAM]]**: [[concepts/high-bandwidth-memory-hbm|High Bandwidth Memory]] (HBM) offers significantly higher throughput than standard GDDR VRAM, crucial for large [[concepts/model-weights|model weights]].

## Consumer-Grade MoE Inference
Recent advancements in **[[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE)** architectures allow for massive parameter counts with lower active inference costs. The **[[entities/colibri|Colibri]]** project demonstrates how to run the 744-billion parameter GLoM 5.2 model on consumer-grade laptops by optimizing data [[concepts/exercise|movement]] and leveraging [[concepts/parameter-activation|sparse activation]] patterns. This approach directly addresses the **Memory Wall** by reducing the effective bandwidth demand per token generated, making large-scale [[concepts/large-language-model]] inference accessible outside of data-center [[concepts/gpu-cluster|GPU clusters]].

See [[lab-notes/2026-07-22-Colibri-Unlocking-744B-MoE-LLMs-for-Consumer-Grade-Lapto|Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops]] for technical details on this implementation.

## References
- [Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops](https://www.youtube.com/watch?v=Pb6P8GW7elI)
