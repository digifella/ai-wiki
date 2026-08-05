---
title: "Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security"
date: 2026-07-10
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security
Generated: 2026-07-10 · API: Gemini 2.5 Flash · Modes: Summary

---

## Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security
**Clip title:** Shor's Algorithm for Quantum Computing - Computerphile
**Author / channel:** Computerphile
**URL:** https://www.youtube.com/watch?v=k_kyepATqB8

### Summary
This video, featuring Mike Pound and Phil Moriarty, provides a comprehensive explanation of Shor's algorithm, a quantum computing algorithm famous for its theoretical ability to break widely used cryptographic systems like RSA. The central topic revolves around how quantum computers can efficiently solve problems that are intractable for classical computers, thereby posing a significant threat to current internet security.

Mike Pound begins by explaining the classical computing component of Shor's algorithm and the fundamental problem it addresses: integer factorization. He details how RSA encryption, which underpins much of internet security and digital signatures, relies on the immense difficulty of factoring very large semi-prime numbers (N) into their two prime components (P and Q). While the public key includes N, the private key depends on P and Q remaining secret. If P and Q can be efficiently discovered from N, the private key can be derived, allowing for the forging of digital signatures and spoofing of online identities. Shor's algorithm cleverly re-frames this daunting factorization task into a period-finding problem by creating a modular exponentiation function, `A^R mod N`, where 'R' is the period.

Phil Moriarty then takes over to explain how quantum mechanics, particularly the quantum Fourier transform, offers an elegant solution to this period-finding problem. He draws parallels between complex patterns in nature and images (like a zebra crossing) that can be decomposed into a sum of simple sine and cosine waves through Fourier analysis. The dominant frequencies in this decomposition reveal the pattern's periodicity. Quantum computers leverage quantum phenomena such as superposition and interference to perform a quantum Fourier transform, which can efficiently identify the period (R) of the modular exponentiation function. By precisely controlling the "phase" of quantum states, akin to manipulating waves, these systems can amplify correct answers and cancel out incorrect ones, leading to a rapid discovery of 'R'.

The video concludes by addressing the practical feasibility and future implications of Shor's algorithm. While current quantum computers are "noisy" and can only factor very small numbers (like 15), the theoretical framework is sound. The exact timeline for a quantum computer powerful enough to break 2048-bit RSA encryption is uncertain, ranging from a few years to many decades. However, the potential impact on global cybersecurity is profound, necessitating proactive development of post-quantum cryptographic solutions. The speakers emphasize that quantum computing is not about "magic" or parallel universes, but rather about harnessing the probabilistic and wave-like nature of quantum mechanics to perform specific computational tasks with unprecedented efficiency.

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
