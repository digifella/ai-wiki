---
type: entity
tags:
  - "ai-model"
  - "qwen"
  - "27b"
  - "llm"
  - "qwen3.8"
  - "hermes-agent"
  - "swift-1.5"
  - "benchmark"
  - "quantization"
aliases:
  - "Qwen3.8 27B"
  - "Swift 1.5 Qwen3.8-27B"
summary: Qwen3.8 27B is a large language model in the Qwen series that serves as the engine for the Hermes AI agentic framework and is available in optimized quantizations like Swift 1.5 for local deployment.
updated: 2026-10-06
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-05T20:45:42+00:00" }
---
# Qwen3.8 27B

**[[concepts/qwen3-model|Qwen3]].8 27B** is a [[concepts/large-language-model|large language model]] entity within the [[entities/qwen|Qwen]] series. It serves as the underlying [[concepts/engine|engine]] for various [[concepts/web-tools|agentic frameworks]] and demonstrations.

## Integrations & Demos

- **[[entities/hermes-ai-agent|Hermes]] [[concepts/agent-harness|Agent Framework]]**: The model is utilized in [[entities/hermes-agent]], an [[concepts/open-source|open-source]] [[concepts/ai-agentic-framework|AI agentic framework]] developed by [[entities/nous-research]].
- **/loop Feature**: Demonstrated in the context of [[concepts/automated-recurring-tasks|automated recurring tasks]].
	- The framework supports a `/loop` command for scheduling and executing recurring operations.
	- See [[lab-notes/2026-08-19-Hermes-Agents-New-loop-Feature-Automated-Recurring-Task|Hermes Agent's New /loop Feature: Automated Recurring Task Demo]] for a hands-on demonstration using Qwen3.8 27B.

## Performance & Quantization

- **Swift 1.5 Optimization**: The model is available in the [[concepts/quantization|quantized]] Swift 1.5 variant (GSQ-RCO IQ3_S), optimized for [[concepts/local-control|local deployment]] on hardware with limited [[concepts/vram|VRAM]] (e.g., 16GB setups).
- **[[concepts/benchmark-testing|Benchmarking]]**: Comprehensive performance evaluations for the Swift 1.5 Qwen3.8-27B-GSQ-RCO-[[concepts/gguf|GGUF]] model are documented in [[lab-notes/2026-10-06-Swift-1.5-Qwen3.8-27B-GSQ-RCO-IQ3_S-16GB-LLM-Performance|Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark]].
	- Tests cover [[concepts/ai-performance-evaluation|performance metrics]] on local [[concepts/ubuntu|Ubuntu]] server setups with [[concepts/rtx-2000-ada|RTX 2000 Ada]] GPUs.

## References

- [Hermes Agent's New /loop Feature: Automated Recurring Task Demo](https://www.youtube.com/watch?v=ZBDBOJQ9tLc)
- [Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark](https://www.youtube.com/watch?v=aNOUkWk9piU)
