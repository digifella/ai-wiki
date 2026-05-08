---
domain: tools-platforms
group: platforms-runtimes-environments
type: concept
tags:
  - "knowledge-graph"
  - "rag"
  - "information-retrieval"
  - "neo4j"
updated: 2026-04-14
---
# Nodes and Relationships

Core structural elements in [[concepts/knowledge-graph|knowledge graph]] representation:
- **Nodes**: Discrete entities (e.g., people, places, concepts)
- **[[concepts/relationships|Relationships]]**: Semantic connections between nodes (e.g., `born_in`, `author_of`, `part_of`)

## Applications
- **[[concepts/light-rag|Light RAG]] systems** (vs. [[concepts/graph-rag|Graph RAG]]):
  - Extract nodes/relationships from documents during chunking
  - Store dual representation: [[concepts/vector-store|vector store]] + [[entities/neo4j|neo4j]] knowledge graph
  - Enable [[entities/deepseek|context-aware LLM]] [[concepts/responses|responses]] via graph traversal
  - *Demonstrated in 2026 04 14 Build a light RAG system with neo4j*
  - Video [[concepts/tutorial|tutorial]] by [[entities/tech-with-homayoun|Tech with Homayoun]] (2026-04-14)
  - Explains [[concepts/architecture|architecture]] of LightRAG framework
  - Involves [[concepts/chunking-documents|chunking documents]] and extracting nodes/relationships
  - Stores data in both vector store and neo4j knowledge graph

## Related Concepts
- Knowledge Graph
- RAG (Retrieval-Augmented Generation)
- [[entities/neo4j|neo4j]]
- [[concepts/knowledge-bases|Information Retrieval]]

Backlink: 2026 04 14 Build a light RAG system with neo4j
