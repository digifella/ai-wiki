---
type: concept
domain: science-physics-research
tags:
  - "quantum-computing"
  - "cryptanalysis"
  - "cybersecurity"
  - "cryptography"
  - "shors-algorithm"
  - "grovers-algorithm"
  - "post-quantum-cryptography"
  - "q-day"
aliases:
  - "quantum-based cryptanalysis"
  - "Shor's Algorithm"
summary: The study of leveraging quantum computing to identify and exploit vulnerabilities in the mathematical foundations of classical encryption, specifically via Shor's Algorithm.
updated: 2026-07-12
group: physics-fundamental-theory
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Quantum cryptanalysis

Quantum cryptanalysis is the study of leveraging [[entities/quantum-computing]] to identify and exploit vulnerabilities in [[concepts/cryptographic-algorithms|cryptographic primitives]], specifically targeting the [[concepts/mathematical-concepts|mathematical foundations]] of classical encryption.

## Core Algorithms
- **Shor's [[concepts/algorithm|algorithm]]**: Provides exponential speedup for integer factorization and discrete logarithm problems, [[concepts/fat-rendering|rendering]] RSA, Diffie-Hellman, and Elliptic Curve [[concepts/cryptography|Cryptography]] (ECC) vulnerable.
	- Detailed analysis of its threat to RSA and [[concepts/internet-security|internet security]] is documented in [[lab-notes/2026-07-10-Shors-Algorithm-Quantum-Computings-Threat-to-RSA-Encrypt|Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security]].
	- Explained comprehensively by [[concepts/mike-pound|Mike Pound]] and [[concepts/phil-moriarty|Phil Moriarty]] in [Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security](https://www.youtube.com/watch?v=k_kyepATqB8).
- **Grover's algorithm**: Provides a quadratic speedup for unstructured searches, effectively reducing the [[concepts/security|security]] strength of symmetric-key [[concepts/cryptography|cryptography]] (e.g., requiring larger key sizes for AES).

## Threat Landscape
- [[concepts/q-day]]: The projected milestone where quantum hardware attains sufficient scale and [[concepts/bug-fixing|error correction]] to break widely used classical [[concepts/cryptography|cryptography]].
