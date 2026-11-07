---
wiki-ingested: true
title: "Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning"
date: 2026-09-26
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
aliases:
  - "lab-notes/2026-09-26-Bonsai-2-27B-LLM-Q1Q2-Re-evaluation-Benchmarking-Perform"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Bonsai-2-27B LLM Q1/Q2 Re-evaluation: Benchmarking Performance, Memory, Reasoning
**Clip title:** Bonsai 2 27B tested - 16GB Local LLM setup
**Author / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=zLs2QG7lU7Q

### Summary
This video provides a detailed re-evaluation of the "Ternary-Bonsai-2-27B-[[concepts/gguf|gguf]]" [[concepts/large-language-model|large language model]] from [[entities/prism-ml|Prism ML]], comparing its Q1 and Q2 quantized versions. The presenter explains that this re-test was necessary because an earlier video had used an incorrect temperature setting (0.6 instead of the recommended 1.0), which significantly affected the model's performance. The updated video aims to offer a fair and accurate assessment across a comprehensive suite of benchmarks, including performance, [[concepts/memory|memory]], [[concepts/reasoning|reasoning]], and various coding challenges in different environments, all running on a system with an [[concepts/rtx-2000-ada|RTX 2000 Ada]] 16GB GPU.

In terms of raw performance, the Q2 model slightly outperformed Q1 in prefill throughput, while decode (token generation) speeds remained similar for both at around 24-25 [[concepts/decode-throughput|tokens per second]]. However, both models showed significant weaknesses in [[concepts/memory|memory]] recall, particularly when retrieving information from the middle or end of their extended context (256k tokens), with pass rates between 60% and 67%. This indicates a struggle with maintaining information across longer interactions.

Despite the memory issues, the models demonstrated surprising strength in [[concepts/reasoning|reasoning]], achieving a 100% pass rate on "hard" difficulty questions, although they struggled, as expected, with "expert" level challenges. In Python coding tasks (HumanEval Remix), both Q1 and Q2 scored 73 out of 100, notably answering all questions without getting "lost in thought." For general coding challenges like Kanban, Sand Physics, and Dungeon Crawler, the models successfully generated functional code, with Q2 often performing slightly better. However, a recurring issue was the high number of "compactions" (iterations of prompting and fixing) required, consuming a substantial amount of context tokens, indicating a less efficient coding process.

The most [[concepts/complex-coding|complex coding]] tasks, involving 3D environments in Blender and Godot, proved to be particularly challenging. The Q1 model struggled to complete the Blender task, with its responses often truncating. Q2 managed to produce a recognizable 3D lantern in Blender, though its quality was poor. For the Godot 3D game, Q1 failed entirely due to crashes, while Q2 eventually delivered a playable game (after the user prompted it to fix reversed controls). However, this success came at an astronomical cost, requiring nine compactions and burning almost a million tokens, an excessively high amount for the resulting output.

The presenter concludes that while the [[concepts/system-one-model|Ternary-Bonsai-2]] models are compact, they ultimately burn a "tremendous amount of tokens" to deliver "mediocre results." He does not recommend them for general use, especially for complex tasks, suggesting that users would be better served by Q3 versions of base models or other compact alternatives that offer more efficiency. He encourages viewers to share any specific use cases where these models perform exceptionally well.

### Video Description & Links
#### Description
In this video we're going to be look at version 2 of Bonsai from Prism ML. Does this version live up to its big claims?

I run through a few tests which are:
1. Performance
2. Memory
3. Reasoning
4. OpenAI Human Eval
5. Kanban
6. Sand Physics
7. Dungeon Crawler
8. Blender
9. Godot

Model: https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf

#localllm #localai #homelab #llamacpp #homelab #openai #qwen #27b #3.8 #bonsai #ternary #prismml

Chapters:
0:00 Intro
1:03 Model
2:28 Tests Overview
3:03 System Spec
3:49 Performance
5:11 Memory
6:13 Reasoning
6:58 HumanEval Remix
7:26 Kanban
9:38 Sand Physics
10:49 Dungeon Crawler
11:57 Blender
14:20 Godot
16:50 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `bonsai`, `ternary`, `prism`, `prism-ml`, `27b`

#### URLs
- https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf

## Related Concepts
- [[concepts/large-language-model|Large Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/web-tools|Q1 Quantization]]
- [[concepts/web-tools|Q2 Quantization]]
- [[concepts/ternary-transformer-weights|Ternary Weights]]
- [[concepts/performance-analysis|Inference Performance]]
- [[concepts/memory-footprint|Memory Footprint]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_footprint)
- [[concepts/reasoning-capability|Reasoning Capability]]
- [[concepts/temperature-parameter|Temperature Parameter]]
- [[concepts/gguf-format|GGUF Format]]
- [[concepts/local-llm-deployment|Local LLM Deployment]]
- [[concepts/web-tools|Prism ML]]
- [[concepts/web-tools|Bonsai-2-27B]]
- Memory Recall — [Wikipedia](https://en.wikipedia.org/wiki/Recall_%28memory%29)
- [[concepts/needle-in-a-haystack|Context Window]] — [Wikipedia](https://en.wikipedia.org/wiki/Context_window)

## Related Entities
- [[entities/prism-ml|Prism ML]]
- [[entities/lukes-dev-lab|Luke's Dev Lab]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/llamacpp|Llama.cpp]] — [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- [[entities/qwen|Qwen]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen)