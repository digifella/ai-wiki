---
type: concept
domain: ai-agents
tags:
  - "text-recognition"
  - "document-scanning"
  - "digitization"
  - "image-processing"
  - "data-extraction"
  - "rag-workflows"
  - "vlm"
  - "local-llm"
  - "privacy"
  - "alibaba"
  - "open-source"
aliases:
  - "OCR"
  - "Text Scanning"
  - "Document Digitization"
  - "Character Recognition"
  - "OvisOCR2"
summary: Optical Character Recognition is the automated process of converting images of text into machine-encoded, editable, and searchable data.
updated: 2026-07-30
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-30" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Optical Character Recognition

Optical Character Recognition (OCR) is the automated process of converting images of text—such as scanned documents or photos—into machine-encoded, editable, and searchable data.

## Specialized Models & Emerging Trends
- **[[entities/nanonets-ocr-small|Nanonets OCR Small]]**: A newly introduced, highly efficient model featuring 3B parameters, specifically optimized for converting tables into text to support [[concepts/traditional-rag|Retrieval-Augmented Generation]] (RAG) workflows.
- **Shift Toward Efficiency**: There is a growing industry trend toward smaller, specialized, and [[entities/high-performance|high-performance]] models, contrasting with larger-scale architectures such as [[entities/llama|Llama]] OCR and [[entities/mistral|Mistral]] OCR.
- **[[concepts/infographic|Infographic]] Text Correction**: Utilizing [[entities/adobe-acrobat|Adobe Acrobat]] and [[entities/canva|Canva]] ('[[concepts/canva-grab-text-feature|Grab Text]]') to identify and correct spelling inacc

### Compact Local Document Parsing
- **[[lab-notes/2026-07-30-Alibaba-OvisOCR2-Compact-Local-Document-Parsing-Model-Su|Alibaba OvisOCR2: Compact Local Document Parsing Model Surpassing Pipelines]]**: An innovative [[concepts/document-parsing|document parsing]] model open-sourced by [[entities/alibaba|Alibaba]]. It is notable for being a compact [[concepts/local-model|local model]] that reportedly surpasses traditional pipeline-based methods in performance, highlighting the viability of efficient, self-hosted OCR solutions.

## References
- [Alibaba OvisOCR2: Compact Local Document Parsing Model Surpassing Pipelines](https://www.youtube.com/watch?v=RsR6cbovMfI)
