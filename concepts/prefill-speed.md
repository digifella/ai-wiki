---
type: concept
domain: ai-agents
tags:
  - "prefill-speed"
  - "performance"
  - "benchmark"
  - "qwen"
  - "llm-latency"
  - "qwen-3.8-max"
  - "agentic-workflows"
aliases:
  - "prompt processing speed"
  - "input throughput"
summary: Prefill speed measures the rate at which an LLM processes input tokens per second before generating the first output token.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-24T20:54:05+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Prefill Speed

**Prefill speed** refers to the rate at which an LLM processes the input prompt ([[concepts/decode-throughput|tokens per second]]) before generating the first output token. It is a critical metric for latency-sensitive applications and agentic workflows.

## Key Benchmarks & Observations

Recent evaluations of [[concepts/qwen-38-max|Qwen 3.8-Max]] Performance Benchmarks and [[concepts/agentic-task-evaluation|Agentic Task Evaluation]] highlight significant performance characteristics:

*   **High Throughput:** [[entities/qwen|Qwen 3.8-Max]] demonstrates excellent prefill speeds, optimized for rapid context ingestion.
*   **Performance Range:**
    *   Short prompts: ~640 tokens/second.
    *   Longer prompts: Speed scales/adjusts based on [[concepts/context-length|context length]] (see [[lab-notes/2026-09-25-Qwen-3.8-Max-Performance-Benchmarks-and-Agentic-Task-Eva|Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation]] for full data).
*   **Agentic Suitability:** The high prefill speed contributes to lower overall latency in agentic task evaluation scenarios, such as those tested in [[entities/lukes-dev-lab]].

## Related Concepts

*   Tokenization
*   Latency
*   [[concepts/performance-benchmarks|LLM Performance Metrics]]
*   Agentic Workflows

## References

*   [Qwen 3.8-Max Performance Benchmarks and Agentic Task Evaluation](https://www.youtube.com/watch?v=KZ6uQMQtJW4) ([[entities/lukes-dev-lab|Luke's Dev Lab]], 2026-09-25)
