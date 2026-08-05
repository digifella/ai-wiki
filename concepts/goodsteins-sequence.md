---
type: concept
domain: maths-logic-crypto
tags:
  - "goodstein-sequence"
  - "proof-theory"
  - "hereditary-base-notation"
  - "peano-arithmetic"
  - "ordinal-numbers"
aliases:
  - "Goodstein Theorem"
  - "Goodstein sequences"
summary: Goodstein's sequence is a natural number sequence defined by hereditary base notation that exhibits rapid growth but ultimately terminates at zero, a fact unprovable within Peano Arithmetic.
updated: 2026-07-11
group: number-theory-prime-numbers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Goodstein's Sequence

**Goodstein's sequence** is a sequence of natural numbers defined by [[concepts/hereditary-base-notation|Hereditary Base Notation]] that exhibits explosive growth before eventually terminating at [[concepts/concept-of-nothingness|zero]], despite appearing to diverge. This phenomenon demonstrates the independence of certain arithmetic statements from Peano Arithmetic, serving as a key example in [[concepts/proof|Proof Theory]].

## Definition and Construction
Given a starting natural number $m$:
1. Express $m$ in **hereditary base-2** notation ([[concepts/writing|writing]] exponents recursively in base 2).
2. Change the base from $k$ to $k+1$ for the next step, preserving the structure of the exponents but replacing all instances of $k$ with $k+1$.
3. Subtract 1 from the resulting number.
4. Repeat until the sequence reaches 0.

## Key Properties
- **Explosive Growth**: Initial terms grow faster than any primitive recursive function, including Ackermann Function growth rates.
- **Termination**: Despite initial growth, every Goodstein sequence eventually reaches [[concepts/zero|zero]].
- **Independence Result**: Goodstein's Theorem states that the termination of these sequences cannot be proven within standard Peano Arithmetic, requiring stronger systems like Second-Order Arithmetic or Set [[concepts/theory|Theory]] (specifically involving Ordinal Numbers).

## Related Concepts
- [[concepts/hereditary-base-notation|Hereditary Base Notation]]: The representation method crucial for defining the sequence.
- Gödel's Incompleteness Theorems: Goodstein's Theorem is a concrete instance of incompleteness in arithmetic.
- Ordinal Numbers: Used to prove termination via mapping sequences to decreasing ordinals below $\epsilon_0$.

## Source Integration
[[lab-notes/2026-06-19-Goodsteins-Theorem-Resolving-the-Paradox-of-Explosive-Gr|Goodstein's Theorem: Resolving the Paradox of Explosive Growth to Zero]]

## References
- [Goodstein's Theorem: Resolving the Paradox of Explosive Growth to Zero](https://www.youtube.com/watch?v=XUDkQA7cVWI) ([[entities/up-and-atom|Up and Atom]], 2026)
