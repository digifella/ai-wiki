---
type: entity
tags:
  - "entity"
  - "docker"
  - "containerization"
  - "linux"
  - "wsl"
  - "gpu-passthrough"
  - "registry"
  - "native-linux"
  - "integration"
aliases:
  - "Docker Registry"
  - "Docker Image Repository"
summary: Docker Hub is a container registry integrated with WSL for native Linux containerization and GPU passthrough.
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
# Docker Hub

Docker Hub is a cloud-based registry service that serves as the default container image repository for Docker. It provides centralized storage and distribution of container images, allowing developers to push, pull, and share containerized applications. Docker Hub hosts both official images maintained by Docker and community-contributed images.

## Integration with WSL

Docker Hub integrates with Windows Subsystem for Linux (WSL) to enable native Linux containerization on Windows systems. This integration allows Windows users to run Docker containers with native Linux kernel support through WSL2, rather than relying on emulation or virtualization layers. The WSL integration provides improved performance and compatibility compared to earlier Docker Desktop implementations on Windows.

## GPU Support

Docker Hub supports GPU passthrough when used with WSL, enabling containerized applications to access graphics processing units directly. This capability is useful for compute-intensive workloads such as machine learning, scientific computing, and graphics processing tasks that benefit from GPU acceleration.

## Source Notes
- 2026-07-04: [[lab-notes/2026-07-04-WSL-Containers-Native-Linux-Containerization-Docker-Hub|WSL Containers: Native Linux Containerization, Docker Hub Integration, GPU Passthrough]]
