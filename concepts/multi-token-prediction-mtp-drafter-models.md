---
type: concept
domain: ai-agents
tags:
  - "multi-token-prediction"
  - "speculative-decoding"
  - "llm-inference"
  - "model-acceleration"
  - "drafter-models"
  - "inference-optimization"
  - "llama.cpp"
aliases:
  - "MTP drafter models"
  - "Multi-token prediction drafters"
summary: MTP drafter models are auxiliary architectures used in speculative decoding pipelines to accelerate LLM inference by predicting multiple future tokens in parallel, recently optimized in llama.cpp for local inference speedups.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Multi-Token Prediction (MTP) Drafter Models

**[[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]] drafter models** are auxiliary architectures employed in [[concepts/speculative-decoding]] pipelines to accelerate [[concepts/large-language-model]] inference by predicting multiple future [[concepts/tokens|tokens]] in parallel.

## Mechanism
- **Parallel Proposal:** MTP drafters generate a trajectory of $k$ tokens ($t+1, \dots, t+k$) simultaneously in a single [[concepts/inference|forward pass]], contrasting with sequential Autoregressive Model generation.
- **[[concepts/verification|Verification]] [[concepts/loop|Loop]]:** The [[concepts/target-model|target model]] verifies the proposed sequence. Tokens are accepted in bulk if consistent with the target distribution; rejection occurs at the first divergence point.
- **[[concepts/compute|Compute]] Amortization:** Reduces the number of expensive target model calls proportional to the token acceptance rate, lowering latency while preserving output quality.

## Implementation & Ecosystem
- **[[concepts/inference-engine|Llama.cpp]] Integration:** Recent [[concepts/software-updates|updates]] to [[entities/llamacpp]] have [[concepts/native-support|native support]] for MTP, enabling significant throughput improvements for [[concepts/local-inference|local inference]] without requiring separate drafter models for some architectures.
- **[[concepts/performance-gains|Performance Gains]]:** Empirical testing indicates potential for up to 2x faster token generation speeds in supported configurations, leveraging efficient [[concepts/parallel-processing|parallel processing]] of token predictions.
- **Reference Analysis:** See [[lab-notes/2026-05-19-Llama.cpp-Multi-Token-Prediction-Faster-Local-LLM-Infere|Llama.cpp Multi-Token Prediction: Faster Local LLM Inference Explained]] for detailed breakdown of software implementation and [[concepts/performance-data-gathering|performance metrics]].
