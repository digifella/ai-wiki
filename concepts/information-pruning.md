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
updated: 2026-10-05
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Information Pruning

Information pruning is a context engineering technique utilized within Retrieval Augmented Generation (RAG) systems to improve response accuracy and mitigate hallucinations. It addresses the challenge of noisy, irrelevant, or contradictory data in retrieved documents, which can otherwise mislead large language models. By selectively filtering and re-ranking retrieved passages, this method ensures that the model processes only high-quality source material relevant to the user's query.

The process typically involves two primary stages: filtering and re-ranking. Initial filtering removes documents that fail to meet basic relevance thresholds, often using lexical matching or lightweight embedding similarity scores. This step reduces the computational load and eliminates obvious noise before more intensive processing occurs.

Re-ranking then refines the remaining set of candidates by applying more sophisticated models to assess semantic relevance. These models evaluate the nuanced relationship between the query and each document, assigning a confidence score that determines the final order of context injection. This prioritization ensures that the most informative passages are positioned prominently within the context window.

By constraining the input space to verified, high-confidence sources, information pruning reduces the probability that the language model will generate fabricated or unsupported statements. This technique is particularly effective in domains where precision is critical, as it directly limits the influence of low-quality or off-topic data on the final output.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
