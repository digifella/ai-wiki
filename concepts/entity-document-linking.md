---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "entity-linking"
  - "knowledge-graphs"
  - "rag-systems"
  - "named-entity-recognition"
  - "neo4j"
  - "cocoindex"
  - "data-normalization"
aliases:
  - "Entity-Document Association"
  - "Named Entity Linking"
  - "Knowledge Base Mapping"
  - "Semantic Context Linking"
summary: Entity-document linking associates named entities extracted from unstructured text with standardized knowledge base entries to provide semantic context for Retrieval-Augmented Generation systems.
updated: 2026-07-11
group: web-publishing-quartz-websites
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Entity-Document Linking

Association of named [[concepts/nodes|entities]] extracted from unstructured documents with corresponding entries in a [[concepts/knowledge-base|knowledge base]] or graph, enabling semantic context for [[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG) systems.

**Core process**:
- [[concepts/entity-extraction|Entity extraction]] via [[concepts/named-entity-recognition|Named Entity Recognition]]
- Normalization to standardized [[concepts/knowledge-base|knowledge base]] entries
- Context-aware linking to document semantics

**Key applications**:
- Enhancing [[concepts/rag]] with graph-based semantic [[concepts/relationships|relationships]]
- Enabling dynamic [[concepts/vector-store|knowledge graph]] [[concepts/software-updates|updates]] from document collections
- Supporting cross-document entity disambiguation

**Implementation tools**:
- Cocoindex: Framework for building real-time [[concepts/knowledge-graphs|knowledge graphs]] from documents using [[concepts/large-language-model]]s (LLMs) and [[entities/neo4j|Neo4j]], demonstrated in [this tutorial](https://youtu.be/2KVkpUGRtnk)
- Neo4j: [[concepts/graph-database|Graph database]] for [[concepts/storing|storing]] [[concepts/entity-relationships|entity relationships]] and document context

2026 04 14 [[concepts/cocolndex-framework|Cocoindex channel]] and knowledge Graphs for [[concepts/llm-rag|LLM RAG]]
