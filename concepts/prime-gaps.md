---
type: concept
domain: maths-logic-crypto
tags:
  - "mathematics"
  - "number-theory"
  - "primes"
  - "gaps"
  - "factorial"
  - "constructive-proof"
  - "prime-gaps"
  - "prime-numbers"
  - "composite-numbers"
  - "twin-prime-conjecture"
aliases:
  - "Prime Gap"
  - "Gaps Between Primes"
summary: Prime gaps are the differences between consecutive prime numbers, which can be arbitrarily large as demonstrated by sequences of consecutive composite numbers derived from factorials.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-16T20:30:50+00:00" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Prime Gaps

**Prime gaps** refer to the difference between consecutive [[concepts/prime-numbers|prime numbers]]. While the Prime Number Theorem describes the asymptotic distribution of primes, the behavior of these gaps reveals significant irregularities in their density.

## Key Properties
- Gaps can be arbitrarily large. For any integer $n$, there exists a sequence of $n$ consecutive composite numbers.
- The [[concepts/twin-primes|Twin Prime Conjecture]] posits that gaps of size 2 occur infinitely often, though this remains unproven.
- Prime Gap statistics are critical in understanding the distribution of prime numbers and have implications for cryptography and [[concepts/computational-complexity]].

## Constructive Proof of Arbitrarily Large Gaps
A standard method to demonstrate that prime gaps can exceed any given bound involves the use of factorials.

- **Method**: Consider the sequence of integers $n! + 2, n! + 3, \dots, n! + n$.
- **Logic**: For each $k$ in the range $2 \le k \le n$, $k$ divides $n!$. Consequently, $k$ also divides $n! + k$.
- **Result**: Since each term in the sequence has a divisor other than 1 and itself, all terms are composite. This creates a gap of at least $n-1$ between the prime preceding $n! + 2$ and the prime following $n! + n$.
- **Implication**: As $n \to \infty$, the gap size $\to \infty$, proving that there is no maximum prime gap.

For a detailed breakdown of this constructive approach, see [[lab-notes/2026-09-17-Constructive-Proof-of-Arbitrarily-Large-Prime-Gaps-Using|Constructive Proof of Arbitrarily Large Prime Gaps Using Factorials]].

## References
- [Constructive Proof of Arbitrarily Large Prime Gaps Using Factorials](https://www.youtube.com/watch?v=oax6t6Of2WY) (Numberphile, 2026-09-17)
