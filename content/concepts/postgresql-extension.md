---
type: concept
domain: tools-platforms
group: apis-integrations-mcp
tags:
  - "postgresql"
  - "search"
  - "bm25-ranking"
  - "full-text-search"
  - "database-extensions"
  - "open-source"
aliases:
  - "pg_textsearch"
  - "PostgreSQL text search extension"
summary: pg_textsearch is an open-source PostgreSQL extension that implements BM25 ranking and search functionality.
updated: 2026-05-01
---
# PostgreSQL Extension

**[[concepts/pg-textsearch|pg_textsearch]]** is an [[concepts/open-source|open-source]] PostgreSQL extension designed to provide [[concepts/full-text-search|full-text search]] capabilities with [[concepts/bm25-ranking|BM25 ranking]] algorithms. BM25 is a probabilistic relevance framework widely used in [[concepts/knowledge-bases|information retrieval]] systems for ranking search results based on term frequency and document relevance. By implementing this ranking method within PostgreSQL, pg_textsearch enables developers to perform sophisticated text searches directly within their database without requiring separate search infrastructure.

## Functionality and Use Cases

The extension allows users to index and search text documents stored in PostgreSQL with relevance-based ranking. This approach integrates search functionality into the database layer, reducing the need for external search engines in certain [[concepts/software|applications]]. Organizations can leverage pg_textsearch for applications requiring full-text search on moderately scaled datasets, such as document repositories, content management systems, or knowledge bases.

## Integration with PostgreSQL

As a native PostgreSQL extension, pg_textsearch operates within the PostgreSQL ecosystem and can be integrated into existing database schemas and queries. This positioning allows developers to work with a unified database system rather than managing separate tools, though the extension's performance characteristics and scalability limits should be evaluated against specific application requirements.
