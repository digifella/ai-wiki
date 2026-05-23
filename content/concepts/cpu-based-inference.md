---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "cpu-inference"
  - "local-models"
  - "microsoft-foundry-local"
  - "model-execution"
aliases:
  - "cpu-based inference"
summary: Involves performing inference using Microsoft Foundry Local models on a CPU.
updated: 2026-05-23
group: model-efficiency-compression
---
# CPU Based Inference

CPU-based inference refers to [[concepts/running|running]] [[concepts/machine-learning-model|machine learning model]] [[concepts/inference|inference]] operations on a central processing unit rather than specialized [[concepts/hardware|hardware]] like GPUs. This approach is relevant for deploying [[concepts/ai-models|AI models]] locally using [[concepts/microsoft-foundry-local|Microsoft Foundry Local]], a framework that enables running [[concepts/rich-tooling|foundry]] [[concepts/models|models]] on consumer and enterprise hardware without requiring dedicated accelerators.

## Setup and Installation

[[concepts/agent-factory|Microsoft Foundry]] Local can be installed via [[concepts/package-managers|package managers]] such as PowerShell using the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This installation method streamlines the process of setting up a [[concepts/local-inference|local inference]] environment on [[entities/windows|Windows]] systems, making CPU-based inference more accessible to developers and users who lack GPU resources.

## Use Cases and Models

CPU-based inference is particularly useful for [[concepts/chat-completion|chat completion]] tasks and other inference workloads where latency requirements are flexible. Models like [[entities/phi-4|Phi-4]] can be run in this configuration, though performance characteristics differ from [[concepts/gpu-acceleration|GPU acceleration]]. This approach enables [[concepts/offline-inference|offline inference]], reduced cloud costs, and [[concepts/privacy|privacy]] [[concepts/preservation|preservation]] by keeping model execution local.
## Source Notes
- 2026-04-07: Bonzai 8B: PrismML
- 2026-04-10: [[lab-notes/2026-04-10-Bonzai-8B-PrismMLs-Revolutionary-1-Bit-LLM-First-Look-Test|Bonzai 8B PrismMLs Revolutionary 1 Bit LLM First Look Test]] · [▶ source](https://www.youtube.com/watch?v=aNg47-U_x6A)
- 2026-04-20: [[lab-notes/2026-04-20-Larql-Querying-and-Modifying-LLM-Internal-Database-Structures|Larql Querying and Modifying LLM Internal Database Structures]] · [▶ source](https://www.youtube.com/watch?v=8Ppw8254nLI)