---
type: concept
domain: maths-logic-crypto
tags:
  - "cryptography"
  - "cybersecurity"
  - "quantum-computing"
  - "symmetric-key"
  - "asymmetric-key"
  - "hash-functions"
  - "post-quantum-cryptography"
aliases:
  - "cryptographic primitives"
  - "encryption algorithms"
summary: Cryptographic algorithms include symmetric-key, asymmetric-key, and hash functions used for the encryption, decryption, or authentication of information.
updated: 2026-07-11
group: number-theory-prime-numbers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Cryptographic algorithms

Mathematical procedures used to [[concepts/secure|secure]] information via encryption, decryption, or [[concepts/authentication|authentication]].

## Core Classifications
- Symmetric-key-[[concepts/algorithms|algorithms]]: Utilizes a single shared key for both encryption and decryption (e.g., AES).
- Asymmetric-key-algorithms: Uses a public/private key pair (e.g., RSA, ECC); highly vulnerable to future [[concepts/quantum-cryptanalysis|quantum-based cryptanalysis]].
- Hash-functions: One-way mathematical transformations used to ensure data [[concepts/integrity|integrity]] (e.g., SHA-256).

## Post-Quantum Cryptography (PQC)
The development of cryptographic primitives designed to remain [[concepts/secure|secure]] against the computational power of [[entities/quantum-computing]].
- [[concepts/encryption-algorithms|Post-quantum encryption]] (PQC) is a critical area of research and development.
- Focused on addressing the [[concepts/security|security]] threats posed by the evolution of [[entities/quantum-computing]] to existing [[entities/cyber-security|digital security]] frameworks.
- Reference: [[concepts/post-quantum-security|Post-Quantum Cryptography]]: Addressing Quantum Computer Threats to [[concepts/privacy|Digital Security]] (via Computerphile).
## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
- 2026-04-30: Post-Quantum Cryptography · [▶ source](https://www.youtube.com/watch?v=_MoRcYLN-7U)
