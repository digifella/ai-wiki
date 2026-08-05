---
type: concept
domain: society-politics-conflict
tags:
  - "algorithm-migration"
  - "post-quantum-cryptography"
  - "cybersecurity"
  - "cryptographic-standards"
  - "quantum-threat"
  - "regulatory-compliance"
aliases:
  - "Crypto Migration"
  - "Algorithm Transition"
  - "PQC Migration"
  - "Cryptographic Upgrade"
summary: "Algorithm migration is the systematic replacement of legacy cryptographic algorithms with new standards, primarily driven by security vulnerabilities, regulatory mandates, and the threat of quantum computing."
updated: 2026-07-11
group: politics-governance-public-systems
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=society-politics-conflict name=Society, Politics & Conflict

# Algorithm Migration

**[[concepts/algorithm|Algorithm]] Migration** refers to the systematic process of replacing legacy [[concepts/cryptographic-algorithms|cryptographic algorithms]] or [[concepts/calculation-methods|computational methods]] with new standards, typically driven by [[concepts/security|security]] vulnerabilities, performance requirements, or technological paradigm shifts. In the context of [[concepts/cybersecurity|cybersecurity]], this most critically applies to the transition from classical [[concepts/public-key-cryptography|public-key cryptography]] to [[concepts/post-quantum-cryptography]] (PQC) to mitigate threats posed by [[concepts/quantum-computing|quantum computing]].

## Key Drivers
- **Cryptographic Obsolescence**: Legacy [[concepts/algorithms|algorithms]] (e.g., RSA, ECC) becoming vulnerable to advances in computational power or mathematical breakthroughs.
- **Regulatory [[concepts/compliance|Compliance]]**: Mandates from government bodies (e.g., NIST, [[entities/cisa|CISA]]) requiring specific algorithm [[concepts/adoption|adoption]].
- **Quantum Threat**: The [[concepts/emergent-behavior|emergence]] of [[entities/quantum-computing|quantum computers]] capable of breaking current [[concepts/encryption-standards|encryption standards]] via [[concepts/quantum-cryptanalysis|Shor's algorithm]].

## The Post-Quantum Transition
The migration to PQC is the most significant algorithm migration event in modern [[concepts/cryptography|cryptography]]. It involves replacing vulnerable key-exchange and digital signature schemes with quantum-resistant alternatives (e.g., CRYSTALS-Kyber, CRYSTALS-Dilithium).

### Strategic Context & Policy
- **US [[concepts/executive-order|Executive Order]]**: Recent US executive actions mandate federal agencies to transition to PQC standards, accelerating the timeline for critical infrastructure [[concepts/secure|protection]].
- **[[concepts/q-day|Q-Day]] Threat**: "Q-Day" refers to the hypothetical date when a quantum computer becomes powerful enough to break current encryption. The threat is compounded by "Harvest Now, Decrypt Later" attacks, where adversaries store encrypted data today to decrypt it once quantum capabilities mature.
- **Implementation Challenges**: Migration requires updating [[concepts/hardware-security|hardware security]] modules (HSMs), software libraries, and network protocols across global [[concepts/supply-chains|supply chains]].

## Related Concepts
- [[concepts/post-quantum-cryptography]]
- Cryptographic Agility
- Key Management
- Supply Chain [[concepts/security|Security]]

## References
- [Post-Quantum Cryptography Transition: US Executive Order and the Evolving Q-Day Threat](https://www.youtube.com/watch?v=RYUR9BdDgyI)
- See also: [[lab-notes/2026-07-05-Post-Quantum-Cryptography-Transition-US-Executive-Order|Post-Quantum Cryptography Transition: US Executive Order and the Evolving Q-Day Threat]]
