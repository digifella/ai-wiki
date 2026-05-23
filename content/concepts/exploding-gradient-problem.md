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
updated: 2026-05-23
group: ai-foundations-concepts
---
# Exploding Gradient Problem

The exploding [[concepts/vanishingexploding-gradient|gradient problem]] occurs during the [[concepts/training|training]] of [[concepts/deep-neural-networks|deep neural networks]] when gradients computed through [[concepts/backpropagation|backpropagation]] grow exponentially as they propagate backward through many layers. This causes weight updates to become extremely large, leading the network's [[concepts/parameters|parameters]] to diverge and training to become unstable. The problem is particularly severe in recurrent [[concepts/neural-networks|neural networks]] (RNNs) and very deep feedforward networks, where gradients must be multiplied across many layers.

## Mechanism

During backpropagation, gradients are computed by taking the product of derivatives across all layers. When activation functions or weight matrices have derivatives greater than one, these products can grow exponentially with network depth. Once gradients exceed a certain magnitude, weight updates become so large that they overshoot optimal values, causing loss to increase rather than decrease and potentially leading to NaN (not a number) values.

## Solutions

Several practical techniques mitigate this problem. Gradient clipping caps gradient values [[concepts/assistive-technology|at]] a predefined threshold before applying updates, preventing them from becoming arbitrarily large. Careful weight initialization schemes, such as Xavier or He initialization, help keep gradients within reasonable ranges. Batch normalization normalizes layer inputs, which helps stabilize gradient [[concepts/flow|flow]]. Additionally, using activation functions like ReLU instead of sigmoid or tanh can reduce gradient shrinking in deep networks.
## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]