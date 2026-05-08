---
type: concept
domain: tools-platforms
tags:
  - "knowledge-graph"
  - "graph-database"
  - "neo4j"
  - "rag"
  - "light-rag"
  - "semantic-search"
  - "data-integration"
aliases:
  - "KG"
summary: "A knowledge graph is a structured representation of information using nodes and relationships to enable efficient querying and reasoning."
updated: 2026-04-28
group: web-publishing-quartz-websites
---
# Knowledge Graph

A knowledge representation [[concepts/structure|structure]] that organizes information as [[concepts/nodes-and-relationships]], enabling efficient querying and [[concepts/reasoning|reasoning]].

## Key Concepts

- **[[concepts/nodes|Nodes]]**: Represent entities or concepts.
- **[[concepts/relationships|Relationships]]**: Define connections between nodes.
- **Properties**: Attributes associated with nodes or [[concepts/relationships|relationships]].
- **Querying**: Uses graph-specific languages like Cypher (for [[entities/neo4j]]).

## Applications

- **[[concepts/natural-language-search|Semantic Search]]**: Enhances [[concepts/search-relevance|search relevance]] by understanding context.
- **Recommendation Systems**: Leverages relationships to suggest relevant items.
- **Data [[concepts/integration|Integration]]**: Combines disparate data sources into a unified [[concepts/structure|structure]].

## Related Concepts

- [[concepts/graph-database]]
- [[concepts/vector-store]]
- [[concepts/retrieval-augmented-generation-rag]]
- [[concepts/light-rag]]

## Integration with Light RAG

- **Light RAG System with Neo4j**:
  - Demonstrated in a [[entities/tech-with-homayoun]] video (2026-04-14).
  - Involves [[concepts/chunking-documents|chunking documents]] and extracting [[concepts/nodes-and-relationships]].
  - Stores data in both a [[concepts/vector-store]] and a knowledge graph.
  - Contrasts with [[concepts/graph-rag]] by focusing on a lighter [[concepts/architecture|architecture]].

## Backlinks

- 2026 04 14 Build a [[concepts/light-rag|light RAG]] system with [[entities/neo4j|neo4j]]

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Second-Brain-Claude-Code-Integration-with-Obsidian|AI Powered Second Brain Claude Code Integration with Obsidian]] · [▶ source](https://www.youtube.com/watch?v=2kbINqpluM0)
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)
- 2026-04-27: AI Context Layer Architectures: Karpathy