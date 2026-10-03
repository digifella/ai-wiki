---
type: concept
domain: ai-agents
tags:
  - "parameter-reduction"
  - "model-compression"
  - "quantization"
  - "pruning"
  - "knowledge-distillation"
  - "low-rank-adaptation"
  - "inference-optimization"
  - "tencent-angelslim"
aliases:
  - "Model Compression"
  - "Weight Reduction"
  - "Model Size Reduction"
summary: Parameter reduction encompasses techniques like quantization, pruning, and knowledge distillation to decrease model weights and improve efficiency, exemplified by Tencent's AngelSlim framework compressing the Hy4 model.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-17T20:47:47+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Parameter Reduction

**Parameter reduction** refers to techniques used to decrease the number of weights in a machine learning model to improve [[concepts/inference-speed|inference speed]], reduce [[concepts/memory-footprint|memory footprint]], and lower computational costs while maintaining acceptable performance.

## Key Techniques
- **Quantization**: Reducing the precision of model weights (e.g., from FP32 to INT8).
- **Pruning**: Removing redundant or less important connections.
- **[[concepts/ai-distillation|Knowledge Distillation]]**: Training a smaller "student" model to mimic a larger "teacher" model.
- **Low-Rank Adaptation**: Approximating weight matrices with lower-rank decompositions.

## Recent Breakthroughs

### Tencent AngelSlim
In September 2026, [[entities/tencent|Tencent]] demonstrated a significant advancement in [[concepts/ai-model-optimization|model compression]] using **[[concepts/sherry-quantization|Sherry Quantization]]**.

- **Achievement**: Reduced the size of the 1.5 TB **Hy4** preview model (770 billion parameters) to 214 GB.
- **Methodology**: Utilized the **Angelslim** framework to achieve drastic size reduction without catastrophic performance loss.
- **Significance**: Demonstrates the viability of compressing trillion-scale models for more accessible deployment.

For detailed technical notes on this specific implementation, see: [[lab-notes/2026-09-18-Tencent-AI-Model-Shrink-with-Sherry-Quantization-AngelSl|Tencent AI Model Shrink with Sherry Quantization: AngelSlim Breakthrough Report]]

## Related Concepts
- [[concepts/ai-model-optimization|Model Compression]]
- Quantization Aware Training
- Sparse Networks
- [[concepts/inference-efficiency|Inference Optimization]]

## References
- [Tencent AI Model Shrink with Sherry Quantization: AngelSlim Breakthrough Report](https://www.youtube.com/watch?v=4y8WjfawRrk)
