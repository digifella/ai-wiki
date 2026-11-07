---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 803c2cb3f13268fc0a2b
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "DeepSeek Just Open-Sourced How It Serves 155T Tokens a Day"
date: 2026-10-22
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-22-esdRFXgXaaQ-DeepSeek-Just-Open-Sourced-How-It-Serves-155T-Tokens-a-D"
---
## DeepSeek Just Open-Sourced How It Serves 155T Tokens a Day
**Clip title:** DeepSeek Just Open-Sourced How It Serves 155T Tokens a Day
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=esdRFXgXaaQ

### Summary
Here is a summary of the video:

**Main Topic:**
The video explores "DeepInfer," an open-source inference framework created by DeepSeek, designed to serve AI models to millions of users efficiently and cost-effectively. It examines the architecture, challenges, and optimization techniques used in scaling AI model inference.

**Key Points Discussed:**
* **Serving Scale & Performance:** According to the speaker, DeepSeek's clusters handle roughly 155 trillion tokens per day. Serving models at this scale requires separating the tasks of prompt prefilling (reading the prompt) and decoding (writing the answer) across different hardware setups.
* **Prompt Caching:** DeepSeek uses a KV cache to store processed prompts on SSDs for days (up to 3 days for agents and 7 days for chat), resulting in a high cache hit rate of 96%. This significantly reduces computation time and API costs for repetitive prompts.
* **Prefill and Decode Optimization:** Prefill handles heavy computation using standard GPU clusters, while decode handles memory-intensive token generation across specialized GPU setups. The system uses techniques like SWA (Sliding Window Attention) bounded replay and confidence-guided speculative decoding to improve throughput and reduce latency.
* **Batch-Invariant Mode:** The speaker discusses how standard batch processing can cause slight output variations due to floating-point rounding differences. DeepInfer includes a "batch-invariant" mode to ensure consistent outputs, though it is slower and turned off by default.
* **Limitations:** The video notes that DeepInfer is not designed for out-of-the-box local use with custom hardware; its kernels are built specifically for NVIDIA data center GPUs (such as Blackwell chips), and full API server infrastructure has not been publicly released yet.

**Conclusions and Takeaways:**
The speaker concludes that large-scale AI inference is primarily about maximizing efficiency—avoiding redundant work and ensuring GPUs never sit idle. Key takeaways for developers include the benefits of prompt prefix stability for cost reduction and the separation of compute-heavy prefill and memory-heavy decode tasks.

### Video Description & Links
#### Description
DeepSeek just open-sourced DeepInfer, the inference engine behind its own API, along with a detailed write-up of how it serves DeepSeek V4.1 Flash at scale: 155 trillion tokens a day from a single cluster. In this video we follow one request through the system: deepseek-recipe tokenization and prompt-injection protection, a KV cache that DeepSeek keeps for days (96% of input tokens are cache hits), prefill and decode on different machines, expert parallelism across 64+ GPUs, DSpark speculative decoding, and batch-invariant inference. Then I test deepseek-recipe and the temperature-0 batching effect on my own Mac, and explain why DeepInfer won't run on a DGX Spark.

DeepInfer (GitHub): https://github.com/deepseek-ai/DeepInfer
deepseek-recipe (GitHub): https://github.com/deepseek-ai/deepseek-recipe
DeepSeek's deployment write-up (Chinese): https://zhuanlan.zhihu.com/p/2095560295930508953
DeepSeek V4.1 Flash 1017 weights: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
DeepSeek API pricing (cache hit vs miss): https://api-docs.deepseek.com/quick_start/pricing

Related videos:
Speculative Decoding Explained: DeepSeek DSpark: https://www.youtube.com/watch?v=eFgknPFK-g0
Run a 284B Model in 128 GB (DwarfStar): https://www.youtube.com/watch?v=9gHcmhUDJfw

Chapters
00:00 DeepInfra
01:21 Prefill vs Decode Basics
03:07 Request Flow and Token Safety
04:31 KV Cache and Prefill Tricks
07:31 Decode at Scale MoE and Speculation
09:17 Batch Invariance and Real Limits
12:31 Hands On Tests and Key Takeaways

#### Tags
`AI Agents`, `Agent Harness`, `Claude Code`, `Local LLMs`, `Multimodal RAG`, `Qwen`, `DeepSeek`, `Gemini`, `vLLM`, `AI Engineering`, `codex`, `Opus`, `Fable`, `GPT Astra`, `Gemini 4`, `Argon`

#### URLs
- https://github.com/deepseek-ai/DeepInfer
- https://github.com/deepseek-ai/deepseek-recipe
- https://zhuanlan.zhihu.com/p/2095560295930508953
- https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
- https://api-docs.deepseek.com/quick_start/pricing
- https://www.youtube.com/watch?v=eFgknPFK-g0
- https://www.youtube.com/watch?v=9gHcmhUDJfw
