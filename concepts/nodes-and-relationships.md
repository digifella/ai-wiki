---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "knowledge-graph"
  - "nodes"
  - "relationships"
  - "light-rag"
  - "neo4j"
  - "graph-database"
  - "semantic-connections"
aliases:
  - "Graph Elements"
  - "Knowledge Graph Components"
  - "Entity-Relation Structure"
summary: Nodes and relationships are the fundamental structural components of knowledge graphs, representing discrete entities and their semantic connections, respectively, and serve as the basis for dual-storage architectures in
updated: 2026-07-12
group: platforms-runtimes-environments
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Nodes and Relationships

Core structural elements in [[concepts/knowledge-graph|knowledge graph]] representation:
- **[[concepts/nodes|Nodes]]**: Discrete entities (e.g., people, [[entities/places|places]], concepts)
- **[[concepts/relationships|Relationships]]**: Semantic connections between nodes (e.g., `born_in`, `author_of`, `part_of`)

## Applications
- **[[concepts/light-rag|Light RAG]] systems** (vs. [[concepts/graph-rag|Graph RAG]]):
  - Extract nodes/relationships from documents during chunking
  - Store dual representation: [[concepts/vector-store|vector store]] + [[entities/neo4j|neo4j]] knowledge graph
  - Enable [[entities/deepseek|context-aware LLM]] responses via graph traversal
  - *Demonstrated in 2026 04 14 Build a [[concepts/light|light]] RAG system with neo4j*
  - Video [[concepts/tutorial|tutorial]] by [[entities/tech-with-homayoun|Tech with Homayoun]] (2026-04-14)
  - Explains architecture of LightRAG framework
  - Involves [[concepts/chunking-documents|chunking documents]] and extracting nodes/relationships
  - Stores data in both [[concepts/vector-database|vector store]] and neo4j knowledge graph

## Related Concepts
- Knowledge [[concepts/entity-relation-graphs|Graph
- RAG]]]] ([[concepts/answer-generation|Retrieval-Augmented Generation]])
- [[entities/neo4j|neo4j]]
- [[concepts/knowledge-bases|Information Retrieval]]

Backlink: 2026 04 14 Build a [[concepts/light-rag|light RAG]] system with neo4j
