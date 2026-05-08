---
type: entity
tags:
  - "api"
  - "cloudflare-tunnel"
  - "setup"
  - "wsl2"
  - "cloudflared"
aliases:
  - "Cortex API Setup"
  - "Cloudflare Tunnel for Cortex"
summary: Instructions for setting up the Cortex API using Cloudflare Tunnel and WSL2.
updated: 2026-05-01
---
# Cortex Api

Cortex Api is a service that can be exposed to the internet using Cloudflare [[concepts/tunnel|Tunnel]], a [[concepts/secure|secure]] tunneling [[concepts/solution|solution]] that eliminates the need for open ports or complex firewall configuration. This setup is particularly useful for [[concepts/developer-platforms|development environments]] [[concepts/running|running]] on [[entities/windows|Windows]] Subsystem for Linux 2 (WSL2), where direct network access may be restricted or inconvenient to manage.

## Installation on WSL2

To set up Cortex Api with Cloudflare Tunnel on WSL2, begin by installing cloudflared, Cloudflare's [[concepts/command-line-interface|command-line]] tool. Download the Linux binary and install it to a system path:

```
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared
chmod +x /usr/local/bin/cloudflared
```

Once installed, cloudflared can be configured to create a tunnel between your local Cortex Api instance and Cloudflare's network, making the service accessible remotely without exposing your development machine directly to the internet.

## Quick Tunneling

Cloudflare Tunnel supports quick tunnel mode for temporary access, which is useful for [[concepts/testing|testing]] and development purposes. This mode requires minimal configuration and can be established immediately after cloudflared installation.
