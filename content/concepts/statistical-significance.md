---
type: concept
domain: maths-cryptography
group: number-theory-prime-numbers
tags:
  - "statistical-testing"
  - "hypothesis-testing"
  - "p-values"
  - "statistical-inference"
  - "significance-testing"
aliases:
  - "statistical significance test"
  - "significance level"
summary: A statistical determination of whether an observed result is unlikely to have occurred by chance alone, typically assessed through hypothesis testing.
updated: 2026-05-01
---
# Statistical Significance

Statistical significance is a mathematical determination of whether an observed result is unlikely to have occurred by random chance alone. In practice, it answers the question: given the data we have observed, how probable is it that this outcome would happen if no real effect or relationship actually exists? This assessment is fundamental to empirical research across [[concepts/mathematics|mathematics]], [[concepts/cryptography|cryptography]], and other quantitative disciplines.

## Hypothesis Testing Framework

Statistical significance is typically evaluated through hypothesis testing, a formal procedure that compares an observed result against a null hypothesis (the assumption that no effect exists). Researchers calculate a test statistic from their data and determine a p-value, which represents the probability of observing results at least as extreme as those measured, assuming the null hypothesis is true. If this p-value falls below a predetermined threshold—commonly 0.05 or 0.01—the result is declared statistically significant, meaning the null hypothesis is rejected in favor of an alternative hypothesis.

## Application and Limitations

In cryptography and [[concepts/number-theory|number theory]], statistical significance helps validate claims about mathematical properties and distributions. For instance, examining whether observed patterns in prime number distributions deviate significantly from random expectation requires statistical [[concepts/testing|testing]]. However, statistical significance indicates only whether a result is likely real, not whether it is important or practically meaningful. A result can be statistically significant yet have negligible effect size, and conversely, meaningful effects may fail to reach statistical significance with insufficient sample sizes.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Riemann-Hypothesis-Hidden-Order-in-Prime-Number-Distribution|Riemann Hypothesis Hidden Order in Prime Number Distribution]] · [▶ source](https://www.youtube.com/watch?v=59I84mWLK_c)