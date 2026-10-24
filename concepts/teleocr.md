---
type: concept
domain: ai-agents
tags:
  - "teleocr"
  - "document-parsing"
  - "local-ai"
  - "ocr"
  - "china-telecom"
  - "edge-computing"
  - "privacy"
  - "structured-data"
aliases:
  - "TeleOCR"
summary: TeleOCR is a 1.2 billion-parameter model by China Telecom optimized for extracting structured data from camera-captured documents on consumer-grade hardware.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:04:55+00:00" }
group: open-systems-local-models
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# TeleOCR

**[[concepts/optical-character-recognition|TeleOCR]]** is a lightweight, 1.2 billion-parameter [[concepts/content-extraction|document parsing]] model developed by [[entities/china-telecom|China Telecom]]'s [[concepts/ai-research|AI research]] group. It is specifically optimized for extracting [[concepts/json-structuring|structured data]] from "camera-captured" documents, addressing common issues like perspective distortion, [[concepts/shadows|shadows]], and uneven lighting that typically [[concepts/plague|plague]] traditional OCR systems.

## Key Features
- **High Efficiency:** Runs on [[concepts/consumer-grade-hardware|consumer-grade hardware]] with as little as 8GB [[concepts/vram|VRAM]], making it accessible for [[concepts/local-control|local deployment]].
- **[[concepts/robustness|Robustness]]:** Designed to handle the visual noise inherent in photos of documents (e.g., from smartphones).
- **Performance:** Claims to outperform larger commercial models like [[entities/chatgpt-52|GPT-5.2]] in specific [[concepts/document-parsing|document parsing]] tasks due to its specialized architecture.
- **Local-First:** Enables privacy-preserving [[concepts/scraping|data extraction]] without cloud dependency.

## Technical Context
TeleOCR represents a shift towards efficient, domain-specific [[concepts/demystifying-llms|large language models]] (LLMs) that can operate on the edge. It is particularly relevant for workflows requiring OCR and [[concepts/data-extraction]] where latency and [[concepts/privacy|privacy]] are critical.

For detailed technical benchmarks and demonstration, see: [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]

## References
- [[entities/prompt-engineer-48|Prompt Engineer 48]]. "TeleOCR: Local [[concepts/12b-parameter-model|1.2B Model]] for Camera-Captured [[concepts/content-extraction|Document Parsing]](https://www.youtube.com/watch?v=6TnE5pMVbCQ)." [[entities/youtube|YouTube]], 2026.
