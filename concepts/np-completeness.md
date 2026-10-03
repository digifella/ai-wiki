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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Np Completeness

NP-completeness is a classification in computational complexity theory for decision problems that are simultaneously in the complexity class NP and NP-hard. A problem belongs to NP if any proposed solution can be verified in polynomial time by a deterministic algorithm, meaning a "yes" answer can be confirmed efficiently if a correct certificate is provided. A problem is NP-hard if every problem in NP can be reduced to it in polynomial time, making it at least as difficult as the hardest problems in NP.

## Significance and the P vs NP Problem

NP-complete problems represent the most difficult problems within the class NP. If any single NP-complete problem can be solved in polynomial time, then all problems in NP can also be solved in polynomial time, implying that P equals NP. Conversely, if it is proven that no NP-complete problem can be solved in polynomial time, then P does not equal NP. This relationship forms the core of the P vs NP problem, one of the most significant unsolved questions in computer science and mathematics.

## Examples and Reductions

The concept was formalized by Stephen Cook and Leonid Levin, who independently identified the first NP-complete problems, now known as the Cook-Levin theorem. Common examples include the Boolean satisfiability problem (SAT), the traveling salesman problem, and the knapsack problem. These problems are linked through polynomial-time reductions, where solving one allows for the solution of others. This interconnectedness means that research into efficient algorithms for one NP-complete problem often informs the study of the entire class.

## Source Notes
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
