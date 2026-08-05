---
type: concept
domain: maths-logic-crypto
tags:
  - "normal-distribution"
  - "gaussian-distribution"
  - "probability-density"
  - "central-limit-theorem"
  - "statistical-models"
  - "empirical-rule"
aliases:
  - "Normal Distribution"
  - "Gaussian Distribution"
  - "Gaussian Curve"
  - "Normal Curve"
summary: The Bell Curve, or Normal Distribution, is a symmetric continuous probability distribution defined by its mean and standard deviation, where data near the mean are more frequent than data far from the mean.
updated: 2026-07-11
group: probability-statistics-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Bell Curve

The **Bell Curve**, formally known as the **Normal Distribution** or **Gaussian Distribution**, is a continuous [[concepts/probability|probability]] distribution that is symmetric about the mean, showing that data near the mean are more frequent in occurrence than data far from the mean. It is defined by the probability [[concepts/density|density]] function:

$$ f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} $$

Where:
- $\mu$ is the **mean** (center of the distribution)
- $\sigma$ is the **standard deviation** (spread or width)
- $\sigma^2$ is the **variance**

## Key Properties
- **Symmetry**: The curve is perfectly symmetric around the mean.
- **Mean, Median, Mode**: In a perfect normal distribution, these three measures of central tendency are identical.
- **Asymptotic**: The tails of the curve approach but never touch the horizontal axis.
- **Empirical Rule (68-95-99.7)**:
  - ~68% of data falls within $\pm 1\sigma$ of the mean.
  - ~95% of data falls within $\pm 2\sigma$ of the mean.
  - ~99.7% of data falls within $\pm 3\sigma$ of the mean.

## Applications & Context
- **Natural Phenomena**: Heights, [[concepts/parameters|weights]], and measurement errors often follow a normal distribution due to the Central Limit Theorem.
- **Standardization**: Used in Z-score calculations to [[concepts/feynmans-three-step-scientific-method|compare]] data points from different distributions.
- **[[concepts/machine-learning|Machine Learning]]**: Many [[concepts/algorithms|algorithms]] (e.g., Linear Regression, Gaussian Naive Bayes) assume normally distributed errors or features. While modern LLMs like GPT utilize complex architectures involving [[concepts/token-embedding]] and [[concepts/attention-mechanisms]], the initialization of [[concepts/weights|weights]] and the distribution of gradients often rely on normal distribution principles for stability. See [[lab-notes/2026-06-24-How-GPT-Works-Token-Embedding-and-Attention-Mechanisms-E|How GPT Works: Token Embedding and Attention Mechanisms Explained]] for details on how these [[concepts/causes|mechanisms]] function within [[concepts/transformer-architectures|transformer models]].

## Related Concepts
- Standard Normal Distribution
- Central Limit Theorem
- Skewness and Kurtosis
- [[concepts/probability|Probability]] [[concepts/density|Density]] Function

## References
- [How GPT Works: Token Embedding and Attention Mechanisms Explained](https://www.youtube.com/watch?v=7gkaWaDEpHg)
