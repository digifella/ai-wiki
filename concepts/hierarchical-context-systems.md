---
type: concept
domain: ai-agents
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
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Hierarchical Context Systems

Hierarchical Context Systems organize information provided to [[concepts/ai-agents|AI agents]] through structured, multi-layered arrangements rather than flat document collections. This design approach addresses fundamental limitations in traditional [[concepts/answer-generation|retrieval-augmented generation]] (RAG) systems, which typically return [[concepts/contextual-information|contextual information]] based on relevance matching alone. By arranging context at multiple levels—such as document summaries at higher levels and detailed passages at lower levels—these systems enable more [[concepts/efficient-information-retrieval|efficient information retrieval]] and [[concepts/reasoning|reasoning]].

The architecture typically employs a tree-like structure where parent [[concepts/nodes|nodes]] contain condensed representations of their children. During the retrieval [[concepts/phase|phase]], the system first queries the higher-level nodes to identify relevant sections, then drills down into specific leaf nodes for detailed content. This two-step process reduces the noise associated with flat [[concepts/embedding-based-retrieval|vector search]] and allows the agent to maintain a broader understanding of the topic while accessing precise details only when necessary.

Implementation often involves pre-processing documents to generate summaries or [[concepts/dense-vectors|embeddings]] for each hierarchical level. The system then indexes these layers separately, allowing for targeted searches that balance breadth and depth. This structure is particularly effective for [[concepts/advanced-reasoning|complex reasoning]] tasks where the agent must synthesize information from multiple sources without exceeding [[concepts/context-length|context window]] limits or losing track of the overarching [[concepts/storytelling|narrative]].
## Source Notes
- 2026-04-08: stop uploading [[concepts/files|files to AI (use this system instead)]]
- 2026-04-07: [[lab-notes/2026-04-07-Structured-AI-Context-Beyond-RAG-Limitations-with-Map-First-Architectu|Structured AI Context Beyond RAG Limitations with Map First Architectu]] · [▶ source](https://www.youtube.com/watch?v=SjqfDcGZOHg)
