---
type: concept
domain: ai-agents
tags:
  - "quantization"
  - "llm-inference"
  - "memory-management"
  - "model-optimization"
  - "deep-learning"
  - "model-compression"
  - "inference-optimization"
  - "llm-deployment"
  - "precision-reduction"
  - "memory-efficiency"
aliases:
  - "model quantization"
  - "neural network quantization"
  - "precision reduction"
summary: Quantization reduces numerical precision of model weights and activations to decrease memory usage and inference latency with minimal performance loss.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Quantization Techniques

Process of reducing the [[concepts/digit-precision|numerical precision]] of [[concepts/model-weights|model weights]] and activations to decrease [[concepts/memory|memory]] footprint and accelerate [[concepts/inference|inference]] with minimal degradation in [[concepts/vllm|model performance]].

## Role in LLM Inference
- Critical for efficient [[concepts/memory-management]] during [[concepts/large-language-models]] deployment, allowing models to fit within limited [[concepts/vram]] constraints.
- Reduces I/O [[concepts/network-speed|bandwidth]] requirements and latency during [[concepts/model-loading|model loading]] and runtime execution.
- See [[lab-notes/2026-05-15-Technical-Overview-of-LLM-Inference-Loading-Memory-and-Q|Technical Overview of LLM Inference: Loading, Memory, and Quantization]] for comprehensive analysis of loading mechanics, [[concepts/memory-overhead|memory overhead]], and [[concepts/parameter-reduction|quantization]] effects.
- Enables inference on [[concepts/consumer-grade-hardware|consumer-grade hardware]] by compressing parameter size without significant quality loss.

## Methods
- **Post-Training [[concepts/precision-reduction|Quantization]] (PTQ):** Applies [[concepts/quantisation|quantization]] after training; fast, no retraining required, may suffer accuracy drop on sensitive layers.
- **[[concepts/quantization-aware-training-qat|Quantization-Aware Training (QAT)]]:** Simulates quantization noise during training; higher accuracy [[concepts/storing|retention]], requires full retraining cycle.
- **Weight-Only Quantization:** Compresses static [[concepts/weights|weights]] while maintaining activations in higher [[concepts/accuracy|precision]]; standard for many [[concepts/inference-engines|inference engines]].
- **Mixed-Precision:** Assigns variable precision to layers based on sensitivity analysis to balance [[concepts/speed|speed]] and fidelity.

## Formats & Standards
- **FP16/BF16:** 16-bit floating point; baseline for modern inference, halves size vs [[concepts/full-precision|FP32]].
- **INT8/INT4:** Integer quantization; aggressive compression, requires hardware support or software emulation.
- **GGUF/NNCF:** File formats and toolkits implementing quantization workflows for distributed and [[concepts/mobile-ai-inference|edge inference]].
