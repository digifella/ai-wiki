---
wiki-ingested: true
title: "NVIDIA Nemotron 3.5 ASR: Efficient Multilingual Streaming Real-time Transcription"
date: 2026-06-08
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: entertainment-games
group: film-tv-streaming
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

Generated: 2026-06-08 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## NVIDIA Nemotron 3.5 ASR: Efficient Multilingual Streaming Real-time Transcription
**Clip title:** The NEW Best ASR - [[entities/nemotron-3-super|NVIDIA Nemotron 3]].5 ASR
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=7BwSG_r9Jxg

### Summary
The video introduces [[entities/nvidia|NVIDIA]]'s [[entities/ai-assistant|Nemotron]] 3.5 [[concepts/automatic-speech-recognition|ASR]], a new multilingual streaming Automatic [[concepts/speech-recognition|Speech Recognition]] (ASR) model. This 600-million-parameter model is designed for [[concepts/real-time-asr|real-time transcription]] across 40 language locales, with built-in punctuation and capitalization. It improves upon previous models like the English-only Nemotron 3 by offering a significantly more efficient [[concepts/architecture|architecture]] that addresses the limitations of traditional streaming ASR methods, which often suffer from high latency due to redundant computations.

The core [[concepts/innovation|innovation]] of Nemotron 3.5 ASR lies in its "Cache-Aware FastConformer-RNNT" [[concepts/architecture|architecture]]. Unlike conventional buffered streaming that repeatedly re-encodes overlapping [[concepts/audio-modality|audio]] chunks, Nemotron 3.5 processes each [[concepts/audio-modality|audio]] frame exactly once. It caches the encoder's [[concepts/self-attention|self-attention]] and activations, reusing these stored states as new audio arrives. This intelligent [[concepts/caching|caching]] mechanism eliminates redundant computation, drastically reducing latency while maintaining high [[concepts/accuracy|accuracy]], making it exceptionally well-suited for low-latency [[concepts/tone|voice]] [[entities/agent|agent]] [[concepts/software|applications]] and other real-time [[concepts/scenarios|use cases]]. NVIDIA reports this approach can be up to 17 times faster on H100 GPUs.

Beyond its core architectural efficiency, Nemotron 3.5 ASR offers dynamic runtime flexibility, allowing users to tune the trade-off between latency and [[concepts/accuracy|accuracy]] without retraining the model. Users can adjust the "attention context" to set chunk sizes from a very low 80 milliseconds (for ultra-low latency [[concepts/tone|voice]] agents) up to 1.12 seconds (for highest accuracy). The model also introduces "Word Boosting," a crucial feature for improving the recognition of rare or domain-specific words (like product names, drug names, or surnames) that may not have been extensively covered in the [[concepts/language-data|training data]]. This feature allows users to inject a custom list of words with a positive bias during the decoding stage [[concepts/assistive-technology|at]] runtime, effectively guiding the model without altering its core [[concepts/weights|weights]].

Nemotron 3.5 ASR supports 40 language locales, categorized into three tiers: 19 "transcription-ready" locales offering highest accuracy out-of-the-box, 13 "broad-coverage" locales for production ASR, and 8 "adaptation-ready" locales that can be fine-tuned to unlock full transcription capabilities. Additionally, the underlying NeMo framework supports [[entities/speaker|Speaker]] Diarization, enabling the model to segment audio recordings by different speakers, enhancing the utility for multi-[[entities/speaker|speaker]] content such as [[entities/podcasts|podcasts]] or conference calls. In essence, Nemotron 3.5 ASR is presented as a highly versatile, efficient, and customizable [[concepts/speech-translation|speech-to-text]] [[concepts/solution|solution]], capable of being self-hosted and optimized for diverse real-time and production environments.

### Video Description & Links
#### Description
In this video, we look at the latest ASR release from NVIDIA, Nemotron 3.5 ASR. This can be used in live multilingual streaming, word boosting and diarization pipelines.

