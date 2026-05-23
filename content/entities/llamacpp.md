---
type: entity
tags:
  - "local-llm"
  - "inference-engine"
  - "llm-optimization"
  - "private-ai"
  - "on-device-deployment"
  - "speculative-decoding"
  - "model-switching"
aliases:
  - "Llama.cpp"
  - "llama.cpp"
summary: A local LLM inference engine that enables accessible and private AI deployment on personal devices, featuring advanced optimizations like Multi-Token Prediction, stacked speculative decoding, and native router mode for hot-swappable model switching.
updated: 2026-05-23
---
# Llamacpp

Llamacpp is an [[concepts/inference-engine|inference engine]] designed to run [[concepts/large-language-model-llm|large language models]] (LLMs) locally on personal devices without requiring [[concepts/cloud-integration|cloud connectivity]] or external servers. The [[concepts/software|software]] prioritizes [[concepts/accessibility|accessibility]] by enabling users to deploy [[concepts/ai-models|AI models]] on standard consumer [[concepts/hardware|hardware]], making advanced [[concepts/natural-language-processing-nlp|language processing]] [[concepts/capabilities|capabilities]] available to individual users and organizations seeking to reduce dependency on commercial API services.

## Core Functionality

The engine handles the computational requirements of [[concepts/running|running]] LLMs through optimized [[concepts/inference|inference]] processes. By executing model inference locally, Llamacpp eliminates the need to send data to remote servers, addressing [[concepts/privacy|privacy]] concerns for users processing sensitive information. This approach also reduces latency and enhances [[concepts/data-sovereignty|data sovereignty]]. Key technical features include:

*   **Advanced Optimization**: Utilizes Multi-Token Prediction and stacked [[concepts/speculative-decoding|speculative decoding]] to accelerate inference speeds on constrained hardware.
*   **Router Mode**: Introduced in recent updates, this feature enables native hot-swappable [[concepts/local-llm|local LLM]] switching, simplifying the management of multiple [[concepts/models|models]] without restarting the server. See [[lab-notes/2026-05-22-llama.cpp-Router-Mode-Native-Hot-Swappable-Local-LLM-Swi|llama.cpp Router Mode: Native Hot-Swappable Local LLM Switching]] for a detailed analysis of this capability.
