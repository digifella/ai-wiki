---
type: concept
domain: ai-agents
tags:
  - "vector-search"
  - "semantic-similarity"
  - "embeddings"
  - "retrieval-augmented-generation"
  - "graph-rag"
  - "persistent-memory"
aliases:
  - "Similarity Search"
  - "Vector Retrieval"
summary: Vector search identifies semantically similar items by comparing high-dimensional vector embeddings using similarity metrics, enabling persistent memory for AI agents.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Vector Search

[[concepts/vector-database-retrieval|Vector search]] (or similarity search) finds semantically similar items by comparing high-dimensional [[concepts/data-embedding|vector embeddings]]. It is foundational for [[concepts/natural-language-search|semantic search]], recommendation systems, and [[concepts/retrieval-augmented-generation-rag]].

## Core Mechanisms
- **[[concepts/embedding-models|Vector Embeddings]]**: [[concepts/numerical-representations|Numerical representations]] of data (text, images) in a continuous [[concepts/embedding-spaces|vector space]] (e.g., via [[entities/bert|BERT]], Sentence [[concepts/transformers|Transformers]]).
- **Similarity Metrics**: Cosine similarity or Euclidean distance to measure [[concepts/semantic-similarity|vector proximity]].
- **Approximate Nearest Neighbor (ANN) [[concepts/algorithms|Algorithms]]**: Efficiently search large [[concepts/vector-databases|vector databases]] (e.g., FAISS, HNSW).

## Applications in AI Agent Memory
- **[[concepts/compounding-knowledge|Persistent Knowledge Bases]]**: [[concepts/embedding-based-retrieval|Vector search]] enables [[concepts/ai-agents|AI agents]] to maintain long-term [[concepts/memory|memory]] by [[concepts/storing|storing]] and [[concepts/retrieving|retrieving]] past interactions or knowledge chunks semantically.
- **[[entities/gbrain|Gbrain]] Integration**: Tools like [[lab-notes/2026-07-08-Gbrain-Open-Source-Second-Brain-for-AI-Agent-Persistent|Gbrain: Open-Source Second Brain for AI Agent Persistent Memory]] utilize vector search to provide a "[[concepts/personal-knowledge-management-pkm|second brain]]" for agents such as [[concepts/agentic-ai|Hermes Agent]], overcoming the [[concepts/context-window-limitations|context window limitations]] of traditional LLMs by allowing persistent, searchable access to historical data.

## Limitations and Alternatives
- **Embedding [[concepts/logical-consistency|Consistency]] Requirement**: Traditional [[concepts/embedding-based-retrieval

## References
- [Gbrain: Open-Source Second Brain for AI Agent Persistent Memory](https://www.youtube.com/watch?v=-fSjdYzrFvA)
