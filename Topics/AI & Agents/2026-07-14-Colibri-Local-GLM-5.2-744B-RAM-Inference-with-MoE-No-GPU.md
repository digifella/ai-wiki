---
wiki-ingested: true
title: "Colibri: Local GLM-5.2 (744B) RAM Inference with MoE, No GPU"
date: 2026-07-14
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
aliases:
  - "lab-notes/2026-07-14-Colibri-Local-GLM-5.2-744B-RAM-Inference-with-MoE-No-GPU"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Colibri: Local GLM-5.2 (744B) RAM Inference with MoE, No GPU
**Clip title:** Colibrì: Running [[concepts/open-source-model|GLM-5.2]] (744B) Locally in RAM With No GPU
**[[entities/tasia-custode|Author]] / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=jxML3S5C-8Y

### Summary
The video demonstrates an impressive method for running the massive 744 billion parameter [[entities/glm-52|GLM 5.2]] [[concepts/statistical-language-modeling|language model]] on a single consumer-grade machine with only about 25GB of RAM. Traditionally, models of this scale require extensive data center resources and a large budget. The core [[concepts/innovation|innovation]] enabling this feat is a lightweight, [[concepts/pure-c-runtime|pure C runtime]] [[concepts/engine|engine]] called "[[entities/colibri|Colibri]]," which operates with [[concepts/concept-of-nothingness|zero]] dependencies and without [[concepts/python|Python]] at runtime.

Colibri achieves this by leveraging the [[entities/mixture-of-experts|Mixture of Experts]] (MoE) architecture of GLM 5.2. Unlike [[concepts/dense-models|dense models]] that load all parameters, MoE models only activate a small subset of "experts" for each input token. Colibri keeps the "dense model" ([[concepts/attention-mechanisms|attention]] layers, roughly 9.9GB in int4 [[concepts/parameter-reduction|quantization]]) resident in RAM. For every token, a router selects only 8 out of 256 experts per layer. If these selected experts are already cached in RAM, the [[concepts/inference|inference]] is fast. If not, they are streamed from a large (~370GB) file stored on disk. This strategic [[concepts/memory|memory]] management and streaming are the "trick" that allows the immense model to function on limited RAM. The video explicitly highlights that the disk read [[concepts/speed|speed]], rather than the CPU or GPU, becomes the primary bottleneck.

The demonstration shows the [[concepts/installation|setup process]], including downloading the 384GB quantized model and building the Colibri [[concepts/engine|engine]]. During live [[concepts/inference|inference]], the initial prompts are slower as Colibri "warms up" by [[concepts/caching|caching]] frequently used experts. As more interactions occur, the "hit rate" (proportion of experts found in RAM) significantly increases, leading to a noticeable acceleration in [[concepts/response-generation|response generation]]. Crucially, the [[concepts/monitoring-and-alerting|system monitoring]] tools confirm that the GPU remains entirely idle throughout the process, underscoring that the entire operation is CPU- and disk-bound.

In conclusion, this project showcases a highly promising approach to making extremely [[concepts/demystifying-llms|large language models]] more accessible. By intelligently managing [[concepts/memory|memory]] and exploiting the MoE architecture, Colibri allows GLM 5.2 to run on consumer hardware without dedicated GPUs or complex distributed systems. While the current Colibri code is custom-written for GLM 5.2's specific architecture, the underlying technique is general and holds significant potential for future advancements in [[concepts/local-control|local deployment]] of immense [[concepts/ai-models|AI models]].

### Video Description & Links
#### Description
This video installs Colibri and runs full GLM 5.2 locally without GPU.

#colibri 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

▶ https://github.com/JustVugg/colibri

All rights reserved © Fahd Mirza

#### URLs
- https://github.com/JustVugg/colibri

## Related Concepts
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/mixture-of-experts|Mixture of Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_experts)
- [[concepts/ram|Random Access Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Random-access_memory)
- [[concepts/pure-c-runtime|Pure C Runtime]]
- [[concepts/personal-computer-training|Consumer Hardware]]
- [[concepts/model-quantization|Model Quantization]]
- [[concepts/local-deployment|Local Deployment]]
- [[concepts/glm-52|GLM-5.2]] — [Wikipedia](https://en.wikipedia.org/wiki/GLM_%28AI%29)
- [[concepts/zero-dependencies|Zero Dependencies]]
- Expert [[concepts/caching|Caching]]
- Int4 [[concepts/parameter-reduction|Quantization]]
- [[concepts/memory-management|Memory Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_management)
- Dense [[concepts/model-layers|Model Layers]]

## Related Entities
- [[entities/colibri|Colibri]] — [Wikipedia](https://en.wikipedia.org/wiki/Violetear)
- [[entities/glm-52|GLM-5.2]] — [Wikipedia](https://en.wikipedia.org/wiki/GLM_%28AI%29)
- [[entities/fahd-mirza|Fahd Mirza]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- A6000 — [Wikipedia](https://en.wikipedia.org/wiki/Lenovo_A6000)
- [[entities/python|Python]]