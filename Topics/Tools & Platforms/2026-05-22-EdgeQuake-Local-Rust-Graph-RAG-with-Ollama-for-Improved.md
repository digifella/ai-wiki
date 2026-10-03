---
wiki-ingested: true
title: "EdgeQuake: Local Rust Graph-RAG with Ollama for Improved Knowledge Retrieval"
date: 2026-05-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
type: "source-summary"
aliases:
  - "lab-notes/2026-05-22-EdgeQuake-Local-Rust-Graph-RAG-with-Ollama-for-Improved"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## EdgeQuake: Local Rust Graph-RAG with Ollama for Improved Knowledge Retrieval
**Clip title:** EdgeQuake - 100% Local with Ollama: Fixes Broken RAG
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=kkSVZfGzHyQ

### Summary
The video introduces EdgeQuake, a [[entities/high-performance|high-performance]] [[concepts/entity-relation-graphs|Graph-RAG]] ([[concepts/answer-generation|Retrieval Augmented Generation]]) framework developed in [[entities/rust|Rust]], aiming to address the limitations of conventional [[concepts/contextualized-language-understanding|RAG systems]]. The presenter argues that many existing RAG tools are fundamentally flawed, often providing unhelpful or "garbage" responses to complex queries because they primarily rely on finding similar [[concepts/text|text]] snippets without understanding the underlying [[concepts/relationships|relationships]] between [[concepts/ideas|ideas]] or concepts. EdgeQuake seeks to overcome this by building an "actual [[concepts/vector-store|knowledge graph]]" from documents, allowing for more sophisticated [[concepts/reasoning|reasoning]] and superior retrieval.

EdgeQuake's core functionality involves processing user-uploaded documents by first chunking them, then extracting entities and their [[concepts/relationships|relationships]] using a local [[concepts/large-language-model-llm|Large Language Model (LLM)]]. This structured information is then stored as a traversable graph in a PostgreSQL database, with embeddings managed by PGVector. The system is designed to run entirely locally, offering an [[concepts/open-source|open-source]] [[concepts/solution|solution]] that avoids expensive proprietary APIs. The [[concepts/architecture|architecture]] consists of a [[entities/react|React]] 19 + [[concepts/typescript-development|TypeScript]] frontend, a Rust-based backend API, and integrates with [[concepts/local-llm|local LLM]] providers like [[concepts/task-specific-modeling|Ollama]], supporting various [[concepts/inference|inference]] and [[concepts/embedding-models|embedding models]].

The demonstration showcases EdgeQuake's installation and usage. The presenter sets up the system using a quickstart [[concepts/docker|Docker]] compose script on an [[entities/ubuntu|Ubuntu]] server, configuring it to use Ollama for [[concepts/llm-inference|LLM inference]] and embeddings. After resolving an initial networking challenge that prevented the Dockerized application from reaching the local Ollama daemon, a personal biography [[concepts/text|text]] file is successfully uploaded. EdgeQuake processes this document, extracting 37 entities and visualizing them in an interactive [[concepts/knowledge-graph|knowledge graph]]. When queried about the tools and technologies used by the [[entities/speaker|speaker]], the system leverages this graph to provide a comprehensive, structured, and context-aware answer, highlighting its ability to derive meaningful insights beyond simple keyword matching.

In conclusion, EdgeQuake presents a promising approach to RAG by shifting the paradigm from purely vector-based similarity search to a more intelligent, graph-aware retrieval mechanism. Its ability to create and query [[concepts/knowledge-graphs|knowledge graphs]] from custom documents locally and open-source offers a powerful tool for enhanced understanding and [[concepts/reasoning|reasoning]] over complex data. While minor setup intricacies related to [[concepts/local-llm-integration|local model integration]] might be present, the framework's fundamental [[concepts/design|design]] provides a significant step forward in addressing the contextual shortcomings of [[concepts/traditional-rag|traditional RAG]] pipelines.

### Video Description & Links
#### Description
This video installs EdgeQuake with local ollama model. It's [[concepts/graph-retrieval-augmented-generation|GraphRAG]] inspired from LightRag written in Rust.

#edgequake 

▶ https://github.com/raphaelmansuy/edgequake

All rights reserved © Fahd Mirza

#### URLs
- https://github.com/raphaelmansuy/edgequake

## Related Concepts
- [[concepts/local-rag|Local RAG]]
- [[concepts/knowledge-management|Knowledge Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_retrieval)
- [[concepts/rust-programming-language|Rust Programming Language]] — [Wikipedia](https://en.wikipedia.org/wiki/Rust_%28programming_language%29)
- [[concepts/task-specific-modeling|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[concepts/graph-rag|Graph-RAG]]
- [[concepts/knowledge-graph|Knowledge Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_graph)
- [[concepts/vanilla-rag|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)
- [[concepts/local-llm|Local LLM]]
- [[concepts/vector-search|Vector Similarity Search]]
- [[concepts/entity-extraction|Entity Extraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Named-entity_recognition)
- PGVector — [Wikipedia](https://en.wikipedia.org/wiki/Vector_database)
- [[concepts/postgresql-extension|PostgreSQL]] — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- [[concepts/typescript|TypeScript]] — [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)
- [[concepts/docker|Docker]] Compose — [Wikipedia](https://en.wikipedia.org/wiki/Docker_%28software%29)
- [[concepts/open-source|Open Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
- [[concepts/text-chunking|Text Chunking]]
- Graph Traversal — [Wikipedia](https://en.wikipedia.org/wiki/Graph_traversal)
- [[concepts/website-interaction|API Integration]]

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/rust|Rust]] — [Wikipedia](https://en.wikipedia.org/wiki/Rust)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- PostgreSQL — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- PGVector — [Wikipedia](https://en.wikipedia.org/wiki/Vector_database)
- [[entities/react|React]]
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)