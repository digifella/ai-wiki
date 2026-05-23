---
type: concept
domain: tools-platforms
tags:
  - "concept"
  - "ai-models"
  - "local-inference"
  - "nexa-sdk"
  - "open-source"
  - "developer-toolkit"
  - "gpu-npu"
aliases:
  - "Nexa SDK"
  - "Nexa AI"
summary: Nexa SDK is an open-source toolkit for running AI models locally on computers using NPUs, GPUs, and CPUs.
updated: 2026-05-23
group: developer-tooling-clis
---
# Mlx

Mlx is an [[concepts/open-source|open-source]] machine [[concepts/learning|learning]] framework designed for [[concepts/running|running]] [[concepts/ai-models|AI models]] locally on personal computers. It supports execution across multiple [[concepts/hardware|hardware]] accelerators, including [[concepts/neural-processing-units|Neural Processing Units]] (NPUs), [[concepts/graphics-processing-units-gpus|Graphics Processing Units (GPUs)]], and standard [[concepts/central-processing-units|Central Processing Units]] (CPUs). The framework aims to [[entities/make|make]] [[concepts/llm-inference|local AI inference]] and model [[concepts/deployment|deployment]] accessible without requiring [[concepts/cloud-computing|cloud services]] or specialized hardware.

## Design and Use Cases

The toolkit is structured to optimize performance across different processor types, allowing users to leverage whatever hardware acceleration is available on their system. This flexibility makes Mlx suitable for developers and researchers who need to run language [[concepts/models|models]], image processing models, or other [[concepts/neural-networks|neural networks]] on local machines while maintaining reasonable performance.

## Context

Mlx exists within a growing ecosystem of [[concepts/offline-ai|local AI]] tools that prioritize [[concepts/privacy|privacy]], offline capability, and independence from external API services. Its open-source [[entities/nature|nature]] allows community contribution and [[concepts/customization|customization]] for specific [[concepts/scenarios|use cases]].
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]