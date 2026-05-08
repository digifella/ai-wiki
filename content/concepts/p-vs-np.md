---
type: concept
domain: maths-cryptography
group: mathematical-reasoning-proof
tags:
  - "computational-complexity"
  - "decision-problems"
  - "polynomial-time"
  - "np-completeness"
  - "algorithm-theory"
  - "computational-hardness"
  - "verification-complexity"
aliases:
  - "P versus NP"
  - "P-NP problem"
  - "P=NP question"
summary: A fundamental unsolved problem in computer science asking whether problems whose solutions can be quickly verified (NP) are equivalent to problems whose solutions can be quickly found (P).
updated: 2026-05-01
---
# P Vs Np

The [[concepts/a-video-titled-p-vs-np|P versus NP]] problem is a central unsolved question in [[concepts/theoretical-computer-science|theoretical computer science]] and [[concepts/mathematics|mathematics]]. It asks whether the class of problems whose solutions can be *verified* quickly (NP) is equivalent to the class of problems whose solutions can be *found* quickly (P). More formally, P consists of decision problems solvable by a deterministic algorithm in polynomial time, while NP consists of problems whose solutions can be verified in polynomial time by a deterministic algorithm. If P = NP, then every problem whose [[concepts/solution|solution]] is easy to check would also be easy to solve—a claim widely believed to be false, but unproven.

## Practical Implications

The distinction between P and NP has profound implications for [[concepts/cryptography|cryptography]] and security. Modern encryption systems rely on the assumption that certain problems (such as factoring large numbers or solving the discrete logarithm problem) are in NP but not in P—meaning a solution can be verified quickly but cannot be found quickly. If P were equal to NP, these cryptographic systems would be broken, as adversaries could efficiently find solutions rather than merely verify them.

## Current Status

Despite decades of research, the P versus NP question remains open. The Clay Mathematics Institute designated it one of seven [[concepts/millennium-prize-problems|Millennium Prize Problems]], offering a one-million-dollar reward for a proof either way. Most computer scientists conjecture that P ≠ NP, but no rigorous proof exists. The problem's difficulty has led to the development of [[concepts/wikilinkcomputational-complexity-theory|complexity theory]] as a discipline, including concepts like [[concepts/np-complete|NP-completeness]], which identify the "hardest" problems in NP.
