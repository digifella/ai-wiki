---
type: concept
domain: ai-agents
tags:
  - "text-to-speech"
  - "open-weight-models"
  - "local-ai"
  - "audio-synthesis"
aliases:
  - "MisoTTS 8B"
  - "Miso Text-to-Speech 8B"
  - "Miso Labs TTS Model"
summary: Miso TTS 8B is an 8-billion parameter Transformer-based text-to-speech model developed by Miso Labs, designed for high-fidelity emotive voice synthesis using open weights.
updated: 2026-07-11
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Miso TTS 8B

**[[concepts/miso-tts-8b-emotive-text-to-speech-model|Miso TTS]] 8B** is an 8-billion parameter [[concepts/text-to-speech-model|Text-to-Speech model]] developed by [[entities/miso-labs|Miso Labs]], marketed as a "State-of-the-Art" [[concepts/solution|solution]] focused on high-fidelity emotive synthesis. It represents a significant entry in the [[concepts/open-weight|open-weight]] TTS landscape, competing with models like Bark, VITS, and commercial offerings from [[entities/eleven-labs|ElevenLabs]].

## Overview
- **[[concepts/developer|Developer]]**: Miso [[entities/labs|Labs]]
- **Architecture**: Transformer-based [[concepts/tts-model|TTS model]]
- **Parameter Size**: 8B
- **Key Feature**: Specialized for emotive and naturalistic [[concepts/text-to-speech-generation|voice generation]].

## Performance & Reviews
Recent evaluations highlight its capability in handling complex emotional inflections.

- [[lab-notes/2026-06-06-Miso-TTS-8B-Emotive-Text-to-Speech-Model-Installation-an|Miso TTS 8B Emotive Text-to-Speech Model: Installation and Performance Review]]
  - **Source Analysis**: Review by [[entities/fahd-mirza|Fahd Mirza]] (Channel: Fahd Mirza).
  - **Clip**: "MisoTTS - Most [[concepts/emotive-voice|Emotive Voice]] Model in the [[entities/earth|World]] - Really?"
  - **Findings**:
    - Detailed [[concepts/installation|installation]] workflow for [[concepts/local-deployment|local deployment]].
    - [[concepts/performance-benchmarking|Performance benchmarking]] against current [[concepts/state-of-the-art-offering|SOTA]] models.
    - Assessment of "emotive" claims in practical synthesis tasks.

## Technical Specifications
- **Input**: Text + Reference [[concepts/audio-modality|Audio]] (Zero-shot/Few-shot capability).
- **Output**: [[concepts/excellence|High-quality]] [[concepts/audio|audio]] waveform.
- **[[concepts/hardware-requirements|Hardware Requirements]]**: Significant [[concepts/vram|VRAM]] required due to 8B [[concepts/parameter-count|parameter count]]; likely requires multi-GPU or high-end consumer GPUs (e.g., RTX 4090+) for real-time [[concepts/inference|inference]].

## Related Concepts
- [[concepts/text-to-speech-model|Text-to-Speech]]
- [[concepts/large-language-models]]
- [[concepts/voice-cloning]]
- [[entities/miso-labs|Miso Labs]]
