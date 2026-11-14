---
type: concept
domain: health-wellbeing
tags:
  - "mathematics"
  - "pathological-functions"
  - "real-analysis"
  - "intermediate-value-theorem"
  - "base-13"
  - "john-conway"
  - "surjectivity"
  - "discontinuity"
aliases:
  - "Conway's Base 13 Function"
summary: "Conway's Base 13 Function is a pathological function that maps every real number to every real number, serving as a counterexample to the converse of the Intermediate Value Theorem."
updated: 2026-10-13
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-12T20:57:28+00:00" }
group: body-systems-recovery-function
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

# Conway's Base 13 Function

**Conway's Base 13 Function** is a pathological function defined by [[entities/chef-john|John]] Horton Conway that maps every real number to every real number. It serves as a counterexample to the converse of the [[concepts/intermediate-value-theorem|Intermediate Value Theorem]], demonstrating that a function can take every value in an interval without being continuous.

## Mathematical Definition

The function relies on the representation of real numbers in **base 13**. The digits 10, 11, and 12 are typically represented by symbols such as A, B, and C (or similar distinct characters) to distinguish them from the numerical digits 0-9.

- **Construction**: A real number $x$ is mapped to a value $f(x)$ by interpreting the tail of its base-13 expansion as a standard base-10 decimal number.
- **Condition**: If the base-13 expansion of $x$ contains a specific pattern (e.g., a sequence starting with a sign, followed by digits, then a decimal point, and more digits), the function extracts the number represented by that sequence.
- **Result**: The function is Darboux property (has the intermediate value property) but is discontinuous everywhere.

## Key Properties

- **Surjectivity**: The function takes every real value on every interval, no matter how small.
- **Discontinuity**: It is discontinuous at every point in its domain.
- **Non-constructibility**: While defined explicitly, it is not computable in the standard sense due to the requirement of inspecting infinite expansions.

## Related Concepts

- Pathological Function
- [[concepts/intermediate-value-theorem|Intermediate Value Theorem]]
- Base-N Representation
- [[entities/chef-john|John]] Horton Conway

## References

- [[lab-notes/2026-10-13-Conways-Base-13-Function-Explaining-its-Unique-Mathemati|Conway's Base 13 Function: Explaining its Unique Mathematical Definition]]
- [Conway's Base 13 Function: Explaining its Unique Mathematical Definition](https://www.youtube.com/watch?v=zsBaApyf_Ns)
