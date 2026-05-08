---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "phi-models"
  - "microsoft-foundry-local"
  - "small-language-models"
  - "local-deployment"
  - "gpu-inference"
aliases:
  - "Phi LLM"
  - "Microsoft Phi"
summary: Phi models can be used with Microsoft Foundry Local.
updated: 2026-05-01
---
# Phi Models

Phi models are a family of small language models developed by Microsoft designed for efficient [[concepts/deployment|deployment]] and [[concepts/inference|inference]]. These compact models are optimized for [[concepts/running|running]] on resource-constrained devices and local environments, making them suitable for [[concepts/edge-computing|edge computing]] [[concepts/scenarios|scenarios]] and [[concepts/mobile-ai|on-device AI]] [[concepts/software|applications]] where larger models would be impractical.

## Integration with Microsoft Foundry Local

Phi models can be deployed and used through Microsoft Foundry Local, a [[concepts/coding|local development]] environment that enables developers to work with [[concepts/ai-models|AI models]] on their machines. To set up [[concepts/gpu-accelerated-inference|Foundry Local]] on [[entities/windows|Windows]] systems, the application can be installed via PowerShell using the [[concepts/winget-package-management|Windows Package Manager]] with the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This integration allows developers to run and test Phi models locally before deploying them to production environments.

## Model Characteristics

Phi models are available in different versions with varying capabilities and sizes. These models support common AI tasks such as [[concepts/chat-completion|chat completion]] and are optimized for [[concepts/gpu-acceleration|GPU acceleration]] where available. The models are designed to balance performance with [[concepts/computational-efficiency|computational efficiency]], making them accessible for a broader range of deployment scenarios than their larger counterparts.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)