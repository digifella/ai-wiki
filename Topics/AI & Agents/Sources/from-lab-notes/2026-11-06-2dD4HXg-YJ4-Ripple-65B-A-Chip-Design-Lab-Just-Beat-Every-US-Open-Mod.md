---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: dd731ebe04eac542c215
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Ripple 65B: A Chip Design Lab Just Beat Every US Open Model"
date: 2026-11-06
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-06-2dD4HXg-YJ4-Ripple-65B-A-Chip-Design-Lab-Just-Beat-Every-US-Open-Mod"
credibility_tier: 1
credibility_label: "Commentary"
---
## Ripple 65B: A Chip Design Lab Just Beat Every US Open Model
**Clip title:** Ripple 65B: A Chip Design Lab Just Beat Every US Open Model
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=2dD4HXg-YJ4
**Credibility:** Commentary (tier 1 of 5). YouTube video from Sam Witteveen: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
**Main Topic**
The video reviews the newly released open-weight model **Ripple-65B Preview**, developed by the startup **Recursive Intelligence** (founded by former Google DeepMind researchers). The speaker explores the model's performance, architecture, cost efficiency, and how it compares to other open-weight models on agentic coding benchmarks like Terminal-Bench 2.1.

**Key Points**
- **Model Overview:** Ripple-65B Preview is a 65-billion-parameter dense transformer model (not a Mixture of Experts) pre-trained on 12 trillion tokens with support for up to 1M context length. It is available under the Apache 2.0 license, making it free for commercial use and fine-tuning.
- **Performance & Benchmarking:** On Terminal-Bench 2.1, Ripple-65B Preview scored **80.52**, slightly outperforming Reflection Beam (501B parameters at 80.1) and beating other US open-weight models, though it trails some top Chinese models. The speaker notes that while self-reported scores can vary by harness, Ripple stands out as a strong, smaller dense model from a US lab.
- **Cost Efficiency:** Recursive Intelligence reported a total R&D cost of **$32 million** for the entire project, which includes pretraining ladder development, data mixing, evaluations, debugging, synthetic data generation, and the final training run. This is estimated to be roughly one-tenth of the cost of previous open-weight frontier models.
- **Architecture & Training:** Ripple-65B opted for a thin-and-deep design (5120 d_model, 80 layers) with gated attention, global NoPE, and value residuals, avoiding complex MoE routing. The team used iterative small-scale experiments ("laddering") to optimize performance efficiently, building on open research from Ai2's Olmo models.
- **Demonstration:** The speaker tests Ripple-65B on an HP ZGX Fury workstation using the DeepSeek Harness (DSH), showing successful tool calling, prompt injection resistance, long-essay critique, and SVG/HTML generation tasks.

**Conclusions & Takeaways**
The speaker praises Recursive Intelligence for their transparency, providing a complete base model, code, and a detailed R&D write-up explaining what worked and what failed. While Ripple-65B may not be the absolute top-scoring model on the leaderboard, its compact size, dense architecture, Apache 2.0 license, and cost-effective training approach make it an exciting option for developers and researchers looking to run high-performing models locally.

### Video Description & Links
#### Description
In this video, I go through a new model that has come out from an interesting company that wasn't focused on making LLM models but is focused on creating models that can be used for chip design. 

HF: https://huggingface.co/ricursiveAI

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Ripple 65B
00:55 Who is Ricursive?
02:23 What they released
03:15 Apache 2.0 License
04:43 How it stacks up against Chinese open models
07:03 How they did it for $32M
08:31 A thin and deep architecture
11:41 Demo
12:07 Takeaways

#### Tags
`Ripple 65B`, `Ripple-65B-Preview`, `Ripple 65B Preview`, `Ricursive`, `Ricursive Intelligence`, `Ricursive AI`, `Recursive Ripple`, `open weight model`, `open coding model`, `best local coding model`, `best local model for agentic coding`, `agentic coding`, `local LLM`, `dense model`, `Terminal Bench 2.1`, `DeepSeek Harness`, `Apache 2.0`, `Reflection Beam`, `Qwen 3.8 27B`, `AlphaChip`, `NVFP4`, `ZGX Fury`

#### URLs
- https://huggingface.co/ricursiveAI
- https://github.com/samwit/llm-tutorials
