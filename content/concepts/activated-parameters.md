---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "model-architecture"
  - "parameters"
  - "model-efficiency"
  - "mixture-of-experts"
  - "moe-architecture"
  - "inference-optimization"
  - "parameter-usage"
aliases:
  - "active-parameters"
summary: "Activated parameters are the subset of a model's total parameters utilized during inference for a specific input, a key feature of Mixture-of-Experts architectures."
updated: 2026-04-24
group: model-efficiency-compression
---
# Activated Parameters

Activated [[concepts/parameters|parameters]] refer to the subset of a model's [[concepts/total-parameters|total parameters]] that are actively utilized during [[concepts/inference|inference]] for a specific input, as opposed to the model's total [[concepts/parameter-count|parameter count]]. This concept is critical in **Mixture-of-Experts (MoE)** architectures, where only a fraction of parameters are dynamically activated per token, optimizing [[concepts/algorithm-efficiency|computational efficiency]] without sacrificing performance.

## Key Examples
- **[[entities/kimi-k2|Kimi K2]]** ([[entities/moonshot-ai|Moonshot AI]]'s MoE model) utilizes **32 billion activated parameters** out of a total 1 trillion parameters, achieving state-of-the-[[concepts/art|art]] performance in knowledge-intensive tasks.
- **[[entities/deepseek-v4|DeepSeek V4]]**: A next-gen, [[concepts/open-source|open-source]] suite of LLMs optimized for [[entities/high-performance|high performance]] and architectural efficiency.
- [[concepts/benchmark-testing|Benchmarking]] against [[concepts/agents|agents]] like [[entities/gemini]], [[entities/chatgpt]], [[entities/grok|Grok]] DeepSearch, and [[entities/manus|Manus]] confirmed its superior research capabilities.

## Related Concepts
- [[entities/mixture-of-experts]]
- [[entities/moonshot-ai]]

## References
- 2026 04 24 [[entities/deepseek-v4|DeepSeek V4]] Next Gen Open Source LLM Performance and Efficiency Analysis

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-13: [[lab-notes/2026-04-13-MiniMax-M27-Open-Source-LLM-Rivaling-Opus-46-with-Agent-Capabilities|MiniMax M27 Open Source LLM Rivaling Opus 46 with Agent Capabilities]] · [▶ source](https://www.youtube.com/watch?v=qUGypBKW_sQ)