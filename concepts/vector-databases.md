---
type: concept
domain: ai-agents
tags:
  - "vector-databases"
  - "semantic-search"
  - "nearest-neighbor"
  - "embeddings"
  - "rag-pipelines"
  - "okf"
  - "llm-wiki"
aliases:
  - "Vector DB"
  - "Similarity Search Database"
  - "Embedding Store"
  - "ANN Engine"
summary: Vector databases are specialized databases optimized for the storage, indexing, and similarity-based retrieval of high-dimensional vector embeddings, increasingly integrated with standardized knowledge formats like OKF.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Vector Databases

Specialized databases optimized for [[concepts/storing|storing]], [[concepts/data-indexing|indexing]], and [[concepts/retrieving|retrieving]] high-dimensional [[concepts/data-embedding|vector embeddings]]. Enable efficient [[concepts/vector-search|similarity search]] (e.g., nearest neighbor queries) for applications like [[concepts/natural-language-search|semantic search]], recommendation systems, and LLM-powered [[concepts/document-retrieval|retrieval]].

## Core Functionality
- **Approximate Nearest Neighbor (ANN) Search**: Uses [[concepts/algorithms|algorithms]] like HNSW, IVF, or FAISS for scalable similarity matching.
- **Embedding Support**: Stores vectors generated from text, images, or other modalities via models like [[entities/bert|BERT]], CLIP, or Sentence [[concepts/transformers|Transformers]].
- **Scalability**: Handles millions/billions of vectors with low-latency queries.

## Key Limitations
- **Model Constraint**: Requires the **same [[concepts/embedding-model|embedding model]]** for both vector generation and retrieval to ensure semantic [[concepts/logical-consistency|consistency]].
- **[[concepts/context-loss|Context Loss]]**: Pure [[concepts/embedding-based-retrieval|vector search]] may lack structured [[concepts/metadata|metadata]] filtering capabilities found in traditional relational databases.

## Integration with Knowledge Standards
- **[[concepts/data-management|Open Knowledge Format]] (OKF)**: Emerging standards like [[concepts/google-search|Google]]'s OKF aim to standardize personal [[concepts/knowledge-bases|knowledge bases]] for [[concepts/agentic-ai|AI agents]], evolving from concepts like [[entities/andrej-karpathy|Andrej Karpathy]]'s "[[concepts/llm-wiki|LLM Wiki]]" to enable better interoperability. See [[lab-notes/2026-07-03-Googles-OKF-Standardizing-Karpathys-LLM-Wiki-for-AI-Inte|Google's OKF: Standardizing Karpathy's LLM Wiki for AI Interoperability]] for details on this shift.
- **Structured Retrieval**: Combining vector databases with standardized formats allows for hybrid retrieval systems that leverage both [[concepts/semantic-similarity|semantic similarity]] and structured metadata.

## References
- [Google's OKF: Standardizing Karpathy's LLM Wiki for AI Interoperability](https://www.youtube.com/watch?v=T33iI6izAKw)
