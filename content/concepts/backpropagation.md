---
type: concept
domain: ai-agents
tags:
  - "neural-networks"
  - "machine-learning"
  - "gradient-descent"
  - "optimization"
  - "training-algorithms"
  - "deep-learning"
aliases:
  - "backward propagation"
  - "backprop"
summary: An algorithm for computing gradients in neural networks by propagating error signals backward through layers during the training process.
updated: 2026-05-23
group: ai-foundations-concepts
---
# Backpropagation

Backpropagation is the fundamental algorithm for [[concepts/training|training]] [[concepts/neural-networks|artificial neural networks]]. It computes gradients of a loss function with respect to each weight and bias in the network by efficiently applying the chain rule of calculus. This enables neural networks to learn from data by adjusting [[concepts/parameters|parameters]] in the direction that reduces prediction error.

## The Forward and Backward Pass

Training with backpropagation consists of two phases. During the [[concepts/inference|forward pass]], input data flows through the network layers sequentially, with each layer applying its learned transformations to produce a final prediction. The network's [[concepts/output|output]] is then compared to the ground truth using a loss function, which quantifies the prediction error. In the backward pass, error signals propagate in reverse through the network, with each layer computing how much its parameters contributed to the total loss. These gradient calculations [[concepts/flow|flow]] from the output layer back to the input layer.

## Computational Efficiency

The algorithm's efficiency comes from the chain rule of calculus applied systematically across layers. Rather than computing gradients independently for each parameter—which would be prohibitively expensive in large networks—backpropagation reuses intermediate calculations as it moves backward. This allows gradient computation to scale to networks with millions or billions of parameters. Once gradients are calculated, [[concepts/constrained-optimization|optimization algorithms]] such as stochastic gradient descent use these values to update the network's [[concepts/weights|weights]] and [[concepts/biases|biases]] incrementally across multiple training iterations.
## Source Notes
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)