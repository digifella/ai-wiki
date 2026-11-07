---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 24506bf49a7111fb875f
suggested-topic: "Undecided"
domain: "ai-agents"
title: "AREX-2 - The Harness in the Model"
date: 2026-11-07
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-07-C9HS3zMrGo0-AREX-2---The-Harness-in-the-Model"
---
## AREX-2 - The Harness in the Model
**Clip title:** AREX-2 - The Harness in the Model
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=C9HS3zMrGo0

### Summary
Here's a clear, well-structured summary of the video content:

### Main Topic
The video discusses AREX-2, a 27 billion open-weight model by the Beijing Academy of Artificial Intelligence (BAAI), which focuses on self-improving agents through long-horizon reflective tasks.

### Key Points Discussed
- **AREX-2 Overview**: AREX-2 is a fine-tune of the Qwen3.8-27B model designed for long-running agent work. It achieves high scores on machine learning engineering and algorithmic programming benchmarks.
- **Key Features of AREX-2**: The model incorporates "reflection" (iterative attempts to improve based on feedback) and "long-horizon execution" (sustaining improvement over multiple rounds and hours).
- **Training Paradigm**: AREX-2 uses supervised fine-tuning on trajectories from ML engineering and algorithmic programming tasks, keeping failures in the training data to learn how to recover from mistakes.
- **Performance**: On benchmarks like MLE-bench Lite and Frontier-CS, AREX-2 outperforms many larger models, demonstrating the effectiveness of its self-improvement paradigm.

### Conclusions and Takeaways
The speaker concludes that AREX-2 represents a shift towards moving loops (like retry, keep best, stop) from the harness into the model itself. The model's success highlights the importance of combining reflection with long-horizon execution and provides valuable lessons for building and fine-tuning AI agents.

### Video Description & Links
#### Description
In this video, I go through AREX-2, a new 27B open-weights model from BAAI, fine-tuned from Qwen3.8-27B built to run the try, check and retry loop itself rather than leaving it all to your harness. 

Paper: https://arxiv.org/abs/2609.38288
HF Link: https://huggingface.co/BAAI/AREX-2
GitHub: https://github.com/VectorSpaceLab/AREX-2

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
0:00 Intro
0:52 AREX-2: a 27B Qwen fine-tune
1:38 Who built it
2:24 Core idea
2:44 Reflection and long horizon
5:41 The three-step data pipeline
7:08 Benchmarks
8:35 Skills vs training
11:30 Is this really RSI?
12:32 Testing it: Round Lab
14:42 Takeaways

#### Tags
`agent harness`, `AI agent harness`, `self improving agent harness`, `AREX-2`, `BAAI AREX-2`, `AREX 2 model`, `Qwen3.8-27B`, `Qwen3.8 27B`, `Qwen 3.8 27B`, `Qwen3.8-27B fine-tune`, `self improving agent`, `self improving AI`, `AI agent loop`, `loop engineering`, `recursive self improvement`, `test-time scaling`, `long horizon agents`, `long running AI agent`, `agent skills`, `open weights model`, `local AI agent`, `MLE-bench`, `GPT-5.6 Sol`, `DeepSeek harness`, `HP ZGX Fury`

#### URLs
- https://arxiv.org/abs/2609.38288
- https://huggingface.co/BAAI/AREX-2
- https://github.com/VectorSpaceLab/AREX-2
- https://github.com/samwit/llm-tutorials
