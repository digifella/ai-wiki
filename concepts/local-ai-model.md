---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "local-ai"
  - "edge-computing"
  - "privacy"
  - "cost-efficiency"
  - "teleocr"
  - "document-parsing"
  - "on-device-inference"
  - "ai-models"
aliases:
  - "Local AI"
  - "On-device AI"
  - "Local LLM"
summary: "Local AI models are artificial intelligence systems deployed on local hardware to prioritize data privacy, reduce latency, and eliminate cloud subscription fees."
updated: 2026-10-02
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:28:23+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Local AI Model

A Local AI Model refers to [[concepts/ai-technologies|artificial intelligence]] systems that are deployed and executed on local hardware (e.g., personal computers, edge devices) rather than relying on remote cloud servers. This approach prioritizes data privacy, reduced latency, and offline capability.

## Key Characteristics
- **Privacy & Security**: Data remains on-device, minimizing exposure to [[concepts/third-party-apis|third-party APIs]].
- **[[concepts/cost-efficiency|Cost Efficiency]]**: Eliminates recurring subscription fees associated with cloud inference.
- **[[concepts/hardware-compatibility|Hardware Requirements]]**: Performance is tightly coupled with local compute resources (GPU VRAM, NPU, or CPU).

## Notable Implementations

### [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]
Introduced in late 2026, this model represents a significant advancement in [[concepts/dense-paragraph-processing|local document parsing]].

- **Developer**: China Telecom's AI research group
- **Model Size**: 1.2 billion parameters
- **Hardware Efficiency**: Runs on GPUs with as little as 8GB VRAM
- **Core Capability**: Specialized in extracting [[concepts/json-structuring|structured data]] from "camera-captured" documents
- **Advantage**: Outperforms traditional parsers and large cloud models (e.g., GPT-5.2) in handling distortions, shadows, and non-standard angles inherent in photos
- **Source**: [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)

## Related Concepts
- [[concepts/edge-ai]]
- [[concepts/on-device-inference]]
- Open Source LLMs
- OCR
