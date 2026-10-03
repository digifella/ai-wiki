---
type: concept
domain: ai-agents
tags:
  - "ternary-weights"
  - "quantization"
  - "LLM"
  - "Bonsai-2"
  - "Prism-ML"
  - "GGUF"
  - "1-bit"
  - "2-bit"
  - "extreme-quantization"
  - "model-compression"
aliases:
  - "Ternary LLM Weights"
  - "1-bit Transformer Weights"
  - "Ternary Bonsai 2"
summary: Ternary transformer weights restrict model parameters to three discrete values to reduce memory and computational overhead, with recent evaluations focusing on the 27B Ternary Bonsai 2 model for consumer-grade hardware.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-25T20:30:56+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Ternary Transformer Weights

**Ternary transformer weights** refer to a quantization technique where model parameters are restricted to three discrete values (typically -1, 0, +1) to drastically reduce [[concepts/memory|memory]] footprint and computational overhead while attempting to preserve [[concepts/reasoning|reasoning]] capabilities. This approach is central to [[concepts/extreme-quantization|extreme quantization]] strategies for [[concepts/large-language-models|large language models]] (LLMs).

## Key Developments

### Ternary Bonsai 2 Evaluation
Recent evaluations have focused on **[[concepts/system-one-model|Ternary Bonsai 2]]**, a 27B-class [[concepts/reasoning-model|reasoning model]] developed by [[entities/prism-ml]] that utilizes ternary weights for [[concepts/1-bit-quantization|extreme quantization]].

- **Model Specs:** 27B parameters, supporting 1-bit and 2-bit quantization.
- **Q1/Q2 Re-evaluation:** Detailed benchmarking of Q1 and Q2 versions highlights performance trade-offs for local deployment. See [[lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform|Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning]] for granular data.
- **[[concepts/consumer-hardware|Consumer Hardware]] Viability:** Testing confirms feasibility on 16GB VRAM setups, making it a candidate for [[concepts/local-llm|local LLM]] [[concepts/ai-inference|inference]].

## References

[Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning](https://www.youtube.com/watch?v=zLs2QG7lU7Q)
