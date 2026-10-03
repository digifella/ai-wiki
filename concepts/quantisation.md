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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
title: 4-bit quantisation
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Quantisation

Quantisation is a model optimization technique in machine learning that reduces the numerical precision of weights and activations within neural networks. While standard models typically utilize 32-bit floating-point numbers, quantisation maps these values to lower-precision formats, such as 8-bit integers or 4-bit representations. This process involves mapping a continuous range of floating-point values to a discrete set of lower-bit values, effectively compressing the model data.

The primary benefit of this compression is a significant reduction in memory footprint and computational requirements. By storing and processing data in fewer bits, models require less bandwidth for transmission and less storage space for deployment. This efficiency allows large language models and other complex architectures to run on devices with limited hardware resources, such as mobile phones or edge computing devices, without requiring specialized cloud infrastructure.

4-bit quantisation specifically represents a more aggressive compression strategy compared to standard 8-bit quantisation. It reduces the bit-width further, potentially doubling the efficiency gains in terms of memory usage and inference speed. However, this increased compression often requires careful calibration to minimize the loss of accuracy, as the reduced precision can lead to greater information loss during the mapping process. Techniques such as per-channel quantisation or mixed-precision quantisation are often employed to mitigate these accuracy drops while maintaining the performance benefits.
