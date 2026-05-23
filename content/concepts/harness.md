---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "llm"
  - "orchestration"
  - "engineering"
  - "harness"
  - "prompt-engineering"
updated: 2026-05-23
group: ai-foundations-concepts
---
# Harness

A Harness denotes the orchestration framework or engineering layer that wraps a [[concepts/large-language-model]] (LLM) to [[concepts/power|control]] execution [[concepts/flow|flow]], manage context, and integrate [[concepts/external-tools|external tools]]. Performance differentiation is now dominated by harness [[concepts/design|design]] rather than base model selection.

## Core Insights

- **Orchestration Priority**: [[entities/stanford-university|Stanford]] research indicates that LLM performance variance is primarily determined by orchestration [[concepts/code|code]] quality, superseding [[concepts/architectural-improvements|architectural improvements]]. [[lab-notes/2026-05-05-Orchestration-Over-Architecture-Harness-Engineering-for|Orchestration Over Architecture: Harness Engineering for Optimal LLM Performance]]
- **Engineering Shift**: Development focus moves from weight [[concepts/training|training]] to structural control, implementing robust [[entities/prompt-engineering]], retrieval augmentation, and decision trees.
- **Optimization Vector**: Harnesses enable fine-grained control over latency, [[concepts/cost|cost]], and [[concepts/software-reliability|reliability]], decoupling application logic from model non-determinism.
