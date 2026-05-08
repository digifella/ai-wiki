---
wiki-ingested: true
title: "Gemma 4-E2B LLM Fine-Tuning Custom Dataset  Unsloth Local Tutorial"
created: "2026-04-10 14:05"
date: 2026-04-10
source: lab-summary
provider:
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: open-systems-local-models
---
## Gemma 4-E2B LLM Fine-Tuning: Custom Dataset & Unsloth Local Tutorial
**Clip title:** Fine-Tune [[entities/gemma-4|Gemma-4]] on Your Own Dataset Locally: Step-by-Step
Tutorial
**Author / channel:** [[entities/fahd-mirza|Fahd Mirza]]
**URL:** https://www.youtube.com/watch?v=cHpB0PTRx5A

### Summary
This video provides a practical, step-by-step tutorial on how to fine-tune
Google's [[entities/gemma-4-e2b|Gemma 4-E2B]] [[concepts/large-language-model|large language model]] locally on a [[concepts/custom-dataset|custom dataset]],
leveraging the `unsloth` library for enhanced efficiency. The main topic
revolves around transforming a general-[[concepts/purpose|purpose]] base model with
surface-level knowledge into a [[concepts/specialized-expert|specialized expert]] for [[concepts/niche-domains|niche domains]]. The
presenter, [[entities/fahd-mirza|Fahd Mirza]], highlights that while [[concepts/base-models|base models]] like [[entities/gemma|Gemma]] 4-E2B
offer broad knowledge, they often provide generic or shallow answers when
confronted with highly specific or deep topics, thus necessitating
[[concepts/fine-tuning|fine-tuning]].

To address this, the video details the creation of a custom JSONL dataset
containing approximately 100 detailed question-and-answer pairs about the
ancient Gandhara civilization. This dataset covers various facets,
including the Kushan Empire, Silk Road trade, Buddhist [[concepts/philosophy|philosophy]] and [[concepts/art|art]],
ancient scripts, key rulers, and geographical significance. The JSONL
format is structured in a ChatGPT-like conversational [[concepts/style|style]], with a human
query followed by a rich, detailed GPT-generated response. The core idea is
to infuse the base model with deep, specialized knowledge that it initially
lacks.

The technical implementation involves setting up a Conda [[concepts/virtual-environment|virtual environment]] on an Ubuntu server equipped with an NVIDIA H100 GPU, though
the presenter emphasizes that significantly less [[concepts/vram|VRAM]] (or even a [[concepts/cpu|CPU]]) can
suffice for this small model due to the efficiency of the `unsloth`
library. The fine-tuning process utilizes LoRA (Low-Rank Adaptation) and
4-bit quantization, which drastically reduces [[concepts/memory|memory]] footprint and training
time. The `[SFTTrainer](https://en.wikipedia.org/wiki/SFTTrainer)` is configured with [[concepts/parameters|parameters]] like
`per_device_train_batch_size`, `gradient_accumulation_steps`,
`warmup_steps`, and `num_train_epochs`. Remarkably, the fine-tuning of the
[[entities/gemma|Gemma]] 4-[[concepts/e2b-model|E2B model]], which has a total of 5.1 billion [[concepts/parameters|parameters]] (but an
"effective core" of 2.3 billion for [[concepts/inference|inference]] [[concepts/compute|compute]] costs), was completed
in under three minutes, consuming just over 8GB of VRAM.

The effectiveness of the fine-tuning is demonstrated through a comparative
test. When asked a specific question about Kanishka I and his significance
to Gandhara and [[concepts/buddhism|Buddhism]], the base [[concepts/gemma-4-e2b|Gemma 4-E2B]] model provides a brief,
generic response. In stark [[concepts/contrast|contrast]], the fine-tuned model delivers an
extensive, well-structured, and highly detailed answer, showcasing a
profound understanding of the historical and cultural nuances of the
Gandhara civilization. This tangible improvement underscores the video's
main takeaway: fine-tuning with efficient tools like `unsloth` can
transform general LLMs into domain-specific experts quickly and affordably,
making advanced [[concepts/ai-customization|AI customization]] accessible to a broader audience.

## Related Concepts
- [[concepts/fine-tuning|LLM Fine-Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Fine-Tuning)
- [[concepts/local-model-fine-tuning|Local Model Fine-Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Model_Fine-Tuning)
- [[concepts/custom-dataset|Custom Dataset Training]] — [Wikipedia](https://en.wikipedia.org/wiki/Custom_Dataset_Training)
- LoRA (Low-Rank Adaptation) — [Wikipedia](https://en.wikipedia.org/wiki/LoRA_%28Low-Rank_Adaptation%29)
- [[concepts/4-bit-floating-point-fp4-training|4-bit Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/4-bit_Quantization)
- SFTTrainer — [Wikipedia](https://en.wikipedia.org/wiki/SFTTrainer)
- [JSONL Format](https://en.wikipedia.org/wiki/JSONL_Format) — [Wikipedia](https://en.wikipedia.org/wiki/JSONL_Format)
- [[concepts/virtual-environment|Conda Virtual Environment]] — [Wikipedia](https://en.wikipedia.org/wiki/Conda_Virtual_Environment)
- [Gradient Accumulation](https://en.wikipedia.org/wiki/Gradient_Accumulation) — [Wikipedia](https://en.wikipedia.org/wiki/Gradient_Accumulation)
- [[concepts/vram-optimization|VRAM Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/VRAM_Optimization)
- [[concepts/ai-workflow|AI Customization]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Customization)
- [[concepts/supervised-fine-tuning|Supervised Fine-Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Supervised_Fine-Tuning)
- [Model Training Parameters](https://en.wikipedia.org/wiki/Model_Training_Parameters) — [Wikipedia](https://en.wikipedia.org/wiki/Model_Training_Parameters)
- [[concepts/inference-optimization|Inference Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Inference_Optimization)
- [[concepts/model-quantization|Model Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Quantization)
- [[concepts/machine-learning|Machine Learning]] Efficiency — [Wikipedia](https://en.wikipedia.org/wiki/Machine_Learning_Efficiency)
- [[concepts/domain-specific-training|Domain-Specific Training]] — [Wikipedia](https://en.wikipedia.org/wiki/Domain-Specific_Training)
- [Hyperparameter Tuning](https://en.wikipedia.org/wiki/Hyperparameter_Tuning) — [Wikipedia](https://en.wikipedia.org/wiki/Hyperparameter_Tuning)
- [[concepts/knowledge-acquisition|Model Training]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Training)
