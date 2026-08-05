---
title: "DwarfStar: Native DeepSeek V4 Flash Local Inference with Persistent KV Cache"
date: 2026-05-28
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# DwarfStar: Native DeepSeek V4 Flash Local Inference with Persistent KV Cache
Generated: 2026-05-28 · API: Gemini 2.5 Flash · Modes: Summary

---

## DwarfStar: Native DeepSeek V4 Flash Local Inference with Persistent KV Cache
**Clip title:** DwarfStar: Run DeepSeek V4 Locally with DS4 at 34 tok/s
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=xOYs8QHu19Y

### Summary
The video introduces DwarfStar, a new, self-contained native inference engine optimized specifically for DeepSeek V4 Flash. Unlike generic GGUF runners or Llama.cpp wrappers, DwarfStar is built from scratch with its own CUDA and Metal backends, a unique KV cache system that spills to disk for session persistence, a built-in HTTP server supporting OpenAI and Anthropic APIs, and a native coding agent for in-process inference with zero socket overhead. This specialized design aims to provide a tightly integrated and efficient solution for running large language models, particularly on high-memory machines.

The architecture of DwarfStar, as illustrated in the video, comprises three main components: model weights, the inference engine itself, and clients. Model weights are stored in a special quantized format that only DwarfStar understands. The core inference engine handles GPU backends (Metal, CUDA, ROCm), uses "thinking nodes" for processing, and crucially features a dual KV cache. This cache stores active sessions in RAM but flushes them to SSD, allowing sessions to survive restarts and enabling rapid loading of pre-computed prompts. Various clients, including Claude Code, OpenClaw/Codex, and any OpenAI API client, can interact with DwarfStar locally as if it were a cloud endpoint.

A practical demonstration involved building DwarfStar on an Ubuntu system with an NVIDIA H100 GPU (80GB VRAM) and attempting to run a DeepSeek V4 Flash model. After resolving a minor GCC compiler issue during compilation, the presenter downloaded the Q2-imatrix version of the DeepSeek model, which is a specialized 2-bit quantized model calibrated for quality. However, the subsequent smoke test failed due to an "out of memory" error, as the 80GB VRAM on the H100 was insufficient for the model, which requires at least 96GB or 128GB for optimal performance.

The video highlights several important takeaways and caveats. DwarfStar is considered beta-quality software and is primarily optimized for Apple Metal, targeting MacBooks and Mac Studios with high unified memory (96GB+). While CUDA is supported, it receives less attention, and performance benchmarks shown in the video indicate Apple Silicon outperforms a DGX Spark G810 with 128GB for generation speed. Crucially, DwarfStar only works with specific GGUF files published for the project, meaning users cannot simply load any random DeepSeek GGUF found online. This specialized approach, while offering deep integration and performance benefits for its target hardware, implies a restricted ecosystem for models and a need for significant memory resources, especially for CUDA users.

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
▶ YouTube: https://www.youtube.com/@fahdmirza
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
