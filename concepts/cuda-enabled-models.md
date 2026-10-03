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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Cuda Enabled Models

CUDA enabled models are [[concepts/ai-technologies|artificial intelligence]] systems optimized to execute on NVIDIA [[concepts/graphics-processing-units-gpus|graphics processing units (GPUs)]] via the [[concepts/compute-unified-device-architecture|Compute Unified Device Architecture]] (CUDA). This [[concepts/general-purpose-computing|parallel computing]] platform allows for [[concepts/general-purpose-computation|general-purpose computation]] by distributing workloads across numerous GPU cores. Consequently, these models achieve significantly faster [[concepts/ai-inference|inference]] speeds compared to CPU-only execution, making them suitable for real-time applications and large-scale deployments where low latency is critical.

Deployment of these models can be facilitated through tools such as [[concepts/microsoft-foundry-local|Microsoft Foundry Local]]. This environment supports the local running of compatible architectures, including the Phi-4 model, allowing users to leverage [[concepts/gpu-acceleration|GPU acceleration]] without requiring external [[concepts/cloud-based-computer|cloud infrastructure]]. By utilizing Microsoft Foundry Local, developers can manage the deployment and inference of CUDA-enabled models efficiently within a local setting.
