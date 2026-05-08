---
type: concept
domain: maths-cryptography
group: mathematical-reasoning-proof
tags:
  - "computational-complexity"
  - "np-theory"
  - "decision-problems"
  - "polynomial-time"
  - "algorithm-hardness"
  - "unsolved-problems"
aliases:
  - "NP-complete problems"
  - "NP-completeness"
summary: NP-complete problems are decision problems in NP for which every other NP problem reduces to them in polynomial time, making them among the hardest problems to solve efficiently.
updated: 2026-05-01
---
# NP-Complete

NP-complete problems form a special class of decision problems within [[concepts/complexity-classes|computational complexity]] [[concepts/theory|theory]]. A problem is NP-complete if it belongs to NP (the set of problems whose solutions can be verified in polynomial time) and every other problem in NP can be reduced to it in polynomial time. This means NP-complete problems are, in a formal sense, among the hardest problems in NP—if an efficient algorithm exists for any NP-complete problem, then efficient algorithms exist for all problems in NP.

## Significance and the P vs NP Question

The importance of NP-complete problems lies in their [[concepts/connection|connection]] to one of computer science's central unsolved questions: whether P equals NP. If P ≠ NP, then no NP-complete problem can be solved in polynomial time by a deterministic algorithm, making them inherently intractable for large instances. Conversely, proving P = NP would follow immediately from finding a polynomial-time [[concepts/solution|solution]] to any single NP-complete problem.

## Common Examples

Several well-known problems are NP-complete, including the Boolean satisfiability problem (SAT), the traveling salesman problem (TSP), the knapsack problem, and graph coloring. These problems arise across [[concepts/mathematics|mathematics]], optimization, and practical [[concepts/software|applications]], making the question of their computational difficulty both theoretically interesting and practically significant. For most NP-complete problems, the best known algorithms run in exponential time, leading to approximation algorithms and heuristics being used in practice.

## Source Notes
- 2026-04-01: [[inbox/2026-04-01-cold-start-rebuild-complete|cold start rebuild complete]]
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 2026-04-08: [[lab-notes/2026-04-08-Llamacpp-Local-LLM-Inference-for-Accessible-Private-AI|Llamacpp Local LLM Inference for Accessible Private AI]] · [▶ source](https://www.youtube.com/watch?v=P8m5eHAyrFM)
- 2026-04-09: [[lab-notes/2026-04-09-Project-Glasswing-Mitigating-Anthropic-Mythos-AIs-Zero-Day-Vulnerability-Capabilities|Project Glasswing: Mitigating Anthropic Mythos AI's Zero-Day Vulnerability Capabilities]]
- 2026-04-10: [[lab-notes/2026-04-10-Alibaba-Qwen-36-Plus-Agentic-Coding-and-Multimodal-Reasoning-Towards|Alibaba Qwen 36 Plus Agentic Coding and Multimodal Reasoning Towards]] · [▶ source](https://www.youtube.com/watch?v=v8RokQY05Bo)