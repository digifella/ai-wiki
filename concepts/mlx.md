---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Mlx

Mlx is an open-source machine learning framework developed by Apple, designed to enable efficient execution of AI models on local hardware. It allows developers and researchers to run model inference on personal computers and edge devices by leveraging available hardware accelerators, including Neural Processing Units (NPUs), Graphics Processing Units (GPUs), and Central Processing Units (CPUs). The framework is built to provide a seamless experience for running large language models and other neural networks without requiring external cloud services.

The architecture of Mlx emphasizes a unified memory system that simplifies data movement between the CPU and GPU. This design eliminates the need for explicit memory management or data copying, allowing models to be loaded and executed with minimal overhead. By treating the CPU and GPU as part of a single memory space, Mlx facilitates rapid iteration and debugging for machine learning workflows on Apple Silicon devices.

Mlx supports a variety of model formats and integrates with popular libraries such as Hugging Face Transformers. It provides a Python API that mirrors the structure of PyTorch, enabling users to port existing code with minimal modifications. The framework includes optimized kernels for common operations, ensuring high performance for both training and inference tasks on local machines.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
