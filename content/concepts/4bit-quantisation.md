---
type: concept
domain: ai-agents
tags:
  - "quantisation"
  - "machine-learning"
  - "ai"
  - "large-language-models"
  - "model-compression"
  - "quantisation-algorithms"
  - "llm-training"
  - "reduced-precision"
  - "cost-efficiency"
aliases:
  - "4-bit quantization"
summary: "4-bit quantisation reduces machine learning model parameter precision to 4 bits per parameter, lowering memory footprint and computational costs while maintaining model accuracy."
updated: 2026-04-15
group: model-efficiency-compression
---
# 4bit quantisation

A technique reducing numerical precision in [[concepts/machine-learning|machine learning]] models to 4 bits per parameter, significantly lowering [[concepts/memory|memory]] footprint and computational costs while maintaining model performance.

- [[entities/julia-turc|Julia Turc]]'s video discusses the evolution of [[concepts/training|training]] LLMs with [[concepts/reduced-precision|reduced precision]], particularly the shift toward [[concepts/floating-point-numbers|4-bit floating-point]] (FP4) training for cost efficiency
- Training LLMs incurs extreme costs: [[entities/stanford|Stanford]] estimated [[entities/gemini-ai|Google's Gemini]] Ultra (2023) at ~$191 million and [[entities/gpt-4|GPT-4]] (2023) at ~$78 million ([[entities/sam-altman|Sam Altman]] claimed higher), with 2025 costs expected to rise further
- Enables training and [[concepts/inference|inference]] with reduced [[concepts/hardware-requirements|hardware requirements]] compared to [[concepts/full-precision|full-precision]] (32-bit) models
- Addresses key challenge: maintaining model [[concepts/accuracy|accuracy]] during [[concepts/precision-reduction|precision reduction]] through advanced [[concepts/quantisation|quantisation]] algorithms

2026 04 14 How does 4bit quantisation work
