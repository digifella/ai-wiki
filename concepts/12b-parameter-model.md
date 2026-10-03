---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "small-language-model"
  - "model-efficiency"
  - "local-deployment"
  - "document-parsing"
  - "teleocr"
aliases:
  - "1.2B Model"
  - "Small Language Model"
  - "SLM"
summary: "A class of artificial intelligence models with approximately 1.2 billion parameters designed for efficient local deployment on consumer hardware, often specialized for tasks like document parsing."
updated: 2026-10-02
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T04:25:01+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# 1.2B parameter model

A class of [[concepts/ai-models|artificial intelligence models]] containing approximately 1.2 billion [[concepts/total-parameters|trainable parameters]]. This scale represents a significant milestone in the "small language model" (SLM) and specialized model ecosystem, balancing [[concepts/algorithm-efficiency|computational efficiency]] with sufficient capacity for complex tasks like [[concepts/document-parsing]] and [[concepts/optical-character-recognition]].

## Key Characteristics
- **Efficiency**: Capable of running on [[concepts/consumer-grade-hardware|consumer-grade hardware]] with limited VRAM (e.g., 8GB GPUs), enabling local deployment.
- **Specialization**: Often fine-tuned for specific domains (e.g., [[concepts/teleocr]]) rather than general-purpose reasoning.
- **Performance**: Recent iterations demonstrate competitive accuracy against larger proprietary models in niche tasks.

## Notable Implementations

### [[lab-notes/2026-09-30-TeleOCR-Local-1.2B-Model-for-Camera-Captured-Document-Pa|TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing]]
Developed by China Telecom's AI research group, this model addresses the limitations of traditional parsers when handling "camera-captured" documents.

- **Core Capability**: Accurately extracts structured data from documents with distortions, shadows, or non-standard angles.
- **[[concepts/hardware-compatibility|Hardware Requirements]]**: Runs locally on GPUs with as little as 8GB VRAM.
- **Performance**: Claims to outperform larger models like GPT-5.2 in specific camera-captured [[concepts/content-extraction|document parsing]] tasks.
- **Source**: [TeleOCR: Local 1.2B Model for Camera-Captured Document Parsing](https://www.youtube.com/watch?v=6TnE5pMVbCQ)

## Related Concepts
- [[concepts/small-language-models]]
- [[concepts/edge-ai]]
- Document Intelligence
- Parameter Efficiency
