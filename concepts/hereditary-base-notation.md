---
type: concept
domain: maths-logic-crypto
tags:
  - "number-representation"
  - "goodstein-sequences"
  - "mathematical-logic"
  - "recursive-expansion"
  - "ordinal-numbers"
aliases:
  - "Hereditary base-$b$ notation"
  - "Fully expanded base notation"
summary: Hereditary base notation is a recursive method of expressing natural numbers where all exponents are also written in the same base, primarily used in Goodstein's Theorem to demonstrate sequence termination.
updated: 2026-07-11
group: number-theory-prime-numbers
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Hereditary Base Notation

**Hereditary base notation** is a method of expressing natural numbers in a specific base $b$ such that all exponents are also expressed in base $b$, recursively, until only the digits $0$ to $b-1$ remain. This representation is fundamental to **Goodstein's Theorem**, demonstrating sequences that grow explosively yet inevitably terminate at [[concepts/concept-of-nothingness|zero]].

## Definition and Construction

For a natural number $n$ and base $b \ge 2$, the hereditary base-$b$ representation is constructed as follows:

1.  Write $n$ in standard base-$b$ expansion: $n = d_k b^{e_k} + \dots + d_1 b^{e_1} + d_0$.
2.  Replace each exponent $e_i$ with its own hereditary base-$b$ representation.
3.  Repeat step 2 recursively until all exponents are reduced to [[concepts/number-systems|bases]] less than $b$ (i.e., single digits).

### Example
Consider $n = 42$ in base $3$:
1.  Standard base-3: $42 = 1 \cdot 3^3 + 1 \cdot 3^2 + 1 \cdot 3^1 + 1 \cdot 3^0 = 1211_3$.
2.  Exponents are $3, 2, 1, 0$. Express these in base-3:
    *   $3 = 10_3 = 1 \cdot 3^1 + 0$
    *   $2 = 2$
    *   $1 = 1$
    *   $0 = 0$
3.  Substitute back: $42 = 1 \cdot 3^{(1 \cdot 3^1)} + 1 \cdot 3^2 + 1 \cdot 3^1 + 1$.

This notation reveals the structural "height" of a number relative to its base, which is critical for mapping integers to Ordinal Numbers.

## Applications and Properties

### Connection to Goodstein Sequences
Hereditary base notation defines the [[concepts/iterative-refinement|iterative process]] of a **Goodstein Sequence**. Given an initial integer $m_0$:
1.  Write $m_n$ in hereditary base $(n+2)$ notation.
2.  Change the base from $(n+2)$ to $(n+3)$ (changing all instances of the base [[entities/digit|digit]]).
3.  Subtract 1 from the result to get $m_{n+1}$.

Despite the sequence growing astronomically fast, **Goodstein's Theorem** proves that for any starting integer, the sequence eventually reaches [[concepts/zero|zero]]. This is a statement true in arithmetic but unprovable within Peano Arithmetic, requiring stronger axioms involving Ordinal Numbers.

### Ordinal Isomorphism
There is an order-preserving mapping from hereditary base-$b$ representations of natural numbers to ordinal numbers less than $\epsilon_0$. This mapping allows the termination of [[concepts/goodsteins-sequence|Goodstein sequences]] to be proven by showing that the corresponding ordinal sequence strictly decreases, and since there are no infinite descending chains of ordinals, the integer sequence must terminate.

## References

*   [Goodstein's Theorem: Resolving the Paradox of Explosive Growth to Zero](https://www.youtube.com/watch?v=XUDkQA7cVWI) — *[[entities/up-and-atom|Up and Atom]]*
*   [[lab-notes/2026-06-19-Goodsteins-Theorem-Resolving-the-Paradox-of-Explosive-Gr|Goodstein's Theorem: Resolving the Paradox of Explosive Growth to Zero]]
