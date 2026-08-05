---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "concept"
  - "rag"
  - "context-engineering"
  - "hallucination-reduction"
  - "retrieval-augmented-generation"
  - "re-ranking"
  - "pruning"
aliases:
  - "Provence"
  - "RAG re-ranking with pruning"
summary: A context engineering technique that reduces hallucination in Retrieval Augmented Generation through re-ranking and pruning of retrieved content.
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Vanilla Rag

Vanilla Rag is a context engineering technique that improves Retrieval Augmented Generation (RAG) systems by reducing hallucination through selective filtering of retrieved content. RAG systems enhance language model outputs by retrieving relevant passages from external knowledge sources before generation. However, retrieved content often includes irrelevant, contradictory, or marginally useful information that can degrade response quality and increase the likelihood of hallucinations—where models generate plausible but factually incorrect information.

## Mechanism

Vanilla Rag addresses this problem through two primary operations: re-ranking and pruning of retrieved passages. Re-ranking reorders retrieved results according to their relevance to the user's query, ensuring the most pertinent information appears first. Pruning then removes passages below a relevance threshold, reducing the amount of potentially misleading or tangential content that the language model must process. This combination creates a more focused context window containing primarily high-quality, relevant information.

## Impact

By reducing noise in the retrieval stage, Vanilla Rag helps language models generate more accurate and grounded responses. The technique is particularly effective in scenarios where large retrieval sets contain heterogeneous information or where strict context length limitations make selective inclusion of passages valuable. This approach represents a practical middle ground between naive RAG implementations and more complex reranking architectures.

## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: ## LlamaIndex's [[concepts/liteparse|LiteParse]]: Agentic [[concepts/document-processing|Document Processing]] and the End of Frameworks **Clip title:** LiteParse - The Local Document Parser **Author / channel:** Sam Witteveen **URL:** https://www.youtube.com/watch?v=_lpYx03VVBM (LlamaIndex's LiteParse: Agentic Document Processing and the End of Frameworks)
- 2026-04-08: [[lab-notes/2026-04-08-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
