---
type: concept
domain: business-strategy
group: products-operations-business-economics
tags:
  - "local-models"
  - "microsoft-foundry"
  - "powershell"
  - "winget"
  - "model-deployment"
  - "gpu-computing"
aliases:
  - "Foundry Local"
  - "Microsoft Foundry Local Installation"
summary: A tool for installing and running Microsoft Foundry models locally using PowerShell and winget.
updated: 2026-05-01
---
# Microsoft Foundry Local

Microsoft Foundry Local is a tool that enables users to install and run [[concepts/agent-factory|Microsoft Foundry]] models on their local machines. It is distributed through the [[concepts/winget-package-management|Windows Package Manager]] ([[concepts/winget|winget]]) and can be installed using PowerShell with the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This approach allows developers and organizations to work with [[concepts/rich-tooling|Foundry]] models without requiring cloud-based infrastructure.

## Installation and Setup

The primary method for installation is through PowerShell and the winget [[concepts/package-manager|package manager]] on [[entities/windows|Windows]] systems. The straightforward [[concepts/command-line-interface|command-line]] installation process makes it accessible to users familiar with Windows package management workflows.

## Model Support

Microsoft Foundry Local supports various models optimized for different [[concepts/hardware|hardware]] configurations and [[concepts/scenarios|use cases]]. Models such as phi-4 are available for [[concepts/local-deployment|local deployment]], with support for tasks including [[concepts/chat-completion|chat completion]]. Models can be deployed on GPU-enabled devices to take advantage of hardware acceleration where available.
