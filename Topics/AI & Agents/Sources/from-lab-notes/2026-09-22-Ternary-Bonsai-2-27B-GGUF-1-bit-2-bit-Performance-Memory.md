---
wiki-ingested: true
title: Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation
date: 2026-09-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
aliases:
  - "lab-notes/2026-09-22-Ternary-Bonsai-2-27B-GGUF-1-bit-2-bit-Performance-Memory"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Ternary Bonsai 2 27B GGUF 1-bit 2-bit Performance, Memory, Reasoning Evaluation
**Clip title:** Bonsai 2 27B tested - 16GB Local LLM setup
**Author / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=ZzLHGHMXkEw

### Summary
This video from [[entities/lukes-dev-lab|Luke's Dev Lab]] reviews [[concepts/system-one-model|Ternary Bonsai 2]] by [[entities/prism-ml|Prism ML]], a new 27B-class [[concepts/reasoning|reasoning]] model utilizing [[concepts/ternary-transformer-weights|ternary transformer weights]] for [[concepts/extreme-quantization|extreme quantization]]. The presenter aims to test Prism ML's bold claims: that the model is approximately 9.3 times smaller than its FP16 counterpart while retaining an impressive 98.2% of its intelligence, and achieves 47 tokens per second on an [[entities/apple|Apple]] M5 Max laptop. The review specifically examines the 1-bit (TQ1_0) and 2-bit (Q2_0) [[concepts/gguf|GGUF]] versions of the model, running them through a comprehensive suite of benchmarks for performance, [[concepts/memory|memory]] recall, [[concepts/reasoning|reasoning]], and various coding challenges using tools like HumanEval Remix, Kanban, Sand Physics, Dungeon Crawler, Blender, and Godot. The testing environment consists of an [[concepts/ubuntu|Ubuntu]] Server with an RTX 2000 Ada GPU (16GB VRAM target) and [[entities/llamacpp|Llama.cpp]] for model serving.

In terms of raw performance, the 2-bit (Q2_0) version generally showed better prefill throughput, particularly with cached KV, reaching nearly 147,000 tokens/second compared to the 1-bit (TQ1_0) version's 116,000 tokens/second. However, their decode speeds were almost identical, both averaging around 24-25 tokens per second. The [[concepts/memory|memory]] recall test, using a "Needle-in-a-Haystack" approach with a 256,608-token context, revealed significant weaknesses in both models; they struggled considerably to retrieve information, especially at 50% context depth, with overall pass rates of 60% (Q1) and 67% (Q2). Reasoning capabilities were a surprising highlight, as both models achieved a 100% pass rate on 'easy', 'medium', and 'hard' difficulty questions, though their performance dropped sharply for 'expert' level challenges. For Python coding tasks (HumanEval Remix), both models scored identically with 73 correct answers out of 100, demonstrating a consistent, albeit not outstanding, ability.

However, the models largely faltered in more [[concepts/complex-coding|complex coding]] and creative tasks. For frontend [[concepts/web-development|web development]] (Kanban), the Q1 version produced a functional but visually clunky app, while Q2 failed entirely. Sand Physics, a mathematical/algorithmic task, resulted in visual glitches for Q1 and a complete failure for Q2 due to code truncation. Dungeon Crawler saw moderate success, generating distinct map styles, but both Q1 and Q2 exhibited issues with raycasting and player movement, consuming a high number of tokens for their output. The Blender and Godot tests, designed for 3D asset creation and game development, were particularly disappointing; neither model managed to save a usable project file or create a functional, playable outcome, despite consuming hundreds of thousands of tokens and multiple "compaction" attempts to optimize context.

The presenter concludes that Ternary Bonsai 2, much like its predecessor, is a significant "letdown." He explicitly states that Prism ML's claims of retaining nearly 98.2% of FP16 intelligence are "clearly not true" based on his practical tests. While acknowledging the model's small footprint allows it to run comfortably on 16GB GPUs, he strongly advises users to opt for the larger, unquantized base model ([[entities/qwen|Qwen]] 27B) instead. Despite the base model's potentially slower token generation speed (e.g., 5 tokens/second vs. 25 tokens/second for Bonsai), it often yields dramatically superior results for a similar total wall-clock time, as Bonsai consumes excessive tokens to produce mediocre outputs.

### Video Description & Links
#### Description
In this video we're going to be look at version 2 of Bonsai from Prism ML. Does this version live up to its big claims?

I run through a few tests which are:
1. Performance
2. Memory
3. Reasoning
4. [[entities/openai|OpenAI]] Human Eval
5. Kanban
6. Sand Physics
7. Dungeon Crawler
8. Blender
9. Godot

Model: https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf

#localllm #localai #homelab #llamacpp #homelab #openai #qwen #27b #3.8 #bonsai #ternary #prismml

Chapters:
0:00 Intro
0:09 Model
1:34 Tests Overview
2:09 System Specs
2:55 Performance
4:17 Memory
5:18 Reasoning
6:03 HumanEval Remix
6:33 Kanban
8:02 Sand Physics
10:20 Dungeon Crawler
11:37 Blender
13:01 Godot
15:15 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `bonsai`, `ternary`, `prism`, `prism-ml`, `27b`

#### URLs
- https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf

## Related Concepts
- [[concepts/ternary-transformer-weights|ternary transformer weights]]
- [[concepts/extreme-quantization|extreme quantization]]
- [[concepts/1-bit-quantization|1-bit quantization]]
- [[concepts/1-bit-quantization|2-bit quantization]]
- [[concepts/gguf-format|GGUF format]]
- [[concepts/reasoning-model|reasoning model]] — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_model)
- [[concepts/system-one-model|memory efficiency]]
- [[concepts/inference-speed|inference speed]]
- [[concepts/apple-m5-chip|Apple M5 chip]]
- [[concepts/web-tools|local LLM]]
- [[concepts/web-tools|Ternary Bonsai 2]]
- [[concepts/1-bit-quantization|1-bit quantization (TQ1_0)]]
- [[concepts/1-bit-quantization|2-bit quantization (Q2_0)]]
- [[concepts/context-length|Context window]] recall
- [[concepts/local-llm-deployment|Local LLM deployment]]

## Related Entities
- [[entities/prism-ml|Prism ML]]
- [[entities/lukes-dev-lab|Luke's Dev Lab]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- Ubuntu Server — [Wikipedia](https://en.wikipedia.org/wiki/Ubuntu)
- Kanban — [Wikipedia](https://en.wikipedia.org/wiki/Kanban)
- Dungeon Crawler — [Wikipedia](https://en.wikipedia.org/wiki/Dungeon_crawl)