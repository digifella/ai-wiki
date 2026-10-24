---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 7449fdf8df5448f888a5
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "Can Running AI in a Loop Make It Smarter on the Same GPU?"
date: 2026-10-20
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-20-h7hILgt_2SQ-Can-Running-AI-in-a-Loop-Make-It-Smarter-on-the-Same-GPU"
---
## Can Running AI in a Loop Make It Smarter on the Same GPU?
**Clip title:** Can Running AI in a Loop Make It Smarter on the Same GPU?
**Author / channel:** Codacus
**URL:** https://www.youtube.com/watch?v=h7hILgt_2SQ

### Summary
Here's a summary of the video content:

The video explores the concept of "looped transformers" in AI language models, discussing rumors around models like OpenAI's GPT-6 Sol and NVIDIA's release of Dory. The speaker explains how looping works—running a portion of a model multiple times without adding new weights—and compares it to other techniques like prompt repetition and traditional chain-of-thought processing.

Key points include:
- **Looping Mechanism**: Looping allows models to reuse layers of a transformer, spending more compute on each token to potentially increase performance without changing model size.
- **Comparison with Other Methods**: The video contrasts looping with prompt repetition (pasting questions twice) and traditional chain-of-thought methods, showing how each approach affects accuracy and VRAM usage.
- **Performance and Limitations**: While looping can improve performance on certain benchmarks, the speaker notes that it tends to yield diminishing returns and may introduce noise if not properly trained.

The video concludes that while looping can provide some performance gains, it cannot fundamentally exceed the limits of a model's pre-trained knowledge. True intelligence improvements require models to be specifically trained with looped architectures from the start, as demonstrated by NVIDIA's Dory model.

### Video Description & Links
#### Description
Rumours say GPT-6.1 Sol is just GPT-6 Sol, looped twice. A looped transformer runs part of its layer stack again for every token, so the model spends more compute on the same weights, on the same GPU. I tried to turn my own local models into looped transformers to see whether that actually makes them smarter, then ran NVIDIA's Dory, a 4B model trained to loop, on one RTX 3060.

What I found:
- Running four middle blocks of Qwen3-4B twice, the naive way, made it worse: MMLU-Pro dropped 8.35 points and CommonsenseQA 6.63.
- A control test with no loop at all beat my loops: pasting the question twice raised MMLU-Pro by 3.5 points.
- With thinking on, looping the 35B fixed 8 answers and broke 9. Nothing I could count on.
- Dory, trained with the loop from the start, gets real gains from its second loop on NVIDIA's numbers: SWE-bench Verified 50.3 → 59.5. On my RTX 3060 at 8K context it runs at 52 / 35 / 21 tokens per second at 1 / 2 / 4 loops, and VRAM goes from 3.8 GB to 4.1 GB at two loops.
- Its knowledge score stays at 10 whether it loops once or four times. A loop adds compute to apply what a model knows. It does not add knowledge.

The test results are mine, from my own runs. Dory's benchmark scores are NVIDIA's. The GPT-6.1 Sol claims are rumours: The Information's report, a Microsoft model-card line that was removed within hours, and a LessWrong analysis. OpenAI has not confirmed any of it.

⏱️ CHAPTERS
0:00 Can running AI in a loop make it smarter?
0:31 Why is everyone looping? (the GPT-6.1 Sol rumour)
3:53 How does a loop work?
5:23 What if I just run it twice?
6:58 How do you loop it safely?
9:44 Wait, just paste it twice?
12:09 Isn't that just thinking?
13:58 Just keep looping: NVIDIA's Dory on one RTX 3060
17:45 So, does it get smarter?

🧪 RUN DORY YOURSELF (llama.cpp)
Dory support is in NVIDIA's draft pull request, not in mainline llama.cpp yet.
1. Build llama.cpp from the PR branch: https://github.com/ggml-org/llama.cpp/pull/30306 (branch dory-support; the model card pins commit 98a74c97ea09ac72f6ceda1559808fc0a2f447ce)
2. Download the GGUF (dory-q5_k_m.gguf, 3.67 GB): https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-GGUF
3. Run it at two loops (the file defaults to four; the extra two mostly cost speed):
   --override-kv "dory.num_loops=int:2,dory.recurrent_kv_cache_mode=str:per_loop" --flash-attn off

🔗 LINKS
▶ Dory model card (NVIDIA): https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16
▶ Training-Free Looped Transformers (the paper I followed): https://arxiv.org/abs/2605.23872
▶ Prompt Repetition (pasting the question twice): https://arxiv.org/abs/2512.14982
▶ LessWrong, GPT-6.1 Sol nearly matches the no-CoT performance of GPT-6 Astra: https://www.lesswrong.com/posts/LqSZZAriGqgsGDQe3/gpt-6-1-sol-nearly-matches-the-no-cot-performance-of-gpt-6
▶ The Information, OpenAI Technique in 'Astra' Model Sparks Security Concerns: https://www.theinformation.com/articles/secret-technique-behind-openais-astra-model-sparks-security-concerns
▶ TechCrunch on the same report: https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/
▶ Other looped models: Ouro https://huggingface.co/ByteDance/Ouro-1.4B · Huginn https://huggingface.co/tomg-group-umd/huginn-0125 · Nanbeige4.2 https://huggingface.co/Nanbeige/Nanbeige4.2-3B

🛠️ THE RIG
Qwen3-4B (transformers, BF16) and Dory 4B (llama.cpp, Q5_K_M) on one RTX 3060 12GB
Qwen3.6-35B-A3B (llama.cpp, patched for looping) across two RTX 3060 12GB
The machine: Ryzen 9 7900X · 64GB DDR5 · two RTX 3060 12GB

💬 If you run Dory on your own card, tell me in the comments which GPU you used and how many loops you kept.

#localai #ai  #localllm  #loopedtransformer #llamacpp  #nvidia  #dory  #qwen  #rtx3060  #llm

#### Tags
`localai`, `codacus`, `homelab`, `ai`, `gguf`, `qwen`, `llama.cpp tutorial`, `looped transformers`, `recurrent depth`, `looped LLM`, `NVIDIA Dory`, `run AI locally`, `llama cpp`, `llamacpp`, `local ai`, `ai agent`, `ai coding`, `offline ai`, `self hosted llm`

#### URLs
- https://github.com/ggml-org/llama.cpp/pull/30306
- https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-GGUF
- https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16
- https://arxiv.org/abs/2605.23872
- https://arxiv.org/abs/2512.14982
- https://www.lesswrong.com/posts/LqSZZAriGqgsGDQe3/gpt-6-1-sol-nearly-matches-the-no-cot-performance-of-gpt-6
- https://www.theinformation.com/articles/secret-technique-behind-openais-astra-model-sparks-security-concerns
- https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/
- https://huggingface.co/ByteDance/Ouro-1.4B
- https://huggingface.co/tomg-group-umd/huginn-0125
- https://huggingface.co/Nanbeige/Nanbeige4.2-3B
