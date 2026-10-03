---
type: concept
domain: ai-agents
tags:
  - "LLM"
  - "inference"
  - "performance"
  - "llama.cpp"
  - "tokenization"
  - "token-generation"
  - "inference-speed"
  - "llm-performance"
  - "quantization"
  - "speculative-decoding"
  - "multi-token-prediction"
  - "diffusion-models"
  - "parallel-decoding"
  - "MoE"
  - "coding-agents"
  - "state-space-models"
  - "recurrent-neural-networks"
  - "transformer-architecture"
aliases:
  - "tokens-per-second"
  - "generation-throughput"
  - "inference-latency"
  - "MTP"
  - "SSM"
  - "RNN"
summary: Token generation speed measures how many tokens per second an LLM produces during autoregressive inference. Multi-Token Prediction (MTP) enhances this by predicting multiple future tokens simultaneously. Recent architectural shifts explore State-Space Models (SSMs) and Recurrent Neural Networks (RNNs) to mitigate Transformer limitations.
updated: 2026-10-01
group: multimodal-generative-media
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-01T02:13:42+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Token Generation Speed

**Token Generation [[concepts/speed|Speed]]** (often measured as [[concepts/tokens|tokens]] per second, tps) is the metric defining how rapidly a [[concepts/large-language-model|Large Language Model]] ([[concepts/llm]]) produces output during autoregressive [[concepts/inference|inference]]. It is a primary bottleneck in [[concepts/user-experience-design|user experience]] and system throughput.

## Key Determinants

- **[[concepts/hardware-acceleration|Hardware Acceleration]]**: GPU [[concepts/vram|VRAM]] [[concepts/network-speed|bandwidth]] and [[concepts/compute|compute]] capacity dictate the physical limits of [[concepts/parallel-processing|parallel processing]] and memory access during generation.
- **[[concepts/architecture|Model Architecture]]**: The underlying mathematical structure significantly impacts [[concepts/inference-efficiency|inference efficiency]]. While Transformers have dominated since 2017, their inherent weaknesses are driving research into alternative paradigms.

## Architectural Evolution: Beyond Transformers

Recent analysis highlights the limitations of the Transformer architecture, particularly regarding [[concepts/complexity-classes|computational complexity]] and memory overhead. This has spurred interest in alternative architectures for improved efficiency and scalability:

- **[[concepts/ssm|State-Space Models]] (SSMs)**: Emerging as a viable alternative to Transformers, SSMs offer linear scaling with sequence length, addressing the quadratic computational cost associated with [[concepts/attention-mechanism|attention mechanisms]] in standard [[concepts/llm|LLMs]].
- **Recurrent Neural Networks (RNNs)**: Modern recurrent approaches are being revisited for their ability to maintain state efficiently, potentially offering lower latency for specific [[concepts/inference|inference]] patterns compared to autoregressive Transformer decoding.
- **Transformer Limitations**: The dominance of Transformers in models like [[entities/chatgpt|ChatGPT]], [[concepts/claude|Claude]], and [[concepts/gemini|Gemini]] is being critically examined due to trade-offs in computational cost and scalability.

For a detailed breakdown of these architectural shifts and the race to replace Transformers, see [[lab-notes/2026-10-01-Beyond-Transformers-Exploring-State-Space-and-Recurrent|Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures]].

## Optimization Techniques

- **[[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]]**: Enhances throughput by predicting multiple future tokens simultaneously, significantly boosting performance in architectures like [[entities/qwen|Qwen]] Coder.
- **[[concepts/llm-inference-acceleration|Speculative Decoding]]**: Recent advancements like [[entities/deepseek|DeepSeek]] DSpark accelerate inference via enhanced speculative decoding, reducing the number of forward passes required.
- **Quantization**: Reducing precision (e.g., FP16, INT8) to improve [[concepts/inference-speed|inference speed]] and reduce [[concepts/4gb-memory|memory footprint]] without significant accuracy loss.

## References

- [Beyond Transformers: Exploring State-Space and Recurrent AI Model Architectures](https://www.youtube.com/watch?v=GSAOe0JNt94)
