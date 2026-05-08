---
type: concept
domain: ai-agents
updated: 2026-04-14
group: applied-ai-workflows
summary: "A vector store provides semantic similarity retrieval that can be augmented by knowledge graphs for relationship-aware context and OCR for table-to-text extraction."
---
- "vector-store"
  - "rag"
  - "knowledge-graph"
  - "[[entities/neo4j|neo4j]]"
  - "[[concepts/graph-rag|graph-rag]]"
  - "[[concepts/text-retrieval|semantic-search]]"
  - "retrieval-augmented-generation"
  - "ocr"
  - "nanonets"
  - "[[concepts/document-parsing|document-parsing]]"
  - "[[concepts/coding|coding]]-assistants"
  - "[[concepts/memory|memory]]"
aliases:
  - "[[concepts/vector-database|vector database]]"
group: applied-ai-workflows

# Knowledge Graph

A [[concepts/knowledge-graph|knowledge graph]] is a [[concepts/structured-representation|structured representation]] of entities ([[concepts/nodes|nodes]]) and their [[concepts/relationships|relationships]] (edges), enabling semantic querying and complex relationship-based [[concepts/reasoning|reasoning]]. It serves as a foundational component for advanced [[concepts/natural-language-search|semantic search]] and [[concepts/building-smarter-systems|RAG systems]].

## Core Functionality
- Models knowledge as interconnected entities (e.g., `Person`, `Company`, `Location`) with typed [[concepts/relationships|relationships]] (e.g., `WORKS_AT`, `LOCATED_IN`)
- Supports graph traversal queries (e.g., "find all people connected to a company through employment")
- Integrates with [[concepts/llm|LLMs]] for [[concepts/natural-language-query|natural language query]] interpretation

## Integration in RAG Systems
- **Primary role**: Provides relationship-aware context beyond [[concepts/semantic-similarity|semantic similarity]]
- **[[concepts/light-rag|Light RAG]] implementation**: Combines [[concepts/vector-store|vector store]] with [[concepts/knowledge-graphs|knowledge graph]] for efficient retrieval
- **[[concepts/architecture|Architecture]]**: Involves [[concepts/chunking-documents|chunking documents]], extracting [[concepts/nodes-and-relationships|nodes and relationships]], storing them in both a [[concepts/vector-store|vector store]] and a [[concepts/knowledge-graphs|knowledge graph]]
- **[[concepts/contrast|Contrast]] with [[concepts/entity-relation-graphs|Graph RAG]]**: Light RAG focuses on simplicity and efficiency

2026 04 14 Build a light RAG system with neo4j

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-20: [[lab-notes/2026-04-20-Larql-Querying-and-Modifying-LLM-Internal-Database-Structures|Larql Querying and Modifying LLM Internal Database Structures]] · [▶ source](https://www.youtube.com/watch?v=8Ppw8254nLI)