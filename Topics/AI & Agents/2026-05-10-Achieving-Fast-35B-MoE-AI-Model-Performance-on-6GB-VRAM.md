---
wiki-ingested: true
title: Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp
date: 2026-05-10
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-10 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## Achieving Fast 35B MoE AI Model Performance on 6GB VRAM with Llama.cpp
**Clip title:** Running a 35B AI Model on 6GB [[concepts/vram|VRAM]], FAST ([[concepts/inference-engine|llama.cpp]] Guide)
**Author / channel:** Codacus
**URL:** https://www.youtube.com/watch?v=8F_5pdcD3HY

### Summary
This video details an impressive feat: successfully running a 35-billion parameter [[concepts/mixture-of-experts|Mixture-of-Experts]] (MoE) AI model, [[concepts/qwen-36-35b-a3b|Qwen 3.6 35B-A3B]], on surprisingly old and limited [[concepts/hardware|hardware]]. The setup includes an 8-year-old [[entities/nvidia|Nvidia]] GTX 1060 GPU with only 6GB of VRAM, an Intel i3-8100 [[concepts/cpu|CPU]], and 24GB of DDR4 [[concepts/ram|RAM]]. The core challenge was not just making the model run, but achieving acceptable speeds and a large [[concepts/context-window|context window]] without significant quality degradation. The presenter used `llama.cpp` as the engine due to its exceptional flexibility and exposed configuration options, demonstrating that [[concepts/software|software]] optimization can overcome significant [[concepts/hardware-limitations|hardware limitations]].

Initially, a "naive split" approach was attempted, offloading the first 20 of the model's 40 layers to the GPU. This resulted in a painfully slow [[concepts/speed|inference speed]] of just 3 [[concepts/tokens|tokens]] per second, described as "satellite phone territory." The bottleneck was identified as the PCIe bus, choked by the constant transfer of entire [[concepts/model-layers|model layers]] (including inactive "expert" blocks) between the CPU and GPU for every token. The first major breakthrough involved a "smart split" or MoE offloading, where only the active, fast-firing parts of each layer were kept on the GPU, while the larger, mostly dormant expert blocks resided in the CPU's RAM. This, combined with an "eager loading" technique (using `--no-mmap` to load the entire model into RAM upfront rather than lazy-loading from disk), significantly boosted performance to 13.5 tokens per second and later to 17 tokens per second, utilizing 5.5GB of the 6GB VRAM.

To further enhance usability, particularly for larger contexts, two more crucial optimizations were introduced. The first was **[[concepts/data-compression|KV Cache compression]] using "[[concepts/ai-efficiency|TurboQuant]]"**. By quantizing the Key-Value cache to 4-bit for keys and 3-bit for values (an asymmetric approach beneficial for grouped query [[concepts/attention-mechanisms|attention]] models), the context window could be expanded from a mere 64K tokens to a full 256K tokens—the entire training context of the model—on the same 6GB VRAM, all while maintaining the 17 tokens/second speed. The second was **true [[concepts/memory|memory]] locking** using the `--mlock` flag in `llama.cpp` (and corresponding Docker/LXC configurations). This prevents the operating system from paging out model experts from RAM to disk during idle periods, ensuring consistent, stutter-free performance over extended runs, effectively achieving "production-grade" stability.

The video also highlighted an optimization that failed: **[[concepts/speculative-decoding|speculative decoding]]**. While theoretically promising for [[concepts/transformers|Transformers]] (using a small "drafter" model to guess tokens in parallel), it actually *slowed down* this particular MoE model from 17 to 11 tokens per second. This was attributed to two architectural reasons: MoE models require fetching different, randomly chosen experts for each token in a batch, causing "memory thrash" over the PCIe bus, and the [[concepts/state-space-model|State Space Model]] ([[concepts/ssm|SSM]]) layers used in Qwen are inherently sequential, precluding parallel [[concepts/verification|verification]] of tokens across a draft window. In conclusion, the video successfully demonstrated that by leveraging `llama.cpp`'s fine-grained control and a deep understanding of the model's [[concepts/architecture|architecture]], a massive 35B parameter model can run locally and robustly on modest, years-old hardware, making it "usable, not just possible." The final configuration delivers 17 tokens/second with a 256K context on an 8-year-old GTX 1060, proving that software smarts can significantly extend the life and capability of existing hardware.

