---
type: concept
domain: ai-agents
tags:
  - "GGML"
  - "GGUF"
  - "Qwen"
  - "LocalLLM"
  - "llama.cpp"
  - "Ollama"
  - "LM Studio"
  - "Quantization"
  - "local-llm"
  - "inference"
aliases:
  - "Gears General Machine Learning"
summary: GGML is a C/C++ library for machine learning inference on consumer hardware that serves as the backend for the GGUF format and tools like llama.cpp and Ollama.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-15T20:31:58+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# GGML

**GGML** (Gears General [[concepts/machine-learning|Machine Learning]]) is a C/C++ library designed for machine learning [[concepts/model-inference|inference]], specifically optimized for [[concepts/local-execution|local execution]] on [[concepts/consumer-hardware|consumer hardware]]. It serves as the foundational backend for the **[[entities/gguf|GGUF]]** format, which standardizes the [[entities/storage|storage]] of quantized [[concepts/model-weights|model weights]], [[concepts/metadata|metadata]], and tensors.

## Core Concepts

- **[[concepts/gguf-format|GGUF Format]]**: The successor to GGML's binary format, allowing for flexible metadata and tensor storage. It is the standard output for models converted from PyTorch/Transformers for use in local [[concepts/ai-inference|inference]] engines.
- **[[concepts/precision-reduction|Quantization]]**: GGML/GGUF supports various quantization levels (e.g., [[concepts/q4-k-m|Q4_K_M]], Q8_0) to reduce [[concepts/memory|memory]] footprint and increase [[concepts/inference-speed|inference speed]] with minimal accuracy loss.
- **[[concepts/reasoning|Inference]] Engines**: GGML is the [[concepts/engine|engine]] behind popular [[concepts/local-ai-model|local LLM]] runners:
    - [[entities/llamacpp|llama.cpp]]: The primary reference implementation.
    - [[entities/ollama|Ollama]]: Uses GGUF under the hood for easy model management.
    - [[entities/lm-studio]]: Provides a GUI for GGUF-based inference.

## Recent Deployments & Resources

### Qwen 3.8-27B GGUF Local Deployment
A practical guide for deploying the **[[concepts/qwen-38-27b|Qwen 3.8-27B]]** model in quantized GGUF format across major [[concepts/edge-deployment|local inference]] tools.

- **Source**: [[lab-notes/2026-08-15-Qwen-3.8-27B-GGUF-Local-Deployment-via-llama.cpp-Ollama|Qwen 3.8-27B GGUF Local Deployment via llama.cpp, Ollama, LM Studio]]
- **Key Details**:
    - Presenter: [[entities/fahd-mirza|Fahd Mirza]]
    - Focus: [[concepts/local-installation|Local installation]] and testing of the 27B parameter model.
    - Tools Covered: [[concepts/inference-engine|llama.cpp]], [[concepts/task-specific-modeling|Ollama]], and [[entities/lm-studio]].
    - Date: 2026-08-15
- **Reference**: [Qwen 3.8-27B GGUF Local Deployment via llama.cpp, Ollama, LM Studio](https://www.youtube.com/watch?v=gfcJIEcNjXQ)

## Related Concepts

- [[concepts/gguf]]
- [[concepts/precision-reduction|Quantization]]
- [[concepts/local-ai-model|Local LLM]]
- [[entities/llamacpp|llama.cpp]]
- [[entities/ollama|Ollama]]
- [[entities/lm-studio]]
- [[entities/qwen|Qwen]]
