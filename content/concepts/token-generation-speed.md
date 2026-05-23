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
aliases:
  - "tokens-per-second"
  - "generation-throughput"
  - "inference-latency"
summary: Token generation speed measures how many tokens per second an LLM produces during autoregressive inference, determined by hardware acceleration, model architecture, quantization, and optimization techniques like speculat
updated: 2026-05-23
group: multimodal-generative-media
---
# Token Generation Speed

**Token Generation [[concepts/speed|Speed]]** (often measured as [[concepts/tokens|tokens]] per second, tps) is the metric defining how rapidly a [[concepts/large-language-model|Large Language Model]] ([[concepts/llm]]) produces [[concepts/output|output]] during autoregressive [[concepts/inference|inference]]. It is a primary bottleneck in [[concepts/user-experience-design|user experience]] and system throughput.

## Key Determinants

- **[[concepts/hardware|Hardware]] Acceleration**: GPU [[concepts/vram|VRAM]] bandwidth and [[concepts/compute|compute]] units (e.g., Tensor Cores) heavily dictate speed.
- **[[concepts/architecturetechnique|Model Architecture]]**: [[concepts/context-windows|Context length]], [[concepts/parameter-count|parameter count]], and [[concepts/attention-mechanisms|attention mechanisms]] ([[concepts/inference-optimization]]) impact latency.
- **[[concepts/parameter-reduction|Quantization]]**: Using lower precision formats (e.g., [[concepts/gguf|GGUF]] Q4_0) reduces VRAM usage and can increase throughput, albeit with potential [[concepts/accuracy|accuracy]] trade-offs.
- **Prompt Processing**: The "prefill" [[concepts/phase|phase]] speed versus the "decoding" phase speed.

## Optimization Techniques

- **[[concepts/speculative-inference|Speculative Decoding]]**: [[concepts/speculative-decoding]] allows the model to predict multiple tokens in parallel before [[concepts/verification|verification]], effectively increasing throughput.
- **[[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]]**: Recent advancements in [[entities/llamacpp]] include [[concepts/native-support|native support]] for Multi-Token Prediction, where the model is trained to predict subsequent tokens simultaneously rather than strictly sequentially. This reduces the number of forward passes required for a given output length.
    - See: [[lab-notes/2026-05-19-Llama.cpp-Multi-Token-Prediction-Faster-Local-LLM-Infere|Llama.cpp Multi-Token Prediction: Faster Local LLM Inference Explained]] for details on the 2x speedup potential and [[concepts/adoption|implementation]] specifics.
- **Batching**: Increasing batch size for non-interactive workloads improves GPU utilization.

## References

- [[entities/llamacpp]] documentation on [[concepts/multi-token-prediction-mtp|MTP]] [[concepts/adoption|implementation]].
- [[entities/tim-carambat|Tim Carambat]]'s analysis of MTP [[concepts/integration|integration]] in 2026.
