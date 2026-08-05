---
type: concept
domain: ai-agents
tags:
  - "RAM"
  - "Memory"
  - "LLM"
  - "MoE"
  - "Colibri"
  - "Optimization"
  - "ram-constraints"
  - "llm-inference"
  - "quantization"
  - "mixture-of-experts"
aliases:
  - "RAM Limits"
  - "Memory Constraints"
  - "Inference Memory Limits"
summary: "RAM constraints define the physical limits of loading and running large models on consumer hardware, addressed through quantization, MoE architectures, and offloading strategies."
updated: 2026-07-22
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# RAM Constraints

**RAM Constraints** refer to the physical and architectural limitations of [[concepts/ram|Random Access Memory]] that dictate the feasibility of loading, running, and [[concepts/inference|inference]] of large-scale models, particularly in resource-constrained environments like consumer hardware.

## Core Challenges
- **[[concepts/code-size|Model Size]] vs. Available [[concepts/memory|Memory]]**: The total [[concepts/parameter-count|parameter count]], [[concepts/parameter-reduction|quantization]] state, and [[concepts/prompt-caching|KV cache]] requirements often exceed standard consumer VRAM/RAM capacities.
- **Paging and Swapping**: When RAM is exhausted, systems resort to disk swapping, causing catastrophic latency increases and [[concepts/fat-rendering|rendering]] real-time inference impossible.
- **[[concepts/network-speed|Bandwidth]] Bottlenecks**: [[concepts/storage-bandwidth|Memory bandwidth]] limits the speed at which [[concepts/parameters|weights]] can be fetched, often becoming the primary bottleneck for large models rather than [[concepts/computational-resources|compute]] power.

## Mitigation Strategies
- **[[concepts/precision-reduction|Quantization]]**: Reducing [[concepts/accuracy|precision]] (e.g., FP16 to INT4) to shrink [[concepts/model-size|model footprint]].
- **[[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE)**: Activating only a subset of parameters per token, reducing active memory load.
- **Offloading**: Distributing layers between RAM, [[concepts/vram|VRAM]], and disk [[entities/storage|storage]].

## Case Study: Colibri
Recent advancements demonstrate that massive models can run on consumer laptops through innovative architecture and optimization.

- **Project**: [[lab-notes/2026-07-22-Colibri-Unlocking-744B-MoE-LLMs-for-Consumer-Grade-Lapto|Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops]]
- **Key [[concepts/success|Achievement]]**: Successfully executes the 744-billion parameter [[concepts/qwen-36-35b-a3b|GLoM 5.2]] model on [[concepts/consumer-grade-hardware|consumer-grade hardware]].
- **Mechanism**: Leverages [[entities/mixture-of-experts]] to unlock massive scale without requiring enterprise-grade [[concepts/gpu-clusters|GPU clusters]].
- **Implication**: Challenges the traditional assumption that billion-[[concepts/parameter-models|parameter models]] require server-grade infrastructure.

## Related Concepts
- [[concepts/model-quantization]]
- [[entities/mixture-of-experts]]
- [[concepts/inference-optimization]]
- [[concepts/hardware-acceleration]]

## References
- [Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops](https://www.youtube.com/watch?v=Pb6P8GW7elI)
