---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 8e09534868b3cf339580
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Qwen 3.8 27B vs Strata Coder - Local LLM battle"
date: 2026-10-24
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-10-24-xiMAxAQAfC4-Qwen-3.8-27B-vs-Strata-Coder---Local-LLM-battle"
---
## Qwen 3.8 27B vs Strata Coder - Local LLM battle
**Clip title:** Qwen 3.8 27B vs Strata Coder - Local LLM battle
**Author / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=xiMAxAQAfC4

### Summary
Here's a 4-paragraph summary of the video content:

The video features a coding battle comparing two AI models: the Qwen 3.8-27B base model and the Strata Coder (Qwen3.8-Flash-Next-GSQ-RCO-Coder) running through Strata. The speaker tests both models on performance, a seating planner application, wave simulation, prism relay, a diorama scene, and a Blender windmill asset. The benchmark tests measure prefill throughput (cold and cached) and decode throughput against generation length.

For the seating planner app, the 27B base model achieves 84.1% token usage with 3 compactions and 2 further prompts, producing a clean UI and solid results. The Strata Coder model uses 84.1% token usage as well but requires 3 compactions and 2 further prompts, resulting in a busier, less polished UI layout. In the neon wave simulation, both models successfully create interactive wave field sandboxes with working emitters, walls, and absorbers, though the speaker prefers the 27B model's UI.

In the prism relay puzzle test, both models successfully route lasers into receivers and generate new puzzles, with 27B using 33.6% context and Coder using 69.8% context. For the alley diorama 3JS test, 27B uses 92.8% context with truncation while Coder uses 40.4% context, but 27B delivers a more visually pleasing scene despite being dark. In the Blender windmill test, both models perform similarly in code and context usage, but 27B results in slightly better visual alignment in the rendered screenshots.

In conclusion, the speaker expresses a personal preference for the 27B base model over the Strata Coder, noting that 27B generally delivers more visually appealing UI and output results despite sometimes requiring more compaction or prompting. However, the speaker acknowledges that Strata is much faster and that model choice depends on whether users prefer waiting longer for better output quality or getting faster results with potential trade-offs in polish.

### Video Description & Links
#### Description
Try CodeRabbit today: https://coderabbit.link/luke-s-dev-lab-001

It's time for another head to head! I want to compare Qwen 3.8 27B at Q3 vs the Strata Coder (Qwen Flash Next GSQ RCO Coder), both of which can run at reasonable speeds on a 16GB GPU with 32GB RAM.

I run through a few tests which are:
1. Performance
2. Seat Planner
3. Wave Simulation
4. Prism Relay
5. Diorama
6. Blender Windmill

Model #1: https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
Model #2: https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF

#localllm #localai #homelab #llamacpp #homelab #qwen #3.8 #battle #gsq #rco #flash-next

Chapters:
0:00 Intro
0:14 Models
1:24 Tests Overview
1:51 System Specs
2:18 Performance
4:19 CodeRabbit
5:41 Seat Planner
8:45 Wave Simulation
11:29 Prism Relay
13:13 Diorama
15:57 Blender Windmill
17:49 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `strata`, `27b`, `3.8`, `battle`, `coder`, `gsq rco`

#### URLs
- https://coderabbit.link/luke-s-dev-lab-001
- https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
- https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF
