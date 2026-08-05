---
type: concept
domain: ai-agents
tags:
  - "speculative-decoding"
  - "model-efficiency"
  - "inference-acceleration"
  - "neural-networks"
  - "text-generation"
  - "draft-model"
  - "deepseek"
aliases:
  - "Fast Model"
  - "Proposal Model"
  - "Speculative Draft Model"
summary: A Draft Model is a smaller neural network used in speculative decoding to propose token sequences for parallel verification by a larger target model, thereby reducing inference latency. Recent implementations like DeepSeek DSpark enhance this via specialized speed layers.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Draft Model

A **[[concepts/draft|Draft]] Model** (also known as a "fast model" or "proposal model") is a smaller, computationally cheaper [[concepts/neural-network|neural network]] used in conjunction with a larger **[[concepts/target-model|Target Model]]** to accelerate [[concepts/text-generation|text generation]]. This architecture is central to **[[concepts/speculative-inference|Speculative Decoding]]**, a technique that allows the system to generate multiple [[concepts/tokens|tokens]] in parallel using the draft model, which are then verified by the target model in a single [[concepts/inference|forward pass]].

## Core Mechanism
- **Proposal [[concepts/phase|Phase]]**: The draft model predicts a sequence of $k$ tokens based on the current context.
- **[[concepts/verification|Verification]] Phase**: The target model evaluates the entire sequence of proposed tokens simultaneously.
- **Acceptance/Rejection**: Tokens are accepted if the target model's [[concepts/probability|probability]] distribution aligns with the draft's predictions; otherwise, the sequence is rejected or partially accepted, and the target model generates the next token autoregressively.

## Recent Developments & Implementations
- **[[concepts/dspark-module|DeepSeek DSpark]]**: A specialized [[concepts/inference-optimization|inference acceleration]] framework introduced by [[concepts/deepseek-ai|DeepSeek]] that acts as a "[[concepts/speed|speed]] layer" for [[concepts/large-language-model-llm|Large Language Models]] (LLMs). It enhances [[concepts/llm-inference-acceleration|speculative decoding]] to significantly reduce latency, reportedly doubling [[concepts/llm-inference-speed|inference speed]] for models like [[concepts/qwen3-model|Qwen3]]. See [[lab-notes/2026-07-08-DeepSeek-DSpark-LLM-Inference-Acceleration-via-Enhanced|DeepSeek DSpark: LLM Inference Acceleration via Enhanced Speculative Decoding]] for detailed analysis.

## References
- [DeepSeek DSpark: LLM Inference Acceleration via Enhanced Speculative Decoding](https://www.youtube.com/watch?v=yvAHJZAf1xM)
