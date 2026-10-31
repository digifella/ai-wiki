---
type: concept
domain: ai-agents
tags:
  - "gptq"
  - "quantization"
  - "llm-optimization"
  - "post-training"
  - "model-compression"
aliases:
  - "Generative Pre-trained Transformer Quantized"
summary: GPTQ is a post-training quantization method that uses second-order approximation to reduce the memory footprint and inference latency of large language models with minimal accuracy loss.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-07T20:33:05+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# GPTQ

**GPTQ** ([[concepts/generative-pre-trained-transformers|Generative Pre-trained Transformer]] Quantized) is a post-training [[concepts/quantization-method|quantization method]] designed to reduce the [[concepts/memory-footprint|memory footprint]] and [[concepts/ai-inference|inference]] latency of [[concepts/large-language-models|large language models]] (LLMs) with minimal accuracy loss. It approximates second-order information to determine optimal quantization [[concepts/musical-scales|scales]] and zero-points for [[concepts/parameters|weights]], enabling [[concepts/bonsai|efficient deployment]] on [[concepts/consumer-hardware|consumer hardware]].

## Core Mechanism
- **Second-Order Approximation**: Unlike first-order methods (e.g., PTQ), GPTQ uses an approximate Newton's method to minimize the reconstruction error of the weights layer-by-layer.
- **Layer-wise Processing**: Quantizes weights sequentially, allowing for precise control over quantization error propagation.
- **Per-Channel [[concepts/computational-scaling|Scaling]]**: Typically applies scaling factors per output channel to preserve activation distributions.

## Related Quantization Techniques
- PTQ (Post-Training Quantization)
- AWQ (Activation-aware Weight Quantization)
- [[entities/gguf]] (Generic Format for Unified [[concepts/model-inference|Inference]])
- [[concepts/llm-quantization]]

## Recent Developments & Alternatives
While GPTQ remains a standard for [[concepts/4-bit-quantization|4-bit quantization]], newer techniques offer improved efficiency or accuracy for specific architectures:

- **GSQ+RCO for [[concepts/large-language-model|Qwen3.8-27B]]**: Recent research by [[entities/ist-austria|IST Austria]]'s Distributed [[concepts/algorithms|Algorithms]] and Systems introduces **[[concepts/gumbel-softmax-quantization|Gumbel Softmax Quantization]] (GSQ)** combined with **[[concepts/riemannian-constrained-optimization|Riemannian Constrained Optimization]] (RCO)**. This approach targets [[concepts/local-control|local deployment]] of 27B [[concepts/parameter-models|parameter models]], achieving ~11.8GB size with [[concepts/concept-of-nothingness|zero]] reported accuracy loss.
  - See detailed analysis: [[lab-notes/2026-09-08-Qwen3.8-27B-Quantization-GSQRCO-for-Local-Accurate-LLM-D|Qwen3.8-27B Quantization: GSQ+RCO for Local, Accurate LLM Deployment]]
  - Key benefits: Enables high-fidelity local [[concepts/reasoning|inference]] for [[concepts/intermediate-model|mid-sized models]] without significant hardware upgrades.
  - Source: [Qwen3.8-27B Quantization: GSQ+RCO for Local, Accurate LLM Deployment](https://www.youtube.com/watch?v=utJEkStLaok)

## Implementation Notes
- **Tools**: `auto-gptq`, `llama.cpp` (GGML/GGUF conversion often uses GPTQ-derived [[concepts/open-source-philosophy|logic]]), `bitsandbytes`.
- **[[concepts/scenarios|Use Cases]]**: [[concepts/edge-computing|Edge deployment]], [[concepts/local-llm-serving|local LLM serving]], memory-constrained environments.
- **Limitations**: Quantization latency during [[concepts/data-preprocessing|preprocessing]]; potential accuracy degradation on very small models or specific tasks if not carefully calibrated.
