---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "embeddinggemma-2"
  - "multimodal-embedding"
  - "on-device-ai"
  - "rag"
  - "google-gemma"
aliases:
  - "Embedding Gemma 2"
summary: "EmbeddingGemma 2 is a 740-million parameter open-source multimodal embedding model by Google that maps text, code, images, video, and audio into a unified vector space for efficient on-device RAG workflows."
updated: 2026-10-11
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-10T02:32:42+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# EmbeddingGemma 2

**EmbeddingGemma 2** is a compact, open-source [[concepts/universal-embedding-model|multimodal embedding model]] developed by Google, designed to facilitate efficient [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) workflows, particularly in on-device scenarios.

## Key Specifications
- **Parameters:** 740 million
- **License:** Apache 2.0
- **Capabilities:** Unified cross-modal embedding space mapping diverse data types:
  - Text
  - Code
  - Images
  - Video
  - Audio

## Core Features
- **Unified Cross-Modal Embeddings:** Maps heterogeneous data types into a single vector space, enabling [[concepts/natural-language-search|semantic search]] across modalities.
- **On-Device Optimization:** Designed for efficiency, allowing deployment on edge devices with limited [[concepts/computational-resources|computational resources]].
- **Multimodal RAG:** Enhances RAG pipelines by allowing retrieval from mixed-media corpora using a single embedding model.

## References
- [[lab-notes/2026-10-10-EmbeddingGemma-2-On-Device-Multimodal-RAG-with-Unified-C|EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings]]
- [Embedding Gemma 2: On-Device Multimodal RAG Made Easy](https://www.youtube.com/watch?v=XtIBx6H9A_I) by [[concepts/prompt-based-modeling|Prompt Engineering]]
