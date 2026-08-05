---
type: concept
domain: ai-agents
tags:
  - "llm-evaluation"
  - "factual-correctness"
  - "logical-consistency"
  - "instruction-following"
  - "answer-accuracy"
aliases:
  - "Output Fidelity"
  - "Response Correctness"
  - "LLM Accuracy Metric"
summary: Answer Accuracy measures the degree to which an LLM's output aligns with factual truth, logical validity, and specific prompt constraints.
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Answer Accuracy

**[[concepts/solution|Answer]] Accuracy** refers to the degree to which a [[concepts/large-language-model|Large Language Model]]'s (LLM) output corresponds to factual truth, logical validity, or the specific constraints of a prompt. It is a primary metric in LLM Evaluation, often balanced against [[concepts/reasoning-efficiency]] and [[concepts/hallucination]] rates.

## Key Dimensions
- **Factual [[concepts/accuracy|Correctness]]**: Alignment with external ground truth.
- **[[concepts/logical-consistency|Logical Consistency]]**: Internal coherence of [[concepts/deep-reasoning|multi-step reasoning]].
- **[[concepts/instruction-following|Instruction Adherence]]**: Precision in following format or constraint requirements.

## Recent Evaluations & Benchmarks

### ThinkingCap-Qwen3.6-27B
Recent analysis of the **[[concepts/qwen-36-27b|ThinkingCap-Qwen3.6-27B]]** model (a fine-tune by [[entities/bottlecap-ai|BottleCap AI]]) highlights a significant optimization in the trade-off between [[concepts/reasoning|reasoning]] depth and output fidelity.

- **Performance Profile**: The model maintains parity with the base [[concepts/qwen3-model|Qwen 3.6]] in terms of Answer Accuracy.
- **Efficiency Gain**: Achieves a **36% reduction** in "[[concepts/human-cognition|thinking]]" tokens/computation while preserving accuracy levels.
- **Implication**: Demonstrates that aggressive pruning of chain-of-[[concepts/thought-processes|thought processes]] does not necessarily degrade final answer quality, suggesting opportunities for cost-effective [[concepts/inference|inference]] without sacrificing [[concepts/software-reliability|reliability]].

See detailed breakdown in [[lab-notes/2026-07-09-ThinkingCap-Qwen3.6-27B-Evaluating-LLM-Reasoning-Efficie|ThinkingCap-Qwen3.6-27B: Evaluating LLM Reasoning Efficiency and Accuracy]].

## References
- [ThinkingCap-Qwen3.6-27B: Evaluating LLM Reasoning Efficiency and Accuracy](https://www.youtube.com/watch?v=ZTHVEsIEyas) ([[entities/fahd-mirza|Fahd Mirza]], 2026-07-09)
