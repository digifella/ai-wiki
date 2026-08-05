---
type: concept
domain: ai-agents
tags:
  - "ternary-quantization"
  - "model-compression"
  - "neural-network-optimization"
  - "low-vram"
  - "sparse-computation"
aliases:
  - "Ternary Quantization"
  - "3-value Quantization"
  - "Ternary Weights"
summary: "Ternary quantization compresses neural network weights and activations to three discrete values (-1, 0, +1) to reduce memory footprint and latency while exploiting sparsity for efficient computation."
updated: 2026-07-22
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Ternary Quantization

**Ternary [[concepts/parameter-reduction|Quantization]]** is a [[concepts/compression-algorithm|model compression]] technique that reduces the [[concepts/accuracy|precision]] of [[concepts/base-model-weights|neural network weights]] and activations to three discrete values (typically -1, 0, +1). This approach significantly reduces [[concepts/4gb-memory|memory footprint]] and computational latency, enabling the deployment of large models on resource-constrained hardware.

## Core Principles
- **Weight Discretization:** Maps continuous [[concepts/parameters|weights]] to a ternary set, often using a [[concepts/computational-scaling|scaling]] factor to preserve magnitude information.
- **Sparsity Exploitation:** The [[concepts/concept-of-nothingness|zero]] component allows for sparse computation, skipping multiplications by zero.
- **Trade-off:** Balances [[concepts/low-vram-optimization|model size reduction]] against potential accuracy degradation compared to [[concepts/full-precision|full-precision]] or lower-bit quantization (e.g., INT8 Quantization).

## Performance Benchmarks & Feasibility
Recent evaluations highlight the viability of highly compressed models in replacing larger counterparts for specific workloads.

- **[[entities/bonsai-27b|Bonsai 27B]] vs. [[entities/qwen-35b|Qwen 35B]]:** Benchmarks indicate that smaller, potentially quantized models can serve as feasible replacements for larger daily [[concepts/causes|drivers]] in summary and general [[concepts/reasoning|reasoning]] tasks.
- **Efficiency Gains:** Focus is placed on the trade-offs between [[concepts/code-size|model size]] (e.g., ~3.5GB footprint), [[concepts/inference-optimization|inference speed]], and real-[[entities/earth|world]] applicability.
- **Detailed Analysis:** See [[lab-notes/2026-07-22-Bonsai-27B-vs.-Qwen-35B-LLM-Performance-and-Replacement|Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks]] for specific metric comparisons.

## Related Concepts
- [[concepts/model-efficiency]]
- Low-[[concepts/accuracy|Precision]] Computing
- [[concepts/large-language-model-optimization]]

## References
- [Bonsai 27B vs. Qwen 35B: LLM Performance and Replacement Feasibility Benchmarks](https://www.youtube.com/watch?v=rBLWDJrXCp0) ([[entities/codacus|Codacus]], 2026-07-22)
