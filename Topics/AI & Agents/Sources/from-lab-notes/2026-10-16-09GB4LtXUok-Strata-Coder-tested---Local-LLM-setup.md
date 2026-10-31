---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 9c3a7e065817a5cc7f2b
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Strata Coder tested - Local LLM setup"
date: 2026-10-16
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-16-09GB4LtXUok-Strata-Coder-tested---Local-LLM-setup"
---
## Strata Coder tested - Local LLM setup
**Clip title:** Strata Coder tested - Local LLM setup
**Author / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=09GB4LtXUok

### Summary
The video covers an evaluation of the "Strata" tool, specifically focusing on the **Qwen3.8-Flash-Next-GSQ-RCO-Coder** model by **ISTA-DASLab**, running on a 32GB RAM system with an RTX 2000 Ada and RTX 5090 GPU setup.

### **Main Topic & Benchmarks**
The speaker puts the Coder model through a series of demanding benchmarks to test its capabilities:
- **Performance & Memory:** Tested token generation speed and context retention. The model demonstrated strong performance, achieving ~42 tokens/sec on the RTX 2000 and ~182 tokens/sec on the RTX 5090, alongside a 100% pass rate in the 128k context memory test.
- **Reasoning & Python (HumanEval Remix):** The model achieved an 87.5% pass rate across varying difficulty tiers in logic and reasoning, and an impressive 99% pass rate (99/100) on the Python coding challenges.
- **Application & Creative Tasks (Kanban, Sand Physics, Dungeon Crawler, Blender, and Godot):** The model was tested on its ability to generate functional front-end apps, physics simulations, and 3D assets/game environments using MCP.

### **Key Takeaways & Conclusions**
- **Performance Strengths:** The speaker highlights the model's high throughput, excellent memory retention, and strong programming capabilities (especially in Python and reasoning). 
- **Challenges & Limitations:** While the model excelled at coding and data retrieval, complex tool integrations like Blender and Godot required some guidance and prompt engineering to fix minor bugs and ensure correct rendering or gameplay mechanics.
- **Overall Verdict:** The Strata Coder model is considered exceptionally fast, powerful, and capable, making it an impressive choice for developers, though complex multi-step tasks in graphical environments may require occasional hand-holding.

### Video Description & Links
#### Description
Okay okay, I am finally testing Strata! First up I am going to look at the "Coder" from the Strata GitHub page which is actually ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder. Let's see if this thing lives up to the hype.

I run through a few tests which are:
1. Performance
2. Memory
3. Reasoning
4. HumanEval Remix
5. Kanban
6. Sand Physics
7. Dungeon Crawler
8. Blender
9. Godot

Model: https://github.com/Niko1221/Strata/blob/main/docs/MODELS.md#coder

#localllm #localai #homelab #llamacpp #homelab #strata #qwen #flash-next #coder #gsm #rco

Chapters:
0:00 Intro
0:11 Model
1:32 Tests Overview
1:58 System spec
2:26 Performance - RTX 2000 16GB
3:05 Performance - RTX 5090 32GB
3:30 Memory
4:37 Reasoning
5:21 HumanEval Remix (python)
5:46 Kanban (frontend)
7:11 Sand Physics
8:36 Dungeon Crawler
9:21 Blender
11:56 Godot
14:48 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `3.8`, `flash-next`, `strata`, `32gb`

#### URLs
- https://github.com/Niko1221/Strata/blob/main/docs/MODELS.md#coder
