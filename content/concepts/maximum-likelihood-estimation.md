---
type: concept
domain: maths-cryptography
group: probability-statistics-models
tags:
  - "statistical-inference"
  - "parameter-estimation"
  - "probability-distributions"
  - "maximum-likelihood"
  - "statistics"
aliases:
  - "MLE"
  - "ML estimation"
summary: Maximum Likelihood Estimation is a statistical method used to estimate the parameters of a probability distribution.
updated: 2026-05-01
---
# Maximum Likelihood Estimation

Maximum Likelihood Estimation (MLE) is a statistical method for estimating the [[concepts/parameters|parameters]] of a probability [[concepts/distribution|distribution]] based on observed data. Given a set of observations and a parametric model, MLE finds the parameter values that maximize the likelihood function—the probability of observing the given data under those parameters. The method is widely used across statistics, machine [[concepts/learning|learning]], and applied [[concepts/mathematics|mathematics]] because it provides theoretically sound estimates with desirable asymptotic properties.

## Core Principle

The likelihood function represents how probable the observed data is for different parameter values. MLE selects the parameters that make the observed data most probable. Mathematically, if we have observations x₁, x₂, ..., xₙ from a distribution with parameters θ, the likelihood is the joint probability L(θ) = P(x₁, x₂, ..., xₙ | θ). In practice, the log-likelihood is often maximized instead, since logarithms convert products into sums and are computationally simpler while preserving the location of the maximum.

## Application in Cryptography and Security

In cryptographic contexts, MLE can be applied to parameter estimation in security analyses and statistical attacks on cryptographic systems. For instance, when analyzing side-channel attacks or statistical properties of encrypted data, MLE helps estimate the underlying parameters of a probabilistic model. It is also relevant in analyzing the robustness of cryptographic schemes against known attacks and in designing statistical tests for randomness and cryptographic properties.
