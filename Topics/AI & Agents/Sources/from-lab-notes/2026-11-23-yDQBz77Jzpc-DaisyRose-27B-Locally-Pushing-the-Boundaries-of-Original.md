---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 155bbf2ef0141c3620b1
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "DaisyRose 27B Locally: Pushing the Boundaries of Original Qwen"
date: 2026-11-23
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-23-yDQBz77Jzpc-DaisyRose-27B-Locally-Pushing-the-Boundaries-of-Original"
---
## DaisyRose 27B Locally: Pushing the Boundaries of Original Qwen
**Clip title:** DaisyRose 27B Locally: Pushing the Boundaries of Original Qwen
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=yDQBz77Jzpc
**Credibility:** Commentary (tier 1 of 5). YouTube video from Fahd Mirza: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video introduces DaisyRose-27B, a 27-billion parameter language and image model built on Qwen-3.8. Developed by RadixArk, the model underwent specialized post-training focused on long, multi-step agentic tasks. The video evaluates DaisyRose-27B through practical tests, comparing its performance and training methodology against the original Qwen model.

Key points include:
- DaisyRose-27B was trained using reinforcement learning exclusively, without supervised fine-tuning or distillation. The training process utilized approximately 1,200 hand-checked agent AI tasks, designed to address specific errors made by the base model.
- The training run spanned 18 days across 144 H200 GPUs, achieving significant improvements in training efficiency (57% lower cost and twice the end-to-end training speed compared to standard runs).
- Testing on a real-world full-stack application (Midlife Momentum dashboard) showed that DaisyRose-27B quickly identified and addressed bugs in the code.
- In a vision and code test, the model successfully interpreted an isometric illustration of cats, generated HTML/CSS/JS simulation code for a rolling ball of yarn, and produced natural physics and styling.
- A multilingual test challenged the model to generate distinct bikini brand names across 82 languages without language scripts, showing strong coverage and formatting, though some regional duplication occurred.
- A historical image analysis test demonstrated the model's capacity to describe an Assyrian stone relief, explain conqueror practices regarding scribes, and write a plausible first-person diary entry from a chained scribe.

Overall, the speaker concludes that DaisyRose-27B excels at long agentic workflows and complex multi-step reasoning, performing competitively with or ahead of larger models on specific coding and terminal-based benchmarks while operating efficiently on a single GPU.

### Video Description & Links
#### Description
This video installs & tests DaisyRose-27B which is RadixArk's first model: a multimodal reasoning model built on Qwen3.8-27B with reinforcement learning only.

#radixark #daisyrose 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 Intro
0:40 Bug Fix Test
3:35 Training Story
6:37 Image to Simulation Test
7:05 Benchmarks
9:39 Multilingual Names Test
10:42 Ancient History Test
12:31 Final Thoughts

▶ https://huggingface.co/RadixArk/DaisyRose-27B

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/RadixArk/DaisyRose-27B
