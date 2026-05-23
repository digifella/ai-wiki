---
type: concept
domain: ai-agents
tags:
  - "ai-efficiency"
  - "inference-optimization"
  - "memory-constraints"
  - "moe"
  - "quantization"
  - "vram-optimization"
updated: 2026-05-23
group: reasoning-context-prompting
---
# Context efficiency

**Context efficiency** quantifies the ratio of effective model capacity and [[concepts/inference|inference]] quality relative to [[concepts/memory|memory]] footprint, [[concepts/compute|compute]] cycles, and [[concepts/context-window|context window]] utilization. High efficiency enables [[concepts/deployment|deployment]] of high-parameter [[concepts/large-language-model]] on resource-constrained [[concepts/hardware|hardware]] by minimizing waste through architectural sparsity, aggressive [[concepts/parameter-reduction|quantization]], and optimized [[concepts/memory-management|memory management]].

## Key Dimensions
- **Memory Utilization:** Maximizing [[concepts/code-size|model size]] per unit of [[concepts/vram|VRAM]] via [[concepts/model-compression]], weight-offloading, and paged [[concepts/attention-mechanisms|attention]].
- **[[concepts/feynmans-three-step-scientific-method|Compute]] Sparsity:** Reducing FLOPs per token by activating only necessary [[concepts/parameters|parameters]].
- **Latency Throughput:** Maintaining token generation [[concepts/speed|speed]] under tight memory bandwidth limits.

## Optimization Techniques
- **Sparse MoE Architectures:** Leveraging [[entities/mixture-of-experts]] to activate a small subset of parameters per inference step, drastically reducing active memory requirements while preserving total model capacity.
- **Hardware-Aware Inference:** Using engines like [[entities/llamacpp]] to implement efficient kernel selection, memory pooling, and dynamic [[concepts/precision-reduction|quantization]] tailored to legacy or edge hardware.
- **Context Compression:** Employing [[concepts/summarization|summarization]], retrieval-augmented patterns, and sliding [[entities/windows|windows]] to bound effective context size without degrading coherence.

## Evidence & Benchmarks
- [[lab-notes/2026-05-10-Achieving-Fast-35B-MoE-AI-Model-Performance-on-6GB-VRAM|Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp]]:
- Demonstrates extreme efficiency [[concepts/running|running]] [[concepts/qwen-36-35b-a3b|Qwen 3.6 35B-A3B]] on 6GB VRAM.
- Achieves fast inference on 8-year-old hardware by exploiting MoE sparsity and optimized [[concepts/quantisation|quantization]].
- Validates viability of sub-3B active parameter execution for 35B total [[concepts/parameter-models|parameter models]] in severe VRAM constraints.
- [[concepts/highlights|Highlights]] role of [[concepts/inference-engine|Llama.cpp]] in managing [[concepts/memory-overhead|memory overhead]] and maximizing throughput on [[concepts/limited-resources|limited resources]].
