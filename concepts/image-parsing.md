---
type: concept
domain: ai-agents
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
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: multimodal-generative-media
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Image Parsing

Image parsing is a specialized [[concepts/document-processing|document processing]] technique designed to extract text and structural information from document images while maintaining their original layout and spatial [[concepts/relationships|relationships]]. Unlike traditional [[concepts/optical-character-recognition|optical character recognition]] (OCR), which primarily focuses on converting visual text into machine-readable strings, image parsing preserves formatting details, document [[concepts/hierarchy|hierarchy]], and the relative positions of elements on a page. This [[concepts/preservation|preservation]] of layout information is critical for enabling [[concepts/demystifying-llms|large language models]] to understand the context and structure of the source material.

The process involves identifying distinct regions within an image, such as headers, paragraphs, tables, and figures, and mapping their coordinates relative to one another. By retaining this spatial data, image parsing allows downstream [[concepts/ai-agents|AI agents]] to reconstruct the logical [[concepts/flow|flow]] of a document rather than merely reading its content linearly. This capability is particularly valuable for complex documents where the meaning is derived from the arrangement of elements, such as scientific papers, legal contracts, or technical manuals.

In the context of AI agents, image parsing serves as a bridge between unstructured visual data and structured semantic understanding. It enables models to perform tasks that require an [[concepts/conscious-thought|awareness]] of document topology, such as accurate citation mapping, table extraction, and multi-column text reassembly. By providing a faithful digital representation of the physical or scanned document, image parsing ensures that the extracted information remains usable and interpretable for advanced [[concepts/language-processing|natural language processing]] workflows.
## Source Notes
- 2026-04-08: Stop using paid APIs for document parsing (Here's what to use instead)
