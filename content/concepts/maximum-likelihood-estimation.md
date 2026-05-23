---
type: concept
domain: maths-cryptography
tags:
  - "statistical-inference"
  - "parameter-estimation"
  - "probability-distributions"
  - "maximum-likelihood"
  - "statistics"
  - "machine-learning"
aliases:
  - "MLE"
  - "ML estimation"
summary: Maximum Likelihood Estimation is a statistical method used to estimate the parameters of a probability distribution.
updated: 2026-05-23
group: probability-statistics-models
---
# Maximum Likelihood Estimation

Maximum Likelihood Estimation (MLE) is a statistical method for estimating the [[concepts/parameters|parameters]] of a probability [[concepts/distribution|distribution]] based on observed data. Given a set of observations and a parametric model, MLE finds the parameter values that maximize the likelihood function—the probability of observing the given data under those parameters. The method is widely used across statistics, machine [[concepts/learning|learning]], and applied [[concepts/mathematics|mathematics]] because it provides [[entities/theoretically-media|theoretically]] sound estimates with desirable asymptotic properties.

## Core Principle

The likelihood function represents how probable the observed data is for different parameter values. MLE selects the parameters that [[entities/make|make]] the observed data most probable. Mathematically, if we have observations x₁, x₂, ..., xₙ from a distribution with parameters θ, the likelihood is the joint probability L(θ) = P(x₁, x₂, ..., xₙ | θ). In practice, the log-likelihood is often maximized instead, since logarithms convert products into sums and are computationally stable and efficient for [[concepts/constrained-optimization|optimization algorithms]].

## Applications and Scale

- MLE underpins the [[concepts/training|training]] objectives of many parametric [[concepts/models|models]], including [[concepts/neural-networks|neural networks]] where parameters are optimized to maximize data likelihood.
- [[lab-notes/2026-05-18-MiniMax-M2.7-Local-CPUGPU-Deployment-via-llama.cpp-Quant|MiniMax-M2.7 Local CPU/GPU Deployment via llama.cpp Quantization]]: Illustrates the [[concepts/deployment|deployment]] of the [[entities/m27|MiniMax-M2.7]] model, which operates over a parameter space of 229 billion [[concepts/parameters|parameters]], highlighting the extreme scale of modern estimation targets in [[concepts/large-language-model-llm|large language models]].
- [[concepts/quantization-techniques|Quantization techniques]] referenced in deployment contexts approximate the high-dimensional parameter manifolds estimated during training to enable efficient [[concepts/inference|inference]] on constrained [[concepts/hardware|hardware]].
