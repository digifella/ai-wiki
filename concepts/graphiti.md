---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "rag"
  - "knowledge-graphs"
  - "retrieval-augmented-generation"
  - "open-source"
  - "semantic-search"
aliases:
  - "RAG knowledge graph platform"
summary: Graphiti is an open-source platform designed to address the limitations of Retrieval Augmented Generation (RAG) by using knowledge graphs.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: apis-integrations-mcp
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Graphiti

[[entities/graphiti|Graphiti]] is an [[concepts/open-source|open-source]] platform designed to enhance [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) systems by organizing information as structured [[concepts/knowledge-graphs|knowledge graphs]] rather than relying on [[concepts/unstructured-text|unstructured text]] passages. [[concepts/rag|Traditional RAG]] architectures typically retrieve relevant documents or text chunks to provide context for language [[concepts/model-behavior|model responses]], which can sometimes lead to fragmented or imprecise results. Graphiti addresses these limitations by representing information as interconnected [[concepts/nodes|entities]] and their [[concepts/relationships|relationships]], enabling more precise and [[concepts/contextual-information|contextual information]] retrieval.

The platform operates by building knowledge graphs from source documents, a process that involves extracting entities such as people, [[entities/places|places]], and concepts, and mapping the relationships between them. This structural approach allows the system to navigate complex data connections more effectively than standard vector-based retrieval methods. By leveraging the semantic depth of knowledge graphs, Graphiti aims to improve the accuracy and relevance of the context provided to [[concepts/demystifying-llms|large language models]], thereby reducing hallucinations and improving the overall quality of generated responses.
