---
wiki-ingested: true
title: MTP + Ngram Stacked Speculative Decoding in Llama.cpp for LLM Inference
date: 2026-05-20
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: model-efficiency-compression
---
# MTP + Ngram Stacked Speculative Decoding in Llama.cpp for LLM Inference
Generated: 2026-05-20 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: [[concepts/summary|Summary]]

---

## MTP + Ngram Stacked Speculative Decoding in Llama.cpp for LLM Inference
**[[concepts/clip-title|Clip title]]:** MTP + Ngram Stacked in [[concepts/inference-engine|llama.cpp]] - [[concepts/qwen3-model|Qwen3]].6 27B at 56 tok/s Locally
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=71T4aQiwZ_I

### Summary
This video demonstrates how to significantly accelerate [[concepts/large-language-model-llm|Large Language Model (LLM)]] [[concepts/speed|inference speed]] using [[concepts/inference-engine|Llama.cpp]] by combining two [[concepts/speculative-inference|speculative decoding]] methods: [[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]] and Ngram-mod. The core problem addressed is the inherent slowness of standard [[concepts/llm-inference|LLM inference]], where the model generates one token at a time, requiring a full [[concepts/inference|forward pass]] through billions of [[concepts/parameters|parameters]] for each word. [[concepts/speculative-decoding|Speculative decoding]] bypasses this by using a faster "draft" mechanism to guess multiple [[concepts/tokens|tokens]] ahead, which the larger, more accurate model then verifies in a single pass.

The first method, Multi-Token Prediction (MTP), integrates prediction "heads" directly into the main model's [[concepts/weights|weights]]. This means no separate, smaller draft model needs to be downloaded or loaded, and it uses minimal extra [[concepts/vram|VRAM]]. In a previous video, MTP alone boosted the [[concepts/qwen-36-27b|Qwen 3.6-27B]] model's [[concepts/tokens|tokens]] per second (TPS) from 22 to 42, representing a substantial improvement in [[concepts/speed|inference speed]] with mathematically identical [[concepts/output|output]] quality.

The second method introduced is Ngram-mod, which operates on an entirely different principle. Unlike MTP, Ngram-mod does not involve a [[concepts/neural-network|neural network]] for drafting. Instead, it scans the [[concepts/text|text]] already generated in the current conversation for repeating patterns (like common [[concepts/code|code]] snippets, variable names, or function signatures). If a pattern is found, Ngram-mod proposes a sequence of draft tokens based on that pattern. This text-lookup approach is computationally inexpensive, essentially costing [[concepts/concept-of-nothingness|zero]], and can achieve acceptance rates exceeding 90% for repetitive tasks like [[concepts/code|code]] editing.

The true [[concepts/innovation|innovation]] highlighted in this video is the synergistic stacking of both MTP and Ngram-mod. MTP is leveraged for parts of the generation where the model is creating novel content or there's no recognizable pattern. Ngram-mod then seamlessly takes over when it identifies patterns in the ongoing [[concepts/text|text]], proposing drafts based on [[concepts/historical-context|historical context]]. The demonstration showcases the combined [[concepts/power|power]] of these two methods on a [[concepts/qwen-36-27b|Qwen 3.6-27B]] model [[concepts/running|running]] locally on an [[entities/nvidia|NVIDIA]] RTX A6000. By simply enabling MTP and Ngram-mod through specific Llama.cpp server [[concepts/flags|flags]], the inference speed jumped to an impressive 56.6 tokens per second, nearly tripling the baseline speed of 22 TPS achieved without either method, and further enhancing the 42 TPS achieved with MTP alone. This demonstrates a highly efficient way to accelerate [[concepts/local-llm|local LLM]] inference using mainline Llama.cpp without custom forks or additional model downloads.

### Video Description & Links
#### Description
Stack MTP and ngram-mod together in mainline llama.cpp and Qwen3.6-27B jumps from 22 to 56 tokens per second with no extra models and no custom builds.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#llamacpp #mtp #multitokenprediction #speculativedecoding #ngrammod 

PLEASE FOLLOW ME: 
▶ LinkedIn:  https://www.linkedin.com/in/fahdmirza/
▶ YouTube: https://www.youtube.com/@fahdmirza
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://github.com/ggml-org/llama.cpp/pull/22673

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.linkedin.com/in/fahdmirza/
- https://www.youtube.com/@fahdmirza
- https://www.fahdmirza.com
- https://github.com/ggml-org/llama.cpp/pull/22673

## Related Concepts
- [[concepts/multi-token-prediction-mtp|Multi-Token Prediction (MTP)]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Token_Prediction_%28MTP%29)
- [[concepts/speculative-decoding|Speculative Decoding]] — [Wikipedia](https://en.wikipedia.org/wiki/Speculative_Decoding)
- [[concepts/large-language-model|Large Language Model (LLM) Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Model_%28LLM%29_Inference)
- Ngram-mod — [Wikipedia](https://en.wikipedia.org/wiki/Ngram-mod)
- [[concepts/llm-conceptsinference-optimizationinference-speed|LLM Inference Acceleration]] — [Wikipedia](https://en.wikipedia.org/wiki/LLM_Inference_Acceleration)
- Draft Mechanism — [Wikipedia](https://en.wikipedia.org/wiki/Draft_Mechanism)
- Token Prediction Heads — [Wikipedia](https://en.wikipedia.org/wiki/Token_Prediction_Heads)
- [[concepts/pattern-matching|Pattern Matching]] — [Wikipedia](https://en.wikipedia.org/wiki/Pattern_Matching)
- Repetitive Text Detection — [Wikipedia](https://en.wikipedia.org/wiki/Repetitive_Text_Detection)
- [[concepts/pre-trained-llms|Local LLM Deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_LLM_Deployment)
- [[concepts/phi-models|GPU Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/GPU_Inference)
- Throughput Optimization — [Wikipedia](https://en.wikipedia.org/wiki/Throughput_Optimization)
- Zero-[[concepts/cost|Cost]] Drafting — [Wikipedia](https://en.wikipedia.org/wiki/Zero-Cost_Drafting)
- Server [[concepts/flags|Flags]] — [Wikipedia](https://en.wikipedia.org/wiki/Server_Flags)
- Mainline [[concepts/adoption|Implementation]] — [Wikipedia](https://en.wikipedia.org/wiki/Mainline_Implementation)
- Token Acceptance Rate — [Wikipedia](https://en.wikipedia.org/wiki/Token_Acceptance_Rate)
- Forward Pass Optimization — [Wikipedia](https://en.wikipedia.org/wiki/Forward_Pass_Optimization)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[entities/gemini|Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini)
- Qwen 3.6-27B — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.6-27B)
- NVIDIA RTX A6000 — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA_RTX_A6000)
- ggml-org — [Wikipedia](https://en.wikipedia.org/wiki/ggml-org)
- [[entities/github|GitHub]] — [Wikipedia](https://en.wikipedia.org/wiki/GitHub)
- LinkedIn — [Wikipedia](https://en.wikipedia.org/wiki/LinkedIn)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- Ko-fi — [Wikipedia](https://en.wikipedia.org/wiki/Ko-fi)
- A5000 — [Wikipedia](https://en.wikipedia.org/wiki/A5000)
- FahdMirza Blog — [Wikipedia](https://en.wikipedia.org/wiki/FahdMirza_Blog)