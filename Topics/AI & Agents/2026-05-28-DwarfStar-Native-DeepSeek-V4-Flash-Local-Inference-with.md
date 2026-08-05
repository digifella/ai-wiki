---
wiki-ingested: true
title: "DwarfStar: Native DeepSeek V4 Flash Local Inference with Persistent KV Cache"
date: 2026-05-28
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-05-28 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## DwarfStar: Native DeepSeek V4 Flash Local Inference with Persistent KV Cache
**Clip title:** DwarfStar: Run [[entities/deepseek-v4|DeepSeek V4]] Locally with DS4 at 34 tok/s
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=xOYs8QHu19Y

### Summary
The video introduces DwarfStar, a new, self-contained native [[concepts/inference-engine|inference engine]] optimized specifically for DeepSeek V4 Flash. Unlike generic GGUF runners or Llama.cpp wrappers, DwarfStar is built from scratch with its own CUDA and Metal backends, a unique KV cache system that spills to disk for [[concepts/session|session]] [[concepts/data-persistence|persistence]], a built-in HTTP server supporting [[entities/openai|OpenAI]] and [[entities/anthropic-institute|Anthropic]] APIs, and a native [[concepts/coding|coding]] [[entities/agent|agent]] for in-process inference with zero socket overhead. This specialized [[concepts/design|design]] aims to provide a tightly integrated and efficient [[concepts/solution|solution]] for running [[concepts/large-language-model-llm|large language models]], particularly on high-[[concepts/memory|memory]] machines.

The [[concepts/architecture|architecture]] of DwarfStar, as illustrated in the video, comprises three main components: model [[concepts/weights|weights]], the inference engine itself, and clients. Model weights are stored in a special quantized format that only DwarfStar understands. The core inference engine handles GPU backends (Metal, CUDA, ROCm), uses "[[concepts/human-cognition|thinking]] [[concepts/nodes|nodes]]" for processing, and crucially features a dual KV cache. This cache stores active sessions in RAM but flushes them to SSD, allowing sessions to survive restarts and enabling rapid loading of pre-computed prompts. Various clients, including [[concepts/ai-assisted-coding|Claude Code]], OpenClaw/Codex, and any [[concepts/openai-api|OpenAI API]] client, can interact with DwarfStar locally as if it were a cloud endpoint.

A practical demonstration involved building DwarfStar on an Ubuntu system with an [[concepts/nvidia-h100|NVIDIA H100]] GPU (80GB VRAM) and attempting to run a DeepSeek V4 Flash model. After resolving a minor GCC compiler issue during compilation, the presenter downloaded the Q2-imatrix version of the DeepSeek model, which is a specialized 2-bit quantized model calibrated for quality. However, the subsequent smoke test failed due to an "out of memory" error, as the 80GB VRAM on the H100 was insufficient for the model, which requires at least 96GB or 128GB for optimal performance.

The video highlights several important takeaways and caveats. DwarfStar is considered beta-quality [[concepts/software|software]] and is primarily optimized for Apple Metal, targeting MacBooks and Mac Studios with high unified memory (96GB+). While CUDA is supported, it receives less [[concepts/attention-mechanisms|attention]], and [[concepts/performance-benchmarks|performance benchmarks]] shown in the video indicate Apple [[concepts/silicon|Silicon]] outperforms a [[entities/dgx-spark|DGX Spark]] G810 with 128GB for generation [[concepts/speed|speed]]. Crucially, DwarfStar only works with specific GGUF [[concepts/files|files]] published for the project, meaning users cannot simply load any random DeepSeek GGUF found online. This specialized approach, while offering deep [[concepts/integration|integration]] and performance benefits for its target [[concepts/hardware|hardware]], implies a restricted ecosystem for models and a need for significant memory resources, especially for CUDA users.

### Video Description & Links
#### Description
Run DeepSeek V4 Flash locally using DwarfStar (DS4), a brand new purpose-built inference engine with disk KV cache, multi-API server, and native coding agent support.

🔥 Get 50% Discount on any A6000 or A5000 GPU rental, use following link and coupon:

