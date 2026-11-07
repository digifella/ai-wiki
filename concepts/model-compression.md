---
type: concept
domain: ai-agents
tags:
  - "quantization"
  - "llm-compression"
  - "model-efficiency"
  - "local-inference"
  - "model-pruning"
  - "computational-efficiency"
  - "hardware-requirements"
  - "coding-llm"
  - "sparse-moe"
  - "strata-runtime"
aliases:
  - "LLM Compression"
  - "Large Language Model Compression"
  - "Model Size Reduction"
  - "Local Coding LLMs"
  - "Strata Runtime"
summary: Compression techniques for local large language models (LLMs) reduce model size and computational requirements while preserving context, enhancing accessibility and enabling local coding workflows. Includes runtime optimizations like Strata for sparse MoE models on consumer hardware.
updated: 2026-10-07
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-06T21:59:51+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

group: model-efficiency-compression


# Compression in Local Large Language Models (LLMs)

[[concepts/file-size-reduction|Compression techniques]] are essential for optimizing the performance and [[concepts/accessibility|accessibility]] of [[concepts/large-language-model-llm|large language models]]. They reduce [[concepts/code-size|model size]] and computational requirements while preserving or enhancing functionality.

### Key Points:
- **[[concepts/model-pruning|Model Size Reduction]]**: Techniques like [[concepts/model-compression]] and [[concepts/model-compression]] reduce the [[entities/storage|storage]] footprint of LLMs.
- **[[concepts/computational-efficiency|Computational Efficiency]]**: [[concepts/compression-algorithm|Compression methods]] improve [[concepts/computational-efficiency]] by lowering [[concepts/memory-usage|memory usage]] and [[concepts/computational-resources|compute]] overhead.
- **[[concepts/sparse-mixture-of-experts|Sparse Mixture of Experts]] (MoE) Optimization**: Leveraging sparse MoE architectures allows massive models to activate only a subset of parameters during [[concepts/ai-inference|inference]], drastically reducing [[concepts/memory-footprint|VRAM requirements]].
- **Runtime-Specific Compression**: Advanced runtimes like [[lab-notes/2026-10-07-Strata-Running-125B-Sparse-MoE-LLM-on-12GB-Consumer-GPUs|Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs]] enable running 125B [[concepts/parameter-models|parameter models]] on consumer GPUs (e.g., RTX 5070 with 12GB VRAM) by optimizing [[concepts/memory-management|memory management]] and expert routing.

### References
- [Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs](https://www.youtube.com/watch?v=4q_VlobZU0A)
