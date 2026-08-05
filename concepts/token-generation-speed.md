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
aliases:
  - "tokens-per-second"
  - "generation-throughput"
  - "inference-latency"
  - "MTP"
summary: Token generation speed measures how many tokens per second an LLM produces during autoregressive inference. Multi-Token Prediction (MTP) enhances this by predicting multiple future tokens simultaneously, significantly boosting throughput in architectures like Qwopus Coder. Recent advancements like DeepSeek DSpark further accelerate inference via enhanced speculative decoding.
updated: 2026-07-12
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Token Generation Speed

**Token Generation [[concepts/speed|Speed]]** (often measured as [[concepts/tokens|tokens]] per second, tps) is the metric defining how rapidly a [[concepts/large-language-model|Large Language Model]] ([[concepts/llm]]) produces output during autoregressive [[concepts/inference|inference]]. It is a primary bottleneck in [[concepts/user-experience-design|user experience]] and system throughput.

## Key Determinants

- **[[concepts/hardware-acceleration|Hardware Acceleration]]**: GPU [[concepts/vram|VRAM]] [[concepts/network-speed|bandwidth]] and [[concepts/compute|compute]] units (e.g., Tensor Cores) heavily dictate speed.
- **[[concepts/architecturetechnique|Model Architecture]]**: [[concepts/context-windows|Context length]], [[concepts/parameter-count|parameter count]], and [[concepts/attention-mechanisms|attention mechanisms]] influence computational load.
- **[[concepts/speculative-decoding|Speculative Decoding]]**: Techniques that predict multiple tokens in parallel to reduce sequential dependency overhead.
    - **[[concepts/multi-token-prediction|Multi-Token Prediction (MTP)]]**: Predicts multiple future tokens simultaneously, boosting throughput in models like [[entities/qwopus-36-35b-a3b-coder|Qwopus Coder]].
    - **[[concepts/dspark-module|DeepSeek DSpark]]**: A specialized speed layer introduced by [[concepts/deepseek-ai|DeepSeek]] that utilizes enhanced [[concepts/llm-inference-acceleration|speculative decoding]] to significantly accelerate inference. As demonstrated with [[concepts/qwen3-model|Qwen3]] models, [[concepts/deepseek-v4-pro|DSpark]] can effectively double generation speed by optimizing the [[concepts/verification|verification]] and proposal phases of [[concepts/lossless-acceleration|speculative decoding]]. See [[lab-notes/2026-07-08-DeepSeek-DSpark-LLM-Inference-Acceleration-via-Enhanced|DeepSeek DSpark: LLM Inference Acceleration via Enhanced Speculative Decoding]] for detailed analysis.

## References

- [DeepSeek DSpark: LLM Inference Acceleration via Enhanced Speculative Decoding](https://www.youtube.com/watch?v=yvAHJZAf1xM)
