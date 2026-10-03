---
type: concept
domain: maths-logic-crypto
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Floating Point Numbers

Floating point numbers are a computational method for representing real numbers in digital systems using a fixed number of bits. They consist of three main components: a sign bit, an exponent, and a mantissa (or significand). This representation allows computers to handle both very large and very small numbers within a limited [[concepts/4gb-memory|memory footprint]], though always with finite [[concepts/accuracy|precision]]. The most common standard is IEEE 754, which defines formats like 32-bit single precision (float32) and 64-bit double precision (float64).

## Common formats and trade-offs

The choice of floating-point format involves a trade-off between [[concepts/dynamic-range|dynamic range]], precision, and [[concepts/algorithm-efficiency|computational efficiency]]. Higher precision formats like float64 offer greater accuracy but require more [[concepts/storage-bandwidth|memory bandwidth]] and [[concepts/compute-capacity|processing power]]. Conversely, lower precision formats such as float16 or bfloat16 are widely used in [[concepts/machine-learning|machine learning]] to accelerate training and [[concepts/ai-inference|inference]] while maintaining acceptable accuracy for [[concepts/base-model-weights|neural network weights]] and activations.

## Reduced precision in large language models

Recent developments in [[concepts/ai-technologies|artificial intelligence]] have explored even lower precision formats, such as 4-bit floating-point (FP4), to train [[concepts/demystifying-llms|large language models]] more efficiently. This approach aims to reduce memory consumption and increase throughput by compressing [[concepts/active-parameters|model parameters]]. However, training with such [[concepts/reduced-precision|reduced precision]] presents significant challenges, including numerical instability and loss of critical information, requiring specialized [[concepts/algorithms|algorithms]] to maintain [[concepts/model-performance|model performance]].
