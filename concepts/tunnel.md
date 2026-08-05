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
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Tunnel

Cloudflare Tunnel is a service that establishes secure, encrypted connections between local services and Cloudflare's global network infrastructure. Rather than exposing services directly to the internet through public IP addresses or firewall rules, Tunnel routes traffic through Cloudflare's edge network, reducing the attack surface and eliminating the need for inbound network configuration on private systems.

## Application to Cortex API

In the context of the Cortex API, Tunnel enables authorized remote users to access the API without requiring direct internet exposure of the host system. This is particularly useful for development and testing scenarios where API access is needed from external locations but security and network isolation must be maintained. The connection is established outbound from the local system running the Cortex API, meaning no inbound firewall rules or port forwarding are necessary.

## Installation and Configuration

Cloudflare Tunnel on Windows Subsystem for Linux 2 (WSL2) requires installing and configuring `cloudflared`, the command-line client that manages the tunnel connection. The setup process involves authenticating with a Cloudflare account, creating a tunnel configuration, and starting the `cloudflared` daemon to maintain the encrypted connection to Cloudflare's network. Once configured, the Cortex API becomes accessible through a Cloudflare-provided URL to users who have been granted appropriate access permissions.
