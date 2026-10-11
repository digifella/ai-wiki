---
type: concept
domain: ai-agents
tags:
  - "quantization"
  - "IQ3_S"
  - "LLM"
  - "Benchmark"
  - "Swift"
  - "Qwen"
  - "GSQ-RCO"
  - "GGUF"
  - "LocalLLM"
  - "iq3-s"
aliases:
  - "IQ3_S"
  - "IQ3S"
summary: "IQ3_S is a GGUF quantization format that uses mixed-precision techniques to reduce memory footprint while maintaining fidelity for running large language models on consumer hardware."
updated: 2026-10-06
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-05T20:13:45+00:00" }
group: model-efficiency-compression
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# IQ3_S quantization

**IQ3_S** is a [[concepts/precision-reduction|quantization]] format within the [[entities/gguf]] standard, designed to balance model fidelity with [[concepts/memory-efficiency|memory efficiency]]. It is particularly relevant for running [[concepts/demystifying-llms|large language models]] (LLMs) on [[concepts/consumer-hardware|consumer hardware]] with limited VRAM.

## Key Characteristics
- **[[concepts/4gb-memory|Memory Footprint]]:** Significantly reduces [[concepts/code-size|model size]] compared to FP16/BF16, enabling deployment on GPUs with constrained resources (e.g., 16GB VRAM).
- **[[concepts/accuracy|Precision]] Trade-off:** Uses mixed-precision techniques to maintain acceptable performance while lowering bit-width.
- **Compatibility:** Supported by [[concepts/inference-engines|inference engines]] such as [[entities/llamacpp]], [[entities/ollama]], and Swift ([[entities/ukisai|UkisAI]]).

## Recent Benchmarks & Performance Data

### Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark
A comprehensive evaluation of the UkisAI Swift-1.5-[[concepts/qwen3-model|Qwen3]].8-27B-GSQ-RCO-[[concepts/gguf|GGUF]] model was conducted to assess IQ3_S quantization viability on local hardware.

- **Source:** [[lab-notes/2026-10-06-Swift-1.5-Qwen3.8-27B-GSQ-RCO-IQ3_S-16GB-LLM-Performance|Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark]]
- **Hardware Setup:** [[concepts/ubuntu|Ubuntu]] server with [[concepts/rtx-2000-ada]] (16GB VRAM).
- **Model:** [[concepts/large-language-model|Qwen3.8-27B]] with GSQ-RCO quantization.
- **[[concepts/purpose|Objective]]:** Evaluate performance, latency, and quality [[concepts/storing|retention]] under strict [[concepts/ram-constraints|memory constraints]].
- **Key Findings:**
    - Demonstrates viable [[concepts/edge-deployment|local inference]] capabilities for 27B-class models on mid-range GPUs.
    - IQ3_S provides a critical balance between [[concepts/speed|speed]] and accuracy for this specific architecture.
    - Highlights the effectiveness of GSQ-RCO techniques in preserving model [[concepts/honesty|integrity]] during quantization.

## Related Concepts
- [[concepts/precision-reduction|Quantization]]
- [[entities/gguf]]
- [[concepts/llm]]
- [[concepts/vram]]
- [[concepts/inference]]

## References
- [Swift 1.5 Qwen3.8-27B GSQ-RCO IQ3_S 16GB LLM Performance Benchmark](https://www.youtube.com/watch?v=aNOUkWk9piU)
