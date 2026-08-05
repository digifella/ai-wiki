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
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Type II Error

A Type II error, also called a false negative, occurs in hypothesis testing when a test fails to reject a null hypothesis that is actually false. In other words, the test concludes there is no significant effect or relationship when one genuinely exists. This type of error represents a missed detection—the test fails to identify a true signal in the data. The probability of committing a Type II error is denoted by beta (β), while the statistical power of a test—its ability to correctly detect a true effect—equals 1 - β.

## Relationship to Type I Error

Type II errors stand in contrast to Type I errors (false positives), which occur when a test incorrectly rejects a true null hypothesis. Together, these two error types define the trade-offs inherent in hypothesis testing. Researchers must balance the risk of falsely claiming an effect exists (Type I) against the risk of failing to detect an effect that does exist (Type II). The acceptable levels of each error depend on the context and consequences of the decision being made.

## Practical Implications for AI Agents

In AI systems and experimental validation, Type II errors can have significant consequences. An agent trained on noisy data or with insufficient statistical power may fail to recognize valid patterns or relationships, leading to underperformance in real-world applications. Minimizing Type II errors often requires larger sample sizes, more sensitive detection methods, or adjusted decision thresholds—all factors that must be considered during system design and validation.

## Source Notes
- 2026-04-10: [[lab-notes/2026-04-10-Wirtz-Pump-Mechanics-Overcoming-Airlock-and-Hydrostatic-Pressure-Chall|Wirtz Pump Mechanics Overcoming Airlock and Hydrostatic Pressure Chall]] · [▶ source](https://www.youtube.com/watch?v=wCxRHueX6jQ)
