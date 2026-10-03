---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "cpu"
  - "hardware-backends"
  - "local-ai"
  - "nexa-sdk"
  - "model-execution"
aliases:
  - "cpu"
  - "processors"
summary: Central processing units are one of the hardware backends used by the Nexa SDK to run AI models locally.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: data-pipelines-sync-storage
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Central Processing Units

Central Processing Units (CPUs) are general-purpose processors that serve as one of several hardware backends supported by the [[concepts/mlx|Nexa SDK]] for running [[concepts/ai-models|AI models]] locally. Unlike specialized accelerators such as GPUs or NPUs, CPUs are universally available components present in virtually all computers, making them an accessible option for users without dedicated [[concepts/self-developing-ai|AI acceleration]] hardware.

CPU-based model execution offers broad compatibility across different systems and requires no additional hardware investment or driver [[concepts/installation|installation]]. This [[concepts/accessibility|accessibility]] allows developers and end-users to [[concepts/deployment|deploy]] [[concepts/ai-inference|inference]] capabilities on standard desktops, laptops, and servers without relying on specific vendor ecosystems or high-end [[concepts/webgpu|graphics]] cards.

While CPUs provide a reliable baseline for [[concepts/local-ai-model|local AI]] workloads, their performance characteristics differ significantly from specialized accelerators. They are generally better suited for lower-latency tasks, smaller model sizes, or [[concepts/scenarios|scenarios]] where [[concepts/energy-efficiency|power efficiency]] and hardware availability are prioritized over raw computational throughput. The Nexa SDK optimizes [[concepts/cpu-based-deployment|CPU inference]] to ensure stable operation across diverse architectures, including x86 and ARM-based processors.
## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-Nvidia-CUDA-GPU-Parallel-Computing-for-AI-Advancement|Nvidia CUDA GPU Parallel Computing for AI Advancement]] · [▶ source](https://www.youtube.com/watch?v=pPStdjuYzSI)
- 2026-04-25: Google · [▶ source](https://www.youtube.com/watch?v=bNdiBwXbLNw)
