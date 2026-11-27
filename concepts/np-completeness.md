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
updated: 2026-10-05
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Np Completeness

NP-completeness is a classification within computational complexity theory for decision problems that are simultaneously in the complexity class NP and NP-hard. A problem belongs to NP if any proposed solution can be verified in polynomial time by a deterministic algorithm, meaning a "yes" answer can be confirmed efficiently if a correct certificate is provided. A problem is NP-hard if every problem in NP can be reduced to it in polynomial time, implying that an efficient algorithm for an NP-hard problem would allow all problems in NP to be solved efficiently.

The concept was introduced by Stephen Cook in 1971 with the Cook-Levin theorem, which established that the Boolean satisfiability problem (SAT) is NP-complete. This foundational result demonstrated that SAT is among the hardest problems in NP, as any problem in NP can be reduced to it. Subsequent research identified numerous other problems as NP-complete, including the traveling salesman problem, the knapsack problem, and the clique problem, through polynomial-time reductions from SAT or other known NP-complete problems.

## Computational Implications

The central open question in this field is whether P equals NP. If any NP-complete problem can be solved in polynomial time, then P equals NP, implying that all problems in NP can be solved efficiently. Conversely, if P does not equal NP, then no NP-complete problem can be solved in polynomial time. This distinction has profound implications for cryptography, algorithm design, and optimization, as many practical problems fall into the NP-complete category, suggesting that exact solutions may be computationally infeasible for large inputs.

## Verification and Reductions

NP-completeness relies heavily on the concept of polynomial-time reduction, a method for transforming one problem into another while preserving the answer. If problem A reduces to problem B, and B is in NP, then A is also in NP. For a problem to be NP-complete, it must be in NP and every problem in NP must reduce to it. This transitive property allows researchers to classify new problems as NP-complete by reducing a known NP-complete problem to them, thereby establishing their relative difficulty within the complexity hierarchy.

## Source Notes
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
