---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "concept"
  - "ocr"
  - "table-extraction"
  - "rag"
  - "document-processing"
  - "nanonets"
aliases:
  - "OCR Table Extraction"
  - "Table to Text with Nanonets"
summary: Nanonets OCR is an open-source model for converting tables to text for retrieval-augmented generation applications.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Table To Text Conversion

Table to text conversion is the process of extracting and transforming structured data from tables—typically found in documents, images, or PDFs—into readable text format. This transformation enables machine learning systems and language models to process tabular information more effectively by converting it into narrative or semi-structured form that integrates more seamlessly with text-based processing pipelines.

## Technical Implementation

The conversion process typically involves optical character recognition (OCR) to extract table contents from images or scanned documents. Advanced implementations utilize deep learning models to identify row and column structures, preserving the logical relationships between cells. This structural awareness ensures that the resulting text maintains the semantic integrity of the original data, which is critical for downstream applications.

## Application in Retrieval-Augmented Generation

In the context of AI agents and retrieval-augmented generation (RAG), this technology bridges the gap between unstructured document storage and structured query processing. By converting complex tabular layouts into linear text, systems can index and retrieve specific data points more accurately. This approach allows large language models to answer questions based on precise numerical or categorical data embedded within PDFs and images, enhancing the reliability of automated information retrieval.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
