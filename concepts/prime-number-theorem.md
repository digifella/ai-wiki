---
type: concept
domain: maths-logic-crypto
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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
title: prime-number-theorem
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Prime Number Theorem

The Prime Number Theorem is a foundational result in analytic number theory that describes the asymptotic distribution of prime numbers. It states that the number of primes less than or equal to a given value *n*, denoted π(*n*), is asymptotically equivalent to *n*/ln(*n*). More precisely, the ratio π(*n*) / (*n*/ln(*n*)) approaches 1 as *n* grows arbitrarily large. This was the first rigorous characterization of how primes become sparser among larger integers, providing quantitative precision to what had long been an intuitive observation.

## Historical Development

The theorem was independently conjectured by Adrien-Marie Legendre and Carl Friedrich Gauss around 1798, based on empirical observations of prime tables. However, the first complete proofs were published in 1896 by Jacques Hadamard and Charles Jean de la Vallée Poussin. Their work relied heavily on the properties of the Riemann zeta function, specifically demonstrating that the zeta function has no zeros on the line Re(*s*) = 1. An elementary proof, which did not use complex analysis, was later provided by Paul Erdős and Atle Selberg in 1949.

## Significance and Applications

The theorem provides the theoretical basis for estimating the frequency of prime numbers, which is critical in computational number theory and cryptography. In modern cryptographic systems such as RSA, the security relies on the difficulty of factoring large integers, a problem whose complexity is informed by the distribution of primes described by the theorem. The result also implies that the *n*-th prime number is approximately *n* ln(*n*), a relationship that guides algorithms for prime generation and testing.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Riemann-Hypothesis-Hidden-Order-in-Prime-Number-Distribution|Riemann Hypothesis Hidden Order in Prime Number Distribution]] · [▶ source](https://www.youtube.com/watch?v=59I84mWLK_c)
- 2026-04-10: [[lab-notes/2026-04-10-Awkward-Primes-Minimal-Line-Coverage-of-Prime-Number-Coordinates|Awkward Primes Minimal Line Coverage of Prime Number Coordinates]] · [▶ source](https://www.youtube.com/watch?v=VFoIPlUalRY)
