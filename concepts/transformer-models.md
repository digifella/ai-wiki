---
type: concept
domain: ai-agents
tags:
  - "neural-networks"
  - "deep-learning"
  - "architecture"
  - "attention-mechanism"
  - "nlp"
  - "sequence-modeling"
  - "language-models"
  - "diffusion-models"
  - "generative-ai"
aliases:
  - "Transformer Architecture"
  - "Attention-Based Models"
  - "Sequence Modeling"
summary: Neural network architecture using self-attention mechanisms to process sequential data in parallel, foundational to modern large language models. Includes foundational concepts like bigram models for understanding token prediction. Recent insights extend sequence modeling principles to diffusion processes for image and video generation.
updated: 2026-07-15
group: open-systems-local-models
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sequence Modeling

[[concepts/transformer-architectures|Transformer models]] are a [[concepts/neural-network|neural network]] architecture that uses [[concepts/self-attention|self-attention]] [[concepts/causes|mechanisms]] to process sequential data. Unlike previous architectures such as RNNs and LSTMs that processed [[concepts/tokens|tokens]] sequentially, [[concepts/transformers|transformers]] can process entire sequences in parallel, making them significantly more efficient for training on [[entities/big-data|large datasets]]. The self-[[concepts/attention|attention]] mechanism allows the model to weigh the relevance of different tokens to each other regardless of their distance in the sequence, enabling the capture of long-range dependencies.

## Core Architecture

The transformer architecture consists of an encoder-decoder structure built from stacked layers of multi-head [[concepts/transformer-attention-mechanism|self-attention]].

## Extensions to Diffusion Models

Recent research highlights the application of sequence modeling principles beyond text to [[concepts/diffusion-models|diffusion models]] for image and [[concepts/video-generation|video generation]]. Insights from [[entities/sander-dieleman|Sander Dieleman]] at [[concepts/2026-04-29-google-deepmind|Google DeepMind]] illustrate how large-scale diffusion systems leverage similar architectural efficiencies:

- **[[concepts/parallel-processing|Parallel Processing]] in Diffusion:** Similar to transformers, advanced [[concepts/image-and-video-diffusion-models|diffusion models]] utilize parallel processing capabilities to handle high-dimensional data (images/video frames) efficiently, moving away from strictly sequential [[concepts/auto-regressive-models|autoregressive generation]].
- **Long-Range Dependencies in Visual Data:** [[concepts/attention-mechanisms|Attention mechanisms]] are adapted to capture spatial and temporal dependencies in visual sequences, allowing for coherent video generation and high-fidelity [[concepts/visual-rendering|image synthesis]].
- **Scalability:** The architectural patterns used in sequence modeling are critical for [[concepts/computational-scaling|scaling]] diffusion models to handle the complexity of multi-modal data generation.

See [[lab-notes/2026-07-15-Dielemans-DeepMind-Insights-Building-Large-Scale-Diffusi|Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video]] for detailed technical breakdowns.

## References

- [Dieleman's DeepMind Insights: Building Large-Scale Diffusion Models for Image and Video](https://www.youtube.com/watch?v=iBzlS0OHCTY)
