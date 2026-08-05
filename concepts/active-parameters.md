---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "concept"
  - "llm-performance"
  - "model-efficiency"
  - "nvidia-nemotron"
  - "deepseek-v4"
  - "ollama"
  - "local-llm"
  - "active-parameters"
  - "llm-inference"
  - "model-optimization"
  - "local-deployment"
  - "performance-tuning"
aliases:
  - "Parameter Optimization"
  - "Model Parameters"
  - "LLM Configuration"
summary: A collection of notes regarding the performance, efficiency, and local execution of large language models such as NVIDIA Nemotron-3 Nano and DeepSeek V4.
updated: 2026-07-13
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-13" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Active Parameters

**Active Parameters** refers to the collection of configuration variables and hyperparameters that control [[concepts/large-language-model-llm|large language model (LLM)]] behavior during [[concepts/inference|inference]] and deployment. Unlike training parameters, which are fixed once model training completes, active parameters remain adjustable at runtime to optimize performance for specific hardware constraints and use cases. These parameters govern aspects such as token generation strategy, sampling behavior, context window management, and computational resource allocation.

## Runtime Configuration

Active parameters are primarily adjusted during the inference phase to balance output quality, generation speed, and resource consumption. Common active parameters include temperature (controlling output randomness), top-k and top-p sampling thresholds, maximum token limits, and batch size settings. For models like NVIDIA Nemotron-3 Nano and DeepSeek V4, active parameters enable efficient execution on resource-constrained hardware by allowing users to trade off model capability against latency and memory usage.

## Local Execution Considerations

When deploying LLMs locally, active parameters become critical for managing computational budgets. Reducing context window size, lowering precision requirements, or adjusting quantization settings can substantially decrease memory footprint and inference latency without retraining the model. The flexibility of active parameters allows smaller models to operate within the constraints of consumer-grade hardware while maintaining practical performance levels for specific applications.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Google-Gemma-4-Open-Weight-Models-Apache-20-and-Enhanced-AI|Google Gemma 4 Open Weight Models Apache 20 and Enhanced AI]] · [▶ source](https://www.youtube.com/watch?v=5aqF1HVpjdc)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-24: DeepSeek · [▶ source](https://www.youtube.com/watch?v=u3f35QQSLqE)
- 2026-04-26: DeepSeek V4: China
- 2026-04-30: Google DeepMind
