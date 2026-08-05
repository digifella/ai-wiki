---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "docker"
  - "containerization"
  - "cross-platform"
  - "kubernetes"
  - "development-tools"
  - "infrastructure"
  - "wsl2"
  - "cli-tools"
aliases:
  - "Docker Desktop App"
  - "Docker GUI"
  - "Docker Client"
  - "Docker Platform"
summary: "Docker Desktop is a cross-platform application for macOS, Windows, and Linux that provides a graphical interface and CLI tools to build, share, and run containers, including an integrated Kubernetes cluster."
updated: 2026-07-11
group: deployment-docker-services
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Docker Desktop

**[[entities/docker-desktop|Docker Desktop]]** is a cross-platform application for [[entities/macos|macOS]], [[entities/windows|Windows]], and [[entities/linux|Linux]] that allows developers to build, share, and run [[concepts/containerization-technology|containers]]. It provides a graphical interface and [[concepts/cli-tools|CLI tools]] to manage [[entities/docker]] containers, images, and volumes.

## Key Features
- **[[concepts/engine|Engine]]**: Runs the [[concepts/docker|Docker]] Engine daemon.
- **Kubernetes**: Integrated single-[[entities/nodejs|node]] Kubernetes cluster.
- **Extensions**: Marketplace for [[concepts/plugins|plugins]] and tools.
- **Cross-Platform**: Unified [[concepts/experience|experience]] across OS environments.

## Alternatives & Evolution
- **WSL 2 Integration**: Docker Desktop leverages WSL 2 for Linux container performance on Windows.
- **Native WSL Solutions**: Emerging native tools aim to replace third-party desktop applications.
	- See [[lab-notes/2026-07-07-WSLC-Microsofts-Native-WSL-Container-Solution-Replacing|WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop]] for details on [[entities/microsoft|Microsoft]]'s `wslc` CLI.

## References
- [WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop](https://www.youtube.com/watch?v=4mkSbJUZpLs)
