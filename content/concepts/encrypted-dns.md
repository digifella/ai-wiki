---
type: concept
domain: maths-cryptography
tags:
  - "dns-encryption"
  - "network-security"
  - "cryptography"
  - "dns-security"
  - "post-quantum-cryptography"
aliases:
  - "DNS encryption"
summary: A concept regarding the encryption of the Domain Name System.
updated: 2026-05-23
group: cryptography-codes-ciphers
title: Encrypted DNS
---
# Encrypted DNS

[[concepts/dns-lookups|Encrypted DNS]] refers to the practice of securing Domain Name System ([[concepts/dns|DNS]]) queries and [[concepts/responses|responses]] through cryptographic protocols. Traditional DNS operates in plaintext, meaning that DNS lookups—which translate domain names into IP addresses—are visible to network administrators, Internet service providers, and potentially other parties with network access. Encrypted DNS protects this information by preventing unauthorized observation of which websites a user visits.

## Implementation Methods

Several protocols enable DNS encryption. DNS over HTTPS (DoH) and DNS over TLS (DoT) are the most widely deployed [[concepts/open-standards|standards]], wrapping DNS queries within encrypted transport layers. DoH tunnels DNS requests through standard HTTPS connections, while DoT uses a dedicated encrypted channel on port 853. These approaches ensure that the mapping between domain names and IP addresses remains confidential during transmission.

## Cryptographic Considerations

The encryption of DNS relies on established public-key [[concepts/cryptography|cryptography]] and symmetric [[concepts/encryption-methods|encryption methods]]. However, emerging concerns about [[concepts/quantum-computing|quantum computing]] threats have prompted investigation into post-quantum cryptographic approaches for long-term DNS [[concepts/security|security]]. [[concepts/encryption-algorithms|Lattice-based cryptography]] has been proposed as a potential [[concepts/solution|solution]] for securing DNS infrastructure against future quantum-enabled attacks, ensuring that encrypted DNS systems remain [[concepts/secure|secure]] beyond the era of [[concepts/classical-computing|classical computing]] threats.
## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
- 2026-04-30: Post-Quantum Cryptography · [▶ source](https://www.youtube.com/watch?v=_MoRcYLN-7U)