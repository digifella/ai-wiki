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
updated: 2026-05-01
---
# Wsl2

WSL2 ([[entities/windows|Windows]] Subsystem for Linux 2) is a compatibility layer that enables [[concepts/running|running]] a Linux environment directly on [[entities/windows-10|Windows 10]] and [[entities/windows-11|Windows 11]]. It provides a lightweight virtual machine with a real Linux kernel, making it suitable for [[concepts/development-workflows|development workflows]] and running server [[concepts/software|applications]].

## Cloudflared Installation on WSL2

Cloudflared can be installed on WSL2 to enable Cloudflare Tunnel connectivity. The installation process involves downloading the Linux binary from the cloudflared GitHub releases page and making it executable. The standard installation uses the following steps: download the latest Linux AMD64 binary to `/usr/local/bin/cloudflared` and set executable permissions using `chmod +x`.

## Cortex API Setup

Cloudflared on WSL2 is commonly used to establish [[concepts/secure|secure]] tunnels for applications like Cortex API. Once installed, cloudflared can be configured to create a Cloudflare Tunnel, providing a secure [[concepts/connection|connection]] between the local WSL2 environment and Cloudflare's edge network without requiring traditional firewall configuration or port forwarding.
