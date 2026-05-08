---
type: concept
domain: ai-agents
tags:
  - "rag"
  - "embedding"
  - "fine-tuning"
  - "linear-adapters"
updated: 2026-04-15
group: model-efficiency-compression
---
# Linear Adapters

A lightweight technique for optimizing [[concepts/embedding-models|embedding models]] in [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) pipelines without full retraining or re-embedding.

**Key points:**
- Solves domain-specific optimization challenges where base embedding models underperform in specialized contexts
- Achieves significant retrieval [[concepts/accuracy|accuracy]] gains **cost-effectively** and **efficiently**
- Eliminates need for:
  - Full retraining of large embedding models
  - Re-embedding of entire [[concepts/knowledge-bases|knowledge bases]]
- Uses **linear adapters** as parameter-efficient updates (small, trainable layers added to existing models)

**Source:** 2026 04 14 [[concepts/domain-specific-fine-tuning|Fine Tuning RAG]] [[entities/adam-lucek|Adam Lucek]]

## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: How to get TACK SHARP photos with any camera!