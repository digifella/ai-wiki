---
type: concept
domain: ai-agents
tags:
  - "LLM"
  - "Benchmark"
  - "Ternary-Bonsai"
  - "Qwen"
  - "Performance"
  - "bonsai-27b"
  - "qwen-comparison"
  - "quantization"
  - "benchmarking"
aliases:
  - "Ternary Bonsai"
  - "Bonsai 27B"
summary: "Ternary Bonsai 27B is a large language model architecture evaluated against Qwen 27B variants using Q4_1 and BF16 drafters to assess efficiency and accuracy trade-offs."
updated: 2026-07-22
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Ternary Bonsai 27B

**Ternary [[entities/bonsai-27b|Bonsai 27B]]** is a [[concepts/large-language-model|large language model]] architecture evaluated for performance against [[concepts/qwen-llm|Qwen]] 27B variants. Recent [[concepts/benchmark-testing|benchmarking]] highlights its behavior under different [[concepts/parameter-reduction|quantization]] and [[concepts/draft|draft]] configurations.

## Performance Benchmarking

Recent analysis compares [[concepts/local-llm|Ternary Bonsai]] 27B against the [[entities/qwen-36-27b|Qwen 3.6 27B]] MTP model in a local 16GB setup. Key findings include:

- **Drafting Configurations**: Evaluated using both [[concepts/q4-1|Q4_1]] (4-bit) and [[concepts/bf16|BF16]] (16-bit) [[concepts/drafters|drafters]] to assess efficiency and accuracy trade-offs.
- **Comparative Analysis**: Direct [[concepts/ai-performance-evaluation|performance metrics]] against [[concepts/qwen-36-27b-mtp|Qwen 3.6 27B MTP]].
- **Source Detail**: [[lab-notes/2026-07-22-Ternary-Bonsai-27B-vs.-Qwen-27B-LLM-Performance-Benchmar|Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary]]

## References

- [[entities/lukes-dev-lab|Luke's Dev Lab]]. [Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary](https://www.youtube.com/watch?v=83QRLhKueC8). 2026-07-22.
