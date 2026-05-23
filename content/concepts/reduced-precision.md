---
type: concept
domain: ai-agents
summary: Reduced precision uses lower-precision data types, such as 4-bit or 8-bit, instead of standard 32-bit or 64-bit floating-point to reduce computational and memory costs in machine learning systems.
updated: 2026-05-23
group: model-efficiency-compression
---
# Reduced precision

Use of lower-precision data types (e.g., 8-bit, 4-bit) instead of standard 32/64-bit floating-point to reduce computational/[[concepts/memory|memory]] costs in [[concepts/machine-learning|machine learning]] systems.

* **4-bit [[concepts/training|training]] evolution**: Enables direct training of [[concepts/large-language-model-llm|large language models]] (LLMs) [[concepts/assistive-technology|at]] [[concepts/floating-point-numbers|4-bit floating-point]] (FP4) precision, reducing memory bandwidth and computational requirements compared to traditional 16/32-bit training 4-bit
* **[[concepts/cost|Cost]] reduction**: Training costs for state-of-the-[[concepts/art|art]] LLMs remain extremely high (e.g., [[concepts/gemini|Gemini]] Ultra training cost ~$191M in 2023, [[entities/gpt-4]] ~$78M; [[entities/sam-altman|Sam Altman]] claims higher) [[concepts/llm-training|LLM training]] costs
* **Key application**: 4-bit [[concepts/parameter-reduction|quantization]] addresses scalability challenges in [[concepts/large-language-models]] by making training feasible with reduced [[concepts/hardware|hardware]] resources
* **Trade-off**: Requires specialized techniques to maintain model [[concepts/accuracy|accuracy]] during training at low precision [[concepts/model-efficiency]]

2026 04 14 How does [[concepts/4bit-quantisation|4bit quantisation]] work
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]