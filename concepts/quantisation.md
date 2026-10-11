---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "4-bit-quantisation"
  - "model-compression"
  - "model-efficiency"
  - "quantisation"
  - "neural-networks"
aliases:
  - "4-bit quantisation"
  - "quantization"
summary: This page discusses the concept of 4-bit quantisation.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
title: 4-bit quantisation
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Quantisation

Quantisation is a model optimization technique in machine learning that reduces the numerical precision of weights and activations within neural networks. While standard models typically utilize 32-bit floating-point numbers, quantisation maps these continuous values to lower-precision formats, such as 8-bit integers or 4-bit representations. This process involves mapping a continuous range of floating-point values to a discrete set of representable numbers, thereby decreasing the memory footprint and computational requirements of the model.

In the context of AI agents and large language models, 4-bit quantisation has become particularly significant for enabling deployment on resource-constrained hardware. By compressing model parameters into 4-bit integers, the technique drastically reduces the memory bandwidth required for inference. This compression allows for faster processing speeds and lower power consumption, which are critical for real-time agent interactions and edge computing scenarios where high-performance GPUs are unavailable.

The implementation of 4-bit quantisation generally follows two primary approaches: post-training quantisation and quantisation-aware training. Post-training quantisation converts a pre-trained high-precision model into a lower-precision format without further training, offering a quick path to optimization. Quantisation-aware training, conversely, simulates the effects of quantisation during the training phase, allowing the model to adapt its weights to minimize the precision loss, often resulting in higher accuracy retention compared to post-training methods.

Despite the aggressive reduction in precision, modern quantisation techniques aim to preserve model performance by carefully managing the distribution of weights and activations. Techniques such as per-channel quantisation and dynamic scaling are employed to mitigate the impact of outliers that can disproportionately affect accuracy. As a result, 4-bit quantised models can often achieve performance comparable to their 16-bit or 32-bit counterparts while requiring significantly fewer computational resources, making them viable for widespread adoption in AI agent architectures.
