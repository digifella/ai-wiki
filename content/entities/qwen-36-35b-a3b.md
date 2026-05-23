---
type: entity
tags:
  - "ai"
  - "llm"
  - "moe"
  - "qwen"
  - "local-inference"
  - "llama-cpp"
  - "vram-optimization"
updated: 2026-05-23
---
# Qwen 3.6 35B-A3B

## Overview
- 35B-parameter [[entities/mixture-of-experts]] [[concepts/statistical-language-modeling|language model]] from the [[entities/qwen|Qwen]] Series
- A3B routing variant activates ~3B [[concepts/parameters|parameters]] per token, maximizing throughput vs. [[concepts/memory|memory]] tradeoffs
- [[concepts/architecture|Architecture]]: Sparse MoE with dense [[concepts/attention-mechanisms|attention]], optimized expert gating, and instruction-tuned reasoning/code [[concepts/capabilities|capabilities]]
- [[concepts/training|Training]]: Multilingual corpus, heavy [[concepts/code|code]] synthesis, aligned for complex [[concepts/tool-use-automation|tool-use]] and long-context retention

## Local Deployment & Performance
- Validated [[concepts/inference|inference]] on 6GB [[concepts/vram]] constraints via [[entities/llamacpp]] [[concepts/gguf|GGUF]] pipelines
- [[lab-notes/2026-05-10-Achieving-Fast-35B-MoE-AI-Model-Performance-on-6GB-VRAM|Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp]] documents:
  - Successful execution on 8-year-old consumer GPU [[concepts/hardware|hardware]]
  - [[concepts/q4-k-m|Q4_K_M]] / Q5_K_S [[concepts/parameter-reduction|quantization]] strategies reducing active memory footprint while preserving routing fidelity
  - Hybrid CPU/GPU offloading and KV cache paging to mitigate OOM during context expansion
  - Interactive token latency achievable through thread scheduling and [[concepts/compute|compute]] graph optimization
- Requires strict [[concepts/memory-management]] and [[concepts/inference-optimization]] trimming for sequences >16K [[concepts/tokens|tokens]]
- Compatible with [[entities/ollama]], ExLlamaV2, [[entities/vllm]], and TensorRT-LLM with architecture-specific patches

## Technical Specifications
- [[concepts/total-parameters|Total Parameters]]: 35B | [[concepts/active-parameters|Active Parameters]]: ~3B/token
- [[concepts/context-window|Context Window]]: 32K–128K ([[concepts/precision-reduction|quantization]] & [[concepts/ram|RAM]] dependent)
- Recommended [[concepts/quantisation|Quantization]]: GGUF Q4_K_M / Q5_K_S for 6–8GB targets; Q3_K_S for <6GB
- Inference Frameworks: [[entities/llamacpp]], [[entities/ollama]], MLC LLM
- [[concepts/license|License]]: [[concepts/apache-2.0-license|Apache 2.0]] / Qwen Community License

## Related Concepts
- [[concepts/mixture-of-experts-architecture|MoE Architecture]] efficiency tradeoffs
- [[concepts/vram-optimization]] techniques for sparse activation [[concepts/models|models]]
- [[concepts/gguf-format]] [[concepts/parameter-reduction|quantization]] [[concepts/open-standards|standards]]
- KV Cache Management for long-context [[concepts/local-inference|local inference]]
