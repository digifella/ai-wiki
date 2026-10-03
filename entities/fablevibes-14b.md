---
type: entity
tags:
  - "LLM"
  - "Qwen"
  - "FableVibes"
  - "Benchmark"
  - "Local-LLM"
  - "quantization"
aliases:
  - "FableVibes 14B Qwen"
  - "Qwen 3.6 14B A3B"
  - "FableVibes 14B"
summary: "FableVibes 14B is a fine-tuned, quantized variant of the Qwen 3.6-35B A3B architecture optimized for local deployment on 16GB VRAM hardware."
updated: 2026-07-31
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-31" }
---
# FableVibes 14B

**[[concepts/large-language-model|FableVibes 14B]]** is a fine-tuned variant of the [[concepts/qwen3-model|Qwen 3.6]] architecture, specifically optimized for [[concepts/local-control|local deployment]] on 16GB [[concepts/vram|VRAM]] setups. Despite the "14B" nomenclature, it is derived from the larger [[concepts/qwen-36-35b-a3b|Qwen 3.6-35B]] A3B [[concepts/pre-trained-model|base model]], leveraging advanced [[concepts/parameter-reduction|quantization]] and architectural [[concepts/adjustments|adjustments]] to maintain [[entities/high-performance|high performance]] within constrained hardware limits.

## Key Characteristics
- **Architecture:** Based on Qwen 3.6-35B A3B, adapted for [[concepts/context-efficiency|efficient inference]].
- **Target Hardware:** Designed for 16GB [[concepts/local-llm|Local LLM]] setups.
- **Performance Profile:** Benchmarked against the original 35B Base model to evaluate intelligence [[concepts/storing|retention]] vs. [[concepts/model-efficiency|resource efficiency]].
- **Development Context:** Evaluated and popularized by [[entities/lukes-dev-lab]] for community testing.

## Benchmarks & Analysis
Detailed [[concepts/ai-performance-evaluation|performance metrics]] and intelligence comparisons between the [[concepts/sufficient-parameters|FableVibes 14B]] and the standard 35B Base are documented in the following analysis:
- [[lab-notes/2026-07-30-FableVibes-14B-Qwen-vs.-35B-Base-Local-LLM-Performance-a|FableVibes 14B (Qwen) vs. 35B Base: Local LLM Performance and Intelligence]]

## References
- [[entities/lukes-dev-lab|Luke's Dev Lab]]. "[[concepts/qwen3-model|Qwen 3.6]] 14B A3B [[concepts/local-inference|FableVibes]] benchmarked and tested vs Base [[entities/qwen-35b|Qwen 35B]] - 16GB [[concepts/local-ai-configuration|Local LLM setup]]." [[FableVibes 14B (Qwen) vs. 35B Base: Local LLM Performance and Intelligence](https://www.youtube.com/watch?v=DBEd5dpxaNQ)]. 2026-07-30.
