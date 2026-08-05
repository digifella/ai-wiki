---
type: entity
tags:
  - "ai"
  - "rag"
  - "neo4j"
  - "knowledge-graph"
  - "light-rag"
  - "tutorial"
aliases:
  - "Tech With Homayoun Tutorials"
summary: Practical AI tutorials focusing on implementing RAG and knowledge graph applications using Neo4j and vector stores.
updated: 2026-07-12
stub: true
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
status: draft
---
- "tech"
  - "ai"
  - "rag"
  - "[[concepts/knowledge-graph|knowledge-graph]]"
  - "neo4j"
  - "ai-tutorials"
  - "[[concepts/contextualized-language-understanding|rag-systems]]"
  - "knowledge-graphs"
  - "[[concepts/entity-relationships|graph-rag]]"
  - "light-rag"
aliases:
  - "Tech With Homayoun Tutorials"

# Tech with Homayoun

Practical AI and tech tutorials focusing on implementable systems, particularly [[concepts/rag]] and [[concepts/knowledge-graphs|knowledge-graph]] applications.

## Key Concepts

- **[[concepts/light-rag|Light RAG]] vs [[concepts/graph-rag|Graph RAG]]**: [[concepts/hybrid-approach|Hybrid approach]] using [[entities/neo4j|neo4j]] for [[concepts/knowledge-graph|knowledge graph]] [[entities/storage|storage]] alongside [[concepts/vector-databases|vector stores]], contrasting with pure [[concepts/entity-relation-graphs|Graph RAG]] implementations
- **Core Architecture**:
  - [[concepts/document-chunking|Document chunking]]
  - Node/[[concepts/relationship-extraction|relationship extraction]]
  - Dual [[entities/storage|storage]] in [[concepts/vector-store|vector store]] and neo4j knowledge graph
  - LLM [[concepts/response-generation|response generation]] using structured context
- **Benefits**: Efficiency in [[concepts/document-retrieval|retrieval]] while maintaining relationship context (vs. pure [[concepts/vector-search|vector search]])

## Recent Notes

- 2026 04 14 Build a light RAG system with neo4j
  - Demonstrates implementation using neo4j for knowledge graph storage
  - Contrasts [[concepts/light|Light]] RAG with [[concepts/graphrag|Graph RAG]]
  - Covers [[concepts/document-chunking|document chunking]] → [[entities/nodejs|node]] extraction → dual storage in [[concepts/vector-database|vector store]] and neo4j
  - Explains overall architecture of LightRAG framework
  - Includes video [[concepts/tutorial|tutorial]]: <https://www.youtube.com/watch?v=zR9I7aMI8vw>
