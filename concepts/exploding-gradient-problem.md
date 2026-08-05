---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "gradient-descent"
  - "neural-networks"
  - "training-instability"
  - "backpropagation"
  - "deep-learning"
  - "optimization"
aliases:
  - "Gradient Explosion"
  - "Vanishing Gradient Problem"
summary: A training instability in neural networks where gradients grow exponentially during backpropagation, making weight updates diverge.
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Exploding Gradient Problem

The exploding [[concepts/vanishingexploding-gradient|gradient problem]] occurs during the training of [[concepts/deep-neural-networks|deep neural networks]] when gradients computed through [[concepts/backpropagation|backpropagation]] grow exponentially as they propagate backward through many layers. As gradients are multiplied together across layers during the chain rule computation, small multiplicative factors can compound into very large values. This [[concepts/causes|causes]] weight [[concepts/software-updates|updates]] to become extremely large, leading the network's parameters to diverge and training to become unstable or fail entirely.

The problem is particularly severe in recurrent [[concepts/neural-networks|neural networks]] (RNNs), where gradients [[concepts/flow|flow]] through the same weight matrices across many time steps, amplifying [[concepts/exponential-growth|exponential growth]]. Networks with poorly initialized [[concepts/weights|weights]] or unsuitable [[concepts/activation-functions|activation functions]] are more prone to experiencing exploding gradients, as are architectures with many sequential layers.

## Solutions and Mitigation

Several techniques have proven effective at managing exploding gradients. Gradient clipping, which caps gradients to a maximum norm during backpropagation, is a simple and widely-used approach. Weight initialization schemes that carefully scale initial parameters based on network architecture can reduce the likelihood of extreme gradient growth. Using activation functions like ReLU instead of sigmoid or tanh can also help, as they are less prone to gradient saturation.

[[concepts/architectural-improvements|Architectural improvements]] such as residual connections (skip connections) and layer normalization provide additional stabilization by creating alternative paths for gradient flow and normalizing activations across layers. In RNNs specifically, gated architectures like LSTMs and GRUs were designed partly to address both exploding and vanishing gradient problems through their internal gating mechanisms.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
