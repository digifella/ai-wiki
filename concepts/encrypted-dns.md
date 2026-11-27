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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
title: Encrypted DNS
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

Encrypted DNS refers to the practice of securing Domain Name System (DNS) queries and responses through cryptographic protocols. Traditional DNS operates in plaintext, meaning that DNS lookups—which translate domain names into IP addresses—are visible to network administrators, Internet Service Providers, and potentially other parties with network access. Encrypted DNS protects this information by preventing unauthorized observation of which websites a user visits.

Two main protocols enable this security. DNS over HTTPS (DoH) encapsulates DNS queries within standard HTTPS traffic, allowing them to traverse the same ports and infrastructure as web browsing. This method helps bypass network-level blocking and reduces the visibility of DNS data to intermediaries. Another prominent protocol is DNS over TLS (DoT), which establishes a dedicated encrypted connection on port 853 specifically for DNS traffic, offering similar privacy benefits without relying on HTTP/HTTPS standards.

The implementation of encrypted DNS enhances user privacy and security by mitigating risks such as DNS spoofing, cache poisoning, and surveillance. However, it also introduces challenges for network management and content filtering, as traditional methods of inspecting DNS traffic become ineffective. Consequently, the adoption of encrypted DNS has sparked ongoing debates regarding the balance between individual privacy rights and the ability of organizations to enforce security policies and monitor network activity.

## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
- 2026-04-30: Post-Quantum Cryptography · [▶ source](https://www.youtube.com/watch?v=_MoRcYLN-7U)
