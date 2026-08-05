---
title: "Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops"
date: 2026-07-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops
Generated: 2026-07-22 · API: Gemini 2.5 Flash · Modes: Summary

---

## Colibri: Unlocking 744B MoE LLMs for Consumer-Grade Laptops
**Clip title:** This 744GB Model Shouldn't Fit on Your Laptop. It Does
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=Pb6P8GW7elI

### Summary
This video introduces Colibri, an innovative open-source project designed to enable the execution of massive Mixture-of-Experts (MoE) Large Language Models (LLMs), specifically the 744-billion parameter GLoM 5.2 model, on consumer-grade laptops with limited RAM (e.g., 25GB). The core challenge addressed is the "memory wall," where large models typically demand extensive, expensive, and fast memory (like multiple H100 GPUs), much of which remains idle during inference. Colibri circumvents this by cleverly managing memory and leveraging the sparse activation nature of MoE models.

The foundational principle enabling Colibri is the Mixture-of-Experts (MoE) architecture. In models like GLoM 5.2, while the total parameter count is enormous, only a small, specific subset of "experts" (around 40 billion parameters) is activated for processing each input token. This means the vast majority of the model's weights are idle at any given moment. Colibri capitalizes on this by splitting the model into "hot" and "cold" components. The "hot" part, comprising essential elements like attention mechanisms, shared experts, and embeddings (roughly 9.9GB), is kept resident in RAM. The "cold" part, consisting of the enormous expert bank (370GB after 4-bit quantization, which is a lossless compression method for weights), resides on a fast NVMe SSD and is streamed into RAM only when needed. This tiered memory approach ensures that only actively required parts of the model occupy fast memory.

Beyond managing the model weights, Colibri also tackles the second "memory bomb": the Key-Value (KV) cache. This cache stores intermediate activations that grow with the conversation context, traditionally demanding significant memory. GLoM 5.2 incorporates Multi-Latent Attention (MLA), compressing the KV cache by approximately 57 times. Colibri further optimizes this by writing the compressed KV cache to disk. While streaming data from disk introduces a speed bottleneck (resulting in 0.05-0.4 tokens per second), the project offers ways to claw back some performance, such as speculative decoding, which allows generating multiple tokens in one "expensive" pass. Furthermore, Colibri learns user-specific routing patterns, "pinning" frequently accessed experts into RAM, making the model faster the more it's used.

The significance of Colibri lies in its democratization of cutting-edge AI. Developed as a pure C project with zero dependencies (no BLAS, Python, or CUDA required), it demonstrates that frontier-class LLMs—which can outperform top open-weight models and rival some closed-source counterparts in areas like coding—can be run locally on consumer hardware. This shifts the paradigm from needing to "rent" expensive datacenter compute to being able to "download and own" powerful AI models, fostering offline and free usage. Although current speeds are slow, Colibri represents a crucial step in making advanced AI accessible, showcasing that hardware limitations can be overcome through innovative algorithmic and memory management techniques, representing a vital direction in AI research.

### Video Description & Links
#### Description
Colibri: Run GLM 5.2 on 25GB of RAM on consumer hardware!

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
💼Consulting: https://calendly.com/engineerprompt/consulting-call
📧 Business Contact: engineerprompt@gmail.com
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
