---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: developer-tooling-clis
---
# BM25 Ranking

[[concepts/bm25|BM25]] is a probabilistic ranking algorithm widely used in [[concepts/knowledge-bases|information retrieval]] systems to score the relevance of documents against search queries. The algorithm combines three primary factors: term frequency (the frequency of search terms within a document), inverse document frequency (how rare a term is across the entire document collection), and document length normalization (adjusting scores to account for varying document sizes). This multi-factor approach has made BM25 an effective standard for [[concepts/full-text-search|full-text search]] [[concepts/software|applications]].

## Implementation in PostgreSQL

BM25 ranking is available within PostgreSQL through the `pg_trgm` and related text search extensions. The algorithm can be used to rank results from full-text search queries, allowing users to retrieve documents ordered by relevance rather than arbitrary criteria. PostgreSQL's [[concepts/adoption|implementation]] provides configurable [[concepts/parameters|parameters]] that control how heavily term frequency and document length [[concepts/power|influence]] final relevance scores, enabling tuning for specific [[concepts/scenarios|use cases]].

## Characteristics and Usage

BM25 performs well across diverse document collections and query types without requiring extensive parameter adjustment. The algorithm's [[concepts/robustness|robustness]] has contributed to its adoption across search engines, database systems, and information retrieval platforms. It remains a popular choice for applications where [[concepts/search-relevance|relevance ranking]] is important but machine learning-based approaches are not available or practical.
## Source Notes

<!-- No relevant sources found — OpenClaw cost note was incorrectly attached -->