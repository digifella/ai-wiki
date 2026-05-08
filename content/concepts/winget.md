---
type: concept
domain: tools-platforms
group: platforms-runtimes-environments
tags:
  - "package-manager"
  - "command-line"
  - "powershell"
  - "windows"
  - "foundry"
  - "installation"
aliases:
  - "Windows Package Manager"
  - "Microsoft Package Manager"
summary: Winget is a command-line tool used to install Microsoft Foundry Local via PowerShell.
updated: 2026-05-01
---
# Winget

Winget is a [[concepts/command-line-interface|command-line]] [[concepts/package-manager|package manager]] for [[entities/windows|Windows]] that allows users to discover, install, and manage [[concepts/software|software]] from the command line or PowerShell. Developed by Microsoft, it provides a streamlined alternative to manual [[concepts/software-installation|software installation]] by automating the download and setup process for applications available in its repository.

## Installation of Foundry Local

Winget can be used to install [[concepts/microsoft-foundry-local|Microsoft Foundry Local]] directly through PowerShell using the command `[[concepts/winget-install|winget install]] Microsoft.FoundryLocal`. This approach simplifies the setup process for users who prefer [[concepts/terminal-based-workflows|command-line workflows]] or need to automate [[concepts/application-delivery|software deployment]] across multiple systems.
