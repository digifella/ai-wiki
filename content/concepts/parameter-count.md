---
domain: ai-agents
group: model-efficiency-compression
type: concept
tags:
  - "machine learning"
  - "model complexity"
  - "quantization"
updated: 2026-04-14
---
# Parameter Count

The number of [[concepts/parameters|Parameters]] in a [[concepts/large-language-model]] (LLM) directly determines model capacity, [[concepts/training|training]] complexity, and resource requirements. For example, NVIDIA's [[entities/llama|Llama]] 3.1 [[entities/nemotron|Nemotron]] 70B (70.6 billion [[concepts/parameters|parameters]]) requires ~150GB [[entities/storage|storage]] at [[concepts/full-precision|full precision]] (32-bit), distributed across 30+ files (~5GB each).

- [[entities/adam-lucek]] - [[concepts/quantisation|quantisation]] of LLM: Video explaining [[concepts/model-efficiency]] techniques (e.g., reducing precision from 32-bit to 8-bit), which cuts storage needs by ~75% (e.g., 70B model from ~150GB to ~37.5GB) while preserving model performance.
- [[concepts/model-efficiency]]: Technique for reducing parameter precision without significant [[concepts/accuracy|accuracy]] loss, critical for deploying large models on constrained [[concepts/hardware|hardware]].
- [[concepts/large-language-model]]: Model class where parameter count correlates strongly with capabilities but also with computational cost.
- [[entities/nemotron]]: NVIDIA's [[entities/nemotron|Nemotron-3]] family (released April 2026) includes Nano (30B total, 3B active via Mixture-of-Experts), Super (100B total, 10B active), and Ultra (500B total, 50B active), offering scalable [[concepts/open-source|open-source]] LLMs with reduced active parameter counts.

2026 04 14 [[entities/adam-lucek|Adam Lucek]] quantisation of LLM
2026 04 14 [[entities/gary-explains|Gary Explains]] channel [[entities/nematron-3|Nematron 3]]

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Benchmarking-SLMs-Identifying-4GB-General-Problem-Solving-Champions|Benchmarking SLMs Identifying 4GB General Problem Solving Champions]] · [▶ source](https://www.youtube.com/watch?v=wQxawC3sv68)
- 2026-04-26: DeepSeek V4: China
- 2026-04-30: Google DeepMind