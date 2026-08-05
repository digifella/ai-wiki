---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "hardware"
  - "gpu"
  - "amd"
  - "ai"
  - "unified-memory"
  - "local-inference"
  - "discrete-gpu"
  - "amd-ryzen-ai-halo"
  - "vram"
  - "ai-infrastructure"
aliases:
  - "Dedicated GPU"
  - "Discrete Graphics Processing Unit"
summary: "A dedicated graphics processing unit separate from the CPU, with emerging unified memory architectures like AMD Ryzen AI Halo addressing traditional VRAM bottlenecks for local AI inference."
updated: 2026-07-22
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Discrete GPU

A dedicated [[concepts/webgpu|graphics]] processing unit separate from the CPU, designed for [[concepts/parallel-processing|parallel processing]] tasks such as [[concepts/fat-rendering|rendering]], [[concepts/scientific-calculation|scientific computing]], and [[concepts/ai-technologies|Artificial Intelligence]] [[concepts/inference|inference]].

## Architecture & Memory Models

*   **Traditional Discrete GPUs:** Utilize [[concepts/vram]] (Video RAM) physically separate from system [[concepts/ram]]. Data transfer occurs via the PCIe bus, creating [[concepts/network-speed|bandwidth]] bottlenecks for large models.
*   **Unified [[concepts/memory|Memory]] Architectures:** Emerging platforms allow the GPU to access system memory directly, eliminating the need to duplicate data between CPU and GPU memory spaces. This is critical for running [[concepts/demystifying-llms|large language models]] (LLMs) that exceed traditional VRAM capacities.

## Emerging Platforms: AMD Ryzen AI Halo

The **AMD Ryzen AI Halo** [[concepts/developer|developer]] platform represents a shift toward unified memory systems for [[concepts/cross-platform-ai-development|local AI development]], challenging the traditional discrete GPU model for specific workloads.

*   **Unified Memory Platform:** Leverages a compact workstation design where the [[concepts/neural-engine|AI accelerator]] shares memory with the CPU, addressing VRAM limitations inherent in traditional discrete setups.
*   **[[concepts/open-source-ai-projects|Local AI Development]]:** Optimized for running large [[concepts/ai-models|AI models]] entirely locally without cloud dependency.
*   **Key Resource:** [[lab-notes/2026-07-22-AMD-Ryzen-AI-Halo-Unified-Memory-Platform-for-Local-AI-D|AMD Ryzen AI Halo: Unified Memory Platform for Local AI Development]]
*   **Source:** [AMD Ryzen AI Halo: Unified Memory Platform for Local AI Development](https://www.youtube.com/watch?v=ogVSqcVxv28)

## Comparison with Integrated Graphics

| Feature | Discrete GPU | Integrated GPU (iGPU) | Unified Memory (e.g., Ryzen AI Halo) |
| :--- | :--- | :--- | :--- |
| **Memory** | Dedicated VRAM | Shared System RAM | Unified System/VRAM Pool |
| **Performance** | High (Parallel [[concepts/computational-resources|Compute]]) | Low to Moderate | High (for AI/ML workloads) |
| **Flexibility** | Fixed VRAM capacity | Limited by system RAM | Scalable with system RAM |
| **Use Case** | [[concepts/gaming|Gaming]], 3D Rendering, Heavy Compute | Office tasks, [[concepts/light|light]] media | [[concepts/hardware-heavy-models|Local LLMs]], AI Development |

## See Also

*   [[concepts/cuda|NVIDIA CUDA]]
*   ROCm
*   [[concepts/large-language-model]]
*   [[concepts/edge-computing]]
