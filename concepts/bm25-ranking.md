---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Bm25 Ranking

[[concepts/bm25|BM25]] is a probabilistic ranking [[concepts/algorithm|algorithm]] employed within the `pg_textsearch` extension for PostgreSQL to evaluate the relevance of documents against search queries. It functions by calculating a score that reflects how well a document matches the input terms, serving as a core component for [[concepts/full-text-search|full-text search]] capabilities in database environments. The algorithm is designed to balance exact term matching with broader relevance assessment, making it effective for ranking results across diverse datasets.

The scoring mechanism combines three primary factors: term frequency, inverse document frequency, and document length normalization. Term frequency measures how often search terms appear within a specific document, while inverse document frequency assesses the [[concepts/rarity|rarity]] of those terms across the entire document collection. Document length normalization adjusts the scores to account for varying document sizes, ensuring that longer documents do not inherently receive higher relevance scores simply due to their volume.

This multi-factor approach allows BM25 to provide a more nuanced ranking than simple keyword counting. By weighting rare terms more heavily and penalizing overly long documents, the algorithm helps identify the most pertinent results for a given query. Its integration into PostgreSQL via `pg_textsearch` enables efficient and scalable text search operations without requiring external search engines.
## Source Notes

<!-- No relevant sources found — OpenClaw cost note was incorrectly attached -->
