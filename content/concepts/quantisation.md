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
updated: 2026-05-01
title: 4-bit quantisation
---
# Quantisation

Quantisation is a technique in machine [[concepts/learning|learning]] that reduces the precision of numerical values used in [[concepts/neural-networks|neural networks]], typically by representing [[concepts/weights|weights]] and activations with fewer bits than standard floating-point formats. In [[concepts/agentic-ai|AI agents]], quantisation enables models to run more efficiently on resource-constrained [[concepts/hardware|hardware]] by decreasing [[concepts/memory|memory]] requirements and computational overhead while maintaining reasonable performance levels.

## 4-bit Quantisation

4-bit quantisation represents [[concepts/active-parameters|model parameters]] using only 4 bits per value instead of the standard 32-bit floating-point representation. This reduction allows [[concepts/ai-agent|AI agent]] models to be compressed to approximately one-eighth their original size, making them feasible for [[concepts/deployment|deployment]] on edge devices and reducing [[concepts/inference|inference]] latency. The trade-off is a controlled loss of numerical precision, which research has shown can often be acceptable for many inference tasks without significant performance degradation.

## Practical Applications

In practice, 4-bit quantisation is particularly valuable for deploying [[concepts/large-language-model-llm|large language models]] and other [[concepts/neural-network|neural network]]-based [[concepts/agents|agents]] in production environments where memory and [[concepts/computational-resources|computational resources]] are limited. This includes mobile devices, embedded systems, and cost-sensitive cloud deployments. Quantisation techniques work best when combined with calibration methods that determine optimal bit ranges and [[concepts/computational-scaling|scaling]] factors for the specific model being compressed.
