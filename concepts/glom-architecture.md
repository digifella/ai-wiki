---
type: concept
domain: history-anthropology
tags:
  - "architecture"
  - "MoE"
  - "LLM"
  - "GLoM"
  - "Colibri"
  - "optimization"
  - "consumer-hardware"
  - "glom-architecture"
  - "mixture-of-experts"
  - "sparse-attention"
aliases:
  - "Granular Language Model"
  - "GLoM"
summary: "GLoM is a sparse Mixture-of-Experts architecture that uses hierarchical attention to scale capacity while reducing computational costs, with the Colibri project enabling its deployment on consumer hardware."
updated: 2026-07-22
group: architecture-cities-heritage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-22" }
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

# GLoM Architecture

**GLoM** (Granular [[concepts/statistical-language-modeling|Language Model]]) is a sparse [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) architecture designed to scale model capacity without linearly increasing computational cost during inference. It utilizes a hierarchical, sparse [[concepts/self-attention|attention mechanism]] where only a small subset of experts is activated per token, enabling massive parameter counts (e.g., 744B) while maintaining [[concepts/efficient-task-processing|efficient processing]].

## Key Characteristics
- **[[concepts/parameter-activation|Sparse Activation]]:** Unlike [[concepts/dense-models|dense models]], GLoM activates only a fraction of its [[concepts/total-parameters|total parameters]] for each [[concepts/inference|forward pass]], reducing [[concepts/storage-bandwidth|memory bandwidth]] requirements.
- **Hierarchical Structure:** Employs a granular approach to [[concepts/attention-mechanisms|attention]], allowing for fine-grained feature extraction across different [[concepts/musical-scales|scales]].
- **Scalability:** Designed to support trillion-parameter scales while remaining feasible for deployment on constrained hardware through advanced [[concepts/parameter-reduction|quantization]] and routing optimizations.

## Recent Developments: Colibri Integration
The practical deployment of large-scale GLoM models has been significantly advanced by the **[[concepts/sufficient-parameters|Colibri]]** project, which focuses on optimizing MoE models for [[concepts/consumer-grade-hardware|consumer-grade hardware]].

- **Hardware Feasibility:** Colibri enables the execution of the 744-billion parameter [[concepts/qwen-36-35b-a3b|GLoM 5.2]] model on standard consumer laptops, a feat previously considered impossible due to [[concepts/ram-limitations|memory constraints]] [[lab-notes/2026-07-22-Colibri-Unlocking-744B-MoE-LLMs-for-Consumer-Grade-Lapto|Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops]].
- **[[concepts/open-source|Open-Source]] Initiative:** The project provides open-source tools and optimizations specifically tailored to unlock the potential of massive MoE architectures like GLoM on non-datacenter hardware.
- **Efficiency Gains:** By leveraging sparse activation patterns inherent to GLoM, Colibri reduces the [[concepts/4gb-memory|memory footprint]], allowing high-capacity models to run locally without external [[concepts/gpu-clusters|GPU clusters]].

## Related Concepts
- [[entities/mixture-of-experts]]
- [[concepts/sparse-attention-architecture|Sparse Attention]]
- [[concepts/llm-quantization]]
- [[concepts/edge-ai]]

## References
- [Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops](https://www.youtube.com/watch?v=Pb6P8GW7elI)
