---
type: concept
domain: ai-agents
tags:
  - "neural-machine-translation"
  - "multimodal-ai"
  - "local-inference"
  - "speech-translation"
  - "nvidia-audex"
aliases:
  - "Neural Machine Translation"
  - "NMT"
  - "Multimodal Translation"
  - "Speech-to-Speech Translation"
summary: Language translation is the process of converting text or speech between natural languages, increasingly utilizing local neural and unified multimodal models for privacy and efficiency.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Language Translation

**Language Translation** is the process of converting text or speech from one Natural Language to another. In the context of modern AI, this has evolved from statistical machine translation to neural approaches, and increasingly to [[concepts/unified-multimodal-models|unified multimodal models]] that handle [[concepts/audio-modality|audio]] and text simultaneously.

## Core Concepts
- **Neural Machine Translation (NMT):** Uses [[concepts/vanishing-gradient-problem|deep learning]] architectures (e.g., Transformer) to translate sequences.
- **Multimodal Translation:** Integrates [[concepts/audio|audio]] input/output with [[concepts/language-processing|text processing]], enabling direct speech-to-[[concepts/speech-translation|speech translation]] without intermediate text transcription steps.
- **[[concepts/local-implementation|Local Implementation]]:** Running translation models on local hardware to ensure [[concepts/privacy|privacy]] and reduce latency.

## Recent Developments: Unified Audio-Text Models
The landscape of translation is shifting toward compact, unified models that process audio and text natively.

- **[[concepts/unsloth-optimization|NVIDIA]] [[concepts/sufficient-parameters|Audex-2B]]:** A 2-billion parameter [[concepts/unified-audio-text-model|unified audio-text model]] released by [[entities/nvidia|NVIDIA]] as part of the [[concepts/nemotron-family|Nemotron family]].
	- Capable of hearing, [[concepts/human-cognition|thinking]], and speaking, bridging the gap between audio input and textual output.
	- Designed for local implementation, offering a balance between performance and [[concepts/algorithm-efficiency|computational efficiency]].
	- See detailed analysis in [[lab-notes/2026-07-08-NVIDIA-Audex-2B-Unified-Audio-Text-Model-Capabilities-an|NVIDIA Audex-2B: Unified Audio-Text Model Capabilities and Local Implementation]].

## References
- [NVIDIA Audex-2B: Unified Audio-Text Model Capabilities and Local Implementation](https://www.youtube.com/watch?v=rsCGWaO-rbI)
