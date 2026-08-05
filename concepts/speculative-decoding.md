---
type: concept
domain: ai-agents
tags:
  - "speculative-decoding"
  - "llm-inference"
  - "drafting-models"
  - "token-verification"
  - "multi-token-prediction"
  - "deepseek"
  - "dspark"
  - "poolside"
  - "laguna-s-2.1"
  - "moe"
  - "local-inference"
aliases:
  - "Speculative Inference"
  - "Draft and Verify"
  - "Assisted Decoding"
summary: Speculative decoding is an inference acceleration technique for autoregressive models that reduces latency by using a smaller draft model to propose tokens which are verified in parallel by a larger target model. Recent implementations like DSparK aim for lossless acceleration.
updated: 2026-07-31
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-31" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Speculative decoding

**[[concepts/speculative-inference|Speculative decoding]]** is an [[concepts/inference-optimization|inference acceleration]] technique for [[concepts/autoregressive-generation|Autoregressive generation]] models that reduces latency by using a smaller [[concepts/draft|Draft]] model to propose [[concepts/tokens|tokens]], verified in parallel by a larger [[concepts/target-model|Target model]].

## Core Mechanism
- **Drafting:** A computationally cheap model generates a sequence of $k$ candidate tokens.
- **Parallel [[concepts/verification|Verification]]:** The target model processes all candidates in a single [[concepts/inference|forward pass]], evaluating likelihoods simultaneously.
- **Acceptance/Rejection:** Tokens are accepted if the target distribution matches sufficiently; rejection triggers sampling from the target at the first discrepancy.
- **[[concepts/computational-efficiency|Computational Efficiency]]:** Reduces total FLOPs per token by leveraging parallel verification, though overhead depends on draft accuracy.

## Related Implementations & Models
- **[[concepts/deepseek-v4-pro|DSparK]]:** Recent implementation aiming for [[concepts/lossless-acceleration|lossless acceleration]] via [[concepts/llm-inference-acceleration|speculative decoding]] [[concepts/dspark|DSparK]].
- **Poolside's Laguna S 2.1:** An 118B parameter [[concepts/mixture-of-experts|Mixture-of-Experts (MoE)]] [[concepts/agentic-ai|agentic coding]] model optimized for local hardware. Its architecture and efficiency characteristics are relevant to the deployment of large-scale [[concepts/target-model|Target models]] in speculative decoding workflows. See [[lab-notes/2026-07-31-Poolsides-Laguna-S-2.1-Efficient-Open-Source-Agentic-Cod|Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware]].

## References
- [Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware](https://www.youtube.com/watch?v=H_Lbe69XO_8)
