---
type: entity
tags:
  - "LLM"
  - "MoE"
  - "Quantization"
  - "Edge-Inference"
  - "Qwen"
  - "Strata"
  - "qwen3"
  - "sparse-moe"
aliases:
  - "Qwen3.8-Flash-Next"
summary: "Qwen3.8-Flash-Next is a 125-billion parameter sparse mixture-of-experts model optimized for inference on 12GB consumer GPUs via the Strata runtime."
updated: 2026-10-07
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-06T22:08:04+00:00" }
---
# Qwen3.8-Flash-Next

**[[concepts/qwen3-model|Qwen3]].8-Flash-Next** is a 125-billion parameter [[concepts/sparse-mixture-of-experts|Sparse Mixture-of-Experts]] (MoE) [[concepts/large-language-model|large language model]]. It is characterized by its ability to run efficiently on [[concepts/consumer-grade-hardware|consumer-grade hardware]] through advanced [[concepts/precision-reduction|quantization]] and [[concepts/parameter-activation|sparse activation]] techniques.

## Key Characteristics
- **Architecture**: Sparse MoE with 125B [[concepts/total-parameters|total parameters]].
- **Hardware Efficiency**: Capable of [[concepts/ai-inference|inference]] on 12GB [[concepts/vram|VRAM]] consumer GPUs (e.g., RTX 5070).
- **Runtime Support**: Optimized via the [[entities/strata]] [[concepts/open-source|open-source]] runtime.
- **Use Case**: [[entities/high-performance|High-performance]] LLM deployment on [[concepts/edge-devices|edge devices]] and low-resource environments.

## Technical Implementation
- Utilizes [[entities/strata]] to manage [[concepts/4gb-memory|memory footprint]] and expert routing.
- Leverages sparse activation to reduce [[concepts/hardware-specifications|compute requirements]] during inference.
- Enables deployment on hardware previously considered insufficient for models of this scale.

## References
- [[lab-notes/2026-10-07-Strata-Running-125B-Sparse-MoE-LLM-on-12GB-Consumer-GPUs|Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs]]
- [Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs](https://www.youtube.com/watch?v=4q_VlobZU0A)
