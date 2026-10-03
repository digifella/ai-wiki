---
type: concept
domain: ai-agents
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
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
group: safety-guardrails-governance
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Intent Check

Intent Check is a [[concepts/prompting|prompting]] technique designed to enhance the [[concepts/software-reliability|reliability]] and accuracy of [[concepts/ai-agent|AI agent]] outputs by introducing a systematic critique [[concepts/phase|phase]]. Instead of treating the initial generation as final, this method requires the model to perform a deliberate second pass to evaluate the response against specific quality criteria. This process addresses the tendency of [[concepts/demystifying-llms|large language models]] to produce plausible but incorrect information, unsupported claims, or logical gaps that may not be immediately obvious in a single-pass interaction.

The core mechanism involves identifying errors, [[concepts/biases|biases]], or incompleteness in the original response and proposing corrected alternatives. By explicitly instructing the agent to review its own work for potential flaws, the technique encourages deeper [[concepts/reasoning|reasoning]] and self-correction. This rigorous evaluation helps mitigate issues such as [[concepts/data-hallucination|hallucination]], logical inconsistencies, and unexamined assumptions, leading to more robust and trustworthy results.

Implementing Intent Check typically involves structuring prompts to separate the generation phase from the evaluation phase. The agent first produces a [[concepts/draft|draft]], then switches roles to act as a critic, analyzing the draft for specific defects before generating a refined version. This iterative approach is particularly valuable in [[concepts/advanced-reasoning|complex reasoning]] tasks or high-stakes applications where [[concepts/accuracy|precision]] and factual [[concepts/honesty|integrity]] are critical, ensuring that the final output has been vetted for quality before being presented to the user.
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: How to get TACK SHARP photos with any camera!
