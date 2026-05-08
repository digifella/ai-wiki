---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "quantization"
  - "large-language-models"
  - "model-optimization"
  - "intel"
  - "qwen-30b"
aliases:
  - "AutoRound"
summary: The Autoround algorithm is used by Intel to optimize quantized versions of the Qwen 30B large language model for local execution.
updated: 2026-05-01
---
# Autoround Algorithm

Autoround is a [[concepts/parameter-reduction|quantization]] optimization algorithm developed by Intel for reducing the [[concepts/memory|memory]] footprint and computational requirements of [[concepts/large-language-model-llm|large language models]]. The algorithm works by optimizing the [[concepts/rounding|rounding]] of quantized model [[concepts/weights|weights]] to minimize [[concepts/accuracy|accuracy]] degradation during the quantization process. By [[concepts/fine-tuning|fine-tuning]] how weights are rounded when converting from floating-point to lower-precision integer representations, Autoround preserves model performance while achieving significant compression.

## Application to Qwen 30B

Intel has demonstrated the practical application of Autoround by optimizing quantized versions of the Qwen 30B [[concepts/large-language-model|large language model]]. This application shows how the algorithm enables models of considerable size to execute efficiently on resource-constrained [[concepts/hardware|hardware]], including personal computers and edge devices. The quantized Qwen 30B variant represents a case study in making [[concepts/frontier-models|state-of-the-art models]] more accessible for [[concepts/local-deployment|local deployment]].

## Technical Approach

Rather than applying uniform quantization [[concepts/parameters|parameters]] across a model, Autoround tailors the rounding strategy to individual weights based on their sensitivity to quantization. This targeted approach allows the algorithm to maintain model accuracy more effectively than standard post-[[concepts/training|training]] quantization methods. The optimization process balances the competing objectives of weight compression and [[concepts/inference|inference]] accuracy.
