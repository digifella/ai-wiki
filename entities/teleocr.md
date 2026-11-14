---
type: entity
tags:
  - "teleocr"
  - "document-parser"
  - "ocr"
  - "china-telecom"
  - "ai-model"
aliases:
  - "TeleOCR"
summary: "TeleOCR is a 1.2 billion-parameter document parser developed by China Telecom's AI research group to extract structured data from camera-captured documents."
updated: 2026-10-02
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:30:20+00:00" }
---
# TeleOCR

**TeleOCR** is a 1.2 billion-parameter document parser developed by China Telecom's [[concepts/ai-research|AI research]] group. It is designed to accurately extract [[concepts/json-structuring|structured data]] from various document types, with a specific focus on "camera-captured" documents.

## Key Features
- **High Accuracy on Distorted Inputs:** Specifically optimized to handle distortions, shadows, and perspective angles inherent in photos, addressing common failures in traditional parsers.
- **Efficiency:** Runs on [[concepts/consumer-grade-hardware|consumer-grade hardware]], specifically requiring only 8GB of GPU VRAM.
- **Performance:** Claims to outperform larger commercial models like GPT-5.2 in specific [[concepts/content-extraction|document parsing]] tasks.

## Technical Details
- **[[concepts/code-size|Model Size]]:** 1.2B parameters
- **[[concepts/developer|Developer]]:** China Telecom AI Research Group
- **Primary Use Case:** Parsing [[concepts/camera-captured-documents|camera-captured documents]] where traditional OCR fails due to image quality issues.

## References
- [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]
- [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)
