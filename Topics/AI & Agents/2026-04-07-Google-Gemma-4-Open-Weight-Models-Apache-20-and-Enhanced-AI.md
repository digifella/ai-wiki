---
wiki-ingested: true
title: "Google Gemma 4 Open-Weight Models: Apache 2.0 and Enhanced AI Capabilities"
created: "2026-04-07 14:45"
date: 2026-04-07
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Google Gemma 4 Open-Weight Models: Apache 2.0 and Enhanced AI
Capabilities
**Clip title:** [[concepts/gemma-4|Gemma 4]] Has Landed!
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=5aqF1HVpjdc

### Summary
Google has launched [[concepts/23b-parameter-models|Gemma 4]], a new suite of [[concepts/model-customization|open-weight models]] that
significantly advance their Gemma series, primarily by adopting a
developer-friendly [[concepts/apache-2.0-license|Apache 2.0 license]]. This [[concepts/license|license]] is a major highlight,
allowing users unprecedented freedom to use, modify, distribute, and
commercially deploy Google's best open models without restrictive clauses.
Gemma 4 comprises four distinct models with enhanced capabilities across
multimodality, thinking ([[concepts/reasoning|reasoning]]), native [[concepts/audio-processing|audio processing]], and robust
function calling. This move is seen as Google's direct response to previous
criticisms regarding restrictive [[concepts/licensing|licensing]] on earlier Gemma versions,
aiming to foster broader [[concepts/adoption|adoption]] and [[concepts/innovation|innovation]] within the open-source AI
community.

The Gemma 4 models are categorized into two tiers: "Workstation Models" and
"Edge Models." The Workstation tier includes a 31 billion parameter (31B
Dense) full-[dense architecture](https://en.wikipedia.org/wiki/dense_architecture) and a 26 billion parameter
[[concepts/mixture-of-experts|Mixture-of-Experts]] (26BA4B MoE) model, where 4 billion [[concepts/parameters|parameters]] are
active at any given moment, distributed among 128 tiny experts. These are
designed for [[entities/high-performance|high-performance]] [[concepts/inference|inference]]. The Edge tier features smaller,
highly efficient models (E2B and E4B) with approximately 2 billion and 4
billion effective parameters, respectively. These tiny models are optimized
to run on resource-constrained devices like phones, Raspberry Pis, and
Jetson Nanos, making them suitable for [[concepts/offline-ai|on-device AI]] assistants and
applications.

A key architectural advancement in Gemma 4, drawing from Google's [[concepts/gemini|Gemini]] 3
research, is the [[concepts/native-integration|native integration]] of multimodality and enhanced
reasoning. Unlike previous models that often required [[concepts/external-tools|external tools]] for
capabilities beyond [[concepts/text|text]] or text-plus-[[concepts/computer-vision|vision]], Gemma 4 natively supports
vision, audio, and function calling within a single model family. The new
"thinking" capability allows models to perform internal [[concepts/multi-step-reasoning|chain-of-thought]]
reasoning before generating an output, significantly improving performance
on complex benchmarks and enabling reasoning across modalities, including
audio for the first time. The integrated function calling leverages
FunctionGemma research, optimizing models for multi-turn [[concepts/agentic-patterns|agentic workflows]]
and allowing them to maintain context and utilize external tools
effectively.

Specifically, the Edge models (E2B & E4B) boast significantly better native
audio support compared to their predecessors. They feature a
conformer-layer ASR encoder for improved audio recognition [[concepts/accuracy|accuracy]],
built-in [[concepts/speech-recognition|speech recognition]], and speech-to-translated-text capabilities.
The audio encoder is also 50% smaller and offers faster processing, crucial
for low-latency edge deployments. For vision, Gemma 4 handles [[concepts/images|images]] at
their native aspect ratio and various resolutions, supporting interleaved
multi-image inputs. This enhances capabilities for [[concepts/optical-character-recognition|Optical Character Recognition]] (OCR), object recognition, document understanding, and improved
video understanding with temporal reasoning. Gemma 4 is available on
[[concepts/open-source-machine-learning|Hugging Face]] and Google Cloud, with Cloud Run now supporting NVIDIA RTX Pro
6000 (Blackwell) GPUs for serverless [[concepts/deployment|deployment]] of even the larger models.

## Related Concepts
- [[concepts/open-weight-language-models|open-weight language models]] — [Wikipedia](https://en.wikipedia.org/wiki/open-weight_language_models)
- [[concepts/open-source|Apache 2.0 license]] — [Wikipedia](https://en.wikipedia.org/wiki/Apache_2.0_license)
- [[concepts/ai-workflow|AI capabilities]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_capabilities)
- [[concepts/open-weight-models|open-weight models]] — [Wikipedia](https://en.wikipedia.org/wiki/open-weight_models)
- [[concepts/generative-ai|multimodality]] — [Wikipedia](https://en.wikipedia.org/wiki/multimodality)
- [[concepts/reasoning|reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/reasoning)
- [[concepts/native-audio-processing|native audio processing]] — [Wikipedia](https://en.wikipedia.org/wiki/native_audio_processing)
- [[concepts/function-calling|function calling]] — [Wikipedia](https://en.wikipedia.org/wiki/function_calling)
- [[concepts/mixture-of-experts|mixture-of-experts]] — [Wikipedia](https://en.wikipedia.org/wiki/mixture-of-experts)
- dense architecture — [Wikipedia](https://en.wikipedia.org/wiki/dense_architecture)
- [[concepts/inference|inference]] — [Wikipedia](https://en.wikipedia.org/wiki/inference)
- [[concepts/on-device-ai|on-device AI]] — [Wikipedia](https://en.wikipedia.org/wiki/on-device_AI)
- [[concepts/multi-step-reasoning|chain-of-thought]] reasoning — [Wikipedia](https://en.wikipedia.org/wiki/chain-of-thought_reasoning)
- [[concepts/agentic-ai|agentic workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/agentic_workflows)
- [[concepts/automatic-speech-recognition|automatic speech recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/automatic_speech_recognition)
- [[concepts/optical-character-recognition|optical character recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/optical_character_recognition)
- serverless [[concepts/deployment|deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/serverless_deployment)
- [[concepts/edge-computing|edge computing]] — [Wikipedia](https://en.wikipedia.org/wiki/edge_computing)
