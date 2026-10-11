---
wiki-ingested: true
title: "Cactus Needle: A Compact 26M Model for Efficient Edge Function Calling"
date: 2026-07-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: health-wellbeing
group: body-systems-recovery-function
type: "source-summary"
aliases:
  - "lab-notes/2026-07-13-Cactus-Needle-A-Compact-26M-Model-for-Efficient-Edge-Fun"
---
<!-- domain-nav -->
> domain-badge slug=health-wellbeing name=Health & Wellbeing

## Cactus Needle: A Compact 26M Model for Efficient Edge Function Calling
**Clip title:** Cactus Needle - The 26M [[concepts/tool-calling|Function Calling]] Model
**Author / channel:** [[concepts/text-to-speech-framework|Sam Witteveen]]
**URL:** https://www.youtube.com/watch?v=tt9UJ0NiOzU

### Summary
The video introduces Cactus Needle, an innovative [[concepts/open-source-model|open-source model]] developed by Cactus [[concepts/computational-resources|Compute]], specializing in highly efficient function calling. Its most striking feature is its exceptionally small size, boasting only 26 million parameters – a stark [[concepts/contrast|contrast]] to the billions typically found in [[concepts/demystifying-llms|large language models]] (LLMs). Distilled from [[concepts/google-search|Google]]'s [[concepts/gemini-30|Gemini 3]].1 [[entities/gemini-2-5-flash-lite|Flash Lite]], Needle is designed to perform [[concepts/agentic-tasks|agentic tasks]] rapidly and locally on consumer devices, including phones, watches, and smart home appliances.

Cactus Needle's efficiency stems from a novel architectural approach called a "Simple [[concepts/attention-mechanisms|Attention]] Network." Unlike traditional [[concepts/transformer-architectures|transformer models]], it intentionally omits Feed-Forward Network (FFN) layers, relying instead on pure attention and gating [[concepts/causes|mechanisms]]. The developers argue that tool calling is fundamentally a task of [[concepts/document-retrieval|retrieval]] and assembly – matching a [[concepts/natural-language-query|natural language query]] to a tool name, extracting relevant arguments, and emitting a JSON response – which does not necessitate the complex [[concepts/reasoning-capabilities|reasoning capabilities]] of massive LLMs. By removing FFN parameters, which constitute a significant portion of standard transformer models, Needle achieves remarkable speeds of 6,000 [[concepts/text-generation-speed|tokens per second]] for prefill and 1,200 tokens per second for decode on consumer devices, addressing the [[concepts/storage-bandwidth|memory bandwidth]] bottleneck prevalent in [[concepts/edge-deployment|edge computing]].

The model demonstrates strong performance in single-shot function calling, outperforming much larger models like FunctionGemma-270M and Qwen-0.6B in this specific domain. Its small footprint allows for local [[concepts/fine-tuning|fine-tuning]] on a CPU, making it incredibly accessible for developers without requiring powerful GPUs. Cactus, as a startup, champions this [[concepts/local-ai|on-device AI]] paradigm, offering solutions that route [[concepts/audio-processing|audio processing]] or agentic tasks locally for clear data and low latency, with a cloud fallback for noisier or more complex data. This [[concepts/hybrid-approach|hybrid approach]] optimizes both performance and cost.

In conclusion, Cactus Needle represents a significant step towards redefining tiny AI for consumer devices. It proposes a compelling argument against the "bigger is better" [[concepts/mindset|mindset]] for all [[concepts/ai-powered-applications|AI applications]], demonstrating that specialized, compact models can excel at specific tasks like function calling with remarkable efficiency and minimal resource consumption. This [[concepts/architectural-innovation|architectural innovation]], combined with its open-source nature and ease of [[concepts/local-control|local deployment]] and fine-tuning, paves the way for a new era of intelligent, responsive, and [[concepts/privacy-preserving-ai|privacy-preserving AI]] experiences directly on user devices, requiring near-zero inference costs and less reliance on centralized [[concepts/cloud-based-services|cloud infrastructure]].

### Video Description & Links
#### Description
In this video, I look at Needle by the company Cactus. This is a 26 million parameter function calling model with a very unique architecture that is outperforming a lot of models much bigger than itself. 

Demo:  https://huggingface.co/spaces/shreyask/needle-playground
Github: https://github.com/cactus-compute/needle 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:00 Cactus Needle
01:21 Blog
03:39 Baseline Transformer
04:00 Architecture
05:23 GitHub Repo
07:00 Demo

#### Tags
`Cactus Needle tags: Cactus Needle`, `Needle model`, `Cactus`, `function calling`, `tool calling`, `small language model`, `26M parameters`, `edge AI`, `on-device AI`, `open source AI`, `Hugging Face`, `simple attention network`, `no MLP`, `transformer architecture`, `Gemini 3.1 Flash Lite`, `distillation`, `JAX`, `Flax`, `Optax`, `quantization aware training`, `fine-tuning on CPU`, `Raspberry Pi AI`, `tiny models`, `specialized models`, `agentic AI`, `MiniCPM`, `Qwen`, `Granite`, `LFM`, `Cactus Compute`, `local AI`, `AI news 2026`

#### URLs
- https://huggingface.co/spaces/shreyask/needle-playground
- https://github.com/cactus-compute/needle
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/function-calling|Function Calling]]
- [[concepts/edge-computing|Edge Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Edge_computing)
- [[concepts/model-distillation|Model Distillation]] — [Wikipedia](https://en.wikipedia.org/wiki/Knowledge_distillation)
- [[concepts/small-language-models|Small Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Small_language_model)
- [[concepts/agentic-ai|Agentic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)
- [[concepts/open-source|Open Source Software]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
- [[concepts/sufficient-parameters|Parameter Efficiency]]
- [[concepts/inference-optimization|Inference Optimization]]
- [[concepts/transformer-layers|LLM Architecture]]
- [[concepts/cactus-compute-framework|Cactus Compute Framework]]
- [[concepts/on-device-ai|On-Device AI]]
- [[concepts/local-llm-fine-tuning|Local Fine-Tuning]]

## Related Entities
- [[entities/cactus-needle|Cactus Needle]]
- [[entities/sam-witteveen|Sam Witteveen]]
- [[entities/cactus-compute|Cactus Compute]]
- [[entities/google|Google]] — [Wikipedia](https://en.wikipedia.org/wiki/Google)
- [[entities/gemini-31-flash-lite|Gemini 3.1 Flash Lite]]
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- Twitter — [Wikipedia](https://en.wikipedia.org/wiki/X_%28social_network%29)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)