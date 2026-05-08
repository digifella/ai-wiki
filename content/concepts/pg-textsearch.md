---
type: concept
domain: tools-platforms
group: apis-integrations-mcp
tags:
  - "postgresql"
  - "full-text-search"
  - "bm25-ranking"
  - "database-extension"
  - "open-source"
aliases:
  - "pg_textsearch"
  - "PostgreSQL textsearch"
summary: pg_textsearch is an open-source PostgreSQL extension that implements BM25 ranking and search capabilities.
updated: 2026-05-01
---
# Pg Textsearch

pg_textsearch is an [[concepts/open-source|open-source]] [[concepts/postgresql-extension|PostgreSQL extension]] designed to enhance [[concepts/full-text-search|full-text search]] capabilities within PostgreSQL databases. It implements [[concepts/bm25-ranking|BM25 ranking]], a probabilistic relevance framework widely recognized in [[concepts/knowledge-bases|information retrieval]] for scoring document relevance based on term frequency and document length normalization. This allows PostgreSQL users to perform more sophisticated search operations directly within their database without requiring external search infrastructure.

## Features and Integration

The extension integrates search functionality natively into PostgreSQL, enabling developers to implement relevance-ranked search queries as part of standard SQL operations. By leveraging the BM25 algorithm, pg_textsearch provides ranking mechanisms that typically outperform basic keyword matching, making search results more contextually relevant to user queries. This approach reduces the need for dedicated search platforms and simplifies application [[concepts/architecture|architecture]] for teams already using PostgreSQL as their primary data store.
