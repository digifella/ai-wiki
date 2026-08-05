---
type: concept
domain: entertainment-games
tags:
  - "audio-transcription"
  - "speech-recognition"
  - "accessibility"
  - "content-analysis"
  - "notebooklm"
  - "whisper-ai"
aliases:
  - "Audio Transcription"
  - "Speech to Text"
  - "ASR"
  - "Automatic Speech Recognition"
summary: Audio transcription converts spoken language to written text using automatic speech recognition (ASR) systems, enabling accessibility, content indexing, and audio analysis.
updated: 2026-07-11
group: music-audio-performance
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# audio transcription

Conversion of spoken language into written text, typically using automatic [[concepts/speech-recognition|speech recognition]] (ASR) systems. Enables [[concepts/accessibility|accessibility]], content [[concepts/data-indexing|indexing]], and analysis of [[concepts/audio-modality|audio]] sources.

## Key Applications
- [[concepts/accessibility|Accessibility]]: Subtitles for videos, transcriptions for hearing-impaired users
- Content Analysis: Extracting insights from interviews, meetings, or [[entities/podcasts|podcasts]]
- Searchability: Making [[concepts/audio|audio]] content searchable via text

## Tools & Integration
- **[[concepts/notebooklm|NotebookLM]]**: Generate [[concepts/audio-overviews|audio overviews]] (e.g., "Brief" summaries) from sources; download [[concepts/audio-modality|audio]] → re-upload as source → generate [[concepts/text-transcript|transcript]]
- **Elevate [[entities/labs|Labs]]**: Modify [[concepts/tone|voice]] characteristics of generated [[concepts/audio|audio]] (see [changing voice workflow](#changing-voice-with-elevate-labs))
- **Automatic [[concepts/speech-recognition|Speech Recognition]]**: Core technology powering most transcription services
- **[[concepts/whisper-ai|Whisper AI]] (via [[entities/google-colab|Google Colab]])**: [[concepts/open-source|Open-source]] ASR model; free, high accuracy, no downloads required. [Video tutorial](https://www.youtube.com/watch?v=ktNeWrkPwmg)

## Changing Voice with Elevate Labs (NotebookLM Workflow)
1. Generate [[concepts/audio-overview|audio overview]] in [[entities/notebooklm]] from sources
2. Download audio file → re-upload to [[entities/notebooklm]] as new source
3. Use Elevate Labs to modify voice characteristics (e.g., [[entities/pitch|pitch]], tone) of the audio
4. [Video demonstration](https://www.youtube.com/watch?v=MrrjdKtMwwI)

> Note: Elevat

Backlink: 2026 04 14 [[entities/elle-wang|Elle wang]] [[concepts/audio-to-text-transcription|audio to text transcription]]
## Source Notes
- 2026-04-14: [[lab-notes/2026-04-14-Optimizing-AI-Costs-and-Privacy-with-Local-Open-Source-Models-and-Hybr|Optimizing AI Costs and Privacy with Local Open Source Models and Hybr]] · [▶ source](https://www.youtube.com/watch?v=nt7dWOEFUB4)
- 2026-04-27: Google Gemma · [▶ source](https://www.youtube.com/watch?v=yJr_kTCOkFo)
