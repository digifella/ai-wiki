---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "rag"
  - "context-engineering"
  - "pruning"
  - "hallucination-reduction"
  - "retrieval-augmented-generation"
  - "prompt-engineering"
aliases:
  - "Provence"
  - "RAG pruning"
  - "context pruning"
summary: Provence is a context engineering technique used for RAG re-ranking with pruning to reduce hallucinations.
updated: 2026-05-01
---
# Efficient Pruning

Efficient Pruning is a [[concepts/external-knowledge|context engineering]] technique employed in [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) systems to improve output quality and reduce hallucinations. The approach, exemplified by the Provence method, combines re-ranking with selective pruning of retrieved context to ensure that only the most relevant and reliable information is passed to the [[concepts/statistical-language-modeling|language model]] during generation.

## How It Works

In [[concepts/contextualized-language-understanding|RAG systems]], retrieved documents are typically ranked by relevance before being included in the prompt context. Efficient pruning extends this process by actively removing or filtering documents that fall below relevance thresholds or that may introduce conflicting or unreliable information. This selective inclusion of context reduces the noise that can lead language models to generate plausible-sounding but factually incorrect [[concepts/responses|responses]].

## Context Engineering Application

As a context engineering technique, efficient pruning operates at the interface between [[concepts/knowledge-bases|information retrieval]] and prompt construction. By carefully curating which retrieved passages appear in the model's [[concepts/context-window|context window]], it addresses a fundamental challenge in RAG systems: that more context does not always improve answer quality, and irrelevant or contradictory context can degrade performance. This approach is particularly useful when working with large document collections where retrieval systems may return marginally relevant results alongside high-quality matches.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)