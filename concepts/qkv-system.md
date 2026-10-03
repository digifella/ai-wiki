---
type: concept
domain: ai-agents
tags:
  - "ai/transformer"
  - "ai/attention"
  - "ai/qkv"
  - "machine-learning"
  - "neural-architecture"
  - "3blue1brown"
  - "transformer-architecture"
  - "attention-mechanism"
  - "query-key-value"
  - "linear-projection"
aliases:
  - "QKV mechanism"
  - "Query-Key-Value mechanism"
summary: The QKV system uses linear projections to generate Query, Key, and Value vectors for computing attention within Transformer architectures.
updated: 2026-07-12
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# QKV System

**QKV System** refers to the linear projection mechanism generating Query, Key, and Value vectors, which constitute the core computation within the Scaled Dot-Product [[concepts/attention-mechanisms|Attention]] mechanism of [[concepts/transformer-architectures|Transformer architectures]]. This system enables the model to [[concepts/compute|compute]] dynamic [[concepts/contextual-embeddings]] by allowing each token to attend to relevant information from other [[concepts/tokens|tokens]].

## Mechanics
- **Projections:** Input [[concepts/dense-vectors|embeddings]] are transformed via learned weight matrices ($W_Q$, $W_K$, $W_V$) into Query, Key, and Value subspaces.
- **[[concepts/attention|Attention]] Computation:** Similarity scores between $Q$ and $K$ determine attention [[concepts/weights|weights]]; these [[concepts/parameters|weights]] are applied to $V$ to aggregate information.
- **Contextualization:** The weighted sum of $V$ vectors produces the output representation, embedding global context into each token position.

## Resources & Insights
- [[lab-notes/2026-05-06-Transformer-Attention-Mechanism-Explained-Contextual-Emb|Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System]]
  - Based on 3Blue1Brown video "Attention in [[concepts/transformers|transformers]], step-by-step" (Deep [[concepts/learning|Learning]] Chapter 6).
  - Provides visual/geometric intuition for how QKV matrices interact to form attention.
  - Identifies QKV as the foundational technology enabling [[concepts/large-language-model]] capabilities and contextual [[concepts/reasoning|reasoning]].
  - Video URL: watch?v=eMlx5fFNoYc
- Related: [[concepts/self-attention]], [[concepts/multi-head-attention|Multi-Head Attention]], Linear Projection.
