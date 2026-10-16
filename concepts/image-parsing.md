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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Image Parsing

Image parsing is a specialized document processing technique designed to extract text and structural information from document images while maintaining their original layout and spatial relationships. Unlike traditional optical character recognition (OCR), which primarily focuses on converting visual text into machine-readable strings, image parsing preserves formatting details, document hierarchy, and the relative positions of elements on a page. This capability is critical for converting unstructured visual data into structured formats that large language models can effectively process.

## Technical Mechanisms

The process typically involves computer vision algorithms to detect page regions, identify text blocks, and recognize tables or figures. By analyzing the geometric arrangement of these components, the system reconstructs the logical flow of the document. This includes determining reading order, identifying headers versus body text, and preserving column structures. The output is often a structured representation, such as HTML, Markdown, or a custom JSON schema, that mirrors the visual layout of the source image.

## Applications in AI Agents

In the context of AI agents, image parsing serves as a crucial preprocessing step for handling multimodal inputs. It enables agents to interpret complex documents like invoices, receipts, and technical manuals without losing contextual nuances. By providing structured data rather than raw pixel data or simple text strings, image parsing reduces the cognitive load on large language models, allowing for more accurate information extraction, reasoning, and downstream task execution.

## Source Notes
- 2026-04-08: Stop using paid APIs for document parsing (Here's what to use instead)
