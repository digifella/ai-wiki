---
type: concept
domain: ai-agents
tags:
  - "quantisation"
  - "model-compression"
  - "machine-learning-efficiency"
  - "llm-training"
  - "reduced-precision"
aliases:
  - "4-bit precision"
  - "FP4 training"
  - "four-bit quantisation"
  - "low-precision ML"
summary: 4-bit quantisation reduces machine learning model parameter precision to 4 bits per parameter, lowering memory footprint and computational costs while maintaining model accuracy.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# 4bit quantisation

A technique reducing [[concepts/digit-precision|numerical precision]] in [[concepts/machine-learning|machine learning]] models to 4 [[concepts/classical-bits|bits]] per parameter, significantly lowering [[concepts/memory|memory]] footprint and computational costs while maintaining [[concepts/vllm|model performance]].

- [[entities/julia-turc|Julia Turc]]'s video discusses the evolution of training LLMs with [[concepts/reduced-precision|reduced precision]], particularly the shift toward [[concepts/floating-point-numbers|4-bit floating-point]] (FP4) training for [[concepts/cost-efficient-solutions|cost efficiency]]
- Training LLMs incurs extreme costs: [[entities/stanford|Stanford]] estimated [[entities/gemini-ai|Google's Gemini]] Ultra (2023) at ~$191 million and [[entities/gpt-4|GPT-4]] (2023) at ~$78 million ([[entities/sam-altman|Sam Altman]] claimed higher), with 2025 costs expected to rise further
- Enables training and [[concepts/inference|inference]] with reduced [[concepts/hardware-requirements|hardware requirements]] compared to [[concepts/full-precision|full-precision]] (32-bit) models
- Addresses key challenge: maintaining model accuracy during [[concepts/precision-reduction|precision reduction]] through advanced [[concepts/quantisation|quantisation]] [[concepts/algorithms|algorithms]]

2026 04 14 How does 4bit quantisation work
