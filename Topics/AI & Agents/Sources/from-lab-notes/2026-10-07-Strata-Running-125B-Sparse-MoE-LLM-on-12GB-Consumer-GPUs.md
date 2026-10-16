---
wiki-ingested: true
title: "Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs"
date: 2026-10-07
source_type: youtube_summary
provider: "Google"
api: "Gemini 2.5 Flash"
modes: "Summary"
type: "source-summary"
domain: ai-agents
group: model-efficiency-compression
aliases:
  - "lab-notes/2026-10-07-Strata-Running-125B-Sparse-MoE-LLM-on-12GB-Consumer-GPUs"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Strata: Running 125B Sparse MoE LLM on 12GB Consumer GPUs
**Clip title:** How Strata Runs a 125B Model on a 12GB GPU ([[concepts/qwen3-model|Qwen3]].8-Flash-Next)
**[[entities/tasia-custode|Author]] / channel:** AgenticEngineering
**URL:** https://www.youtube.com/watch?v=4q_VlobZU0A

### Summary
This video explains how an [[concepts/open-source|open-source]] runtime called [[concepts/large-language-model|Strata]] enables [[concepts/demystifying-llms|large language models]] (specifically [[entities/qwen-38|Qwen 3.8]] Flash Next, a 125-billion parameter model) to run efficiently on [[concepts/consumer-grade-hardware|consumer-grade hardware]], such as an RTX 5070 GPU with only 12GB of [[concepts/vram|VRAM]]. Traditionally, a model of this size would require significantly more [[concepts/memory|memory]], making it impossible to run on such hardware. Strata achieves this by employing "compression magic," ensuring the GPU never needs to hold the entire model simultaneously.

The model itself is a Sparse [[entities/mixture-of-experts|Mixture of Experts]] (SMoE), meaning while it stores 125 billion parameters, only a fraction (about 6 billion) are active for any given token. In each of its 48 layers, a "router" selects 10 out of 512 experts, plus one always-active shared expert, making the [[concepts/computation|computation]] sparse. Strata orchestrates a three-tier memory [[concepts/hierarchy|hierarchy]] to manage this vast model. GPU VRAM holds crucial components like mixers, routers, shared experts, the output head, a [[concepts/draft|draft]] layer, and a dynamic cache of the "hottest" (most frequently accessed) experts. The entire pool of 24,576 expert instances resides in [[concepts/system-ram|system RAM]] (e.g., 64GB), pinned in place. Finally, a large N-gram lookup table (around 29GB) is stored on a fast NVMe SSD, treated as a lookup rather than a matrix multiply, and managed by the operating system's page cache.

Strata's core [[concepts/innovation|innovation]] lies in its [[concepts/computational-resources|compute]] strategy. Instead of a naive offloading approach where missing experts are copied to the GPU, Strata computes each expert where it resides. If an expert isn't in the GPU's VRAM cache, the CPU processes it directly from system RAM in parallel with the GPU handling cached experts. This transforms system RAM into a second, concurrent compute domain. Further optimizations include profiling expert usage to intelligently populate the VRAM cache, pipelining [[concepts/prompt-processing|prompt processing]] to hide PCIe transfer latency, and streaming the Key-Value (KV) cache for long contexts by moving most of it to system RAM while keeping only the most-read portions in VRAM. [[concepts/llm-inference-acceleration|Speculative decoding]] also boosts generation [[concepts/speed|speed]] by allowing a draft layer to propose multiple [[concepts/tokens|tokens]], which are then verified in a single, efficient pass by the main model.

The combined result of these techniques is impressive performance on [[concepts/consumer-hardware|consumer hardware]]. On an RTX 5070 with 12GB VRAM and a 6-core Ryzen CPU, Strata achieves approximately 90 [[concepts/decode-throughput|tokens per second]] for short chats, 67 tokens per second with a 128K context, and around 1300 tokens per second when reading large 32K prompts. The video concludes that Strata doesn't merely shrink a large model; it reframes the problem as a sophisticated systems scheduling challenge. The GPU isn't running the model alone; the entire PC, with its varied memory and processing units, works together as a cohesive [[concepts/engine|inference engine]], demonstrating that [[concepts/ai-system|intelligent system]] design can overcome conventional memory limitations.

