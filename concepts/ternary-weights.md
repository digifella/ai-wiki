---
type: concept
domain: ai-agents
tags:
  - "ternary-weights"
  - "quantization"
  - "model-compression"
  - "neural-networks"
  - "inference-optimization"
  - "sparse-matrices"
  - "hardware-efficiency"
  - "llm-benchmarking"
  - "swift-1.5"
  - "qwen3.8"
  - "gsq-rcq"
  - "iq3_s"
aliases:
  - "Ternary Quantization"
  - "3-Value Weights"
  - "Ternary Parameters"
summary: Ternary weights are a quantization technique restricting neural network parameters to three discrete values (-1, 0, +1) to reduce memory footprint and computational overhead.
updated: 2026-10-06
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-05T20:06:53+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Ternary Weights

**Ternary [[concepts/parameters|weights]]** refer to a [[concepts/quantization-method|quantization technique]] where [[concepts/neural-network|neural network]] parameters are restricted to three discrete values (typically -1, 0, +1), significantly reducing [[concepts/4gb-memory|memory footprint]] and computational overhead while attempting to preserve model accuracy.

## Key Concepts
- **[[concepts/parameter-reduction|Quantization]]**: Reducing [[concepts/accuracy|precision]] of [[concepts/weights|weights]] to save resources.
- **Sparsity**: The inclusion of [[concepts/concept-of-nothingness|zero]] values allows for sparse matrix optimizations.
- **Hardware Efficiency**: Lower [[concepts/network-speed|bandwidth]] requirements and faster [[concepts/inference|inference]] on compatible hardware.

## Recent Benchmarks & Comparisons

### Ternary Bonsai 27B vs. Qwen 27B
Recent ana

### Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark
Detailed evaluation of the [[concepts/llm-benchmarking|LLM benchmarking]] of the UkisAI Swift-1.5-[[concepts/qwen3-model|Qwen3]].8-27B-GSQ-RCO-[[concepts/gguf|GGUF]] model using IQ3_S [[concepts/precision-reduction|quantization]].

- **Setup**: Local [[concepts/ubuntu|Ubuntu]] server with [[concepts/rtx-2000-ada|RTX 2000 Ada]] (16GB [[concepts/vram|VRAM]]).
- **Focus**: Performance capabilities and [[concepts/model-efficiency|resource efficiency]] in a constrained local environment.
- **Analysis**: [[lab-notes/2026-10-06-Swift-1.5-Qwen3.8-27B-GSQ-RCO-IQ3_S-16GB-LLM-Performance|Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark]]
- **Source**: [Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark](https://www.youtube.com/watch?v=aNOUkWk9piU)
