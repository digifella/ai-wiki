---
type: concept
domain: ai-agents
tags:
  - "multimodal-rag"
  - "document-parsing"
  - "visual-extraction"
  - "layout-analysis"
  - "pixelrag"
  - "information-retrieval"
  - "embedding-models"
  - "on-device-ai"
aliases:
  - "Visual RAG"
  - "Screenshot-based Retrieval"
  - "Image-based Document Processing"
  - "EmbeddingGemma 2"
summary: Page Screenshots involve capturing static images of documents to preserve layout semantics for multimodal AI. EmbeddingGemma 2 introduces on-device unified cross-modal embeddings for efficient multimodal RAG.
updated: 2026-10-10
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-10T02:36:13+00:00" }
group: multimodal-generative-media
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Page Screenshots

**Page Screenshots** refer to the practice of capturing static visual representations (images) of dynamic or complex document formats—such as Web Pages, [[concepts/pdfs|PDFs]], and Word Documents—and processing them through [[concepts/multimodal-ai|multimodal models]] rather than relying solely on [[concepts/document-parsing|text extraction]]. This approach aims to bypass the "[[concepts/parsing-ceiling|parsing ceiling]]" inherent in traditional [[concepts/answer-generation|Retrieval-Augmented Generation]] ([[concepts/rag]]) systems, where structural data, layout semantics, and non-textual information are often lost during conversion to plain text.

## Core Concept & Motivation
[[concepts/traditional-rag|Traditional RAG]] pipelines convert documents into text blocks for embedding. This process introduces significant information loss:
- **Structural Loss**: Hierarchical [[concepts/relationships|relationships]], tables, and spatial layouts are flattened.
- **Semantic Loss**: Non-textual cues (color, font weight, icons) are discarded.
- **Parsing Errors**: OCR and layout analysis [[concepts/algorithms|algorithms]] often fail on complex or noisy documents.

## Advancements in Multimodal Embeddings
Recent developments in unified [[concepts/embedding-models|embedding models]] address the modality gap in retrieval systems. A key advancement is the introduction of compact, on-device capable models that unify diverse data types into a single [[concepts/embedding-spaces|vector space]].

### EmbeddingGemma 2
Google has launched **[[concepts/embeddinggemma-2|EmbeddingGemma 2]]**, an [[concepts/open-source|open-source]] [[concepts/embedding-model|embedding model]] designed specifically for efficient [[concepts/multimodal-retrieval|multimodal RAG]]. This model allows for the direct processing of heterogeneous data without intermediate text conversion.

- **Unified Cross-Modal Embeddings**: Maps text, code, images, video, and audio into a single, unified vector space, enabling direct [[concepts/vector-search|similarity search]] across modalities.
- **On-Device Efficiency**: With only 740 million parameters, it is optimized for deployment on [[concepts/edge-devices|edge devices]], reducing latency and [[concepts/privacy-concerns|privacy concerns]] associated with cloud-based inference.
- **[[concepts/open-license|Open License]]**: Available under the [[concepts/apache-2-0|Apache 2.0 license]], facilitating broad adoption in commercial and research applications.
- **Integration**: See [[lab-notes/2026-10-10-EmbeddingGemma-2-On-Device-Multimodal-RAG-with-Unified-C|EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings]] for detailed technical implementation notes.

## References
- [EmbeddingGemma 2: On-Device Multimodal RAG with Unified Cross-Modal Embeddings](https://www.youtube.com/watch?v=XtIBx6H9A_I)
