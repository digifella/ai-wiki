---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "graph-database"
  - "knowledge-graphs"
  - "neo4j"
  - "relationships"
  - "rag-systems"
  - "network-analysis"
aliases:
  - "Graph DB"
  - "Knowledge Graph Database"
  - "Relational Graph Store"
  - "Network Database"
summary: A graph database is a storage system optimized for interconnected data using nodes and edges, enabling efficient traversal and native relationship handling for applications like knowledge graphs and recommendation system
updated: 2026-07-11
group: web-publishing-quartz-websites
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Graph Database

A graph database is a specialized data [[entities/storage|storage]] system optimized for managing and querying interconnected data using **[[concepts/nodes|nodes]]** (entities), **edges** ([[concepts/relationships|relationships]]), and **properties** (attributes). Unlike relational databases, it excels at handling complex, multi-hop relationships with minimal performance overhead.

## Core Characteristics
- **Schema flexibility**: No rigid table structures; relationships define [[concepts/data-management|data organization]]
- **Traversal efficiency**: Optimized for path-finding queries (e.g., "find all connections between two nodes")
- **Native relationship storage**: Relationships are first-class citizens (not foreign keys)

## Key Applications
- **[[concepts/knowledge-graphs|Knowledge graphs]]** for [[concepts/natural-language-search|semantic search]] and [[concepts/reasoning|reasoning]]
- **Recommendation systems** (e.g., "users who bought X also bought Y")
- **Fraud detection** in financial networks
- **Network analysis** (social, infrastructure, biological)

## Modern Integration with LLMs
- **[[concepts/etl-framework|Cocoindex framework]]** enables [[concepts/real-time-knowledge-graph|real-time knowledge graph]] construction from documents:
  - Processes [[concepts/markdown|markdown]] documents → extracts entities/relationships via LLM
  - Builds [[entities/neo4j|Neo4j]] graph for [[concepts/rag]] systems
  - Creates structured knowledge for [[entities/deepseek|context-aware LLM]] responses
- **Project goal**: Enhance [[concepts/rag]] with [[concepts/cross-references|interconnected knowledge]] (vs. flat [[concepts/document-retrieval|document retrieval]])
- **Reference**: [Cocoindex + Neo4j Tutorial](https://www.youtube.com/watch?v=2KVkpUGRtnk)

## Related Concepts
- [[concepts/vector-store|Knowledge Graph]]: [[concepts/structured-representation|Structured representation]] of interconnected [[concepts/factual-knowledge|facts]]
- [[entities/neo4j|Neo4j]]: Leading [[concepts/open-source|open-source]] graph database platform
- [[concepts/rag]]: [[concepts/answer-generation|Retrieval-Augmented Generation]] for LLMs
- LLM: [[concepts/large-language-models|Large Language Models]] for [[concepts/knowledge-capture|knowledge extraction]]

Backlink: 2026 04 14 [[concepts/cocolndex-framework|Cocoindex channel]] and [[concepts/knowledge-graphs|knowledge Graphs]] for [[concepts/llm-rag|LLM RAG]]
## Source Notes
- 2026-04-20: [[lab-notes/2026-04-20-Larql-Querying-and-Modifying-LLM-Internal-Database-Structures|Larql Querying and Modifying LLM Internal Database Structures]] · [▶ source](https://www.youtube.com/watch?v=8Ppw8254nLI)
- 2026-04-27: AI Context Layer Architectures: Karpathy
