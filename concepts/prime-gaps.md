---
type: concept
domain: maths-logic-crypto
tags:
  - "prime-numbers"
  - "number-theory"
  - "mathematics"
  - "prime-distribution"
  - "cryptography"
  - "gaps"
  - "twin-primes"
aliases:
  - "prime gap"
  - "gaps between primes"
summary: Prime gaps are the differences between consecutive prime numbers.
updated: 2026-07-12
group: number-theory-prime-numbers
title: Prime gaps
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

A [[concepts/prime-lens|prime]] gap is the difference between two consecutive [[concepts/prime-numbers|prime numbers]]. Formally, if $p_n$ denotes the $n$th [[concepts/prime-number|prime number]], the $n$th prime gap is defined as $g_n = p_{n+1} - p_n$. For example, the gap between 3 and 5 is 2, the gap between 7 and 11 is 4, and the gap between 89 and 97 is 8. [[concepts/prime-number-distribution|Prime gaps]] are a fundamental object of study in analytic [[concepts/number-theory|number theory]], as their distribution reveals structural patterns in how primes become sparser among larger integers.

## Distribution and Growth

Prime gaps tend to increase as numbers grow larger, though not uniformly. The average gap near a large number $n$ is approximately $\ln(n)$, as predicted by the [[concepts/prime-number-theorem|prime number theorem]]. However, actual gaps fluctuate considerably—sometimes occurring much smaller or larger than average. The largest known prime gaps have been found computationally, with researchers identifying gaps exceeding 1,000 between consecutive primes in the range of [[concepts/enormous-numbers|very large numbers]].

## Bounded Gaps and Zhang's Breakthrough

While the average gap grows indefinitely, a major open question was whether small gaps (specifically bounded gaps) occur infinitely often. This relates directly to the [[concepts/twin-prime-conjecture|Twin Prime Conjecture]], which posits that there are infinitely many prime pairs with a gap of 2.

*   **Bounded Gap [[concepts/proof|Proof]]**: In a landmark result discussed in [[lab-notes/2026-06-15-Yitang-Zhangs-Proof-Bounded-Prime-Gaps-and-the-Twin-Prim|Yitang Zhang's Proof: Bounded Prime Gaps and the Twin Prime Conjecture]], Yitang [[entities/peng-zhang|Zhang]] proved that there exists a finite bound $H$ such that infinitely many pairs of primes differ by at most $H$.
*   **Significance**: This was the first time a bounded gap had been proven to occur infinitely often, shattering previous records and providing significant progress toward resolving the [[concepts/twin-prime-conjecture|Twin Prime Conjecture]].
*   **Subsequent Improvements**: Following Zhang's initial bound (originally 70 million), subsequent collaborative efforts using the Polymath project reduced this bound significantly, bringing it closer to the conjectured value of 2.

## Open Questions

Several fundamental questions remain regarding the fine-scale [[concepts/distribution-of-prime-numbers|distribution of primes]]:
*   **Twin Prime Conjecture**: Are there infinitely many primes $p$ such that $p+2$ is also prime? (i.e., are there infinitely many gaps of size 2?)
*   **Cramér's Conjecture**: Predicts an upper bound for the maximal gap between consecutive primes.
*   **Polignac's Conjecture**: Suggests that for any even natural number $k$, there are infinitely many pairs of consecutive primes with difference $k$.

## References

*   [Yitang Zhang's Proof: Bounded Prime Gaps and the Twin Prime Conjecture](https://www.youtube.com/watch?v=8HBDE-msUjw)
