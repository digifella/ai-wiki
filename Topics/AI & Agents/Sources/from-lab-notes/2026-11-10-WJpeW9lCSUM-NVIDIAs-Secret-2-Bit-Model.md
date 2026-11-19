---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 342e9be85b74f7b6b6d8
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "NVIDIA's Secret 2 Bit Model"
date: 2026-11-10
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-10-WJpeW9lCSUM-NVIDIAs-Secret-2-Bit-Model"
---
## NVIDIA's Secret 2 Bit Model
**Clip title:** NVIDIA's Secret 2 Bit Model
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=WJpeW9lCSUM
**Credibility:** Commentary (tier 1 of 5). YouTube video from Sam Witteveen: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses the concept of lowering bit-widths in Large Language Models (LLMs) to make them more efficient for local execution on consumer hardware, particularly laptops and GPUs. The speaker highlights how traditional rules of thumb for local LLM deployment—such as the 4-bit limit where quality often degrades significantly—are being challenged by recent advancements in model pruning, post-training, and quantization-aware training (QAT).

The speaker examines NVIDIA’s Nemotron 3.5 Bolt model, a 74-billion parameter model quantized down to 2 bits to fit within a 24 GB memory budget. Despite breaking the traditional 4-bit rule, the Bolt model reportedly achieves competitive performance compared to models running at 4 bits. The video breaks down the three key steps NVIDIA used to create Bolt: model pruning (reducing parameter count using techniques like Star Elastic), post-training (including SFT and RL), and quantization-aware distillation (QAD) to recover accuracy at low bit-widths.

The video also touches upon other methods used by companies like Google, OpenAI, and Moonshot AI to compress models, emphasizing that how a model gets quantized matters just as much as the target bit-width itself. Models trained with quantization-aware training from the start tend to perform better than those simply rounded down after training. The speaker concludes that understanding the difference between post-training quantization and quantization-aware training is crucial for evaluating the real-world performance of low-bit models.

### Video Description & Links
#### Description
In this video, I look at a new model and a set of techniques that NVIDIA has used to make this 2-bit model perform at a level much better than expected. 

Research Report: https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/
HF: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
ParetoQ: https://arxiv.org/pdf/2502.02631

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
0:00 Intro
0:14 Microsoft’s secret 2-bit model
1:02 Nemotron 3.5 Bolt 74B-A9B
1:54 Why the recipe matters
3:00 How normal quantization works
3:43 Why going below 4-bit breaks
4:38 ParetoQ
5:31 Why 2-bit matters
7:04 Mixed precision
8:02 Stage 1: Pruning
9:23 Stage 2: Post-training
9:40 Stage 3: Quantization-aware training
11:48 NVIDIA’s twist: QAD
14:29 Demo on the ZGX Fury
16:00 Pelican SVG test
17:55 Agentic tool-calling tests
19:42 Concurrency tests
20:47 Which hardware Bolt is for
22:04 Conclusion

#### Tags
`Nemotron 3.5 Bolt`, `NVIDIA Nemotron Bolt`, `Nemotron Bolt 2-bit`, `NVIDIA 2-bit model`, `2-bit quantization`, `2-bit LLM`, `quantization aware training`, `QAT`, `quantization aware distillation`, `QAD`, `LLM quantization explained`, `4-bit vs 2-bit`, `Nemotron 3.5 Bolt 74B`, `74B in 24GB`, `run LLM locally`, `RTX Spark`, `Star Elastic`, `GGUF`, `IQ2_XXS`, `1-bit LLM`, `BitNet`, `REAP expert pruning`, `Gemma 4 QAT`, `Nemotron Bolt`, `Sam Witteveen`

#### URLs
- https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/
- https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
- https://arxiv.org/pdf/2502.02631
- https://github.com/samwit/llm-tutorials
