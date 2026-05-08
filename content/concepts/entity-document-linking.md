---
type: concept
domain: tools-platforms
tags:
  - "knowledge-graph"
  - "llm"
  - "rag"
  - "entity-linking"
updated: 2026-04-15
group: web-publishing-quartz-websites
---
# Entity-Document Linking

Association of named entities extracted from unstructured documents with corresponding entries in a [[concepts/knowledge-base|knowledge base]] or graph, enabling semantic context for Retrieval-Augmented Generation (RAG) systems.

**Core process**:
- [[concepts/entity-extraction|Entity extraction]] via [[concepts/named-entity-recognition|Named Entity Recognition]]
- Normalization to standardized [[concepts/knowledge-base|knowledge base]] entries
- Context-aware linking to document semantics

**Key [[concepts/software|applications]]**:
- Enhancing [[concepts/rag]] with graph-based semantic [[concepts/relationships|relationships]]
- Enabling dynamic [[concepts/vector-store|knowledge graph]] updates from document collections
- Supporting cross-document entity disambiguation

**Implementation tools**:
- Cocoindex: Framework for building real-time [[concepts/knowledge-graphs|knowledge graphs]] from documents using [[concepts/large-language-model]]s (LLMs) and [[entities/neo4j|Neo4j]], demonstrated in [this tutorial](https://youtu.be/2KVkpUGRtnk)
- Neo4j: [[concepts/graph-database|Graph database]] for storing [[concepts/entity-relationships|entity relationships]] and document context

2026 04 14 Cocoindex channel and knowledge Graphs for [[concepts/llm-rag|LLM RAG]]
