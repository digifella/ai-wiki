---
type: concept
domain: ai-agents
group: ai-foundations-concepts
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
updated: 2026-05-01
---
# Backpropagation

Backpropagation is the fundamental algorithm for [[concepts/training|training]] [[concepts/neural-networks|artificial neural networks]]. It computes gradients of a loss function with respect to each weight and bias in the network by efficiently applying the chain rule of calculus. During training, the algorithm operates in two distinct phases: a [[concepts/inference|forward pass]] where input data flows through network layers to produce predictions, and a backward pass where error signals propagate in reverse to calculate how each parameter contributed to the total loss.

## Mathematical Foundation

The backward pass systematically decomposes the gradient of the loss function through nested compositions of functions, working layer-by-layer from the output back to the input. At each layer, local gradients are computed and combined using the chain rule, producing gradients that indicate the direction and magnitude of adjustment needed for each parameter. This approach dramatically reduces [[concepts/complexity-classes|computational complexity]] compared to computing gradients independently for each parameter.

## Training Process

Once gradients are computed via backpropagation, an optimization algorithm such as stochastic gradient descent uses them to update network [[concepts/parameters|parameters]]. The process repeats iteratively across training examples, with the network gradually adjusting [[concepts/weights|weights]] to minimize the loss function. The efficiency of backpropagation—computing all gradients in time proportional to a single forward pass—made it practical to train deep networks and has remained the dominant training method since its widespread [[concepts/adoption|adoption]] in the 1980s.

## Source Notes
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)