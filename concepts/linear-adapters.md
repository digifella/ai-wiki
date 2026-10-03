---
type: concept
domain: ai-agents
tags:
  - "linear-adapters"
  - "embedding-models"
  - "parameter-efficient-fine-tuning"
  - "rag-optimization"
  - "model-compression"
  - "domain-specific-optimization"
aliases:
  - "Linear Adapter Technique"
  - "PEFT for Embeddings"
  - "Adapter-based RAG Optimization"
summary: Linear adapters are lightweight, trainable layers added to existing embedding models to improve retrieval accuracy in RAG pipelines without requiring full retraining or re-embedding of knowledge bases.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Linear Adapters

A lightweight technique for optimizing [[concepts/embedding-models|embedding models]] in [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) pipelines without full retraining or re-embedding.

**Key points:**
- Solves domain-specific optimization challenges where base embedding models underperform in specialized contexts
- Achieves significant [[concepts/document-retrieval|retrieval]] accuracy gains **cost-effectively** and **efficiently**
- Eliminates need for:
  - Full retraining of large embedding models
  - Re-embedding of entire [[concepts/knowledge-bases|knowledge bases]]
- Uses **linear adapters** as parameter-efficient [[concepts/software-updates|updates]] (small, trainable layers added to existing models)

**Source:** 2026 04 14 [[concepts/domain-specific-fine-tuning|Fine Tuning RAG]] [[entities/adam-lucek|Adam Lucek]]
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: How to get TACK SHARP photos with any camera!
