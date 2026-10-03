---
type: concept
domain: entertainment-games
tags:
  - "multi-speaker-audio"
  - "diarization"
  - "speaker-identification"
  - "asr"
  - "nemotron-3"
aliases:
  - "multi-speaker audio processing"
  - "speaker diarization"
summary: Multi-speaker audio involves recordings with multiple distinct speakers, requiring diarization and ASR to attribute speech segments to specific individuals.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-23T20:52:41+00:00" }
group: music-audio-performance
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# Multi-Speaker Audio

**Multi-speaker audio** refers to audio recordings containing two or more distinct speakers. Processing such content requires **[[concepts/diarization]]** ([[concepts/speaker-identification|speaker identification]]) alongside **[[concepts/automatic-speech-recognition]]** (ASR) to attribute transcribed segments to specific individuals.

## Key Concepts

*   **Diarization**: The process of determining "who spoke when" in an audio stream. It clusters speech segments by speaker identity without prior knowledge of the number of speakers.
*   **ASR Limitations**: While modern ASR models achieve high word-error-rate accuracy, they often fail to distinguish between overlapping or sequential speakers in multi-speaker contexts.
*   **Nemotron 3 Diarization**: [[entities/nvidia|NVIDIA]]'s model addressing the gap in speaker identification for multi-speaker audio.

## Recent Developments

*   **Nemotron 3 Diarization**:
    *   Addresses critical gaps in current speech-to-text technologies regarding speaker attribution.
    *   Provides accurate speaker identification for multi-speaker audio streams.
    *   See: [[lab-notes/2026-09-24-Nemotron-3-Diarization-Accurate-Speaker-Identification-f|Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio]]
    *   Detailed analysis and summary available in the linked lab note.

## References

*   [[entities/sam-witteveen|Sam Witteveen]]. "Nemotron 3 [[concepts/diarization|Diarization]]: Accurate [[concepts/speaker-identification|Speaker Identification]] for Multi-Speaker Audio". Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio(https://www.youtube.com/watch?v=PZuuOXNB3Vw). 2026-09-24.
