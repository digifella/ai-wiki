---
type: concept
domain: ai-agents
tags:
  - "token-prediction"
  - "inference-optimization"
  - "speculative-decoding"
  - "llm-efficiency"
  - "parallel-processing"
  - "model-acceleration"
aliases:
  - "MTP"
  - "multi-token inference"
  - "parallel token prediction"
summary: Multi-Token Prediction is an LLM inference technique that predicts multiple future tokens simultaneously in a single forward pass, reducing latency through parallel processing and verification.
updated: 2026-05-23
group: model-efficiency-compression
---
# Multi-Token Prediction (MTP)

**Multi-Token Prediction (MTP)** is a technique in [[concepts/large-language-model]] (LLM) inference where the model predicts multiple future [[concepts/tokens|tokens]] simultaneously rather than autoregressively one-by-one. This approach reduces latency by allowing [[concepts/parallel-processing|parallel processing]] of potential next tokens, often integrated with [[concepts/speculative-decoding]] to verify these predictions efficiently.

## Key Characteristics
- **Parallelism**: Predicts a sequence of tokens in a single [[concepts/inference|forward pass]].
- **[[concepts/verification|Verification]]**: Requires a target model to verify the proposed sequence, accepting or rejecting tokens based on probability thresholds.
- **Efficiency**: Significantly boosts throughput (tokens/second) when the acceptance rate is high.

## Integration with Speculative Decoding
MTP is frequently combined with other [[concepts/speculative-inference|speculative decoding]] strategies to maximize [[concepts/speed|inference speed]]:
- **Ngram Stacking**: Combines MTP with simple N-gram lookups to quickly propose likely token sequences based on historical patterns.
- **[[concepts/adoption|Implementation]]**: Tools like [[entities/llamacpp]] support stacking these methods to leverage both neural prediction and heuristic speedups.

## Related Resources
- [[lab-notes/2026-05-20-MTP-Ngram-Stacked-Speculative-Decoding-in-Llama.cpp-for|MTP + Ngram Stacked Speculative Decoding in Llama.cpp for LLM Inference]]: Case study demonstrating [[concepts/qwen3-model|Qwen3]].6 27B achieving 56 tok/s locally via stacked MTP and N-gram decoding.
