---
type: concept
domain: tools-platforms
tags:
  - "winget"
  - "microsoft-foundry-local"
  - "powershell"
  - "package-management"
  - "model-installation"
  - "gpu"
aliases:
  - "Foundry Local Installation"
  - "Microsoft Foundry Setup"
summary: Install Microsoft Foundry Local models using the winget command via PowerShell.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Winget Install

[[entities/winget|Winget]] Install is a [[concepts/command-line-interface|command-line]] method for deploying [[concepts/microsoft-foundry-local|Microsoft Foundry Local]] and its associated [[concepts/models|models]] using the [[concepts/winget-package-management|Windows Package Manager]] ([[concepts/winget|winget]]) via PowerShell. The installation process is straightforward: users execute `winget install Microsoft.FoundryLocal` in a PowerShell terminal to begin the [[concepts/setup|setup]].

## Installation Process

[[concepts/agent-factory|Microsoft Foundry]] Local can be installed through winget, which handles dependency resolution and package management automatically. This approach simplifies [[concepts/deployment|deployment]] compared to manual installation methods and integrates with the [[entities/windows|Windows]] package ecosystem. Once installed, users gain access to [[concepts/gpu-accelerated-inference|Foundry Local]]'s model infrastructure for [[concepts/running|running]] [[concepts/ai-models|AI models]] locally.

## Model Access

After installation via winget, users can work with various models available through Microsoft [[entities/foundry-local|Foundry Local]], including options like [[entities/phi-4|Phi-4]]. These models support different task types such as [[concepts/chat-completion|chat completion]], with varying [[concepts/hardware-requirements|hardware requirements]] (GPU or [[concepts/cpu|CPU]]) and file sizes depending on the specific model variant selected.
## Source Notes

- 2026-04-12: [[lab-notes/2026-04-12-Nvidia-CUDA-GPU-Parallel-Computing-for-AI-Advancement|Nvidia CUDA GPU Parallel Computing for AI Advancement]] · [▶ source](https://www.youtube.com/watch?v=pPStdjuYzSI)