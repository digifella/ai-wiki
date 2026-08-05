---
type: concept
domain: ai-agents
tags:
  - "software-engine"
  - "llm-inference"
  - "local-ai"
  - "comparison"
  - "local-inference"
  - "llm-tools"
  - "ollama"
  - "lm-studio"
  - "llama-cpp"
aliases:
  - "Inference Engine"
  - "Local AI Runtime"
  - "LLM Runner"
  - "Model Execution Framework"
summary: An engine is a software component that executes model weights against input data for local AI inference, with primary tools including Ollama, LM Studio, and llama.cpp.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Engine

An **Engine** is a software component that provides the core computational [[concepts/open-source-philosophy|logic]] or [[concepts/compute-capacity|processing power]] for an application. In the context of [[concepts/ai-technologies|Artificial Intelligence]] and [[concepts/machine-learning]], [[concepts/inference-engines|inference engines]] are responsible for executing [[concepts/model-weights|model weights]] against input data to generate predictions or outputs locally, without relying on external cloud [[concepts/open-standard-protocols|APIs]].

## Local AI Inference Engines

Recent comparisons highlight three primary tools for running [[concepts/large-language-model-llm|large language models]] locally: **[[concepts/task-specific-modeling|Ollama]]**, **[[concepts/lm-studio|LM Studio]]**, and **[[concepts/inference-engine|llama.cpp]]**. These tools serve different user profiles based on ease of use, configurability, and programmatic integration [[lab-notes/2026-06-20-Ollama-LM-Studio-and-llama.cpp-Local-AI-Tool-Comparison|Ollama, LM Studio, and llama.cpp: Local AI Tool Comparison and Use Cases]].

*   **[[entities/ollama|Ollama]]**: Optimized for simplicity and [[concepts/developer-workflow|developer workflow]]. It allows users to pull, run, and manage models via a simple CLI (`ollama run`). It abstracts away complex configuration details, making it ideal for quick prototyping and integrating LLMs into applications without managing underlying server complexities.
*   **[[entities/lm-studio|LM Studio]]**: Focuses on [[concepts/user-experience-design|user experience]] and discoverability. It provides a GUI-driven interface for browsing, downloading, and chatting with models. It is best suited for non-technical users or those who prefer visual [[concepts/feedback|feedback]] and easy access to a library of quantized models without [[concepts/writing|writing]] code.
*   **[[entities/llama|llama]].cpp**: The foundational C++ implementation that powers much of the [[concepts/edge-deployment|local inference]] ecosystem. It offers maximum control over [[concepts/hardware-acceleration|hardware acceleration]] (CPU, GPU via Vulkan/Metal/CUDA), [[concepts/memory-mapping|memory mapping]], and parameter tuning. While it has a steeper [[concepts/learning|learning]] curve, it is essential for [[concepts/power-users|advanced users]] needing fine-grained [[concepts/software-performance|performance optimization]] or embedding [[concepts/inference|inference]] capabilities directly into custom software applications.

### Key Considerations
*   **Hardware Utilization**: All three leverage CPU and [[concepts/gpu-acceleration|GPU acceleration]] but differ in setup complexity. `llama.cpp` requires manual configuration for optimal offloading, whereas Ollama and LM Studio handle this more automatically.
*   **Model Format Support**: Compatibility with [[concepts/gguf-format|GGUF format]] is standard across these tools, ensuring interoperability with community-quantized models.

## References

*   [Ollama, LM Studio, and llama.cpp: Local AI Tool Comparison and Use Cases](https://www.youtube.com/watch?v=crXFOd7gG_I)
