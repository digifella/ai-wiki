---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: b975a48906cc2396fa19
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Apex-35B Locally: A Model Built by AI Research That Improves Itself"
date: 2026-11-18
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-18-tYIvQRlFM6s-Apex-35B-Locally-A-Model-Built-by-AI-Research-That-Impro"
---
## Apex-35B Locally: A Model Built by AI Research That Improves Itself
**Clip title:** Apex-35B Locally: A Model Built by AI Research That Improves Itself
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=tYIvQRlFM6s
**Credibility:** Commentary (tier 1 of 5). YouTube video from Fahd Mirza: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
Apex Intelligence has released its first AI model, Apex-35B-v1.0, built on Qwen 3.6 using a sparse Mixture-of-Experts architecture. The model contains 35 billion parameters, with approximately 3 billion active per token, and supports up to 262,000 tokens of context under the Apache 2.0 license. The speaker tested the quantized version (Q8) locally on an NVIDIA H100 GPU using llama.cpp to evaluate its performance on real-world tasks.

The video details two evaluation tasks performed on the model: debugging a full-stack solar energy operations web application and analyzing a messy e-commerce dataset. For the first task, the model successfully identified and resolved a bug in the billing function (`energy_charge` in `api/app/billing.py`) that incorrectly implemented telescopic block pricing, resulting in inflated savings and payback estimates. For the second task, given a messy CSV file of online store orders, the model generated a cleaned dataset, a chart, and a findings report identifying key revenue sources and return rates.

The speaker highlights that Apex-35B-v1.0 compares favorably against larger models on various research benchmarks, often outperforming models many times its size, such as GLM-5.3 and DeepSeek-V3 on specific tasks. Overall, the speaker concludes that Apex-35B-v1.0 demonstrates strong reasoning capabilities and performance relative to its size, though minor outputs may require manual verification.

### Video Description & Links
#### Description
This video installs & tests Apex-35B-V1.0, recursive self-improvement.

#apex35b 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 Apex-35B-V1.0 Intro
0:40 Setup: llama.cpp and Hermes Agent
1:10 HelioRoof Bug Fix Test
4:50 Rain on Window Canvas Test
6:28 Messy CSV Cleaning Test
8:01 Benchmarks
8:37 Genetics Reasoning Test
10:01 Final Thoughts

▶ https://huggingface.co/Apexintelligence-AI/Apex-35B-V1.0

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/Apexintelligence-AI/Apex-35B-V1.0
