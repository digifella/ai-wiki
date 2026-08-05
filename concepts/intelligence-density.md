---
type: concept
domain: ai-agents
tags:
  - "model-efficiency"
  - "inference-performance"
  - "parameter-compression"
  - "ai-agents"
aliases:
  - "Capability per Parameter"
  - "Computational Footprint Ratio"
  - "Model Efficiency Metric"
summary: Intelligence density is a metric quantifying the ratio of model capability and reasoning performance to parameter count or computational footprint.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Intelligence Density

The metric representing the ratio of model capability and [[concepts/reasoning|reasoning]] performance to [[concepts/parameter-count|parameter count]] or computational footprint. Maximizing this ratio is a central goal in [[concepts/model-efficiency]] and efficient [[concepts/inference|inference]].

### Core Principles
- **Information Per Bit**: Maximizing semantic utility and [[concepts/reasoning|reasoning]] accuracy within [[concepts/reduced-precision|reduced-precision]] [[concepts/weights|weights]].
- **Structural Efficiency**: Utilizing advanced architectures like [[concepts/model-efficiency]] to compress [[concepts/large-language-models|large language models (LLMs)]] while minimizing the degradation of intelligence.

### Recent Developments
- [[entities/bonsai-8b]] (developed by [[entities/prismml]]): An implementation of a [[concepts/1-bit-llm|1-bit LLM]] based on the [[concepts/qwen-3-8b|Qwen 2.0 8B]] architecture, achieving high intelligence [[concepts/density|density]].
- **[[concepts/transformer-training|Demystifying AI]]: Transformer Training on a [[entities/pdp-1144|1979 PDP-11]]**
    - [[entities/tasia-custode|Author]] / channel: [[entities/daves-garage|Dave's Garage]]
    - URL: https://www.youtube.com/watch?v=OUE3FSIk46g
    - Summary: Demonstrates the [[concepts/training-process|training process]] of a [[concepts/neural-network|neural network]] using a transformer on a vintage 1979 [[concepts/pdp-1144|PDP-11/44]] computer with single CPU and limited [[concepts/memory|memory]], highlighting the core principles without relying on modern [[concepts/gpu-clusters|GPU clusters]].

2026 04 13 Demystifying AI Transformer Training on a 1979 [[concepts/pdp-11|PDP 11]]
## Source Notes
- 2026-04-07: PrismML [[concepts/bonsai|Bonsai 8B First Look & Test - A TRUE 1-Bit LLM?]]
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
