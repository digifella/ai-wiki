---
wiki-ingested: true
domain: undecided
group: needs-review
---
<https://www.youtube.com/watch?v=-cRedoYETzQ>
Julia Turc

The video discusses the evolution and challenges of [[concepts/training|training]] large language [[concepts/models|models]] (LLMs) with [[concepts/reduced-precision|reduced precision]], particularly focusing on the shift towards 4-bit floating-point (FP4) training.
**Cost of Training LLMs:** Training LLMs is extremely expensive. A [[entities/stanford|Stanford]] report estimated that training [[entities/gemini-ai|Google's Gemini]] Ultra in 2023 cost around $191 million, while [[concepts/gpt-4|GPT-4]]'s training in the same year was estimated at $78 million, though [[entities/sam-altman|Sam Altman]] claimed it was even more. More recently, in 2025, [[entities/anthropic|Anthropic]]'s CEO stated that training [[entities/claude-4|Claude]] 3.7 cost "a few tens of millions of dollars," estimated at around $50 million. Chinese research [[entities/labs|labs]] like [[entities/deepseek|DeepSeek]] and Qwen have managed to reduce training costs by a factor of 10, with [[entities/deepseek-v3|DeepSeek-V3]] (2024) costing $5.6 million and Qwen 2.5-Max (2025) costing $12 million. Much of DeepSeek-V3's efficiency comes from pushing heavy matrix multiplications down to FP8, which reduces [[concepts/memory|memory]] requirements by 40% and increases training speed by 1.8x.
**Timeline of Training Precision:** Historically, the number of bits used for training has steadily decreased:

* **1990s:** [[concepts/deep-learning-models|Deep learning models]] started with FP32 precision.
* **2018:** Google Brain researchers unlocked [[concepts/16-bit-depth|16-bit]] training with their bfloat16 format, a modification to the IEEE 754 standard suited for deep learning.
* **2024:** DeepSeek-V3 became the first high-quality LLM to successfully implement 8-bit training in production. This trend was also adopted by [[entities/meta-ai|Meta]]'s [[entities/llama-4|Llama 4]] model.
* **2025:** Current research is pushing the limits to 4-bit precision.

**Mixed Precision Training:** In practice, training LLMs involves a [[concepts/solution|mixture]] of precisions within the same model because different components have varying tolerances to noise. For example, DeepSeek-V3 uses a mixed-precision framework that includes FP8, FP16, and even FP32 operations. Similarly, the "FP4 All the Way" paper, which demonstrates fully quantized training of LLMs, also employs a mixed-precision strategy, primarily targeting 4-bit precision but not exclusively. Operations like embedding text tokens, calculating [[concepts/attention|attention]] scores, and applying softmax still require [[concepts/full-precision|full precision]]. However, matrix multiplications are more resilient to precision loss and account for roughly 90% of the computational cost in large LLMs.
**Enablers of Fully-Quantized Training:** Fully quantized training is enabled by advancements in three key areas:

1. **[[concepts/hardware|Hardware]] Support:** [[entities/nvidia|NVIDIA]] TensorCores are specialized processing units designed for mixed-precision training. They perform matrix multiply-accumulate operations, taking lower-precision inputs (e.g., FP16, INT8, INT4, FP8, FP6, FP4) and accumulating results in higher precision (e.g., FP32).
	**Volta (2017):** Introduced FP32, FP64, and FP16 support. **Turing (2018):** Added INT8, INT4, and INT1 support. **Ampere (2020):** Introduced BF16 and TF32. **Hopper (2022):** Introduced native support for FP8. **Blackwell (2024/2025):** Introduces native support for FP6 and FP4. NVIDIA's H100 GPU (Hopper [[concepts/architecture|architecture]]) features Streaming Multiprocessors (SMs), each containing [[concepts/cuda|CUDA]] Cores (for general [[concepts/purpose|purpose]]) and Tensor Cores (for matrix multiplications). The weights are stored in global memory in FP32, read by CUDA Cores, quantized to FP4, and then moved to shared memory for Tensor Core operations.
	
2. **Numeric Formats:** New, custom low-precision floating-point formats are designed specifically for quantization values.
	**Microscaling (MX) Data Formats:** Proposed by major hardware companies, these formats combine a per-block [[concepts/scaling|scaling]] factor with narrow floating-point and integer types. Unlike traditional IEEE 754 formats where each value has its own sign, exponent, and mantissa, microscaling formats like MXFP4 encapsulate multiple values within a block, sharing a single scale. For example, MXFP4 stores 32 4-bit values and one 8-bit scale. NVIDIA's NVFP4 format is a specific example, optimizing for certain exponent and mantissa configurations.
	
3. **Modeling Tricks:** These techniques address challenges like bias and non-differentiability in quantized training.
	**Stochastic [[concepts/rounding|Rounding]] (SR):** This technique addresses bias introduced by rounding operations, especially when gradients are consistently rounded down. Instead of deterministic rounding, SR randomly rounds up or down, which on average helps to cancel out the bias and improve convergence. **NormalFloat 4-bit Type (NF4):** Introduced in the QLoRA paper, NF4 is a 4-bit format with 16 hand-picked values that are theoretically optimal for quantizing normally distributed weights. This non-uniform [[concepts/distribution|distribution]] allocates more values around [[concepts/zero|zero]], where most [[concepts/neural-network|neural network]] weights tend to be concentrated.
	

**Fully Quantized Training (FQT) vs. Quantization-Aware Training (QAT):**

* **QAT:** Performs the backward pass in full precision but makes the forward pass "aware" of quantization by quantizing and de-quantizing weights and activations. This exposes the model to precision loss during training, but the operands themselves never leave the full-precision format in memory, which means Tensor Cores perform multiplications in high precision, not low.
* **FQT:** Aims to perform all matrix multiplications within the TensorCores in FP4. This requires quantizing weights, activations, and even gradients to FP4. The master copy of weights is still maintained in FP32 in global memory, but intermediate computations by Tensor Cores occur in FP4. This significantly reduces memory pressure and speeds up training.

**Current Status and Future:** While fully quantized training in FP4 is technically possible and offers significant speedups due to reduced memory bandwidth, fully trained checkpoints are not yet widely available. The "FP4 All the Way" paper demonstrated that training a 7-billion-parameter Llama2 model in FP4 using [[entities/intel|Intel]] Gaudi2 accelerators achieved downstream task performance comparable to a standard BF16 baseline. The authors admit there's a small gap in training loss that can be closed with a few steps of quantization-aware [[concepts/fine-tuning|fine-tuning]]. The widespread [[concepts/adoption|adoption]] of Blackwell chips, which offer native FP4 support, [[entities/will|will]] likely accelerate the industry's shift towards FP4 as a standard.

## Related Concepts
- [[concepts/quantisation|4-bit quantisation]] — [Wikipedia](https://en.wikipedia.org/wiki/4-bit_quantisation)
- [[concepts/floating-point-numbers|floating-point numbers]] — [Wikipedia](https://en.wikipedia.org/wiki/floating-point_numbers)
- [[concepts/precision-training|precision training]] — [Wikipedia](https://en.wikipedia.org/wiki/precision_training)
- [[concepts/large-language-models|large language models]] — [Wikipedia](https://en.wikipedia.org/wiki/large_language_models)

## Related Entities
- [[entities/julia-turc|Julia Turc]] — [Wikipedia](https://en.wikipedia.org/wiki/Julia_Turc)
- [[entities/qwen|Qwen]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen)
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemini-ultra|Gemini Ultra]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_Ultra)
- [[entities/gpt-4|GPT-4]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-4)
- [[entities/claude-37|Claude 3.7]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_3.7)