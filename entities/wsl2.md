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
updated: 2026-10-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-23" }
---
# Wsl2

WSL2 (Windows Subsystem for Linux 2) is a compatibility layer that enables running a Linux environment directly on Windows 10 and Windows 11. It provides a lightweight virtual machine with a real Linux kernel, making it suitable for development workflows and running server applications. WSL2 offers improved performance and full system call compatibility compared to its predecessor WSL1, allowing users to run native Linux binaries without modification.

## Cloudflared Installation

To configure a Cortex API setup using a Cloudflare Tunnel, the `cloudflared` binary must be installed within the WSL2 Linux distribution. This typically involves using the distribution's package manager, such as `apt` for Debian-based systems or `dnf` for Fedora-based systems, to install the official Cloudflare Tunnel client.

After installation, the service can be configured to establish a secure tunnel to the Cloudflare network. This allows the Cortex API running inside the WSL2 environment to be exposed to the internet securely without requiring complex port forwarding or firewall rules on the host Windows machine.
