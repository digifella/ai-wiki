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
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Backpropagation

Backpropagation is the fundamental [[concepts/algorithm|algorithm]] for training [[concepts/neural-networks|artificial neural networks]]. It computes gradients of a loss function with [[concepts/respect|respect]] to each weight and bias in the network by efficiently applying the chain rule of calculus. This enables [[concepts/ai-models|neural networks]] to learn from data by adjusting parameters in the direction that reduces [[concepts/user-attention-prediction|prediction]] error.

## Forward and Backward Passes

Training with backpropagation consists of two distinct phases. During the [[concepts/inference|forward pass]], input data flows through the [[concepts/internet-layer|network layer]] by layer, with each neuron computing its output based on weighted inputs and an [[concepts/activation-functions|activation function]]. The network produces a final prediction, which is compared to the target output to calculate a loss value. During the backward pass, the error signal is propagated backward through the network. The algorithm computes how much each parameter contributed to the final loss by applying the chain rule recursively, determining the gradient of the loss with respect to every weight and bias.

## Gradient Descent Integration

Once gradients are computed, an optimization algorithm—typically gradient descent or a variant like Adam—uses these gradients to update network parameters. [[concepts/weights|Weights]] and [[concepts/biases|biases]] are adjusted by a small amount proportional to their gradients, moving toward lower loss values. This process repeats over many iterations through the [[concepts/training-data|training dataset]] until the network converges to a [[concepts/solution|solution]] that generalizes well to unseen data.

Backpropagation's efficiency relative to computing gradients by finite differences makes it practical for networks with millions of parameters. Its discovery and refinement in the 1980s was instrumental in enabling the deep [[concepts/learning|learning]] [[concepts/revolution|revolution]] that followed.
## Source Notes
- 2026-04-13: [[lab-notes/2026-04-13-Demystifying-AI-Transformer-Training-on-a-1979-PDP-11|Demystifying AI Transformer Training on a 1979 PDP 11]] · [▶ source](https://www.youtube.com/watch?v=OUE3FSIk46g)
