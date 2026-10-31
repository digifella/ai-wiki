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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Winget Install

Winget Install is a command-line deployment method for Microsoft Foundry Local and its associated models, utilizing the Windows Package Manager (winget) via PowerShell. This approach leverages Windows' native package management infrastructure to streamline the installation process for users within Windows environments. By automating dependency resolution and file placement, it reduces the need for manual configuration steps typically required in traditional software deployment.

The installation process involves executing specific commands in a PowerShell terminal to trigger the package manager. Users invoke the `winget install` command followed by the specific identifier for the Foundry Local package. The tool automatically handles the download, verification, and installation of the necessary binaries and dependencies, ensuring a consistent environment setup without requiring external package managers or complex scripting.

This method is designed for efficiency and ease of use on Windows systems. It integrates with the existing Windows security and update frameworks, allowing for straightforward management of the software lifecycle. Administrators and developers can use this tool to quickly provision local AI models and runtime environments, facilitating rapid development and testing workflows within the Microsoft ecosystem.

## Source Notes

- 2026-04-12: [[lab-notes/2026-04-12-Nvidia-CUDA-GPU-Parallel-Computing-for-AI-Advancement|Nvidia CUDA GPU Parallel Computing for AI Advancement]] · [▶ source](https://www.youtube.com/watch?v=pPStdjuYzSI)
