---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "json-prompting"
  - "gemini-ai"
  - "metadata-extraction"
  - "structured-data"
  - "prompt-engineering"
  - "local-ai"
  - "pdf-extraction"
  - "teleocr"
  - "local-ocr"
aliases:
  - "JSON Prompting for Gemini"
  - "Schema-Constrained Extraction"
  - "TeleOCR"
summary: "This concept covers using JSON prompting for Gemini to achieve precise metadata extraction and image control, as well as local schema-constrained extraction tools like TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing."
updated: 2026-09-30
group: data-pipelines-sync-storage
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:11:24+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Structured Data Extraction

Structured [[concepts/data-extraction|data extraction]] is a technique for using JSON-formatted prompts with [[concepts/gemini|Gemini]] to retrieve [[concepts/metadata|metadata]] and other information in a consistent, machine-readable format. By defining the expected output structure in JSON before sending a request, users can ensure that responses follow a predictable schema. This approach makes results easier to parse, validate, and integrate into [[concepts/automated-content-creation|automated workflows]].

## How It Works

The process involves specifying a JSON schema that describes the desired output format, then including this schema in the prompt sent to [[concepts/google-ai|Gemini]]. The model understands these structured [[concepts/instructions|instructions]] and formats its response accordingly, rather than returning [[concepts/unstructured-text|unstructured text]].

## Local Extraction Alternatives

For [[concepts/scenarios|scenarios]] requiring [[concepts/privacy|privacy]] or offline capabilities, [[concepts/local-models|local models]] offer robust alternatives to cloud-based API extraction:

*   **[[concepts/optical-character-recognition|TeleOCR]]**: A 1.2 billion-parameter document parser developed by [[entities/china|China]] Telecom's [[concepts/ai-research|AI research]] group. It is designed to accurately extract [[concepts/json-structuring|structured data]] from various document types, specifically handling "camera-captured" documents where traditional parsers often fail due to distortions, [[concepts/shadows|shadows]], or angles.
*   **Efficiency**: TeleOCR is notable for its ability to outperform larger models like [[entities/chatgpt-52|GPT-5.2]] on specific parsing tasks while running on hardware with as little as 8GB of VRAM.
*   **Integration**: This tool complements cloud-based [[concepts/gemini|Gemini]] workflows by providing a local fallback for sensitive or high-volume [[concepts/document-processing|document processing]]. See [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]] for detailed technical benchmarks.

## References

*   [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)
