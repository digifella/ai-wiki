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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# Eulers Totient Function

Euler's totient function, denoted as $\phi(n)$, is a fundamental arithmetic function in number theory that counts the positive integers less than or equal to a given integer $n$ that are relatively prime to $n$. Two numbers are considered relatively prime if their greatest common divisor is 1, meaning they share no common factors other than 1. For instance, $\phi(9) = 6$ because the integers 1, 2, 4, 5, 7, and 8 are all coprime to 9. The function is named after the Swiss mathematician Leonhard Euler.

## Properties and Calculation

The function is multiplicative, meaning that if two numbers $m$ and $n$ are relatively prime, then $\phi(mn) = \phi(m)\phi(n)$. This property allows for efficient calculation based on the prime factorization of $n$. If the prime factorization of $n$ is given by $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then the value of the totient function is calculated using the formula $\phi(n) = n \prod_{i=1}^{r} (1 - \frac{1}{p_i})$. For a prime number $p$, $\phi(p) = p - 1$, as all positive integers less than $p$ are relatively prime to it.

## Applications

Euler's totient function plays a crucial role in modular arithmetic and cryptography. It is central to Euler's theorem, which states that if $n$ and $a$ are coprime positive integers, then $a^{\phi(n)} \equiv 1 \pmod{n}$. This theorem generalizes Fermat's little theorem and is foundational to the RSA encryption algorithm, where the security of the system relies on the difficulty of factoring large integers to determine $\phi(n)$. The function also appears in various combinatorial problems and the study of cyclic groups.
