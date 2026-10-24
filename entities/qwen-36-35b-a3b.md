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
  - "quantization"
  - "gguf"
  - "low-vram"
  - "coding-agent"
  - "mtp"
  - "fablevibes"
  - "benchmark"
aliases:
  - "Qwen 3.6 35B-A3B"
  - "Qwen-35B-A3B"
  - "Qwopus 3.6-35B-A3B-Coder"
  - "FableVibes 14B"
summary: The Qwen 3.6 35B-A3B is a 35-billion parameter mixture-of-experts language model that activates approximately 3 billion parameters per token. It supports local inference on low-memory hardware via GGUF quantization and serves as the base for specialized coding variants like Qwopus, which utilize MTP for agentic self-correction.
updated: 2026-07-30
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-30" }
---
# Qwen 3.6 35B-A3B

## Overview
- 35B-parameter [[entities/mixture-of-experts]] [[concepts/statistical-language-modeling|language model]] from the [[entities/qwen|Qwen]] Series
- A3B routing variant activates ~3B parameters per token, maximizing throughput vs. [[concepts/memory|memory]] tradeoffs
- Architecture: Sparse MoE with dense [[concepts/attention-mechanisms|attention]], optimized expert gating, and instruction-tuned reasoning/code capabilities
- Training: Multilingual corpus, heavy code synthesis, aligned for complex [[concepts/tool-use-automation|tool-use]] and long-context [[concepts/storing|retention]]

## Specialized Variants: Qwopus Coder
- **[[entities/qwopus-36-35b-a3b-coder|Qwopus 3.6-35B-A3B-Coder]]**: A specialized derivative developed by Jackrong, built on the [[concepts/qwen-36-35b-a3b|Qwen 3.6-35B]] A3B base
- **Agentic Self-Correction**: Features "thinking-off" capabilities for improved [[concepts/code-generation|code generation]] and [[concepts/debugging|debugging]] workflows

## FableVibes 14B Variant
- **[[concepts/large-language-model|FableVibes 14B]]**: A fine-tuned variant of the [[concepts/qwen-llm|Qwen]] 3.6-35B A3B architecture, optimized for specific [[concepts/edge-deployment|local inference]] benchmarks
- **Performance Context**: Evaluated against the base 35B model in a 16GB [[concepts/vram|VRAM]] setup to assess intelligence and performance trade-offs in constrained environments
- **Analysis**: See [[lab-notes/2026-07-30-FableVibes-14B-Qwen-vs.-35B-Base-Local-LLM-Performance-a|FableVibes 14B (Qwen) vs. 35B Base: Local LLM Performance and Intelligence]] for detailed [[concepts/benchmark-testing|benchmarking]] results by [[entities/lukes-dev-lab|Luke's Dev Lab]]
- **Source**: [FableVibes 14B (Qwen) vs. 35B Base: Local LLM Performance and Intelligence](https://www.youtube.com/watch?v=DBEd5dpxaNQ)
