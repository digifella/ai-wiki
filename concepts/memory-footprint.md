---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "memory-footprint"
  - "quantization"
  - "llm"
  - "hardware"
  - "optimization"
  - "llm-optimization"
  - "hardware-constraints"
  - "model-deployment"
  - "bonsai-2-27b"
  - "q1"
  - "q2"
aliases:
  - "Model Memory Usage"
  - "VRAM Requirements"
  - "Inference Memory"
summary: Memory footprint defines the storage and execution requirements for programs and LLMs, where quantization techniques reduce VRAM needs to enable deployment on consumer hardware. Recent evaluations of Bonsai-2-27B demonstrate viable performance in Q1/Q2 formats on 16GB VRAM setups.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-25T20:31:42+00:00" }
group: platforms-runtimes-environments
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Memory Footprint

The total amount of computer [[concepts/memory|memory]] required to store and execute a program or [[concepts/data-structure|data structure]]. In the context of [[concepts/large-language-models|Large Language Models]] (LLMs), [[concepts/4gb-memory|memory footprint]] is the primary constraint for deployment, dictating whether a model can run on [[concepts/consumer-grade-hardware|consumer-grade hardware]] or requires specialized [[concepts/gpu-clusters|GPU clusters]].

## Key Components

*   **[[concepts/model-weights|Model Weights]]:** The [[concepts/total-parameters|static parameters]] of the model. Size is directly proportional to [[concepts/parameter-count|parameter count]] and [[concepts/accuracy|precision]] (e.g., FP16 vs. INT8).
*   **Activation Memory:** Temporary [[entities/storage|storage]] for intermediate calculations during [[concepts/ai-inference|inference]] or training. [[concepts/musical-scales|Scales]] with batch size and [[concepts/context-length|sequence length]].
*   **Optimizer States:** For training, memory required for gradients and optimizer states (e.g., AdamW) can significantly exceed weight storage.
*   **[[concepts/precision-reduction|Quantization]] Impact:** Aggressive quantization (e.g., Q1/Q2) drastically reduces weight footprint, enabling deployment on limited [[concepts/vram|VRAM]], though it may impact reasoning fidelity.

## Case Study: Bonsai-2-27B on Consumer Hardware

Recent evaluations of the [[concepts/llm|LLM]] **[[concepts/large-language-model|Bonsai-2-27B]]** (Ternary-Bonsai-2-27B-[[concepts/gguf|gguf]]) highlight the trade-offs between [[concepts/1-bit-quantization|extreme quantization]] and hardware constraints.

*   **Hardware Constraints:** Tested on a **16GB VRAM** local setup, demonstrating that 27B [[concepts/parameter-models|parameter models]] can be deployed on [[concepts/consumer-grade-gpus|consumer-grade GPUs]] via aggressive quantization.
*   **Quantization Comparison:** Benchmarked **Q1** (1-bit) vs. **Q2** (2-bit) formats. While Q1 minimizes footprint, Q2 often provides a better balance of [[concepts/memory-efficiency|memory efficiency]] and reasoning performance.
*   **[[concepts/ai-performance-evaluation|Performance Metrics]]:** The re-evaluation focuses on [[concepts/reasoning|reasoning]] capabilities and overall benchmark scores to determine viability for local [[concepts/model-inference|inference]].

For detailed [[concepts/benchmark-testing|benchmarking]] data and methodology, see [[lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform|Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning]].

## References

*   [[entities/lukes-dev-lab|Luke's Dev Lab]]. "[[concepts/bonsai-image|Bonsai]] 2 27B tested - 16GB [[concepts/local-ai-configuration|Local LLM setup]]." [Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning](https://www.youtube.com/watch?v=zLs2QG7lU7Q).
