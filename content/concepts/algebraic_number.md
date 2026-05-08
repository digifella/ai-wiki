---
type: concept
domain: maths-cryptography
group: number-theory-prime-numbers
tags:
  - "algebraic-numbers"
  - "number-theory"
  - "polynomial-roots"
  - "field-extension"
  - "algebraic-integers"
aliases:
  - "algebraic number element"
  - "root of polynomial"
summary: This page is a stub awaiting enrichment.
updated: 2026-05-01
stub: true
title: algebraic_number
---
# Algebraic Number

An algebraic number is a complex number that is a root of a non-zero polynomial with rational coefficients. Equivalently, a number α is algebraic if there exists a polynomial equation of the form a₀ + a₁α + a₂α² + ... + aₙαⁿ = 0, where the coefficients a₀, a₁, ..., aₙ are rational numbers and at least one coefficient is non-zero. This definition encompasses a vast class of numbers including all rational numbers (which satisfy linear equations) and all roots of polynomials with rational coefficients, such as √2, ∛5, and the golden ratio.

## Properties and Examples

The set of algebraic numbers is closed under addition, subtraction, multiplication, and division (excluding division by zero), meaning that arithmetic operations on algebraic numbers always produce algebraic numbers. Any root of a polynomial with integer coefficients is also algebraic, since such polynomials can be scaled to have rational coefficients. Notably, most familiar numbers encountered in [[concepts/simple-math-systems|elementary mathematics]] are algebraic, including all integers, all rationals, and most commonly encountered [[concepts/irrational_number|irrational numbers]].

## Algebraic Numbers in Cryptography and Number Theory

The study of algebraic numbers is central to algebraic number [[concepts/theory|theory]], which investigates the properties of these numbers and the algebraic structures they form, such as algebraic integer rings and number fields. In cryptography, algebraic numbers and their properties are relevant to certain cryptographic systems, particularly those based on lattice problems and algebraic structures. Understanding the arithmetic properties of algebraic numbers also connects to problems in [[concepts/complexity-classes|computational complexity]] and hardness assumptions underlying modern cryptographic protocols.
