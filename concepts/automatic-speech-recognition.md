---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "automatic-speech-recognition"
  - "diarization"
  - "speaker-identification"
  - "transcription"
  - "nvidia-nemotron"
  - "audio-processing"
  - "multi-speaker"
  - "text-conversion"
aliases:
  - "ASR"
  - "Speech-to-Text"
summary: Automatic Speech Recognition converts spoken language into text, with recent developments like NVIDIA's Nemotron 3 Diarization addressing multi-speaker identification challenges.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-23T20:52:14+00:00" }
group: automation-scheduling-sync
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Automatic Speech Recognition

**[[concepts/audio-transcription|Automatic Speech Recognition]] (ASR)** is the technology that converts spoken language into text. While modern [[concepts/asr-models|ASR models]] have achieved high accuracy in transcription, they often lack the ability to distinguish between multiple speakers in a single [[concepts/audio-modality|audio]] stream.

## Key Components

- **Transcription**: The core process of converting audio waves to text.
- **[[entities/speaker|Speaker]] [[concepts/diarization|Diarization]]**: The process of determining "who spoke when" in an audio recording. This is critical for multi-speaker contexts where standard ASR outputs a single, undifferentiated text stream.
- **Post-Processing**: Cleaning and formatting the raw transcription output.

## Recent Developments

- **[[concepts/nemotron-3-architecture|Nemotron 3]] Diarization**: [[entities/nvidia|NVIDIA]] has introduced Nemotron 3 Diarization to address the gap in multi-[[concepts/speaker-identification|speaker identification]].
  - Provides accurate speaker segmentation and identification.
  - Complements standard ASR by adding speaker labels to the [[concepts/text-transcript|transcript]].
  - See [[lab-notes/2026-09-24-Nemotron-3-Diarization-Accurate-Speaker-Identification-f|Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio]] for detailed analysis.

## Related Concepts

- [[entities/speaker|Speaker]] [[concepts/diarization|Diarization]]
- [[concepts/natural-language-processing|Natural Language Processing]]
- [[concepts/audio-modality|Audio]] [[concepts/signal-processing|Signal Processing]]

## References

- [Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio](https://www.youtube.com/watch?v=PZuuOXNB3Vw)
