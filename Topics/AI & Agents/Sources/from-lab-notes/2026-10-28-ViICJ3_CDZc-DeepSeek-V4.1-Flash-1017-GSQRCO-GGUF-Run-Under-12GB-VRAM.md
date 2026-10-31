---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 8a886752cb604e000084
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "DeepSeek-V4.1-Flash-1017 GSQ+RCO GGUF: Run Under 12GB VRAM Locally"
date: 2026-10-28
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-28-ViICJ3_CDZc-DeepSeek-V4.1-Flash-1017-GSQRCO-GGUF-Run-Under-12GB-VRAM"
---
## DeepSeek-V4.1-Flash-1017 GSQ+RCO GGUF: Run Under 12GB VRAM Locally
**Clip title:** DeepSeek-V4.1-Flash-1017 GSQ+RCO GGUF: Run Under 12GB VRAM Locally
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=ViICJ3_CDZc

### Summary
The video presents "Sema," an interactive 3D simulation of a Sufi whirling dervish ceremony, built as a single HTML file without external libraries or tools. The speaker demonstrates running this model locally using an AI model called DeepSeek V4.1 Flash, featuring 763 billion parameters, and running under 12 GB of VRAM using llama.cpp.

The video explains two key techniques used to optimize the model for local deployment: **Gumbel-Softmax Quantization (GSQ)** and **Riemannian Constrained Optimization (RCO)**. GSQ converts large 16-bit weight numbers into smaller quantized weights (2 to 4 bits) by scoring multiple options and progressively narrowing down the best fit. RCO manages the size budget across different neural network layers, assigning more bits to sensitive layers and fewer bits to tolerant layers. Together, these methods allow massive models to run efficiently on local hardware while maintaining high benchmark accuracy.

The speaker concludes by showcasing the model's performance in a multilingual task, prompting it to generate TV channel names for animal documentaries across over 80 languages.

### Video Description & Links
#### Description
This video locally installs and explains DeepSeek-V4.1-Flash-1017 · GSQ-RCO GGUFs: Non-uniform GGUF quantizations of a 763B-parameter, 384-expert MoE, produced with GSQ and RCO.

#gsqrco #deepseeklocally 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 Sufi dervish animation made locally
1:10 Running it with Strata on 12 GB VRAM
1:19 What is DeepSeek V4.1 Flash GSQ-RCO
2:19 Benchmarks
2:55 Full weight vs quantized weight
3:45 RCO and the size budget
4:45 GSQ and rounding options
5:42 How RCO and GSQ work together
6:35 Multilingual Test
7:32 Final thoughts

▶ https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF
