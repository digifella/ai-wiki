---
type: concept
domain: undecided
updated: 2026-05-23
group: needs-review
---
# Speculative decoding

**[[concepts/speculative-inference|Speculative decoding]]** is an inference acceleration technique for Autoregressive generation [[concepts/models|models]] that reduces latency by using a smaller Draft model to propose [[concepts/tokens|tokens]], verified in parallel by a larger Target model.

## Core Mechanism
- **Drafting:** A computationally cheap model generates a sequence of $k$ candidate tokens.
- **Parallel [[concepts/verification|Verification]]:** The target model processes all candidates in a single [[concepts/inference|forward pass]], evaluating likelihoods simultaneously.
- **Acceptance/Rejection:** Tokens are accepted if the target [[concepts/distribution|distribution]] matches sufficiently; rejection triggers sampling from the target [[concepts/assistive-technology|at]] the first discrepancy.
- **[[concepts/compute|Compute]] Trade-off:** Minimizes expensive target model calls, improving throughput without compromising [[concepts/output|output]] quality.

## Key Variants
- **[[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]]:** Drafters emit multiple tokens per step, increasing acceptance [[entities/windows|windows]] and speedup factors.
- **Self-speculative decoding:** Utilizes internal states or cached predictions of the target model for drafting.
- **Early-exit speculative decoding:** Uses intermediate layers of the target model to approximate drafting.
- **Stacked/Ngram Hybrid:** Combines MTP with n-gram lookups to maximize draft acceptance rates, particularly effective in local [[concepts/inference-engines|inference engines]] like [[entities/llamacpp]].

## Implementations & Resources
- [[lab-notes/2026-05-06-Google-Gemma-4-MTP-Drafters-Accelerating-Inference|Google Gemma-4 MTP Drafters]]
- [[lab-notes/2026-05-20-MTP-Ngram-Stacked-Speculative-Decoding-in-Llama.cpp-for|MTP + Ngram Stacked Speculative Decoding in Llama.cpp for LLM Inference]]: Demonstrates stacking MTP with n-gram predictions in [[entities/llamacpp]] to achieve significant token-per-second improvements (e.g., 56 tok/s on [[concepts/qwen3-model|Qwen3]].6 27B).
