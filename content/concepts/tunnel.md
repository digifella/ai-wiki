---
type: concept
domain: security-infrastructure
group: deployment-docker-services
tags:
  - "cloudflare-tunnel"
  - "cloudflared"
  - "wsl2"
  - "cortex-api"
  - "deployment"
  - "networking"
  - "infrastructure"
aliases:
  - "Cloudflare Tunnel Setup"
  - "cloudflared Installation"
summary: Instructions for installing and configuring Cloudflare Tunnel to provide access to the Cortex API using cloudflared on WSL2.
updated: 2026-05-01
---
# Tunnel

Cloudflare Tunnel provides [[concepts/secure|secure]] access to local services without exposing them directly to the internet. In this context, it enables [[concepts/remote-access|remote access]] to the [[entities/cortex-api|Cortex API]] by creating an encrypted [[concepts/connection|connection]] through Cloudflare's infrastructure. This approach eliminates the need for complex firewall configuration or public IP [[concepts/exposure|exposure]] while maintaining end-to-end security.

## Installation on WSL2

Installing cloudflared on [[entities/windows|Windows]] Subsystem for Linux 2 (WSL2) requires downloading the Linux binary and making it executable. The latest release can be obtained directly from the cloudflared GitHub repository using curl, then placed in the system PATH. After installation, the binary should be marked as executable to enable [[concepts/command-line-interface|command-line]] usage throughout the WSL2 environment.

## Configuration and Usage

Once installed, cloudflared can be configured to tunnel traffic to the Cortex API [[concepts/running|running]] locally. Quick tunnel mode provides temporary access without requiring extensive configuration, making it suitable for development and [[concepts/testing|testing]] [[concepts/scenarios|scenarios]]. For persistent deployments, cloudflared should be configured with appropriate [[concepts/authentication|authentication]] credentials and tunnel settings to establish a stable connection between the local service and Cloudflare's edge network.
