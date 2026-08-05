---
wiki-ingested: true
title: "Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops"
date: 2026-07-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-22 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops
**Clip title:** This 744GB Model Shouldn't Fit on Your Laptop. It Does
**Author / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=Pb6P8GW7elI

### Summary
This video introduces Colibri, an innovative [[concepts/open-source|open-source]] project designed to enable the execution of massive [[entities/mixture-of-experts|Mixture-of-Experts]] (MoE) [[concepts/demystifying-llms|Large Language Models]] (LLMs), specifically the 744-billion parameter GLoM 5.2 model, on consumer-grade laptops with limited RAM (e.g., 25GB). The core challenge addressed is the "[[concepts/memory-bottleneck|memory wall]]," where large models typically demand extensive, expensive, and fast memory (like multiple H100 GPUs), much of which remains idle during [[concepts/inference|inference]]. Colibri circumvents this by cleverly managing memory and leveraging the [[concepts/parameter-activation|sparse activation]] nature of MoE models.

The foundational principle enabling Colibri is the Mixture-of-Experts (MoE) architecture. In models like GLoM 5.2, while the total [[concepts/parameter-count|parameter count]] is enormous, only a small, specific subset of "experts" (around 40 billion parameters) is activated for processing each input token. This means the vast majority of the model's [[concepts/parameters|weights]] are idle at any given moment. Colibri capitalizes on this by splitting the model into "hot" and "cold" components. The "hot" part, comprising essential elements like [[concepts/attention-mechanisms|attention mechanisms]], shared experts, and [[concepts/dense-vectors|embeddings]] (roughly 9.9GB), is kept resident in RAM. The "cold" part, consisting of the enormous expert bank (370GB after [[concepts/reduced-precision|4-bit quantization]], which is a lossless compression method for weights), resides on a fast NVMe SSD and is streamed into RAM only when needed. This tiered memory approach ensures that only actively required parts of the model occupy fast memory.

Beyond managing the [[concepts/model-weights|model weights]], Colibri also tackles the second "memory bomb": the Key-Value (KV) cache. This cache stores intermediate activations that grow with the [[concepts/session-context|conversation context]], traditionally demanding significant memory. GLoM 5.2 incorporates Multi-Latent Attention (MLA), compressing the [[concepts/prompt-caching|KV cache]] by approximately 57 times. Colibri further optimizes this by [[concepts/writing|writing]] the compressed KV cache to disk. While streaming data from disk introduces a speed bottleneck (resulting in 0.05-0.4 [[concepts/text-generation-speed|tokens per second]]), the project offers ways to claw back some performance, such as [[concepts/llm-inference-acceleration|speculative decoding]], which allows generating multiple tokens in one "expensive" pass. Furthermore, Colibri learns user-specific routing patterns, "pinning" frequently accessed experts into RAM, making the model faster the more it's used.

The significance of Colibri lies in its democratization of cutting-[[concepts/edge-ai|edge AI]]. Developed as a pure C project with [[concepts/zero-dependencies|zero dependencies]] (no BLAS, Python, or CUDA required), it demonstrates that frontier-class LLMs—which can outperform top [[concepts/model-customization|open-weight models]] and rival some closed-source counterparts in areas like coding—can be run locally on consumer hardware. This shifts the paradigm from needing to "rent" expensive datacenter [[concepts/computational-resources|compute]] to being able to "download and own" powerful [[concepts/ai-models|AI models]], fostering offline and free usage. Although current speeds are slow, Colibri represents a crucial step in making advanced AI accessible, showcasing that [[concepts/hardware-limitations|hardware limitations]] can be overcome through innovative algorithmic and [[concepts/memory-management|memory management]] techniques, representing a vital direction in [[concepts/ai-research|AI research]].

### Video Description & Links
#### Description
Colibri: Run [[entities/glm-52|GLM 5.2]] on 25GB of RAM on consumer hardware!

A 744B Mixture-of-Experts model activates only ~40B parameters per token — and only ~11 GB of those change from token to token (the routed experts).

LINKS:
https://github.com/JustVugg/colibri
https://z.ai/blog/glm-5.2
DwarfStar-4 Video: https://youtu.be/9gHcmhUDJfw
DSpark video: https://youtu.be/eFgknPFK-g0

My voice to text App: whryte.com
Website: https://engineerprompt.ai/
RAG Beyond Basics Course:
https://prompt-s-site.thinkific.com/courses/rag
Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

