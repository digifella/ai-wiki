---
type: concept
domain: ai-agents
tags:
  - "deep-learning"
  - "cnn"
  - "optimization"
  - "resnet"
  - "gradient-flow"
  - "shattered-gradients"
  - "vanishing-gradients"
  - "residual-connections"
  - "resnets"
aliases:
  - "Shattered Gradient Problem"
summary: Shattered Gradients is a phenomenon where gradient magnitudes decay exponentially during backpropagation in deep neural networks, hindering training stability and convergence.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-02T20:34:02+00:00" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Shattered Gradients

**Shattered Gradients** refers to the phenomenon where gradient magnitudes decay exponentially as they propagate backward through deep [[concepts/neural-networks|neural networks]], particularly in early architectures like deep Convolutional Neural Network prior to the widespread adoption of residual connections. This effect hinders training stability and convergence in very deep models.

## Key Characteristics
- **Exponential Decay**: Gradient norms shrink rapidly with depth, causing early layers to receive negligible update signals.
- **Vanishing Gradient Relation**: Often conflated with or exacerbated by the Vanishing Gradient Problem, but specifically highlights the fragmentation of gradient information across layers.
- **Impact**: Leads to poor learning in deep networks, necessitating architectural innovations to maintain gradient flow.

## Solutions and Mitigations
- **Residual Connections (Skip Connections)**: The primary solution introduced by [[concepts/resnets|ResNets]], which allow gradients to flow directly through the network, bypassing non-linear transformations.
- **Batch Normalization**: Helps stabilize layer inputs, reducing internal covariate shift and aiding gradient propagation.
- **Careful Initialization**: Techniques like Xavier Initialization or He Initialization help maintain variance in activations and gradients.

## Related Resources
- [[lab-notes/2026-09-03-ResNets-Solving-Deep-CNN-Degradation-and-Shattered-Gradi|ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections]]
- [ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections](https://www.youtube.com/watch?v=QgH9sr7G13Q)
