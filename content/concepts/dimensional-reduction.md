---
type: concept
domain: science-physics
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
updated: 2026-05-01
---
# Dimensional Reduction

Dimensional reduction is a technique used to optimize embeddings for retrieval-augmented generation (RAG) systems. It involves [[concepts/training|training]] embeddings to maintain semantic meaning across multiple dimensionality levels, allowing the same [[concepts/embedding-model|embedding model]] to function effectively at different output sizes without retraining. This approach improves flexibility in RAG implementations by enabling users to trade off between embedding quality and [[concepts/computational-efficiency|computational efficiency]] based on their specific requirements.

## Matryoshka Embeddings

The technique is implemented through Matryoshka embeddings, named after the Russian nesting dolls due to their nested [[concepts/structure|structure]]. In this approach, embeddings are trained so that progressively smaller subsets of dimensions preserve meaningful information. An embedding intended for 768 dimensions, for example, can be truncated to 512, 256, or 128 dimensions while retaining sufficient semantic [[concepts/relationships|relationships]] for retrieval tasks. This nested property is achieved through specialized training objectives that penalize information loss as dimensions are removed.

## Applications in RAG

For retrieval-augmented generation systems, dimensional reduction offers practical advantages. Smaller embeddings reduce [[concepts/storage-requirements|storage requirements]], decrease latency during retrieval operations, and lower computational costs for vector similarity searches, particularly important when working with large document collections. The ability to adjust embedding size without model retraining allows [[concepts/contextualized-language-understanding|RAG systems]] to adapt to changing performance or resource constraints without requiring complete reconfiguration.
