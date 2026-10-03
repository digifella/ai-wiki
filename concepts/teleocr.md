---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "teleocr"
  - "document-parsing"
  - "local-ai"
  - "ocr"
  - "china-telecom"
summary: "TeleOCR is a 1.2 billion-parameter model by China Telecom optimized for extracting structured data from camera-captured documents on consumer-grade hardware."
updated: 2026-10-02
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:04:55+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# TeleOCR

**TeleOCR** is a lightweight, 1.2 billion-parameter [[concepts/content-extraction|document parsing]] model developed by China Telecom's AI research group. It is specifically optimized for extracting structured data from "camera-captured" documents, addressing common issues like perspective distortion, shadows, and uneven lighting that typically plague traditional OCR systems.

## Key Features
- **High Efficiency:** Runs on [[concepts/consumer-grade-hardware|consumer-grade hardware]] with as little as 8GB VRAM, making it accessible for [[concepts/local-control|local deployment]].
- **Robustness:** Designed to handle the visual noise inherent in photos of documents (e.g., from smartphones).
- **Performance:** Claims to outperform larger commercial models like GPT-5.2 in specific document parsing tasks due to its specialized architecture.
- **Local-First:** Enables privacy-preserving data extraction without cloud dependency.

## Technical Context
TeleOCR represents a shift towards efficient, domain-specific [[concepts/demystifying-llms|large language models]] (LLMs) that can operate on the edge. It is particularly relevant for workflows requiring OCR and [[concepts/data-extraction]] where latency and privacy are critical.

For detailed technical benchmarks and demonstration, see: [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]

## References
- Prompt Engineer 48. "TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing(https://www.youtube.com/watch?v=6TnE5pMVbCQ)." YouTube, 2026.
