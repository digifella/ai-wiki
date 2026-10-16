---
type: concept
domain: creative-pursuits
tags:
  - "voice-synthesis"
  - "audio-workflow"
  - "notebooklm"
  - "elevenlabs"
  - "ai-voice-cloning"
  - "local-deployment"
  - "tts"
aliases:
  - "Voice Customization"
  - "AI Audio Workflow"
  - "NotebookLM Voice Modding"
  - "Local TTS"
summary: A process for modifying NotebookLM-generated audio voices by extracting transcripts and re-synthesizing them via ElevenLabs, alongside local CPU-based TTS options like Inflect Micro v2.
updated: 2026-07-30
group: video-content-systems
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-30" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Voice Selection

Process of choosing or modifying [[concepts/audio-modality|audio]] [[concepts/tone|voice]] output in digital systems, including voice [[concepts/cloning|cloning]], [[concepts/style|style]] adjustment, and source [[concepts/audio|audio]] transformation.

## NotebookLM and ElevenLabs Integration

To modify [[concepts/ai-integrated-notebooks|NotebookLM]]-generated audio voices using [[entities/eleven-labs|ElevenLabs]]:

- Generate [[concepts/audio-overview|audio overview]] (e.g., "Brief") in [[entities/notebooklm]]
- Download audio file → Upload back to [[entities/notebooklm]] as new source to extract [[concepts/text-transcript|text transcript]]
- Copy transcript → Input into ElevenLabs to synthesize with desired voice profile

For visual demonstration: [NotebookLM Voice Change Tutorial](https://youtu.be/MrrjdKtMwwI)

## Local CPU-Based Voice AI

For [[concepts/local-control|local deployment]] without [[concepts/cloud-dependencies|cloud dependencies]], consider compact [[concepts/multilingual-speech-synthesis|TTS models]] optimized for CPU efficiency:

- **[[concepts/local-ai|Inflect Micro]] v2**: A highly compact [[concepts/text-to-speech-model|Text-to-Speech]] [[concepts/engine|engine]] under 10M parameters designed for local [[concepts/cpu-based-deployment|CPU-based deployment]].
- Ideal for privacy-focused workflows or environments with limited GPU resources.
- See [[lab-notes/2026-07-30-Inflect-Micro-v2-Compact-CPU-Based-Voice-AI-for-Local-De|Inflect Micro v2: Compact, CPU-Based Voice AI for Local Deployment]] for technical details.
- Source: [Inflect Micro v2: Compact, CPU-Based Voice AI for Local Deployment](https://www.youtube.com/watch?v=neFXl_Uz-mo)
## Source Notes

- 2026-04-14: # [[entities/qwen|Qwen]] [[concepts/tts-model|TTS model]] - [[entities/sam-witteveen|Sam Witteveen]] channel --- --- <https://www.youtube.co
