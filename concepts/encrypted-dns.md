---
type: concept
domain: maths-logic-crypto
group: cryptography-codes-ciphers
tags:
  - "dns-encryption"
  - "network-security"
  - "cryptography"
  - "dns-security"
  - "post-quantum-cryptography"
aliases:
  - "DNS encryption"
summary: A concept regarding the encryption of the Domain Name System.
updated: 2026-07-15
title: Encrypted DNS
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

Encrypted DNS refers to the practice of securing Domain Name System (DNS) queries and responses through cryptographic protocols. Traditional DNS operates in plaintext, meaning that DNS lookups—which translate domain names into IP addresses—are visible to network administrators, Internet Service Providers, and potentially other parties with network access. Encrypted DNS protects this information by preventing unauthorized observation of which websites a user visits.

## Primary Protocols

Two main protocols enable encrypted DNS. DNS over HTTPS (DoH) encapsulates DNS queries within standard HTTPS traffic, allowing DNS lookups to blend with regular web browsing and bypass network filtering. DNS over TLS (DoT) establishes a separate encrypted connection on port 853, providing a dedicated channel for DNS traffic. Both protocols rely on existing cryptographic standards to ensure that queries remain confidential between the client and the resolver.

## Practical Implications

While encrypted DNS enhances privacy, it introduces trade-offs. Network administrators lose visibility into DNS queries, which can complicate security monitoring and content filtering. Encrypted DNS also concentrates traffic with specific resolvers, potentially centralizing oversight with larger service providers. Adoption has been gradual, with varying support across operating systems and network infrastructure.

## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
- 2026-04-30: Post-Quantum Cryptography · [▶ source](https://www.youtube.com/watch?v=_MoRcYLN-7U)
