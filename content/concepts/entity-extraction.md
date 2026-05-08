---
type: concept
domain: tools-platforms
tags:
  - "entity-extraction"
  - "llm"
  - "knowledge-graph"
  - "rag"
updated: 2026-04-14
group: web-publishing-quartz-websites
---
# Entity Extraction

The process of identifying and categorizing key information (entities) within [[concepts/unstructured-text|unstructured text]], enabling [[concepts/structured-data|structured data]] representation for downstream [[concepts/software|applications]] like [[concepts/rag|RAG]] (Retrieval-Augmented Generation).

**Key Applications:**
- Extracting entities (e.g., people, organizations, concepts) and [[concepts/relationships|relationships]] from documents
- Powering [[concepts/vector-store|Knowledge Graph]] construction for enhanced [[concepts/natural-language-search|semantic search]]
- Improving [[concepts/rag]] system [[concepts/accuracy|accuracy]] by grounding queries in extracted [[concepts/entity-relationships|entity relationships]]

**Recent [[concepts/integration|Integration]]:**
- Cocoindex [[concepts/data-transformation|data transformation]] framework enables [[concepts/real-time-knowledge-graph|real-time knowledge graph]] construction from [[concepts/markdown|markdown]] documents using [[concepts/large-language-models|LLMs]] for entity/[[concepts/relationship-extraction|relationship extraction]]
- Uses [[entities/neo4j|Neo4j]] as the [[concepts/graph-database|graph database]] backend
- Video [[concepts/tutorial|tutorial]]: [Building Knowledge Graphs with LLMs and Cocoindex](https://www.youtube.com/watch?v=2KVkpUGRtnk)
- Project goal: Establish document-to-[[concepts/knowledge-graph|knowledge graph]] pipelines for dynamic [[concepts/rag]] [[concepts/knowledge-bases|knowledge bases]]

**Backlink:**
2026 04 14 Cocoindex channel and [[concepts/knowledge-graphs|knowledge Graphs]] for [[concepts/llm-rag|LLM RAG]]
