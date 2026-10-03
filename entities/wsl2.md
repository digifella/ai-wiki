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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-23" }
---
# Wsl2

WSL2 (Windows Subsystem for Linux 2) is a compatibility layer that enables running a Linux environment directly on Windows 10 and Windows 11. It provides a lightweight virtual machine with a real Linux kernel, making it suitable for development workflows and running server applications. WSL2 offers improved performance and full system call compatibility compared to its predecessor WSL1, allowing users to run native Linux binaries without modification.

## Cloudflared Installation for Cortex API

To configure the Cortex API using Cloudflare Tunnel, `cloudflared` must be installed within the WSL2 Linux distribution. This process typically involves downloading the official binary from the Cloudflare website or using the distribution's package manager, such as `apt` for Debian-based systems or `dnf` for Fedora-based systems. Ensuring the binary is executable and accessible via the system PATH is a prerequisite for subsequent configuration steps.

## Network Configuration and Tunnel Setup

WSL2 utilizes a NAT-based network interface, which requires specific port forwarding rules to allow external traffic to reach services running inside the subsystem. For Cortex API integration, users must configure `cloudflared` to create a secure tunnel that maps local ports to a Cloudflare edge location. This involves generating a tunnel credential file and running the `cloudflared tunnel` command with the appropriate route flags to expose the API endpoint securely through the Cloudflare network.
