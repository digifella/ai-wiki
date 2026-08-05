---
type: concept
domain: ai-agents
tags:
  - "generative-models"
  - "large-language-models"
  - "sequential-generation"
  - "transformers"
  - "autoregressive"
  - "next-token-prediction"
  - "speculative-decoding"
  - "inference-optimization"
aliases:
  - "AR Models"
  - "Sequential Generative Models"
  - "Autoregressive Generative Models"
  - "Token-by-Token Generation"
summary: Autoregressive models are generative architectures that produce sequences incrementally by conditioning each prediction on previously generated values. Recent optimizations like speculative decoding address inherent latency bottlenecks.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Autoregressive Models

**Autoregressive models** are a class of [[concepts/tts-model|generative models]] that generate sequences data point by data point, where each [[concepts/user-attention-prediction|prediction]] is conditioned on previously generated values. They are the foundational architecture behind most modern [[concepts/large-language-model]]s (LLMs).

## Core Mechanics

- **[[concepts/autoregressive-generation|Sequential Generation]]**: Predicts $x_t$ given $x_{1:t-1}$.
- **Factorization**: Joint [[concepts/probability|probability]] $P(x) = \prod_{t=1}^{T} P(x_t | x_{<t})$.
- **Training [[concepts/purpose|Objective]]**: Typically maximize likelihood via [[concepts/random-token-generation|next-token prediction]].
- **[[concepts/inference|Inference]] Bottleneck**: Strict sequential dependency limits parallelization during generation, creating latency challenges addressed by techniques like [[concepts/speculative-decoding|speculative decoding]].

## Key Architectures

- **Transformer**: Dominant architecture for NLP; uses [[concepts/self-attention|self-attention]] to capture long-range dependencies in autoregressive settings.
- **Recurrent [[concepts/neural-network|Neural Network]] (RNN)/Long [[concepts/short-term-memory|Short-Term Memory]] (LSTM)**: Predecessors to [[concepts/transformers|Transformers]], utilizing hidden states to maintain context.

## Inference Optimization & Recent Developments

- **[[concepts/llm-inference-acceleration|Speculative Decoding]]**: A technique to accelerate autoregressive inference by using a smaller "[[concepts/draft|draft]]" model to propose multiple [[concepts/tokens|tokens]], which are then verified in parallel by the larger [[concepts/target-model|target model]].
- **[[concepts/dspark-module|DeepSeek DSpark]]**: A specific implementation of enhanced [[concepts/lossless-acceleration|speculative decoding]] introduced by [[concepts/deepseek-ai|DeepSeek]].
	- Acts as a [[concepts/speed|speed]] layer for LLMs, significantly accelerating inference without altering [[concepts/model-weights|model weights]].
	- Demonstrated ability to double [[concepts/llm-inference-speed|inference speed]] for models like [[concepts/qwen3-model|Qwen3]].
	- See [[lab-notes/2026-07-08-DeepSeek-DSpark-LLM-Inference-Acceleration-via-Enhanced|DeepSeek DSpark: LLM Inference Acceleration via Enhanced Speculative Decoding]] for detailed analysis.

## References

- [DeepSeek DSpark: LLM Inference Acceleration via Enhanced Speculative Decoding](https://www.youtube.com/watch?v=yvAHJZAf1xM)
