---
type: concept
domain: science-physics-research
tags:
  - "on-device-ai"
  - "edge-computing"
  - "machine-learning"
  - "hardware-efficiency"
  - "local-inference"
  - "model-efficiency"
  - "privacy"
  - "hardware-acceleration"
aliases:
  - "Edge AI"
  - "Local Machine Learning"
  - "On-Premise Inference"
  - "Client-Side AI"
summary: On-device deployment involves running machine learning models directly on local hardware to reduce latency and bandwidth dependency.
updated: 2026-07-22
group: engineering-systems-robotics-autonomous-vehicles
title: on-device AI
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

The execution of [[concepts/machine-learning|machine learning]] models directly on local hardware (e.g., [[concepts/edge-computing|Edge Computing]], smartphones, IoT) to minimize latency, reduce [[concepts/network-speed|bandwidth]] dependency, and enhance [[concepts/privacy|privacy]] by avoiding cloud-based [[concepts/gpu-clusters|GPU clusters]].

### Key Advancements & Trends
- [[concepts/model-efficiency]] (specifically [[entities/bitnet]] and [[entities/bonsai]]) are driving a [[concepts/mindset-shift|paradigm shift]] in [[concepts/model-efficiency|model efficiency]].
    - Enables massive models (e.g., 27B parameters) to run on mobile-class hardware.
    - Reduces file size by approximately 90%.
    - Reduces [[concepts/memory|memory]] consumption by approximately 15x compared to [[concepts/full-precision|full-precision]] models.
    - Potential for widespread [[concepts/local-inference|local inference]] without cloud relian
- **[[concepts/performance-benchmarks|Performance Benchmarks]] & Replacement Feasibility**:
    - Analysis of [[entities/bonsai]] 27B against larger models like [[entities/qwen]] 35B highlights the viability of smaller models as daily [[concepts/causes|drivers]].
    - See [[lab-notes/2026-07-22-Bonsai-27B-vs.-Qwen-35B-LLM-Performance-and-Replacement|Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks]] for detailed trade-offs between [[concepts/code-size|model size]], [[concepts/speed|speed]], and real-[[entities/earth|world]] applicability.

### References
- [Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks](https://www.youtube.com/watch?v=rBLWDJrXCp0)
