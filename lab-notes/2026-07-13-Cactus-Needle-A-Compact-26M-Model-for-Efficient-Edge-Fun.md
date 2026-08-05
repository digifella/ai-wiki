---
title: "Cactus Needle: A Compact 26M Model for Efficient Edge Function Calling"
date: 2026-07-13
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Cactus Needle: A Compact 26M Model for Efficient Edge Function Calling
Generated: 2026-07-13 · API: Gemini 2.5 Flash · Modes: Summary

---

## Cactus Needle: A Compact 26M Model for Efficient Edge Function Calling
**Clip title:** Cactus Needle - The 26M Function Calling Model
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=tt9UJ0NiOzU

### Summary
The video introduces Cactus Needle, an innovative open-source model developed by Cactus Compute, specializing in highly efficient function calling. Its most striking feature is its exceptionally small size, boasting only 26 million parameters – a stark contrast to the billions typically found in large language models (LLMs). Distilled from Google's Gemini 3.1 Flash Lite, Needle is designed to perform agentic tasks rapidly and locally on consumer devices, including phones, watches, and smart home appliances.

Cactus Needle's efficiency stems from a novel architectural approach called a "Simple Attention Network." Unlike traditional transformer models, it intentionally omits Feed-Forward Network (FFN) layers, relying instead on pure attention and gating mechanisms. The developers argue that tool calling is fundamentally a task of retrieval and assembly – matching a natural language query to a tool name, extracting relevant arguments, and emitting a JSON response – which does not necessitate the complex reasoning capabilities of massive LLMs. By removing FFN parameters, which constitute a significant portion of standard transformer models, Needle achieves remarkable speeds of 6,000 tokens per second for prefill and 1,200 tokens per second for decode on consumer devices, addressing the memory bandwidth bottleneck prevalent in edge computing.

The model demonstrates strong performance in single-shot function calling, outperforming much larger models like FunctionGemma-270M and Qwen-0.6B in this specific domain. Its small footprint allows for local fine-tuning on a CPU, making it incredibly accessible for developers without requiring powerful GPUs. Cactus, as a startup, champions this on-device AI paradigm, offering solutions that route audio processing or agentic tasks locally for clear data and low latency, with a cloud fallback for noisier or more complex data. This hybrid approach optimizes both performance and cost.

In conclusion, Cactus Needle represents a significant step towards redefining tiny AI for consumer devices. It proposes a compelling argument against the "bigger is better" mindset for all AI applications, demonstrating that specialized, compact models can excel at specific tasks like function calling with remarkable efficiency and minimal resource consumption. This architectural innovation, combined with its open-source nature and ease of local deployment and fine-tuning, paves the way for a new era of intelligent, responsive, and privacy-preserving AI experiences directly on user devices, requiring near-zero inference costs and less reliance on centralized cloud infrastructure.

### Video Description & Links
#### Description
In this video, I look at Needle by the company Cactus. This is a 26 million parameter function calling model with a very unique architecture that is outperforming a lot of models much bigger than itself. 

Blog: https://cactuscompute.com/blog/needle
Demo:  https://huggingface.co/spaces/shreyask/needle-playground
Github: https://github.com/cactus-compute/needle 

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building LLM Agents? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

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
- https://cactuscompute.com/blog/needle
- https://huggingface.co/spaces/shreyask/needle-playground
- https://github.com/cactus-compute/needle
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials
