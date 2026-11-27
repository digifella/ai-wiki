---
type: entity
tags:
  - "LLM"
  - "GPT-3"
  - "Glitch-Tokens"
  - "BPE"
  - "Anomaly"
  - "large-language-model"
  - "byte-pair-encoding"
  - "openai"
  - "transformer"
  - "text-generation"
aliases:
  - "GPT 3"
  - "Generative Pre-trained Transformer 3"
summary: GPT-3 is a 175-billion parameter decoder-only transformer model developed by OpenAI that utilizes byte-pair encoding and is known for glitch token anomalies.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-21T01:46:57+00:00" }
---
# GPT-3

**[[concepts/neural-networks|GPT-3]]** ([[concepts/gpt-3|Generative Pre-trained Transformer 3]]) is a [[concepts/large-language-model|large language model]] developed by [[entities/openai]]. It utilizes a transformer-based architecture trained on a massive dataset to generate human-like text.

## Technical Characteristics
- **Architecture**: Transformer decoder-only model with 175 billion parameters.
- **Tokenization**: Uses [[concepts/byte-pair-encoding]] (BPE) for text processing.
- **Capabilities**: Text generation, translation, summarization, and code completion.

## Known Phenomena & Anomalies

### Glitch Tokens
Certain input strings can trigger [[concepts/anomalous-model-responses|anomalous model responses]], often referred to as "[[concepts/glitch-tokens|glitch tokens]]." These are seemingly innocuous inputs that cause the model to produce bizarre, nonsensical, or degraded outputs.

- **Mechanism**: Linked to specific interactions within the [[concepts/byte-pair-encoding]] tokenizer and the model's internal representation of rare or adversarial token sequences.
- **Impact**: Can lead to sudden drops in coherence or generation of garbage text.
- **Research**: Detailed analysis of these anomalies is available in [[lab-notes/2026-09-21-LLM-Glitch-Tokens-Byte-Pair-Encoding-and-Anomalous-Model|LLM Glitch Tokens: Byte Pair Encoding and Anomalous Model Responses]].

## References
- [LLM Glitch Tokens: Byte Pair Encoding and Anomalous Model Responses](https://www.youtube.com/watch?v=WO2X3oZEJOA)
