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
updated: 2026-10-05
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Winget Package Management

Winget, short for Windows Package Manager, is an open-source command-line utility developed by Microsoft for installing, updating, and managing software on Windows operating systems. It provides a centralized repository of applications, allowing users to retrieve software directly from the command line via PowerShell or the Windows Command Prompt. This approach streamlines software distribution by eliminating the need to manually download and execute installers from various vendor websites.

The tool was introduced to bring standardized package management capabilities to the Windows ecosystem, addressing the fragmentation often found in traditional Windows software installation processes. By leveraging a manifest-based system, Winget can automatically resolve dependencies and configure installation parameters, ensuring consistent deployment across different machines. It supports a wide range of software types, including development tools, system utilities, and consumer applications.

## Repository and Integration

Winget connects to the Microsoft-hosted winget-pkgs repository, which contains manifests for thousands of open-source and commercial applications. These manifests define the package metadata, source URLs, and installation instructions. The tool is integrated into Windows 10 version 1809 and later, as well as Windows 11, often pre-installed or available via the Microsoft Store. It also supports third-party repositories, allowing organizations to manage internal software packages alongside public ones.

## Usage and Extensibility

Users interact with Winget through a set of commands that handle tasks such as searching for packages, installing specific versions, and removing existing software. It is designed to be scriptable, making it suitable for automated deployment in enterprise environments and continuous integration pipelines. The open-source nature of the project encourages community contributions to the manifest repository, ensuring that new and updated software is available to users promptly.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
