---
type: entity
tags:
  - "GGUF"
  - "Qwen"
  - "Quantization"
  - "LocalLLM"
  - "llama.cpp"
  - "Ollama"
  - "LM Studio"
  - "local-llm"
  - "file-format"
  - "inference"
aliases:
  - "GGML Unified Format"
summary: GGUF is a standard file format for GGML models that supports metadata and quantization to enable efficient inference on consumer hardware.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-15T20:32:57+00:00" }
---
# GGUF

**[[concepts/gguf|GGUF]]** ([[concepts/gguf-format|GGML Unified Format]]) is the standard file format for [[concepts/ggml]] models, designed to replace the older GGML format. It supports metadata, tensor names, and various quantization types, enabling [[concepts/efficient-inference|efficient inference]] across diverse hardware backends.

## Key Characteristics
- **Metadata Support**: Stores model configuration, tokenizer info, and training details.
- **Quantization**: Native support for Q4_K_M, Q5_K_M, Q8_0, and other quantization schemes to reduce VRAM/RAM usage.
- **Compatibility**: Read by [[entities/llamacpp|llama.cpp]], [[entities/ollama|Ollama]], [[entities/lm-studio]], and other [[concepts/ai-inference|inference]] engines.

## Ecosystem & Deployment
GGUF files are central to the local LLM ecosystem, allowing users to run large models on [[concepts/consumer-hardware|consumer hardware]].

- **llama.cpp**: The primary reference implementation for GGUF [[concepts/model-inference|inference]].
- **Ollama**: Simplifies GGUF management via its library and CLI.
- **LM Studio**: Provides a GUI for loading and testing GGUF models.

### Recent Developments: Qwen 3.8-27B
For specific deployment guides and [[concepts/performance-benchmarks|performance benchmarks]] of recent models like [[concepts/qwen-38-27b|Qwen 3.8-27B]], refer to:
[[lab-notes/2026-08-15-Qwen-3.8-27B-GGUF-Local-Deployment-via-llama.cpp-Ollama|Qwen 3.8-27B GGUF Local Deployment via llama.cpp, Ollama, LM Studio]]

## References
- [Qwen 3.8-27B GGUF Local Deployment via llama.cpp, Ollama, LM Studio](https://www.youtube.com/watch?v=gfcJIEcNjXQ)
