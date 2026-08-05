---
wiki-ingested: true
title: "Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security"
date: 2026-07-10
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: science-physics-research
group: physics-fundamental-theory
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

Generated: 2026-07-10 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security
**Clip title:** Shor's [[concepts/algorithm|Algorithm]] for [[entities/quantum-computing|Quantum Computing]] - Computerphile
**[[entities/tasia-custode|Author]] / channel:** Computerphile
**URL:** https://www.youtube.com/watch?v=k_kyepATqB8

### Summary
This video, featuring [[concepts/mike-pound|Mike Pound]] and [[concepts/phil-moriarty|Phil Moriarty]], provides a comprehensive explanation of [[concepts/quantum-cryptanalysis|Shor's algorithm]], a [[entities/quantum-computing|quantum computing]] algorithm famous for its theoretical ability to break widely used cryptographic systems like RSA. The central topic revolves around how quantum computers can efficiently solve problems that are intractable for [[concepts/classical-computers|classical computers]], thereby posing a significant threat to current internet [[concepts/security|security]].

Mike Pound begins by explaining the [[concepts/classical-computing|classical computing]] component of Shor's algorithm and the fundamental problem it addresses: integer factorization. He details how RSA encryption, which underpins much of [[concepts/internet-security|internet security]] and digital signatures, relies on the immense difficulty of factoring very large semi-[[concepts/prime-lens|prime]] numbers (N) into their two [[concepts/prime-lens|prime]] components (P and Q). While the public key includes N, the private key depends on P and Q remaining secret. If P and Q can be efficiently discovered from N, the private key can be derived, allowing for the forging of digital signatures and spoofing of online identities. Shor's algorithm cleverly re-frames this daunting factorization task into a period-finding problem by creating a modular [[concepts/exponential-transformation|exponentiation]] function, `A^R mod N`, where 'R' is the period.

Phil Moriarty then takes over to explain how [[concepts/quantum-mechanics|quantum mechanics]], particularly the quantum [[concepts/fourier-transform|Fourier transform]], offers an elegant [[concepts/solution|solution]] to this period-finding problem. He draws parallels between complex patterns in nature and images (like a zebra crossing) that can be decomposed into a sum of simple sine and cosine waves through Fourier analysis. The dominant frequencies in this decomposition reveal the pattern's periodicity. Quantum computers leverage [[concepts/quantum-phenomena|quantum phenomena]] such as superposition and interference to perform a quantum [[concepts/fourier-transform|Fourier transform]], which can efficiently identify the period (R) of the modular [[concepts/exponential-transformation|exponentiation]] function. By precisely controlling the "[[concepts/phase|phase]]" of quantum states, akin to manipulating waves, these systems can amplify correct answers and cancel out incorrect ones, leading to a rapid discovery of 'R'.

The video concludes by addressing the practical feasibility and future implications of Shor's algorithm. While current quantum computers are "noisy" and can only factor very small numbers (like 15), the [[concepts/theory|theoretical framework]] is sound. The exact timeline for a quantum computer powerful enough to break 2048-bit RSA encryption is uncertain, ranging from a few years to many decades. However, the potential impact on global [[concepts/cybersecurity|cybersecurity]] is profound, necessitating proactive development of post-quantum cryptographic solutions. The speakers emphasize that quantum computing is not about "magic" or parallel universes, but rather about harnessing the probabilistic and wave-like nature of [[concepts/quantum-mechanics|quantum mechanics]] to perform specific computational tasks with unprecedented efficiency.

### Video Description & Links
#### Description
We brought a computer scientist and a physicist together to talk about Shor's algorithm - a famous factorisation algorithm for that can break some currently used encryption techniques if implemented in the quantum realm. 

Phil's accompanying blog post: https://muircheartblog.wpcomstaging.com/2026/05/26/quantum-computing-one-universe-is-more-than-enough/ 

Computerphile is supported by Jane Street. Learn more about them (and exciting career opportunities) at: https://jane-st.co/computerphile

This video was filmed and edited by Sean Riley.

Computerphile is a sister project to Brady Haran's Numberphile. More at https://www.bradyharanblog.com

#### Tags
`computers`, `computerphile`, `computer`, `science`

#### URLs
- https://muircheartblog.wpcomstaging.com/2026/05/26/quantum-computing-one-universe-is-more-than-enough/
- https://jane-st.co/computerphile
- https://www.bradyharanblog.com

## Related Concepts
- [[concepts/quantum-cryptanalysis|Shor's Algorithm]] — [Wikipedia](https://en.wikipedia.org/wiki/Shor%27s_Algorithm)
- [[concepts/quantum-computing|Quantum Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Quantum_Computing)
- [[concepts/quantum-computing|RSA Encryption]] — [Wikipedia](https://en.wikipedia.org/wiki/RSA_Encryption)
- [[concepts/internet-security|Internet Security]] — [Wikipedia](https://en.wikipedia.org/wiki/Internet_Security)
- [[concepts/classical-computers|Classical Computers]] — [Wikipedia](https://en.wikipedia.org/wiki/Classical_Computers)
- [[concepts/intractable-problems|Intractable Problems]] — [Wikipedia](https://en.wikipedia.org/wiki/Intractable_Problems)
- [[concepts/mike-pound|Mike Pound]] — [Wikipedia](https://en.wikipedia.org/wiki/Mike_Pound)
- [[concepts/phil-moriarty|Phil Moriarty]] — [Wikipedia](https://en.wikipedia.org/wiki/Phil_Moriarty)
- [[concepts/prime-numbers|Integer Factorization]] — [Wikipedia](https://en.wikipedia.org/wiki/Integer_Factorization)
- Period-Finding Problem — [Wikipedia](https://en.wikipedia.org/wiki/Period-Finding_Problem)
- Modular Exponentiation — [Wikipedia](https://en.wikipedia.org/wiki/Modular_Exponentiation)
- Quantum Fourier Transform — [Wikipedia](https://en.wikipedia.org/wiki/Quantum_Fourier_Transform)
- [[concepts/wave-propagation|Superposition]] — [Wikipedia](https://en.wikipedia.org/wiki/Superposition)
- Quantum Interference — [Wikipedia](https://en.wikipedia.org/wiki/Quantum_Interference)
- Semi-[[concepts/prime-numbers|Prime Numbers]] — [Wikipedia](https://en.wikipedia.org/wiki/Semi-Prime_Numbers)
- [[concepts/post-quantum-cryptography|Post-Quantum Cryptography]] — [Wikipedia](https://en.wikipedia.org/wiki/Post-Quantum_Cryptography)
- [[concepts/public-key-cryptography|Digital Signatures]] — [Wikipedia](https://en.wikipedia.org/wiki/Digital_Signatures)
- Noisy Quantum Computers — [Wikipedia](https://en.wikipedia.org/wiki/Noisy_Quantum_Computers)
- [[concepts/classical-computing|Classical Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Classical_Computing)

## Related Entities
- [[entities/mike-pound|Mike Pound]] — [Wikipedia](https://en.wikipedia.org/wiki/Mike_Pound)
- [[entities/phil-moriarty|Phil Moriarty]] — [Wikipedia](https://en.wikipedia.org/wiki/Phil_Moriarty)
- Computerphile — [Wikipedia](https://en.wikipedia.org/wiki/Computerphile)
- Jane Street — [Wikipedia](https://en.wikipedia.org/wiki/Jane_Street)
- [[entities/numberphile|Numberphile]] — [Wikipedia](https://en.wikipedia.org/wiki/Numberphile)
- Brady Haran — [Wikipedia](https://en.wikipedia.org/wiki/Brady_Haran)
- Sean Riley — [Wikipedia](https://en.wikipedia.org/wiki/Sean_Riley)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)