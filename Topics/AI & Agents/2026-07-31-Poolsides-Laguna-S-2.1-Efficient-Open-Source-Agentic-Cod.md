---
wiki-ingested: true
title: "Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware"
date: 2026-07-31
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-31 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Poolside's Laguna S 2.1: Efficient Open-Source Agentic Coding for Local Hardware
**Clip title:** Laguna S 2.1: The Best Local Agentic Coder?
**Author / channel:** [[concepts/prompt-based-modeling|Prompt Engineering]]
**URL:** https://www.youtube.com/watch?v=H_Lbe69XO_8

### Summary
The video introduces Laguna S 2.1, an innovative [[concepts/autonomous-ai-coding-agent|agentic coding]] model developed by Poolside. This model boasts 118 billion parameters in a [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) architecture, but impressively activates only 8.5 billion parameters per token during [[concepts/inference|inference]], allowing it to run efficiently on local hardware like NVIDIA [[entities/dgx-spark|DGX Spark]] at approximately 80 [[concepts/text-generation-speed|tokens per second]] with [[concepts/llm-inference-acceleration|speculative decoding]]. Laguna S 2.1 also supports a substantial [[concepts/1-million-token-context|1 million token context]] window. A notable aspect of this [[concepts/deployment|release]] is Poolside's commitment to [[concepts/opacity|transparency]], making not only the [[concepts/model-weights|model weights]] [[concepts/open-source|open-source]] but also releasing the full trajectories of its benchmarks, a practice uncommon in the AI community.

Laguna S 2.1's training methodology centers on [[concepts/reinforcement-learning|Reinforcement Learning]] (RL), with a unique emphasis on teaching the model the *process* of "[[concepts/human-cognition|thinking]]" rather than just the final "answer." It was trained on an extensive dataset of 409,000 diverse [[concepts/software-engineering|software engineering]] tasks derived from nearly 99,000 real Git [[concepts/commits|commits]]. To manage the computational cost, the model utilized FP8 [[concepts/accuracy|precision]] and was trained across 4000 NVIDIA H200 GPUs in under nine weeks. While its 70% score on the Terminal-Bench 2.1 benchmark trails larger "frontier" models like GPT-5b Sol and [[concepts/kimi-k3|Kimi K3]], Laguna S 2.1 is highlighted as exceptionally capable for its size, outperforming other open models that are 10 to 15 times larger. Poolside also implemented strategies to mitigate "reward hacking," using an "LLM-as-Judge" calibrated against human-labeled runs, along with prompt addendums and network-blocked sandboxes, to encourage thorough [[concepts/verification|verification]] and [[concepts/data-persistence|persistence]].

For [[concepts/local-control|local deployment]], the MoE architecture is a key enabler, as only the [[concepts/activated-parameters|active parameters]] need to be loaded into memory for token generation, making speed dependent on the active count rather than the total [[concepts/parameter-count|parameter count]]. DGX Spark, with its 128GB of unified memory and [[concepts/native-support|native support]] for NVFP4 (4-bit) [[concepts/parameter-reduction|quantization]], is an ideal platform. Quantizing the full 118 billion parameter model to NVFP4 reduces its [[concepts/4gb-memory|memory footprint]] to roughly 71GB, comfortably fitting into DGX Spark's memory while leaving ample headroom for context and [[concepts/prompt-caching|KV cache]]. To further boost generation speed beyond the naive 12-15 tokens per second, Laguna S 2.1 employs speculative decoding. This involves a smaller, faster "draft" model generating multiple token guesses, which the larger model then efficiently verifies in a single pass, resulting in speeds of around 80 tokens/second (with a peak of 117).

The video demonstrates Laguna S 2.1's agentic capabilities using Poolside's open-source coding [[concepts/harness|harness]], "pool." It successfully generates complex interactive HTML files, such as a Pokédex featuring the first 50 Pokémon and a voxel art scene of a pagoda garden. The model exhibits a remarkably verbose and elaborate "chain of thought," detailing its [[concepts/reasoning-steps|reasoning process]] extensively. However, this verbosity aligns with research suggesting that quantized MoE models may "overthink." Overall, Laguna S 2.1 represents a significant advancement in open-weight, locally runnable agentic coding models, showcasing strong performance for its optimized size and contributing to the growing trend of open-source [[concepts/ai-development|AI development]].

