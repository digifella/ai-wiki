---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "rag"
  - "knowledge-graphs"
  - "graphiti"
  - "context-retrieval"
  - "open-source"
aliases:
  - "RAG with Knowledge Graphs"
  - "Graphiti-based Context"
summary: The concept involves combining Retrieval Augmented Generation with knowledge graphs using the Graphiti open-source platform.
updated: 2026-07-14
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Context Utilization

Context Utilization refers to the practice of enhancing Retrieval Augmented Generation (RAG) systems by integrating knowledge graphs to improve how information is retrieved and used by AI agents. While traditional RAG approaches retrieve relevant documents or passages from a knowledge base, this method has limitations in capturing relationships between concepts and maintaining semantic coherence across complex information domains. By combining RAG with structured knowledge graphs, systems can better understand entity relationships, maintain contextual consistency, and provide more accurate responses grounded in interconnected data.

## Knowledge Graphs in RAG Systems

Knowledge graphs represent information as interconnected nodes and edges, mapping relationships between concepts, entities, and attributes. When integrated with RAG pipelines, they enable AI agents to traverse semantic relationships and retrieve not just isolated passages, but relevant clusters of related information. This approach addresses a key weakness of document-only retrieval: understanding how retrieved information connects to broader context and related concepts.

## Graphiti Platform

Graphiti is an open-source platform designed to facilitate the combination of RAG and knowledge graph technologies. It provides tooling to build and maintain knowledge graphs while integrating them into retrieval workflows, allowing developers to implement context-aware information retrieval systems more efficiently. The platform abstracts away technical complexity in managing graph structures alongside traditional retrieval mechanisms.

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Optimizing-Claude-Code-Hidden-Settings-for-Workflow-Output-and-Privacy|Optimizing Claude Code Hidden Settings for Workflow Output and Privacy]] · [▶ source](https://www.youtube.com/watch?v=pDoBe4qbFPE)
- 2026-04-12: [[lab-notes/2026-04-12-RotorQuant-vs-TurboQuant-LLM-KV-Cache-Compression-Performance-Reality-|RotorQuant vs TurboQuant LLM KV Cache Compression Performance Reality ]] · [▶ source](https://www.youtube.com/watch?v=wSxsYjScRr0)
- 2026-04-18: [[lab-notes/2026-04-18-Anthropic-Claude-Opus-47-Agentic-Coding-Multimodal-and-Memory-Advancem|Anthropic Claude Opus 47 Agentic Coding Multimodal and Memory Advancem]] · [▶ source](https://www.youtube.com/watch?v=uXF6bR4_5RY)
