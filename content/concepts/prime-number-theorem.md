---
type: concept
domain: maths-cryptography
group: number-theory-prime-numbers
tags:
  - "prime-number-theorem"
  - "number-theory"
  - "prime-numbers"
  - "mathematics"
  - "riemann-hypothesis"
  - "prime-distribution"
aliases:
  - "PNT"
summary: A stub page regarding the prime number theorem.
updated: 2026-05-01
title: prime-number-theorem
---
# Prime Number Theorem

The Prime Number Theorem describes the asymptotic [[concepts/distribution|distribution]] of [[concepts/prime-numbers|prime numbers]] among the positive integers. Specifically, it states that the number of primes less than or equal to a given value *n*, denoted π(*n*), is approximately equal to *n* divided by the natural logarithm of *n*. In mathematical notation, π(*n*) ~ *n*/ln(*n*) as *n* approaches infinity. This theorem provides the first rigorous characterization of how primes become increasingly sparse at larger values, despite their fundamental importance in [[concepts/number-theory|number theory]].

## Historical Development

The theorem was conjectured by mathematicians including Gauss and Legendre in the late 18th century based on numerical observation, but remained unproven for nearly a century. Independent proofs were finally published by Jacques Hadamard and Charles-Jean de la Vallée Poussin in 1896, both relying on properties of the [[concepts/riemann-zeta-function|Riemann zeta function]]. These proofs established a deep [[concepts/connection|connection]] between prime distribution and complex analysis, linking the [[concepts/prime-number-distribution|distribution of primes]] to the zeros of the zeta function in the complex plane.

## Significance in Cryptography

The Prime Number Theorem has practical implications for cryptography, as many modern encryption schemes depend on the distribution and properties of large primes. The theorem guarantees that sufficiently large prime numbers exist with sufficient density to be found by probabilistic primality [[concepts/testing|testing]] algorithms, making it computationally feasible to generate the large primes needed for systems like RSA encryption.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Riemann-Hypothesis-Hidden-Order-in-Prime-Number-Distribution|Riemann Hypothesis Hidden Order in Prime Number Distribution]] · [▶ source](https://www.youtube.com/watch?v=59I84mWLK_c)
- 2026-04-10: [[lab-notes/2026-04-10-Awkward-Primes-Minimal-Line-Coverage-of-Prime-Number-Coordinates|Awkward Primes Minimal Line Coverage of Prime Number Coordinates]] · [▶ source](https://www.youtube.com/watch?v=VFoIPlUalRY)