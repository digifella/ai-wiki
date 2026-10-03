---
type: concept
domain: maths-logic-crypto
tags:
  - "dns-encryption"
  - "network-security"
  - "cryptography"
  - "dns-security"
  - "post-quantum-cryptography"
aliases:
  - "DNS encryption"
summary: A concept regarding the encryption of the Domain Name System.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: cryptography-codes-ciphers
title: Encrypted DNS
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

[[concepts/dns-lookups|Encrypted DNS]] refers to the practice of securing [[concepts/dns|Domain Name System]] (DNS) queries and responses through cryptographic protocols. Traditional DNS operates in plaintext, meaning that DNS lookups—which translate domain names into IP addresses—are visible to network administrators, Internet Service Providers, and potentially other parties with [[concepts/remote-access|network access]]. Encrypted DNS protects this information by preventing unauthorized observation of which websites a user visits.

## Primary Protocols

Two main protocols enable encrypted DNS. DNS over HTTPS (DoH) encapsulates DNS queries within standard HTTPS connections, allowing them to traverse port 443 and blend in with regular web traffic. This approach helps bypass network-level blocking and reduces the visibility of DNS data to intermediate devices. DNS over TLS (DoT) operates on a dedicated port (853) and establishes a [[concepts/secure|secure]] TLS [[concepts/connection|connection]] specifically for DNS traffic, offering similar [[concepts/privacy|privacy]] benefits but with distinct network characteristics.

## Implementation and Impact

Implementing encrypted DNS requires support from both the client operating system and the DNS resolver service. While it enhances user privacy and [[concepts/honesty|integrity]] by preventing spoofing and eavesdropping, it can complicate network management for organizations that rely on DNS filtering or logging for [[concepts/security|security]] and [[concepts/compliance|compliance]] purposes. Consequently, the [[concepts/adoption|adoption]] of encrypted DNS has sparked ongoing discussions regarding the balance between individual privacy rights and network administration capabilities.
## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
- 2026-04-30: Post-Quantum Cryptography · [▶ source](https://www.youtube.com/watch?v=_MoRcYLN-7U)
