---
type: concept
domain: ai-agents
tags:
  - "gguf"
  - "quantization"
  - "local-llm"
  - "inference"
  - "memory-efficiency"
  - "bonsai-2"
  - "q1"
  - "q2"
  - "swift-1.5"
  - "qwen3.8"
  - "gsq-rcq"
  - "iq3_s"
aliases:
  - "GGML Unified Format"
summary: GGUF is the standard file format for storing large language model weights, supporting various quantization schemes to enable efficient inference on constrained hardware.
updated: 2026-10-06
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-05T20:09:21+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# GGUF format

**[[entities/gguf|GGUF]]** ([[concepts/gguf|GGML Unified Format]]) is the standard file format for [[concepts/storing|storing]] [[concepts/large-language-model]] [[concepts/parameters|weights]], enabling [[concepts/ai-inference|efficient inference]] across various backends. It supports multiple [[concepts/precision-reduction|quantization]] schemes, including extreme low-bit methods like 1-bit and 2-bit [[concepts/ternary-weights|ternary weights]], which are critical for running large models on constrained hardware.

## Key Concepts

- **[[concepts/quantisation|Quantization]] Support**: GGUF allows for precise control over weight [[concepts/accuracy|precision]], facilitating the deployment of models like [[concepts/system-one-model|Ternary Bonsai 2]] with minimal accuracy loss.
- **[[concepts/memory|Memory]] Efficiency**: Essential for [[concepts/local-ai-model|local LLM]] setups, enabling models such as the 27B-class [[concepts/bonsai-image|Bonsai]] 2 to run on 16GB [[concepts/vram|VRAM]] configurations.
- **Advanced Quantization Schemes**: Recent benchmarks highlight the efficacy of specialized quantization methods like [[concepts/gsq-rcq|GSQ-RCQ]] and [[concepts/iq3_s|IQ3_S]] for balancing performance and resource constraints.
- **[[concepts/hardware-compatibility|Hardware Compatibility]]**: Optimized for specific GPU architectures, such as the [[concepts/rtx-2000-ada|RTX 2000 Ada]], allowing 27B-class models to operate effectively within 16GB VRAM limits.

## Performance Benchmarks

- **Swift 1.5 [[concepts/qwen38-27b|Qwen3.8-27B]] GSQ-RCO IQ3_S**: Comprehensive testing on local [[concepts/ubuntu|Ubuntu]] servers demonstrates the viability of this quantization on 16GB VRAM setups. See [[lab-notes/2026-10-06-Swift-1.5-Qwen3.8-27B-GSQ-RCO-IQ3_S-16GB-LLM-Performance|Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark]] for detailed metrics.
- **Source**: [Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark](https://www.youtube.com/watch?v=aNOUkWk9piU)
