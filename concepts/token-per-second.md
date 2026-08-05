---
type: concept
domain: ai-agents
tags:
  - "llm-inference"
  - "model-efficiency"
  - "throughput-metrics"
  - "hardware-acceleration"
  - "quantization"
  - "mixture-of-experts"
  - "openai"
  - "gpt-5"
aliases:
  - "tok/s"
  - "Tokens Per Second"
  - "LLM Throughput"
  - "Inference Rate"
summary: Token Per Second (tok/s) is a metric for Large Language Model inference speed that measures output generation rate and is influenced by model architecture, hardware acceleration, context length, and quantization. Recent developments highlight strategic trade-offs between speed and intelligence in models like GPT-5.6 Sol.
updated: 2026-07-15
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Token Per Second

**Token Per Second (tok/s)** is a primary metric for [[concepts/large-language-model-llm|Large Language Model (LLM)]] [[concepts/llm-inference-speed|inference speed]], measuring the rate at which a model generates output [[concepts/tokens|tokens]]. It is a critical determinant of [[concepts/user-experience-design|user experience]], latency, and computational cost in real-time applications.

## Key Factors
- **[[concepts/architecturetechnique|Model Architecture]]**: [[concepts/mixture-of-experts|Mixture of Experts]] (MoE) models often achieve higher tok/s by activating only a subset of parameters per token.
- **[[concepts/hardware-acceleration|Hardware Acceleration]]**: GPU [[concepts/vram|VRAM]] [[concepts/network-speed|bandwidth]] and tensor core utilization directly limit maximum throughput.
- **[[concepts/context-windows|Context Length]]**: Longer contexts increase [[concepts/memory-overhead|memory overhead]], potentially reducing tok/s due to [[concepts/self-attention|attention mechanism]] complexity.
- **[[concepts/quantization|Quantization]]**: Reducing [[concepts/accuracy|precision]] (e.g., FP16 to INT8) can significantly boost tok/s by lowering [[concepts/storage-bandwidth|memory bandwidth]] requirements and compute intensity.

## Strategic Trade-offs: Speed vs. Intelligence
Recent industry analysis highlights the tension between maximizing [[concepts/speed|inference speed]] and maintaining model capability, particularly in proprietary systems.

- **[[concepts/gpt-56-sol|GPT-5.6 Sol]] Case Study**: OpenAI's GPT-5.6 Sol demonstrates a strategic optimization for speed, reportedly achieving up to 18.5x speed improvements in specific benchmarks. This highlights a deliberate trade-off where raw throughput is prioritized, potentially at the expense of peak [[concepts/reasoning-capabilities|reasoning capabilities]] or "intelligence" density per token.
- **Revenue and Infrastructure Implications**: High tok/s enables lower latency for end-users and reduced [[concepts/compute-costs|compute costs]] per query, directly impacting [[concepts/revenue-models|revenue strategy]] and scalability. However, this requires careful balancing to ensure that [[concepts/speed-enhancements|speed enhancements]] do not degrade the quality of [[concepts/complex-reasoning|complex reasoning]] tasks.
- **Hardware Constraints**: Achieving such high throughput often relies on specialized hardware configurations and efficient [[concepts/kv-cache|KV cache]] management, pushing the limits of current [[concepts/gpu-architecture|GPU architecture]] capabilities.

## References
- [OpenAI's GPT-5.6 Sol: LLM Speed, Hardware Trade-offs, and Revenue Strategy](https://www.youtube.com/watch?v=KkDhn5Ixw5A)
- See also: [[lab-notes/2026-07-15-OpenAIs-GPT-5.6-Sol-LLM-Speed-Hardware-Trade-offs-and-Re|OpenAI's GPT-5.6 Sol: LLM Speed, Hardware Trade-offs, and Revenue Strategy]]
