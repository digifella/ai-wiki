---
type: concept
domain: ai-agents
tags:
  - "GGUF"
  - "Qwen"
  - "Quantization"
  - "LocalLLM"
  - "llama.cpp"
  - "Ollama"
  - "LM Studio"
  - "llm-format"
  - "local-llm"
  - "ggml"
  - "DeepSeek"
  - "Agent"
  - "EnvironmentInteraction"
  - "Plugins"
  - "Nail-Qwen"
  - "16GB-GPU"
  - "Qwen3.8"
  - "Benchmark"
aliases:
  - "GGML Unified Format"
  - "DeepSeek Harness"
summary: GGUF is a standard file format for storing quantized large language models. DeepSeek Harness (DSH) is an open-source agent harness that extends LLM capabilities via environment interaction and plugins.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-22T20:31:30+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# GGUF & Local LLM Agents

**[[entities/gguf|GGUF]]** ([[concepts/ggml|GGML]] Unified Format) is the standard file format for [[concepts/storing|storing]] [[concepts/precision-reduction|Quantization]] [[concepts/large-language-models|large language models]] (LLMs) compatible with the [[entities/llamacpp|llama.cpp]] ecosystem. It replaced the older GGML format to support dynamic [[concepts/metadata|metadata]], flexible tensor [[entities/storage|storage]], and improved compatibility across various [[concepts/model-inference|inference]] engines.

## Key Characteristics
- **Quantization Support**: Efficiently stores models in various [[concepts/accuracy|precision]] levels (e.g., [[concepts/q4-k-m|Q4_K_M]], Q8_0) to reduce VRAM/RAM usage.
- **Metadata**: Stores [[concepts/model-architecture|model architecture]], tokenizer info, and training parameters within the file header.
- **Ecosystem Compatibility**: [[concepts/native-support|Native support]] for [[concepts/inference-engine|llama.cpp]], [[entities/ollama|Ollama]], [[entities/lm-studio|LM Studio]], and other local [[concepts/ai-inference|inference]] engines.

## Recent Benchmarks & Performance
- **[[concepts/large-language-model|Qwen3.8 27B Turbo Fable]] [[concepts/cold-fusion|Cold Fusion]]**: Evaluated for local performance on constrained hardware.
  - See detailed analysis: [[lab-notes/2026-09-23-Qwen3.8-27B-Turbo-Fable-Cold-Fusion-LLM-16GB-Local-Perfo|Qwen3.8 27B Turbo Fable Cold Fusion LLM: 16GB Local Performance Benchmark]]
  - Tested on a **16GB GPU** setup, demonstrating viability for [[concepts/local-llm|local-llm]] deployment with [[entities/qwen|Qwen]] variants.
  - Source: [Qwen3.8 27B Turbo Fable Cold Fusion LLM: 16GB Local Performance Benchmark](https://www.youtube.com/watch?v=jNVl7TMd2DQ)

## References
- [Qwen3.8 27B Turbo Fable Cold Fusion LLM: 16GB Local Performance Benchmark](https://www.youtube.com/watch?v=jNVl7TMd2DQ)
