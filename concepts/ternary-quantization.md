---
type: concept
domain: ai-agents
tags:
  - "ternary-quantization"
  - "model-compression"
  - "neutrino-8b"
  - "speculative-decoding"
  - "local-ai"
  - "sherry-quantization"
  - "angelslim"
  - "tencent"
aliases:
  - "Ternary Quantization"
  - "Sherry Quantization"
summary: Model compression techniques including ternary quantization and Sherry quantization that reduce memory and latency, demonstrated by Neutrino-8B and Tencent's AngelSlim.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-17T20:47:26+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Ternary Quantization

**[[concepts/extreme-quantization|Ternary quantization]]** is a [[concepts/model-distillation|model compression]] technique that restricts neural network weights and activations to three discrete values, typically $\{-1, 0, +1\}$. This approach significantly reduces [[concepts/memory|memory]] footprint and computational latency by replacing expensive floating-point multiplications with simple additions and sign operations.

## Key Mechanisms
- **Weight Discretization:** Maps continuous weights to ternary states, often using a scaling factor to preserve magnitude information.
- **Sparsity Induction:** The zero value ($0$) introduces sparsity, allowing for optimized sparse matrix multiplication kernels.
- **Accuracy Trade-off:** While aggressive, modern techniques like Neutrino-8B demonstrate that ternary quantization can maintain high performance when combined with advanced decoding strategies.

## Recent Developments

### Neutrino-8B
The release of **Neutrino-8B** by FermionResearch highlights the practical application of ternary quantization in maintaining high performance through advanced decoding strategies.

### Tencent AngelSlim & Sherry Quantization
[[entities/tencent|Tencent]] has demonstrated extreme model shrinkage capabilities using **[[concepts/sherry-quantization|Sherry Quantization]]**, achieving a reduction of a 1.5TB AI model (Hy4 preview, 770B parameters) to 214GB. This breakthrough underscores the potential of advanced quantization methods for handling massive parameter counts.

- See detailed analysis: [[lab-notes/2026-09-18-Tencent-AI-Model-Shrink-with-Sherry-Quantization-AngelSl|Tencent AI Model Shrink with Sherry Quantization: AngelSlim Breakthrough Report]]
- Source: [Tencent AI Model Shrink with Sherry Quantization: AngelSlim Breakthrough Report](https://www.youtube.com/watch?v=4y8WjfawRrk)
