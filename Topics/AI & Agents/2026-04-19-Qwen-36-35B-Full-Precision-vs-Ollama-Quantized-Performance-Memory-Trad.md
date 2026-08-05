---
wiki-ingested: true
title: "Qwen 36-35B Full Precision vs Ollama Quantized Performance-Memory Trade-off"
created: "2026-04-19 05:02"
date: 2026-04-19
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
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Qwen 3.6-35B Full Precision vs. Ollama Quantized Performance-Memory Trade-off
**Clip title:** Comparing Full Precision vs Ollama Version of [[entities/qwen3|Qwen3]].6-35B-A3B Locally
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=RlGppgMDl9k

### Summary
This video provides a comparative analysis of the Qwen 3.6 35 Billion [[entities/mixture-of-experts|Mixture of Experts]] (MoE) model in two configurations: a full-precision version running locally via [[entities/vllm|VLLM]], and a quantized version available through Ollama (specifically, the qwen3.6:35b model using Q4_K_M quantization). The primary objective is to evaluate whether the memory savings achieved through quantization lead to a significant loss in the model's quality or performance across various tasks. The presenter uses an Ubuntu server equipped with an NVIDIA H100 GPU boasting 80GB of [[concepts/vram|VRAM]] for the testing environment.

Key points of the comparison revolved around memory footprint and task performance. The full-precision VLLM version of Qwen 3.6 35B A3B requires approximately 65-68GB of VRAM. In [[concepts/contrast|contrast]], the quantized Ollama version is significantly smaller, around 23GB, achieving roughly a 75% reduction in [[concepts/memory-management|memory usage]]. This reduction is attributed to Q4_K_M quantization, which stores [[concepts/model-weights|model weights]] as 4-bit integers instead of [[concepts/16-bit-depth|16-bit]] floating-point numbers, utilizing K-means clustering for intelligent weight grouping and 'M' to denote a medium balance for quality [[concepts/preservation|preservation]].

Three distinct tests were conducted: C [[concepts/code-generation|code generation]] for a Minesweeper game, multi-lingual announcement generation across over 80 languages, and satellite imagery analysis. In the C code generation task, the full-precision model produced a perfectly functional Minesweeper game with all core mechanics, including recursive flood-fill, working flawlessly. The quantized Ollama version, however, despite compiling successfully with minor warnings, exhibited a significant logical gap: its recursive flood-fill algorithm for zero-count cells failed to trigger, revealing only single clicked cells. For the multi-lingual test, both models performed impressively, generating announcements in numerous languages. However, the full-precision model's output felt more culturally native and natural, while the quantized version showed minor self-corrected errors, indicating subtle linguistic inaccuracies. Lastly, in the satellite imagery analysis, the full-precision model correctly identified a [[entities/meta-ai|Meta AI]] watermark and accurately interpreted an area measurement, demonstrating superior image text recognition. The Ollama version, unfortunately, failed to recognize the watermark and hallucinated "Greek-like characters" when attempting to read the white text.

In conclusion, the video highlights a consistent and measurable trade-off between model size/memory consumption and performance [[concepts/accuracy|accuracy]]. For production [[concepts/use-cases|use cases]] demanding the highest level of accuracy, completeness, and reliability in [[concepts/complex-tasks|complex tasks]] like sophisticated code generation or nuanced image interpretation, the full-precision Qwen 3.6 model is demonstrably superior, provided the necessary hardware resources are available. However, for users with consumer-grade GPUs or limited VRAM, the quantized Ollama version offers a compelling alternative, providing roughly 85% of the quality at a fraction of the memory cost. While the quality gap is not a "dramatic collapse," it is a consistent decline that becomes noticeable in tasks requiring deep understanding and precise execution, underscoring that while quantization makes powerful models more accessible, it does come with performance compromises.

## Related Concepts
- [[concepts/nvidia-h100-gpus|Mixture of Experts (MoE)]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts_%28MoE%29)
- [[concepts/vllm|VLLM]] — [Wikipedia](https://en.wikipedia.org/wiki/VLLM)
- [[concepts/q4-k-m|Q4_K_M]] — [Wikipedia](https://en.wikipedia.org/wiki/Q4_K_M)
- [[concepts/nvidia-h100|NVIDIA H100]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_H100)
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[concepts/terminal-command-execution|Ollama]] — [Wikipedia](https://en.wikipedia.org/wiki/Ollama)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
