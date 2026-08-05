---
type: concept
domain: maths-logic-crypto
group: mathematical-reasoning-proof
tags:
  - "computational-complexity"
  - "np-complete"
  - "decision-problems"
  - "polynomial-time"
  - "algorithm-theory"
  - "complexity-classes"
aliases:
  - "NP-complete"
  - "NP-completeness problem"
summary: A classification for decision problems that are both in NP and NP-hard, representing the hardest problems solvable by nondeterministic polynomial-time algorithms.
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# NP Completeness

NP-completeness is a classification in computational complexity theory for decision problems that are simultaneously in the complexity class NP and NP-hard. A problem belongs to NP if any proposed solution can be verified in polynomial time by a deterministic algorithm, meaning a "yes" answer can be confirmed efficiently if a correct certificate is provided. A problem is NP-hard if every problem in NP can be reduced to it in polynomial time, making it at least as difficult as the hardest problems in NP.

## Significance and the P vs NP Problem

NP-complete problems represent the hardest problems known to be solvable by nondeterministic polynomial-time algorithms. The question of whether NP-complete problems can actually be solved in polynomial time on deterministic machines constitutes the P vs NP problem, one of the most important open questions in computer science and mathematics. If any NP-complete problem were solvable in polynomial time, all NP problems would be solvable in polynomial time, implying P = NP.

## Examples and Practical Implications

Well-known NP-complete problems include the Boolean satisfiability problem (SAT), the traveling salesman problem, the knapsack problem, and graph coloring. The practical implication is that for NP-complete problems, no known polynomial-time algorithm exists, and solutions typically require exponential time or depend on heuristic approaches. This classification has profound implications for cryptography, optimization, and algorithm design, influencing which computational problems are considered intractable in practice.

## Source Notes
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
