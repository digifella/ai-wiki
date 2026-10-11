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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-23" }
---
# Wsl2

WSL2 ([[entities/wsl|Windows Subsystem for Linux]] 2) is a compatibility layer that enables running a Linux environment directly on [[entities/windows-10|Windows 10]] and [[entities/windows-11|Windows 11]]. It provides a lightweight [[concepts/vps|virtual machine]] with a real Linux kernel, making it suitable for [[concepts/development-workflows|development workflows]] and running server applications. WSL2 offers improved performance and full system call compatibility compared to its predecessor WSL1, allowing users to run native Linux binaries without modification.

## Cloudflared Installation for Cortex API

To configure the [[entities/cortex-api|Cortex API]] using Cloudflare [[concepts/tunnel|Tunnel]], `cloudflared` must be installed within the WSL2 Linux distribution. This process typically involves updating the [[concepts/package-manager|package manager]] repositories and installing the binary via the distribution's native package manager, such as `apt` for Debian-based systems or `dnf` for Fedora-based systems. Once installed, the binary can be executed to establish the tunnel [[concepts/connection|connection]] required for the API's network routing.
