---
type: concept
domain: ai-agents
tags:
  - "llm-driven-search"
  - "agentic-search"
  - "hybrid-retrieval"
  - "bm25"
  - "lexical-matching"
  - "vector-search"
  - "retrieval-augmentation"
  - "knowledge-bases"
aliases:
  - "LLM-driven search"
  - "Agentic Search"
  - "Hybrid Retrieval"
summary: "LLM-driven search integrates Large Language Models into retrieval pipelines, combining dense vector embeddings with sparse lexical methods like BM25 to enhance precision in agentic workflows."
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T21:01:35+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# LLM-driven search

**LLM-driven search** refers to the integration of [[concepts/demystifying-llms|Large Language Models]] into the [[concepts/document-retrieval|retrieval]] and [[concepts/reasoning|reasoning]] pipeline of [[concepts/knowledge-bases|search systems]]. While early implementations relied heavily on dense [[concepts/data-embedding|vector embeddings]] for [[concepts/semantic-similarity|semantic similarity]], recent developments highlight the critical role of traditional lexical methods in complex, [[concepts/deep-reasoning|multi-step reasoning]] tasks.

## Core Concepts

- **[[concepts/agentic-search|Agentic Search]]**: Defined as "search inside an [[concepts/operational-loop|agent loop]]," where retrieval is not a one-off query but an [[concepts/iterative-refinement|iterative process]] within a [[entities/react]] or similar reasoning framework.
- **Hybrid Retrieval**: The combination of sparse lexical matching and dense [[concepts/vector-database-retrieval|vector search]] to balance [[concepts/accuracy|precision]] and [[concepts/recall|recall]].
- **[[concepts/bm25-ranking|BM25]] Resurgence**: Despite the dominance of neural [[concepts/dense-vectors|embeddings]], lexical scoring functions remain highly effective for specific [[concepts/agentic-tasks|agentic tasks]].

## BM25 in Agentic Contexts

Recent analysis highlights the "unreasonable effectiveness" of [[concepts/bm25]] in modern [[concepts/agentic-patterns|agentic workflows]] [[lab-notes/2026-10-03-BM25s-Unreasonable-Effectiveness-in-LLM-Driven-Agentic-S|BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search]]. Key insights include:

- **Lexical Precision**: BM25 excels at exact keyword matching, which is crucial for [[concepts/agentic-loops|agentic loops]] requiring precise [[concepts/entity-extraction|entity extraction]] or code snippet retrieval where semantic drift is detrimental.
- **[[concepts/ai-interpretability|Interpretability]]**: Unlike [[concepts/black-box-models|black-box]] embeddings, BM25 provides transparent scoring based on term frequency and inverse document frequency, aiding in [[concepts/debugging|debugging]] agent failures.
- **[[concepts/model-efficiency|Resource Efficiency]]**: As a 30-year-old [[concepts/algorithm|algorithm]], BM25 is computationally lightweight compared to [[concepts/embedding-models|embedding models]], allowing for faster [[concepts/iteration|iteration]] within tight [[concepts/agent-loops|agent loops]].
- **Complementarity**: It serves as a robust fallback or parallel channel to vector search, mitigating the "lost in the middle" or semantic mismatch issues common in pure [[concepts/embedding-based-retrieval|embedding-based retrieval]].

## References

- [[entities/jo-kristian-bergum|Jo Kristian Bergum]], CEO of Hornet Dev. "The unreasonable effectiveness of BM25 for agentic search." [[BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search](https://www.youtube.com/watch?v=fZH97QHHYjY)]
