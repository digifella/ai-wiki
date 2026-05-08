---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "qwen-model"
  - "quantization"
  - "model-performance"
  - "memory-optimization"
  - "local-inference"
aliases:
  - "Qwen 3.6-35B Comparison"
  - "Full Precision vs Quantized Trade-off"
summary: A comparison of full precision versus quantized performance and memory trade-offs for the Qwen 3.6-35B model.
updated: 2026-05-01
---
# Vllm

Vllm is an [[concepts/inference-engine|inference engine]] designed to optimize the [[concepts/deployment|deployment]] and serving of [[concepts/large-language-model-llm|large language models]] with a focus on throughput and [[concepts/memory-efficiency|memory efficiency]]. It implements key optimizations including paged [[concepts/attention-mechanisms|attention]], which reduces [[concepts/memory|memory]] fragmentation by managing key-value cache allocation in fixed-size pages similar to virtual memory systems. This architectural approach enables higher batch sizes and more efficient GPU utilization compared to traditional [[concepts/inference|inference]] frameworks.

## Performance and Quantization Trade-offs

When deploying large models like [[concepts/qwen3-model|Qwen 3.6]]-35B locally, practitioners must balance between [[concepts/full-precision|full precision]] and quantized versions. Full precision models (typically FP32 or FP16) preserve maximum model [[concepts/accuracy|accuracy]] but require substantially more VRAM, making them impractical on consumer [[concepts/hardware|hardware]]. Quantized versions, such as those prepared through tools like [[entities/ollama|Ollama]], reduce [[concepts/code-size|model size]] by representing [[concepts/weights|weights]] with lower precision (INT8, INT4, or other formats), significantly decreasing memory requirements while introducing minor accuracy trade-offs that are often negligible for many [[concepts/software|applications]].

For the Qwen 3.6-35B model specifically, full precision variants typically require 70+ GB of VRAM, while quantized versions can run on 8-16GB depending on quantization level. This makes quantized inference the practical choice for [[concepts/local-deployment|local deployment]] on consumer GPUs, despite marginal differences in output quality. Vllm's efficiency improvements help narrow performance gaps between quantized and full precision inference by optimizing how [[concepts/compute|compute]] resources are utilized.

## Source Notes

- 2026-04-24: [[lab-notes/2026-04-24-DeepSeek-V4-Next-Gen-Open-Source-LLM-Performance-and-Efficiency-Analysis|DeepSeek V4: Next-Gen Open-Source LLM Performance and Efficiency Analysis]] · [▶ source](https://www.youtube.com/watch?v=u3f35QQSLqE)