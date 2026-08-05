---
type: concept
domain: ai-agents
tags:
  - "probability"
  - "statistics"
  - "normal-distribution"
  - "central-limit-theorem"
  - "stochastic-processes"
  - "emergent-behavior"
  - "random-walk"
  - "binomial-distribution"
aliases:
  - "Quincunx"
  - "Bean Machine"
  - "Galton Box"
summary: The Galton Board is a physical device that demonstrates the emergence of the Normal Distribution from random processes through independent Bernoulli trials.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Galton Board

The **Galton Board** (also known as a quincunx or bean machine) is a physical device invented by Sir Francis Galton to demonstrate the Central Limit Theorem and the [[concepts/emergent-behavior|emergence]] of the Normal Distribution from random processes. It consists of a vertical board with interleaved rows of pins. Balls dropped from the top bounce left or right at each pin, accumulating in bins at the bottom.

## Mechanism
1.  **Random Walk**: Each ball undergoes a series of independent Bernoulli trials (left/right deflection) as it descends.
2.  **Binomial Distribution**: The position of a ball in the final bins follows a Binomial Distribution based on the number of rows and the [[concepts/probability|probability]] of deflection.
3.  **Convergence**: As the number of rows (trials) increases, the distribution of balls in the bins approximates a [[concepts/bell-curve|Gaussian Distribution]] (bell curve), illustrating how aggregate randomness yields predictable order.

## Related Concepts
-   Law of Large Numbers
-   Entropy
-   Stochastic Processes

## References
-   [How GPT Works: Token Embedding and Attention Mechanisms Explained](https://www.youtube.com/watch?v=7gkaWaDEpHg)
-   [[lab-notes/2026-06-24-How-GPT-Works-Token-Embedding-and-Attention-Mechanisms-E|How GPT Works: Token Embedding and Attention Mechanisms Explained]]
