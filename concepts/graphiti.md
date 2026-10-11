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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Graphiti

Graphiti is an open-source platform designed to enhance Retrieval Augmented Generation (RAG) systems by organizing information as structured knowledge graphs rather than relying on unstructured text passages. Traditional RAG architectures typically retrieve relevant documents or text chunks to provide context for language model responses, which can sometimes lead to fragmented or imprecise results. Graphiti addresses these limitations by constructing and maintaining dynamic knowledge graphs that capture complex relationships between entities, enabling more accurate and coherent reasoning.

The platform operates by ingesting unstructured data and automatically extracting entities and relationships to build a persistent knowledge graph. This structure allows the system to perform multi-hop reasoning, connecting disparate pieces of information that would remain isolated in standard vector-based retrieval methods. By leveraging this graph topology, Graphiti provides a more robust context for large language models, reducing hallucinations and improving the precision of generated answers.

Key components of the Graphiti architecture include automated graph construction, dynamic updating mechanisms, and specialized retrieval algorithms tailored for graph-structured data. These features allow the system to adapt to changing information landscapes without requiring manual intervention. The platform is designed to integrate with existing LLM workflows, offering a drop-in replacement for traditional vector databases in scenarios where complex relational context is critical.
