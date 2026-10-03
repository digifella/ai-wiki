---
type: concept
domain: maths-logic-crypto
tags:
  - "mathematics"
  - "number-theory"
  - "primes"
  - "gaps"
  - "factorials"
  - "twin-primes"
  - "prime-gaps"
  - "prime-numbers"
  - "unsolved-problems"
  - "composite-numbers"
aliases:
  - "Twin Prime Conjecture"
summary: Twin primes are pairs of prime numbers differing by exactly 2, with the conjecture that infinitely many such pairs exist.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-16T20:31:12+00:00" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Twin Primes

**Twin primes** are pairs of [[concepts/prime-numbers|prime numbers]] that differ by exactly 2 (e.g., (3, 5), (5, 7), (11, 13)). The **Twin Prime Conjecture** posits that there are infinitely many such pairs, a statement that remains unproven.

## Context: Prime Gaps

While twin primes represent the smallest possible non-trivial gap between primes, prime numbers can also be separated by arbitrarily large gaps. This duality highlights the irregular distribution of primes.

### Constructive Proof of Large Gaps
The existence of arbitrarily large gaps between consecutive primes can be demonstrated constructively using factorials. For any integer $n > 1$, the sequence of $n-1$ consecutive integers:
$$ n! + 2, n! + 3, \dots, n! + n $$
are all composite. This proves that [[concepts/prime-gaps|prime gaps]] can be made as large as desired.

- **Source Analysis**: A detailed constructive proof and visual explanation is available in [[lab-notes/2026-09-17-Constructive-Proof-of-Arbitrarily-Large-Prime-Gaps-Using|Constructive Proof of Arbitrarily Large Prime Gaps Using Factorials]].
- **Key Insight**: The factorial function $n!$ provides a deterministic method to generate composite numbers, contrasting with the unpredictable nature of prime distribution.
- **Reference**: [Constructive Proof of Arbitrarily Large Prime Gaps Using Factorials](https://www.youtube.com/watch?v=oax6t6Of2WY)

## Related Concepts
- Prime Number Theorem: Describes the asymptotic distribution of [[concepts/prime-numbers|primes]].
- Goldbach Conjecture: Another major unsolved problem in additive number theory.
- Dirichlet's Theorem: Concerns primes in arithmetic progressions.
