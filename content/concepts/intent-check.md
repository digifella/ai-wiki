---
type: concept
domain: ai-agents
group: safety-guardrails-governance
tags:
  - "prompting"
  - "critique"
  - "quality-assurance"
  - "ai-safety"
  - "error-detection"
aliases:
  - "Critical Analysis & Improvement Assistant"
  - "CAIA"
  - "rigorous critique"
summary: A method for improving prompting by performing a rigorous critique of the last response to identify errors, biases, or incompleteness and proposing better alternatives.
updated: 2026-05-01
---
# Intent Check

Intent Check is a [[concepts/prompting|prompting]] technique that improves [[concepts/ai-agent|AI agent]] [[concepts/responses|responses]] by systematically reviewing and critiquing the output before accepting it as final. The method involves performing a rigorous analysis of the last response to identify errors, unsupported claims, unclear [[concepts/explanations|explanations]], gaps in completeness, biases, or practical limitations. Rather than treating initial responses as complete, Intent Check treats them as working drafts subject to critical evaluation.

## Process

The technique operates by examining a generated response across multiple dimensions. A reviewer—whether human or automated—looks for factual inaccuracies, logical weaknesses, ambiguities, missing context, and potential biases that might affect utility or [[concepts/software-reliability|reliability]]. Once problems are identified through this critique, the agent or human then proposes revisions and improvements to address the [[concepts/challenges-discussed|identified issues]]. This [[concepts/iterative-refinement|iterative refinement]] cycle can be repeated until the response meets quality [[concepts/open-standards|standards]].

## Applications

Intent Check is particularly useful in [[concepts/scenarios|scenarios]] where [[concepts/accuracy|accuracy]] and completeness matter significantly, such as [[concepts/technical-documentation|technical documentation]], research summaries, decision support, or [[concepts/problem-solving|problem-solving]] tasks. By formalizing the critique step rather than relying on implicit quality checks, the method makes [[concepts/rigorous-critique|response evaluation]] explicit and reproducible. This approach aligns with broader [[concepts/quality-assurance|quality assurance]] practices in [[concepts/knowledge-work|knowledge work]], where review cycles are standard practice.

## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: How to get TACK SHARP photos with any camera!