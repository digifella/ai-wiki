---
type: concept
domain: science-physics-research
group: scientific-modelling-discovery
tags:
  - "embeddings"
  - "rag"
  - "matryoshka-embeddings"
  - "fine-tuning"
  - "dimensionality-reduction"
aliases:
  - "Matryoshka embeddings"
  - "embedding dimension reduction"
summary: A technique for fine-tuning RAG embeddings using Matryoshka embeddings.
updated: 2026-07-14
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Dimensional Reduction

Dimensional reduction is an optimization technique used in retrieval-augmented generation (RAG) systems to fine-tune [[concepts/dense-vectors|embeddings]] without requiring multiple separate models. The method allows a single [[concepts/embedding-models|embedding model]] to generate effective embeddings at various output dimensions, from full-size representations down to significantly smaller versions. This approach reduces computational overhead and storage requirements while maintaining semantic quality across different dimensionality levels.

## Matryoshka Embeddings

The technique relies on Matryoshka embeddings, a training methodology where models learn to produce nested, progressively smaller embeddings that preserve meaning at each level. Similar to Russian nesting dolls, these embeddings can be truncated at different dimensions without requiring retraining. An embedding trained with this approach can be effectively used at its full size or truncated to any smaller dimension, with each level maintaining reasonable semantic fidelity for retrieval tasks.

## Practical Applications

In RAG systems, dimensional reduction enables flexible trade-offs between retrieval quality and computational efficiency. A single model can serve multiple use cases simultaneously: full-dimensional embeddings for high-precision retrieval and lower-dimensional variants for faster inference or resource-constrained environments. This flexibility simplifies deployment pipelines and reduces the need to maintain multiple specialized models for different performance requirements.
