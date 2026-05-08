---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "model-compression"
  - "quantization"
  - "machine-learning"
  - "inference-optimization"
  - "file-format"
aliases:
  - "GGML format"
summary: A machine learning library and format for efficient model storage and inference, related to GGUF format.
updated: 2026-05-01
---
# GGML

GGML is a C library designed for machine [[concepts/learning|learning]] [[concepts/inference|inference]], with a primary focus on efficient model execution on consumer [[concepts/hardware|hardware]]. It provides a lightweight framework for [[concepts/running|running]] quantized [[concepts/neural-networks|neural networks]] with minimal computational overhead, making it particularly suited for [[concepts/deployment|deployment]] on CPUs and resource-constrained devices.

## Core Function and Design

The library emphasizes [[concepts/parameter-reduction|quantization]] and [[concepts/model-quantization|model compression]] techniques that allow [[concepts/large-language-model-llm|large language models]] to run on standard computers without requiring high-end GPUs. GGML abstracts away low-level optimization details while maintaining performance across different hardware architectures, including x86, ARM, and others.

## GGUF Format

GGML is closely associated with the GGUF (GGML Universal Format), a standardized file format for storing quantized models. GGUF superseded earlier GGML formats and provides a flexible, efficient way to package models with [[concepts/metadata|metadata]], [[concepts/weights|weights]], and configuration information in a single file. This format has become widely adopted in the [[concepts/open-source|open-source]] AI community for distributing quantized versions of popular language models.

## Practical Applications

GGML and GGUF have enabled accessible AI inference, allowing researchers and developers to run models locally without cloud infrastructure. Notable projects including [[entities/ollama|Ollama]] and [[concepts/inference-engine|llama.cpp]] have built upon GGML to create user-friendly interfaces for [[concepts/native-support|local model execution]], expanding the [[concepts/accessibility|accessibility]] of large language models beyond enterprise settings.
