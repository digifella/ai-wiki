---
type: concept
domain: security-infrastructure
group: data-pipelines-sync-storage
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
updated: 2026-05-01
---
# Central Processing Units

Central Processing Units (CPUs) are general-[[concepts/motivation|purpose]] processors that serve as one of several [[concepts/hardware|hardware]] backends supported by the [[concepts/gguf|Nexa SDK]] for executing [[concepts/ai-models|AI models]] locally. Unlike specialized accelerators, CPUs provide a universally available computing platform present in virtually all computers, making them an accessible option for users who lack dedicated AI hardware like GPUs or NPUs.

## Role in Local Model Execution

The Nexa SDK enables AI [[concepts/inference|model inference]] across multiple hardware backends, with CPUs functioning as a baseline option for [[concepts/local-deployment|local deployment]]. While CPUs typically offer lower computational throughput compared to specialized accelerators, they provide flexibility and compatibility across different system configurations. This makes [[concepts/cpu-based-inference|CPU-based inference]] suitable for [[concepts/scenarios|scenarios]] where hardware acceleration is unavailable or where [[concepts/code-size|model size]] and latency constraints are less demanding.

## Integration with Nexa SDK

As part of [[concepts/mlx|Nexa AI]]'s [[concepts/open-source|open-source]] [[concepts/developer|developer]] toolkit, CPU support allows developers to run models on standard [[concepts/computing-infrastructure|computing infrastructure]] without requiring specialized hardware. The SDK abstracts the underlying hardware complexity, enabling seamless model execution whether using CPUs, GPUs, NPUs, or other supported backends. This multi-backend approach democratizes access to [[concepts/offline-ai|local AI]] model execution by removing the hardware barrier to entry for many users and [[concepts/developer-platforms|development environments]].

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-Nvidia-CUDA-GPU-Parallel-Computing-for-AI-Advancement|Nvidia CUDA GPU Parallel Computing for AI Advancement]] · [▶ source](https://www.youtube.com/watch?v=pPStdjuYzSI)
- 2026-04-25: Google · [▶ source](https://www.youtube.com/watch?v=bNdiBwXbLNw)