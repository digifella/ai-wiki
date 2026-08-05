---
type: concept
domain: ai-agents
group: multimodal-generative-media
tags:
  - "concept"
  - "document-parsing"
  - "image-parsing"
  - "llm-processing"
  - "local-tools"
  - "liteparse"
aliases:
  - "document parsing"
  - "layout-preserving parsing"
summary: Image parsing is a document processing technique for extracting and preserving layout information from images for use with large language models.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Image Parsing

Image parsing is a [[concepts/document-processing|document processing]] technique that extracts text and structural information from document images while preserving layout and spatial relationships. Unlike traditional [[concepts/optical-character-recognition|optical character recognition]] (OCR), which focuses primarily on converting visual text into machine-readable form, image parsing maintains formatting details, document structure, and the relative positions of elements on a page. This [[concepts/preservation|preservation]] of layout information enables large language models to better understand document context and hierarchy.

## Applications with Language Models

Image parsing has become increasingly relevant in [[ai-agents|AI agent]] workflows where documents serve as input sources. By retaining spatial relationships—such as column arrangements, table structures, and element positioning—parsed documents can be more effectively processed by large language models. This is particularly valuable for complex documents like forms, tables, invoices, and multi-column layouts where semantic meaning depends on arrangement rather than text order alone.

## Technical Considerations

Effective image parsing typically involves multiple processing steps: initial image analysis to identify structural elements, text extraction with position coordinates, and classification of document regions by type or function. The output format must balance completeness with usability, representing layout information in ways that language models can process efficiently while remaining human-interpretable.

## Source Notes
- 2026-04-08: Stop using paid APIs for document parsing (Here's what to use instead)
