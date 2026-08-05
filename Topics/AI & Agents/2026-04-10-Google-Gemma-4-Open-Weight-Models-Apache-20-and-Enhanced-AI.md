---
wiki-ingested: true
title: "Google Gemma 4 Open-Weight Models Apache 20 and Enhanced AI"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
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

## Google Gemma 4 Open-Weight Models: Apache 2.0 and Enhanced AI Capabilities
**Clip title:** [[entities/gemma|Gemma]] 4 Has Landed!
**Author / channel:** [[entities/sam-witteveen|Sam Witteveen]]
**URL:** https://www.youtube.com/watch?v=5aqF1HVpjdc

### Summary
Google has launched [[entities/gemma-4|Gemma 4]], a new suite of [[concepts/open-weight-models|open-weight models]] that
significantly advance their [[entities/gemma|Gemma]] series, primarily by adopting a
developer-friendly [[entities/apache-20|Apache 2.0]] [[concepts/license|license]]. This license is a major highlight,
allowing users unprecedented freedom to use, modify, distribute, and
commercially deploy Google's best open models without restrictive clauses.
[[concepts/gemma-4|Gemma 4]] comprises four distinct models with enhanced capabilities across
[[concepts/multimodality|multimodality]], [[concepts/human-cognition|thinking]] ([[concepts/reasoning|reasoning]]), [[concepts/native-audio-processing|native audio processing]], and robust
function calling. This move is seen as Google's direct response to previous
criticisms regarding restrictive [[concepts/licensing|licensing]] on earlier [[entities/google-gemma|Gemma]] versions,
aiming to foster broader [[concepts/adoption|adoption]] and [[concepts/innovation|innovation]] within the [[concepts/open-source-ai|open-source AI]]
community.

The [[concepts/23b-parameter-models|Gemma 4]] models are categorized into two tiers: "[Workstation Models](https://en.wikipedia.org/wiki/Workstation_Models)" and
"[Edge Models](https://en.wikipedia.org/wiki/Edge_Models)." The Workstation tier includes a 31 billion parameter (31B
Dense) full-dense architecture and a 26 billion parameter
[[concepts/mixture-of-experts|Mixture-of-Experts]] (26BA4B MoE) model, where 4 billion [[concepts/parameters|parameters]] are
active at any given moment, distributed among 128 tiny experts. These are
designed for [[entities/high-performance|high-performance]] [[concepts/inference|inference]]. The Edge tier features smaller,
highly efficient models (E2B and E4B) with approximately 2 billion and 4
billion effective [[concepts/parameters|parameters]], respectively. These tiny models are optimized
to run on resource-constrained devices like phones, Raspberry Pis, and
Jetson Nanos, making them suitable for [[concepts/offline-ai|on-device AI]] assistants and
applications.

A key architectural advancement in Gemma 4, drawing from Google's [[entities/gemini-3|Gemini 3]]
research, is the [[concepts/native-integration|native integration]] of [[concepts/multimodality|multimodality]] and enhanced
[[concepts/reasoning|reasoning]]. Unlike previous models that often required [[concepts/external-tools|external tools]] for
capabilities beyond [[concepts/text|text]] or text-plus-[[concepts/computer-vision|vision]], Gemma 4 natively supports
vision, audio, and function calling within a single model family. The new
"thinking" capability allows models to perform internal [[concepts/multi-step-reasoning|chain-of-thought]]
reasoning before generating an output, significantly improving performance
on complex benchmarks and enabling reasoning across modalities, including
audio for the first time. The integrated function calling leverages
FunctionGemma research, optimizing models for multi-turn [[concepts/agentic-workflows|agentic workflows]]
and allowing them to maintain context and utilize external tools
effectively.

Specifically, the Edge models (E2B & E4B) boast significantly better native
audio support compared to their predecessors. They feature a
conformer-layer [[concepts/automatic-speech-recognition|ASR]] encoder for improved audio recognition [[concepts/accuracy|accuracy]],
built-in [[concepts/speech-recognition|speech recognition]], and speech-to-translated-text capabilities.
The audio encoder is also 50% smaller and offers faster processing, crucial
for low-latency edge deployments. For vision, Gemma 4 handles [[concepts/images|images]] at
their native aspect ratio and various resolutions, supporting interleaved
multi-image inputs. This enhances capabilities for [[concepts/optical-character-recognition|Optical Character Recognition]] (OCR), object recognition, document understanding, and improved
video understanding with temporal reasoning. Gemma 4 is available on
[[concepts/open-source-machine-learning|Hugging Face]] and [[entities/google-cloud|Google Cloud]], with Cloud Run now supporting NVIDIA RTX Pro
6000 (Blackwell) GPUs for serverless [[concepts/deployment|deployment]] of even the larger models.

## Related Concepts
- [[concepts/open-weight-models|Open-weight models]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-weight_models)
- [[concepts/open-source|Apache 2.0 license]] — [Wikipedia](https://en.wikipedia.org/wiki/Apache_2.0_license)
- [[concepts/ai-workflow|AI capabilities]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_capabilities)
- [[concepts/generative-ai|Multimodality]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodality)
- [[concepts/reasoning|Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning)
- [[concepts/native-audio-processing|Native audio processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Native_audio_processing)
- [[concepts/function-calling|Function calling]] — [Wikipedia](https://en.wikipedia.org/wiki/Function_calling)
- [[concepts/mixture-of-experts|Mixture-of-Experts (MoE)]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Experts_%28MoE%29)
- [[concepts/on-device-ai|On-device AI]] — [Wikipedia](https://en.wikipedia.org/wiki/On-device_AI)
- [[concepts/multi-step-reasoning|Chain-of-thought]] reasoning — [Wikipedia](https://en.wikipedia.org/wiki/Chain-of-thought_reasoning)
- [[concepts/agentic-ai|Agentic workflows]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_workflows)
- [[concepts/speech-recognition|Speech recognition]] — [Wikipedia](https://en.wikipedia.org/wiki/Speech_recognition)
- [[concepts/computer-vision|Computer vision]] — [Wikipedia](https://en.wikipedia.org/wiki/Computer_vision)
- [[concepts/automatic-speech-recognition|ASR]] encoder — [Wikipedia](https://en.wikipedia.org/wiki/ASR_encoder)
- [[concepts/open-source|Open-source AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_AI)
- Workstation Models — [Wikipedia](https://en.wikipedia.org/wiki/Workstation_Models)
- Edge Models — [Wikipedia](https://en.wikipedia.org/wiki/Edge_Models)
