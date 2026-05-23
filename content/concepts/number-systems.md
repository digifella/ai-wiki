---
type: concept
domain: maths-cryptography
tags:
  - "number-systems"
  - "number-theory"
  - "mathematical-foundations"
  - "base-representation"
  - "positional-notation"
aliases:
  - "numeral systems"
  - "bases"
  - "number bases"
summary: Methods for representing and expressing numbers using different bases and notational systems.
updated: 2026-05-23
group: number-theory-prime-numbers
---
# Number Systems

A [[concepts/number-system|number system]] is a method of representing quantities using a consistent set of symbols and rules. The most fundamental distinction between number systems lies in their **base**, which determines how many unique digits are available and [[concepts/assistive-technology|at]] what point positional values reset. The decimal system (base 10) is most familiar in everyday use, employing digits 0–9. However, other bases are equally valid and often more practical in specific contexts, particularly in computing and [[concepts/cryptography|cryptography]] where binary (base 2), octal (base 8), and hexadecimal (base 16) systems predominate.

## Positional Notation

In positional number systems, the value of each [[entities/digit|digit]] depends on both the digit itself and its position within the number. For example, in the decimal number 342, the digit 3 represents 3 × 10², the digit 4 represents 4 × 10¹, and the digit 2 represents 2 × 10⁰. This principle applies universally across all bases: a digit's contribution equals the digit multiplied by the base raised to the [[concepts/power|power]] of its position. Conversion between bases uses this fundamental property, allowing seamless translation between representations of the same quantity.

## Applications in Cryptography

Number systems form a crucial foundation for [[concepts/cryptographic-algorithms|cryptographic algorithms]] and [[concepts/security|security]] protocols. Binary representation is essential for understanding how data is processed by computers at the [[concepts/hardware|hardware]] level, while hexadecimal notation provides a human-readable way to express binary sequences compactly. Modular arithmetic, which underpins many encryption schemes, operates independently of the base used to express numbers, yet different representations can affect [[concepts/computational-efficiency|computational efficiency]] and [[concepts/adoption|implementation]] clarity.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Riemann-Hypothesis-Hidden-Order-in-Prime-Number-Distribution|Riemann Hypothesis Hidden Order in Prime Number Distribution]] · [▶ source](https://www.youtube.com/watch?v=59I84mWLK_c)
- 2026-04-08: [[lab-notes/2026-04-08-Agentic-Visual-Reasoning-Enhancing-VLMs-for-Precise-Object-Counting-an|Agentic Visual Reasoning Enhancing VLMs for Precise Object Counting an]] · [▶ source](https://www.youtube.com/watch?v=VFYnD1WREdU)
- 2026-04-12: [[lab-notes/2026-04-12-Feynman-Mathematics-as-a-Tool-Not-Understanding-Mayan-Example|Feynman Mathematics as a Tool Not Understanding Mayan Example]] · [▶ source](https://www.youtube.com/watch?v=E383eEA54DE)
- 2026-04-13: [[lab-notes/2026-04-13-Zeros-1500-Year-Ban-Western-Philosophical-Resistance-and-Eastern-Accep|Zeros 1500 Year Ban Western Philosophical Resistance and Eastern Accep]] · [▶ source](https://www.youtube.com/watch?v=ndmwB8F2kxA)
- 2026-04-18: [[lab-notes/2026-04-18-Artemis-3-Readiness-HLSSLS-Challenges-and-Program-Outlook|Artemis 3 Readiness HLSSLS Challenges and Program Outlook]] · [▶ source](https://www.youtube.com/watch?v=n19xfIxu8_4)
- 2026-04-20: [[lab-notes/2026-04-20-Galaxy-Clusters-Underestimated-Baryonic-Matter-Challenges-Dark-Matter-|Galaxy Clusters Underestimated Baryonic Matter Challenges Dark Matter ]] · [▶ source](https://www.youtube.com/watch?v=ia4htnuZ6D0)
- 2026-04-30: Microsoft