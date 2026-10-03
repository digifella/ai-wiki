---
type: concept
domain: ai-agents
tags:
  - "speech-recognition"
  - "automatic-speech-recognition"
  - "natural-language-processing"
  - "audio-processing"
  - "deep-learning"
  - "hidden-markov-models"
aliases:
  - "ASR"
  - "Automatic Speech Recognition"
  - "Speech-to-Text"
summary: Speech recognition is a subfield of AI research focused on converting spoken language into text or other usable data formats.
updated: 2026-07-12
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# speech recognition

## Overview
Speech recognition is a subfield of [[concepts/ai-research|AI research]] that focuses on developing [[concepts/algorithms|algorithms]] and frameworks to enable machines to convert spoken language into text or other forms of usable data. Recent advancements have seen significant improvements in accuracy and real-time performance.

### Key Concepts
- **Speech Recognition Algorithms**: Techniques used for converting speech signals into text, including [[concepts/hidden-markov-models|Hidden Markov Models]] (HMMs), [[concepts/deep-neural-networks|Deep Neural Networks]] (DNNs), and End-to-End models.
- **[[concepts/nlp|Natural Language Processing]] (NLP)**: The application of computational techniques to the analysis and synthesis of human language. Speech recognition often integrates with NLP to provide context-aware transcriptions and natural interactions.
- **Acoustic Models**: Statistical models that predict the probabilities of sound sequences in speech, forming a core component of speech processing pipelines by mapping raw [[concepts/audio-modality|audio]] features to phonetic or subword units.

### Recent Developments & Notable Models
- **[[lab-notes/2026-05-08-IBM-Granite-Speech-4.1-ASR-Models-Features-Accuracy-and|IBM Granite Speech 4.1 ASR Models: Features, Accuracy, and Enterprise Applications]]**: IBM's [[concepts/open-weight|open-weight]] [[entities/granite|Granite]] 4.1 family spans language, [[concepts/computer-vision|vision]], speech, and [[concepts/dense-vectors|embeddings]], with its ASR variants benchmarked for enterprise-grade latency, [[concepts/asr-accuracy|transcription fidelity]], and scalable deployment.
- **End-to-End Architectures**: Modern ASR increasingly favors transformer-based and conformer architectures that unify acoustic modeling and language modeling into single training objectives, reducing pipeline complexity and error propagation.
- **[[concepts/multimodal-understanding|Multimodal Integration]]**: ASR systems are increasingly coupled with [[concepts/text-to-speech-model|Text-to-Speech]] and vision models to enable full-duplex [[concepts/tone|voice]] agents, cross-modal [[concepts/reasoning|reasoning]], and real-time speech analytics.
