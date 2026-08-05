---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "rag"
  - "context-engineering"
  - "hallucination-reduction"
  - "re-ranking"
  - "prompt-engineering"
aliases:
  - "Provence technique"
  - "RAG pruning"
summary: A context engineering technique that reduces hallucination in Retrieval Augmented Generation systems through re-ranking and pruning of retrieved information.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Information Pruning

Information pruning is a context engineering technique used in Retrieval Augmented Generation (RAG) systems to improve response quality by reducing hallucination. The method addresses a fundamental challenge in RAG: retrieved documents often contain irrelevant, contradictory, or low-confidence information that can cause language models to generate inaccurate outputs. By selectively filtering and re-ranking retrieved passages, information pruning removes noisy content before it reaches the language model, thereby constraining generation to higher-quality source material.

## Mechanism

The pruning process typically involves two stages. First, retrieved documents are re-ranked according to relevance metrics, semantic similarity to the query, or confidence scores assigned by auxiliary models. Second, passages below a specified threshold are removed from the context window, reducing the total amount of information presented to the language model. This filtering can occur at multiple levels—document-level, passage-level, or sentence-level—depending on the system architecture and available computational resources.

## Benefits and Trade-offs

Information pruning reduces the likelihood of the language model incorporating contradictory or tangential information into its response. By maintaining a smaller, higher-quality context window, the technique also improves computational efficiency and can reduce token consumption in systems with token-based pricing. However, aggressive pruning risks removing potentially relevant information, particularly for complex queries requiring synthesis across multiple sources. Effective implementation requires careful calibration of pruning thresholds to balance accuracy against recall.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
