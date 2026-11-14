---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 1f62268ad7f0c7db6ec2
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "What’s the Best AI Model Your GPU Can Actually Run? 4GB to 16GB  VRam"
date: 2026-11-03
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-03-tek-IY9BRWc-Whats-the-Best-AI-Model-Your-GPU-Can-Actually-Run-4GB-to"
credibility_tier: 1
credibility_label: "Commentary"
---
## What’s the Best AI Model Your GPU Can Actually Run? 4GB to 16GB  VRam
**Clip title:** What’s the Best AI Model Your GPU Can Actually Run? 4GB to 16GB  VRam
**Author / channel:** Codacus
**URL:** https://www.youtube.com/watch?v=tek-IY9BRWc
**Credibility:** Commentary (tier 1 of 5). YouTube video from Codacus: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
**Main Topic:** 
The video explores how local AI models, ranging from 35 billion to 700 billion parameters, can be run efficiently on everyday hardware configurations using different VRAM capacities, system RAM, and storage strategies.

**Key Points:**
* **Dense vs. Mixture of Experts (MoE) Models:** The video explains that dense models use all parameters for every token, requiring high VRAM to run quickly. In contrast, MoE models (like Qwen 3.6) use only a fraction of their parameters per token, making them much more memory efficient.
* **Hardware Constraints and Optimization:** The speaker demonstrates how tools like `llama.cpp` enable users to run large models on modest hardware (such as 4GB to 16GB VRAM cards) by leveraging system RAM, SSD mapping (`mmap`), and advanced caching features like MoE cache (`moe-cache-mib`).
* **Scaling Up:** The presentation covers how performance scales as VRAM and system RAM increase, highlighting that larger models with optimized parameter quantization can often outperform smaller dense models while fitting into consumer-grade setups.

**Conclusions & Takeaways:**
* Upgrading system RAM can be more impactful for running large AI models than simply buying a bigger graphics card.
* Advanced software configurations and flags (such as `--load-mode mmap` and `--fit-target`) allow users to bridge the gap between model size and limited hardware resources.
* Running large models locally gives users complete privacy and control without relying on external cloud providers.

### Video Description & Links
#### Description
Use ClinePass: https://cline.gg/clinepass-codacus

What's the best AI model your GPU can run? We climb from 4 GB to 16 GB of VRAM with 16 mixture-of-experts models under 40B, then go up to DeepSeek V4.1 Flash at 763B on one card.

Most of the fits here are arithmetic from file sizes and config files. The runs I measured are marked in the video.

--------------------------------------------------

THE COMMAND
./build/bin/llama-server -hf unsloth/Qwen3.6-35B-A3B-GGUF -hff Qwen3.6-35B-A3B-UD-Q4_K_XL.gguf \
  -c 32768 -ctk q8_0 -ctv q8_0 --no-mmproj --port 8080 \
  --fit-target 512 -ub 1024 --moe-cache-mib 2048

These flags were never run all together, so treat this line as a starting point.
On a card with little spare VRAM, leave out -ub 1024 and --moe-cache-mib 2048. If you're short on RAM, add --load-mode mmap.

--------------------------------------------------

THE MODELS
Qwen3.6-35B-A3B: https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF
Qwen3.8 27B GSQ RCO, the 16 GB pick (IQ3_S, about 12 GB): https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
DeepSeek V4.1 Flash: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
DeepSeek V4.1 Flash GSQ RCO GGUFs: https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF

THE CODE
llama.cpp: https://github.com/ggml-org/llama.cpp
The expert cache, --moe-cache-mib: https://github.com/ggml-org/llama.cpp/pull/29887
My llama.cpp fork: https://github.com/thecodacus/llama.cpp
DeepSeek V4.1 Flash on the fork, PR #21: https://github.com/thecodacus/llama.cpp/pull/21

THE DISCORD
The Coding Abacus: discord.gg/RBFFF898MB

--------------------------------------------------

NOTES
- K2 Horizon on 8 GB needs -ot attn_v_exps=CPU, and that turns auto-fit off.
- The expert cache is for small batches of 32 tokens or fewer, so it helps generation and not prefill.
- DeepSeek V4.1 Flash is 763B in total: 552B backbone (the model card's number), 197B Engram memory, 14B MTP layers and 0.5B vision.
- Threads: this is Qwen3.8 Flash-Next on my own fork with 12 vCPUs. At -t 12 it did 13.6 t/s and swung between 5.9 and 20.5, with 64.8% of CPU samples in libgomp's barrier spin. At -t 6 it held 24.1. Other builds behave differently.
- The 4 GB page-fault numbers come from short runs.
- Scores are from the Artificial Analysis Intelligence Index v4.3.2, as of 2026-10-21. It has since moved to v5.0, and scores from different versions aren't comparable.

--------------------------------------------------

Download Cline Desktop: https://cline.gg/desktop-codacus

ClinePass is an optional $9.99 a month subscription, with around five times the limits of standard API access on a curated set of open-weight models.
ClinePass: https://cline.gg/clinepass-codacus

--------------------------------------------------

CHAPTERS
0:00 How much VRAM do you need?
0:43 Why mixture-of-experts models fit
3:29 Setting up llama.cpp
8:19 4 GB
10:51 6 GB
12:34 8 GB
14:36 12 GB
17:20 16 GB
18:45 Beyond 40B: 763B
20:26 Bigger model or lower quant?
21:53 The map
23:18 Your machine
25:09 The close

#localai #privateai #aiagents #openai #deepseek #qwen

#### Tags
`localai`, `codacus`, `homelab`, `llm`, `local llm`, `qwen 4 27b`, `qwen`, `deepseek`, `flint`, `liquid ai`, `lm studio`, `qwen 3.8`, `llama.cpp tutorial`, `qwen 3.8 flash next`, `ollama`, `llama cpp`

#### URLs
- https://cline.gg/clinepass-codacus
- https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF
- https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF
- https://github.com/ggml-org/llama.cpp
- https://github.com/ggml-org/llama.cpp/pull/29887
- https://github.com/thecodacus/llama.cpp
- https://github.com/thecodacus/llama.cpp/pull/21
- https://cline.gg/desktop-codacus
