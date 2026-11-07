---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 115a0658442c25764731
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "What Is LLM Inference? How AI Models Generate Responses"
date: 2026-10-23
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-23-615-yWyS1n0-What-Is-LLM-Inference-How-AI-Models-Generate-Responses"
---
## What Is LLM Inference? How AI Models Generate Responses
**Clip title:** What Is LLM Inference? How AI Models Generate Responses
**Author / channel:** IBM Technology
**URL:** https://www.youtube.com/watch?v=615-yWyS1n0

### Summary
Sure, here is a summary of the video content:

The video discusses the concept of LLM inference, which is the process of taking a trained model and running it against new input to produce an output. Inference happens every time someone sends a message to a model, as opposed to training, which only happens once. The speaker, Grace Ableidinger, explains the two distinct phases of LLM inference: prefill and decode.

During the prefill phase, the model reads the entire prompt at once and builds an understanding of it, called the key-value cache. This is a running memory of everything it's read so far, and without it, the model would have to reprocess your entire conversation over again for each token it wants to output. The prefill phase is compute-bound, meaning it takes huge bursts of parallel math, so its speed is limited by how much raw computation the hardware can support.

The KV cache is then passed over to the decode phase, where the model's response is generated one token at a time. On each step of decode, the model runs a forward pass and produces a probability distribution over every token in its vocabulary. The model then refers back to the entire KV cache to remember the information it learned in prefill. This step is memory-bandwidth bound, meaning its speed isn't limited by how much math it can do, but by how fast data can move out of memory.

In conclusion, LLM inference is the machinery that sits between a trained model and a product people can actually use in real time. It involves scheduling requests into batches, routing them to hardware, and processing them through a compute-bound prefill phase and a memory-bandwidth-bound decode phase.

### Video Description & Links
#### Description
Learn more about LLM Inference here → https://ibm.biz/~CCvvB5TvB

Every LLM response starts with much more than a prompt. Grace Ableidinger explains LLM inference, from tokenization and GPU batching to KV cache, prefill, and decode. Learn how AI models turn static weights into real-time responses.

 00:00 – Understand What LLM Inference Actually Does
 01:15 – See How LLM Inference Engines Serve AI Models
 01:43 – Follow an LLM Request from API to Model
 02:15 – Turn Prompts Into Tokens with Tokenization
 02:59 – Route LLM Requests to GPU Hardware
 03:30 – Increase LLM Throughput with Continuous Batching
 04:23 – Understand LLM Prefill and KV Cache
 05:24 – See How Decode Generates Tokens
 06:18 – Measure LLM Latency with TTFT and ITL
 06:59 – Connect the Full LLM Inference Pipeline

AI was used in the creation of the transcript and metadata for this video.

#llm #aimodels #aiinference #ai #aiengineering 
---------------------------------------------------------------------------------------------------------
Find us on YouTube:

#### Tags
`IBM`

#### URLs
- https://ibm.biz/~CCvvB5TvB
