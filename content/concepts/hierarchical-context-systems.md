---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "concept"
  - "rag-limitations"
  - "context-architecture"
  - "structured-prompting"
  - "map-first-systems"
  - "ai-context-management"
aliases:
  - "Context Hierarchies"
  - "Structured AI Context"
summary: A system design approach that organizes AI context hierarchically to overcome limitations of traditional retrieval-augmented generation.
updated: 2026-05-01
---
# Hierarchical Context Systems

Hierarchical Context Systems represent a design approach for organizing information fed to [[concepts/agentic-ai|AI agents]] in layered, structured formats rather than as flat document collections. This [[concepts/architecture|architecture]] addresses known limitations of traditional retrieval-augmented generation (RAG), which often struggles with context relevance, scale, and the ability to reason across information at different levels of [[concepts/abstraction|abstraction]]. By organizing context hierarchically—typically with summary or map layers at the top and progressively more detailed information below—systems can better manage [[concepts/token-optimization|token efficiency]] and improve [[concepts/reasoning|reasoning]] quality.

## Core Architecture

The approach typically employs a map-first [[concepts/structure|structure]] where an overview or index layer is consulted before retrieving detailed content. This allows the system to understand the landscape of available information and make informed decisions about which detailed sections to access, rather than performing keyword-based retrieval on a homogeneous collection. The [[concepts/hierarchy|hierarchy]] can span multiple levels depending on the domain and use case, from high-level summaries through intermediate categories to granular source materials.

## Practical Advantages

Hierarchical [[concepts/organization|organization]] enables AI agents to handle larger knowledge bases more effectively by reducing irrelevant [[concepts/context-injection|context injection]] and supporting more coherent multi-step reasoning. It also simplifies the process of updating and maintaining information systems, since changes can be made at appropriate levels of the hierarchy without requiring wholesale reorganization. The structured approach has shown particular value in replacing unstructured [[concepts/file-uploads|file uploads]] with systematic, queryable [[concepts/information-architecture|information architecture]].

## Source Notes
- 2026-04-08: stop uploading [[concepts/files|files to AI (use this system instead)]]
- 2026-04-07: [[lab-notes/2026-04-07-Structured-AI-Context-Beyond-RAG-Limitations-with-Map-First-Architectu|Structured AI Context Beyond RAG Limitations with Map First Architectu]] · [▶ source](https://www.youtube.com/watch?v=SjqfDcGZOHg)