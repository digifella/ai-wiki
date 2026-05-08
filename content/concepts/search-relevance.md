---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "search-ranking"
  - "bm25"
  - "postgres"
  - "text-search"
  - "rag"
  - "information-retrieval"
aliases:
  - "Search Quality"
  - "Relevance Ranking"
summary: pg_textsearch is an open-source extension for Postgres that provides BM25 ranking and enhanced text search capabilities.
updated: 2026-05-01
---
# Search Relevance

Search relevance refers to how well search results match a user's query in terms of importance and pertinence. In the context of [[concepts/agentic-ai|AI agents]] and database systems, achieving high search relevance is critical for retrieving the most useful information quickly. Poor relevance ranking can result in relevant information being buried beneath less useful results, degrading the effectiveness of [[concepts/knowledge-bases|information retrieval]] systems.

## BM25 Ranking

BM25 is a probabilistic ranking function widely used in information retrieval to score and rank documents based on query terms. It accounts for term frequency, inverse document frequency, and document length normalization, making it more sophisticated than simple keyword matching. BM25 has become an industry standard for text search because it produces more intuitive results in many practical [[concepts/scenarios|scenarios]].

## pg_textsearch

pg_textsearch is an [[concepts/open-source|open-source]] [[concepts/postgresql-extension|PostgreSQL extension]] that brings BM25 ranking capabilities and enhanced text search features directly into relational databases. By integrating advanced ranking algorithms into Postgres, it enables developers to perform more sophisticated full-text searches without requiring separate search infrastructure. This approach simplifies [[concepts/deployment|deployment]] and reduces operational complexity for [[concepts/software|applications]] that need both relational [[concepts/data-management|data management]] and high-quality text search functionality.

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-21: 12 Advanced Google Search · [▶ source](https://www.youtube.com/watch?v=C-2YMhMu5Lc)