---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 802a2e2f917fc0d30ae7
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "Flint - The First RSI Coding Model?"
date: 2026-10-24
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-24-BsfjQDSeTwI-Flint---The-First-RSI-Coding-Model"
---
## Flint - The First RSI Coding Model?
**Clip title:** Flint - The First RSI Coding Model?
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=BsfjQDSeTwI

### Summary
Here is a summary of the video:

**Main Topic:**
The video discusses "Flint," a new Mixture of Experts (MoE) coding model developed by Recursive, an AI company co-founded by Richard Socher. Flint is designed for local inference on hardware like MacBooks and GPUs, offering significantly faster speeds compared to dense models like Qwen 3.8-27B.

**Key Points Discussed:**
*   **Performance and Speed:** Flint achieves up to 131 tokens per second on an Apple M4 Pro, making it about 10 times faster than Qwen 3.8-27B. It performs competitively on coding benchmarks like SWE-bench and LiveCodeBench, though it falls behind on some terminal benchmarks.
*   **Architecture:** Flint features 40 billion total parameters with only ~2.5 billion active parameters per token across 256 experts. It was designed using Recursive’s automated research system, the "Eureka Machine."
*   **Training and Innovations:** Recursive utilized automated architecture search, 4-bit quantization on the output layer with offline distillation, and custom GPU kernels (Metal megakernels) to optimize inference speed and reduce memory bottlenecks.
*   **Availability:** Flint is open-source under the Apache-2.0 license, with multiple quantization formats (BF16, INT4, GGUF, NVFP4) available on Hugging Face.

**Conclusions/Takeaways:**
Flint demonstrates that Mixture of Experts models can achieve near-dense model performance while running significantly faster on local hardware. While it may require more guidance for complex tasks compared to larger closed-source models, its speed and open-source availability make it a notable tool for local coding tasks. Recursive's approach highlights the potential of automated AI research in designing efficient model architectures.

### Video Description & Links
#### Description
In this video, I look at an interesting model from Recursive AI called Flint, which is their first public attempt at building a very fast mixture-of-experts model specifically for taking on the Qwen3.8 and similar coding models. They are using an RSI system to do this. 

HF: https://huggingface.co/RecursiveSI/flint
NVFP4: https://huggingface.co/RecursiveSI/flint-nvfp4-gguf

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
0:00 Intro
0:33 Flint
1:04 Built by the Eureka Machine in under 4 months
1:34 Why it's fast
3:02 Open weights: four official versions
3:22 Benchmarks vs Qwen 3.6 and Laguna XS
3:56 Flint vs Qwen 3.8 27B
4:22 The speed vs score chart
4:34 How to run it: Ollama, LM Studio, llama.cpp, vLLM
5:48 Who's behind Recursive
8:01 What the Eureka Machine actually is
10:45 How it built Flint: architecture search
13:08 Demo: NVFP4 on an RTX PRO 6000
16:13 Agent tasks and tool use
17:10 Which GPUs can run Flint
18:02 Takeaways

#### Tags
`Recursive Flint`, `Flint 40B`, `Flint coding model`, `Recursive AI`, `local coding model`, `local LLM`, `Qwen 3.8 27B`, `Eureka Machine`, `Richard Socher`, `mixture of experts`, `MoE vs dense`, `fastest local coding model`, `NVFP4`, `RTX PRO 6000`, `M4 MacBook Pro`, `Ollama`, `LM Studio`, `llama.cpp`, `vLLM`, `open weights`, `AI coding agent`, `automated AI research`, `recursive self-improvement`

#### URLs
- https://huggingface.co/RecursiveSI/flint
- https://huggingface.co/RecursiveSI/flint-nvfp4-gguf
- https://github.com/samwit/llm-tutorials
