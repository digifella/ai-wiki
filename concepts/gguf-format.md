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
aliases:
  - "GGML Unified Format"
summary: GGUF is the standard file format for storing large language model weights, supporting various quantization schemes to enable efficient inference on constrained hardware.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-25T20:32:57+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# GGUF format

**[[entities/gguf|GGUF]]** ([[concepts/gguf|GGML Unified Format]]) is the standard file format for [[concepts/storing|storing]] [[concepts/large-language-model]] [[concepts/parameters|weights]], enabling [[concepts/ai-inference|efficient inference]] across various backends. It supports multiple [[concepts/precision-reduction|quantization]] schemes, including extreme low-bit methods like 1-bit and 2-bit [[concepts/ternary-weights|ternary weights]], which are critical for running large models on constrained hardware.

## Key Concepts

- **Quantization Support**: GGUF allows for precise control over weight [[concepts/accuracy|precision]], facilitating the deployment of models like [[concepts/system-one-model|Ternary Bonsai 2]] with minimal accuracy loss.
- **[[concepts/memory|Memory]] Efficiency**: Essential for [[concepts/local-ai-model|local LLM]] setups, enabling models such as the 27B-class [[concepts/bonsai-image|Bonsai]] 2 to run on 16GB [[concepts/vram|VRAM]] configurations.
- **[[concepts/reasoning|Reasoning]] Capabilities**: Modern GGUF implementations support [[concepts/complex-reasoning|complex reasoning]] tasks even in highly quantized states (1-bit/2-bit).

## Recent Evaluations & Benchmarks

- **[[concepts/web-tools|Bonsai-2-27B]] Q1/Q2 Re-evaluation**: Recent benchmarks by [[entities/lukes-dev-lab|Luke's Dev Lab]] re-evaluate the "Ternary-Bonsai-2-27B-gguf" model from [[entities/prism-ml|Prism ML]], comparing Q1 and Q2 quantized versions. The evaluation highlights performance, memory usage, and [[concepts/reasoning-capabilities|reasoning capabilities]] in a 16GB [[concepts/local-ai-configuration|local LLM setup]].
  - See detailed analysis: [[lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform|Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning]]
  - Source video: [Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning](https://www.youtube.com/watch?v=zLs2QG7lU7Q)
