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
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Floating Point Numbers

Floating point numbers are a computational method for representing real numbers in digital systems using a fixed number of bits. They consist of three main components: a sign bit, an exponent, and a mantissa (or significand). This representation allows computers to handle both very large and very small numbers within a limited memory footprint, though always with finite precision. The most common standard is IEEE 754, which defines formats like 32-bit single precision (float32) and 64-bit double precision (float64).

## Common formats and trade-offs

The choice of floating point format involves trade-offs between range, precision, and computational efficiency. Standard formats like float32 and float64 provide sufficient accuracy for most scientific and engineering applications. Reduced precision formats such as float16 (half precision) and float8 have emerged for specialized use cases, particularly in machine learning where the computational savings often outweigh modest accuracy losses. Lower precision formats consume less memory and enable faster operations on compatible hardware, making them valuable for training and deploying large models.

## Precision and representation errors

All floating point representations introduce rounding errors because they cannot exactly represent most real numbers within their fixed bit allocation. These errors accumulate through chains of arithmetic operations, particularly in iterative algorithms. The precision of a floating point format is determined by the number of bits in the mantissa; for example, float32 provides roughly seven decimal digits of precision, while float64 provides approximately fifteen. Understanding these limitations is essential when selecting an appropriate format for numerical computations.
