---
wiki-ingested: true
title: "Nail-Qwen 35B A3B LLM: Performance, Reasoning, Coding on 16GB GPU Evaluation"
date: 2026-09-12
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
aliases:
  - "lab-notes/2026-09-12-Nail-Qwen-35B-A3B-LLM-Performance-Reasoning-Coding-on-16"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Nail-Qwen 35B A3B LLM: Performance, Reasoning, Coding on 16GB GPU Evaluation
**Clip title:** Nail [[entities/qwen|Qwen]] 35B A3B tested - 16GB Local LLM setup
**Author / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=vKy0154ey90

### Summary
This video provides a detailed evaluation of the "Nail-[[entities/qwen|Qwen]] 3.6-35B-A3B-GGuf-MTP" large language model, specifically testing its Q4_K_XL quantization. The presenter employs a comprehensive test suite encompassing performance, [[concepts/memory|memory]], [[concepts/reasoning|reasoning]], and practical coding challenges across various domains. The [[concepts/hardware-specifications|system specifications]] for testing included an RTX 2000 Ada with 16GB VRAM, 32GB DDR4 RAM, and an AMD Ryzen 5700X CPU, with all tests configured for 16GB GPUs.

In terms of benchmarks, the model exhibited strong performance with a decode speed of 48.4 tokens/s and a prefill throughput of over 200,000 tokens/s for cached data. The [[concepts/memory|memory]] benchmark, known as "Needle-in-a-Haystack," showed excellent recall, achieving a 100% pass rate at all context depths, though some outputs were noted as messy or verbose. For [[concepts/reasoning|reasoning]], the model scored 75% overall, performing perfectly on easy and medium questions but struggling with hard (67% pass) and expert (33% pass) challenges, which is typical for MoE ([[concepts/mixture-of-experts|Mixture of Experts]]) models. The HumanEval benchmark, comprising 164 Python challenges, resulted in a 95% pass rate and 97% of answered questions being correct, suggesting it avoided overthinking, although the test might be becoming "benchmarked" in the [[concepts/training-data|training data]].

The practical coding challenges yielded mixed results. For front-end [[concepts/web-development|web development]] with the Kanban test, the model successfully resolved several issues over multiple prompts, resulting in a very functional and aesthetically pleasing drag-and-drop interface. The Sand Physics simulation was generated mostly in a zero-shot attempt, with only minor imperfections in water physics. The Dungeon Crawler also performed well, generating functional maps, though some disconnected rooms occasionally appeared. However, the Blender and Godot challenges proved significantly more difficult. In Blender, the model created a "ropy" lantern asset, but the process was marred by multiple program crashes when attempting to render screenshots, requiring numerous restarts and prompts. The Godot 3D platformer, the most challenging task, ultimately failed due to persistent issues with unpredictable player movement, which felt like sliding on ice, and non-disappearing collectible keys, despite several attempts and compactions.

In conclusion, the "Nail-Qwen" model demonstrates strong foundational capabilities, particularly in performance, memory, and initial [[concepts/problem-solving-skills|problem-solving]] for tasks like front-end [[concepts/web-development|web development]]. However, its performance decreased as the complexity of the coding challenges increased, especially in 3D application development like Blender and Godot, where it encountered significant stability and functional problems. The presenter ultimately suggests that "Teal Coder," a model from a previous video, might be a better choice for more [[concepts/complex-coding|complex coding]] tasks.

### Video Description & Links
#### Description
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

Model: https://huggingface.co/peculiar-ragdoll/Nail-Qwen3.6-35B-A3B-GGUF-MTP
HumanEval: https://github.com/openai/human-eval

#localllm #localai #homelab #llamacpp #homelab #openai #qwen #3.6 #35b #moe #a3b #nail

Chapters:
0:00 Intro
0:08 Model
0:34 Tests Overview
1:05 System Spec
1:31 Performance
2:18 Memory
3:17 Reasoning
3:47 OpenAI HumanEval
4:23 Kanban
6:39 Sand Physics
7:21 Dungeon Crawler
8:15 Blender
10:15 Godot
13:06 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `35b`, `a3b`, `nail`

#### URLs
- https://huggingface.co/peculiar-ragdoll/Nail-Qwen3.6-35B-A3B-GGUF-MTP
- https://github.com/openai/human-eval

## Related Concepts
- [[concepts/large-language-model|Large Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
- [[concepts/gguf|GGUF]] — [Wikipedia](https://en.wikipedia.org/wiki/GGUF)
- [[concepts/large-language-model|MTP]]
- [[concepts/24gb-gpu|VRAM]] — [Wikipedia](https://en.wikipedia.org/wiki/Video_random-access_memory)
- [[concepts/ai-benchmarks|Coding]]
- [[concepts/performance-evaluation|Performance Evaluation]] — [Wikipedia](https://en.wikipedia.org/wiki/Performance_Evaluation)
- [[concepts/speculative-decoding|Quantization]]
- [[concepts/tool-calls|MoE]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_experts)
- Front-end Development — [Wikipedia](https://en.wikipedia.org/wiki/Front-end_web_development)

## Related Entities
- [[entities/nail-qwen-35b-a3b|Nail-Qwen 35B A3B]]
- [[entities/lukes-dev-lab|Luke's Dev Lab]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/hugging-face|Hugging Face]] — [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- Kanban — [Wikipedia](https://en.wikipedia.org/wiki/Kanban)