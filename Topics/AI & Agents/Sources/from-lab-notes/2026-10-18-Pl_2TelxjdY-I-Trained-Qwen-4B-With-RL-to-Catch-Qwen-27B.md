---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: e0d377066bb9c280bb16
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "I Trained Qwen 4B With RL to Catch Qwen 27B"
date: 2026-10-18
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-18-Pl_2TelxjdY-I-Trained-Qwen-4B-With-RL-to-Catch-Qwen-27B"
---
## I Trained Qwen 4B With RL to Catch Qwen 27B
**Clip title:** I Trained Qwen 4B With RL to Catch Qwen 27B
**Author / channel:** Prompt Engineering
**URL:** https://www.youtube.com/watch?v=Pl_2TelxjdY

### Summary
Sure! Here's a summary of the video content:

### Main Topic
The video explores the potential of using Reinforcement Learning (RL) in sandboxed environments to train small AI models (specifically a 4B parameter model) to perform comparably to much larger models (a 27B parameter model) using consumer hardware (specifically two NVIDIA DGX Spark units).

### Key Points Discussed
- **RL Environments**: The video explains what RL environments are (like a practice exam with an answer key) and highlights the availability of open-source environments such as Xiaomi's MiMo-V2.6 and Hugging Face's SmolDataEnvs.
- **The Experiment Setup**: The speaker tested training a 4B model (Qwen 3.5-4B) using LoRA on Kaggle datasets, comparing it against an untrained 4B model and a larger 27B model (Qwen 3.5-27B).
- **Results and Insights**:
  - The 4B model trained with RL significantly improved its score, closing more than half the performance gap with the 27B model.
  - Training on tasks at the "edge" of the model's capabilities yielded the best results.
  - Distillation (learning from the 27B model) combined with RL produced the best results among the small models on unseen datasets.
- **Key Takeaway**: RL does not teach a model new skills; instead, it teaches the model to finish jobs and correctly answer questions it already knows how to process.

### Conclusions and Takeaways
The speaker concludes that open RL environments run on modest hardware can significantly boost the performance of smaller AI models, helping them bridge the gap with much larger models. However, success depends on careful task selection (focusing on edge tasks), robust checkers, and avoiding pitfalls like reward hacking.

### Video Description & Links
#### Description
Can RL Make a 4B Model Compete with 27B? My Open RL Environment Experiments (GRPO, LoRA, DGX)

In this video I test whether open-source RL environments can make a small model perform closer to a much larger one by training Qwen 3.5 4B (with a LoRA) against Kaggle-style “small data” RL tasks on two DGX Sparks and comparing to Qwen 27B on a held-out exam. I explain what RL environments are (sandbox, tools, checker), why you need a strict checker to avoid reward hacking, and how GRPO works and only learns from tasks the model sometimes gets right. After weak gains from random tasks, I filter for “edge” tasks and get clear improvement, closing over half the gap, mostly by teaching the model to finish and answer correctly. Further RL hits a ceiling, so I try distillation from 27B, then RL on top, which gives the best results on unseen datasets. I share takeaways and put code, checker, and recipes on GitHub.

💻 Code: harness, strict checker, training scripts and results
https://github.com/PromtEngineer/smoldataenvs-grpo-spark

📚 Resources
SmolDataEnvs (the RL environments): https://huggingface.co/datasets/FineEnvs/SmolDataEnvs
FineEnvs: https://github.com/adithya-s-k/FineEnvs
Qwen3.5-4B: https://huggingface.co/Qwen/Qwen3.5-4B
Qwen3.5-27B: https://huggingface.co/Qwen/Qwen3.5-27B
TRL GRPO Trainer: https://huggingface.co/docs/trl/grpo_trainer
NVIDIA DGX Spark: https://www.nvidia.com/en-us/products/workstations/dgx-spark/
Xiaomi MiMo-V2.6 (open RL environments): https://mimo.mi.com/docs/en-US/news/latest/v2-6
TechCrunch on RL environments: https://techcrunch.com/2025/09/21/silicon-valley-bets-big-on-environments-to-train-ai-agents/

Let's Connect: 
📧 Business Contact: engineerprompt@gmail.com

00:00 Can RL Shrink the Gap
01:24 What RL Environments Are
02:45 Reward Hacking and Checkers
03:37 Where RL Fits in Training
04:32 GRPO and Learning Signal
05:17 Hardware Setup and Baselines
07:51 Training on Edge Tasks
09:39 Before and After Runs
11:37 Why Progress Stalls
12:38 Distillation from 27B
13:51 Best Combo Model Example
14:52 Takeaways and Wrap Up

#### Tags
`AI Agents`, `Agent Harness`, `Claude Code`, `Local LLMs`, `Multimodal RAG`, `Qwen`, `DeepSeek`, `Gemini`, `vLLM`, `AI Engineering`, `codex`, `Opus`, `Fable`, `GPT Astra`, `Gemini 4`, `Argon`, `gemini 4 argon`, `claude opus 5.5`, `llm`

#### URLs
- https://github.com/PromtEngineer/smoldataenvs-grpo-spark
- https://huggingface.co/datasets/FineEnvs/SmolDataEnvs
- https://github.com/adithya-s-k/FineEnvs
- https://huggingface.co/Qwen/Qwen3.5-4B
- https://huggingface.co/Qwen/Qwen3.5-27B
- https://huggingface.co/docs/trl/grpo_trainer
- https://www.nvidia.com/en-us/products/workstations/dgx-spark/
- https://mimo.mi.com/docs/en-US/news/latest/v2-6
- https://techcrunch.com/2025/09/21/silicon-valley-bets-big-on-environments-to-train-ai-agents/
