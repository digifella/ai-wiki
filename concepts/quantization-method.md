---
type: concept
domain: ai-agents
tags:
  - "quantization"
  - "model-compression"
  - "ptq"
  - "qat"
  - "bitwidth"
  - "model-efficiency"
aliases:
  - "Quantization Technique"
  - "Weight Compression"
  - "Precision Reduction"
  - "PTQ/QAT Methods"
summary: Quantization is a machine learning technique that reduces model size and computational requirements by mapping high-precision weights and activations to lower-precision formats like INT4 or NF4, typically implemented via
updated: 2026-07-12
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Quantization Method

**[[concepts/parameter-reduction|Quantization]]** is a technique used in [[concepts/machine-learning|machine learning]] to reduce the [[concepts/accuracy|precision]] of [[concepts/model-weights|model weights]] and activations, thereby decreasing [[concepts/code-size|model size]] and computational requirements while attempting to maintain performance. It involves mapping high-precision values (e.g., [[concepts/full-precision|FP32]]) to lower-precision representations (e.g., INT4, NF4).

## Core Concepts

- **Post-Training [[concepts/quantisation|Quantization]] (PTQ):** Quantizing a [[concepts/pre-trained-model|pre-trained model]] without further training. Fast but can suffer from accuracy degradation.
- **[[concepts/quantization-aware-training-qat|Quantization-Aware Training (QAT)]]:** Simulates quantization effects during the [[concepts/training-process|training process]], allowing the model to adapt and recover accuracy lost during [[concepts/precision-reduction|precision reduction]]. See [[lab-notes/2026-06-10-Google-QAT-vs.-Unsloth-QAT-Gemma-4-12B-Performance-Compa|Google QAT vs. Unsloth QAT: Gemma 4 12B Performance Comparison]] for specific comparisons.
- **Bitwidth:** Common formats include INT8, INT4, and NF4 (NormalFloat4). Lower bitwidths yield higher compression but greater risk of information loss.

## Common Implementations & Libraries

- **[[concepts/open-source-machine-learning|Hugging Face]] [[concepts/transformers|Transformers]] / Bitsandbytes:** Standard framework for PTQ and some QAT workflows in PyTorch.
- **[[concepts/google-qat|Google QAT]]:** Official [[concepts/quantity-aware-training-qat|quantization-aware training]] tools provided by [[concepts/google-search|Google]] for models like [[entities/gemma]]. Often produces baseline Q4_0 variants.
- **[[concepts/unsloth|Unsloth]]:** A library optimized for efficient [[concepts/fine-tuning|fine-tuning]] and quantization, offering custom quantization formats (e.g., UD-Q4_K_XL) that often outperform standard PTQ/QAT baselines in speed and [[concepts/memory-efficiency|memory efficiency]].

## Comparative Insights

Recent benchmarks highlight significant disparities between official vendor QAT and community-optimized QAT:

- **[[concepts/gemma-4-12b|Gemma 4 12B]] Case Study:**
    - **[[entities/google|Google]] QAT (Q4_0):** Serves as the standard reference quantization. Generally robust but may not maximize [[concepts/speed|inference speed]] on consumer hardware.
    - **[[concepts/unsloth-qat|Unsloth QAT]] (UD-Q4_K_XL):** Utilizes specialized kernel optimizations and data-aware quantization. Often demonstrates superior performance in terms of both latency and [[concepts/perplexity-ai|perplexity]] [[concepts/storing|retention]] compared to vanilla Q4_0.
    - See detailed analysis in [[lab-notes/2026-06-10-Google-QAT-vs.-Unsloth-QAT-Gemma-4-12B-Performance-Compa|Google QAT vs. Unsloth QAT: Gemma 4 12B Performance Comparison]].

## Related Concepts

- [[concepts/large-language-models]]
- [[concepts/model-efficiency]]
- [[concepts/inference-optimization]]
- [[entities/gemma]]
