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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Winget Install

Winget Install is a command-line deployment method for Microsoft Foundry Local and its associated models, utilizing the Windows Package Manager (winget) via PowerShell. This approach leverages Windows' native package management infrastructure to streamline the installation process for users within Windows environments. By automating dependency resolution and file placement, it reduces the need for manual configuration steps typically required in traditional software deployment.

The installation process involves executing specific commands in a PowerShell terminal to trigger the winget utility. The package manager automatically handles the retrieval of the Microsoft Foundry Local package and its required dependencies from the configured repository. This automation ensures that the software is installed in the correct directory structure without requiring user intervention for path management or library linking.

This method is designed to simplify setup for administrators and developers who prefer scriptable, repeatable installation procedures. It integrates with existing Windows management workflows, allowing for consistent deployment across multiple machines. The tool focuses on providing a reliable, low-friction entry point for accessing Microsoft Foundry Local capabilities without the complexity of manual environment setup.

## Source Notes

- 2026-04-12: [[lab-notes/2026-04-12-Nvidia-CUDA-GPU-Parallel-Computing-for-AI-Advancement|Nvidia CUDA GPU Parallel Computing for AI Advancement]] · [▶ source](https://www.youtube.com/watch?v=pPStdjuYzSI)
