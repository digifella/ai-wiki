---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "container-images"
  - "docker"
  - "oci-compliance"
  - "immutability"
  - "layered-architecture"
  - "portability"
  - "wsl-containers"
  - "software-packaging"
aliases:
  - "Container Image"
  - "OCI Image"
  - "Docker Image"
  - "Application Package"
summary: Container images are immutable, layered, and portable executable packages containing all necessary components to run an application consistently across environments.
updated: 2026-07-11
group: deployment-docker-services
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Container Images

**Container Images** are lightweight, standalone, executable packages of software that include everything needed to run an application: code, runtime, system tools, system libraries, and settings. They serve as the read-only template for creating [[concepts/containerization-technology|Containers]].

## Core Characteristics
- **Immutability**: Once built, an image does not change; [[concepts/software-updates|updates]] require building a new image.
- **Layered Architecture**: Built using a series of layers (e.g., base OS, dependencies, application code), enabling efficient [[entities/storage|storage]] and sharing.
- **Portability**: Ensures consistent behavior across different environments (development, testing, production).

## Related Technologies & Integrations
- **[[concepts/docker|Docker]]**: The most common platform for building, distributing, and running container images via [[entities/docker-hub|Docker Hub]].
- **OCI [[concepts/compliance|Compliance]]**: Adherence to the Open Container Initiative standards ensures interoperability between different container runtimes.
- **[[concepts/wsl-containers|WSL Containers]]**: A newer [[concepts/native-linux-containerization|native Linux containerization]] technology integrated directly into the [[entities/wsl|Windows Subsystem for Linux]] (WSL), offering an alternative to traditional [[entities/docker-desktop|Docker Desktop]] setups on [[entities/windows|Windows]].
	- See detailed analysis in [[lab-notes/2026-07-04-WSL-Containers-Native-Linux-Containerization-Docker-Hub|WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough]].
	- Key features include [[concepts/native-integration|native integration]], [[entities/docker|Docker]] Hub compatibility, and [[concepts/gpu-passthrough|GPU passthrough]] capabilities.

## References
- [WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough](https://www.youtube.com/watch?v=sF5opJgyh_A)
