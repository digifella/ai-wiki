---
type: concept
domain: ai-agents
summary: Vector search identifies semantically similar items by comparing high-dimensional vector embeddings using similarity metrics.
updated: 2026-05-23
group: applied-ai-workflows
---
# Vector Search

[[concepts/vector-database-retrieval|Vector search]] (or similarity search) finds semantically similar items by comparing high-dimensional [[concepts/data-embedding|vector embeddings]]. It is foundational for [[concepts/natural-language-search|semantic search]], recommendation systems, and [[concepts/retrieval-augmented-generation-rag]].

## Core Mechanisms
- **Vector Embeddings**: Numerical representations of data ([[concepts/text|text]], [[concepts/images|images]]) in a continuous vector space (e.g., via [[entities/bert|BERT]], Sentence [[concepts/transformers|Transformers]]).
- **Similarity Metrics**: Cosine similarity or Euclidean distance to measure vector proximity.
- **Approximate Nearest Neighbor (ANN) Algorithms**: Efficiently search large [[concepts/vector-databases|vector databases]] (e.g., FAISS, HNSW).

## Limitations and Alternatives
- **Embedding [[concepts/logical-consistency|Consistency]] Requirement**: Traditional vector search requires the *same model* for both embedding generation and retrieval (e.g., using `text-embedding-ada-002` for both steps).
- **[[concepts/graph-rag|Graph RAG]]**: A flexible alternative using [[concepts/knowledge-graphs|knowledge graphs]] and LLMs for structured retrieval. Does *not* require consistent [[concepts/models|models]] for embedding vs. retrieval, enabling more adaptable systems.
  - [IBM Explainer: Creating GraphRAG](https://www.youtube.com/watch?v=Za7aG-ooGLQ) (video demonstration)
  - Key advantage: Graph structures allow explicit relationship traversal (e.g., "find all products related to `battery` via `manufacturer`").

## Applications
- [[concepts/semantic-similarity-retrieval|Semantic search]] in enterprise [[concepts/knowledge-bases|knowledge bases]]
- Personalized recommendations
- Contextual LLM augmentation via [[concepts/rag]]

2026 04 14 [[entities/ibm|IBM]] Explainer creating [[concepts/graph-retrieval-augmented-generation|GraphRAG]]
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-08: [[lab-notes/2026-04-08-Structured-AI-Context-Beyond-RAG-Limitations-with-Map-First-Architectu|Structured AI Context Beyond RAG Limitations with Map First Architectu]] · [▶ source](https://www.youtube.com/watch?v=SjqfDcGZOHg)