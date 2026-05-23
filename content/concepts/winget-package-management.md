---
type: concept
domain: tools-platforms
tags:
  - "concept"
  - "package-management"
  - "windows"
  - "cli-tools"
  - "microsoft"
  - "foundry-local"
  - "python-tools"
aliases:
  - "Windows Package Manager"
  - "Microsoft Winget"
summary: Command-line package manager for Windows that enables installation of applications like Microsoft Foundry Local and development tools via PowerShell.
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Winget Package Management

[[concepts/winget|Winget]] ([[entities/winget|Windows Package Manager]]) is a [[concepts/command-line-interface|command-line]] tool developed by [[entities/microsoft|Microsoft]] for managing [[concepts/software-installation|software installation]] and updates on [[entities/windows|Windows]] systems. It provides a centralized interface for discovering, installing, configuring, and upgrading [[concepts/software|applications]] through PowerShell or the Windows Command Prompt. Winget streamlines package management on Windows by reducing the need to manually download installers or navigate vendor websites.

## Core Functionality

Winget works by querying a repository of available packages and handling installation through standardized [[concepts/commands|commands]]. Users can search for applications, install them with a single command, and manage updates across multiple applications. The tool supports both interactive and scripted installation workflows, making it suitable for both individual users and system administrators managing multiple machines.

## Use Cases

Common applications available through Winget include development tools, utilities, and productivity software. For [[concepts/development-workflows|development workflows]], it enables quick provisioning of environments by automating the installation of compilers, version [[concepts/power|control]] systems, and integrated [[concepts/developer-platforms|development environments]]. This reduces [[concepts/setup|setup]] time when configuring new machines or containerized environments for development purposes.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]