---
type: concept
domain: maths-logic-crypto
group: number-theory-prime-numbers
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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Floating Point Numbers

Floating point numbers are a computational method for representing real numbers in digital systems using a fixed number of bits. They consist of three main components: a sign bit, an exponent, and a mantissa (or significand). This representation allows computers to handle both very large and very small numbers within a limited memory footprint, though always with finite precision. The most common standard is IEEE 754, which defines formats like 32-bit single precision (float32) and 64-bit double precision (float64).

## Precision and Trade-offs

The primary advantage of floating point representation is its dynamic range, enabling the processing of values spanning many orders of magnitude. However, this comes with inherent trade-offs regarding precision and computational cost. Higher precision formats provide greater accuracy but require more memory bandwidth and processing power. In the context of large language models, this has led to the exploration of reduced precision formats, such as 4-bit floating-point (FP4), to optimize training efficiency and reduce resource consumption while maintaining acceptable model performance.
