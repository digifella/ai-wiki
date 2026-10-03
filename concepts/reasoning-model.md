---
type: concept
domain: ai-agents
tags:
  - "reasoning-models"
  - "chain-of-thought"
  - "quantization"
  - "local-llm"
  - "ternary-bonsai"
aliases:
  - "Reasoning LLM"
  - "CoT Model"
summary: Reasoning models are large language models optimized for logical deduction and multi-step problem solving, with recent advances like Ternary Bonsai 2 demonstrating high performance on low VRAM hardware via extreme quanti
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-21T20:47:57+00:00" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Reasoning Model

A class of [[concepts/large-language-models|large language models]] explicitly optimized for complex [[concepts/reasoning|logical deduction]], chain-of-thought processing, and multi-step [[concepts/problem-solving-skills|problem solving]].

## Key Characteristics
- **Chain-of-Thought (CoT):** Internalizes [[concepts/intermediate-reasoning-steps|intermediate reasoning steps]] before generating final output.
- **High Parameter Efficiency:** Often utilizes advanced quantization or architectural innovations to maintain reasoning fidelity with fewer resources.
- **Latency vs. Accuracy Trade-off:** Balances computational cost with the depth of logical analysis required.

## Recent Developments: Ternary Bonsai 2
Significant progress in [[concepts/extreme-quantization|extreme quantization]] for reasoning models has been demonstrated by [[concepts/system-one-model|Ternary Bonsai 2]], a 27B-class model from [[entities/prism-ml|Prism ML]].

- **Architecture:** Utilizes [[concepts/ternary-transformer-weights|ternary transformer weights]] to achieve [[concepts/1-bit-quantization|extreme quantization]] (1-bit and 2-bit).
- **Performance:** Evaluated for performance, [[concepts/memory|memory]] usage, and reasoning capabilities in local LLM setups.
- **Hardware Requirements:** Demonstrated viability on 16GB VRAM configurations, making high-capacity reasoning models more accessible.
- **Evaluation:** Comprehensive testing covers [[entities/gguf]] format compatibility and precision retention under low-bit constraints.

For detailed benchmarks and evaluation metrics, see [[lab-notes/2026-09-22-Ternary-Bonsai-2-27B-GGUF-1-bit-2-bit-Performance-Memory|Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation]].

## Related Concepts
- Quantization
- Chain-of-Thought Prompting
- Local LLM
- [[entities/gguf]]

## References
- [[entities/lukes-dev-lab|Luke's Dev Lab]]. [Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation](https://www.youtube.com/watch?v=ZzLHGHMXkEw).
