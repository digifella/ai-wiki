---
type: concept
domain: tools-platforms
tags:
  - "hypothesis testing"
  - "scientific method"
  - "feynman"
  - "null-hypothesis"
  - "alternative-hypothesis"
  - "statistical-significance"
  - "type-i-error"
  - "type-ii-error"
summary: "Hypothesis testing is a statistical method that uses sample data to determine whether there is sufficient evidence to reject a null hypothesis in favor of an alternative hypothesis."
updated: 2026-04-14
group: developer-tooling-clis
---
# Hypothesis Testing

[[concepts/hypothesis-driven-experimentation|Hypothesis testing]] is a statistical method that uses sample data to assess two mutually exclusive statements about the population: one that is null (typically denoted as H₀) and another which represents an alternative hypothesis. The goal is to determine whether there is enough evidence in the sample to reject the null hypothesis.

- **Null Hypothesis (H₀):** This statement asserts no effect or no difference.
- **Alternative Hypothesis (H₁):** This statement proposes a specific effect or difference, often what the researcher wants to prove.

### Steps in Hypothesis Testing
1. **State the hypotheses:** Clearly define both the null and alternative hypotheses.
2. **Choose the level of significance:** Decide on an acceptable probability threshold for incorrectly rejecting H₀ ([[concepts/type-i-error|Type I error]]).
3. **Calculate the test statistic:** Use statistical methods to derive a value that represents how far your sample results are from what's expected under H₀.
4. **Determine critical values or p-value:** Find out the criterion against which you will judge whether to reject H₀.
5. **Make a decision:** Based on the comparison between the test statistic and critical values (or p-value), decide to either reject or fail to reject H₀.

### Related Concepts
- [[concepts/statistical-significance|statistical significance]]
- Type I error
- [[concepts/type-ii-error|Type II error]]

### Feynman's Three-Step Scientific Method: Guess, Compute, Compare, Validate with Nature
[[entities/richard-feynman|Richard Feynman]]’s lecture outlines the fundamental process of discovering new scientific laws, emphasizing a rigorous, experiment-driven approach. He introduces a three-step method:
- **Guess:** Propose an idea or hypothesis.
- **[[concepts/compute|Compute]]:** Derive logical consequences based on your guess.
- **Compare/Validate with Nature:** Test these computed consequences against observed natural phenomena.

### Backlinks
2026 04 12 Feynmans Three Step [[concepts/scientific-method|Scientific Method]] Guess Compute Compare Validate w

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-AutoResearch-Autonomous-AI-Agent-Self-Improvement-Through-Code-Iterati|AutoResearch Autonomous AI Agent Self Improvement Through Code Iterati]] · [▶ source](https://www.youtube.com/watch?v=uBWuKh1nZ2Y)
- 2026-04-26: Karpathy