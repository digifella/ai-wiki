---
type: concept
domain: ai-agents
tags:
  - "performance"
  - "benchmark"
  - "throughput"
  - "qwen"
  - "llm"
  - "decode-throughput"
  - "llm-performance"
  - "token-generation"
  - "inference-latency"
  - "qwen-benchmarks"
aliases:
  - "generation speed"
  - "tokens per second"
  - "decoding rate"
  - "output throughput"
summary: Decode throughput measures the rate at which a large language model generates output tokens during the autoregressive decoding phase, serving as a key metric for latency and cost-efficiency.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-24T20:54:24+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# decode throughput

**Decode throughput** refers to the rate at which a [[concepts/large-language-model|large language model]] generates output [[concepts/tokens|tokens]] during the [[concepts/autoregressive-decoding|autoregressive decoding]] [[concepts/phase|phase]]. It is a critical metric for evaluating real-time [[concepts/user-experience-design|user experience]], latency, and [[concepts/cost-efficiency|cost-efficiency]] in [[concepts/production-environments|production environments]].

## Key Metrics
*   **[[concepts/text-generation-speed|Tokens per Second]] (TPS):** The primary measure of generation speed.
*   **Time to First Token (TTFT):** Often correlated with prefill throughput, affecting perceived responsiveness.
*   **[[concepts/context-window|Context Window]] Impact:** Throughput typically degrades as [[concepts/context-length|context length]] increases due to [[concepts/attention-mechanism|attention mechanism]] overhead.

## Recent Benchmarks & Evaluations
*   **[[concepts/qwen-38-max|Qwen 3.8-Max]] Performance:** Evaluated for fundamental [[concepts/ai-performance-evaluation|performance metrics]] and agentic task capabilities.
    *   Demonstrated excellent prefill speeds, ranging from approximately 640 tokens/second for short prompts.
    *   See detailed analysis: [[lab-notes/2026-09-25-Qwen-3.8-Max-Performance-Benchmarks-and-Agentic-Task-Eva|Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation]]
    *   Full source: [Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation](https://www.youtube.com/watch?v=KZ6uQMQtJW4)

## Optimization Strategies
*   **[[concepts/precision-reduction|Quantization]]:** Using INT8 or FP8 [[concepts/parameters|weights]] to reduce [[concepts/memory|memory]] [[concepts/network-speed|bandwidth]] bottlenecks.
*   **[[concepts/speculative-decoding|Speculative Decoding]]:** Leveraging a smaller [[concepts/draft-model|draft model]] to accelerate the decoding process.
*   **[[concepts/prompt-caching|KV Cache]] Management:** Efficient caching to minimize redundant [[concepts/computation|computation]] for repeated contexts.
