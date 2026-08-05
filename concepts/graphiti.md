---
type: concept
domain: tools-platforms-infrastructure
group: apis-integrations-mcp
tags:
  - "rag"
  - "knowledge-graphs"
  - "retrieval-augmented-generation"
  - "open-source"
  - "semantic-search"
aliases:
  - "RAG knowledge graph platform"
summary: Graphiti is an open-source platform designed to address the limitations of Retrieval Augmented Generation (RAG) by using knowledge graphs.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Graphiti

Graphiti is an open-source platform designed to improve Retrieval Augmented Generation (RAG) systems by organizing information as structured knowledge graphs rather than unstructured text passages. While traditional RAG systems retrieve relevant documents or text chunks to provide context for language model responses, Graphiti instead represents information as interconnected entities and their relationships, enabling more precise and contextual information retrieval.

## How It Works

The platform builds knowledge graphs from source documents, extracting entities (people, places, concepts, etc.) and the relationships between them. This structured representation allows the system to understand not just what information exists, but how different pieces of information relate to one another. When a query is made, Graphiti can traverse these relationships to retrieve relevant context, potentially providing more accurate and coherent responses than traditional keyword-based or embedding-based retrieval methods.

## Applications and Benefits

By leveraging knowledge graph structure, Graphiti addresses several limitations of conventional RAG systems, including handling complex multi-hop queries that require reasoning across multiple pieces of information and reducing context retrieval errors caused by semantic similarity matching alone. The approach is particularly useful for domains where understanding relationships between entities—such as professional networks, scientific literature, or organizational knowledge—is critical to generating accurate answers.
