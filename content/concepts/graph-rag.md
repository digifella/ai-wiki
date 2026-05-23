---
type: concept
domain: tools-platforms
summary: Graph RAG uses knowledge graphs and LLMs to query structured relationships, enhancing retrieval precision over vector search methods.
updated: 2026-05-23
group: web-publishing-quartz-websites
---
- "[[concepts/graphrag|graph-rag]]"
  - "[[concepts/knowledge-graph|knowledge-graph]]"
  - "rag"
  - "llm"
  - "[[concepts/knowledge-bases|information-retrieval]]"
  - "entity-[[concepts/relationships|relationships]]"
  - "graph-traversal"
  - "model-agnostic"
  - "context-precision"
aliases:
  - "[[concepts/entity-relation-graphs|Graph RAG]]"
group: web-publishing-quartz-websites

# Graph RAG

[[concepts/graph-retrieval-augmented-generation|Graph Retrieval Augmented Generation]] (Graph RAG) leverages [[concepts/knowledge-graphs|Knowledge Graphs]] and [[concepts/large-language-model]]s (LLMs) to query structured [[concepts/relationships|relationships]] for enhanced retrieval in [[concepts/rag]] systems, offering a more precise alternative to traditional [[concepts/vector-search|Vector Search]].

**Key features:**
- **Flexibility**: Graph RAGs avoid the constraint of using the same [[concepts/embedding-model|embedding model]] for both generation and retrieval (unlike fixed-embedding [[concepts/vector-database-retrieval|Vector Search]] approaches).
- **Structured Querying**: Enables relationship-aware retrieval through graph traversals (e.g., "find all projects involving *Company X* and *[[entities/dr-károly-zsolnai-fehér|AI researcher]] Y*").
- **Contextual Precision**: Reduces [[concepts/ambiguity|ambiguity]] by leveraging explicit [[concepts/entity-relationships|entity relationships]] in the [[concepts/vector-store|knowledge graph]].

**Comparison to [[concepts/traditional-rag|traditional RAG]]:**
| Approach       | Limitation                          | Graph RAG Advantage               |
|----------------|-------------------------------------|------------------------------------|
| Vector Search  | Lacks structured relationship querying | Enables precise relationship queries |

**Additional Insights:**
- **[[concepts/light|Light]] RAG Comparison**: A [[concepts/light-rag|Light RAG]] system, as demonstrated in [[entities/tech-with-homayoun|Tech with Homayoun]]'s video, contrasts with Graph RAG by focusing on [[concepts/chunking-documents|chunking documents]] and extracting [[concepts/nodes-and-relationships|nodes and relationships]] for [[entities/storage|storage]] in both a [[concepts/vector-store|vector store]] and a [[concepts/knowledge-graph|knowledge graph]].
## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-AI-Powered-Autonomous-Social-Video-Content-Generation-and-Optimization|AI Powered Autonomous Social Video Content Generation and Optimization]] · [▶ source](https://www.youtube.com/watch?v=vjJwgXsMfjM)
- 2026-04-08: [[lab-notes/2026-04-08-Awkward-Primes-Minimal-Line-Coverage-of-Prime-Number-Coordinates|Awkward Primes Minimal Line Coverage of Prime Number Coordinates]] · [▶ source](https://www.youtube.com/watch?v=VFoIPlUalRY)
- 2026-04-11: [[lab-notes/2026-04-11-Report-Understanding-and-Navigating-Hedonic-Adaptation-for-Sustainable|Report Understanding and Navigating Hedonic Adaptation for Sustainable]] · [▶ source](https://www.youtube.com/watch?v=SdJSjj2A710)
- 2026-04-12: [[lab-notes/2026-04-12-RotorQuant-vs-TurboQuant-LLM-KV-Cache-Compression-Performance-Reality-|RotorQuant vs TurboQuant LLM KV Cache Compression Performance Reality ]] · [▶ source](https://www.youtube.com/watch?v=wSxsYjScRr0)
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)
- 2026-04-22: Graphify · [▶ source](https://www.youtube.com/watch?v=BkHps04qGgc)
- 2026-04-26: Karpathy
- 2026-04-27: AI Context Layer Architectures: Karpathy