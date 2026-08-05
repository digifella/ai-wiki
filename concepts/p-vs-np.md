---
type: concept
domain: maths-logic-crypto
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
updated: 2026-07-12
group: mathematical-reasoning-proof
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# P Vs Np

The [[concepts/a-video-titled-p-vs-np|P versus NP]] problem is a central unsolved question in [[concepts/theoretical-computer-science|theoretical computer science]] and [[concepts/mathematics|mathematics]]. It asks whether two fundamental classes of [[concepts/computational-problems|computational problems]] are equivalent. The class P contains problems that can be *solved* quickly by a computer—specifically, in polynomial time relative to the input size. The class NP contains problems whose *solutions* can be *verified* quickly, even if finding those solutions might take far longer. The question is deceptively simple: if verifying a [[concepts/solution|solution]] is easy, must finding that solution also be easy?

## Formal Definition and Significance

Formally, P is the set of decision problems solvable by a deterministic [[concepts/turing-machine|Turing machine]] in polynomial time. NP is the set of decision problems whose solutions can be verified in polynomial time by a deterministic [[concepts/turing-machines|Turing machine]]. It is known that P ⊆ NP, meaning every problem solvable in polynomial time can also be verified in polynomial time. The open question is whether this inclusion is strict—that is, whether there exist problems in NP that are not in P. A positive answer would mean P ≠ NP; a negative answer would mean P = NP.

## Practical Impact

The [[concepts/p-vs-np-verification|P versus NP]] problem has profound practical implications. Many real-[[entities/earth|world]] optimization problems—including scheduling, [[concepts/cryptography|cryptography]], and combinatorial search—are known to be NP problems. If P = NP, efficient [[concepts/algorithms|algorithms]] would exist for all of them. If P ≠ NP, no such universal efficient algorithms exist, and computational hardness becomes a feature rather than a limitation. This distinction underpins modern cryptography: most [[concepts/secure|secure]] encryption systems assume P ≠ NP.

The problem remains unsolved despite decades of research. In 2000, it was designated a Millennium Prize Problem by the Clay Mathematics Institute, with a one million dollar reward for its resolution. Most computer scientists believe P ≠ NP, but no [[concepts/proof|proof]] has been established.
