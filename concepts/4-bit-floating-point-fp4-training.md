---
type: concept
domain: entertainment-games
tags:
  - "concept"
  - "4-bit-quantization"
  - "fp4"
  - "large-language-models"
  - "llm-training"
aliases:
  - "FP4 training"
summary: The video discusses the evolution and challenges of training large language models using 4-bit quantization.
updated: 2026-07-11
group: sports-science-training-recovery
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=entertainment-games name=Entertainment & Games

# 4 Bit Floating Point Fp4 Training

4-bit floating point (FP4) training is a [[concepts/parameter-reduction|quantization]] technique that reduces [[concepts/memory|memory]] and computational requirements for training [[concepts/large-language-model-llm|large language models]] by representing parameters and activations using only 4 [[concepts/classical-bits|bits]] of [[concepts/accuracy|precision]] instead of standard 32-bit ([[concepts/full-precision|FP32]]) or 16-bit (FP16) formats. This extreme reduction in [[concepts/digit-precision|numerical precision]] decreases [[concepts/vram|GPU memory]] consumption and data transfer [[concepts/network-speed|bandwidth]], enabling the training of larger models on hardware with [[concepts/limited-resources|limited resources]].

## Technical Implementation

FP4 [[concepts/quantisation|quantization]] represents numbers using a 4-bit floating point format, typically allocating bits for sign, exponent, and mantissa. During training, [[concepts/weights|weights]] and activations are quantized to this [[concepts/reduced-precision|reduced precision]] while maintaining gradient computation. The approach often employs mixed-precision strategies, where certain operations critical to training stability may retain higher precision, while less sensitive computations use the reduced 4-bit format.

## Challenges and Limitations

Training with FP4 precision introduces numerical stability challenges. The reduced [[concepts/dynamic-range|dynamic range]] and precision can lead to gradient underflow, loss of information in activations, and slower convergence compared to higher-[[concepts/precision-training|precision training]]. Achieving convergence with FP4 requires careful hyperparameter tuning, appropriate loss [[concepts/computational-scaling|scaling]], and sometimes gradient accumulation techniques to maintain training stability.

## Practical Applications

[[concepts/4bit-quantisation|FP4 training]] remains primarily experimental for general [[concepts/large-language-model|large language model]] training, though it shows promise for specific [[concepts/scenarios|use cases]] and optimization scenarios. The technique represents an extreme point in the spectrum of [[concepts/google-qat|quantization-aware training]] methods, balancing the theoretical efficiency gains against the practical difficulties of maintaining model quality with such severe [[concepts/precision-reduction|precision reduction]].
