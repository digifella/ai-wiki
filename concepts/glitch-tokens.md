---
type: concept
domain: ai-agents
tags:
  - "LLM"
  - "glitch-tokens"
  - "BPE"
  - "anomalous-responses"
  - "Computerphile"
  - "tokenization"
  - "model-robustness"
  - "ai-safety"
aliases:
  - "Glitch Tokens"
  - "LLM Glitch Tokens"
summary: Glitch tokens are specific input strings that cause large language models to produce degraded or nonsensical outputs, often due to byte-pair encoding artifacts.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-21T01:45:26+00:00" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Glitch Tokens

**Glitch [[concepts/tokens|tokens]]** refer to specific, seemingly innocuous input strings that cause [[concepts/large-language-models|Large Language Models]] (LLMs) to produce bizarre, nonsensical, or degraded outputs. This phenomenon highlights anomalies in how models process certain token sequences, often linked to [[concepts/byte-pair-encoding|Byte Pair Encoding]] artifacts or [[concepts/training-data|training data]] irregularities.

## Key Characteristics
- **Trigger Sensitivity**: Specific character combinations or rare token sequences act as triggers.
- **Output Degradation**: Responses become incoherent, repetitive, or semantically void.
- **BPE [[concepts/connection|Connection]]**: Often associated with how Byte Pair [[concepts/encoding|Encoding]] handles rare or unseen byte sequences, leading to unexpected [[concepts/model-behavior|model behavior]].

## Related Resources
- [[lab-notes/2026-09-21-LLM-Glitch-Tokens-Byte-Pair-Encoding-and-Anomalous-Model|LLM Glitch Tokens: Byte Pair Encoding and Anomalous Model Responses]]
- Tokenization
- [[concepts/model-safety|Model Robustness]]

## References
- [LLM Glitch Tokens: Byte Pair Encoding and Anomalous Model Responses](https://www.youtube.com/watch?v=WO2X3oZEJOA) (Computerphile, 2026-09-21)
