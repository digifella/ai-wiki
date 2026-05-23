---
type: concept
domain: tools-platforms
tags:
  - "rag"
  - "knowledge-graphs"
  - "retrieval-augmented-generation"
  - "open-source"
  - "semantic-search"
aliases:
  - "RAG knowledge graph platform"
summary: Graphiti is an open-source platform designed to address the limitations of Retrieval Augmented Generation (RAG) by using knowledge graphs.
updated: 2026-05-23
group: apis-integrations-mcp
---
# Graphiti

[[entities/graphiti|Graphiti]] is an [[concepts/open-source|open-source]] platform that extends [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) systems by integrating [[concepts/knowledge-graphs|knowledge graphs]]. [[concepts/traditional-rag|Traditional RAG]] systems retrieve relevant documents or passages to provide context for language [[concepts/models|models]], but Graphiti addresses inherent limitations of this approach by structuring information as interconnected entities and [[concepts/relationships|relationships]] rather than flat document collections. This graph-based [[concepts/architecture|architecture]] enables more sophisticated [[concepts/reasoning|reasoning]] and context retrieval.

## Architecture and Functionality

The platform constructs knowledge graphs from source materials, capturing entities and their relationships in a structured format. When responding to queries, Graphiti can traverse these graph connections to retrieve contextually relevant information with greater precision than keyword-based retrieval alone. This approach allows the system to maintain semantic relationships between concepts and provide more coherent [[concepts/contextual-information|contextual information]] to language models.

## Advantages Over Traditional RAG

By using knowledge graphs, Graphiti improves upon standard RAG in several ways: it reduces irrelevant [[concepts/context-injection|context injection]], maintains logical connections between related concepts, and enables multi-hop reasoning across related information. The graph [[concepts/structure|structure]] makes explicit what implicit relationships exist in [[concepts/unstructured-text|unstructured text]], potentially improving the quality and relevance of retrieved context for generation tasks.
