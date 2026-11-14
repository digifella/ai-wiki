---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: cbb166a5f701eb4b3ce3
suggested-topic: "Undecided"
domain: "ai-agents"
title: "Dory - NVIDIA's Looped Transformer"
date: 2026-11-03
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-03-vSCYL8ySh9g-Dory---NVIDIAs-Looped-Transformer"
credibility_tier: 1
credibility_label: "Commentary"
---
## Dory - NVIDIA's Looped Transformer
**Clip title:** Dory - NVIDIA's Looped Transformer
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=vSCYL8ySh9g
**Credibility:** Commentary (tier 1 of 5). YouTube video from Sam Witteveen: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary

### Main Topic
The video discusses Dory 1.0-4B, a 3.97-billion-parameter open-license looped transformer model from NVIDIA's Nemotron Labs. It explores how the model uses different amounts of looping—running its recurrent layers multiple times per token—to increase "effective depth" and reasoning performance without increasing memory footprint on the GPU.

### Key Points Discussed
* **Looped Architecture:** The model splits layers into an input block, an output block (both run once), and a middle recurrent block with shared weights that can loop 1, 2, 4, or 8 times. Each loop refines the token representation by re-injecting the input plus the recurrent output.
* **Elastic Inference & Trade-offs:** Increasing loop counts raises compute per token (GFLOPS) while keeping the parameter memory footprint constant (around 3.97B weights). However, more loops require a larger KV cache per sequence, which can be mitigated using a "last loop only" mode.
* **Benchmark Performance:** The speaker notes that running Dory with more loops (e.g., $k=2$ or $k=4$) generally improves performance on agentic and reasoning benchmarks (such as SWE-bench and Terminal-Bench), often outperforming models with significantly more parameters while using much less memory.

### Conclusions and Takeaways
Dory demonstrates a novel way to scale model capability through compute-per-token looping rather than scaling parameter size alone, offering flexibility at deployment to trade off speed, accuracy, and compute budget. The speaker suggests that looped transformers represent a major trend in AI development—with potential implications for upcoming architectures like GPT-6—and that two loops serve as a strong default for balancing performance and efficiency on challenging tasks.

### Video Description & Links
#### Description
In this video, I look at a research release from NVIDIA called Dory, which is a 4B looped transformer. 

HF: https://huggingface.co/collections/nvidia/nemotron-labs-dory

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:38 What is NVIDIA's Dory?
02:25 Specs
03:06 How a loop transformer works
06:24 The KV cache: per-loop vs last-loop
07:33 Loop Race demo
09:03 Chatting with Dory at 1, 2 and 4 loops
11:13 Benchmarks vs Gemma 4 26B
11:33 Where Dory wins and where it loses
13:06 Deploying Dory
14:26 Takeaways

#### Tags
`NVIDIA Dory`, `Dory 4B`, `Dory1.0-4B`, `Nemotron Labs`, `NVIDIA Nemotron`, `loop transformer`, `looped transformer`, `latent recurrent transformer`, `recurrent depth`, `elastic inference compute`, `test-time compute`, `NVFP4`, `Gemma 4 26B`, `small language model`, `4B model`, `open model`, `OpenMDW`, `vLLM`, `KV cache`, `local LLM`, `run LLMs locally`, `LLM reasoning`, `AI agents`, `GPT-6`

#### URLs
- https://huggingface.co/collections/nvidia/nemotron-labs-dory
- https://github.com/samwit/llm-tutorials
