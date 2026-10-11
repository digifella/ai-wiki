---
type: entity
tags:
  - "graph-database"
  - "cypher"
  - "knowledge-graphs"
  - "llm-rag"
  - "cocoindex"
aliases:
  - "Neo4j Database"
  - "Neo4J Graph DB"
summary: A native graph database using the Cypher query language for storing and querying interconnected data in applications like knowledge graphs and LLM RAG systems.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Neo4j

Native [[concepts/graph-database|graph database]] for [[concepts/storing|storing]] and querying interconnected data using Cypher. Optimized for relationship-heavy workloads with ACID [[concepts/compliance|compliance]] and scalable graph traversal.

## Key Applications
- **[[concepts/knowledge-graphs|Knowledge Graphs]]**: Semantic networks for contextual [[concepts/source-discovery|data discovery]] (see: [[concepts/vector-store|Knowledge Graph]])
- **[[concepts/llm-rag|LLM RAG]] Systems**: Enhances [[concepts/document-retrieval|retrieval]] with graph [[concepts/relationships|relationships]]:
  - [[concepts/etl-framework|Cocoindex framework]] processes [[concepts/markdown|markdown]] documents → extracts entities/[[concepts/relationships|relationships]] via LLMs → populates Neo4j
  - [[concepts/real-time-knowledge-graph|Real-time knowledge graph]] construction for improved accuracy (see: [[concepts/tutorial|Tutorial]])
- **Fraud Detection**: Identifies complex transaction patterns through relationship analysis
- **Recommendation Engines**: Leverages user-item relationship graphs for contextual suggestions

## Integration Highlights
- **Cocoindex Pipeline**: Uses LLMs and the [[entities/rust|Cocoindex framework]] to transform [[concepts/markdown|markdown]] documents into a [[concepts/real-time-knowledge-graph|real-time knowledge graph]] (see: [[concepts/tutorial|Tutorial]] watch?v=2KVkpUGRtnk)

## Backlinks
- 2026 04 14 [[concepts/cocolndex-framework|Cocoindex channel]] and [[concepts/knowledge-graphs|knowledge Graphs]] for [[concepts/llm-rag|LLM RAG]]
## Source Notes
