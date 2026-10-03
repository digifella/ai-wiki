---
type: concept
domain: ai-agents
tags:
  - "llm-quantization"
  - "model-compression"
  - "inference-optimization"
  - "post-training-quantization"
  - "quantization-aware-training"
  - "mixed-precision"
  - "hardware-efficiency"
  - "consumer-hardware"
aliases:
  - "LLM Quantization"
  - "Model Quantization"
  - "Weight Quantization"
summary: LLM quantization converts model weights and activations to lower-precision formats to reduce memory usage, increase inference speed, and lower hardware requirements.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-30T20:34:36+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# LLM quantization

**LLM quantization** is the process of converting the weights and activations of a [[concepts/large-language-model]] from high-precision floating-point formats (e.g., FP32, FP16) to lower-precision formats (e.g., INT8, INT4, FP8) to reduce [[concepts/memory|memory]] footprint, increase [[concepts/inference-speed|inference speed]], and lower hardware requirements.

## Key Objectives
- **Memory Reduction**: Decrease VRAM/RAM usage, enabling deployment on [[concepts/consumer-grade-hardware|consumer-grade hardware]].
- **[[concepts/ai-inference|Inference]] Speed**: Accelerate [[concepts/computation|computation]] by leveraging specialized hardware instructions for lower-precision data types.
- **Energy Efficiency**: Reduce power consumption during training and [[concepts/model-inference|inference]].

## Common Techniques
- **Post-Training Quantization (PTQ)**: Quantizing a pre-trained model without retraining.
- **Quantization-Aware Training (QAT)**: Simulating quantization effects during training to minimize accuracy loss.
- **Mixed Precision**: Using different precisions for different layers or components (e.g., FP16 for [[concepts/attention-mechanism|attention]], INT8 for feed-forward).

## Hardware Implications
Recent analysis of [[entities/qwen-38-27b]] highlights the critical balance between model size and quantization level for [[concepts/consumer-hardware|consumer hardware]].
- See [[lab-notes/2026-08-31-Qwen-3.8-27B-Quantization-Performance-Analysis-and-Hardw|Qwen 3.8-27B Quantization Performance Analysis and Hardware Implications]] for detailed benchmarks on the [[concepts/qwen-38-27b|Qwen 3.8-27B]] model.
- Key findings from recent tests (RepoChad, 2026) include:
    - INT4 quantization allows 27B parameter models to run on 16GB VRAM cards with acceptable perplexity degradation.
    - INT8 provides a better accuracy-latency trade-off for high-fidelity requirements.
    - Hardware-specific kernels (e.g., [[concepts/gguf|GGUF]], AWQ) significantly impact real-world throughput compared to theoretical limits.

## Related Concepts
- [[concepts/ai-model-optimization|Model Compression]]
- [[concepts/ai-inference|Inference]] Optimization
- [[entities/gguf]]
- AWQ
- BitsAndBytes

## References
- [Qwen 3.8-27B Quantization Performance Analysis and Hardware Implications](https://www.youtube.com/watch?v=vW0KY_8z4q0)
