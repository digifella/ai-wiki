---
type: concept
domain: ai-agents
tags:
  - "machine-learning"
  - "model-compression"
  - "quantization"
  - "neural-networks"
  - "training-methods"
  - "edge-ai"
aliases:
  - "QAT"
  - "Quantization-Aware Training"
  - "Fake Quantization Training"
summary: Quantization-Aware Training is a technique that simulates quantization errors during the training process to allow neural networks to adapt and maintain accuracy when deployed on hardware with limited precision.
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Quantization-Aware Training (QAT)

**[[concepts/google-qat|Quantization-Aware Training]] (QAT)** is a technique for optimizing [[concepts/neural-networks|neural networks]] for deployment on hardware with limited [[concepts/accuracy|precision]] (e.g., INT8, FP4) by simulating the effects of [[concepts/parameter-reduction|quantization]] during the [[concepts/training-process|training process]]. Unlike Post-Training [[concepts/precision-reduction|Quantization]] (PTQ), which quantizes [[concepts/weights|weights]] after training is complete, QAT inserts fake [[concepts/quantisation|quantization]] [[concepts/nodes|nodes]] into the model graph, allowing gradients to [[concepts/flow|flow]] through the quantization process and enabling the network to adapt to precision loss.

## Core Mechanism

- **[[concepts/simulation|Simulation]] of Quantization Error**: During forward passes, [[concepts/parameters|weights]] and activations are simulated to be quantized and de-quantized. This introduces noise that mimics inference-time conditions, allowing the model to learn representations robust to lower bit-widths.
- **Gradient Approximation**: Since standard quantization operations (like `round()`) are non-differentiable, straight-through estimators (STE) or custom gradients are used during [[concepts/backpropagation|backpropagation]] to ensure parameter [[concepts/software-updates|updates]] can still occur through the fake quantization nodes.
- **Calibration Integration**: Unlike PTQ which requires a separate calibration step on representative data, QAT integrates the statistical characteristics of the data distribution directly into the weight optimization [[concepts/loop|loop]].

## Practical Applications & Case Studies

- **Edge Device Optimization**: QAT is critical for deploying [[concepts/large-language-model-llm|large language models]] on resource-constrained [[concepts/edge-computing|edge devices]] where [[concepts/memory|memory]] [[concepts/network-speed|bandwidth]] and [[concepts/compute|compute]] power are limited. It allows for significant reduction in [[concepts/code-size|model size]] and latency without proportional drops in accuracy compared to naive PTQ.
- **[[entities/google-gemma|Google Gemma]] 12B Implementation**: Recent developments highlight QAT as a strategy for efficient [[concepts/local-ai|local AI]]. Specifically, [[concepts/google-search|Google]]'s [[entities/gemma-12b-ai|Gemma 12B]] model utilizes QAT variants to overcome [[concepts/hardware-limitations|hardware limitations]] on consumer-grade devices, enabling smoother [[concepts/inference|inference]] and reduced power consumption. For detailed analysis of this specific implementation, see [[lab-notes/2026-06-10-Google-Gemma-12B-QAT-Strategy-for-Efficient-Local-AI-on|Google Gemma 12B QAT: Strategy for Efficient Local AI on Edge Devices]].

## Advantages vs. Post-Training Quantization (PTQ)

- **Higher Accuracy [[concepts/storing|Retention]]**: QAT generally preserves more [[concepts/vllm|model performance]] than PTQ, especially at [[concepts/extreme-quantization|extreme quantization]] levels (e.g., INT4 or binary weights), because the network adapts its internal representations to compensate for precision loss.
- **Hardware Alignment**: By simulating hardware-specific [[concepts/rounding|rounding]] and clipping behaviors during training, QAT reduces the gap between simulated performance and actual deployment metrics on target accelerators (TPUs/GPUs).
- **Cost Consideration**: While QAT offers better accuracy, it is computationally more expensive than PTQ as it requires re-training or [[concepts/fine-tuning|fine-tuning]] the model with fake quantization nodes active.
