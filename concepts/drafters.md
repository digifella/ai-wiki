---
type: concept
domain: ai-agents
tags:
  - "drafters"
  - "llm"
  - "benchmarking"
  - "ternary-bonsai"
  - "qwen"
  - "performance"
  - "speculative-decoding"
  - "llm-inference"
  - "model-efficiency"
aliases:
  - "auxiliary models"
  - "drifters"
summary: "Drafters are auxiliary models or mechanisms in speculative decoding that propose candidate tokens to accelerate inference speed while maintaining output quality."
updated: 2026-07-22
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Drafters

**Drafters** are auxiliary models or [[concepts/causes|mechanisms]] used in [[concepts/speculative-decoding]] to propose candidate [[concepts/tokens|tokens]] for a larger [[concepts/target-model|target model]], aiming to accelerate [[concepts/llm-inference-speed|inference speed]] while maintaining output quality.

## Key Implementations & Benchmarks

### Ternary Bonsai 27B vs. Qwen 27B
Recent analysis highlights the performance characteristics of [[concepts/ternary-bonsai-27b]] when configured with different drifter modes compared to [[concepts/qwen-36-27b-mtp]].

- **Configuration**: Tested using [[concepts/q4-1|Q4_1]] (4-bit) and [[concepts/bf16|BF16]] (16-bit) drifter modes.
- **Comparison**: Evaluated against [[entities/qwen-36-27b|Qwen 3.6 27B]] MTP in a 16GB [[concepts/local-ai-configuration|local LLM setup]].
- **Analysis**: Detailed [[concepts/benchmark-testing|benchmarking]] summary available at [[lab-notes/2026-07-22-Ternary-Bonsai-27B-vs.-Qwen-27B-LLM-Performance-Benchmar|Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary]].
- **Source**: [[entities/lukes-dev-lab|Luke's Dev Lab]] video analysis [[Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary](https://www.youtube.com/watch?v=83QRLhKueC8)].

## Related Concepts
- [[concepts/speculative-decoding]]
- [[concepts/model-compression]]
- [[concepts/local-llm]]
