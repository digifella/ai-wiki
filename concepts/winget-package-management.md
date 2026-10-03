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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Winget Package Management

Winget, short for Windows Package Manager, is an open-source command-line utility developed by Microsoft for installing, updating, and managing software on Windows operating systems. It provides a centralized repository of applications, allowing users to retrieve software directly from the command line via PowerShell or the Windows Command Prompt. This approach streamlines software distribution by eliminating the need to manually download and execute installers from various vendor websites.

The tool was introduced to bring standardized package management capabilities to the Windows ecosystem, mirroring the functionality of package managers commonly found in Linux distributions. By leveraging a consistent interface, Winget simplifies the deployment of development tools, system utilities, and consumer applications. It supports the installation of packages from the official Microsoft repository as well as third-party sources, facilitating automated workflows and consistent environment setup across different machines.

Winget is built on open-source foundations and is integrated into modern versions of Windows 10 and Windows 11. It enables administrators and developers to script the provisioning of software environments, ensuring that specific versions of applications are installed reliably. The package manager handles dependencies and updates, reducing the administrative overhead associated with maintaining software inventories on Windows endpoints.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
