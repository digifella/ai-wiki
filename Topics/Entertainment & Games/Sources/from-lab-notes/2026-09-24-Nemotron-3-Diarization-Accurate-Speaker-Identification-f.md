---
wiki-ingested: true
title: "Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio"
date: 2026-09-24
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: entertainment-games
group: music-audio-performance
type: "source-summary"
aliases:
  - "lab-notes/2026-09-24-Nemotron-3-Diarization-Accurate-Speaker-Identification-f"
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

## Nemotron 3 Diarization: Accurate Speaker Identification for Multi-Speaker Audio
**Clip title:** Nemotron 3 Diarization - Who Said That?
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=PZuuOXNB3Vw

### Summary
The video introduces [[entities/nvidia|NVIDIA]]'s Nemotron 3 [[concepts/diarization|Diarization]] model, addressing a critical gap in current speech-to-text technologies. While [[concepts/automatic-speech-recognition|automatic speech recognition]] (ASR) has become highly accurate, providing simple transcripts of "what was said," this isn't sufficient for many advanced AI applications. The core problem highlighted is the need for crucial context: "when it was said" ([[concepts/timestamps|timestamps]]) and, more importantly, "who said it" (speaker diarization). For applications like meeting notes, podcast summarization, or AI agents needing to attribute actions and understand conversational flow, knowing the speaker is paramount, especially in multi-speaker environments or when there's overlapping speech. Traditional methods often struggled with accuracy and the complexity of stitching together multiple models.

NVIDIA's Nemotron 3 Diarization is presented as a groundbreaking solution designed to tackle this challenge directly. It is an open-weights model, licensed for commercial use under OpenMDW 1.1, making it accessible for developers. Notably, it's relatively lightweight, requiring approximately 100 million parameters and a minimum of 4GB of GPU [[concepts/memory|memory]], allowing it to run efficiently on smaller GPUs, including laptop RTX cards. This model boasts the capability to accurately identify and differentiate up to eight speakers, a significant improvement over older models that typically maxed out at three or four. Furthermore, it excels at handling overlapping speech, a common occurrence in natural conversations, which previously confused diarization systems.

The new model is part of NVIDIA's broader Nemotron Speech suite, which includes other powerful tools like Parakeet ASR, Magpie TTS ([[concepts/text-to-speech|Text-to-Speech]]), Canary Translation, and PersonaPlex for full-duplex conversational models. Nemotron 3 Diarization is designed to integrate seamlessly with any existing ASR model, providing a "speaker-aware transcript" by combining the ASR output with its [[concepts/speaker-identification|speaker identification]]. [[concepts/performance-benchmarks|Performance benchmarks]] using the Diarization Error Rate (DER), which measures missed speech, false alarms, and speaker confusion, show Nemotron 3 outperforming both its predecessors (like Sortformer) and leading competitors by a significant margin. It supports both offline processing (for pre-recorded audio like podcasts, offering higher accuracy with a buffer) and streaming (for live captions or voice agents, with slightly higher latency and DER).

In practical terms, the Nemotron 3 Diarization enables the creation of highly structured and contextualized audio transcripts. The video demonstrates an application that takes a [[concepts/multi-speaker-audio|multi-speaker audio]] file, processes it quickly (e.g., a 1m37s demo in 3.41s, or a 1-hour podcast in about 2.5 minutes), and generates a timeline showing who spoke when, alongside a detailed transcript attributed to individual speakers. Users can even manually assign names to the identified speakers and view statistics like talk time, share of conversation, turns, and word count per speaker. This capability is crucial for the growing demand for voice input in organizational settings, where reliability and context are key factors determining the survival and effectiveness of AI agents by 2028. NVIDIA's ongoing development of its Nemotron Speech stack indicates a strategic focus on continuously improving these comprehensive voice AI solutions.

### Video Description & Links
#### Description
In this video, I look at a new model from NVIDIA for doing speaker diarization, both on batch processing and streaming.  Nemotron 3 Diarization massively outperforms many other models in establishing who said what? 

#NVIDIAAI #nemotron #nvidia 

Blog: https://huggingface.co/blog/nvidia/nemotron-diarization
🤗 HF: https://huggingface.co/nvidia/Nemotron-3-Diarization 

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:27 NVIDIA Nemotron 3 Diarization
02:30 The Nemotron Speech family
04:09 So what is diarization?
04:26 Agents & Voice
05:41 How these models get scored (DER)
06:26 Breaking Down  Nemotron 3 Diarization
06:58 Demo: DGX Spark and NeMo
10:52 Demo of a full podcast
11:38 Exporting as text or SRT

#### Tags
`nvidia nemotron 3 diarization`, `nemotron 3`, `nemotron speech`, `speaker diarization`, `diarization`, `who spoke when`, `speaker attributed transcript`, `asr`, `speech recognition`, `speech to text`, `sortformer`, `parakeet`, `canary`, `whisper alternative`, `diarization error rate`, `der`, `overlapping speech`, `multi speaker transcription`, `meeting transcription`, `podcast transcription`, `streaming asr`, `voice agents`, `open weights`, `hugging face`, `nvidia nemo`, `local ai`, `nvidia ai`, `speech ai`, `sam witteveen`

#### URLs
- https://huggingface.co/blog/nvidia/nemotron-diarization
- https://huggingface.co/nvidia/Nemotron-3-Diarization
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/diarization|diarization]] — [Wikipedia](https://en.wikipedia.org/wiki/Speaker_diarisation)
- [[concepts/speaker-identification|speaker identification]] — [Wikipedia](https://en.wikipedia.org/wiki/Speaker_recognition)
- [[concepts/automatic-speech-recognition|automatic speech recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Speech_recognition)
- [[concepts/multi-speaker-audio|multi-speaker audio]]
- [[concepts/timestamps|timestamps]] — [Wikipedia](https://en.wikipedia.org/wiki/Timestamp)
- offline processing — [Wikipedia](https://en.wikipedia.org/wiki/Online_algorithm)
- GPU [[concepts/memory-optimization|memory optimization]]

## Related Entities
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/Nvidia)
- [[entities/sam-witteveen|Sam Witteveen]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]