---
type: concept
domain: health-wellbeing
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: body-systems-recovery-function
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# Eulers Totient Function

Euler's totient function, denoted as $\phi(n)$, is a fundamental arithmetic function in [[concepts/number-theory|number theory]] that counts the positive integers less than or equal to a given integer $n$ that are relatively [[concepts/prime-lens|prime]] to $n$. Two numbers are considered relatively prime if their greatest common divisor is 1, meaning they share no common factors other than 1. For instance, $\phi(9) = 6$ because the integers 1, 2, 4, 5, 7, and 8 are all coprime to 9. The function is named after the Swiss mathematician [[entities/leonhard-euler|Leonhard Euler]], who extensively studied its properties in the 18th century.

The value of the totient function can be computed efficiently using the prime factorization of $n$. If the prime factorization of $n$ is given by $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, where $p_1, p_2, \[[concepts/dots-agent|dots]], p_r$ are distinct prime factors, the function is defined by the formula $\phi(n) = n \prod_{i=1}^{r} (1 - \frac{1}{p_i})$. This multiplicative property allows for the calculation of $\phi(n)$ without enumerating all integers up to $n$, making it computationally feasible even for large numbers.

A key property of Euler's totient function is its role in Euler's theorem, which states that if $n$ and $a$ are coprime positive integers, then $a^{\phi(n)} \equiv 1 \pmod{n}$. This theorem generalizes Fermat's little theorem and is crucial in modular arithmetic. The function is also central to RSA encryption, where the [[concepts/security|security]] of the [[concepts/algorithm|algorithm]] relies on the difficulty of factoring large integers to determine $\phi(n)$ from the public key.
