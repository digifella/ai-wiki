---
type: concept
domain: maths-logic-crypto
tags:
  - "prime-numbers"
  - "number-theory"
  - "fundamental-theorem-of-arithmetic"
  - "prime-gaps"
  - "euclid"
aliases:
  - "primes"
summary: Prime numbers are natural numbers greater than 1 with no positive divisors other than 1 and themselves, serving as the fundamental building blocks of number theory.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-16T20:30:26+00:00" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Prime Numbers

**Prime numbers** are natural numbers greater than 1 that have no positive divisors other than 1 and themselves. They are the fundamental building blocks of number theory, as every integer greater than 1 is either a prime itself or can be represented as a unique product of primes (the fundamental theorem of arithmetic).

## Key Properties
- **Indivisibility**: Primes cannot be formed by multiplying two smaller natural numbers.
- **Infinite Quantity**: There are infinitely many prime numbers (Euclid's theorem).
- **Distribution**: The density of primes decreases as numbers get larger, described asymptotically by the prime number theorem.

## Prime Gaps
A **prime gap** is the difference between two successive prime numbers. While primes become less frequent, gaps between them can be arbitrarily large.

### Constructive Proof of Large Gaps
It is possible to construct sequences of consecutive composite numbers of any given length $n$. This is typically demonstrated using factorial properties:
- Consider the sequence $n! + 2, n! + 3, \dots, n! + n$.
- Each term $n! + k$ (where $2 \le k \le n$) is divisible by $k$.
- Thus, this sequence contains $n-1$ consecutive composite numbers.
- This proves that [[concepts/prime-gaps|prime gaps]] can be arbitrarily large, contradicting the intuition that primes are uniformly distributed.

For a detailed breakdown of this constructive proof and its implications for prime distribution, see: [[lab-notes/2026-09-17-Constructive-Proof-of-Arbitrarily-Large-Prime-Gaps-Using|Constructive Proof of Arbitrarily Large Prime Gaps Using Factorials]]

## Related Concepts
- [[concepts/twin-primes|Twin Primes]]: Pairs of primes with a gap of 2.
- Goldbach Conjecture: Every even integer greater than 2 is the sum of two primes.
- Riemann Hypothesis: Deep connection between prime distribution and complex analysis.

## References
- [Constructive Proof of Arbitrarily Large Prime Gaps Using Factorials](https://www.youtube.com/watch?v=oax6t6Of2WY) (Numberphile, 2026-09-17)
