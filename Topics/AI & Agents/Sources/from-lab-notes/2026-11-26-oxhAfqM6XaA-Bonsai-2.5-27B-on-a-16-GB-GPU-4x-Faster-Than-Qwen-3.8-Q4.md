---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 910d66078558930bb373
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Bonsai 2.5 27B on a 16 GB GPU: 4x Faster Than Qwen 3.8 Q4"
date: 2026-11-26
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-26-oxhAfqM6XaA-Bonsai-2.5-27B-on-a-16-GB-GPU-4x-Faster-Than-Qwen-3.8-Q4"
---
## Bonsai 2.5 27B on a 16 GB GPU: 4x Faster Than Qwen 3.8 Q4
**Clip title:** Bonsai 2.5 27B on a 16 GB GPU: 4x Faster Than Qwen 3.8 Q4
**Author / channel:** Zero to MVP
**URL:** https://www.youtube.com/watch?v=oxhAfqM6XaA
**Credibility:** Commentary (tier 1 of 5). YouTube video from Zero to MVP: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses the release of a ternary quantized AI model by PrismML, Ternary Bonsai 2.5 27B, which compresses the Qwen 3.8 27B model to 6 gigabytes. This compact size allows it to run on standard consumer hardware, specifically a computer with 64GB of RAM and an NVIDIA RTX 4060 Ti 16GB graphics card. The video highlights how the model utilizes ternary weights (-1, 0, +1) and a multi-token prediction (MTP) module to significantly increase processing speed compared to the original uncompressed model.

The speaker demonstrates the model's capabilities by running it on a real-world coding task, specifically creating a Pomodoro timer application with analytics. The Ternary Bonsai model successfully completes the task in 21 minutes, writing and testing its own code without major errors. The video also covers context window optimization, showing how 8-bit cache and MTP help maintain high processing speeds even with large amounts of context data.

In conclusion, the video presents Ternary Bonsai 2.5 27B as a viable option for local AI workloads, offering substantial speed improvements and efficient memory usage on consumer-grade hardware. The speaker notes that while the model performs well in speed and capability, further testing is needed to evaluate any potential loss in quality due to compression.

### Video Description & Links
#### Description
PrismML released Ternary Bonsai 2.5 27B: Qwen 3.8 27B compressed to 6 GB. The original is almost 54 GB, and the Q4 version most people run at home is almost 17 GB, so it doesn't fully fit on a 16 GB card. I ran Bonsai on an RTX 4060 Ti 16 GB, compared its speed with Qwen 3.8 Q4, and gave it one sentence to build a full Pomodoro timer app.

In this video:
• What a ternary model is, and why it needs only 1.76 bits per weight
• Speed on 16 GB: Qwen 3.8 Q4 at 13 tok/s vs Bonsai at 30 (Q2_0) and 40 (PTQ1_0)
• The built-in MTP module that takes Bonsai from 40 to 69 tok/s, and it also works in regular llama.cpp
• How much context fits on 16 GB: 128K by default, 192K with an 8-bit KV cache
• A Pomodoro timer built from a single sentence in the Pi agent, with 24 of 24 browser tests passing

--------------------------------------------------

🔗 Links
Ternary Bonsai 2.5 27B: https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF
PrismML llama.cpp fork: https://github.com/PrismML-Eng/llama.cpp
📋 Prompt collection for the tests — https://github.com/w512/Prompt-Vault

--------------------------------------------------

Setup:
• GPU: NVIDIA RTX 4060 Ti 16 GB https://link.amazon/B0gJhq9ra
• RAM: 64 GB https://link.amazon/B0dQ3FjZY
• Model: Ternary Bonsai 2.5 27B (PTQ1_0 and Q2_0)
• Baseline: Qwen 3.8 27B Q4
• Runtime: PrismML's llama.cpp fork for PTQ1_0, regular llama.cpp b11556+ for Q2_0
• Agent: Pi, maximum reasoning level

⚠️ Q2_0 needs llama.cpp build b11556 or newer. According to PrismML, older builds load the model without an error and then output garbage. If you get nonsense in Ollama or LM Studio, check the version first.

⏱ Chapters
00:00 Intro
00:55 What a ternary model is
01:33 Running it: PTQ1_0 vs Q2_0
02:08 Speed vs Qwen 3.8 Q4
02:27 MTP: almost 2x faster
03:00 How much context fits on 16 GB
03:26 Real task: Pomodoro timer from one sentence
04:28 Result in the browser
04:48 Wrap-up and part two

#LocalAI #LocalLLM #Qwen #Bonsai2.5

#### Tags
`bonsai 2.5 27b`, `ternary bonsai`, `ternary bonsai 2.5`, `prismml`, `qwen 3.8`, `qwen 3.8 27b`, `ternary llm`, `ternary model`, `llama.cpp`, `multi token prediction`, `mtp`, `rtx 4060 ti`, `16gb vram`, `16gb gpu llm`, `27b on 16gb gpu`, `local llm`, `local ai`, `run llm locally`, `kv cache quantization`, `pi coding agent`, `ai coding agent`, `agentic coding`, `local coding agent`, `self-hosted ai`, `qwen vs bonsai`, `zero to mvp`

#### URLs
- https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF
- https://github.com/PrismML-Eng/llama.cpp
- https://github.com/w512/Prompt-Vault
- https://link.amazon/B0gJhq9ra
- https://link.amazon/B0dQ3FjZY
