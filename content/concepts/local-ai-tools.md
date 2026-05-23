---
type: concept
domain: tools-platforms
tags:
  - "local-llm"
  - "ai-inference"
  - "model-quantization"
  - "developer-tools"
  - "gpu-acceleration"
  - "open-source"
aliases:
  - "Local LLM Tools"
  - "On-Device AI Frameworks"
  - "LLM Runtime Platforms"
summary: Software frameworks and tools for running Large Language Models on local hardware, including llamacpp, Ollama, and LM Studio.
updated: 2026-05-23
group: developer-tooling-clis
---
# Local AI Tools

[[concepts/software|Software]] and frameworks enabling the execution, management, and [[concepts/deployment|deployment]] of [[concepts/large-language-model-llm|Large Language Models]] (LLMs) and other AI workloads on local [[concepts/hardware|hardware]].

## Key Frameworks & Tools

- **[[entities/llamacpp]]**: [[entities/high-performance|High-performance]] C/C++ library for [[concepts/running|running]] LLMs locally.
  - **Router Mode**: A native feature for hot-swapping [[concepts/models|models]] without restarting the server. See [[lab-notes/2026-05-22-llama.cpp-Router-Mode-Native-Hot-Swappable-Local-LLM-Swi|llama.cpp Router Mode: Native Hot-Swappable Local LLM Switching]].
- **[[concepts/task-specific-modeling|Ollama]]**: Simplifies running LLMs locally via CLI and REST API.
- **[[entities/lm-studio|LM Studio]]**: GUI-based interface for downloading and running local LLMs.
- **[[concepts/text-generation|Text Generation]] WebUI (oobabooga)**: Comprehensive web interface for local [[concepts/llm-inference|LLM inference]].

## Concepts

- **[[concepts/llm-quantization|Model Quantization]]**: Reducing model precision (e.g., [[concepts/q4-k-m|Q4_K_M]]) to fit larger models in limited [[concepts/vram|VRAM]].
- **[[concepts/context-window|Context Window]]**: The number of [[concepts/tokens|tokens]] the model can process [[concepts/assistive-technology|at]] once.
- **KV Cache**: Key-Value cache storing past inputs to [[concepts/speed|speed]] up generation.

## Resources

- [[concepts/local-ai|Local AI]] [[concepts/hardware-requirements|Hardware Requirements]]
- LLM Model Formats ([[concepts/gguf|GGUF]], SAFETENSORS)
