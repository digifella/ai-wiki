---
title: "Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware"
date: 2026-07-31
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware
Generated: 2026-07-31 · API: Gemini 2.5 Flash · Modes: Summary

---

## Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware
**Clip title:** Laguna S 2.1: The Best Local Agentic Coder?
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=H_Lbe69XO_8

### Summary
The video introduces Laguna S 2.1, an innovative agentic coding model developed by Poolside. This model boasts 118 billion parameters in a Mixture-of-Experts (MoE) architecture, but impressively activates only 8.5 billion parameters per token during inference, allowing it to run efficiently on local hardware like NVIDIA DGX Spark at approximately 80 tokens per second with speculative decoding. Laguna S 2.1 also supports a substantial 1 million token context window. A notable aspect of this release is Poolside's commitment to transparency, making not only the model weights open-source but also releasing the full trajectories of its benchmarks, a practice uncommon in the AI community.

Laguna S 2.1's training methodology centers on Reinforcement Learning (RL), with a unique emphasis on teaching the model the *process* of "thinking" rather than just the final "answer." It was trained on an extensive dataset of 409,000 diverse software engineering tasks derived from nearly 99,000 real Git commits. To manage the computational cost, the model utilized FP8 precision and was trained across 4000 NVIDIA H200 GPUs in under nine weeks. While its 70% score on the Terminal-Bench 2.1 benchmark trails larger "frontier" models like GPT-5b Sol and Kimi K3, Laguna S 2.1 is highlighted as exceptionally capable for its size, outperforming other open models that are 10 to 15 times larger. Poolside also implemented strategies to mitigate "reward hacking," using an "LLM-as-Judge" calibrated against human-labeled runs, along with prompt addendums and network-blocked sandboxes, to encourage thorough verification and persistence.

For local deployment, the MoE architecture is a key enabler, as only the active parameters need to be loaded into memory for token generation, making speed dependent on the active count rather than the total parameter count. DGX Spark, with its 128GB of unified memory and native support for NVFP4 (4-bit) quantization, is an ideal platform. Quantizing the full 118 billion parameter model to NVFP4 reduces its memory footprint to roughly 71GB, comfortably fitting into DGX Spark's memory while leaving ample headroom for context and KV cache. To further boost generation speed beyond the naive 12-15 tokens per second, Laguna S 2.1 employs speculative decoding. This involves a smaller, faster "draft" model generating multiple token guesses, which the larger model then efficiently verifies in a single pass, resulting in speeds of around 80 tokens/second (with a peak of 117).

The video demonstrates Laguna S 2.1's agentic capabilities using Poolside's open-source coding harness, "pool." It successfully generates complex interactive HTML files, such as a Pokédex featuring the first 50 Pokémon and a voxel art scene of a pagoda garden. The model exhibits a remarkably verbose and elaborate "chain of thought," detailing its reasoning process extensively. However, this verbosity aligns with research suggesting that quantized MoE models may "overthink." Overall, Laguna S 2.1 represents a significant advancement in open-weight, locally runnable agentic coding models, showcasing strong performance for its optimized size and contributing to the growing trend of open-source AI development.

### Video Description & Links
#### Description
In this video, we break down Poolside’s Laguna S2.1, an open-weights 118B MoE coding model (8B active per token) with a 1M-token context window, and why it performs above its size on agentic coding benchmarks like Terminal Bench 2.1. I cover how it was trained with reinforcement learning in FP8 on ~4,000 NVIDIA H200s in under nine weeks, plus how they tackled reward hacking on SWE-bench using an external LLM judge, prompt amendments, and network-blocked sandboxes. 

Thanks to @NVIDIADeveloper for DGX Spark. 

Laguna: https://poolside.ai/blog/introducing-laguna-s-2-1
DGX Spark: https://nvda.ws/3XIkwsh 
Try it out: https://chat.poolside.ai/
Pool Agent Harness: https://poolside.ai/get-started
vLLM Serving: https://github.com/MiaAI-Lab/Laguna-S-2.1-DGX-Spark-RTX-6000-PRO
DSpark video: https://youtu.be/eFgknPFK-g0
MoE Quantization paper: https://arxiv.org/pdf/2606.00206

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

00:00 Laguna S2.1 Overview
01:17 Benchmarks and Harness
02:13 Reinforcement Learning
03:34 Reward Hacking Fixes
05:16 Running on DGX Spark
06:55 NVFP4 Quantization
08:03 Speculative Decoding Speed
10:09 Pool Harness Demo
12:07 Verbose Reasoning Loops

#### Tags
`prompt engineering`, `Prompt Engineer`, `LLMs`, `AI`, `artificial Intelligence`, `Llama`, `GPT-4`, `fine-tuning LLMs`

#### URLs
- https://poolside.ai/blog/introducing-laguna-s-2-1
- https://nvda.ws/3XIkwsh
- https://chat.poolside.ai/
- https://poolside.ai/get-started
- https://github.com/MiaAI-Lab/Laguna-S-2.1-DGX-Spark-RTX-6000-PRO
- https://youtu.be/eFgknPFK-g0
- https://arxiv.org/pdf/2606.00206
- https://engineerprompt.ai/
- https://prompt-s-site.thinkific.com/courses/rag
- https://tally.so/r/3y9bb0
- https://discord.com/invite/t4eYQRUcXB
- https://ko-fi.com/promptengineering
- https://www.patreon.com/PromptEngineering
- https://calendly.com/engineerprompt/consulting-call
- http://tinyurl.com/y5h28s6h
- https://bit.ly/localGPT
