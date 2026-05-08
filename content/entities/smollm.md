---
type: entity
tags:
  - "language-model"
  - "local-inference"
  - "hugging-face"
  - "vllm"
  - "3b-parameters"
aliases:
  - "SmolLM3-3B"
  - "SmolLM3"
summary: SmolLM3-3B is a language model from Hugging Face TB that can be served locally using vLLM.
updated: 2026-05-01
---
# SmolLM

SmolLM is a family of small language models developed by [[concepts/open-source-machine-learning|Hugging Face]]. The models are designed to be lightweight and efficient, enabling [[concepts/local-deployment|local deployment]] on resource-constrained systems without requiring cloud-based [[concepts/inference|inference]].

## SmolLM3-3B

SmolLM3-3B is a 3 billion parameter variant in the [[concepts/smollm-family|SmolLM family]]. It can be served locally using vLLM, an [[concepts/inference-engine|inference engine]] designed for efficient [[concepts/deployment|deployment]] of language models. This combination allows users to run the model on their own [[concepts/hardware|hardware]] while maintaining reasonable performance.

The model gained [[concepts/attention-mechanisms|attention]] in 2024 through detailed installation and usage guides, including video tutorials demonstrating local setup procedures. Its small size makes it practical for developers and researchers who need a functional [[concepts/statistical-language-modeling|language model]] without the computational overhead of larger alternatives.
