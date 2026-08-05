---
type: concept
domain: ai-agents
tags:
  - "large-language-models"
  - "artificial-intelligence"
  - "multimodal-ai"
  - "text-generation"
  - "data-modalities"
  - "yann-lecun"
aliases:
  - "Large Language Models"
  - "LLM"
  - "Language AI"
  - "Text-to-Text Models"
summary: LLMs are AI systems trained on extensive datasets to generate human-like language and are evolving towards multimodal capabilities that handle diverse data types.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# LLMs

[[concepts/large-language-models|Large Language Models (LLMs)]] are a subset of [[concepts/ai-technologies|Artificial Intelligence]] trained on massive [[concepts/training-data|datasets]] to understand, interpret, and generate human-like language.

## Multimodal Capabilities
- Evolution from text-centric models toward [[concepts/multimodal-ai]].
- **[[concepts/modality|Modality]]** refers to distinct data types processed by the model, including:
    - text
    - images
    - [[concepts/audio-modality|audio]]
    - [[concepts/lidar|lidar]]
    - [[concepts/thermal-imaging|thermal imaging]]
- [[concepts/unified-multimodal-models|Multimodal models]] are distinguished by their capacity to both ingest and generate content across these multiple [[concepts/data-management|data modalities]].

## Alternative Architectures & Research Frontiers
- [[people/yann-lecun|Yann LeCun]] proposes [[concepts/JEPA|Joint Embedding Predictive Architecture (JEPA)]] as a successor paradigm to overcome inherent LLM limitations.
- [[concepts/jepa|JEPA]] prioritizes predictive [[concepts/coding|coding]] in latent spaces over next-token [[concepts/user-attention-prediction|prediction]], aiming for superior [[entities/earth|world]] modeling, efficiency, and [[concepts/reasoning|reasoning]].
- Analysis of LeCun's critique and [[concepts/yann-lecuns-jepa|JEPA framework]]: [[lab-notes/2026-05-05-Yann-LeCuns-JEPA-Proposal-A-Path-Beyond-LLMs|Yann LeCun's JEPA Proposal: A Path Beyond LLMs]]

### Related Notes
- 2026 04 10 [[concepts/multimodal-ai|Multimodal AI]] Concepts Approaches and Data Processing by LLMs
- 2026 04 10 [[concepts/multimodal-language-models|Multimodal AI]] Concepts Approaches and Data Processing
