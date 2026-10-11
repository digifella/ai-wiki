---
type: concept
domain: ai-agents
tags:
  - "extreme-quantization"
  - "model-compression"
  - "ternary-weights"
  - "gguf"
  - "low-bit-quantization"
  - "memory-optimization"
  - "inference-latency"
  - "local-llm"
aliases:
  - "Low-bit Quantization"
  - "Ternary Quantization"
  - "1-bit Quantization"
summary: Extreme quantization reduces model precision to very low bit-widths like 1-bit or ternary to minimize memory footprint and inference latency, as demonstrated by the Ternary Bonsai 2 model.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-21T20:46:44+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Extreme Quantization

**[[concepts/1-bit-quantization|Extreme quantization]]** refers to the process of reducing the [[concepts/accuracy|precision]] of [[concepts/model-weights|model weights]] and activations to very low bit-widths (e.g., 1-bit, 2-bit, or ternary) to minimize [[concepts/memory-footprint|memory footprint]] and [[concepts/ai-inference|inference]] latency, often at the cost of some accuracy.

## Key Techniques
- **[[concepts/ternary-weights|Ternary Weights]]:** Reducing weights to three states (-1, 0, +1) to maximize compression.
- **1-bit/2-bit [[concepts/precision-reduction|Quantization]]:** Mapping floating-point values to binary or quaternary representations.
- **[[concepts/gguf|GGUF]] Format:** Standardized format for quantized models, enabling efficient loading in local [[concepts/model-inference|inference]] engines.

## Recent Developments
- **[[concepts/system-one-model|Ternary Bonsai 2]] (27B):** A 27B-parameter [[concepts/reasoning|reasoning]] model by [[entities/prism-ml]] utilizing [[concepts/ternary-transformer-weights|ternary transformer weights]].
  - Evaluated for performance, [[concepts/memory|memory]] usage, and [[concepts/reasoning-capabilities|reasoning capabilities]] in 1-bit and 2-bit configurations.
  - Demonstrates viability of extreme quantization for large [[concepts/reasoning-models|reasoning models]] on constrained hardware (e.g., 16GB [[concepts/vram|VRAM]] setups).
  - See detailed evaluation: [[lab-notes/2026-09-22-Ternary-Bonsai-2-27B-GGUF-1-bit-2-bit-Performance-Memory|Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation]]

## Related Concepts
- [[entities/gguf]]
- [[concepts/precision-reduction|Quantization]]
- Ternary [[concepts/neural-networks|Neural Networks]]
- [[concepts/open-weight-models|Local LLM Inference]]

## References
- [Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation](https://www.youtube.com/watch?v=ZzLHGHMXkEw)
