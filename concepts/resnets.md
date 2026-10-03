---
type: concept
domain: ai-agents
tags:
  - "deep-learning"
  - "cnn"
  - "architecture"
  - "optimization"
  - "skip-connections"
  - "residual-networks"
  - "degradation-problem"
  - "gradient-flow"
  - "cnn-architecture"
aliases:
  - "Residual Networks"
  - "ResNets"
summary: ResNets are neural network architectures that use skip connections to enable training of extremely deep models by addressing the degradation problem and mitigating shattered gradients.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-02T20:33:32+00:00" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# ResNets

**Residual Networks (ResNets)** are a class of neural network architectures that utilize **skip connections** (or residual connections) to enable the training of extremely deep models. They address the **degradation problem** where accuracy saturates and then degrades as network depth increases, a phenomenon distinct from overfitting.

## Core Concepts

*   **Residual Learning:** Instead of learning a direct underlying mapping $H(x)$, the layers learn a residual function $F(x) = H(x) - x$. The original mapping is recovered by $H(x) = F(x) + x$.
*   **Skip Connections:** Additive shortcuts that bypass one or more layers, allowing gradients to flow directly through the network during backpropagation.
*   **Solving Degradation:** Mitigates the issue where deeper networks perform worse than shallower ones due to optimization difficulties.
*   **[[concepts/shattered-gradients|Shattered Gradients]]:** Skip connections help maintain gradient magnitude and correlation across layers, preventing gradients from vanishing or exploding in very deep networks.

## Key Insights from Welch Labs

*   **Historical Context:** ResNets represent a pivotal moment in deep learning history, identified around 2015.
*   **The "Brilliant Hack":** The architecture is often described as an elegant solution to a fundamental optimization barrier in deep CNNs.
*   **Impact:** It enabled the training of networks with hundreds or thousands of layers, significantly advancing state-of-the-art performance in computer vision.

## Related Concepts

*   Vanishing Gradient Problem
*   Convolutional [[concepts/neural-networks|Neural Networks]]
*   Backpropagation
*   Identity Mapping

## References

*   [[entities/welch-labs|Welch Labs]]. [ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections](https://www.youtube.com/watch?v=QgH9sr7G13Q)
## Source Notes
- 2026-09-03: [[lab-notes/2026-09-03-ResNets-Solving-Deep-CNN-Degradation-and-Shattered-Gradi|ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections]]
