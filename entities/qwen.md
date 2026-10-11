---
type: entity
tags:
  - "Qwen"
  - "LLM"
  - "GGUF"
  - "Local-Deployment"
  - "llama.cpp"
  - "Ollama"
  - "LM-Studio"
  - "Multimodal"
  - "Agentic"
  - "DeepSeek"
  - "Hardware-Optimization"
  - "8GB-GPU"
  - "Bonzai"
  - "Prism-ML"
  - "Single-GPU"
  - "Performance-Benchmarks"
  - "ClinePass"
aliases:
  - "Qwen 3.8-27B"
  - "Alibaba Tongyi Lab LLM"
  - "Qwen 3.8-27B Open-Source Multimodal LLM"
  - "Bonzai 2.7B"
  - "Qwen 3.8-Max"
summary: Qwen is a series of large language models developed by Alibaba Group's Tongyi Lab. Qwen 3.8-27B is an open-source multimodal variant with agentic capabilities, deployable locally via GGUF or integrated with DeepSeek harnesses. Bonzai 2.7B, a compact variant by Prism ML, addresses single-GPU performance challenges for local AI accessibility. Recent evaluations highlight Qwen 3.8-Max's performance in agentic tasks.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-24T20:55:54+00:00" }
---
# Qwen

**Qwen** is a series of [[concepts/large-language-models|large language models]] developed by Alibaba Group's Tongyi Lab. It supports multiple languages and complex [[concepts/reasoning|reasoning]] tasks.

## Qwen 3.8-27B GGUF Local Deployment via llama.cpp, Ollama, LM Studio

For practical local [[concepts/model-inference|inference]] of the [[concepts/qwen-38-27b|Qwen 3.8-27B]] [[concepts/gguf|GGUF]] Local Deployment via [[entities/llamacpp|llama.cpp]], [[entities/ollama|Ollama]], [[entities/lm-studio|LM Studio]], refer to the detailed guide by [[entities/fahd-mirza|Fahd Mirza]].

### Key Details
- **Model Variant:** [[entities/qwen-38|Qwen 3.8]] (27 billion parameters) in [[entities/gguf|GGUF]] quantized format.
- **Deployment:** Compatible with [[entities/llamacpp|llama.cpp]], [[entities/ollama|Ollama]], and LM Studio.
- **Agentic Capabilities:** Supports agentic workflows and [[concepts/advanced-reasoning|complex reasoning]] tasks.
- **Compact Variant:** Bonzai 2.7B by [[entities/prism-ml|Prism ML]] optimizes for [[concepts/single-gpu-performance|single-GPU performance]].

## Performance and Agentic Evaluation

Recent evaluations of the **[[concepts/qwen-38-max|Qwen 3.8-Max]]** variant focus on agentic task performance and fundamental metrics.

- **Benchmarking:** Evaluated via ClinePass for agentic task efficiency.
- **Performance Metrics:** Demonstrated excellent prefill speeds, ranging from approximately 640 tokens/second for short prompts.
- **[[concepts/agentic-task-evaluation|Agentic Task Evaluation]]:** Assessed through a series of benchmarks designed to test reasoning and execution capabilities in complex scenarios.

For detailed results and methodology, see [[lab-notes/2026-09-25-Qwen-3.8-Max-Performance-Benchmarks-and-Agentic-Task-Eva|Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation]].

## References

- [Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation](https://www.youtube.com/watch?v=KZ6uQMQtJW4) ([[entities/lukes-dev-lab|Luke's Dev Lab]])
