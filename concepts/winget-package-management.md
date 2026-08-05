---
type: concept
domain: tools-platforms-infrastructure
group: platforms-runtimes-environments
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
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Winget Package Management

Winget (Windows Package Manager) is a command-line package manager developed by Microsoft for installing, updating, and managing software on Windows systems. It provides access to a centralized repository of applications that can be installed through PowerShell or the Windows Command Prompt, streamlining software distribution by eliminating the need to manually download installers from multiple sources. Winget is built on open-source foundations and represents Microsoft's effort to bring standardized package management to Windows, similar to package managers available on Linux distributions.

## Installation and Usage

Winget is available on Windows 10 and later versions, typically included with the App Installer application or available for download from the Microsoft Store. Users can install applications by running simple commands such as `winget install [application-name]`, which automatically handles downloading, installing, and configuring the specified software. The tool supports searching for packages, listing installed applications, and managing updates across multiple installed programs.

## Applications and Development Tools

Winget enables efficient installation of a wide range of software including development tools, utilities, and applications like Microsoft Foundry Local. This capability is particularly useful for developers and system administrators who need to quickly set up development environments or deploy multiple applications across systems, reducing manual configuration work and improving consistency across deployments.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
