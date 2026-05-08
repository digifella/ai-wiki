---
type: concept
domain: maths-cryptography
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
summary: "Mathematical functions that produce fixed-size outputs from variable-size inputs, used to ensure data integrity and security in cryptographic applications."
updated: 2026-05-01
---
# Classically Secure Hash Functions

A cryptographic hash function is a mathematical algorithm that transforms input data of any size into a fixed-length string of bytes, typically represented as a hexadecimal number. This output, called a hash digest or hash value, serves as a compact digital fingerprint of the original data. Hash functions are deterministic, meaning the same input always produces the same output, and are designed to be computationally efficient even for large files.

## Security Properties

Secure hash functions satisfy several critical properties that make them suitable for cryptographic [[concepts/software|applications]]. A one-way property ensures that it is computationally infeasible to reverse-engineer the original input from its hash output. The collision-resistance property requires that it is extremely difficult to find two different inputs that produce the same hash value. Additionally, a small change to the input must produce a drastically different hash output, a property known as the avalanche effect. These characteristics prevent attackers from forging data or discovering collisions through brute force methods.

## Common Applications

Hash functions are fundamental to numerous security mechanisms, including digital signatures, password [[entities/storage|storage]], and message [[concepts/authentication|authentication]] codes. They are used to verify [[concepts/data-conceptsintegrityintegrity|data integrity]] by comparing a file's hash before and after transmission. In blockchain and distributed systems, hash functions create chains of cryptographically linked blocks. Widely-used classical hash functions include MD5, SHA-1, and the SHA-2 family, though MD5 and SHA-1 are now considered cryptographically broken for collision-resistant applications and have been deprecated in many security [[concepts/open-standards|standards]].

## Source Notes
- 2026-04-17: [[lab-notes/2026-04-17-Lattice-Cryptography-A-Post-Quantum-Solution-for-Data-Security|Lattice Cryptography A Post Quantum Solution for Data Security]] · [▶ source](https://www.youtube.com/watch?v=ZRpcYSghGr8)