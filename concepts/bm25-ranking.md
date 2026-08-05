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
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# BM25 Ranking

BM25 is a probabilistic ranking algorithm used in information retrieval systems to score the relevance of documents against search queries. The algorithm combines three primary factors: term frequency (how often search terms appear within a document), inverse document frequency (how rare a term is across the entire document collection), and document length normalization (adjusting scores to account for varying document sizes). This multi-factor approach balances exact term matching with broader relevance assessment, making it effective for ranking search results across diverse document collections.

## Implementation in PostgreSQL

BM25 ranking is available within PostgreSQL through the `pg_trgm` and full-text search extensions. The algorithm can be applied to text search queries to improve ranking quality compared to simpler relevance metrics. PostgreSQL's implementation allows users to integrate BM25 scoring into their full-text search operations, providing more nuanced result ordering based on actual document relevance rather than simple keyword presence.

## Practical Usage

BM25 is particularly useful in applications requiring precise search result ranking, such as documentation systems, e-commerce product search, and content management platforms. The algorithm's sensitivity to both term importance and document length makes it adaptable to different types of content. However, BM25 requires tuning of parameters like saturation point and length normalization factor to achieve optimal results for specific use cases.

## Source Notes

<!-- No relevant sources found — OpenClaw cost note was incorrectly attached -->
