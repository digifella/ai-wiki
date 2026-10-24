---
type: concept
domain: maths-logic-crypto
tags:
  - "mathematics"
  - "analysis"
  - "counterexample"
  - "function"
  - "intermediate-value-theorem"
  - "real-analysis"
  - "continuous-functions"
  - "existence-theorem"
  - "darboux-property"
aliases:
  - "IVT"
summary: "The Intermediate Value Theorem states that a continuous function on a closed interval takes every value between its endpoints, guaranteeing existence but not uniqueness of the solution."
updated: 2026-10-13
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-12T21:04:26+00:00" }
group: mathematical-reasoning-proof
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Intermediate Value Theorem

The **Intermediate Value Theorem (IVT)** is a fundamental theorem in calculus and [[concepts/real-analysis]] concerning continuous functions. It states that if a real-valued function $f$ is continuous on a closed interval $[a, b]$, and $k$ is any number between $f(a)$ and $f(b)$, then there exists at least one number $c$ in the interval $[a, b]$ such that $f(c) = k$.

## Key Properties
- **Continuity Requirement**: The theorem strictly applies to continuous functions. Discontinuities can break the "intermediate" property.
- **Existence, Not Uniqueness**: The IVT guarantees the *existence* of a value $c$ but does not specify how to find it, nor does it guarantee uniqueness.
- **Connectedness**: Geometrically, it reflects the fact that the image of a connected set (an interval) under a continuous map is also connected.

## Counterexamples and Pathological Functions
While the IVT holds for all continuous functions, there exist functions that satisfy the conclusion of the IVT (mapping intervals to intervals) without being continuous. These are known as Darboux_function.

A prominent example is **[[concepts/conways-base-13-function|Conway's Base 13 Function]]**, which maps every non-empty open interval onto the entire real line $\mathbb{R}$. This function satisfies the intermediate value property trivially but is discontinuous everywhere.

- See [[lab-notes/2026-10-13-Conways-Base-13-Function-Explaining-its-Unique-Mathemati|Conway's Base 13 Function: Explaining its Unique Mathematical Definition]] for a detailed breakdown of this counterintuitive construction.
- The function challenges the intuitive definition of a function as a simple rule assigning unique outputs, demonstrating the complexity of [[concepts/real-analysis]] objects.
- Video explanation by [[entities/numberphile|Numberphile]]: [Conway's Base 13 Function: Explaining its Unique Mathematical Definition](https://www.youtube.com/watch?v=zsBaApyf_Ns)

## Related Concepts
- [[concepts/continuity]]
- Derivative (via Darboux's_theorem)
- Fixed_point_theorem
- Root_finding_algorithm (application of IVT)
