---
type: concept
domain: ai-agents
tags:
  - "deep-learning"
  - "cnn"
  - "architecture"
  - "resnet"
  - "skip-connection"
  - "gradient-flow"
  - "skip-connections"
  - "feature-extraction"
aliases:
  - "Convolutional Neural Networks"
summary: Convolutional Neural Networks are deep learning models for grid-like data that use convolutional layers to learn spatial features, with ResNets addressing degradation in deep networks via skip connections.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-02T20:34:18+00:00" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Convolutional Neural Networks

**Convolutional [[concepts/ai-models|Neural Networks]] (CNNs)** are a class of [[concepts/neural-networks|deep learning models]] primarily designed for processing grid-like topology data, such as images. They utilize convolutional layers to automatically and adaptively learn spatial hierarchies of features.

## Core Components
- **Convolutional Layers:** Apply learnable filters (kernels) to input data to produce feature maps.
- **[[concepts/activation-functions|Activation Functions]]:** Non-linearities (e.g., ReLU) applied after convolution to introduce non-linearity.
- **Pooling Layers:** Downsample feature maps to reduce dimensionality and computational load (e.g., Max Pooling).
- **Fully Connected Layers:** Typically used at the end for classification or regression tasks.

## Evolution and Key Architectures

### Early CNNs
- **LeNet-5:** Pioneered the use of convolutional layers for [[entities/digit|digit]] recognition.
- **AlexNet:** Demonstrated the power of deep CNNs using GPUs and ReLU activations.
- **VGGNet:** Explored the impact of network depth using small (3x3) convolution filters.

### ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections
As networks became deeper, performance saturated and then degraded rapidly. This was not due to overfitting but to the **degradation problem**, where deeper networks become harder to optimize.

- **The Degradation Problem:** Increasing depth leads to higher training error, contrary to expectations.
- **[[concepts/shattered-gradients|Shattered Gradients]]:** In very [[concepts/deep-neural-networks|deep networks]], gradients can vanish or explode, making [[concepts/learning|learning]] unstable.
- **Residual Learning:** Introduced by [[lab-notes/2026-09-03-ResNets-Solving-Deep-CNN-Degradation-and-Shattered-Gradi|ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections]].
- **Skip Connections (Residual Blocks):** Allow gradients to [[concepts/flow|flow]] directly through the network, bypassing non-linear transformations. This enables the training of extremely deep networks (e.g., ResNet-152).
- **Identity Mapping:** The residual function $F(x) = H(x) - x$ is easier to learn than the direct mapping $H(x)$.

## Modern Developments
- **Inception Modules:** Use parallel convolutions of different sizes to capture multi-scale features.
- **Dense Connections:** Each layer receives inputs from all preceding layers (DenseNet).
- **[[concepts/attention-mechanism|Attention]] [[concepts/causes|Mechanisms]]:** Integrated into CNNs (e.g., [[concepts/computer-vision|Vision]] [[concepts/transformers|Transformers]]) to weigh the [[concepts/value|importance]] of different parts of the input.

## References
- [[entities/welch-labs|Welch Labs]]. [ResNets: Solving Deep CNN Degradation and Shattered Gradients with Skip Connections](https://www.youtube.com/watch?v=QgH9sr7G13Q).
