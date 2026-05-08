---
type: concept
domain: security-infrastructure
group: devices-access-networks
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
updated: 2026-05-01
---
# DNS Lookups

DNS (Domain Name System) lookups are network requests that translate human-readable domain names into IP addresses, enabling devices to locate and connect to websites and services. When you enter a URL in your browser or access an online resource, your device must perform a DNS lookup to find the corresponding server. By default, these requests are sent in plain text to your Internet Service Provider's DNS resolver, which means your ISP can see which websites and services you access.

## Encryption and Privacy

Standard DNS lookups lack encryption, allowing ISPs and other network observers to track browsing activity even when the website itself uses HTTPS. Encrypted DNS protocols address this [[concepts/vulnerability|vulnerability]] by protecting the contents of DNS queries from inspection. The two primary implementations are DNS over HTTPS (DoH) and DNS over TLS (DoT), which encrypt DNS traffic using standard encryption protocols. This prevents ISPs from monitoring which sites users visit while still allowing the DNS resolution process to function normally.

## Trade-offs and Considerations

Switching to encrypted DNS improves privacy against [[concepts/internet-privacy|ISP tracking]] but introduces different considerations. Queries are redirected to third-party DNS providers, which then have access to browsing data instead of the ISP. Users must evaluate whether they trust their chosen DNS provider. Additionally, encrypted DNS does not provide the same comprehensive protection as a VPN, which encrypts all network traffic beyond just DNS requests. For users seeking maximum privacy from their ISP, encrypted DNS is typically used alongside other privacy tools rather than as a complete [[concepts/solution|solution]].
