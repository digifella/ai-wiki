---
type: entity
tags:
  - "AI"
  - "Model"
  - "Prism-ML"
  - "Bonzai"
  - "Local-AI"
  - "Single-GPU"
  - "qwen-architecture"
  - "ai-models"
  - "ternary-weights"
  - "quantization"
  - "benchmarking"
  - "Q1"
  - "Q2"
aliases:
  - "Prism ML"
summary: Prism ML develops compact AI models like Bonzai 2.7B and Ternary Bonsai 2 for local deployment, focusing on single-GPU viability, extreme quantization, and recent Q1/Q2 performance re-evaluations.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-25T20:34:20+00:00" }
---
# Prism ML

**Prism ML** is an entity focused on developing compact, high-performance [[concepts/weathernext-3|AI models]] optimized for local deployment.

## Key Projects

### Bonzai 2.7B
A compact language model derived from the [[entities/qwen-38-27b]] architecture. It is designed to address performance challenges on single-GPU setups, aiming to improve [[concepts/local-ai|local AI]] accessibility.

- **Architecture:** Derived from [[entities/qwen|Qwen]] 3.8 27B.
- **Goal:** Enable powerful [[concepts/local-models|local AI]] access on constrained hardware.
- **Performance:** Evaluated for single-GPU viability.
- **Analysis:** See [[lab-notes/2026-09-18-Bonzai-2.7B-AI-Single-GPU-Performance-Challenges-for-Loc|Bonzai 2.7B AI: Single-GPU Performance Challenges for Local AI Accessibility]] for detailed testing results.

### Ternary Bonsai 2 27B
A new 27B-class [[concepts/reasoning-model|reasoning model]] utilizing [[concepts/ternary-transformer-weights|ternary transformer weights]] for [[concepts/extreme-quantization|extreme quantization]] (1-bit/2-bit quantization).

- **Quantization Focus:** Recent evaluations specifically target Q1 and Q2 quantized versions to balance [[concepts/memory|memory]] usage and [[concepts/reasoning|reasoning]] performance.
- **Benchmarking:** Comprehensive re-evaluation of performance, [[concepts/memory-footprint|memory footprint]], and reasoning capabilities in constrained environments (e.g., 16GB VRAM setups).
- **Detailed Analysis:** See [[lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform|Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning]] for detailed testing results.

## References

- [Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning](https://www.youtube.com/watch?v=zLs2QG7lU7Q) ([[entities/lukes-dev-lab|Luke's Dev Lab]], 2026-09-26)
