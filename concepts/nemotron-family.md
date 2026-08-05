---
type: concept
domain: ai-agents
tags:
  - "nvidia"
  - "open-weight"
  - "foundation-models"
  - "multimodal"
  - "audio-text"
  - "enterprise-ai"
aliases:
  - "Nemotron"
  - "Nemotron-4"
  - "Nemotron-Audex-2B"
  - "NVIDIA Nemotron"
summary: The Nemotron Family is a suite of open-weight foundation models developed by NVIDIA for enterprise-grade reasoning, coding, and multimodal tasks.
updated: 2026-07-12
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Nemotron Family

The **[[entities/ai-assistant|Nemotron]] Family** is a suite of [[concepts/open-weight|open-weight]] [[concepts/foundation-model|foundation models]] developed by [[entities/nvidia]], designed for enterprise-grade [[concepts/reasoning|reasoning]], [[concepts/coding|coding]], and multimodal tasks. The family emphasizes efficiency, scalability, and specialized capabilities across text, code, and [[concepts/audio-modality|audio]] domains.

## Key Models

### Nemotron-4
- [[entities/high-performance|High-performance]] [[concepts/large-language-model-llm|large language models]] optimized for [[concepts/instruction-following|instruction following]] and [[concepts/complex-reasoning|complex reasoning]].
- Variants include Nemotron-4-340B and smaller distilled versions for [[concepts/edge-computing|edge deployment]].

### Nemotron-4-340B
- The flagship model in the series, featuring 340 billion parameters.
- Trained on [[concepts/excellence|high-quality]] synthetic data to enhance [[concepts/factual-accuracy|factual accuracy]] and [[concepts/logical-consistency|logical consistency]].

### Nemotron-Audex-2B
- A compact, [[concepts/unified-audio-text-model|unified audio-text model]] released in July 2026.
- **Parameters:** 2 billion.
- **Capabilities:** Unified processing for hearing, [[concepts/human-cognition|thinking]], and speaking; designed for [[concepts/local-implementation|local implementation]] and low-latency audio-text interaction.
- **Significance:** Expands the [[entities/nemotron|Nemotron]] ecosystem into multimodal [[concepts/audio-processing|audio processing]] with a lightweight footprint.
- See detailed analysis: [[lab-notes/2026-07-08-NVIDIA-Audex-2B-Unified-Audio-Text-Model-Capabilities-an|NVIDIA Audex-2B: Unified Audio-Text Model Capabilities and Local Implementation]]

## Architecture & Training
- Utilizes [[concepts/unsloth-optimization|NVIDIA]]'s proprietary [[concepts/model-training-infrastructure|training infrastructure]] and synthetic data generation pipelines.
- Focuses on reducing [[concepts/data-hallucination|hallucination]] rates through rigorous [[concepts/data-curation|data curation]].
- Supports various [[concepts/parameter-reduction|quantization]] formats for [[concepts/bonsai|efficient deployment]] on [[concepts/nvidia-server-chips|NVIDIA GPUs]].

## References
- [NVIDIA Audex-2B: Unified Audio-Text Model Capabilities and Local Implementation](https://www.youtube.com/watch?v=rsCGWaO-rbI)
