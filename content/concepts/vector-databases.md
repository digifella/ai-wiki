---
type: concept
domain: ai-agents
summary: Vector databases are specialized databases optimized for the storage, indexing, and similarity-based retrieval of high-dimensional vector embeddings.
updated: 2026-05-23
group: applied-ai-workflows
---
# Vector Databases

Specialized databases optimized for storing, indexing, and retrieving high-dimensional [[concepts/data-embedding|vector embeddings]]. Enable efficient similarity search (e.g., nearest neighbor queries) for [[concepts/software|applications]] like [[concepts/natural-language-search|semantic search]], recommendation systems, and LLM-powered retrieval.

## Core Functionality
- **Approximate Nearest Neighbor (ANN) Search**: Uses algorithms like HNSW, IVF, or FAISS for scalable similarity matching.
- **Embedding Support**: Stores vectors generated from [[concepts/text|text]], [[concepts/images|images]], or other modalities via [[concepts/models|models]] like [[entities/bert|BERT]], CLIP, or Sentence [[concepts/transformers|Transformers]].
- **Scalability**: Handles millions/billions of vectors with low-latency queries.

## Key Limitations
- **Model Constraint**: Requires the **same [[concepts/embedding-model|embedding model]]** for both vector generation and retrieval (e.g., BERT embeddings must be searched with BERT).
- **Semantic Rigidity**: Struggles with complex [[concepts/relationships|relationships]] beyond vector similarity (e.g., hierarchical or causal links).

## GraphRAG: Flexible Alternative
- [[concepts/graph-retrieval-augmented-generation|GraphRAG]] leverages [[concepts/knowledge-graphs|knowledge graphs]] and LLMs to query [[concepts/json-structuring|structured data]], eliminating the model constraint of [[concepts/vector-search|vector search]].
- **Flexibility**: Uses different models for graph construction (e.g., GNNs) and retrieval (e.g., LLMs), enabling richer context.
- **Advantage**: Better handles complex queries involving relationships (e.g., "Show me products similar to X that are also used with Y") compared to pure vector similarity.

## Integration Ecosystem
- **RAG Pipelines**: Primary component in [[concepts/traditional-rag|Retrieval-Augmented Generation]] for LLM context retrieval.
- **Knowledge Graphs**: Knowledge Graphs enhance [[concepts/vector-database-retrieval|vector search]] with structured relationships (e.g., [[entities/neo4j|Neo4j]] + vector DBs).
- **Embedding Models**: [[concepts/embedding-models]] must align with vector DB [[concepts/capabilities|capabilities]] (e.g., dimensionality, metric).

## References
- 2026 04 14 [[entities/ibm|IBM]] Explainer creating [[concepts/graph-retrieval-augmented-generation|GraphRAG]]
## Source Notes

- 2026-04-23: Claude · [▶ source](https://www.youtube.com/watch?v=KpG2yBi5I10)
- 2026-04-10: [[lab-notes/2026-04-10-Structured-AI-Context-Beyond-RAG-Limitations-with-Map-First-Architectu|Structured AI Context Beyond RAG Limitations with Map First Architectu]] · [▶ source](https://www.youtube.com/watch?v=SjqfDcGZOHg)
- 2026-04-20: [[lab-notes/2026-04-20-Larql-Querying-and-Modifying-LLM-Internal-Database-Structures|Larql Querying and Modifying LLM Internal Database Structures]] · [▶ source](https://www.youtube.com/watch?v=8Ppw8254nLI)