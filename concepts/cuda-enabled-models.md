---
type: concept
domain: ai-agents
group: model-efficiency-compression
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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Cuda Enabled Models

CUDA enabled models are artificial intelligence systems optimized to execute on NVIDIA graphics processing units (GPUs) via the Compute Unified Device Architecture (CUDA). This parallel computing platform facilitates general-purpose computation by distributing workloads across numerous GPU cores, allowing for the efficient processing of complex neural network operations. By leveraging the massive parallelism inherent in modern GPUs, these models achieve significantly faster inference speeds compared to CPU-only execution, which reduces latency and improves throughput for real-time applications.

## Compatibility and Execution

Models such as phi-4 are designed to be compatible with the CUDA architecture, enabling them to run efficiently on supported hardware. Execution is typically managed through specialized environments like Microsoft Foundry Local, which handles the necessary drivers and runtime libraries to interface with the GPU. This compatibility ensures that the computational intensity of large language models is offloaded from the central processing unit to the graphics processing unit, maximizing resource utilization.

## Performance Implications

The primary advantage of using CUDA enabled models is the substantial reduction in processing time for both training and inference tasks. The ability to process multiple data points simultaneously allows for higher throughput, making these models suitable for demanding workloads. Consequently, developers and researchers can iterate more quickly and deploy services that require low-latency responses, provided the underlying hardware supports the required CUDA capabilities.
