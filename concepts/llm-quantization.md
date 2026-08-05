---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "concept"
  - "quantization"
  - "model-compression"
  - "llm-optimization"
  - "qwen"
  - "local-inference"
  - "intel-autoround"
aliases:
  - "Model Quantization"
summary: Quantization is a model compression technique for reducing LLM size, exemplified by running Qwen 30B locally using Intel's AutoRound optimization.
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# LLM Quantization

Quantization is a model compression technique that reduces the memory footprint and computational requirements of large language models by representing weights and activations using lower-precision numerical formats. Rather than storing model parameters in standard 32-bit floating-point (FP32) format, quantization converts them to lower bit-widths such as 8-bit integers (INT8) or 4-bit integers (INT4). This conversion can reduce model size by 75-90% while maintaining reasonable inference quality, making it possible to run larger models on resource-constrained hardware.

## Quantization Methods

Post-training quantization applies compression after a model has been fully trained, making it a practical approach for existing models without requiring retraining. Quantization-aware training, by contrast, incorporates quantization into the training process itself, typically yielding better accuracy at lower bit-widths but requiring significant computational investment. Tools like Intel's AutoRound optimize the quantization process by automatically selecting appropriate rounding and scaling parameters to minimize accuracy loss.

## Practical Applications

Quantization enables deployment of large models in resource-limited environments. For example, Qwen 30B, a model with 30 billion parameters, can be quantized to run on consumer-grade hardware with limited RAM and GPU memory. This makes advanced language models accessible for local inference without reliance on cloud services, though with some trade-off in output quality and latency compared to full-precision versions.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-12: [[lab-notes/2026-04-12-Google-TurboQuant-LLM-Memory-Efficiency-Breakthrough-Industry-Impact|Google TurboQuant LLM Memory Efficiency Breakthrough Industry Impact]] · [▶ source](https://www.youtube.com/watch?v=erV_8yrGMA8)
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)
- 2026-04-19: [[lab-notes/2026-04-19-Qwen-36-35B-Full-Precision-vs-Ollama-Quantized-Performance-Memory-Trad|Qwen 36 35B Full Precision vs Ollama Quantized Performance Memory Trad]] · [▶ source](https://www.youtube.com/watch?v=RlGppgMDl9k)
- 2026-04-22: LLM Inference · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)
- 2026-04-24: LTX-2: Usable Open-Source Local AI · [▶ source](https://www.youtube.com/watch?v=AUcYJczWXT4)
- 2026-04-26: DeepSeek · [▶ source](https://www.youtube.com/watch?v=nHDnyNzvF50)
- 2026-05-01: [[lab-notes/2026-05-01-Alibaba-Qwen-3.6-27B-Advanced-Local-Agentic-Coding-and-M|Alibaba Qwen 3.6 27B: Advanced Local Agentic Coding and Multimodal AI Capabilities]] · [▶ source](https://www.youtube.com/watch?v=N-0WtgxJ7ZU)