### Video Description & Links
#### Description
Run a 35B parameter AI model on just 6GB VRAM using llama.cpp and Qwen 3.6.

This setup shouldn’t work—but with the right optimizations, it reaches good enough tps on a GTX 1060.

In this video, I break down how to run [[concepts/large-language-model-llm|large language models]] locally on low VRAM GPUs using MoE offloading, memory tuning, and a few critical [[concepts/flags|flags]] that dramatically improve performance.

What you’ll learn:
• How to run 35B LLMs on 6GB VRAM
• llama.cpp [[concepts/algorithm-optimization|optimization techniques]]
• MoE (Mixture of Experts) offloading explained
• Fixing slow token generation (3 tok/s → 17 tok/s)
• Using --no-mmap and --mlock for performance and stability
• TurboQuant for increasing [[concepts/context-windows|context length]]
• What doesn’t work (and why)

Hardware used:
• NVIDIA GTX 1060 (6GB VRAM)
• Intel i3-8100
• 24GB RAM

[[concepts/tech-stack|Tech stack]]:
Proxmox → LXC → [[concepts/docker|Docker]] → llama.cpp (adapt based on your setup)

Useful resources:
• Qwen 3.6 35B-A3B model: https://huggingface.co/Qwen/Qwen3.6-35B-A3B
• TurboQuant paper: https://arxiv.org/abs/...
• llama.cpp TurboQuant fork: https://github.com/TheTom/llama-cpp-turboquant

If you're interested in [[concepts/ai-ownership|running AI locally]], optimizing LLM performance, or pushing old hardware to its limits, subscribe for more experiments.

Chapters:
00:00 This shouldn’t work
00:27 Setup
01:46 Why it’s slow by default
02:52 MoE breakthrough
04:33 Fixing memory bottlenecks
05:32 Hitting 17 tok/s
06:40 4× context trick
09:23 Stability fix
11:04 What failed
13:32 The 5 flags

#LocalAI #LLM #llamacpp #Qwen #AIonGPU #LowVRAM

#### Tags
`35B LLM`, `run LLM locally`, `local AI`, `6GB VRAM`, `low VRAM AI`, `llama.cpp`, `Qwen 35B`, `AI on old hardware`, `MoE offloading`, `mixture of experts AI`, `llm optimization`, `tokens per second LLM`, `GTX 1060`, `budget GPU AI`, `homelab AI`, `AI experiment`, `pushing hardware limits`, `Codacus`

#### URLs
- https://huggingface.co/Qwen/Qwen3.6-35B-A3B
- https://arxiv.org/abs/
- https://github.com/TheTom/llama-cpp-turboquant

## Related Concepts
- [[concepts/mixture-of-experts|Mixture-of-Experts (MoE)]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Experts_%28MoE%29)
- [[concepts/scaling-law|AI model optimization]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_model_optimization)
- [[concepts/context-window|Large context window]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_context_window)
- [[concepts/context-efficiency|Context efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_efficiency)

## Related Entities
- [[entities/codacus|Codacus]] — [Wikipedia](https://en.wikipedia.org/wiki/Codacus)
- [[entities/qwen-36-35b-a3b|Qwen 3.6 35B-A3B]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.6_35B-A3B)
- [[entities/nvidia|Nvidia]] — [Wikipedia](https://en.wikipedia.org/wiki/Nvidia)
- [[entities/intel|Intel]] — [Wikipedia](https://en.wikipedia.org/wiki/Intel)