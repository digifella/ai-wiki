---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 1506a8930d8d18b3cf80
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "DeepSeek GSQ-RCO Coder at 1-Bit Locally"
date: 2026-11-04
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-04-x8kK1UN5L-8-DeepSeek-GSQ-RCO-Coder-at-1-Bit-Locally"
---
## DeepSeek GSQ-RCO Coder at 1-Bit Locally
**Clip title:** DeepSeek GSQ-RCO Coder at 1-Bit Locally
**Author / channel:** Fahd Mirza
**URL:** https://www.youtube.com/watch?v=x8kK1UN5L-8

### Summary
In the video, Fahd Mirza introduces the DeepSeek V4.1-Flash-1017 coder model, which contains 763 billion parameters compressed down to one bit per parameter. This compression allows the model to run locally on a single GPU consuming around 95GB of VRAM.

Mirza explains how the compression technique works by removing half of the experts that aren't necessary for coding and agents, then using a file format called GGUF. He demonstrates running the model locally with llama.cpp and testing it on a full-stack restaurant app (Wildfare) where it fixes a bug in the food cost calculations. He also tests the model's coding capabilities by asking it to generate a 3D-looking Döner Kebab object with fire and lighting using HTML canvas.

Overall, the video shows that despite significant compression to one bit per parameter, the DeepSeek V4.1-Flash-1017 coder model maintains impressive performance for coding tasks and local deployment while consuming relatively low resources.

### Video Description & Links
#### Description
Running DeepSeek V4.1 Flash GSQ-RCO Coder, a 763B model pruned to about 1 bit, locally with llama.cpp and testing it on real code.

#gsq #rco #daslab #deepseek #deepseekcoder 

▶ LinkedIn:    / fahdmirza  
▶ YouTube:    / @fahdmirza  

0:00 What is DeepSeek V4.1 Flash GSQ-RCO Coder
1:12 bit DeepSeek Coder running locally
1:48 The Wildfare app and the hidden bug
3:10 Quantization and the size budget explained
5:15 Hermes agent tries to fix the bug
6:05 Döner kebab animation test
7:27 Nested SQL bug test
8:33 Verdict

▶ https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF

All rights reserved © Fahd Mirza

#### URLs
- https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF
