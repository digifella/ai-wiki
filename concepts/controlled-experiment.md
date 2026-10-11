---
type: concept
domain: ai-agents
tags:
  - "controlled-experiment"
  - "hypothesis-testing"
  - "ai-evaluation"
  - "prompt-engineering"
  - "gpt-6-astra"
aliases:
  - "Controlled Test"
  - "Experimental Method"
summary: A systematic procedure for testing hypotheses by manipulating variables, applied in AI to evaluate large language models and optimize effort levels.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-13T20:43:18+00:00" }
group: applied-ai-workflows
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Controlled Experiment

A systematic procedure used to test a hypothesis by manipulating one or more independent variables while controlling for confounding variables to observe the effect on a dependent variable.

## Core Principles
- **Randomization**: Assigning subjects to groups randomly to minimize bias.
- **Control Group**: A baseline group that does not receive the experimental treatment.
- **Replication**: Repeating the [[concepts/scientific-experiment|experiment]] to verify results.
- **Blinding**: Preventing participants or researchers from knowing group assignments to reduce observer bias.

## Application in AI & LLM Evaluation
When evaluating [[concepts/large-language-models|large language models]], controlled experiments are critical for isolating the impact of specific parameters or [[entities/prompt-engineering|prompt engineering]] techniques.

- **Effort Level Optimization**: Recent analysis of [[entities/gpt-6-astra]] indicates that balancing computational effort with [[concepts/output-quality|output quality]] is non-linear.
- **Key Finding**: Testing revealed that "Low" effort settings may suffice for certain tasks, challenging the assumption that higher effort always yields proportionally better results [[lab-notes/2026-09-14-GPT-6-Astra-Effort-Levels-Optimal-Balance-of-Efficiency|GPT-6 Astra Effort Levels: Optimal Balance of Efficiency and Quality]].
- **Metric Selection**: Define clear [[concepts/success|success]] metrics (e.g., accuracy, latency, cost) before running the experiment to ensure valid comparison between control and experimental groups.

## References
- [[entities/mark-kashef|Mark Kashef]]. "I Tested Every [[concepts/gpt-6-astra|GPT-6 Astra]] Effort Level. Here’s What I’d Use." [[concepts/gpt-6-astra|GPT-6 Astra]] [[concepts/effort-levels|Effort Levels]]: Optimal Balance of Efficiency and Quality(https://www.youtube.com/watch?v=OQipTxv9Qv0). 2026-09-14.
