---
type: concept
domain: ai-agents
tags:
  - "retrieval"
  - "rag"
  - "information-extraction"
  - "ai"
  - "source-aware-retrieval"
  - "rag-optimization"
  - "metadata-matching"
  - "document-provenance"
  - "langextract"
aliases:
  - "metadata-driven-retrieval"
  - "provenance-aware-retrieval"
summary: "A retrieval strategy in RAG that utilizes document provenance and metadata to improve accuracy beyond simple embedding similarity."
updated: 2026-04-17
group: applied-ai-workflows
---
# Source-aware retrieval

A retrieval strategy in [[concepts/rag]] (Retrieval-Augmented Generation) that utilizes document provenance and [[concepts/metadata]] to improve [[concepts/accuracy|accuracy]] beyond simple Embeddings similarity.

### Key Implementation: LangExtract
- Uses a [[concepts/gemini|Gemini]]-powered [[concepts/document-processing|information extraction]] library to enable enhanced [[concepts/rag]] through precise [[concepts/metadata]] matching.
- Addresses fundamental flaws in traditional [[concepts/rag]] systems where [[concepts/vector-database]] chunks lack context, specifically:
    - Document versioning conflicts.
    - Discrepancies between different source documents.
- **Reference**: [LangExtract plus rag (Video)](https://www.youtube.com/watch?v=RPpGIxmdZYs)

---
**Backlinks**: 2026 04 14 LangExtract plus rag