Blog: https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/
HF: https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻[[entities/github|Github]]:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:05 Nemotron 3.5 ASR
01:57 Cache-aware
03:42 Nemotron 3.5 ASR Quantized versions
05:04 Model Card
06:47 Word Boosting
10:06 Demo
18:20 Speaker Diarization

#### Tags
`NVIDIA Nemotron 3.5 ASR`, `Nemotron 3 Ultra`, `streaming speech recognition`, `multilingual ASR`, `fine-tune ASR`, `Cache-Aware FastConformer`, `RNNT decoder`, `word boosting`, `NeMo ASR`, `speech to text`, `low latency ASR`, `open weights ASR`, `agentic AI`, `AI agents`, `NeMo toolkit`, `ASR customization`, `real-time transcription`, `NVIDIA NeMo`, `LLM reasoning`, `multi-agent AI`, `NVIDIA AI`, `on-device ASR`, `voice AI 2026`, `fine-tune speech model`

#### URLs
- https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/
- https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/multilingual-asr|Multilingual ASR]] — [Wikipedia](https://en.wikipedia.org/wiki/Multilingual_ASR)
- [[concepts/automatic-speech-recognition|Automatic Speech Recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Automatic_Speech_Recognition)
- [[concepts/real-time-asr|Real-time Transcription]] — [Wikipedia](https://en.wikipedia.org/wiki/Real-time_Transcription)
- [[concepts/statistical-language-modeling|Language Modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Language_Modeling)
- [[concepts/ai-efficiency|AI Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Efficiency)
- Multilingual Automatic [[concepts/speech-recognition|Speech Recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Multilingual_Automatic_Speech_Recognition)
- Streaming ASR — [Wikipedia](https://en.wikipedia.org/wiki/Streaming_ASR)
- Cache-Aware FastConformer-RNNT — [Wikipedia](https://en.wikipedia.org/wiki/Cache-Aware_FastConformer-RNNT)
- Encoder State [[concepts/caching|Caching]] — [Wikipedia](https://en.wikipedia.org/wiki/Encoder_State_Caching)
- Latency Optimization — [Wikipedia](https://en.wikipedia.org/wiki/Latency_Optimization)
- Dynamic Runtime Flexibility — [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Runtime_Flexibility)
- Word Boosting — [Wikipedia](https://en.wikipedia.org/wiki/Word_Boosting)
- [[concepts/speaker-separation|Speaker Diarization]] — [Wikipedia](https://en.wikipedia.org/wiki/Speaker_Diarization)
- NeMo Framework — [Wikipedia](https://en.wikipedia.org/wiki/NeMo_Framework)
- [[concepts/vapi-integration|Voice Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/Voice_Agents)
- [[concepts/self-hosted-ai|Self-hosted AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-hosted_AI)
- Audio Frame Processing — [Wikipedia](https://en.wikipedia.org/wiki/Audio_Frame_Processing)
- [[concepts/gpu-architecture|Quantized Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Quantized_Models)
- Attention Context Tuning — [Wikipedia](https://en.wikipedia.org/wiki/Attention_Context_Tuning)
- Low-latency Voice [[concepts/software|Applications]] — [Wikipedia](https://en.wikipedia.org/wiki/Low-latency_Voice_Applications)

## Related Entities
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA)
- [[entities/nemotron-35|Nemotron 3.5]] — [Wikipedia](https://en.wikipedia.org/wiki/Nemotron_3.5)
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- Nemotron 3.5 ASR — [Wikipedia](https://en.wikipedia.org/wiki/Nemotron_3.5_ASR)
- Nemotron 3 — [Wikipedia](https://en.wikipedia.org/wiki/Nemotron_3)
- H100 GPUs — [Wikipedia](https://en.wikipedia.org/wiki/H100_GPUs)
- NeMo Framework — [Wikipedia](https://en.wikipedia.org/wiki/NeMo_Framework)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)