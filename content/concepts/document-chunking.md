---
type: concept
domain: security-infrastructure
updated: 2026-04-14
group: data-pipelines-sync-storage
---
- "rag"
  - "document-chunking"
  - "[[concepts/knowledge-graph|knowledge-graph]]"
  - "[[concepts/information-extraction|information-extraction]]"
group: data-pipelines-sync-[[entities/storage|storage]]

# Document Chunking

Splitting documents into smaller, contextually coherent segments for efficient processing in [[concepts/rag]] systems.

## Key Approaches
- Fixed-size, semantic, or hierarchical [[concepts/chunking-strategies|chunking strategies]] balance context [[concepts/preservation|preservation]] and [[concepts/knowledge-retrieval-efficiency|retrieval efficiency]]
- Critical for reducing LLM [[concepts/context-windows|context length]] constraints while maintaining semantic coherence
- Avoiding arbitrary fixed-size splits (e.g., by using natural document [[concepts/structure|structure]] like paragraphs/sections) prevents [[concepts/context-loss|context loss]] and improves retrieval precision, as demonstrated in 2026 04 14 Channel [[entities/philschmid|the AI Automators]] Improving RAG
- **The Core Problem: Inefficient Chunking:** [[concepts/contextualized-language-understanding|RAG systems]] rely on breaking down large documents or web pages into smaller "chunks" that are then converted into vectors and stored in a [[concepts/vector-store|vector store]]

## Integration in Light RAG Systems
- As demonstrated in Build a [[concepts/light|light]] RAG system with [[entities/neo4j|neo4j]], chunking is the foundational step before:
  - Extracting [[concepts/nodes-and-relationships|nodes and relationships]] to build a [[concepts/knowledge-graph|knowledge graph]]
  - Storing chunks in a [[concepts/vector-store|vector store]] for [[concepts/natural-language-search|semantic search]]
  - Combining both graph and [[concepts/vector-representations|vector representations]] to augment LLM context
- **[[concepts/contrast|Contrast]] with [[concepts/graph-rag|Graph RAG]]**: Light RAG integrates knowledge graph [[concepts/structure|structure]] with vector store embeddings, whereas [[concepts/entity-relation-graphs|Graph RAG]] relies solely on graph traversal

## Advanced

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!