---
type: concept
domain: security-infrastructure
group: data-pipelines-sync-storage
tags:
  - "knowledge-graphs"
  - "llm-processing"
  - "neo4j"
  - "langchain"
  - "python"
  - "document-parsing"
aliases:
  - "Knowledge Graph from Unstructured Text"
  - "Thu Vu Knowledge Graph Tutorial"
summary: This video by Thu Vu demonstrates how to build a knowledge graph from unstructured text using Python, Langchain, and Neo4j.
updated: 2026-05-01
---
# Unstructured Text

Unstructured text refers to data that lacks a predefined data model or organizational schema, such as documents, articles, [[concepts/social-media-carousels|social media posts]], and transcripts. Unlike [[concepts/json-structuring|structured data]] organized in tables or databases, unstructured text requires processing techniques to extract meaningful information and [[concepts/relationships|relationships]].

## Knowledge Graph Extraction

A practical application of [[concepts/unstructured-text-processing|unstructured text processing]] is extracting structured [[concepts/knowledge-graphs|knowledge graphs]] from free-form documents. This involves identifying entities, relationships, and concepts within text and organizing them into graph structures that enable querying and analysis. [[entities/thu-vu|Thu Vu]]'s [[concepts/tutorial|tutorial]] demonstrates this process using [[entities/python|Python]] combined with [[entities/langchain|Langchain]] and Neo4j, showing how language models can parse unstructured content and populate a knowledge graph database with the extracted information.

## Tools and Implementation

The combination of Python, Langchain, and Neo4j provides a workflow for automated knowledge extraction. Langchain facilitates interaction with [[concepts/large-language-model-llm|large language models]] for text comprehension, while Neo4j serves as the [[concepts/graph-database|graph database]] for storing and querying the resulting [[concepts/entity-relationships|entity relationships]]. This approach bridges the gap between raw textual data and structured, queryable knowledge representations suitable for security infrastructure [[concepts/software|applications]] and broader information management needs.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-08: [[lab-notes/2026-04-08-LiteParse-Free-Local-Layout-Preserving-Document-Parsing-for-LLMs|LiteParse Free Local Layout Preserving Document Parsing for LLMs]] · [▶ source](https://www.youtube.com/watch?v=1GOJn9xiCc4)
- 2026-04-27: AI Context Layer Architectures: Karpathy