---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "file-search"
  - "rag-alternative"
  - "agent-exploration"
  - "fs-explorer"
  - "search-methodology"
  - "agent-skills"
  - "bm25"
  - "lexical-search"
aliases:
  - "agentic-file-search"
  - "exploration-based-search"
summary: The fs-explorer project introduces agentic file search as a method to replace RAG with exploration.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T20:55:55+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Agentic Search

Agentic search is an [[concepts/knowledge-bases|information retrieval]] approach where [[concepts/agentic-systems|autonomous agents]] actively explore file systems or knowledge bases to locate relevant information, rather than relying on static, pre-indexed retrieval methods. In this model, an agent navigates through documents and directory structures iteratively, evaluating relevance based on discovered content and deciding which paths to explore next. This transforms information discovery from a lookup operation into an exploration process, allowing agents to adapt their search strategies dynamically as new context becomes available.

This methodology contrasts with traditional [[concepts/answer-generation|Retrieval-Augmented Generation]] systems, which typically depend on fixed [[concepts/dense-vectors|embeddings]] and [[concepts/vector-databases|vector databases]]. By treating search as a sequential [[concepts/decision-making|decision-making]] problem, agentic search can handle complex queries that require traversing hierarchical structures or synthesizing information from disparate sources without prior indexing. The process involves continuous [[concepts/systems|feedback loops]] where the agent assesses the relevance of retrieved chunks and refines its search strategy.

### Key Insights & Evolution

*   **Lexical vs. Semantic:** While [[concepts/embedding-based-retrieval|vector search]] dominates modern [[concepts/rag]] implementations, lexical methods remain critical in [[concepts/agentic-search]] contexts.
*   **BM25 Resurgence:** Recent analysis highlights the "unreasonable effectiveness" of BM25 for [[concepts/agentic-search]], defined specifically as "search inside an [[concepts/operational-loop|agent loop]]" [[lab-notes/2026-10-03-BM25s-Unreasonable-Effectiveness-in-LLM-Driven-Agentic-S|BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search]].
*   **Agent Loop Integration:** Unlike static retrieval, agentic search leverages BM25's precision within the iterative decision-making process of an [[concepts/ai-agent]], allowing for more robust handling of specific entity names and technical terms that embeddings might obscure.
*   **Hybrid Approaches:** Effective [[entities/fs-explorer]] implementations often combine the semantic understanding of LLMs with the exact-match precision of BM25 to optimize the exploration phase.

### References

*   Jo Kristian Bergum, CEO of Hornet Dev. "The unreasonable effectiveness of BM25 for agentic search." [BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search](https://www.youtube.com/watch?v=fZH97QHHYjY)
