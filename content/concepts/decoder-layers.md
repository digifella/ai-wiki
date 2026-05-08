---
type: concept
domain: creative-pursuits
tags:
  - "machine-learning"
  - "transformer"
  - "asr"
  - "nlp"
  - "deep-learning"
updated: 2026-04-15
group: photoshop-layer-workflows
---
# Decoder Layers

Components in sequence-to-sequence models (e.g., [[concepts/transformers|transformers]]) responsible for generating output sequences from encoded inputs. Each layer typically contains [[concepts/self-attention|self-attention]] and feed-forward sub-layers, processing [[concepts/tokens|tokens]] incrementally to produce the final output.

## Related Concepts
- Transformer
- Encoder-Decoder [[concepts/architecture|Architecture]]
- Automatic [[concepts/speech-recognition|Speech Recognition]]
- [[entities/whisper-ai|Whisper]]

## Applications
- Used in Whisper's `whisper-large-v3-turbo` model for [[concepts/real-time-asr|real-time ASR]], as demonstrated in [[entities/fahd-mirza|Fahd Mirza]] - getting Whisper working on [[entities/google-colab|Google Colab]].

Backlink: 2026 04 14 [[entities/fahd-mirza|Fahd Mirza]] getting Whisper working on [[entities/google-colab|Google Colab]]
