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
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Generated: 2026-05-22 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

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

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#edgequake 

PLEASE FOLLOW ME: 
▶ LinkedIn:  https://www.linkedin.com/in/fahdmirza/
▶ [[entities/youtube|YouTube]]: https://www.youtube.com/@fahdmirza
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://github.com/raphaelmansuy/edgequake

All rights reserved © Fahd Mirza

#### URLs
- https://ko-fi.com/fahdmirza
- https://www.linkedin.com/in/fahdmirza/
- https://www.youtube.com/@fahdmirza
- https://www.fahdmirza.com
- https://github.com/raphaelmansuy/edgequake

## Related Concepts
- [[concepts/local-rag|Local RAG]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_RAG)
- [[concepts/knowledge-management|Knowledge Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Retrieval)
- [[concepts/rust-programming-language|Rust Programming Language]] — [Wikipedia](https://en.wikipedia.org/wiki/Rust_Programming_Language)
- [[concepts/task-specific-modeling|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[concepts/graph-rag|Graph-RAG]] — [Wikipedia](https://en.wikipedia.org/wiki/Graph-RAG)
- [[concepts/knowledge-graph|Knowledge Graph]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_Graph)
- [[concepts/vanilla-rag|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation)
- [[concepts/local-llm|Local LLM]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_LLM)
- [[concepts/vector-search|Vector Similarity Search]] — [Wikipedia](https://en.wikipedia.org/wiki/Vector_Similarity_Search)
- [[concepts/entity-extraction|Entity Extraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Entity_Extraction)
- PGVector — [Wikipedia](https://en.wikipedia.org/wiki/PGVector)
- [[concepts/postgresql-extension|PostgreSQL]] — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- React 19 — [Wikipedia](https://en.wikipedia.org/wiki/React_19)
- [[concepts/typescript|TypeScript]] — [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)
- [[concepts/docker|Docker]] Compose — [Wikipedia](https://en.wikipedia.org/wiki/Docker_Compose)
- [[concepts/open-source|Open Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open_Source_Software)
- [[concepts/text-chunking|Text Chunking]] — [Wikipedia](https://en.wikipedia.org/wiki/Text_Chunking)
- Graph Traversal — [Wikipedia](https://en.wikipedia.org/wiki/Graph_Traversal)
- Semantic Reasoning — [Wikipedia](https://en.wikipedia.org/wiki/Semantic_Reasoning)
- [[concepts/website-interaction|API Integration]] — [Wikipedia](https://en.wikipedia.org/wiki/API_Integration)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- EdgeQuake — [Wikipedia](https://en.wikipedia.org/wiki/EdgeQuake)
- [[entities/ollama|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/rust|Rust]] — [Wikipedia](https://en.wikipedia.org/wiki/Rust)
- Raphael Mansuy — [Wikipedia](https://en.wikipedia.org/wiki/Raphael_Mansuy)
- LightRAG — [Wikipedia](https://en.wikipedia.org/wiki/LightRAG)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- PostgreSQL — [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)
- PGVector — [Wikipedia](https://en.wikipedia.org/wiki/PGVector)
- [[entities/react|React]] — [Wikipedia](https://en.wikipedia.org/wiki/React)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- Ko-fi — [Wikipedia](https://en.wikipedia.org/wiki/Ko-fi)