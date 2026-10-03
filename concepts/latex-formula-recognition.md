---
type: concept
domain: ai-agents
tags:
  - "latex"
  - "formula-recognition"
  - "ocr"
  - "document-parsing"
  - "ovisocr2"
  - "teleocr"
aliases:
  - "LaTeX formula recognition"
summary: "LaTeX formula recognition converts visual mathematical notation into LaTeX source code. Recent advancements include Alibaba's OvisOCR2 for compact local parsing and China Telecom's TeleOCR for handling camera-captured documents."
updated: 2026-09-30
group: multimodal-generative-media
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:22:18+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# LaTeX formula recognition

**LaTeX formula recognition** is the computational process of converting visual representations of mathematical notation into LaTeX source code. This task is critical for digitizing [[entities/tomasz-janowski|academic]] papers, textbooks, and handwritten [[concepts/notes|notes]], enabling [[concepts/natural-language-search|semantic search]], editing, and [[concepts/fat-rendering|rendering]] of mathematical content.

## Key Developments

### OvisOCR2 Integration
Recent advancements in [[concepts/document-parsing|document parsing]] have significantly impacted formula recognition capabilities. [[lab-notes/2026-07-30-Alibaba-OvisOCR2-Compact-Local-Document-Parsing-Model-Su|Alibaba OvisOCR2: Compact Local Document Parsing Model Surpassing Pipelines]] introduces a compact [[concepts/local-model|local model]] that surpasses traditional pipeline-based methods.

*   **Architecture:** Open-sourced by [[entities/alibaba|Alibaba]], [[concepts/local-inference|OvisOCR2]] is designed for high accuracy and efficiency in [[concepts/edge-deployment|local inference]] environments.

### TeleOCR for Camera-Captured Documents
For documents captured via camera, which often suffer from distortions, shadows, or perspective angles, [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]] offers a specialized solution.

*   **[[concepts/developer|Developer]]:** China Telecom's [[concepts/ai-research|AI research]] group.
*   **Scale:** A 1.2 billion-parameter model capable of running on [[concepts/consumer-hardware|consumer hardware]] (e.g., 8GB GPU).
*   **Capability:** Specifically optimized to accurately extract [[concepts/json-structuring|structured data]] from "camera-captured" documents, outperforming larger [[concepts/cloud-based-models|cloud-based models]] like GPT-5.2 in specific parsing tasks while maintaining [[concepts/privacy|local privacy]] and speed.

## References

*   [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)
