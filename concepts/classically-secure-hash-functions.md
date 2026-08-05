---
type: concept
domain: maths-logic-crypto
group: cryptography-codes-ciphers
tags:
  - "hash-functions"
  - "cryptographic-security"
  - "post-quantum-cryptography"
  - "lattice-based-cryptography"
  - "data-security"
aliases:
  - "secure hash functions"
  - "cryptographic hashing"
summary: Mathematical functions that produce fixed-size outputs from variable-size inputs, used to ensure data integrity and security in cryptographic applications.
updated: 2026-07-14
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Classically Secure Hash Functions

A cryptographic hash function is a mathematical algorithm that maps input data of arbitrary size to a fixed-length output, known as a hash digest or hash value. This digest serves as a compact digital fingerprint of the input. Hash functions are deterministic—identical inputs invariably produce identical outputs—and are designed for computational efficiency across inputs of any size, from small strings to large files. Common cryptographic hash functions include SHA-256 (producing 256-bit outputs) and SHA-512 (512-bit outputs), both part of the SHA-2 family standardized by the National Institute of Standards and Technology.

## Security Properties

Classically secure hash functions are constructed to satisfy three fundamental security requirements. **Preimage resistance** means it is computationally infeasible to recover an input from its hash output. **Second preimage resistance** ensures that finding a different input producing the same hash as a given input is also computationally infeasible. **Collision resistance** requires that no two distinct inputs should produce the same hash output within practical computation limits. These properties make hash functions suitable for cryptographic authentication, data integrity verification, and digital signatures.

## Applications

Hash functions are essential components in numerous security protocols and systems. They are used to verify that data has not been altered during transmission or storage, to create digital signatures that authenticate messages, and to derive keys in key-derivation functions. In blockchain systems, hash functions link blocks sequentially. Password management systems typically store hashes of passwords rather than plaintext, ensuring that even compromise of a database does not directly expose user credentials.

## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
