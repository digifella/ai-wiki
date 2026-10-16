---
type: entity
tags:
  - "LLM"
  - "Evaluation"
  - "Qwen"
  - "Quantization"
  - "16GB-GPU"
  - "Video"
  - "llm-evaluation"
  - "local-deployment"
  - "reasoning"
  - "coding"
  - "Ternary"
  - "Prism-ML"
  - "GGUF"
  - "Qwen3.8"
  - "Cold-Fusion"
  - "Agentic-Task"
  - "ClinePass"
  - "Bonsai"
  - "Swift-1.5"
  - "GSQ-RCO"
  - "IQ3_S"
aliases:
  - "Lukes Dev Lab"
  - "Luke's Dev Lab"
summary: A repository for development logs and technical notes, featuring evaluations of the Nail-Qwen 35B A3B, Ternary Bonsai 2, Qwen3.8 27B Turbo Fable, Qwen 3.8-Max, and Swift 1.5 Qwen3.8-27B GSQ-RCO models optimized for 16GB GPU constraints and agentic workflows.
updated: 2026-10-06
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-05T20:38:01+00:00" }
---
# Luke's Dev Lab

## Overview
A repository for development logs, model evaluations, and technical [[concepts/notes|notes]] curated by Luke's Dev Lab.

## Recent Evaluations

### Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark
**Date:** 2026-10-06
**Focus:** [[concepts/quantization|Quantization]], [[concepts/local-deployment|Local Deployment]], 16GB [[concepts/low-vram-generation|VRAM Optimization]]

- **Model:** [[concepts/system-one-model|UkisAI Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF]]
- **[[concepts/precision-reduction|Quantization]]:** IQ3_S
- **Hardware:** [[concepts/rtx-2000-ada|RTX 2000 Ada]] (16GB VRAM) on [[concepts/ubuntu|Ubuntu]] server
- **Key Findings:**
    - Comprehensive benchmark of [[concepts/iq3-s-quantization|IQ3_S quantization]] performance.
    - Validated viability for [[concepts/local-ai-model|local LLM]] setups with constrained VRAM.
    - [[lab-notes/2026-10-06-Swift-1.5-Qwen3.8-27B-GSQ-RCO-IQ3_S-16GB-LLM-Performance|Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark]]
- **Source:** [Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark](https://www.youtube.com/watch?v=aNOUkWk9piU)

### Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation
**Date:** 2026-09-25
**Focus:** Performance, [[concepts/agentic-tasks|Agentic Tasks]], ClinePass Integration

- **Model:** [[concepts/system-one-model|Qwen 3.8-Max]]
- **Context:** Evaluated via [[entities/david-au|David AU]] variant workflows using ClinePass.
- **Key Findings:**
    - Demonstrated excellent prefill speeds, ranging from approximately 640 tokens/second for short prompts.
    - Assessment of agentic task capabilities beyond standard [[concepts/benchmark-testing|benchmarking]].
    - [[lab-notes/2026-09-25-Qwen-3.8-Max-Performance-Benchmarks-and-Agentic-Task-Eva|Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation]]

### Qwen3.8 27B T

## Source Notes
- 2026-10-06: [[lab-notes/2026-10-06-Swift-1.5-Qwen3.8-27B-GSQ-RCO-IQ3_S-16GB-LLM-Performance|Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark]] · [▶ source](https://www.youtube.com/watch?v=aNOUkWk9piU)
- 2026-09-26: [[lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform|Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning]] · [▶ source](https://www.youtube.com/watch?v=zLs2QG7lU7Q)
- 2026-09-25: [[lab-notes/2026-09-25-Qwen-3.8-Max-Performance-Benchmarks-and-Agentic-Task-Eva|Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation]] · [▶ source](https://www.youtube.com/watch?v=KZ6uQMQtJW4)
- 2026-09-23: [[lab-notes/2026-09-23-Qwen3.8-27B-Turbo-Fable-Cold-Fusion-LLM-16GB-Local-Perfo|Qwen3.8 27B Turbo Fable Cold Fusion LLM: 16GB Local Performance Benchmark]] · [▶ source](https://www.youtube.com/watch?v=jNVl7TMd2DQ)
- 2026-09-22: [[lab-notes/2026-09-22-Ternary-Bonsai-2-27B-GGUF-1-bit-2-bit-Performance-Memory|Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation]] · [▶ source](https://www.youtube.com/watch?v=ZzLHGHMXkEw)
- 2026-09-12: [[lab-notes/2026-09-12-Nail-Qwen-35B-A3B-LLM-Performance-Reasoning-Coding-on-16|Nail-Qwen 35B A3B LLM: Performance, Reasoning, Coding on 16GB GPU Evaluation]] · [▶ source](https://www.youtube.com/watch?v=vKy0154ey90)
