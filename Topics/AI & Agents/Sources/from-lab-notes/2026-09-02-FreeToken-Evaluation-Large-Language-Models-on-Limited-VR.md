---
wiki-ingested: true
title: "FreeToken Evaluation: Large Language Models on Limited VRAM vs. Llama.cpp"
date: 2026-09-02
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-09-02-FreeToken-Evaluation-Large-Language-Models-on-Limited-VR"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## FreeToken Evaluation: Large Language Models on Limited VRAM vs. Llama.cpp
**Clip title:** FreeToken - first look and test
**Author / channel:** No place like localhost
**URL:** https://www.youtube.com/watch?v=vWGhX3aeFcg

### Summary
This video provides a practical evaluation of FreeToken, a new project claiming to run exceptionally [[concepts/large-language-models|large language models]] efficiently on systems with limited VRAM. The presenter aims to test these ambitious claims, comparing FreeToken's performance and VRAM utilization against an established solution, `llama.cpp`, using a 37GB model on a single 12GB GPU setup. The central question is whether FreeToken can truly deliver performant [[concepts/ai-inference|inference]] under VRAM constraints.

To establish a baseline, the presenter first attempts to run a 37GB [[entities/qwen|Qwen]] 3.6 model (Q8 quantized) on an RTX 4070 with 12GB of VRAM using `llama.cpp`. Although `llama.cpp` successfully loads the model by offloading the bulk of the data to system RAM, performance is significantly compromised. GPU utilization remains low, around 18-19%, resulting in a slow generation speed of approximately 23-24 tokens per second. This performance bottleneck is attributed to the CPU having to constantly transfer data between the slower system RAM and the GPU, leading to the GPU spending most of its time idle.

The video then transitions to FreeToken. The setup involves cloning the FreeToken repository, building it, and using `ft bench bw` to profile the hardware. A critical step is converting the [[entities/hugging-face|Hugging Face]] model into FreeToken's proprietary `.ftw` format using `ft checkpoint`. This conversion process, along with subsequent model serving, presented unexpected challenges, requiring the presenter to manually copy various JSON and Jinja template files from the original Hugging Face repository to address chat templating and tokenization issues. Once these hurdles were overcome, FreeToken served the same 37GB model, still restricted to the 12GB RTX 4070. Impressively, FreeToken achieved a generation speed of 35-36 tokens per second, marking a significant 50% improvement over `llama.cpp` in the same VRAM-constrained environment, with the GPU now operating at nearly 100% utilization.

In conclusion, FreeToken largely lives up to its claims, demonstrating the ability to host large Mixture-of-Experts (MoE) models on limited VRAM by effectively maximizing GPU utilization. While the initial setup can be complex due to manual file copying requirements, and it necessitates substantial system RAM as a backing store, the performance gains are notable. FreeToken also exposes an OpenAI-compatible API, successfully integrated and tested with OpenCode. However, the project currently has limitations, such as supporting only text-only input for multimodal checkpoints and primarily benefiting MoE models (dense models still require VRAM equal to their size). Despite these caveats, FreeToken provides a legitimate and faster alternative for running large models on [[concepts/consumer-grade-hardware|consumer-grade hardware]], though the presenter anticipates that `llama.cpp` will likely integrate similar optimizations in the near future given its rapid development.

### Video Description & Links
#### Description
FreeToken is a new project that is making some bold claims about running large or very large models on constrained hardware. Let's take a look at it, and see what we can do with only 12GB of VRAM at our disposal!

FreeToken: https://github.com/FlashML-org/FreeToken

00:00 Intro
00:21 llama-server baseline
03:34 FreeToken's turn
09:56 OpenCode
11:19 Verdict
12:05 Caveats
14:21 Outro

Thanks for watching!

#### URLs
- https://github.com/FlashML-org/FreeToken

## Related Concepts
- [[concepts/vision-language-model|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/24gb-gpu|VRAM]] — [Wikipedia](https://en.wikipedia.org/wiki/Video_random-access_memory)
- [[concepts/rtx-4060|GPU]] — [Wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit)
- [[concepts/local-ai-inference|Model Quantization]]
- [[concepts/memory-optimization|Memory Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Program_optimization)
- [[concepts/vision-language-model|FreeToken]]
- [[concepts/local-ai-inference|VRAM Optimization]]
- Mixture-of-Experts (MoE)
- [[concepts/context-length|Tokenization]]
- [[concepts/performance-analysis|Inference Performance]]
- [[concepts/consumer-grade-hardware|Consumer-Grade Hardware]]

## Related Entities
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- RTX 4070 — [Wikipedia](https://en.wikipedia.org/wiki/GeForce_RTX_40_series)
- OpenCode — [Wikipedia](https://en.wikipedia.org/wiki/OpenCode)
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- Discord — [Wikipedia](https://en.wikipedia.org/wiki/Discord)
- Patreon — [Wikipedia](https://en.wikipedia.org/wiki/Patreon)
- CUDA — [Wikipedia](https://en.wikipedia.org/wiki/CUDA)