### Video Description & Links
#### Description
Strata runs Qwen3.8-Flash-Next, a 125-billion-parameter [[concepts/mixture-of-experts|mixture-of-experts]] (MoE) model, on a 12 GB RTX 5070 at around 90 tokens per second.
Here is how it works:
The trick is not compressing 125B parameters into 12 GB. Because only ~6B parameters are active per token, Strata distributes the workload across the entire PC:
VRAM (12 GB): Holds what every token touches plus an active cache of the hottest experts.
System RAM (64 GB DDR5): Houses all 24,576 experts, using the CPU to compute experts missing from the GPU cache in parallel.
NVMe SSD: Hosts a 28.8 GB n-gram table.
Speculative Decoding: Uses the model’s native Multi-Token [[concepts/user-attention-prediction|Prediction]] (MTP) layer to drastically cut full forward passes.
What’s Covered
Stored vs. [[concepts/activated-parameters|Active Parameters]]: Why sparse MoEs change the memory equation (125B stored vs. ~6B active).
Three-Tier Memory Hierarchy: Segmenting roles across VRAM, RAM, and NVMe SSD.
Parallel Compute vs. PCIe Swapping: Why computing experts on the CPU beats PCIe [[concepts/network-speed|bandwidth]] bottlenecks.
The GPU Expert Cache: Why [[concepts/ram-capacity|memory capacity]] and cache hit rates beat raw TFLOPS.
Throughput Optimizations: Chunked prefill, KV streaming, and MTP speculative decoding.
[[concepts/hardware-compatibility|Hardware Requirements]]: Real-[[entities/earth|world]] minimums (12 GB VRAM, 64 GB RAM, fast NVMe, and a modern mid-range CPU).
Note: Performance figures reflect Strata's published metrics tested on an RTX 5070 (12 GB), Ryzen 5 7600, and 64 GB [[concepts/ddr5-ram|DDR5 RAM]], rather than independent third-party benchmarks.
Chapters
00:00 — Hook: This shouldn't fit
00:29 — Stored vs. active
00:56 — 24,576 experts
01:23 — Three tiers, three jobs
01:53 — Not swap: A second compute domain
02:23 — The GPU expert cache
02:53 — [[concepts/precision-reduction|Quantization]] and the SSD table
03:25 — One token's journey
03:53 — Prefill: Hide the transfers
04:20 — KV streaming
04:53 — Guess, then check
05:23 — The numbers
05:59 — The footnote
06:28 — The whole machine
Sources & Links
Strata Repository: [[entities/github|github]].com/Niko1221/Strata
Strata Technical Deep Dive: DETAILS.md
Qwen3.8-Flash-Next Model Card: [[concepts/open-source-machine-learning|Hugging Face]]
#Strata #Qwen #LocalLLM #MixtureOfExperts #LLMInference #Qwen38flashnext

## Related Concepts
- [[concepts/sparse-mixture-of-experts|Sparse Mixture of Experts]]
- [[concepts/large-language-model|Large Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/vram-optimization|VRAM Optimization]]
- [[concepts/model-compression|Model Compression]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_compression)
- [[concepts/consumer-gpu-inference|Consumer GPU Inference]]
- [[concepts/runtime-engine|Runtime Engine]] — [Wikipedia](https://en.wikipedia.org/wiki/Runtime_system)
- [[concepts/speculative-decoding|Speculative Decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_decoding)
- [[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]]

## Related Entities
- [[entities/strata|Strata]] — [Wikipedia](https://en.wikipedia.org/wiki/Stratum)
- [[entities/qwen38-flash-next|Qwen3.8-Flash-Next]]
- RTX 5070 — [Wikipedia](https://en.wikipedia.org/wiki/GeForce_RTX_50_series)
- Ryzen — [Wikipedia](https://en.wikipedia.org/wiki/Ryzen)
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/Nvidia)