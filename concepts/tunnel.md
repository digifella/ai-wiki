---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tunnel

Cloudflare Tunnel is a service that establishes secure, encrypted connections between local services and Cloudflare's global network infrastructure. Rather than exposing services directly to the internet through public IP addresses or firewall rules, Tunnel routes traffic through Cloudflare's edge network, reducing the attack surface and eliminating the need for inbound network configuration on private systems.

## Application to Cortex API

In the context of the Cortex API, Tunnel enables authorized remote users to access the API without requiring direct internet exposure of the host system. This approach allows the API to remain accessible to authenticated clients while keeping the underlying server hidden from public scanning and direct connection attempts.

## Implementation on WSL2

The configuration utilizes `cloudflared` within the Windows Subsystem for Linux 2 (WSL2) environment. This setup requires specific instructions for installing the daemon and configuring the tunnel to bridge the WSL2 network interface with Cloudflare’s edge, ensuring stable connectivity for the Cortex API while maintaining the security benefits of the tunnel architecture.
