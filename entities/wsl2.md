---
type: entity
tags:
  - "wsl2"
  - "cloudflared"
  - "cloudflare-tunnel"
  - "installation"
  - "cortex-api"
  - "setup"
aliases:
  - "WSL2 Cloudflared Setup"
  - "Cortex API Tunnel Installation"
summary: Instructions for installing cloudflared on WSL2 for Cortex API setup using Cloudflare Tunnel.
updated: 2026-07-23
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-23" }
---
# Wsl2

WSL2 ([[entities/wsl|Windows Subsystem for Linux]] 2) is a compatibility layer that enables running a [[entities/linux|Linux]] environment directly on [[entities/windows-10|Windows 10]] and [[entities/windows-11|Windows 11]]. It provides a lightweight [[concepts/vps|virtual machine]] with a real Linux kernel, making it suitable for [[concepts/development-workflows|development workflows]] and running server applications. WSL2 offers improved performance and full system call compatibility compared to its predecessor WSL1, allowing users to run native Linux binaries without modification.

## Technical Architecture

WSL2 uses Hyper-V virtualization to run a genuine Linux kernel within a managed lightweight virtual machine environment. This approach differs fundamentally from WSL1, which relied on a translation layer to interpret Linux system calls. The integration with Windows allows for seamless file system access between the two operating systems and native networking capabilities.

## Common Use Cases

WSL2 is widely used by developers for local testing, running containerized applications via [[concepts/docker|Docker]], and managing development tools that traditionally require a Linux environment. It eliminates the need for separate virtual machines or dual-boot configurations for many development scenarios. System administrators and DevOps professionals frequently use WSL2 for running command-line utilities and services like [[entities/cloudflared|cloudflared]] for tasks such as setting up [[entities/cloudflare-tunnel|Cloudflare Tunnel]] connections.
