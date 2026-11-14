---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "dns"
  - "encryption"
  - "privacy"
  - "isp-tracking"
  - "vpn"
  - "security"
aliases:
  - "Encrypted DNS"
  - "DNS Privacy"
summary: DNS lookups are network requests that can be encrypted to prevent ISP tracking and improve privacy.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: devices-access-networks
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# DNS Lookups

DNS ([[concepts/dns|Domain Name System]]) lookups are network requests that translate human-readable domain names into IP addresses. When a user enters a URL in their browser or accesses an online resource, their device must perform a DNS lookup to identify the corresponding server's IP address. This process is fundamental to how the internet functions, occurring thousands of times daily for most users without conscious [[concepts/conscious-thought|awareness]].

## Privacy and Security Considerations

By default, DNS lookups are sent in plain text to an Internet Service Provider's DNS resolver. This means that ISPs, and potentially other network observers, can see which websites a user visits based on the domain names being queried. This creates a [[concepts/privacy|privacy]] [[concepts/vulnerability|vulnerability]] distinct from whether the actual web traffic itself is encrypted.

To address this issue, several [[concepts/encrypted-dns|encrypted DNS]] protocols have been developed, including DNS over HTTPS (DoH) and DNS over TLS (DoT). These protocols encrypt DNS queries, preventing ISPs and network administrators from observing which domains are being accessed. However, encrypted DNS does not hide the IP addresses of servers being connected to, nor does it provide anonymity if the DNS provider itself retains query logs.

## Implementation and Trade-offs

Users can configure encrypted DNS through their operating system settings, browser preferences, or by selecting an alternative DNS provider. Common providers include Cloudflare, [[concepts/google-search|Google]] DNS, and Quad9. The choice of DNS provider involves trade-offs between privacy, performance, and filtering capabilities, as DNS providers may maintain different [[concepts/policies|policies]] regarding query logging and [[concepts/algorithmic-filtering|content filtering]].
