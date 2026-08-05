---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "dns"
  - "privacy"
  - "encryption"
  - "networking"
  - "isp-tracking"
  - "doh-dot"
  - "security"
aliases:
  - "Domain Name System"
  - "DNS Lookup"
  - "Encrypted DNS"
summary: The Domain Name System translates domain names to IP addresses, with unencrypted queries exposing user browsing habits to ISPs unless protected by solutions like DoH or DoT.
updated: 2026-07-11
group: devices-access-networks
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# DNS

The Domain Name System (DNS) translates human-readable domain names (e.g., `example.com`) to IP addresses. By default, DNS queries are unencrypted, exposing browsing [[concepts/habits|habits]] to network observers.

## Privacy Implications
- Unencrypted DNS queries are visible to ISPs, enabling them to track visited domains and monetize user data ("making you the product").
- HTTPS encrypts *content* (e.g., passwords, emails) but **not** DNS queries.

## Encrypted DNS Solutions
- **DNS over HTTPS (DoH)** and **DNS over TLS (DoT)** encrypt DNS queries, preventing [[concepts/isp-tracking|ISP tracking]].
- Free, lightweight alternative to full [[concepts/vpn|VPNs]] for [[concepts/dns-lookups|DNS privacy]].
- Requires client-side configuration (e.g., in browser/OS) but no third-party [[concepts/trust|trust]].
- **Cloudflare setup**: Configured for [[concepts/encrypted-dns|encrypted DNS]] to enhance [[concepts/privacy|privacy]] and [[concepts/security|security]].

## Why VPNs Are Oversold
- VPNs encrypt all traffic but are often marketed as the "ultimate" privacy [[concepts/solution|solution]], despite being costly and requiring trust in a provider.
- Encrypted DNS solves the specific problem of DNS tracking without the overhead of a full VPN.

> Reference: Encrypted dns [[entities/dave|dave]] garage ([[entities/daves-garage|Dave's Garage]] video: *"Are You The Product? [[concepts/internet-privacy|ISP Tracking]] vs VPNs vs Encrypted DNS"*)
> [Video link](https://www.youtube.com/watch?v=lxFd5xAN4cg)
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
