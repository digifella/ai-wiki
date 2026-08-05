---
type: concept
domain: maths-logic-crypto
group: mathematical-reasoning-proof
tags:
  - "computational-complexity"
  - "np-completeness"
  - "algorithm-theory"
  - "decision-problems"
  - "complexity-classes"
aliases:
  - "NP-hard problems"
  - "NP-hardness"
summary: A classification for computational problems at least as hard as the hardest problems in NP, with no known polynomial-time algorithms.
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# NP Hard

NP-hard is a classification in computational complexity theory that identifies problems at least as difficult as the hardest problems in NP (nondeterministic polynomial time). A problem is formally NP-hard if every problem in NP can be reduced to it in polynomial time. This means that discovering a polynomial-time algorithm for any single NP-hard problem would immediately yield polynomial-time solutions for all problems in NP, effectively proving P = NP.

## Key Properties

NP-hard problems do not necessarily belong to NP themselves. While NP problems must have solutions verifiable in polynomial time, NP-hard problems may be verification-hard or even undecidable. An NP-hard problem that also belongs to NP is classified as NP-complete, representing the intersection of these two categories. The hardness designation depends only on the existence of a polynomial-time reduction from all NP problems, not on whether solutions can be verified efficiently.

## Examples and Significance

Common NP-hard problems include the traveling salesman problem, the knapsack problem, and satisfiability (SAT). These problems are computationally challenging in practice, with no known polynomial-time solutions despite decades of research. The widespread assumption that P ≠ NP means NP-hard problems likely require exponential time in the worst case, making them practically intractable for large instances. This classification guides algorithm research toward approximation algorithms, heuristics, and specialized approaches rather than seeking exact polynomial solutions.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AI-Recursive-Self-Improvement-The-Dawn-of-Intelligence-Explosion|AI Recursive Self Improvement The Dawn of Intelligence Explosion]] · [▶ source](https://www.youtube.com/watch?v=mhoFqhLXc3g)
- 2026-04-10: [[lab-notes/2026-04-10-Google-NotebookLMs-Latest-Features-Enhanced-Infographics-AI-Videos|Google NotebookLMs Latest Features Enhanced Infographics AI Videos]] · [▶ source](https://www.youtube.com/watch?v=E71M74FIDHc)
- 2026-04-12: [[lab-notes/2026-04-12-P-vs-NP-Problem-Computational-Complexity-Implications-and-Historical-C|P vs NP Problem Computational Complexity Implications and Historical C]] · [▶ source](https://www.youtube.com/watch?v=pQsdygaYcE4)
- 2026-04-13: [[lab-notes/2026-04-13-P-vs-NP-Problem-Computational-Complexity-and-Implications-Summary|P vs NP Problem Computational Complexity and Implications Summary]] · [▶ source](https://www.youtube.com/watch?v=EHp4FPyajKQ)
- 2026-04-17: [[lab-notes/2026-04-17-Optimal-Steak-Cooking-Methods-Avoiding-Gray-Band-Enhancing-Crust|Optimal Steak Cooking Methods Avoiding Gray Band Enhancing Crust]] · [▶ source](https://www.youtube.com/watch?v=uJcO1W_TD74)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
- 2026-04-19: [[lab-notes/2026-04-19-Elons-AI-Model-Factory-XAI-Anthropic-Accelerating-Self-Developing-AI|Elons AI Model Factory XAI Anthropic Accelerating Self Developing AI]] · [▶ source](https://www.youtube.com/watch?v=jLx3wNHAbnE)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
- 2026-04-27: Git
