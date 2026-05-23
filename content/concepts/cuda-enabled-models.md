---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "cuda-enabled-models"
  - "gpu-computing"
  - "microsoft-foundry-local"
  - "phi-4"
  - "local-inference"
aliases:
  - "CUDA models"
  - "GPU-accelerated models"
summary: Models compatible with CUDA architecture, such as phi-4, can be run on GPUs using Microsoft Foundry Local.
updated: 2026-05-23
group: model-efficiency-compression
---
# CUDA Enabled Models

[[concepts/cuda|CUDA]] enabled [[concepts/models|models]] are AI language models compatible with [[entities/nvidia|NVIDIA]]'s CUDA ([[concepts/compute-unified-device-architecture|Compute Unified Device Architecture]]) [[concepts/architecture|architecture]], allowing them to run efficiently on GPU [[concepts/hardware|hardware]]. These models can leverage [[concepts/gpu-acceleration|GPU acceleration]] to perform [[concepts/inference|inference]] tasks significantly faster than CPU-only execution. Examples include [[entities/phi-4|Phi-4]], which is optimized for [[concepts/chat-completion|chat completion]] tasks and can be deployed on compatible NVIDIA graphics [[concepts/central-processing-units|processors]].

## Running CUDA Models Locally

[[concepts/microsoft-foundry-local|Microsoft Foundry Local]] provides a framework for [[concepts/running|running]] CUDA-compatible models on local GPU hardware without requiring cloud infrastructure. The platform can be installed via [[concepts/package-managers|package managers]] such as [[concepts/winget-package-management|Windows Package Manager]] ([[concepts/winget|winget]]) using the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This approach allows developers and researchers to maintain model inference locally while benefiting from [[concepts/gpu-based-processing|GPU acceleration]].

## Common Use Cases

CUDA enabled models are typically deployed for tasks such as chat completion, where real-time inference performance is important. By running these models locally on GPU-equipped machines, users can reduce latency compared to cloud-based alternatives and maintain [[concepts/power|control]] over their data and [[concepts/computational-resources|computational resources]].
