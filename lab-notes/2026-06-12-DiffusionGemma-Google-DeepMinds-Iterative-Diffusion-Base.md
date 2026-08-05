---
title: "DiffusionGemma: Google DeepMind's Iterative Diffusion-Based LLM for Text Generation"
date: 2026-06-12
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# DiffusionGemma: Google DeepMind's Iterative Diffusion-Based LLM for Text Generation
Generated: 2026-06-12 · API: Gemini 2.5 Flash · Modes: Summary

---

## DiffusionGemma: Google DeepMind's Iterative Diffusion-Based LLM for Text Generation
**Clip title:** Diffusion Gemma: The First Diffusion Model that "Thinks"
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=I2-_3ieJelE

### Summary
Google DeepMind has introduced DiffusionGemma, a groundbreaking open-weights diffusion-based Large Language Model (LLM) under the Apache 2.0 license. This new model signifies a shift in text generation, offering a unique approach compared to traditional autoregressive models. DiffusionGemma is released with 26 billion total parameters, of which approximately 3.8 billion are actively utilized per token, emphasizing an efficient "Mixture of Experts" (MoE) architecture. Its open-source nature allows developers to run and experiment with it on their own machines, fostering broader innovation.

The core innovation of DiffusionGemma lies in its "masked block diffusion" mechanism. Unlike autoregressive models that generate text sequentially, token by token, and commit to each prediction without revision, DiffusionGemma approaches generation like an artist working on a canvas. It starts with a canvas of 256 token positions filled with noise and then iteratively refines all these tokens in parallel. This bi-directional attention within each block allows the model to continuously re-evaluate and correct its previous estimations across the entire segment, leading to an iterative sharpening of the answer. This ability to revise and refine outputs in parallel is a significant advantage over its predecessors.

The architecture of DiffusionGemma combines diffusion within blocks and autoregression across blocks for longer outputs, committing finished blocks before denoising the next segment. This hybrid approach contributes to its impressive speed, achieving up to 3.7 times the output speed of its autoregressive Gemma 4 twin. However, this enhanced speed comes with a slight trade-off in raw performance, as DiffusionGemma scores 5-19 points lower than Gemma 4 on various reasoning and mathematical benchmarks. To run the model, hardware requirements vary depending on precision, from 51.6 GB of VRAM for BF16 to as low as 16.8-26.9 GB using GGUF quantization, making it runnable on high-end consumer GPUs or Apple Silicon.

DiffusionGemma is particularly well-suited for latency-critical applications such as real-time chat, creative text drafting, code infilling, and generating structured content, where its parallel processing and iterative correction capabilities are highly beneficial. It boasts day-one support from major AI frameworks like Hugging Face Transformers, vLLM, MLX, and llama.cpp, facilitating widespread adoption and experimentation. By open-sourcing such an advanced diffusion LLM, Google is pushing the boundaries of what's possible in text generation, offering the community a powerful tool to explore novel applications and contribute to the evolving landscape of AI.

### Video Description & Links
#### Description
Google’s Diffusion Gemma, its first open-weight diffusion-based language model released under Apache 2.0. I explain how diffusion decoding differs from autoregressive generation (parallel fixed-window generation that can revise earlier tokens), walk through the step mechanics (256-token patches, entropy/uncertainty locking with a budget, temperature cooling, early stopping), and why it becomes a hybrid: diffusion within blocks and autoregressive across blocks. I cover the MoE network details (26B total, ~4B active, 128 experts, sliding-window attention with periodic global layers, up to 256K context, small vision encoder), hardware/VRAM needs across BF16/FP8/NVFP4/GGUF, and day-one support in Transformers, vLLM, MLX, and llama.cpp. I also compare speed vs accuracy, show a local MLX demo UI, and generate a simple Pokémon website example.

https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
https://huggingface.co/google/diffusiongemma-26B-A4B-it
https://ai.google.dev/gemma/docs/diffusiongemma

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


Diffusion Gemma Explained: Google’s First Open-Weight Diffusion LLM (26B MoE) + Local Demo


00:00 Diffusion Gemma
01:02 Diffusion vs Autoregressive
02:03 How Diffusion Works
02:50 Inside a Denoising Step
04:08 Blocks and Hybrid Decoding
04:50 MoE Network Breakdown
05:37 Hardware and Quantization
07:06 Speed vs Accuracy Tradeoffs
08:14 Serving Options and Demo Setup
08:47 Parallel Generation Examples
09:53 Local UI and Coding Demo

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
- https://huggingface.co/google/diffusiongemma-26B-A4B-it
- https://ai.google.dev/gemma/docs/diffusiongemma
- https://engineerprompt.ai/
- https://prompt-s-site.thinkific.com/courses/rag
- https://tally.so/r/3y9bb0
- https://discord.com/invite/t4eYQRUcXB
- https://ko-fi.com/promptengineering
- https://www.patreon.com/PromptEngineering
- https://calendly.com/engineerprompt/consulting-call
- http://tinyurl.com/y5h28s6h
- https://bit.ly/localGPT
