---
type: entity
tags:
  - "language-model"
  - "model-compression"
  - "qwen"
  - "prismml"
  - "consumer-hardware"
  - "memory-efficiency"
  - "bonsai"
  - "llm"
  - "benchmark"
aliases:
  - "Bonsai 27B"
  - "Quine 3 27B"
  - "Qwen 27B compressed"
  - "PrismML Bonsai"
summary: "Bonsai 27B is a compressed variant of the Qwen 27B language model developed by PrismML to enable inference on consumer-grade hardware with approximately 10x reduced memory requirements."
updated: 2026-07-22
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
# Bonsai 27B

**[[concepts/bonsai-image|Bonsai]] 27B** is a highly compressed variant of the [[entities/qwen]] 27B [[concepts/statistical-language-modeling|language model]], developed by [[concepts/bonsai-8b-prismml|PrismML]]. It is designed to run on [[concepts/consumer-grade-hardware|consumer-grade hardware]] by utilizing advanced [[concepts/file-size-reduction|compression techniques]] that reduce [[concepts/memory|memory]] requirements by approximately 10x compared to the [[concepts/pre-trained-model|base model]].

## Key Characteristics
- **Base Model**: Derived from [[entities/qwen]] 3.6 27B (referred to as Quine 3 27B in some contexts).
- **[[concepts/memory-efficiency|Memory Efficiency]]**: Achieves ~10x memory reduction, enabling deployment on standard consumer devices.
- **[[concepts/developer|Developer]]**: [[concepts/prism-ml|PrismML]].
- **Purpose**: Democratizing access to powerful LLMs by lowering the hardware barrier for [[concepts/inference|inference]].

## Performance Benchmarks
- **Replacement Feasibility**: Evaluated against larger models like [[entities/qwen]] 35B to assess viability as a daily driver replacement.
- **Trade-offs**: Benchmarks highlight the balance between [[concepts/code-size|model size]], [[concepts/inference-optimization|inference speed]], and real-[[entities/earth|world]] applicability.
- **Detailed Analysis**: See [[lab-notes/2026-07-22-Bonsai-27B-vs.-Qwen-35B-LLM-Performance-and-Replacement|Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks]] for comprehensive data.

## References
- [Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks](https://www.youtube.com/watch?v=rBLWDJrXCp0)
- [[[concepts/bonsai|Bonsai]] 27B: [[concepts/qwen-llm|Qwen]] 27B LLM for Consumer Hardware with 10x
