---
type: concept
domain: ai-agents
tags:
  - "rag"
  - "retrieval-strategy"
  - "document-provenance"
  - "metadata-enhancement"
  - "ai-agents"
  - "information-extraction"
aliases:
  - "Provenance-based Retrieval"
  - "Metadata-driven RAG"
  - "Context-aware Retrieval"
summary: A retrieval strategy in RAG that utilizes document provenance and metadata to improve accuracy beyond simple embedding similarity.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Source-aware retrieval

A [[concepts/document-retrieval|retrieval]] strategy in [[concepts/rag]] ([[concepts/answer-generation|Retrieval-Augmented Generation]]) that utilizes document provenance and [[concepts/metadata]] to improve accuracy beyond simple [[concepts/dense-vectors|Embeddings]] similarity.

### Key Implementation: LangExtract
- Uses a [[concepts/gemini|Gemini]]-powered [[concepts/document-processing|information extraction]] library to enable enhanced [[concepts/rag]] through precise [[concepts/metadata]] matching.
- Addresses fundamental flaws in traditional [[concepts/rag]] systems where [[concepts/vector-database]] chunks lack context, specifically:
    - [[concepts/document-versioning|Document versioning]] conflicts.
    - Discrepancies between different source documents.
- **Reference**: [LangExtract plus rag (Video)](https://www.youtube.com/watch?v=RPpGIxmdZYs)

---
**Backlinks**: 2026 04 14 [[concepts/contextual-awareness|LangExtract]] plus rag
