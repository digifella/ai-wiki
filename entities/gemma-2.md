---
type: entity
tags:
  - "large-language-models"
  - "google"
  - "quantization"
  - "gpu-optimization"
  - "open-source"
aliases:
  - "Gemma 2 27B"
summary: Gemma 2 is a large language model from Google that can be run in quantized versions on 48GB VRAM NVIDIA GPUs.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# Gemma 2

[[entities/gemma|Gemma]] 2 is a [[concepts/large-language-model|large language model]] developed by [[concepts/google-search|Google]], released as part of the [[entities/google-gemma|Gemma]] family of [[concepts/reasoning-models|open-source models]]. It is designed to balance performance and efficiency, making it suitable for deployment on [[concepts/consumer-grade-hardware|consumer-grade hardware]].

## Hardware Requirements and Performance

Gemma 2 can be run in quantized form on [[concepts/nvidia-server-chips|NVIDIA GPUs]] with 48GB of [[concepts/vram|VRAM]]. In this configuration, quantized versions of the 27B parameter variant represent a viable option for [[concepts/local-inference|local inference]] alongside comparable models such as [[entities/llama-31|Llama 3.1 70B]], [[entities/qwen-2|Qwen 2 72B]], and [[entities/mistral-large|Mistral Large]]. [[concepts/parameter-reduction|Quantization]] reduces [[concepts/code-size|model size]] and [[concepts/memory|memory]] requirements while maintaining reasonable performance for [[concepts/instruction-following-tasks|instruction-following tasks]].

## Capabilities

The model is capable of handling well-instructed language tasks and [[concepts/instruction-following|instruction-following]] workloads. Its design emphasizes practical usability for development and deployment [[concepts/scenarios|scenarios]] where [[concepts/computational-resources|computational resources]] are constrained compared to the largest available language models.

- 2026-04-27 [2026-04-27-Google-Gemma-4-Open-Weight-AI-for-Local-Private-Executio](2026-04-27-Google-Gemma-4-Open-Weight-AI-for-Local-Private-Executio.md) ← [[concepts/23b-parameter-models|Google Gemma 4]] [[concepts/open-weight|Open Weight]] Ai For Local Private Executio
- 2026-04-07 [2026-04-07-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI](2026-04-07-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI.md) ← [[concepts/e2b-model|Google Gemma 4]] [[concepts/open-weight-models|Open Weight Models]] [[entities/apache-20|Apache 20]] And Enhanced Ai
- 2026-04-08 [2026-04-08-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI](2026-04-08-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI.md) ← [[concepts/e4b-model|Google Gemma 4]] Open Weight Models Apache 20 And Enhanced Ai
## Source Notes
