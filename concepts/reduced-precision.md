---
type: concept
domain: ai-agents
tags:
  - "quantization"
  - "llm-training"
  - "model-compression"
  - "low-precision"
  - "computational-cost"
  - "reasoning-efficiency"
aliases:
  - "Low-Precision Training"
  - "4-bit Quantization"
  - "Reduced Data Types"
  - "Thinking Efficiency"
summary: Reduced precision uses lower-precision data types, such as 4-bit or 8-bit, instead of standard 32-bit or 64-bit floating-point to reduce computational and memory costs in machine learning systems. Recent evaluations also highlight efficiency gains in reasoning steps without accuracy loss.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Reduced precision

Use of lower-[[concepts/accuracy|precision]] data types (e.g., 8-bit, 4-bit) instead of standard 32/64-bit floating-point to reduce computational/[[concepts/memory|memory]] costs in [[concepts/machine-learning|machine learning]] systems.

* **4-bit training evolution**: Enables direct training of [[concepts/large-language-model-llm|large language models]] (LLMs) at [[concepts/floating-point-numbers|4-bit floating-point]] (FP4) precision, reducing [[concepts/storage-bandwidth|memory bandwidth]] and computational requirements compared to traditional 16/32-bit training 4-bit
* **Cost reduction**: Training costs for state-of-the-art LLMs remain extremely high (e.g., [[concepts/gemini|Gemini]] Ultra training cost ~$191M in 2023, [[entities/gpt-4]] ~$78M; [[entities/sam-altman|Sam Altman]] claims higher) [[concepts/llm-training|LLM training]] costs
* **Key application**: 4-bit [[concepts/parameter-reduction|quantization]] addresses scalability challenges in [[concepts/large-language-model
* **Reasoning efficiency**: [[lab-notes/2026-07-09-ThinkingCap-Qwen3.6-27B-Evaluating-LLM-Reasoning-Efficie|ThinkingCap-Qwen3.6-27B: Evaluating LLM Reasoning Efficiency and Accuracy]] demonstrates that [[concepts/custom-llms|fine-tuned models]] like [[concepts/qwen-36-27b|Qwen3]].6-27B]] can achieve the same accuracy as [[concepts/base-models|base models]] while reducing "[[concepts/human-cognition|thinking]]" steps by 36%, offering a new dimension of computational cost reduction beyond parameter [[concepts/precision-reduction|quantization]].

## References
* [ThinkingCap-Qwen3.6-27B: Evaluating LLM Reasoning Efficiency and Accuracy](https://www.youtube.com/watch?v=ZTHVEsIEyas)
