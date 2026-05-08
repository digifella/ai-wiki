---
type: concept
domain: maths-cryptography
group: mathematical-reasoning-proof
tags:
  - "computational-complexity"
  - "algorithmic-problems"
  - "problem-classes"
  - "complexity-theory"
  - "mathematical-reasoning"
aliases:
  - "Computational Complexity Problems"
  - "Algorithm Problems"
summary: Problems defined by their computational requirements and algorithmic solvability, often classified by complexity class and resource constraints.
updated: 2026-05-01
---
# Computational Problems

Computational problems are mathematical or logical questions defined by their input specifications and desired output, along with the resources required to find a [[concepts/solution|solution]]. These problems form the foundation of [[concepts/theoretical-computer-science|theoretical computer science]] and [[concepts/cryptography|cryptography]], where understanding what can and cannot be computed efficiently determines the feasibility of both algorithms and cryptographic systems. A computational problem is typically considered solved when an algorithm exists that produces the correct answer, though the practical utility of that solution depends heavily on how many computational steps it requires.

## Complexity Classification

Computational problems are formally classified into [[concepts/complexity-classes|complexity classes]] based on the time and space resources needed to solve them. The most widely studied classes include P (problems solvable in polynomial time), NP (problems whose solutions can be verified in polynomial time), and [[concepts/np-complete|NP-complete problems]] (the hardest problems in NP, to which all other NP problems can be reduced). Problems may also be classified as undecidable, meaning no algorithm can solve them for all possible inputs, such as the Halting Problem. This classification reveals fundamental limits on computation and guides decisions about which problems are suitable for cryptographic use.

## Cryptographic Relevance

In cryptography, computational problems are leveraged to create security. [[concepts/public-key-cryptography|Asymmetric cryptography]] typically relies on problems that are easy to verify but computationally hard to solve—such as integer factorization or the discrete logarithm problem. The security of these systems depends on the assumption that no efficient algorithm exists (or is known) to solve the underlying problem. As computational power and algorithmic techniques advance, previously hard problems may become tractable, necessitating migration to new cryptographic schemes based on problems believed to remain hard, such as lattice-based or post-quantum cryptographic problems.

## Source Notes
- 2026-04-24: OpenAI GPT-5 · [▶ source](https://www.youtube.com/watch?v=tNV9_I-zLO0)
- 2026-04-30: Quantum Computing · [▶ source](https://www.youtube.com/watch?v=IhS6ecYZFdQ)