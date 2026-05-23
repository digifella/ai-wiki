---
type: concept
domain: maths-cryptography
tags:
  - "prime-numbers"
  - "number-theory"
  - "mathematics"
  - "prime-distribution"
  - "cryptography"
  - "gaps"
aliases:
  - "prime gap"
  - "gaps between primes"
summary: Prime gaps are the differences between consecutive prime numbers.
updated: 2026-05-23
group: number-theory-prime-numbers
title: Prime gaps
---
# Prime Gaps

A [[concepts/prime-lens|prime]] gap is the difference between two consecutive [[concepts/prime-numbers|prime numbers]]. For example, the gap between 3 and 5 is 2, while the gap between 7 and 11 is 4. Formally, if p_n denotes the nth prime number, the nth prime gap is defined as g_n = p_(n+1) - p_n. Prime gaps are a fundamental object of study in analytic [[concepts/number-theory|number theory]], as their [[concepts/distribution|distribution]] reveals structural patterns in how primes become sparser among larger integers.

## Observed Patterns

Prime gaps tend to grow larger as numbers increase, which aligns with the [[concepts/prime-number-theorem|Prime Number Theorem]]'s implication that primes become less frequent in higher ranges. The average gap near a large number N is approximately ln(N). However, gaps are highly irregular: sometimes consecutive primes are only 2 apart ([[concepts/twin-prime-conjecture|twin primes]]), while other gaps are comparatively large. The first occurrence of a gap of size g is called a maximal prime gap, and documenting these has been an ongoing computational project.

## Open Questions

Several significant [[concepts/unsolved-problems|unsolved problems]] concern prime gaps. The Twin Prime Conjecture posits that infinitely many primes differ by exactly 2. More broadly, Cramér's conjecture suggests that the largest gap after a prime p should be [[concepts/assistive-technology|at]] most O((log p)²), but this remains unproven. The Polignac conjecture generalizes the twin prime problem to all even gap sizes. These questions remain central to understanding the deep [[concepts/prime-number-distribution|distribution of primes]].
