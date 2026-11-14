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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Classically Secure Hash Functions

A cryptographic hash function is a mathematical algorithm that maps input data of arbitrary size to a fixed-length output, known as a hash digest or hash value. This digest serves as a compact digital fingerprint of the input. Hash functions are deterministic, meaning identical inputs invariably produce identical outputs, and are designed for computational efficiency across inputs of any size, ranging from small strings to large files.

## Core Security Properties

The security of classically secure hash functions relies on three fundamental properties: pre-image resistance, second pre-image resistance, and collision resistance. Pre-image resistance ensures that it is computationally infeasible to reverse the hash to find the original input. Second pre-image resistance guarantees that given an input, it is difficult to find a different input that produces the same hash. Collision resistance prevents the discovery of any two distinct inputs that yield the same output.

## Common Algorithms and Applications

Historically, the Secure Hash Algorithm (SHA) family and the Message Digest (MD) family have been the most widely used classically secure hash functions. While earlier versions like MD5 and SHA-1 are now considered cryptographically broken due to practical collision attacks, SHA-2 and SHA-3 remain standard for modern applications. These functions are essential for verifying data integrity, creating digital signatures, and storing passwords securely in cryptographic systems.

## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)
