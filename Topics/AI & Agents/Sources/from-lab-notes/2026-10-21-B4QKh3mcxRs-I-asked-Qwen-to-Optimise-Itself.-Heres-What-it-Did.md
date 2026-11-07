---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: de115718fe2e79175cbf
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "I asked Qwen to Optimise Itself. Here’s What it Did!"
date: 2026-10-21
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-21-B4QKh3mcxRs-I-asked-Qwen-to-Optimise-Itself.-Heres-What-it-Did"
---
## I asked Qwen to Optimise Itself. Here’s What it Did!
**Clip title:** I asked Qwen to Optimise Itself. Here’s What it Did!
**Author / channel:** Weights & Wonders
**URL:** https://www.youtube.com/watch?v=B4QKh3mcxRs

### Summary
Sure! Here is a summary of the video:

The video explores whether an AI can optimize its own performance by tuning its speed settings. Using a local AI setup with the Qwen 3.8 Flash-Next model, a Quadro RTX 8000 graphics card, and a Xeon processor, the creators gave the AI the task of tuning its own settings using an open-source coding agent called OpenCode. Initially, the AI's first idea made it slower, but through a series of experiments, it learned how to improve its speed significantly, reducing a test job from 36 seconds down to 23 seconds—more than a third faster.

The AI tested various settings, including multi-token prediction (MTP) and chunk sizes for reading documents. It found that larger chunks and MTP guessing ahead improved performance, while utilizing regular memory for chunks that didn't fit on the GPU card increased the number of memory fetches, slowing down the process. Through structured experimentation, the AI iteratively refined its settings, discovering the optimal combination of chunk size and guessing parameters to achieve its fastest speed.

Ultimately, the video concludes that an AI can indeed make itself faster through automated tuning, provided it has control over key performance settings. The experiment demonstrates the potential for AI-driven optimization in local computing setups, offering insights into how users can improve their own PC configurations for better AI performance.

### Video Description & Links
#### Description
We gave an AI one job: make yourself faster. It's Qwen 3.8 Flash-Next, running in llama.cpp on a single Quadro RTX 8000, and it worked through OpenCode with full control of the computer for two hours. The catch: it was tuning the very server it runs on, so every change it tried switched its own brain off.

The result: the same test job went from 36 seconds to 23, on the same graphics card. That's more than a third faster, with no human help. After every new record it still had to pass a 20-question quiz and handle one giant message without running out of memory.

What won: bigger reading chunks, plus the MTP head guessing three words ahead.
What didn't help: using all 48 threads, loading the model a different way, an expert cache in VRAM, squeezing its short-term memory, or guessing further ahead.

Try it on your own PC (llama.cpp):
1. If your model doesn't fit on your card, raise the batch and ubatch sizes first. They're 2048 and 512 on automatic; its winner was -b 8192 -ub 4096. Bigger chunks on their own took our test from 36 s to 26 s.
2. Then time the MTP head with and without (--spec-type draft-mtp with Unsloth's MTP file, --spec-draft-n-max 3). On its own it was slower; next to bigger chunks it was part of the winning setup.
3. Bigger chunks need a bit more VRAM. If your card runs out, step back down.

The setup: Qwen 3.8 Flash-Next, Unsloth's 3-bit file (82 GB) · llama.cpp server · Quadro RTX 8000 48 GB · Xeon, 48 threads · 251 GB RAM · 65,536-token context, one user, Qwen's recommended sampling, thinking set to medium. The AI could change any speed setting, but not the model, the context, the sampling or the thinking level.

0:00 Can an AI make itself faster?
0:43 The starting point
2:39 The job
3:27 Its brain switches off
4:00 Nine minutes of homework
5:00 Guessing ahead
6:08 Faster reading
7:54 How far ahead to guess
9:11 The report
9:27 What you can copy
10:15 Can it go further?

Music: "Decompress", "Cloudloop" and "Systematic" by Lee Rosevere, licensed under CC BY 4.0. Source: Music For Podcasts 5 and 6, Internet Archive.
Narration uses an AI voice.

#LocalAI #llamacpp #Qwen #LocalLLM #GPU

#### Tags
`ai`, `artificial intelligence`, `llm`, `local ai`, `local llm`, `self improving ai`, `ai agents`, `coding agent`, `llama.cpp`, `llama cpp`, `qwen`, `qwen 3.8`, `flash next`, `unsloth`, `mixture of experts`, `moe`, `quantization`, `mtp`, `multi token prediction`, `speculative decoding`, `opencode`, `claude code`, `hermes agent`, `deepseek`, `nvidia`, `gpu`, `quadro rtx 8000`, `rtx 8000`, `vram`, `xeon`, `kv cache`, `batch size`, `tokens per second`, `llm inference`, `homelab`, `self hosted`, `open source ai`, `machine learning`, `weights and wonders`
