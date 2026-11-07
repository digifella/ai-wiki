---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "wsl2"
  - "linux-containers"
  - "docker-alternative"
  - "native-integration"
  - "gpu-passthrough"
  - "windows-subsystem"
  - "oci-compliance"
  - "container-runtime"
  - "wslc"
aliases:
  - "WSL 2 Containers"
  - "Native WSL Containerization"
  - "WSL Linux Containers"
  - "Docker-less WSL"
  - "wslc"
summary: WSL Containers enable native Linux container execution on Windows via the WSL 2 kernel, eliminating the need for a separate Docker daemon while maintaining OCI compatibility and supporting GPU passthrough. The `wslc` CLI provides a native Microsoft alternative to Docker Desktop.
updated: 2026-07-12
group: deployment-docker-services
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# WSL Containers

**[[concepts/native-linux-containerization|WSL Containers]]** represent a shift in [[concepts/containerization|containerization]] on [[entities/windows|Windows]], moving from external runtimes like [[entities/docker]] to [[concepts/native-integration|native integration]] within the [[entities/wsl|Windows Subsystem for Linux]] (WSL) kernel. This technology enables direct [[entities/linux|Linux]] container execution without the overhead of a separate daemon, leveraging the WSL 2 lightweight utility VM architecture.

## Key Features & Capabilities

- **Native Integration**: [[concepts/containerization-technology|Containers]] run directly on the WSL 2 kernel, eliminating the need for a separate [[concepts/docker|Docker]] daemon or Hyper-V [[concepts/disconnection|isolation]] layers for basic container operations.
- **[[entities/docker-hub|Docker Hub]] Compatibility**: Maintains full compatibility with Docker Hub images and standard OCI-compliant container formats, ensuring seamless migration from traditional Docker workflows.
- **`wslc` CLI & [[concepts/docker-desktop|Docker Desktop]] Replacement**: [[entities/microsoft|Microsoft]]'s native `wslc` [[concepts/cli-tools|command-line interface]] allows for direct [[concepts/container-management|container management]], effectively replacing the need for [[entities/docker-desktop|Docker Desktop]] or other third-party container managers on [[concepts/microsoft-windows|Windows]]. This approach reduces resource overhead and simplifies the [[concepts/coding-workspace|development environment]] by removing the dependency on external GUI applications for container orchestration.

## References

- [WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop](https://www.youtube.com/watch?v=4mkSbJUZpLs)
- [[lab-notes/2026-07-07-WSLC-Microsofts-Native-WSL-Container-Solution-Replacing|WSLC: Microsoft's Native WSL Container Solution Replacing Docker Desktop]]
