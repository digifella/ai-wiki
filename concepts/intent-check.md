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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Intent Check

Intent Check is a prompting technique designed to enhance the reliability and accuracy of AI agent outputs by introducing a systematic critique phase. Instead of treating the initial generation as final, this method requires the model to perform a deliberate second pass to evaluate the response against specific quality criteria. This process addresses the tendency of large language models to produce plausible but incorrect information, unsupported claims, or logical inconsistencies that may go unnoticed in a single-pass generation.

The technique operates by instructing the model to analyze its previous output for errors, biases, or incompleteness before finalizing the result. By explicitly identifying flaws and proposing better alternatives, the agent can correct its own reasoning process. This self-correction mechanism reduces hallucination rates and improves the overall robustness of the agent's decision-making capabilities.

Implementing Intent Check typically involves structuring the prompt to separate the generation phase from the evaluation phase. The model is asked to first produce a draft, then critically assess that draft against predefined standards, and finally generate a refined version. This iterative approach ensures that the final output has undergone rigorous scrutiny, leading to more accurate and trustworthy results in complex reasoning tasks.

## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: How to get TACK SHARP photos with any camera!
