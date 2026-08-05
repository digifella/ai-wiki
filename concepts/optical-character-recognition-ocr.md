---
type: concept
domain: ai-agents
group: multimodal-generative-media
tags:
  - "ocr"
  - "document-parsing"
  - "table-extraction"
  - "rag"
  - "open-source"
  - "multimodal"
aliases:
  - "Nanonets OCR"
  - "OCR for tables to text"
summary: An open-source OCR model designed for converting tables to text for retrieval-augmented generation (RAG).
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Optical Character Recognition Ocr

Optical Character Recognition (OCR) is a technology that converts images of text, tables, and documents into machine-readable text formats. In the context of AI agents and retrieval-augmented generation (RAG) systems, OCR serves as a critical preprocessing step that enables the extraction and indexing of information from unstructured visual documents. By transforming visual content into structured text, OCR allows downstream systems to process, search, and reason over document content that would otherwise remain inaccessible to text-based AI models.

## OCR in RAG Systems

For retrieval-augmented generation pipelines, OCR is particularly valuable for handling documents that exist primarily in visual formats—scanned PDFs, images, and tables. Open-source OCR models have become increasingly practical for this use case, offering developers tools to extract text from complex layouts without relying on proprietary APIs. The extracted text can then be indexed in vector databases or knowledge bases, enabling AI agents to retrieve relevant information during answer generation and reasoning tasks.

## Table Extraction and Structured Data

One significant application of OCR in RAG workflows is the conversion of tabular data from images into structured text representations. Tables often contain dense, organized information that is difficult for language models to access in visual form. Modern OCR approaches can identify table structures and convert them into formats suitable for retrieval and analysis, improving an AI agent's ability to extract numerical data, comparisons, and other structured information from document images.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI|Google Gemma 4 Open Weight Models Apache 20 and Enhanced AI]] · [▶ source](https://www.youtube.com/watch?v=5aqF1HVpjdc)
- 2026-04-08: [[lab-notes/2026-04-08-LiteParse-Free-Local-Layout-Preserving-Document-Parsing-for-LLMs|LiteParse Free Local Layout Preserving Document Parsing for LLMs]] · [▶ source](https://www.youtube.com/watch?v=1GOJn9xiCc4)
- 2026-04-21: Google DeepMind
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
