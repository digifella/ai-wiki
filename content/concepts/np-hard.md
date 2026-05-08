---
type: concept
domain: maths-cryptography
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
updated: 2026-05-01
---
# NP-Hard

NP-hard is a classification in [[concepts/complexity-classes|computational complexity]] [[concepts/theory|theory]] that describes problems that are at least as difficult as the hardest problems in the complexity class NP (nondeterministic polynomial time). A problem is NP-hard if every problem in NP can be reduced to it in polynomial time. This means that if an efficient (polynomial-time) algorithm were found for any NP-hard problem, it could be adapted to solve all problems in NP efficiently.

## Characteristics and Significance

NP-hard problems are notable for having no known polynomial-time algorithms despite decades of research. They include well-studied problems such as the travelling salesman problem, the knapsack problem, and boolean satisfiability (SAT). The practical importance of NP-hard problems lies in their ubiquity across optimization, scheduling, [[concepts/cryptography|cryptography]], and other fields where finding optimal solutions is computationally expensive.

## Relationship to P vs NP

The NP-hard classification is central to the [[concepts/a-video-titled-p-vs-np|P versus NP]] problem, one of the most significant open questions in computer science and [[concepts/mathematics|mathematics]]. If P were equal to NP, then all NP-hard problems would be solvable in polynomial time. However, the prevailing conjecture is that P ≠ NP, meaning NP-hard problems are inherently difficult and no efficient general algorithm exists for solving them. This distinction has important implications for cryptography, where the difficulty of NP-hard problems underpins many security systems.

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