---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 5b8f06c85e07653f278a
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Do Diffusion LLMs Scale? Testing Mercury 3 + Decide"
date: 2026-10-21
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-21-bEO_QeJU7U0-Do-Diffusion-LLMs-Scale-Testing-Mercury-3-Decide"
---
## Do Diffusion LLMs Scale? Testing Mercury 3 + Decide
**Clip title:** Do Diffusion LLMs Scale? Testing Mercury 3 + Decide
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=bEO_QeJU7U0

### Summary
Here is a summary of the video content:

**Main Topic**
The video explores the evolution and performance of diffusion language models (DLMs), specifically highlighting Inception's new models—Mercury 3 and Mercury Decide—and how diffusion models offer a compelling alternative to traditional autoregressive large language models (LLMs) by balancing high intelligence with exceptional speed.

**Key Points Discussed**
*   **Autoregressive vs. Diffusion Models:** Traditional LLMs generate text token by token sequentially (like a typewriter), creating a bottleneck based on memory bandwidth. In contrast, diffusion language models start with a rough draft of the entire response and refine tokens in parallel across multiple passes (like an editor), significantly increasing output speed.
*   **Mercury 3:** This model represents Inception's high-speed intelligence (System 2) offering. It runs at over 1,000 tokens per second on NVIDIA Blackwell chips while matching or outperforming models in its class (such as GPT-6 Luna and Claude Haiku 5.5) on benchmarks like reasoning, instruction following, and agentic search.
*   **Mercury Decide:** Positioned as a decision model (System 1), Mercury Decide processes text or image inputs to make fast decisions (e.g., yes/no classifications, confidence scoring, support routing) in a fraction of a second. It performs strongly on benchmarks like legal and claim-verification evaluations while costing significantly less than comparable models.
*   **Scaling Diffusion Models:** Inception demonstrates that diffusion models can scale effectively for text generation. From Mercury 1 to Mercury 3, parameters increased by over 40x while model quality improved threefold.
*   **Real-World Application:** The video demonstrates a support-ticket pipeline combining Mercury Decide and Mercury 3, showing how combining fast System 1 classification with deep System 2 reasoning enables efficient, low-latency automated workflows.

**Conclusions and Takeaways**
According to the video, diffusion language models have proven that they can scale effectively for text generation, challenging the dominance of traditional autoregressive models. Models like Mercury 3 and Mercury Decide demonstrate that developers no longer have to sacrifice intelligence for speed, opening up new possibilities for real-time applications such as web agents, smart glasses, and high-volume data processing.

### Video Description & Links
#### Description
Inception's Mercury 3 is a diffusion LLM running at 1,000+ tokens/sec, and Mercury Decide is a decision model that can now read images. Here's how they compare, what the independent evals say, and how fast they really are.

Links:
Mercury 3 playground: https://chat.inceptionlabs.ai/
Inception API platform + docs: http://platform.inceptionlabs.ai/
Mercury 3 launch post: https://www.inceptionlabs.ai/blog/introducing-mercury-3

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
0:00 Intro
0:23 Diffusion LLMs
0:41 Mercury 3 Model
1:38 How diffusion LLMs work
4:35 Benchmarks vs GPT-6 Luna & Claude Haiku 5.5
5:06 Swarms of sub-agents
5:39 Speed: 1,068 tokens per second
6:15 OcTen: search on smart glasses
7:07 TinyFish, OpenAI compatibility & 1M context
7:48 Mercury Decide Model
8:38 Independent evals
9:39 Vision + the System 1 / System 2 pattern
9:58 Demo: watching diffusion generate text
12:29 Real-time speed test
12:52 5,000-word essay test
13:50 Agentic tool-calling tests
14:49 RAG test
16:13 Mercury Decide with images
19:28 Pipeline: Mercury Decide + Mercury 3
21:21 Launch pricing

#### Tags
`Inception Mercury 3`, `Mercury 3`, `Mercury 3 AI`, `Mercury 3 diffusion`, `Inception Labs`, `Inception Labs Mercury`, `diffusion LLM`, `diffusion language model`, `diffusion large language models`, `Mercury diffusion LLM`, `Mercury Decide`, `decision model`, `fastest LLM`, `1000 tokens per second`, `dLLM`, `Mercury Decide vision`, `OpenRouter`, `subagents`, `AI agents`, `GPT-6 Luna`, `Claude Haiku 5.5`, `Jev decision model`, `Mercury 2.5`

#### URLs
- https://chat.inceptionlabs.ai/
- http://platform.inceptionlabs.ai/
- https://www.inceptionlabs.ai/blog/introducing-mercury-3
- https://github.com/samwit/llm-tutorials
