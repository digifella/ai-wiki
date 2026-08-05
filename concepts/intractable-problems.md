---
type: concept
domain: maths-logic-crypto
tags:
  - "computational-complexity"
  - "np-hard"
  - "polynomial-time"
  - "algorithm-efficiency"
  - "cryptography"
  - "integer-factorization"
  - "tsp"
  - "boolean-satisfiability"
aliases:
  - "Hard Computational Problems"
  - "NP-Hard Problems"
  - "Computationally Intractable"
  - "Exponential Time Problems"
summary: Intractable problems are computational tasks lacking known efficient polynomial-time algorithms, typically characterized by exponential resource growth and association with complexity classes like NP-hard.
updated: 2026-07-11
group: cryptography-codes-ciphers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Intractable Problems

**Intractable problems** are [[concepts/computational-problems|computational problems]] for which no efficient [[concepts/algorithm|algorithm]] exists (or is known to exist) that can solve them in polynomial time. These problems typically reside in [[concepts/complexity-classes|complexity classes]] such as [[concepts/np-hard]] or [[concepts/np-complete]], where the required [[concepts/computational-resources|computational resources]] grow exponentially with input size, [[concepts/fat-rendering|rendering]] them unsolvable for large inputs using [[concepts/classical-computing|classical computing]] models within a reasonable timeframe.

## Characteristics
- **[[concepts/exponential-growth|Exponential Growth]]**: [[concepts/solution|Solution]] time [[concepts/musical-scales|scales]] exponentially ($O(2^n)$ or worse) rather than polynomially ($O(n^k)$).
- **No Known Polynomial-Time Algorithm**: Despite extensive research, no deterministic algorithm has been found to solve these problems efficiently on classical [[concepts/turing-machines|Turing machines]].
- **[[concepts/verification|Verification]] vs. Solution**: While finding a solution is hard, verifying a given solution is often easy (polynomial time), a hallmark of the class NP.

## Examples
- **Integer Factorization**: Decomposing a large composite number into its [[concepts/prime-lens|prime]] factors. This problem underpins the [[concepts/security|security]] of RSA Encryption. While classically intractable for sufficiently large keys, it is vulnerable to quantum [[concepts/algorithms|algorithms]].
- **Traveling Salesperson Problem (TSP)**: Finding the shortest possible route that visits a set of cities and returns to the origin.
- **Boolean Satisfiability (SAT)**: Determining if there exists an interpretation that satisfies a given Boolean formula.

## Quantum Computing and Intractability
The advent of [[entities/quantum-computing]] challenges the classical definition of intractability for specific problem classes. Quantum algorithms can exploit superposition and entanglement to solve certain problems exponentially faster than the best-known classical algorithms.

- **[[concepts/quantum-cryptanalysis|Shor's Algorithm]]**: A quantum algorithm capable of performing integer factorization in polynomial time. This directly threatens the security of public-key cryptosystems like RSA Encryption, which rely on the classical intractability of factoring large numbers.
	- See detailed analysis: [[lab-notes/2026-07-10-Shors-Algorithm-Quantum-Computings-Threat-to-RSA-Encrypt|Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security]]
	- Key implication: If large-scale fault-tolerant quantum computers are realized, current [[concepts/internet-security|internet security]] protocols based on RSA [[entities/will|will]] become obsolete, necessitating a shift to [[concepts/post-quantum-cryptography]].

## References
- [Shor's Algorithm: Quantum Computing's Threat to RSA Encryption and Internet Security](https://www.youtube.com/watch?v=k_kyepATqB8)
