---
type: concept
domain: ai-agents
tags:
  - "embeddings"
  - "dense-vectors"
  - "semantic-similarity"
  - "numerical-representations"
  - "vector-space"
  - "ai-foundations"
aliases:
  - "Embeddings"
  - "Dense Embeddings"
  - "Semantic Vectors"
summary: Dense vectors, also known as embeddings, are high-dimensional numerical representations using continuous values to capture semantic similarity and relationships between data points.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Dense Vectors

**Dense vectors** (also known as [[concepts/vector-representations|embeddings]]) are high-dimensional [[concepts/numerical-representations|numerical representations]] where each dimension captures a latent semantic feature. Unlike sparse vectors (e.g., one-hot [[concepts/encoding|encoding]]), dense vectors store continuous values, enabling models to capture [[concepts/semantic-similarity|semantic similarity]] and [[concepts/relationships|relationships]] between data points.

## Key Characteristics
- **[[concepts/continuity|Continuity]]**: Values are real numbers, allowing for gradient-based optimization.
- **Dimensionality**: Typically hundreds to thousands of dimensions, balancing expressiveness and computational cost.
- **Semantic Proximity**: Vectors representing similar concepts are closer in [[concepts/embedding-spaces|vector space]] (measured via cosine similarity or Euclidean distance).
- **[[concepts/abstraction|Generalization]]**: Models can infer relationships not explicitly seen during training (e.g., king - man + woman ≈ queen).

## Applications
- [[concepts/natural-language-processing]] (NLP): Word, sentence, and document embeddings.
- Recommendation Systems: User and item [[concepts/matrix-factorization|latent factor models]].
- [[concepts/computer-vision]]: Feature extraction for image classification.
- Search and [[concepts/document-retrieval|Retrieval]]: [[concepts/natural-language-search|Semantic search]] beyond keyword matching.

## Related Concepts
- Word2Vec
- [[concepts/transformers]]
- [[concepts/vector-database]]
- Cosine Similarity

## References & Notes
- [[lab-notes/2026-05-31-Vector-Embeddings-Semantic-Representation-for-NLP-and-AI|Vector Embeddings: Semantic Representation for NLP and AI]]: Comprehensive overview by [[entities/thu-vu|Thu Vu]] (2026), covering [[concepts/data-embedding|text embeddings]] as [[concepts/numerical-representations|numerical representations]] of words/phrases/documents for [[concepts/semantic-representation|semantic representation]] in NLP and AI.
