---
selected-topic: "AI & Agents"
wiki-ready: true
review-status: "approved"
lab-review-id: 917e0c595127a2e54dfd
suggested-topic: "AI & Agents"
domain: "ai-agents"
title: "Inkling 2 Mini - The Qwen 27B Killer?"
date: 2026-11-28
source_type: youtube_summary
provider: "Google"
api: "Gemini 3.5 Flash-Lite"
modes: "Summary"
credibility_tier: 1
credibility_label: "Commentary"
type: "source-summary"
group: ""
aliases:
  - "lab-notes/2026-11-28-W8MYFyGxSas-Inkling-2-Mini---The-Qwen-27B-Killer"
---
## Inkling 2 Mini - The Qwen 27B Killer?
**Clip title:** Inkling 2 Mini - The Qwen 27B Killer?
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=W8MYFyGxSas
**Credibility:** Commentary (tier 1 of 5). YouTube video from Sam Witteveen: not edited or peer reviewed, so its claims are the speaker's own. Summary written by Gemini.

### Summary
The video discusses Thinking Machines' new release, **Inkling 2 Mini**, a smaller open-weights model designed to run on laptops. Based on a loop transformer architecture, the 26.4-billion-parameter model uses a mixture of experts and routes tokens back through layers several times, resulting in a compute-equivalent of 48 layers. While it beats Qwen3.8-27B on several benchmarks, the speaker suggests it may not replace Qwen for all users and use cases, though it represents an exciting step forward in open-weights model design.

### Key points discussed:
* **Architecture:** Inkling 2 Mini uses a loop transformer architecture, sending tokens back through 12 middle layers multiple times to increase compute capacity without adding layers.
* **Performance:** On paper, Inkling 2 Mini outperforms Qwen3.8-27B on many benchmarks, particularly in software engineering, agentic search, and visual grounding, but it trails on automation benchmarks.
* **Looping mechanism:** The model uses 24 layers divided into four blocks of six, with the middle 12 layers acting as a loop. This reduces memory usage while maintaining high compute capabilities, although context memory can grow similar to a 48-layer model.
* **Hands-on testing:** The speaker notes that Inkling 2 Mini is well-suited for deeper tasks like planning, diagnosing, and code review, but may require careful hand-off to other models for execution.

### Conclusions and takeaways:
* **Viability:** Inkling 2 Mini is a powerful open-weights model that can run locally on MacBooks with sufficient RAM, offering impressive performance in specific reasoning tasks.
* **Comparison with Qwen:** While it outperforms Qwen on several key metrics, Qwen remains a strong contender, and the choice between them depends on the specific job.
* **Future of looped models:** The release of Inkling 2 Mini highlights the potential of looped transformers and mixture-of-experts architectures, paving the way for future models that balance high performance with manageable size.

### Video Description & Links
#### Description
In this video I look at Thinking Labs's new local looped transformer Inkling 2 Mini a 26B MoE model that many are 

HF: https://huggingface.co/thinkingmachines/Inkling-2-Mini

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
0:00 Intro
1:19 Why an open looped model matters
1:50 Who is Thinking Machines?
3:03 The Inkling family
4:08 Benchmarks vs Qwen3.8-27B
4:53 1M context, Apache 2.0, 3.4B active
5:34 What is a loop transformer?
6:51 How Inkling 2 Mini’s loop works
7:52 Why the loop sits in the middle
8:44 How the passes connect
10:12 Research model: 1 to 5 passes
12:33 Loops don’t add knowledge
13:41 How to run it
14:43 Demo
15:34 Simple prompt: speed vs tokens
16:37 ARC-AGI test
17:56 AIME math problem
18:31 Starry Night: same prompt, 5 different pages
20:06 Trip Split app
21:01 Takeaways

#### Tags
`Inkling 2 Mini`, `Inkling 2 Mini vs Qwen 3.8 27B`, `Inkling 2 Mini Mac`, `Thinking Machines Inkling`, `Thinking Machines Lab`, `Inkling 2`, `looped transformer`, `looped transformers`, `loop transformer`, `Qwen3.8 27B`, `Qwen 3.8 27B`, `local LLM`, `run LLM on Mac`, `mixture of experts`, `open weights model`, `Apache 2.0 model`, `Mira Murati`, `HP ZGX Fury`, `Inkling2 Mini`, `Sam Witteveen`

#### URLs
- https://huggingface.co/thinkingmachines/Inkling-2-Mini
- https://github.com/samwit/llm-tutorials
