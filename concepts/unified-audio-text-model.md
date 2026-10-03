---
type: concept
domain: entertainment-games
tags:
  - "multimodal-ai"
  - "audio-processing"
  - "natural-language-processing"
  - "speech-recognition"
  - "text-to-speech"
  - "unified-models"
aliases:
  - "Unified Audio-Text Model"
  - "UATM"
  - "Multimodal Audio-Text Architecture"
summary: Unified Audio-Text Models are multimodal architectures that natively process and generate both audio and text data within a single framework, enabling bidirectional interaction between spoken and written modalities witho
updated: 2026-07-12
group: music-audio-performance
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# Unified Audio-Text Model

**Unified Audio-Text Models** are multimodal architectures capable of processing, understanding, and generating both [[concepts/audio-modality|audio]] and text data within a single framework. Unlike traditional pipelines that separate [[concepts/speech-recognition|speech recognition]] (ASR) from [[concepts/text-generation|text generation]], these models natively handle [[concepts/audio|audio]] [[concepts/tokens|tokens]] alongside text tokens, enabling seamless interaction between spoken and written modalities.

## Key Characteristics
- **[[concepts/native-multimodality|Native Multimodality]]**: Direct ingestion of audio waveforms or spectrograms without intermediate transcription steps.
- **Bidirectional Interaction**: Capable of [[concepts/text-to-speech-model|text-to-speech]] (TTS) and [[concepts/audio-transcription|speech-to-text]] (STT) within the same parameter space.
- **[[concepts/ai-agent-context|Contextual Awareness]]**: Maintains coherence across audio and text inputs, allowing for [[concepts/complex-reasoning|complex reasoning]] tasks involving spoken [[concepts/communication|dialogue]].

## Notable Implementations

### NVIDIA Audex-2B
A recent addition to the [[entities/nemotron]] family, [[concepts/sufficient-parameters|Audex-2B]] represents a shift toward compact, efficient unified models.

- **Architecture**: 2-billion parameter model designed for high efficiency.
- **Capabilities**: Performs unified audio-[[concepts/language-processing|text processing]], effectively "hearing, [[concepts/human-cognition|thinking]], and speaking" in a single pass.
- **[[concepts/local-implementation|Local Implementation]]**: Optimized for [[concepts/local-control|local deployment]], reducing reliance on cloud-based [[concepts/inference|inference]] for real-time audio-text tasks.
- **Source Analysis**: Detailed capabilities and local implementation strategies are documented in [[lab-notes/2026-07-08-NVIDIA-Audex-2B-Unified-Audio-Text-Model-Capabilities-an|NVIDIA Audex-2B: Unified Audio-Text Model Capabilities and Local Implementation]].

## References
- [NVIDIA Audex-2B: Unified Audio-Text Model Capabilities and Local Implementation](https://www.youtube.com/watch?v=rsCGWaO-rbI)
