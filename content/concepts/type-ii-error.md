---
type: concept
domain: ai-agents
group: training-fine-tuning-evaluation
tags:
  - "hypothesis-testing"
  - "statistical-error"
  - "false-negative"
  - "type-ii-error"
  - "model-evaluation"
aliases:
  - "false negative"
  - "beta error"
summary: A Type II error occurs when a hypothesis test fails to reject a false null hypothesis, incorrectly concluding no effect or relationship exists when one actually does.
updated: 2026-05-01
---
# Type II Error

A Type II error, also called a false negative, occurs in [[concepts/hypothesis-driven-experimentation|hypothesis testing]] when a test fails to reject a null hypothesis that is actually false. In other words, the test concludes there is no significant effect or relationship when one genuinely exists in the data or reality being studied. The probability of committing a Type II error is denoted by beta (β), while the statistical power of a test—its ability to correctly detect a true effect—equals 1 - β.

## Relationship to Type I Error

Type II errors exist in tension with Type I errors (false positives), which occur when a test incorrectly rejects a true null hypothesis. In experimental design, lowering the threshold to reduce Type II errors typically increases the risk of Type I errors, and vice versa. This trade-off requires researchers to carefully balance the acceptable levels of both error types based on the consequences of each mistake in their specific context.

## Practical Implications

Type II errors are particularly problematic in domains where failing to detect a real effect can have serious consequences. In medical research, for example, a Type II error might mean a treatment with genuine therapeutic value is deemed ineffective. The likelihood of Type II errors increases with smaller sample sizes, larger effect sizes that go undetected, and overly conservative statistical thresholds. Researchers can reduce Type II errors through adequate sample size planning, careful study design, and appropriate statistical methods.

## Source Notes
- 2026-04-10: [[lab-notes/2026-04-10-Wirtz-Pump-Mechanics-Overcoming-Airlock-and-Hydrostatic-Pressure-Chall|Wirtz Pump Mechanics Overcoming Airlock and Hydrostatic Pressure Chall]] · [▶ source](https://www.youtube.com/watch?v=wCxRHueX6jQ)