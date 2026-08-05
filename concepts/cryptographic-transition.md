---
type: concept
domain: maths-logic-crypto
tags:
  - "post-quantum-cryptography"
  - "cryptographic-migration"
  - "q-day"
  - "quantum-resistance"
  - "security-policy"
  - "harvest-now-decrypt-later"
  - "nist-standards"
  - "digital-security"
aliases:
  - "PQC Transition"
  - "Post-Quantum Migration"
  - "Crypto Transition"
  - "Quantum-Safe Migration"
summary: "Cryptographic Transition is the systematic migration from classical algorithms to post-quantum standards to mitigate threats from quantum computing and regulatory mandates."
updated: 2026-07-11
group: cryptography-codes-ciphers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Cryptographic Transition

**Cryptographic Transition** refers to the systematic migration of cryptographic systems from classical [[concepts/algorithms|algorithms]] (e.g., RSA, ECC) to [[concepts/post-quantum-cryptography]] (PQC) standards capable of resisting attacks from [[entities/quantum-computing|quantum computers]]. This transition is driven by the threat of [[concepts/q-day]] and regulatory mandates such as the US [[concepts/executive-order|Executive Order]] on PQC.

## Key Concepts

- **[[concepts/q-day]]**: The hypothetical date when a sufficiently powerful quantum computer can break current [[concepts/public-key-cryptography|public-key cryptography]], [[concepts/fat-rendering|rendering]] existing [[concepts/privacy|digital security]] infrastructure vulnerable.
- **[[concepts/post-quantum-cryptography]] (PQC)**: [[concepts/cryptographic-algorithms|Cryptographic algorithms]] designed to be [[concepts/secure|secure]] against both classical and quantum computers.
- **Harvest Now, Decrypt Later**: A threat model where adversaries collect encrypted data today to decrypt it once quantum capabilities mature.

## Recent Developments & Policy

- **US Executive Order on PQC**: Recent mandates accelerate the federal government's [[concepts/adoption|adoption]] of [[concepts/encryption-standards|PQC standards]], requiring agencies to inventory cryptographic assets and migrate to NIST-approved algorithms. See [[lab-notes/2026-07-05-Post-Quantum-Cryptography-Transition-US-Executive-Order|Post-Quantum Cryptography Transition: US Executive Order and the Evolving Q-Day Threat]] for detailed analysis.
- **IBM [[concepts/security-intelligence|Security Intelligence]] Insights**: Discussions highlight the urgency of the transition, noting that the threat is no longer theoretical but an immediate operational risk requiring proactive [[concepts/mitigation-strategies|mitigation strategies]].

## Implementation Challenges

- **[[concepts/electrical-integration|Legacy System Integration]]**: Migrating older infrastructure that lacks support for modern PQC algorithms.
- **Performance Overhead**: PQC algorithms often require larger key sizes and higher [[concepts/computational-resources|computational resources]] compared to classical counterparts.
- **Standardization Lag**: The gap between NIST standardization and widespread industry adoption.

## References

- [Post-Quantum Cryptography Transition: US Executive Order and the Evolving Q-Day Threat](https://www.youtube.com/watch?v=RYUR9BdDgyI)