Let's Connect: 
🦾 Discord: https://discord.com/invite/t4eYQRUcXB
☕ Buy me a Coffee: https://ko-fi.com/promptengineering
|🔴 Patreon: https://www.patreon.com/PromptEngineering
💼[[concepts/consulting|Consulting]]: https://calendly.com/engineerprompt/consulting-call
📧 Business [[entities/contact|Contact]]: engineerprompt@gmail.com
Become Member: http://tinyurl.com/y5h28s6h

💻 Pre-configured localGPT VM: https://bit.ly/localGPT (use Code: PromptEngineering for 50% off).  

Signup for Newsletter, localgpt:
https://tally.so/r/3y9bb0

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://github.com/JustVugg/colibri
- https://z.ai/blog/glm-5.2
- https://youtu.be/9gHcmhUDJfw
- https://youtu.be/eFgknPFK-g0
- https://engineerprompt.ai/
- https://prompt-s-site.thinkific.com/courses/rag
- https://tally.so/r/3y9bb0
- https://discord.com/invite/t4eYQRUcXB
- https://ko-fi.com/promptengineering
- https://www.patreon.com/PromptEngineering
- https://calendly.com/engineerprompt/consulting-call
- http://tinyurl.com/y5h28s6h
- https://bit.ly/localGPT

## Related Concepts
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/storage-bandwidth|Memory Wall]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_Wall)
- [[concepts/sufficient-parameters|Parameter Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Parameter_Efficiency)
- [[concepts/storage-bandwidth|Consumer Hardware]] — [Wikipedia](https://en.wikipedia.org/wiki/Consumer_Hardware)
- [[concepts/model-quantization|Model Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Quantization)
- [[concepts/inference-optimization|Inference Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Inference_Optimization)
- [[concepts/qwen-36-35b-a3b|Sparse Activation]] — [Wikipedia](https://en.wikipedia.org/wiki/Sparse_Activation)
- [[concepts/glom-architecture|GLoM Architecture]] — [Wikipedia](https://en.wikipedia.org/wiki/GLoM_Architecture)
- [[concepts/ram-constraints|RAM Constraints]] — [Wikipedia](https://en.wikipedia.org/wiki/RAM_Constraints)
- Mixture-of-Experts (MoE) — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Experts_%28MoE%29)
- Tiered Memory Management — [Wikipedia](https://en.wikipedia.org/wiki/Tiered_Memory_Management)
- [[concepts/optimized-attention|KV Cache Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/KV_Cache_Optimization)
- Multi-Latent Attention (MLA) — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Latent_Attention_%28MLA%29)
- [[concepts/speculative-decoding|Speculative Decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_Decoding)
- [[concepts/mixture-of-experts|Expert Routing]] — [Wikipedia](https://en.wikipedia.org/wiki/Expert_Routing)
- Consumer Hardware Inference — [Wikipedia](https://en.wikipedia.org/wiki/Consumer_Hardware_Inference)
- [[concepts/offline-ai|Offline AI]] Deployment — [Wikipedia](https://en.wikipedia.org/wiki/Offline_AI_Deployment)
- NVMe SSD Streaming — [Wikipedia](https://en.wikipedia.org/wiki/NVMe_SSD_Streaming)
- [[concepts/video-compression|Lossless Compression]] — [Wikipedia](https://en.wikipedia.org/wiki/Lossless_Compression)
- [[concepts/algorithmic-optimization|Algorithmic Optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/Algorithmic_Optimization)
- Hardware-Agnostic Execution — [Wikipedia](https://en.wikipedia.org/wiki/Hardware-Agnostic_Execution)

## Related Entities
- [[entities/colibri|Colibri]] — [Wikipedia](https://en.wikipedia.org/wiki/Colibri)
- [[entities/glom-52|GLoM 5.2]] — [Wikipedia](https://en.wikipedia.org/wiki/GLoM_5.2)
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- JustVugg — [Wikipedia](https://en.wikipedia.org/wiki/JustVugg)
- z.ai — [Wikipedia](https://en.wikipedia.org/wiki/z.ai)
- DwarfStar-4 — [Wikipedia](https://en.wikipedia.org/wiki/DwarfStar-4)
- [[entities/dspark|DSpark]] — [Wikipedia](https://en.wikipedia.org/wiki/DSpark)
- whryte.com — [Wikipedia](https://en.wikipedia.org/wiki/whryte.com)
- engineerprompt.ai — [Wikipedia](https://en.wikipedia.org/wiki/engineerprompt.ai)
- [[concepts/nvidia-h100|H100 GPU]] — [Wikipedia](https://en.wikipedia.org/wiki/H100_GPU)
- NVMe — [Wikipedia](https://en.wikipedia.org/wiki/NVMe)