---
type: concept
domain: ai-agents
tags:
  - "speaker-identification"
  - "diarization"
  - "audio-processing"
  - "nvidia-nemotron"
  - "multi-speaker-audio"
aliases:
  - "Speaker Diarization"
  - "Who-Said-What"
summary: Speaker identification determines who spoke when in an audio stream, often implemented via diarization to segment homogeneous speaker turns distinct from automatic speech recognition.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-23T20:51:46+00:00" }
group: multimodal-generative-media
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Speaker Identification

**Speaker identification** (often implemented via **[[concepts/diarization]]**) is the process of determining who spoke when in an audio stream. While **[[concepts/automatic-speech-recognition|Automatic Speech Recognition]] (ASR)** focuses on transcribing *what* was said, speaker identification focuses on *who* said it, segmenting audio into homogeneous speaker turns.

## Key Developments

- **Nemotron 3 Diarization**: [[entities/nvidia|NVIDIA]]'s latest model addresses gaps in [[concepts/multi-speaker-audio|multi-speaker audio]] processing, providing high-accuracy speaker identification where traditional ASR falls short.
- **Capabilities**:
  - Accurate segmentation of multi-speaker audio.
  - Robust handling of overlapping speech and varying acoustic conditions.
  - Integration with modern LLM pipelines for context-aware analysis.
- **Resource**: For detailed technical breakdown and demonstration, see [[lab-notes/2026-09-24-Nemotron-3-Diarization-Accurate-Speaker-Identification-f|Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio]].

## Related Concepts

- [[concepts/diarization]]
- [[concepts/automatic-speech-recognition|Automatic Speech Recognition]] (ASR)
- Speaker Verification
- Audio Signal Processing

## References

- [Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio](https://www.youtube.com/watch?v=PZuuOXNB3Vw) ([[entities/sam-witteveen|Sam Witteveen]], 2026-09-24)
