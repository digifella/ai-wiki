---
type: concept
domain: maths-cryptography
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
updated: 2026-05-23
group: number-theory-prime-numbers
title: algebraic_number
---
# Algebraic Number

An algebraic number is a complex number that is a root of a non-[[concepts/concept-of-nothingness|zero]] polynomial with rational coefficients. Formally, a number α is algebraic if there exists a polynomial equation of the form a₀ + a₁α + a₂α² + ... + aₙαⁿ = 0, where the coefficients a₀, a₁, ..., aₙ are rational numbers and [[concepts/assistive-technology|at]] least one coefficient is non-zero. This definition encompasses all rational numbers themselves (which satisfy linear equations like α - r = 0) as well as [[concepts/irrational_number|irrational numbers]] such as √2, ∛5, and the golden ratio φ = (1 + √5)/2.

## Properties and Structure

The set of algebraic numbers forms a field, meaning that the sum, difference, product, and quotient (when non-zero) of any two algebraic numbers is also algebraic. This algebraic closure makes the set particularly important in abstract algebra. Every algebraic number has a minimal polynomial—the monic polynomial of lowest degree with rational coefficients that has the number as a root. The degree of this minimal polynomial determines the degree of the algebraic number.

## Relationship to Transcendental Numbers

Not all complex numbers are algebraic. Those that are not roots of any polynomial with rational coefficients are called [[concepts/transcendental-numbers|transcendental numbers]]. Famous examples include π and e. The existence of transcendental numbers means that the algebraic numbers, despite being infinite in count, do not exhaust all complex numbers. This distinction is fundamental in [[concepts/number-theory|number theory]] and has important implications for [[concepts/cryptography|cryptography]] and computational [[concepts/mathematics|mathematics]], where distinguishing between algebraic and transcendental quantities affects algorithm [[concepts/design|design]] and [[concepts/security|security]] proofs.
