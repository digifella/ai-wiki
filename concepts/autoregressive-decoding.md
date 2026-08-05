---
type: concept
domain: ai-agents
tags:
  - "llm-inference"
  - "autoregressive-models"
  - "token-generation"
  - "speculative-decoding"
  - "model-optimization"
  - "sequential-processing"
aliases:
  - "Sequential Token Prediction"
  - "Autoregressive Generation"
  - "Token-by-Token Decoding"
summary: Autoregressive decoding is a sequential text generation method in large language models where each token is predicted conditioned on previous tokens, creating a computational bottleneck addressed by optimization techniqu
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Autoregressive Decoding

**Autoregressive decoding** is the standard method for generating text in [[concepts/large-language-model]]s (LLMs), where [[concepts/tokens|tokens]] are predicted sequentially, one at a time, conditioned on all previously generated tokens. This sequential dependency creates a computational bottleneck, as each step requires a full [[concepts/inference|forward pass]] through the model.

## Core Mechanism
- **[[concepts/autoregressive-generation|Sequential Generation]]**: The model predicts the [[concepts/probability|probability]] distribution of the next token $x_t$ given the context $x_{<t}$.
- **Latency Constraint**: [[concepts/llm-inference-speed|Inference speed]] is limited by the time required to process each token individually, often referred to as "time-to-first-token" and "inter-token latency."
- **Common Strategies**: Includes Greedy Search, Beam Search, and Sampling methods (e.g., top-k, top-p).

## Optimization Techniques
To mitigate the latency of sequential generation, various acceleration methods have been developed:

- **[[concepts/speculative-decoding|Speculative Decoding]]**: Uses a smaller "[[concepts/draft|draft]]" model to propose multiple tokens, which are then verified in parallel by the larger [[concepts/target-model|target model]]. This reduces the number of forward passes required for the large model.
- **[[concepts/long-context-llms|KV Cache Optimization]]**: Techniques to manage the [[concepts/memory-management|memory overhead]] of [[concepts/storing|storing]] [[concepts/attention-mechanisms|attention]] states for long contexts.
- **[[concepts/parameter-reduction|Quantization]]**: Reducing [[concepts/accuracy|precision]] (e.g., INT8, FP4) to [[concepts/speed|speed]] up matrix multiplications.

## Recent Developments (2026)
- **[[concepts/deepseek-v4-pro|DSparK]]**: A novel [[concepts/speculative-inference|speculative decoding]] technique developed by [[concepts/deepseek-ai|DeepSeek]] and [[entities/peking-university|Peking University]].
	- Claims up to 85% acceleration in [[concepts/llm-inference|LLM inference]].
	- Focuses on [[concepts/lossless-acceleration|lossless acceleration]], maintaining output quality while significantly reducing [[concepts/computational-resources|compute]] time.
	- See detailed analysis in [[lab-notes/2026-06-29-DeepSeeks-DSparK-Lossless-LLM-Inference-Acceleration-via|DeepSeek's DSparK: Lossless LLM Inference Acceleration via Speculative Decoding]].

## References
- [DeepSeek's DSparK: Lossless LLM Inference Acceleration via Speculative Decoding](https://www.youtube.com/watch?v=eFgknPFK-g0)
