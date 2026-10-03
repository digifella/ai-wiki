---
type: concept
domain: ai-agents
tags:
  - "query-formulation"
  - "agentic-search"
  - "bm25"
  - "semantic-retrieval"
  - "vector-embeddings"
  - "hybrid-retrieval"
  - "agent-loop"
  - "lexical-matching"
aliases:
  - "query refinement"
  - "search input optimization"
  - "agentic query structuring"
summary: "Query formulation is the dynamic process of structuring and refining search inputs, increasingly utilizing hybrid approaches that combine BM25 lexical scoring with vector embeddings within agentic loops."
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T21:09:26+00:00" }
group: agent-systems-skills
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Query Formulation

**Query formulation** refers to the process of structuring, refining, and optimizing search inputs to retrieve relevant information. In modern [[concepts/llm]]-driven architectures, this concept has expanded beyond simple keyword matching to include semantic understanding and [[concepts/iterative-learning|iterative refinement]] within agentic-workflow [[concepts/loops|loops]].

## Core Principles

*   **Lexical vs. Semantic:** Traditional query formulation relies on [[concepts/bm25]] for lexical scoring, while modern approaches integrate [[concepts/data-embedding|vector embeddings]] for [[concepts/semantic-similarity|semantic similarity]].
*   **Agentic Context:** In [[concepts/agentic-search|agentic search]], query formulation is not a one-time action but a dynamic process occurring "inside an [[concepts/operational-loop|agent loop]]," where the agent iteratively refines queries based on intermediate results.
*   **Resurgence of [[concepts/bm25-ranking|BM25]]:** Despite the dominance of dense [[concepts/document-retrieval|retrieval]], lexical methods like [[concepts/bm25]] have shown "unreasonable effectiveness" in specific agentic contexts, particularly for precise keyword matching and handling rare terms.

## Key Insights from Recent Research

*   **BM25 in [[concepts/vanishing-gradient-problem|Agentic Search]]:** Recent analysis highlights the unexpected utility of [[concepts/bm25]] in LLM-driven agentic search, challenging the assumption that dense retrieval always outperforms lexical methods.
*   **Hybrid Approaches:** Effective query formulation often combines [[concepts/bm25]] for exact match [[concepts/recall|recall]] with [[concepts/embedding-based-retrieval|vector search]] for semantic relevance.
*   **Agent [[concepts/loop|Loop]] Dynamics:** The effectiveness of query formulation is heavily dependent on the agent's ability to interpret [[concepts/feedback|feedback]] and adjust search strategies in real-time.

## References

*   [[lab-notes/2026-10-03-BM25s-Unreasonable-Effectiveness-in-LLM-Driven-Agentic-S|BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search]]
*   [BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search](https://www.youtube.com/watch?v=fZH97QHHYjY)
