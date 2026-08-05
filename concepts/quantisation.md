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
updated: 2026-07-17
title: 4-bit quantisation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Quantisation

Quantisation is a technique in [[concepts/machine-learning|machine learning]] that reduces the [[concepts/precision|precision]] of numerical values used in [[concepts/neural-networks|neural networks]], typically by representing weights and activations with fewer bits than standard floating-point formats. Standard neural networks commonly use 32-bit [[concepts/floating-point-numbers|floating-point numbers]], but quantisation can reduce this to 8-bit, 4-bit, or even lower representations. This compression directly decreases the [[concepts/memory|memory footprint]] and computational requirements of models.

## 4-bit Quantisation

4-bit quantisation represents model parameters using only four bits per value, reducing memory usage by approximately 87% compared to 32-bit floating-point representations. This extreme compression enables deployment of large models on resource-constrained devices and significantly accelerates inference speed. However, the aggressive reduction in numerical precision introduces quantisation error, which can degrade model accuracy if not carefully managed through techniques such as calibration and fine-tuning.

## Trade-offs and Applications

The primary advantage of 4-bit quantisation is enabling the use of large language models and other compute-intensive architectures on consumer hardware with limited memory and processing power. The trade-off is that some loss in model performance is typically unavoidable, though recent methods have shown this loss can be minimised to acceptable levels for many applications. 4-bit quantisation has become increasingly practical for [[concepts/ai-agents|AI agents]] and other systems requiring efficient deployment without access to high-end accelerators.
