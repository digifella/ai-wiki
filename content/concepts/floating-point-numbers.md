---
type: concept
domain: maths-cryptography
tags:
  - "floating-point"
  - "fp4"
  - "quantization"
  - "reduced-precision"
  - "llm-training"
  - "numerical-computation"
aliases:
  - "FP4"
  - "4-bit floating-point"
summary: The text discusses the evolution and challenges of training large language models using reduced precision formats such as 4-bit floating-point (FP4).
updated: 2026-05-23
group: number-theory-prime-numbers
---
# Floating Point Numbers

Floating point numbers are a computational method for representing real numbers in digital systems using a fixed number of [[concepts/classical-bits|bits]]. They consist of three main components: a sign bit, an exponent, and a mantissa (or significand). This representation allows computers to handle both very large and very small numbers within a limited [[concepts/memory|memory]] footprint, though always with finite precision. The most common standard is IEEE 754, which defines formats like 32-bit single precision (FP32) and 64-bit double precision (FP64).

## Reduced Precision in Machine Learning

In [[concepts/machine-learning|machine learning]], particularly for [[concepts/training|training]] [[concepts/large-language-model-llm|large language models]], researchers have increasingly explored [[concepts/reduced-precision|reduced-precision]] floating point formats to decrease computational [[concepts/cost|cost]] and memory requirements. The standard FP32 format, while providing good numerical stability, demands significant resources [[concepts/assistive-technology|at]] scale. Lower precision formats like 16-bit (FP16) and experimental 4-bit (FP4) representations offer potential [[concepts/computational-efficiency|computational efficiency]] gains, though they introduce challenges in maintaining training stability and model [[concepts/accuracy|accuracy]] due to reduced numerical [[concepts/range|range]] and precision.

## Trade-offs and Challenges

The shift toward 4-bit floating point training represents a frontier in optimization, where the reduced precision must be carefully managed to avoid numerical instability, gradient underflow, and loss of important training information. Different layers and operations within [[concepts/neural-networks|neural networks]] may require different precision levels, making mixed-[[concepts/precision-training|precision training]] strategies necessary. The evolution toward lower precision formats reflects the practical constraints of [[concepts/computational-scaling|scaling]] [[concepts/large-language-models|large language models]] while balancing computational feasibility with acceptable model performance.
