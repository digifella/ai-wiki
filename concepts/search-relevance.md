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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Search Relevance

Search relevance measures the degree to which retrieved information aligns with a user's query in terms of importance and pertinence. In the context of AI agents and database systems, high search relevance is essential for efficiently retrieving useful data. When relevance ranking is poor, critical information may be obscured by less relevant results, which degrades the overall effectiveness of information retrieval systems and hinders an agent's ability to access the knowledge required for decision-making and task completion.

Achieving accurate relevance often involves sophisticated ranking algorithms that evaluate the semantic and lexical match between a query and stored documents. Traditional full-text search methods rely on keyword frequency and proximity, while modern approaches increasingly incorporate vector similarity to capture contextual meaning. The balance between precision and recall determines how well a system filters noise while maintaining coverage of potentially relevant records.

To implement robust search relevance in PostgreSQL, developers often utilize extensions such as `pg_textsearch`. This open-source tool provides BM25 ranking capabilities, which improve upon standard boolean full-text search by weighting terms based on their statistical significance within the corpus. By leveraging BM25, systems can produce more nuanced relevance scores, ensuring that documents containing rare but significant terms are ranked higher than those with common, less distinctive keywords.

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-07: [[lab-notes/2026-04-07-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
- 2026-04-21: 12 Advanced Google Search · [▶ source](https://www.youtube.com/watch?v=C-2YMhMu5Lc)
