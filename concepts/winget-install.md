---
type: concept
domain: tools-platforms-infrastructure
group: platforms-runtimes-environments
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
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Winget Install

Winget Install is a command-line installation method for deploying Microsoft Foundry Local and its associated models through the Windows Package Manager (winget) via PowerShell. This approach leverages Windows' native package management system to simplify setup for users in Windows environments, reducing manual configuration steps.

## Installation Process

Users install Microsoft Foundry Local through winget by executing specific installation commands in PowerShell. The package manager handles dependency resolution and file placement automatically, streamlining the deployment process compared to manual installation methods. This approach is particularly useful for organizations managing multiple installations or users who prefer command-line-based workflows.

## Advantages

Using winget for installation provides several practical benefits. The method integrates with Windows' standard update mechanisms, making it easier to manage package versions and updates across systems. It also reduces the likelihood of configuration errors that can occur during manual installation, since winget handles the deployment according to predefined package specifications.

## Source Notes

- 2026-04-12: [[lab-notes/2026-04-12-Nvidia-CUDA-GPU-Parallel-Computing-for-AI-Advancement|Nvidia CUDA GPU Parallel Computing for AI Advancement]] · [▶ source](https://www.youtube.com/watch?v=pPStdjuYzSI)
