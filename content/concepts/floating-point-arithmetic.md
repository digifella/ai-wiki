---
type: concept
domain: maths-cryptography
group: mathematical-reasoning-proof
tags:
  - "floating-point"
  - "numeric-precision"
  - "computer-arithmetic"
  - "ieee-754"
  - "rounding-errors"
  - "mathematical-computation"
aliases:
  - "FP arithmetic"
  - "float arithmetic"
summary: Floating point arithmetic is a computational method for representing and performing operations on real numbers using a fixed number of significant digits and an exponent.
updated: 2026-05-01
---
# Floating Point Arithmetic

Floating point arithmetic is a method for representing real numbers in computer systems using a finite number of bits. A floating point number consists of three components: a sign bit, a mantissa (or significand) that holds the [[concepts/significant-figures|significant digits]], and an exponent that indicates the position of the decimal point. This representation allows computers to handle numbers across an enormous range, from very small to very large values, while using a fixed amount of [[concepts/memory|memory]].

## Representation and Standards

The most widely used standard for floating point representation is IEEE 754, which defines formats for single-precision (32-bit) and double-precision (64-bit) numbers, among others. In these formats, the mantissa typically stores around 6-7 significant digits for single-precision and 15-17 digits for double-precision. The exponent allows the decimal point to "float" to different positions, enabling representation of both 0.0000001 and 1000000 with similar precision.

## Practical Implications

Because floating point arithmetic uses a limited number of significant digits, all operations introduce some degree of [[concepts/rounding|rounding]] error. These errors can accumulate through sequences of calculations, potentially affecting the [[concepts/accuracy|accuracy]] of results. This limitation is particularly significant in [[concepts/cryptography|cryptography]] and high-precision mathematical computations, where exact arithmetic may be required. In such [[concepts/software|applications]], alternative approaches like arbitrary-precision arithmetic or fixed-point representations may be preferred to avoid precision loss.
