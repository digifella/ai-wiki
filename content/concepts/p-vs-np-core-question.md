---
type: concept
domain: maths-cryptography
group: mathematical-reasoning-proof
tags:
  - "computational-complexity"
  - "p-vs-np"
  - "millennium-problem"
  - "algorithm-theory"
  - "cryptography-foundations"
  - "decision-problems"
aliases:
  - "P ≠ NP question"
  - "NP-completeness problem"
  - "polynomial-time solvability"
summary: The P vs NP problem questions whether all computational problems whose solutions can be quickly verified (NP) can also be quickly solved (P).
updated: 2026-05-01
---
# P Vs NP Core Question

The [[concepts/a-video-titled-p-vs-np|P versus NP]] problem is one of the most fundamental open questions in [[concepts/theoretical-computer-science|theoretical computer science]] and [[concepts/mathematics|mathematics]]. It asks whether two classes of [[concepts/computational-problems|computational problems]] are actually equivalent: the class P (problems solvable quickly by a deterministic algorithm) and the class NP (problems whose solutions can be quickly *verified* once proposed). In practical terms, the question is whether being able to check a [[concepts/solution|solution]] quickly is equivalent to being able to find one quickly.

## Formal Definition and Significance

P stands for "polynomial time"—problems that a deterministic computer can solve in time proportional to a polynomial function of the input size. NP stands for "nondeterministic polynomial time"—problems where a proposed solution can be checked for correctness in polynomial time, even if finding that solution might take much longer. It is trivially true that P is a subset of NP (if you can solve something quickly, you can verify it quickly), but whether P equals NP remains unproven.

## Implications for Cryptography and Practice

The practical stakes of this problem are enormous. Most modern cryptographic systems rely on the assumption that P ≠ NP—specifically, that certain problems (like factoring large numbers) are hard to solve but easy to verify. If P were proven equal to NP, it would imply that every problem whose solution can be verified quickly can also be solved quickly, potentially breaking most current encryption schemes. Conversely, proving P ≠ NP would provide mathematical justification for the security of these systems. The problem carries a one-million-dollar Millennium Prize, reflecting its importance to mathematics and computer science.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Gemma-4-E2B-LLM-Fine-Tuning-Custom-Dataset-Unsloth-Local-Tutorial|Gemma 4 E2B LLM Fine Tuning Custom Dataset Unsloth Local Tutorial]] · [▶ source](https://www.youtube.com/watch?v=cHpB0PTRx5A)
- 2026-04-11: [[lab-notes/2026-04-11-Sineks-Start-With-Why-Inspiring-Leadership-Through-Purpose-Driven-Comm|Sineks Start With Why Inspiring Leadership Through Purpose Driven Comm]] · [▶ source](https://www.youtube.com/watch?v=u4ZoJKF_VuA)
- 2026-04-12: [[lab-notes/2026-04-12-Feynman-Mathematics-as-a-Tool-Not-Understanding-Mayan-Example|Feynman Mathematics as a Tool Not Understanding Mayan Example]] · [▶ source](https://www.youtube.com/watch?v=E383eEA54DE)
- 2026-04-13: [[lab-notes/2026-04-13-P-vs-NP-Problem-Computational-Complexity-and-Implications-Summary|P vs NP Problem Computational Complexity and Implications Summary]] · [▶ source](https://www.youtube.com/watch?v=EHp4FPyajKQ)
- 2026-04-18: [[lab-notes/2026-04-18-Artemis-3-Readiness-HLSSLS-Challenges-and-Program-Outlook|Artemis 3 Readiness HLSSLS Challenges and Program Outlook]] · [▶ source](https://www.youtube.com/watch?v=n19xfIxu8_4)
- 2026-04-22: Stanford
- 2026-04-27: Apple