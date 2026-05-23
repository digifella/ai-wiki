---
type: concept
domain: tools-platforms
tags:
  - "local-inference"
  - "open-source-sdk"
  - "npu-gpu-cpu"
  - "edge-deployment"
  - "ai-models"
  - "developer-toolkit"
aliases:
  - "Nexa SDK"
  - "local model execution"
summary: The Nexa SDK is an open-source developer toolkit designed to run AI models locally on NPUs, GPUs, and CPUs.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Native Support

Native Support refers to the capability of the [[concepts/gguf|Nexa SDK]] to run [[concepts/ai-models|AI models]] directly on a user's local [[concepts/hardware|hardware]] without requiring external [[concepts/cloud-computing|cloud services]] or proprietary platforms. The [[concepts/mlx|Nexa SDK]] is an [[concepts/open-source|open-source]] [[concepts/developer|developer]] toolkit that provides this functionality across multiple computational backends, including [[concepts/neural-processing-units|neural processing units]] (NPUs), [[concepts/graphics-processing-units-gpus|graphics processing units (GPUs)]], and [[concepts/central-processing-units|central processing units]] (CPUs). This approach enables developers to execute [[concepts/artificial-intelligence-models|machine learning models]] with hardware acceleration where available, while maintaining compatibility with standard processors.

## Data Privacy and Local Execution

A key advantage of native support in the Nexa SDK is the ability to keep data local during [[concepts/inference|model inference]]. By [[concepts/running|running]] [[concepts/models|models]] on personal or enterprise hardware rather than cloud platforms, users maintain greater [[concepts/power|control]] over sensitive information and reduce dependency on external services. This local-first [[concepts/architecture|architecture]] addresses [[concepts/privacy|privacy]] concerns that arise from transmitting data to remote servers.

## Hardware Flexibility

The native support across NPUs, GPUs, and CPUs provides flexibility in [[concepts/deployment|deployment]] [[concepts/scenarios|scenarios]]. Users can leverage specialized hardware when available for improved performance, while maintaining fallback compatibility with standard processors. This multi-backend approach makes the Nexa SDK suitable for diverse computing environments, from edge devices to workstations.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Claude-AI-Excel-Add-in-for-Financial-Modeling-Overview-and-Tutorial|Claude AI Excel Add in for Financial Modeling Overview and Tutorial]] · [▶ source](https://www.youtube.com/watch?v=iEh53QLluNw)
- 2026-04-22: LLM Inference · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)