https://bit.ly/fahd-mirza
Coupon code: FahdMirza

🔥 Buy Me a Coffee to support the channel: https://ko-fi.com/fahdmirza

#dwarfstar #ds4 

PLEASE FOLLOW ME: 
▶ LinkedIn:  https://www.linkedin.com/in/fahdmirza/
▶ [[entities/youtube|YouTube]]: https://www.youtube.com/@fahdmirza
▶ Blog: https://www.fahdmirza.com

RESOURCES:

▶ https://github.com/antirez/ds4

All rights reserved © Fahd Mirza

#### URLs
- https://bit.ly/fahd-mirza
- https://ko-fi.com/fahdmirza
- https://www.linkedin.com/in/fahdmirza/
- https://www.youtube.com/@fahdmirza
- https://www.fahdmirza.com
- https://github.com/antirez/ds4

## Related Concepts
- [[concepts/deepseek-v4-flash|DeepSeek V4 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek_V4_Flash)
- [[concepts/inference-optimization|KV Cache]] — [Wikipedia](https://en.wikipedia.org/wiki/KV_Cache)
- [[concepts/cuda|CUDA]] — [Wikipedia](https://en.wikipedia.org/wiki/CUDA)
- [[concepts/metal|Metal]] — [Wikipedia](https://en.wikipedia.org/wiki/Metal)
- [[concepts/openai-api|OpenAI API]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI_API)
- [[concepts/local-model|Anthropic API]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic_API)
- [[concepts/local-inference|Local Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Inference)
- Persistent KV Cache — [Wikipedia](https://en.wikipedia.org/wiki/Persistent_KV_Cache)
- Disk KV Cache — [Wikipedia](https://en.wikipedia.org/wiki/Disk_KV_Cache)
- CUDA Backend — [Wikipedia](https://en.wikipedia.org/wiki/CUDA_Backend)
- Metal Backend — [Wikipedia](https://en.wikipedia.org/wiki/Metal_Backend)
- ROCm Backend — [Wikipedia](https://en.wikipedia.org/wiki/ROCm_Backend)
- [[concepts/openai-api|OpenAI API Compatibility]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI_API_Compatibility)
- [[concepts/anthropic-api-compatibility|Anthropic API Compatibility]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic_API_Compatibility)
- Native Coding Agent — [Wikipedia](https://en.wikipedia.org/wiki/Native_Coding_Agent)
- 2-bit [[concepts/parameter-reduction|Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/2-bit_Quantization)
- Imatrix Calibration — [Wikipedia](https://en.wikipedia.org/wiki/Imatrix_Calibration)
- Unified Memory — [Wikipedia](https://en.wikipedia.org/wiki/Unified_Memory)
- [[concepts/contextual-window|Session Persistence]] — [Wikipedia](https://en.wikipedia.org/wiki/Session_Persistence)
- [[concepts/model-weights|Model Weights]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Weights)
- HTTP Server — [Wikipedia](https://en.wikipedia.org/wiki/HTTP_Server)

## Related Entities
- [[entities/fahd-mirza|Fahd Mirza]] — [Wikipedia](https://en.wikipedia.org/wiki/Fahd_Mirza)
- DwarfStar — [Wikipedia](https://en.wikipedia.org/wiki/DwarfStar)
- [[entities/deepseek|DeepSeek]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)
- [[entities/nvidia|NVIDIA]] — [Wikipedia](https://en.wikipedia.org/wiki/NVIDIA)
- [[entities/apple|Apple]] — [Wikipedia](https://en.wikipedia.org/wiki/Apple)
- [[entities/claude-code|Claude Code]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Code)
- [[entities/openclaw|OpenClaw]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw)
- [[entities/codex|Codex]] — [Wikipedia](https://en.wikipedia.org/wiki/Codex)
- [[entities/ubuntu|Ubuntu]] — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- [[entities/gcc|GCC]] — [Wikipedia](https://en.wikipedia.org/wiki/GCC)
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- GGUF — [Wikipedia](https://en.wikipedia.org/wiki/GGUF)