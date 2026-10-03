---
type: concept
domain: ai-agents
tags:
  - "vector-store"
  - "rag"
  - "knowledge-graph"
  - "semantic-search"
  - "document-parsing"
  - "ocr"
  - "neo4j"
  - "okf"
  - "llm-wiki"
aliases:
  - "vector database"
summary: A vector store provides semantic similarity retrieval that can be augmented by knowledge graphs for relationship-aware context and OCR for table-to-text extraction. Emerging standards like Google's OKF aim to standardize personal knowledge bases for AI interoperability.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "vector-store"
  - "rag"
  - "knowledge-graph"
  - "[[entities/neo4j|neo4j]]"
  - "[[concepts/graph-rag|graph-rag]]"
  - "[[concepts/text-retrieval|semantic-search]]"
  - "[[concepts/answer-generation|retrieval-augmented-generation]]"
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
- Models knowledge as interconnected entities (e.g., `Person`, `Company`, `Location`) with typed [[concepts/relati

## Interoperability and Standards
- **Open Knowledge Format (OKF)**: Google's proposed standard for personal knowledge bases, evolving from Andrej Karpathy's "LLM Wiki" concept to enable AI interoperability. See Google's OKF: Standardizing Karpathy's LLM Wiki for AI Interoperability.
- **LLM Wiki**: A precursor concept for structuring personal knowledge for AI agents]]]]]], now being standardized via OKF.

## References
- [Google's OKF: Standardizing Karpathy's LLM Wiki for AI Interoperability](https://www.youtube.com/watch?v=T33iI6izAKw)
