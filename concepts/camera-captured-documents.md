---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "camera-captured-documents"
  - "ocr"
  - "teleocr"
  - "document-parsing"
  - "geometric-distortion"
  - "lighting-artifacts"
  - "local-llm"
  - "structured-data-extraction"
aliases:
  - "Camera Documents"
  - "Perspective-Corrected OCR"
  - "TeleOCR Input"
summary: Camera-captured documents are images with geometric and lighting distortions that require robust OCR models like TeleOCR for accurate parsing on consumer hardware.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:14:28+00:00" }
group: data-pipelines-sync-storage
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# camera-captured documents

Documents captured via camera sensors, characterized by geometric distortions, perspective shifts, [[concepts/shadows|shadows]], and variable lighting conditions. Parsing these requires robust [[concepts/optical-character-recognition]] (OCR) models capable of handling non-ideal imaging conditions.

## Key Challenges
- **Geometric Distortion:** Angles and perspective skew common in handheld photos.
- **Lighting Artifacts:** Shadows, glare, and uneven illumination.
- **[[concepts/solution|Resolution]] Variance:** Blurriness or noise from low-[[concepts/light|light]] or high-[[concepts/speed|speed]] capture.

## Recent Developments

### TeleOCR
A significant advancement in [[concepts/dense-paragraph-processing|local document parsing]] for camera-captured inputs.

- **Model:** [[concepts/teleocr|TeleOCR]], a 1.2 billion-parameter document parser developed by [[entities/china-telecom|China Telecom]]'s [[concepts/ai-research|AI research]] group.
- **Performance:** Claims to outperform [[entities/chatgpt-52|GPT-5.2]] in [[concepts/structured-data-extraction|structured data extraction]] from camera-captured documents.
- **Efficiency:** Runs on [[concepts/consumer-hardware|consumer hardware]] with as little as 8GB GPU [[concepts/vram|VRAM]].
- **Capabilities:** Specifically optimized to handle distortions, shadows, and angles inherent in photos, addressing traditional parser failures.
- **Source:** [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]
- **Reference:** [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)

## Related Concepts
- Document-[[concepts/image-analysis|Image-Analysis]]
- [[concepts/perspective-adjustment|Perspective-Correction]]
- [[concepts/local-llm-deployment]]
