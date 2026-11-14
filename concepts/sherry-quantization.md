---
type: concept
domain: ai-agents
tags:
  - "quantization"
  - "model-compression"
  - "tencent"
  - "angelslim"
  - "sherry-quantization"
  - "ai-efficiency"
  - "ternary-quantization"
aliases:
  - "Sherry Quant"
  - "Sherry"
summary: "Sherry Quantization is a model compression technique that reduces the memory footprint of large AI models, notably achieving a 7:1 compression ratio for Tencent's 770-billion parameter Hy4 model via the Angelslim initiat"
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-17T20:47:07+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sherry Quantization

**[[concepts/ternary-quantization|Sherry Quantization]]** is a [[concepts/ai-model-optimization|model compression]] technique designed to significantly reduce the [[concepts/memory-footprint|memory footprint]] and computational requirements of large-scale [[concepts/weathernext-3|AI models]] without substantial loss in performance. It enables the deployment of massive models on resource-constrained hardware.

## Key Achievements & Applications

### AngelSlim Breakthrough
Recent developments highlight the efficacy of Sherry Quantization in extreme compression scenarios, specifically through [[entities/tencent|Tencent]]'s **Angelslim** initiative.

- **Massive Compression Ratio:** Successfully reduced a 1.5 Terabyte (TB) AI model to 214 Gigabytes (GB), achieving a compression ratio of approximately 7:1.
- **Target Model:** Applied to the 770-billion parameter **Hy4** preview model.
- **Technical Mechanism:** Utilizes advanced quantization strategies to shrink model weights while preserving critical [[concepts/ai-inference|inference]] capabilities.
- **Source Documentation:** For detailed technical breakdowns and video analysis, see [[lab-notes/2026-09-18-Tencent-AI-Model-Shrink-with-Sherry-Quantization-AngelSl|Tencent AI Model Shrink with Sherry Quantization: AngelSlim Breakthrough Report]].

## Related Concepts
- [[concepts/llm-quantization|Model Quantization]]
- [[concepts/large-language-model|Large Language Model]] Optimization
- [[entities/tencent|Tencent]] AI
- Angelslim

## References
- [Tencent AI Model Shrink with Sherry Quantization: AngelSlim Breakthrough Report](https://www.youtube.com/watch?v=4y8WjfawRrk)
