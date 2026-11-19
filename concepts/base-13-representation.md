---
type: concept
domain: maths-logic-crypto
tags:
  - "base-13"
  - "tridecimal"
  - "positional-notation"
  - "conways-function"
  - "pathological-functions"
aliases:
  - "tridecimal representation"
  - "radix-13"
summary: "Base-13 representation is a positional numeral system using thirteen symbols that is mathematically significant for defining Conway's base 13 function."
updated: 2026-10-13
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-12T21:06:30+00:00" }
group: number-theory-prime-numbers
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Base-13 Representation

**Base-13 representation** (also known as tridecimal or trinary-ternary hybrid in specific contexts) is a positional numeral system with radix 13. It utilizes thirteen distinct symbols (typically 0–9 and A–C) to represent values.

While rarely used in practical [[concepts/computation|computing]], base-13 is mathematically significant due to its role in specific pathological function constructions, most notably [[concepts/conways-base-13-function]].

## Key Properties
- **Radix:** 13
- **Symbols:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C
- **[[entities/digit|Digit]] Values:** A=10, B=11, C=12
- **Positional Value:** Each position represents a power of 13 ($13^n$).

## Mathematical Significance

### Conway's Base 13 Function
The most prominent application of base-13 representation is in the definition of [[concepts/conways-base-13-function]], a function $f: \mathbb{R} \to \mathbb{R}$ with extreme discontinuity properties.

- **Definition Mechanism:** The function interprets the base-13 expansion of a real number $x$.
- **[[concepts/pattern-matching|Pattern Matching]]:** It scans the expansion for specific patterns (e.g., digits representing signs and decimal points) to determine the output.
- **Intermediate Value Property:** Despite being discontinuous everywhere, the function satisfies the intermediate value property on every interval.
- **Surjectivity:** The function maps every open interval onto the entire real line $\mathbb{R}$.

### Related Concepts
- [[concepts/real-analysis]]: Study of functions defined on real numbers.
- Pathological Function: Functions that exhibit counter-intuitive behavior.
- [[concepts/number-systems|Numeral Systems]]: General [[concepts/theory|theory]] of [[concepts/number-system|positional notation]].

## References

- Conway's Base 13 Function: Explaining its Unique Mathematical Definition: [Conway's Base 13 Function: Explaining its Unique Mathematical Definition](https://www.youtube.com/watch?v=zsBaApyf_Ns)
- [[lab-notes/2026-10-13-Conways-Base-13-Function-Explaining-its-Unique-Mathemati|Conway's Base 13 Function: Explaining its Unique Mathematical Definition]]
