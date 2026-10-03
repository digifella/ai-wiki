---
type: concept
domain: ai-agents
tags:
  - "temperature"
  - "llm"
  - "hyperparameter"
  - "quantization"
  - "bonsai"
  - "softmax"
  - "greedy-decoding"
  - "model-efficiency"
aliases:
  - "LLM Temperature"
  - "Sampling Temperature"
  - "Temperature Scaling"
summary: The temperature parameter scales logits to control output randomness, with its impact on stability varying significantly across different quantization levels.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-25T20:32:35+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Temperature Parameter

The **Temperature Parameter** controls the randomness of predictions by a [[concepts/large-language-model]] (LLM). It scales the logits before the softmax function, influencing the probability distribution of the next token.

## Key Mechanics
- **Low Temperature (< 1.0):** Makes the model more deterministic and confident. Reduces creativity and increases the likelihood of repeating common patterns.
- **High Temperature (> 1.0):** Increases randomness and creativity. Can lead to more diverse outputs but may result in incoherent or nonsensical text.
- **Temperature = 0:** Deterministic sampling (greedy decoding). The model always picks the most likely next token.

## Impact on Quantized Models
Quantization affects how temperature influences output stability. Lower-bit quantizations may exhibit higher sensitivity to temperature changes due to reduced precision in weight representations.

### Recent Benchmarks: Bonsai-2-27B
Recent evaluations of the Ternary-Bonsai-2-27B-[[concepts/gguf|gguf]] model highlight the interaction between quantization levels and temperature settings:
- [[lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform|Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning]]
- Re-evaluation of Q1 vs Q2 quantized versions from [[entities/prism-ml|Prism ML]].
- Focus on performance, [[concepts/memory|memory]] usage, and [[concepts/reasoning|reasoning]] capabilities in a 16GB local LLM setup.
- Analysis by [[entities/lukes-dev-lab|Luke's Dev Lab]] indicates that optimal temperature settings vary significantly between Q1 and Q2 quantizations due to differences in weight distribution and precision loss.

## Best Practices
- Use lower temperatures for factual, code, or logical tasks.
- Use higher temperatures for creative writing, brainstorming, or open-ended dialogue.
- Always test temperature sensitivity when deploying new quantized models to ensure consistent behavior.

## References
[Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning](https://www.youtube.com/watch?v=zLs2QG7lU7Q)
