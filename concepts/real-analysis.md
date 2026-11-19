---
type: concept
domain: maths-logic-crypto
tags:
  - "real-analysis"
  - "mathematical-analysis"
  - "limits"
  - "continuity"
  - "differentiation"
  - "integration"
  - "pathological-functions"
  - "riemann-integral"
aliases:
  - "Real Analysis"
summary: "Real Analysis is the branch of mathematics rigorously establishing the properties of limits, continuity, differentiation, and integration for real-valued functions."
updated: 2026-10-13
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-12T21:02:15+00:00" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Real Analysis

**Real Analysis** is the branch of mathematical analysis dealing with the real numbers and real-valued function of a real variable. It rigorously establishes the properties of limits, continuity, differentiation, and integration.

## Key Concepts

- **Continuity and Limits**: Study of limit ([[concepts/mathematics|mathematics]]) and [[concepts/continuity]] as foundational tools.
- **Differentiation**: Rigorous definition of the derivative and its properties.
- **Integration**: Construction of the [[entities/bernhard-riemann|Riemann]] integral and Lebesgue integral.
- **Sequences and Series**: Convergence criteria for sequence and series of real numbers.
- **Topology of $\mathbb{R}$**: Properties of open/closed sets, compactness, and connectedness.

## Pathological Functions

Real analysis often explores functions that defy intuitive geometric visualization, serving as counterexamples to common conjectures.

- **[[concepts/conways-base-13-function|Conway's Base 13 Function]]**: A function $f: \mathbb{R} \to \mathbb{R}$ that maps every non-empty open interval onto the entire real line $\mathbb{R}$.
    - Despite being discontinuity everywhere, it satisfies the [[concepts/intermediate-value-theorem|intermediate value theorem]] on every interval.
    - It is constructed using base-13 expansions of real numbers to encode arbitrary real values.
    - See [[lab-notes/2026-10-13-Conways-Base-13-Function-Explaining-its-Unique-Mathemati|Conway's Base 13 Function: Explaining its Unique Mathematical Definition]] for a detailed breakdown of its construction and implications.
    - [[concepts/video-resource|Video resource]]: [Conway's Base 13 Function: Explaining its Unique Mathematical Definition](https://www.youtube.com/watch?v=zsBaApyf_Ns)
- **Weierstrass Function**: A classic example of a function that is continuous function everywhere but differentiable nowhere.
- **Dirichlet Function**: The indicator function of the rational number, which is Lebesgue integrable but not Riemann integrable.

## Related Topics

- [[concepts/zeta-function|Complex Analysis]]
- Measure [[concepts/theory|Theory]]
- Functional Analysis
- Topology
