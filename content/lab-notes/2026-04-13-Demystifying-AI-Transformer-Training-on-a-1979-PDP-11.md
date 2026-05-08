---
wiki-ingested: true
title: "Demystifying AI Transformer Training on a 1979 PDP-11"
created: "2026-04-13 11:45"
date: 2026-04-13
source: lab-summary
source_type: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
  - "enrich"
web-enrich: true
wiki-ready: true
domain: entertainment-games
group: sports-science-training-recovery
---
## Demystifying AI: Transformer Training on a 1979 PDP-11
**Clip title:** EXPOSED: The Dirty Little Secret of AI (On a 1979 PDP-11)
**Author / channel:** Dave's Garage
**URL:** https://www.youtube.com/watch?v=OUE3FSIk46g

### Summary
The video, presented by [[entities/dave|Dave]], aims to demyst demystify the [[concepts/training-process|training process]] of a [[concepts/neural-network|neural network]] by [[concepts/running|running]] a transformer on a vintage 1979 [[concepts/pdp-1144|PDP-11/44]] computer. Unlike modern cloud clusters with thousands of GPUs, this system operates with a single 6MHz [[concepts/cpu|CPU]] and a mere 64KB of [[concepts/ram|RAM]] (though later upgraded to 4MB). The core idea, Dave argues, is not magical or new; it's the scale of modern computational power that makes it appear so. By using this "big iron," the video intends to strip away the hype and showcase the essential machinery of a neural network learning.

The project, dubbed "ATTN/11 - Paper Tape Is All You Need," is a single-layer, single-head transformer written in raw PDP-11 [assembly language](https://en.wikipedia.org/wiki/Assembly_language) by Damian Bourré. Its modest goal is to learn how to reverse a sequence of eight digits (e.g., 12345678 to 87654321). This seemingly simple task is non-trivial because the model cannot merely memorize patterns; it must learn a *structural rule* based on position, not content. Dave explains the concept of self-[[concepts/attention|attention]] using an analogy of resolving ambiguous words like "bank" in a sentence ("Mary went down to the bank to get some cash"). [[concepts/transformers|Transformers]], he clarifies, dynamically weigh different parts of the input to resolve meaning, a capability that revolutionized [[concepts/natural-language-processing|natural language processing]] by allowing models to understand [[concepts/relationships|relationships]] between distant [[concepts/tokens|tokens]].

The training process is likened to "training a dog": the machine makes a guess, measures how wrong it was (loss), nudges a pile of numbers (weights) in the right direction, and repeats. This is backpropagation, the clever part of modern AI. The PDP-11 transformer's architecture is remarkably [[concepts/lean|lean]], featuring just 1 layer, 1 head, 16 model dimensions, 8 sequence length, a 10-[[entities/digit|digit]] vocabulary, and only 1,216 [[concepts/parameters|parameters]]. To achieve reasonable performance on the vintage hardware, the arithmetic was custom-tailored using [fixed-point representation](https://en.wikipedia.org/wiki/Fixed-point_representation). What took hours in Fortran, after being rewritten in assembly, managed to converge to 100% [[concepts/accuracy|accuracy]] in about 3.5 minutes on the [[concepts/pdp-1144|PDP-11/44]].

Ultimately, the video concludes that AI training, at its core, is a process of repeated error correction on adjustable numbers in [[concepts/memory|memory]]—a brute-force optimization computers have always excelled at. This demystifies the "magic" of AI, highlighting that the underlying [[concepts/mathematics|mathematics]] are frugal, and the intelligence emerges from countless, tiny [[concepts/adjustments|adjustments]]. The project underscores the importance of efficiency and creative engineering under [hardware constraints](https://en.wikipedia.org/wiki/Hardware_constraints), which are becoming increasingly relevant even in the modern [[concepts/ai-landscape|AI landscape]]. It reminds us that a computer is a machine with specific strengths and weaknesses, not a wish-granting device, and that understanding these fundamental realities can lead to profound insights and innovative solutions.

## Related Concepts
- [[concepts/neural-network|Neural network training]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_network_training)
- [[concepts/transformers|Transformer architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/Transformer_architecture)
- [[concepts/cpu|CPU]] — [Wikipedia](https://en.wikipedia.org/wiki/CPU)
- [[concepts/ram|RAM]] — [Wikipedia](https://en.wikipedia.org/wiki/RAM)
- [[concepts/self-attention|Self-attention]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-attention)
- [[concepts/backpropagation|Backpropagation]] — [Wikipedia](https://en.wikipedia.org/wiki/Backpropagation)
- [[concepts/natural-language-processing|Natural language processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Natural_language_processing)
- Assembly language — [Wikipedia](https://en.wikipedia.org/wiki/Assembly_language)
- Fixed-point representation — [Wikipedia](https://en.wikipedia.org/wiki/Fixed-point_representation)
- [Loss function](https://en.wikipedia.org/wiki/Loss_function) — [Wikipedia](https://en.wikipedia.org/wiki/Loss_function)
- [[concepts/weights|Weight optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Weight_optimization)
- [[concepts/model-parameters|Model parameters]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_parameters)
- [[concepts/transformer-models|Sequence modeling]] — [Wikipedia](https://en.wikipedia.org/wiki/Sequence_modeling)
- [[concepts/zero-errors|Error correction]] — [Wikipedia](https://en.wikipedia.org/wiki/Error_correction)
- Hardware constraints — [Wikipedia](https://en.wikipedia.org/wiki/Hardware_constraints)
- [[concepts/machine-learning-systems|Machine learning fundamentals]] — [Wikipedia](https://en.wikipedia.org/wiki/Machine_learning_fundamentals)
