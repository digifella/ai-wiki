---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 1c5425c28b902ec12cf1
suggested-topic: "Tools, Platforms & Infrastructure"
domain: "ai-agents"
title: "Hy-Memory-30B-A3B + Hy Memory: Local Memory Writer for AI Agents"
date: 2026-10-26
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-26-QznWfqdbOj0-Hy-Memory-30B-A3B-Hy-Memory-Local-Memory-Writer-for-AI-A"
---
## Hy-Memory-30B-A3B + Hy Memory: Local Memory Writer for AI Agents
**Clip title:** Hy-Memory-30B-A3B + Hy Memory: Local Memory Writer for AI Agents
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=QznWfqdbOj0

### Summary
The video discusses Hy-Memory-30B-A3B, a 30-billion parameter open-source model developed by Tencent. The speaker highlights its role in replacing general Large Language Models (LLMs) inside memory frameworks to decide what information to store and how to update it. The model serves as Tencent’s memory engine and SDK, and the speaker walks through installing and testing it locally using a single GPU (NVIDIA H100) running Ubuntu and vLLM.

The speaker tests the model by setting up a script that creates a high-memory client in pro mode. The script adds facts—such as an individual living in Seattle and later moving to Sydney—and queries the model to see if it correctly updates its memory. The output demonstrates that the model successfully replaces outdated information with a new "supersede" note, updating its profile and job memory history accordingly. 

According to benchmarks presented in the video, Hy-Memory-30B-A3B scored 55.49 overall, outperforming models like Claude Opus 5, DeepSeek V4.1, and Qwen. The training process involves a two-stage approach: memory on-policy distillation using a student model and frozen teacher model, followed by attributed memory reinforcement learning using a judge model and answer model. The speaker concludes that the model is impressive, open-sourced under an Apache 2.0 license, and plans to use it in production environments.

### Video Description & Links
#### Description
Hands-on test of Tencent’s Hy-Memory-30B-A3B, an open model built to write AI agent memory, run locally with vLLM and the Hy Memory SDK.

#hymemory 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 Intro and model card
0:45 Hy Memory
0:58 Installing Hy Memory
2:25 What we will do and how Hy Memory works
3:40 Connecting the local model and embeddings
4:15 The test script
4:49 Running the test
6:55 Benchmarks and training diagrams
7:55 Verdict

▶ https://huggingface.co/tencent/Hy-Memory-30B-A3B

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/tencent/Hy-Memory-30B-A3B
