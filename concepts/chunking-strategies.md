---
type: concept
domain: ai-agents
tags:
  - "rag"
  - "text-chunking"
  - "chromadb"
  - "adam-lucek"
  - "rag-optimization"
  - "data-segmentation"
  - "semantic-chunking"
  - "information-retrieval"
aliases:
  - "text segmentation"
  - "chunking methods"
summary: Chunking strategies are methods for dividing text into smaller segments to improve information retrieval and processing in retrieval-augmented generation applications.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Chunking Strategies

Chunking strategies are methods for dividing text into smaller, manageable segments (chunks) to improve [[concepts/knowledge-bases|information retrieval]] and processing in applications like [[concepts/retrieval-augmented-generation-rag]].

## Key Concepts

- **Fixed-size chunking**: Divides text into chunks of equal length.
- **Semantic chunking**: Considers meaning and context to create chunks.
- **Overlapping chunks**: Chunks that share some content to preserve context.
- **Sliding window**: A technique where chunks are created by moving a fixed-size window across the text.

## Applications

- Essential for optimizing [[concepts/retrieval-augmented-generation-rag]] applications.
- Improves performance in [[concepts/knowledge-bases|information retrieval]] systems.

## Related Work

- [[entities/adam-lucek|Adam Lucek]] - optimal RAG chunking with ChromaDB
  - Video: [Optimal RAG Chunking with ChromaDB](https://www.youtube.com/watch?v=Pk2BeaGbcTE)
  - Explores various [[concepts/text-chunking|text chunking]] strategies for RAG.
  - Presents insights from a ChromaDB technical report titled "Evaluating Chunking Strategies for [[concepts/document-retrieval|Retrieval]]."
  - Details different methods, implementations, and performance findings.

## Backlinks

- 2026 04 14 [[entities/adam-lucek|Adam Lucek]] optimal RAG chunking with ChromaDB
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!
