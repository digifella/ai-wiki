---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Local AI Tools

Software and frameworks enabling the execution, management, and deployment of [[concepts/large-language-model-llm|Large Language Models]] (LLMs) and other AI workloads on local hardware.

## Key Frameworks & Tools

- **[[entities/llamacpp]]**: [[entities/high-performance|High-performance]] C/C++ library for running LLMs locally; serves as the foundational backend for many higher-level interfaces.
  - **Router Mode**: A native feature for hot-swapping models without restarting the server. See [[lab-notes/2026-05-22-llama.cpp-Router-Mode-Native-Hot-Swappable-Local-LLM-Swi|llama.cpp Router Mode: Native Hot-Swappable Local LLM Switching]].
- **[[concepts/task-specific-modeling|Ollama]]**: Simplifies running LLMs locally via CLI and REST API; optimized for ease of use, background service management, and seamless [[concepts/model-switching|model switching]].
- **[[entities/lm-studio|LM Studio]]**: GUI-based interface for downloading and running [[concepts/hardware-heavy-models|local LLMs]]; emphasizes user-friendly model browsing, hardware configuration visualization, and [[concepts/chat-interfaces|chat interfaces]].
- **[[concepts/text-generation|Text Generation]] WebUI (oobabooga)**: Comprehensive web interface for local [[concepts/llm-inference|LLM inference]], offering extensive extension support and [[concepts/fine-tuning|fine-tuning]] capabilities.

### Comparison & Use Cases
For a detailed breakdown of when to choose each tool, see [[lab-notes/2026-06-20-Ollama-LM-Studio-and-llama.cpp-Local-AI-Tool-Comparison|Ollama, LM Studio, and llama.cpp: Local AI Tool Comparison and Use Cases]]. Key distinctions include:
- **[[concepts/inference-engine|llama.cpp]]**: Best for developers requiring low-level control, integration into custom applications, or maximum efficiency on constrained hardware.
- **[[entities/ollama|Ollama]]**: Ideal for CLI users, automated pipelines, and those seeking a "set-and-forget" background server with simple model management.
- **[[concepts/lm-studio|LM Studio]]**: Preferred by non-technical users or those who benefit from visual hardware diagnostics, easy model search/filtering, and a polished chat UI without configuration files.

## Concepts

- **[[concepts/llm-quantization|Model Quantization]]**: Reducing

## References
- [Ollama, LM Studio, and llama.cpp: Local AI Tool Comparison and Use Cases](https://www.youtube.com/watch?v=crXFOd7gG_I)
