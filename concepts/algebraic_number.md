---
type: concept
domain: maths-logic-crypto
tags:
  - "algebraic-numbers"
  - "number-theory"
  - "polynomial-roots"
  - "field-extension"
  - "algebraic-integers"
  - "complex-numbers"
  - "lattice-cryptography"
aliases:
  - "algebraic number element"
  - "root of polynomial"
  - "algebraic complex number"
summary: An algebraic number is a complex number that is a root of a non-zero polynomial with rational coefficients.
updated: 2026-07-11
group: number-theory-prime-numbers
title: algebraic_number
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

# Algebraic Number

An algebraic number is a complex number that is a root of a non-[[concepts/concept-of-nothingness|zero]] polynomial with rational coefficients. Formally, a number α is algebraic if there exists a polynomial equation of the form a₀ + a₁α + a₂α² + ... + aₙαⁿ = 0, where the coefficients a₀, a₁, ..., aₙ are rational numbers and at least one coefficient is non-[[concepts/zero|zero]]. This definition encompasses all rational numbers, which satisfy linear equations like α − r = 0, as well as certain [[concepts/irrational_number|irrational numbers]] such as √2 (which satisfies α² − 2 = 0) and the cube root of 5.

## Key Properties

Algebraic numbers form a countable set, meaning they can be enumerated despite their infinite quantity. This is a striking result given that the complex numbers themselves are uncountable. The degree of an algebraic number is defined as the degree of its minimal polynomial—the monic polynomial of smallest degree with rational coefficients that has the number as a root. For example, √2 has degree 2, while rational numbers have degree 1.

The algebraic numbers form a field, which means they are closed under addition, subtraction, multiplication, and division (excluding division by zero). This field is also algebraically closed when viewed as a subfield of the complex numbers, though the set of algebraic numbers itself is not algebraically closed in the classical sense.

## Contrast with Transcendental Numbers

Numbers that are not algebraic are called [[concepts/transcendental-numbers|transcendental numbers]]. Famous examples include π and e, which cannot be expressed as roots of any polynomial with rational coefficients. The existence of transcendental numbers demonstrates that algebraic numbers, while dense in the real numbers, form a proper subset of the complex numbers.
