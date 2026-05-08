---
type: concept
domain: maths-cryptography
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
updated: 2026-05-01
---
# NP Completeness

[[concepts/np-complete|NP-completeness]] is a classification for decision problems that occupy a critical position in [[concepts/complexity-classes|computational complexity]] [[concepts/theory|theory]]. A problem is NP-complete if it satisfies two conditions: it belongs to the class NP (nondeterministic polynomial time), meaning a proposed [[concepts/solution|solution]] can be verified in polynomial time, and it is [[concepts/np-hard|NP-hard]], meaning every problem in NP can be reduced to it in polynomial time. This combination makes NP-complete problems the hardest known problems within NP.

## Significance and the P vs NP Problem

The study of NP-complete problems is central to one of computer science's most important open questions: whether P equals NP. If a polynomial-time algorithm were discovered for any single NP-complete problem, it would immediately imply that all NP-complete problems are solvable in polynomial time. Conversely, proving that even one NP-complete problem cannot be solved in polynomial time would establish that P ≠ NP. This question carries both theoretical importance and practical consequences, as many real-world optimization and verification problems are NP-complete.

## Common Examples

Notable NP-complete problems include the Boolean satisfiability problem (SAT), the traveling salesman problem, the knapsack problem, and graph coloring. These problems arise frequently in practical [[concepts/software|applications]] ranging from circuit design and scheduling to [[concepts/cryptography|cryptography]] and logistics. Despite their computational hardness in the worst case, various approximation algorithms and heuristics have been developed to find acceptable solutions within reasonable time limits.

## Source Notes
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)