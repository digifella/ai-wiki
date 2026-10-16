---
type: concept
domain: maths-logic-crypto
tags:
  - "analytic-continuation"
  - "complex-analysis"
  - "riemann-zeta-function"
  - "zeta-regularization"
  - "quantum-field-theory"
  - "casimir-effect"
  - "divergent-series"
  - "holomorphic-functions"
aliases:
  - "Analytic Extension"
  - "Zeta Function Regularization"
summary: "Analytic continuation is a complex analysis technique that extends the domain of holomorphic functions, enabling the assignment of finite values to divergent series and integrals in number theory and quantum physics."
updated: 2026-10-12
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-11T22:16:19+00:00" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Analytic Continuation

**Analytic Continuation** is a technique in [[concepts/zeta-function|complex analysis]] that extends the domain of a given holomorphic function to a larger region. It is fundamental in [[concepts/number-theory]] and [[concepts/quantum-field-theory]] for assigning finite values to [[concepts/divergent-series|divergent series]] and integrals.

## Key Concepts

- **Uniqueness**: If two analytic functions agree on a set with an accumulation point within their domain, they are identical on the connected component containing that set.
- **[[concepts/riemann-zeta-function|Riemann Zeta Function]]**: The classic example where $\zeta(s) = \sum_{n=1}^{\infty} n^{-s}$ converges only for $\text{Re}(s) > 1$. Analytic continuation allows evaluation at $s = -1$, yielding $\zeta(-1) = -1/12$.
- **Regularization**: A process used in [[concepts/physics]] to handle infinities, often relying on analytic continuation to extract meaningful physical quantities from divergent expressions.

## Applications in Quantum Physics

- **Casimir Effect**: The calculation of [[concepts/type-ia-supernovae|vacuum energy]] between plates relies on summing zero-point energies, which diverge. Analytic continuation provides a finite, measurable result.
- **[[concepts/string-theory|String Theory]]**: Critical dimensions and partition functions often require analytic continuation of the zeta function to ensure [[concepts/logical-consistency|consistency]].
- **[[concepts/zeta-function-regularization|Zeta Function Regularization]]**: A method to define the determinant of operators with infinite eigenvalues by using $\zeta'(0)$.

## Notable Derivations

- The result $1 + 2 + 3 + \[[concepts/dots-agent|dots]] = -1/12$ is not a standard sum but the value of the analytically continued zeta function at $s=-1$.
- This value appears in the Casimir effect and bosonic string [[concepts/theory|theory]] calculations.
- For a detailed breakdown of this derivation in the context of quantum physics, see: [[lab-notes/2026-10-11-Analytic-Continuation-Deriving--112-for-Quantum-Physics|Analytic Continuation: Deriving -1/12 for Quantum Physics Applications]]

## References

- [Analytic Continuation: Deriving -1/12 for Quantum Physics Applications](https://www.youtube.com/watch?v=w6229Ivy_Lo)
