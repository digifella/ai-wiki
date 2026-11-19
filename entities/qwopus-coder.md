---
type: entity
tags:
  - "coding-agent"
  - "code-generation"
  - "mixture-of-experts"
  - "self-correction"
  - "multi-token-prediction"
  - "qwopus"
  - "jackrong"
  - "token-efficiency"
aliases:
  - "Qwopus 3.6-35B-A3B-Coder"
  - "Qwopus Coder Model"
  - "Qwopus Coding Agent"
summary: Qwopus Coder is a specialized coding agent model based on the Qwopus 3.6-35B-A3B base that utilizes a mixture-of-experts architecture and multi-token prediction for efficient code generation and autonomous self-correctio
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Qwopus Coder

**Qwopus Coder** refers to a specialized class of [[concepts/smart-coding-agent|coding agent]] models, notably the **[[entities/qwopus-36-35b-a3b-coder|Qwopus 3.6-35B-A3B-Coder]]**, designed for high-efficiency [[concepts/code-generation|code generation]] and self-correction.

## Key Characteristics
- **Architecture**: Built on the [[entities/qwen-36-35b-a3b]] base, utilizing a [[entities/mixture-of-experts]] (MoE) structure.
- **Performance**: Capable of generating code at approximately 160 tokens/second.
- **Capabilities**: Features "thinking-off" mode and [[concepts/agentic-code-self-correction|agentic code self-correction]], allowing the model to identify and fix its own bugs autonomously.
- **Efficiency**: Optimized for [[concepts/token-optimization|token efficiency]] through [[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]] [[concepts/causes|mechanisms]].

## Development & Sources
- **[[concepts/developer|Developer]]**: Jackrong.
- **Analysis**: Detailed in [[lab-notes/2026-07-02-Qwopus-Coder-Agentic-Code-Self-Correction-and-MTP-Driven|Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency]].
- **Reference**: [Qwopus Coder: Agentic Code Self-Correction and MTP-Driven Efficiency](https://www.youtube.com/watch?v=fjMIAZAHYZ0) ([[entities/fahd-mirza|Fahd Mirza]], 2026-07-02).
