---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "ranking-algorithm"
  - "postgres"
  - "full-text-search"
  - "bm25"
  - "information-retrieval"
aliases:
  - "BM25"
  - "pg_textsearch ranking"
summary: BM25 is a ranking algorithm used within the pg_textsearch extension for Postgres.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Bm25 Ranking

BM25 is a probabilistic ranking algorithm utilized within the `pg_textsearch` extension for PostgreSQL to evaluate the relevance of documents against search queries. It functions by calculating a score that reflects how well a document matches the input terms, serving as a core component for full-text search capabilities in database environments. The algorithm is designed to balance exact term matching with broader relevance assessment, making it effective for ranking results across diverse datasets.

The scoring mechanism relies on term frequency and inverse document frequency (IDF) to weight the importance of individual words. Term frequency measures how often a term appears in a specific document, while IDF adjusts this weight based on how common or rare the term is across the entire corpus. This combination allows the algorithm to prioritize terms that are significant to a specific document but uncommon in the general collection, thereby improving the precision of search results.

In the context of PostgreSQL, BM25 provides a standardized method for ordering search results without requiring external search engines. By integrating this logic directly into the database layer, applications can leverage efficient indexing and querying capabilities while maintaining accurate relevance rankings. This approach simplifies infrastructure by reducing the need for separate search systems, although it may have performance limitations compared to specialized search platforms for extremely large-scale datasets.

## Source Notes

<!-- No relevant sources found — OpenClaw cost note was incorrectly attached -->
