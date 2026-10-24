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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tunnel

Cloudflare Tunnel is a service that establishes secure, encrypted connections between local services and Cloudflare's global network infrastructure. Rather than exposing services directly to the internet through public IP addresses or firewall rules, Tunnel routes traffic through Cloudflare's edge network, reducing the attack surface and eliminating the need for inbound network configuration on private systems.

## Application to Cortex API

In the context of the Cortex API, Tunnel enables authorized remote users to access the API without requiring direct internet exposure of the host system. This approach allows the Cortex API to remain hidden behind private networks while still being reachable by authenticated clients through Cloudflare’s secure edge.

## Installation and Configuration on WSL2

To implement this setup on Windows Subsystem for Linux 2 (WSL2), users must install the `cloudflared` binary within the Linux environment. Configuration involves creating a tunnel identity file and registering the tunnel with Cloudflare Zero Trust. The `cloudflared` service is then started to maintain the persistent connection, ensuring that requests to the Cortex API are securely forwarded from Cloudflare’s edge to the local WSL2 instance.
