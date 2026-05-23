---
type: concept
domain: ai-agents
tags:
  - "knowledge-graphs"
  - "graph-rag"
  - "light-rag"
  - "unstructured-text"
  - "neo4j"
  - "langchain"
  - "vector-stores"
aliases:
  - "Graph Construction"
  - "Knowledge Graph Building"
summary: The page discusses building knowledge graphs from unstructured text and compares Light RAG with Graph RAG architectures.
updated: 2026-05-23
group: agent-systems-skills
---
# Relationships

Relationships form the connective tissue of [[concepts/knowledge-graphs|knowledge graphs]], representing how entities and concepts interact within a domain. In the context of [[concepts/agentic-ai|AI agents]] and retrieval systems, relationships enable the capture of semantic connections that exist in [[concepts/unstructured-text|unstructured text]], going beyond simple keyword matching to encode meaningful associations between information units. When building knowledge graphs from unstructured sources, extracting these relationships is essential for creating structured representations that preserve the logical and contextual connections present in the original data.

## Knowledge Graph Construction

The process of extracting relationships from unstructured [[concepts/text|text]] typically involves [[concepts/nlp|natural language processing]] techniques to identify entity pairs and the [[entities/nature|nature]] of their connections. Tools like [[entities/langchain|Langchain]] combined with [[concepts/graph-databases|graph databases]] such as [[entities/neo4j|Neo4j]] provide practical implementations for this task, allowing developers to programmatically parse documents and construct graph structures that reflect the underlying relationships in the source material.

## RAG Architectures

Relationships play a critical role in distinguishing different [[concepts/answer-generation|retrieval-augmented generation]] (RAG) approaches. [[concepts/light-rag|Light RAG]] implementations may rely on simpler relationship patterns for efficiency, while [[concepts/entity-relation-graphs|Graph RAG]] architectures leverage richer relationship structures to enable more sophisticated traversal and [[concepts/reasoning|reasoning]] over knowledge graphs. The choice of how relationships are represented and queried directly impacts the quality and relevance of information retrieved to support [[entities/agent|agent]] [[concepts/decision-making|decision-making]] and [[concepts/response-generation|response generation]].
## Source Notes
- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 2026-04-08: [[lab-notes/2026-04-08-LiteParse-Free-Local-Layout-Preserving-Document-Parsing-for-LLMs|LiteParse Free Local Layout Preserving Document Parsing for LLMs]] · [▶ source](https://www.youtube.com/watch?v=1GOJn9xiCc4)
- 2026-04-10: [[lab-notes/2026-04-10-Fundamental-UIUX-Design-Concepts-Affordances-Hierarchy-Grids|Fundamental UIUX Design Concepts Affordances Hierarchy Grids]] · [▶ source](https://www.youtube.com/watch?v=EcbgbKtOELY)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
- 2026-04-15: [[lab-notes/2026-04-15-Richard-Feynmans-View-Machine-Intelligence-vs-Human-Cognition|Richard Feynmans View Machine Intelligence vs Human Cognition]] · [▶ source](https://www.youtube.com/watch?v=ipRvjS7q1DI)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
- 2026-04-27: [[lab-notes/2026-04-27-Music-Chords-Foundations-Anatomy-Harmony-and-Scale-Relat|Music Chords: Foundations, Anatomy, Harmony, and Scale Relationships]] · [▶ source](https://www.youtube.com/watch?v=Uyr-GogTrls)
- 2026-04-30: [[lab-notes/2026-04-30-Asgard-Archaea-Recreating-Endosymbiosis-Origins-of-Compl|Asgard Archaea: Recreating Endosymbiosis, Origins of Complex Life]] · [▶ source](https://www.youtube.com/watch?v=vZBvT5brYZI)