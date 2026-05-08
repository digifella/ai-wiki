---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "neural-networks"
  - "gradient-descent"
  - "deep-learning"
  - "backpropagation"
  - "optimization"
  - "machine-learning"
aliases:
  - "vanishing gradients"
  - "gradient vanishing"
summary: A training difficulty in deep neural networks where gradients become exponentially smaller during backpropagation through many layers.
updated: 2026-05-01
---
# Vanishing Gradient Problem

The [[concepts/exploding-gradient-problem|vanishing gradient problem]] occurs during the [[concepts/training|training]] of [[concepts/deep-neural-networks|deep neural networks]] when gradients computed via [[concepts/backpropagation|backpropagation]] become exponentially smaller as they propagate backward through many layers. Since weight updates are proportional to these gradients, layers near the input receive such minute gradient signals that their [[concepts/weights|weights]] update negligibly, effectively halting [[concepts/learning|learning]] in those layers. This makes it particularly difficult to train networks with dozens or hundreds of layers effectively.

## Root Cause

The problem arises from the chain rule of calculus applied across many layers. When backpropagating through activation functions like sigmoid or tanh, each layer multiplies the gradient by a local derivative typically between 0 and 1. Multiplying many small values together produces exponentially smaller results, causing early layers to receive vanishingly small gradient signals. This contrasts with the related exploding gradient problem, where gradients grow exponentially instead.

## Mitigation Strategies

Several techniques have been developed to address this issue. ReLU and similar activation functions with derivative 1 for positive inputs help maintain gradient magnitude. Architectural innovations like skip connections (as in ResNets) allow gradients to flow directly across layers. Careful weight initialization schemes, gradient clipping, and normalization techniques like batch normalization also reduce the severity of gradient vanishing. These solutions enabled training of much deeper networks than was previously practical.

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]