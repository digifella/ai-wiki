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
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Intent Check

Intent Check is a [[concepts/prompting|prompting]] technique used to improve the quality and [[concepts/software-reliability|reliability]] of [[concepts/ai-agent|AI agent]] responses through systematic critique and revision. Rather than accepting the first generated output as final, the method involves performing a deliberate second pass to evaluate the response against multiple quality criteria. This approach acknowledges that initial AI outputs frequently contain errors, unsupported claims, logical gaps, or unexamined assumptions that become apparent upon careful review.

## Process

The technique typically involves prompting an AI system to critique its own previous response by asking it to identify potential weaknesses, inconsistencies, or missing information. The AI is then prompted to generate an improved version based on this critique. This can be implemented as a single interaction within a conversation or as part of an automated [[concepts/ai-agent|agent]] workflow. The method leverages the AI's ability to reason about and revise its own outputs when explicitly directed to do so.

## Effectiveness and Limitations

Intent Check can reduce certain categories of errors and increase response completeness, particularly when the AI has sufficient context to recognize its mistakes. However, the technique does not eliminate systematic biases or fundamental knowledge gaps, and an AI system may fail to identify errors it is inherently prone to making. The approach also increases computational cost by requiring multiple generation passes and is most practical in contexts where response latency is not critical.

## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: How to get TACK SHARP photos with any camera!