### Video Description & Links
#### Description
In this video, we break down Poolside’s Laguna S2.1, an [[concepts/open-weight-models|open-weights]] 118B MoE coding model (8B active per token) with a 1M-token context window, and why it performs above its size on agentic [[concepts/coding-benchmarks|coding benchmarks]] like [[concepts/cli|Terminal]] Bench 2.1. I cover how it was trained with reinforcement learning in FP8 on ~4,000 NVIDIA H200s in under nine weeks, plus how they tackled reward hacking on [[concepts/swe-bench-verified|SWE-bench]] using an external LLM judge, prompt amendments, and network-blocked sandboxes. 

Thanks to @NVIDIADeveloper for DGX Spark. 

Laguna: https://poolside.ai/blog/introducing-laguna-s-2-1
DGX Spark: https://nvda.ws/3XIkwsh 
Try it out: https://chat.poolside.ai/
Pool [[concepts/agentic-harness|Agent Harness]]: https://poolside.ai/get-started
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
💼[[concepts/consulting|Consulting]]: https://calendly.com/engineerprompt/consulting-call
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

## Related Concepts
- [[concepts/agentic-ai|Agentic Coding]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Coding)
- [[concepts/speculative-decoding|Speculative Decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_Decoding)
- [[concepts/local-inference|Local Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Inference)
- [[concepts/parameter-activation|Parameter Activation]] — [Wikipedia](https://en.wikipedia.org/wiki/Parameter_Activation)
- Mixture-of-Experts (MoE) — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Experts_%28MoE%29)
- [[concepts/machine-learning|Reinforcement Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_Learning)
- NVFP4 Quantization — [Wikipedia](https://en.wikipedia.org/wiki/NVFP4_Quantization)
- [[concepts/context-window|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_Window)
- FP8 Precision — [Wikipedia](https://en.wikipedia.org/wiki/FP8_Precision)
- Reward Hacking Mitigation — [Wikipedia](https://en.wikipedia.org/wiki/Reward_Hacking_Mitigation)
- LLM-as-Judge — [Wikipedia](https://en.wikipedia.org/wiki/LLM-as-Judge)
- [[concepts/verifiable-reasoning|Chain of Thought]] — [Wikipedia](https://en.wikipedia.org/wiki/Chain_of_Thought)
- [[concepts/open-source-weights|Open-Source Weights]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Source_Weights)
- Benchmark Trajectories — [Wikipedia](https://en.wikipedia.org/wiki/Benchmark_Trajectories)
- [[concepts/inference-optimization|KV Cache]] — [Wikipedia](https://en.wikipedia.org/wiki/KV_Cache)
- [[concepts/vram-limitation|Unified Memory]] — [Wikipedia](https://en.wikipedia.org/wiki/Unified_Memory)

## Related Entities
- [[entities/laguna-s-21|Laguna S 2.1]] — [Wikipedia](https://en.wikipedia.org/wiki/Laguna_S_2.1)
- [[entities/nvidia-dgx-spark|NVIDIA DGX Spark]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_DGX_Spark)
- [[entities/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- Poolside — [Wikipedia](https://en.wikipedia.org/wiki/Poolside)
- NVIDIA H200 — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_H200)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- GPT-5b Sol — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5b_Sol)
- [[entities/kimi-k3|Kimi K3]] — [Wikipedia](https://en.wikipedia.org/wiki/Kimi_K3)
- Terminal-Bench 2.1 — [Wikipedia](https://en.wikipedia.org/wiki/Terminal-Bench_2.1)
- pool — [Wikipedia](https://en.wikipedia.org/wiki/pool)
- Pokédex — [Wikipedia](https://en.wikipedia.org/wiki/Pok%C3%A9dex)
- NVFP4 — [Wikipedia](https://en.wikipedia.org/wiki/NVFP4)