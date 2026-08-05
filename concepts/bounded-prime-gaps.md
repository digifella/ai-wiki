---
type: concept
domain: maths-logic-crypto
tags:
  - "prime-gaps"
  - "number-theory"
  - "analytic-number-theory"
  - "twin-primes"
  - "yitang-zhang"
aliases:
  - "bounded gaps between primes"
  - "Zhang's bounded gap result"
  - "finite prime gap bound"
  - "consecutive prime differences"
summary: Bounded prime gaps refer to the proven existence of a finite constant H such that infinitely many pairs of consecutive primes differ by less than H, a breakthrough established by Yitang Zhang in 2013.
updated: 2026-07-11
group: number-theory-prime-numbers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Bounded Prime Gaps

**Bounded [[concepts/prime-lens|prime]] gaps** refer to the property that there exists a finite number $H$ such that infinitely many pairs of consecutive [[concepts/prime-numbers|primes]] differ by less than $H$. This concept is central to progress on the [[concepts/twin-prime-conjecture]], which posits that $H=2$ (i.e., there are infinitely many twin primes).

## Key Developments
- The existence of bounded [[concepts/prime-gaps|gaps between primes]] was proven in 2013, marking a major breakthrough in analytic [[concepts/number-theory|number theory]].
- Prior to this, it was unknown whether the gap between consecutive primes remained bounded as primes approached infinity.
- The result does not resolve the [[concepts/twin-prime-conjecture]] but establishes that [[concepts/prime-number|prime]] clusters are denser than previously proven bounds allowed.

## Yitang Zhang's Breakthrough
- In 2013, Yitang [[entities/peng-zhang|Zhang]] proved that there exists a constant $H \leq 70,000,000$ such that infinitely many pairs of primes differ by no more than $H$.
- This was the first time a finite bound was established for [[concepts/prime-number-distribution|prime gaps]], shifting the problem from existence of *any* bounded gap to optimizing the value of $H$.
- Subsequent collaborations (Polymath project) and refinements by James Maynard significantly reduced this bound.

## Related Concepts
- [[concepts/prime-number-theorem]]: Describes the [[concepts/distribution-of-prime-numbers|asymptotic distribution of primes]]; implies average gaps grow logarithmically, but does not preclude bounded small gaps occurring infinitely often.
- [[concepts/goldbach-conjecture|Goldbach's Conjecture]]: Another unsolved problem concerning additive properties of [[concepts/prime-numbers|primes]].
- Sieve Methods: Technical tools (e.g., Selberg sieve) used in [[entities/peng-zhang|Zhang]]’s [[concepts/proof|proof]] to isolate [[concepts/prime-lens|prime]] pairs.

## Sources & References
- [Yitang Zhang's Proof: Bounded Prime Gaps and the Twin Prime Conjecture](https://www.youtube.com/watch?v=8HBDE-msUjw) — [[entities/veritasium|Veritasium]] documentary on Zhang’s work and its context.
- [[lab-notes/2026-06-15-Yitang-Zhangs-Proof-Bounded-Prime-Gaps-and-the-Twin-Prim|Yitang Zhang's Proof: Bounded Prime Gaps and the Twin Prime Conjecture]] — Detailed summary of the historical and technical [[concepts/storytelling|narrative]].
