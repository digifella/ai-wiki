---
type: concept
domain: health-wellbeing
group: body-systems-recovery-function
tags:
  - "eulers-totient-function"
  - "number-theory"
  - "mathematics"
  - "multiplicative-function"
  - "totient"
aliases:
  - "Euler's phi function"
  - "phi function"
summary: Euler's totient function counts the positive integers up to a given integer that are relatively prime to it.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# Eulers Totient Function

Euler's totient function, denoted φ(n), counts the positive integers up to a given integer n that are relatively prime to it—that is, numbers that share no common factors with n other than 1. For example, φ(9) = 6, because the numbers 1, 2, 4, 5, 7, and 8 are all relatively prime to 9. The function is named after the Swiss mathematician Leonhard Euler, who studied it extensively in the 18th century and established many of its fundamental properties.

## Calculation

The totient function can be calculated using the formula φ(n) = n ∏(1 − 1/p), where the product is taken over all distinct prime factors of n. For instance, since 9 = 3², the calculation is φ(9) = 9(1 − 1/3) = 6. This multiplicative property makes the function efficient to compute even for large numbers, provided the prime factorization is known.

## Applications

Euler's totient function has significant applications in number theory and cryptography. It appears in Euler's theorem, which states that if a and n are coprime, then a^φ(n) ≡ 1 (mod n). This principle underpins the RSA encryption algorithm, one of the most widely used public-key cryptographic systems. The function is also fundamental to understanding the structure of modular arithmetic and the behavior of multiplicative groups in abstract algebra.
