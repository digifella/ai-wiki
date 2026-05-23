---
type: concept
domain: security-infrastructure
tags:
  - "virtual-private-network"
  - "network-security"
  - "remote-access"
  - "encryption"
  - "data-privacy"
  - "cybersecurity"
aliases:
  - "VPN"
  - "Virtual Private Network"
summary: This page covers the concept of VPNs.
updated: 2026-05-23
group: privacy-security-guardrails
title: VPNs
---
# Vpn

A virtual [[concepts/private-network|private network]] (VPN) is a technology that creates an encrypted [[concepts/connection|connection]] between a user's device and a remote server, routing internet traffic through that server to mask the user's IP address and location. VPNs are commonly used to enhance [[concepts/privacy|privacy]] by preventing internet service providers and network administrators from viewing browsing activity, and to access services that may be geographically restricted. The encryption protects data from being intercepted on unsecured networks, such as public WiFi.

## How VPNs Work

VPNs function by establishing a [[concepts/secure|secure]] [[concepts/tunnel|tunnel]] through which all data passes. When a user connects to a VPN server, their device encrypts outgoing traffic and sends it to the VPN provider's server, which then decrypts and forwards it to the destination website or service. Return traffic follows the same encrypted path back to the user. This process effectively hides the user's real IP address from the services they access, replacing it with the VPN server's address.

## Common Use Cases and Limitations

VPNs are used for protecting sensitive communications on public networks, accessing corporate resources remotely, circumventing geographic content restrictions, and maintaining privacy from network monitoring. However, VPNs do not provide complete anonymity—the VPN provider itself can see user traffic, and [[concepts/security|security]] ultimately depends on the provider's trustworthiness and technical [[concepts/adoption|implementation]]. VPN effectiveness also varies by protocol; modern protocols like WireGuard and OpenVPN generally offer stronger security than older alternatives.
