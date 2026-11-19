---
type: entity
tags:
  - "AI"
  - "LLM"
  - "Inference"
  - "MoE"
  - "Hardware"
  - "Strata"
  - "llm-runtime"
  - "mixture-of-experts"
  - "quantization"
  - "consumer-hardware"
  - "strata"
  - "inference"
  - "open-source"
  - "vram-optimization"
summary: Strata is an open-source runtime that enables efficient execution of large language models on consumer-grade hardware by leveraging quantization and sparse Mixture of Experts architectures.
updated: 2026-10-11
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-06T22:06:10+00:00" }
---
# Strata

**[[concepts/large-language-model|Strata]]** is an [[concepts/open-source|open-source]] runtime designed to enable the efficient execution of [[concepts/demystifying-llms|large language models]] (LLMs) on [[concepts/consumer-grade-hardware|consumer-grade hardware]]. It leverages advanced [[concepts/precision-reduction|quantization]] and [[concepts/sparse-mixture-of-experts|sparse Mixture of Experts]] (MoE) architectures to bypass traditional [[concepts/vram|VRAM]] limitations.

## Key Capabilities

*   **125B Model on 12GB VRAM:** Successfully runs the [[entities/qwen38-flash-next|Qwen3.8-Flash-Next]] (125 billion parameters) on an RTX 5070 GPU with only 12GB of VRAM.
*   **Sparse [[concepts/vram-optimization|MoE Optimization]]:** Utilizes sparse [[concepts/mixture-of-experts|Mixture of Experts]] to activate only a subset of parameters during [[concepts/ai-inference|inference]], drastically reducing [[concepts/4gb-memory|memory footprint]].
*   **[[concepts/consumer-hardware|Consumer Hardware]] Support:** Makes high-capacity AI accessible without requiring enterprise-grade A100/H100 clusters.

## Technical Details

*   **Architecture:** Sparse Mixture of Experts (MoE).
*   **Target Hardware:** Consumer GPUs (e.g., RTX 5070).
*   **Primary Use Case:** [[concepts/edge-deployment|Local inference]] of massive models on [[concepts/limited-resources|limited resources]].

## References

*   [[lab-notes/2026-10-07-Strata-Running-125B-Sparse-MoE-LLM-on-12GB-Consumer-GPUs|Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs]]
*   [Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs](https://www.youtube.com/watch?v=4q_VlobZU0A)
