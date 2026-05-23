---
type: concept
domain: maths-cryptography
tags:
  - "quantum-computing"
  - "cryptography"
  - "cybersecurity"
  - "risk-assessment"
  - "post-quantum-cryptography"
  - "asymmetric-cryptography"
aliases:
  - "quantum day"
summary: Q-Day is the theoretical point in time when quantum computers become sufficiently powerful to break current asymmetric cryptographic standards such as RSA and ECC.
updated: 2026-05-23
group: number-theory-prime-numbers
---
# Q-Day

**[[concepts/slms|Definition]]**: The theoretical point in time when a quantum computer becomes sufficiently powerful to break the asymmetric cryptographic [[concepts/open-standards|standards]] currently securing global [[concepts/digital-infrastructure|digital infrastructure]], specifically RSA and Elliptic Curve [[concepts/cryptography|Cryptography]] (ECC).

## Current Threat Landscape
- **Timeline Acceleration**: The window for cryptographic transition is shrinking; Q-Day is now anticipated as early as 2029.
- **Rapid Advancement**: Recent analysis indicates that [[concepts/quantum-computing|quantum computing]]'s ability to break existing cryptographic [[concepts/open-standards|standards]] is accelerating much faster than previously estimated, as detailed in [[concepts/quantum-computing|Quantum Computing]] Accelerates [[concepts/cryptography|Cryptography]] Threat: Q-Day Anticipated by 2029.
- **Primary [[concepts/vulnerability|Vulnerability]]**: The [[concepts/adoption|implementation]] of Shor's Algorithm on sufficiently large-scale, error-corrected quantum [[concepts/hardware|hardware]].

## Critical Risks
- **Retrospective Decryption**: The "Harvest Now, Decrypt Later" strategy, where encrypted data is intercepted today to be decrypted once Q-Day is reached.
- **Infrastructure Collapse**: Total loss of trust in Public Key Infrastructure (PKI), digital signatures, and [[concepts/secure|secure]] communications.

## Mitigation & Defense
- **[[concepts/post-quantum-cryptography|Post-Quantum Cryptography]] (PQC)**: Transitioning to quantum-resistant algorithms capable of withstanding quantum-scale attacks.
- **Crypto-agility**: The ability of systems to rapidly switch between [[concepts/cryptographic-algorithms|cryptographic primitives]] without significant infrastructure overhaul.
- **Quantum Key [[concepts/distribution|Distribution]] (QKD)**: Utilizing [[concepts/quantum-mechanics]] to [[concepts/secure|secure]] communication channels.
## Source Notes

- 2026-04-30: [[lab-notes/2026-04-30-Quantum-Computing-Accelerates-Cryptography-Threat-Q-Day|Quantum Computing Accelerates Cryptography Threat: Q-Day Anticipated by 2029]]