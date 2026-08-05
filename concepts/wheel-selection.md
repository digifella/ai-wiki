---
type: concept
domain: entertainment-games
tags:
  - "genetic-algorithms"
  - "evolutionary-computation"
  - "selection-operator"
  - "stochastic-process"
  - "fitness-proportionate"
  - "roulette-wheel"
  - "population-dynamics"
  - "computational-methods"
aliases:
  - "Roulette Wheel Selection"
  - "Fitness Proportionate Selection"
  - "Stochastic Selection Operator"
summary: Wheel Selection is a stochastic operator in evolutionary algorithms that selects individuals for reproduction based on their relative fitness values.
updated: 2026-07-09
group: sports-athletics
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-09" }
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# Wheel Selection

**Wheel Selection** (also known as **Roulette Wheel Selection**) is a stochastic selection operator used in Evolutionary [[concepts/algorithms|Algorithms]] and Genetic Algorithms. It selects individuals from a population for reproduction based on their relative fitness values.

## Mechanism

1.  **Fitness Proportionate Selection**: Each individual $i$ is assigned a slice of a virtual "wheel" proportional to its fitness $f_i$.
2.  **[[concepts/probability|Probability]] Calculation**: The probability $P_i$ of selecting individual $i$ is:
    $$ P_i = \frac{f_i}{\sum_{j=1}^{N} f_j} $$
    where $N$ is the population size.
3.  **Selection Process**: A random number is generated, and the wheel is "spun." The individual corresponding to the sector where the wheel stops is selected. This process is repeated to fill the new generation.

## Characteristics

-   **Stochastic Nature**: Unlike Tournament Selection or Rank Selection, wheel selection introduces randomness, allowing less fit individuals a non-[[concepts/concept-of-nothingness|zero]] chance of reproduction.
-   **Fitness [[concepts/computational-scaling|Scaling]]**: Requires fitness values to be non-negative. If fitness values vary significantly, high-fitness individuals may dominate prematurely (premature convergence).
-   **Computational Cost**: $O(N)$ for cumulative probability calculation; $O(\log N)$ or $O(1)$ for selection depending on implementation (e.g., stochastic universal sampling).

## Related Concepts

-   Genetic [[concepts/algorithm|Algorithm]]
-   Fitness Function
-   Selection Pressure
-   Stochastic Universal Sampling
