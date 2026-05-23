---
type: concept
domain: undecided
tags:
  - "logic-puzzle"
  - "constraint-satisfaction"
  - "reasoning-benchmark"
  - "combinatorial-problem"
aliases:
  - "Su Doku"
  - "number placement puzzle"
summary: A logic-based constraint satisfaction problem on a 9×9 grid where each row, column, and 3×3 subgrid must contain digits 1–9 exactly once.
updated: 2026-05-23
group: needs-review
---
# Sudoku

Logic-based [[concepts/logical-consistency|Constraint Satisfaction]] Problem defined on a 9×9 grid divided into nine 3×3 subgrids.

## Constraints
- Each row, column, and subgrid must contain digits 1–9 exactly once.
- Initial partial assignment must yield a unique [[concepts/solution|solution]] via logical deduction.

## AI Reasoning Context
- Serves as benchmark for Exact [[concepts/reasoning|Reasoning]] and constraint propagation versus probabilistic generation.
- [[concepts/highlights|Highlights]] [[concepts/large-language-model]] limitations in systematic constraint satisfaction due to [[concepts/data-hallucination|hallucination]] risks.
- [[concepts/energy-based-models]] provide a framework for genuine reasoning via constraint satisfaction, ensuring adherence to hard constraints without approximation errors.
- [[lab-notes/2026-05-17-Energy-Based-Models-Genuine-AI-Reasoning-via-Constraint|Energy-Based Models: Genuine AI Reasoning via Constraint Satisfaction, Beyond LLMs]] discusses EBMs as an alternative to LLMs for robust constraint-based reasoning.
