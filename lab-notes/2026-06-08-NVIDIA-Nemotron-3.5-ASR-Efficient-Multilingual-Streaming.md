---
title: "NVIDIA Nemotron 3.5 ASR: Efficient Multilingual Streaming Real-time Transcription"
date: 2026-06-08
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# NVIDIA Nemotron 3.5 ASR: Efficient Multilingual Streaming Real-time Transcription
Generated: 2026-06-08 · API: Gemini 2.5 Flash · Modes: Summary

---

## NVIDIA Nemotron 3.5 ASR: Efficient Multilingual Streaming Real-time Transcription
**Clip title:** The NEW Best ASR - NVIDIA Nemotron 3.5 ASR
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=7BwSG_r9Jxg

### Summary
The video introduces NVIDIA's Nemotron 3.5 ASR, a new multilingual streaming Automatic Speech Recognition (ASR) model. This 600-million-parameter model is designed for real-time transcription across 40 language locales, with built-in punctuation and capitalization. It improves upon previous models like the English-only Nemotron 3 by offering a significantly more efficient architecture that addresses the limitations of traditional streaming ASR methods, which often suffer from high latency due to redundant computations.

The core innovation of Nemotron 3.5 ASR lies in its "Cache-Aware FastConformer-RNNT" architecture. Unlike conventional buffered streaming that repeatedly re-encodes overlapping audio chunks, Nemotron 3.5 processes each audio frame exactly once. It caches the encoder's self-attention and activations, reusing these stored states as new audio arrives. This intelligent caching mechanism eliminates redundant computation, drastically reducing latency while maintaining high accuracy, making it exceptionally well-suited for low-latency voice agent applications and other real-time use cases. NVIDIA reports this approach can be up to 17 times faster on H100 GPUs.

Beyond its core architectural efficiency, Nemotron 3.5 ASR offers dynamic runtime flexibility, allowing users to tune the trade-off between latency and accuracy without retraining the model. Users can adjust the "attention context" to set chunk sizes from a very low 80 milliseconds (for ultra-low latency voice agents) up to 1.12 seconds (for highest accuracy). The model also introduces "Word Boosting," a crucial feature for improving the recognition of rare or domain-specific words (like product names, drug names, or surnames) that may not have been extensively covered in the training data. This feature allows users to inject a custom list of words with a positive bias during the decoding stage at runtime, effectively guiding the model without altering its core weights.

Nemotron 3.5 ASR supports 40 language locales, categorized into three tiers: 19 "transcription-ready" locales offering highest accuracy out-of-the-box, 13 "broad-coverage" locales for production ASR, and 8 "adaptation-ready" locales that can be fine-tuned to unlock full transcription capabilities. Additionally, the underlying NeMo framework supports Speaker Diarization, enabling the model to segment audio recordings by different speakers, enhancing the utility for multi-speaker content such as podcasts or conference calls. In essence, Nemotron 3.5 ASR is presented as a highly versatile, efficient, and customizable speech-to-text solution, capable of being self-hosted and optimized for diverse real-time and production environments.

### Video Description & Links
#### Description
In this video, we look at the latest ASR release from NVIDIA, Nemotron 3.5 ASR. This can be used in live multilingual streaming, word boosting and diarization pipelines.

Blog: https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/
HF: https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building LLM Agents? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻Github:
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
