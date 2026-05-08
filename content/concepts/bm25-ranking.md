---
type: concept
domain: tools-platforms
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
updated: 2026-05-01
---
# BM25 Ranking

BM25 is a probabilistic ranking algorithm used in [[concepts/knowledge-bases|information retrieval]] systems to score the relevance of documents against search queries. The algorithm evaluates relevance by combining three key factors: term frequency (how often a search term appears in a document), inverse document frequency (how rare a term is across all documents), and document length normalization (adjusting scores to account for document size differences). This multi-factor approach has made BM25 an effective and widely-adopted standard for [[concepts/full-text-search|full-text search]] [[concepts/software|applications]].

## PostgreSQL Integration

Within the PostgreSQL ecosystem, BM25 ranking functionality is available through the [[concepts/pg-textsearch|pg_textsearch]] extension, which extends Postgres's native text search capabilities. This extension enables database users to implement BM25-based ranking directly within their search queries, providing a more sophisticated alternative to basic full-text search methods. The integration allows BM25 ranking to be applied to indexed textual data stored in PostgreSQL databases, making it practical for production search systems that require nuanced relevance scoring.

## Source Notes

<!-- No relevant sources found — OpenClaw cost note was incorrectly attached -->