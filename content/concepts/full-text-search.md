---
type: concept
domain: ai-agents
tags:
  - "database"
  - "search"
  - "full-text"
  - "bm25"
  - "rag"
  - "information-retrieval"
  - "database-search"
aliases:
  - "text search"
  - "document search"
summary: "Full-text search is a technique for searching within text bodies, enabling efficient retrieval of documents containing specific words or phrases."
updated: 2026-04-15
group: applied-ai-workflows
---
# Full-text search

A technique for searching within text bodies, enabling efficient retrieval of documents containing specific words or phrases. Commonly implemented in databases and [[concepts/knowledge-bases|information retrieval]] systems.

## Recent Developments

- **[[entities/pg-textsearch|pg_textsearch]]**: [[concepts/open-source|Open-source]] **PostgreSQL** extension integrating **[[concepts/bm25|BM25]]** ranking and [[concepts/search-relevance|search relevance]] natively, eliminating need for external engines like **Elasticsearch** for many **AI** and **RAG** ([[concepts/answer-generation|Retrieval Augmented Generation]]) [[concepts/scenarios|use cases]].
- Video discussion: [[concepts/database-search|Database search]] [[concepts/setup|setup]] - Channel [[entities/tech-with-tim|Tech with Tim]] (2026-04-14) covers implementation and implications for database search evolution.

Backlink: 2026 04 14 Database search setup [[entities/channel-tech|Channel Tech]] with Tim

## Source Notes
- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-22: [[lab-notes/2026-04-22-AnythingLLM-1.12-Channels-Mobile-Interaction-with-Private-Self-Hosted-LLMs|AnythingLLM 1.12 Channels: Mobile Interaction with Private Self-Hosted LLMs]] · [▶ source](https://youtu.be/Ei5nB5fyn7g)
- 2026-04-29: Hermes · [▶ source](https://www.youtube.com/watch?v=1ve4Atbqmoo)