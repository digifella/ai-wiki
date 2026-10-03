---
type: concept
domain: ai-agents
tags:
  - "ocr"
  - "pdf-processing"
  - "ai-agents"
  - "content-extraction"
  - "rust"
  - "document-parsing"
  - "semantic-extraction"
  - "firecrawl"
  - "mistral-ocr"
  - "multilingual"
  - "teleocr"
  - "camera-captured"
  - "local-inference"
aliases:
  - "Optical Character Recognition"
  - "OCR"
  - "Mistral OCR 4"
  - "TeleOCR"
summary: Optical Character Recognition converts images of text into machine-encoded text. Modern pipelines integrate AI agents, local processing tools like Firecrawl, and advanced multilingual models like Mistral OCR 4 for semantic extraction. Recent advancements include TeleOCR, a local 1.2B parameter model optimized for camera-captured documents.
updated: 2026-09-30
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:07:19+00:00" }
group: multimodal-generative-media
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Optical Character Recognition

**Optical Character Recognition (OCR)** is the electronic or mechanical conversion of images of typed, handwritten, or printed text into machine-encoded text. While traditionally associated with scanning physical documents, modern OCR pipelines increasingly integrate with PDF processing tools to extract content from digital files directly.

## Modern PDF Processing & AI Integration

Recent advancements in [[concepts/ai-agents|AI agents]] and [[concepts/document-parsing|document parsing]] have shifted focus from pure character recognition to semantic extraction and classification.

- **[[concepts/firecrawl-ai|Firecrawl]] [[entities/pdf-inspector|pdf-inspector]]**: An [[concepts/open-source|open-source]], Rust-powered tool designed for rapid, [[concepts/local-processing|local processing]] of PDF documents. It focuses on fast [[concepts/content-extraction|content extraction]] and semantic structuring.
- **[[concepts/open-source-pdf-parser|Mistral OCR 4]]**: Advanced multilingual model for semantic extraction, integrated into modern [[concepts/ai-agent-workflows|AI agent workflows]].

## Camera-Captured Document Parsing

Traditional parsers often struggle with distortions, shadows, or angles inherent in photos. New [[concepts/local-models|local models]] address these challenges by running efficiently on [[concepts/consumer-hardware|consumer hardware]].

- **TeleOCR**: A 1.2 billion-parameter document parser developed by China Telecom's [[concepts/ai-research|AI research]] group. It is designed to accurately extract [[concepts/json-structuring|structured data]] from "camera-captured" documents, outperforming larger [[concepts/cloud-based-models|cloud-based models]] like GPT-5.2 while running on GPUs with as little as 8GB VRAM.
- See [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]] for detailed technical analysis.

## References

- [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)
