---
wiki-ingested: true
title: "Codeneedle Benchmark: Assessing LLM Code Generation Recall and Hallucinations"
date: 2026-05-08
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: ai-foundations-concepts
type: "source-summary"
aliases:
  - "lab-notes/2026-05-08-Codeneedle-Benchmark-Assessing-LLM-Code-Generation-Recal"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Codeneedle Benchmark: Assessing LLM Code Generation Recall and Hallucinations
**Clip title:** This [[concepts/local-llm|Local LLM]] Looked Smart Until I Saw What It Made Up
**Author / channel:** Alex Ziskind
**URL:** https://www.youtube.com/watch?v=zBYfzecY5ww

### Summary
This video addresses the often-overlooked aspect of [[concepts/large-language-model|Large Language Model]] (LLM) performance: the quality of generated [[concepts/code|code]], beyond mere [[concepts/speed|speed]]. Alex Ziskind, the presenter, highlights the difficulty in objectively evaluating code quality due to the vast diversity of developers, codebases, and [[concepts/llm-models|LLM architectures]]. To tackle this, he introduces and open-sources "Codeneedle," a novel [[concepts/benchmark-testing|benchmarking]] tool inspired by another YouTuber, Prororikis, which allows users to test LLM [[concepts/code-generation|code generation]] against their own repositories.

Codeneedle operates by ingesting an entire source file into an LLM's context and then [[concepts/prompting|prompting]] it to verbatim reproduce the first N lines of specific functions located at various depths within that file. This "recall at depth" approach is crucial for determining if a model genuinely understands the context or is merely hallucinating based on its [[concepts/language-data|training data]]. The benchmark measures two key metrics: "matched lines," representing the correctly reproduced code, and "hallucinated lines," indicating invented or incorrect output. Ziskind emphasizes that simply producing "more output" does not equate to "better output," advocating for deterministic, line-level diffing rather than relying on another LLM for judgment.

The benchmark's findings reveal significant insights into LLM behavior. [[concepts/frontier-models|Frontier models]] like [[concepts/code-debugging|GPT-5.5]] and [[entities/claude-sonnet-4|Claude Sonnet 4]].6 consistently achieved high matched line percentages (90-97%) with minimal hallucinations, even when processing larger codebases like jQuery. However, local models displayed more varied performance. While some local models could achieve respectable matched scores, they often produced a disproportionately high number of hallucinations, particularly when dealing with larger [[concepts/files|files]]. This led to a crucial takeaway: for smaller, local models, the "wall" isn't [[concepts/memory|memory]] capacity, but rather "noise," where models generate more invented lines than real ones. Furthermore, the benchmark uncovered undocumented quirks, such as certain models stripping indentation from generated code, highlighting that how models *render* code can impact its usability.

In conclusion, the video strongly advises against trusting benchmarks that provide a single, aggregated score for LLM code quality. Developers are encouraged to use tools like Codeneedle to run comprehensive evaluations on their specific codebases, paying close [[concepts/attention-mechanisms|attention]] to both the [[concepts/accuracy|accuracy]] (matched lines) and precision (hallucinated lines) of the generated code. Understanding these nuances and model-specific behaviors is essential for selecting and utilizing LLMs effectively for [[concepts/coding|coding]] tasks, ensuring the output is not only functionally correct but also clean and usable.

### Video Description & Links
#### Description
Don’t Trust One-Number [[concepts/llm-benchmarks|LLM Benchmarks]]… Run This on Your Own Code
🛡️Try Gobii here: https://gobii.ai/r/sdqHF

🛒 Gear Links 🛒
📦🎮 My gear: https://www.amazon.com/shop/alexziskind

🎥 Related Videos 🎥
🏆 Skip M3 Ultra & RTX 5090 for LLMs | NEW 96GB KING - https://youtu.be/bAao58hXo9w
💻 Smallest RTX Pro 6000 rig | OVERKILL - https://youtu.be/JbnBt_Aytd0
🔧 Cheap mini runs a 70B LLM 🤯 - https://youtu.be/xyKEQjUzfAk
🌙 RAM torture test on Mac - https://youtu.be/l3zIwPgan7M
🪞 REALITY vs Apple’s Memory Claims | vs RTX4090m - https://youtu.be/fdvzQAWXU7A
📦 Set up Conda - https://youtu.be/2Acht_5_HTo
🤖 INSANE [[concepts/machine-learning|Machine Learning]] on [[concepts/neural-engine|Neural Engine]] - https://youtu.be/Y2FOUg_jo7k

* 🛠️ [[concepts/developer-productivity|Developer productivity]] Playlist - https://www.youtube.com/playlist?list=PLPwbI_iIX3aQCRdFGM7j4TY_7STfv2aXX
🔗 AI for Coding Playlist: 📚 - https://www.youtube.com/playlist?list=PLPwbI_iIX3aSlUmRtYPfbQHt4n0YaX0qw

Codeneedle on [[entities/github|GitHub]]: https://github.com/alexziskind1/codeneedle

— — — — — — — — — 

— — — — — — — — —

— — — — — — — — —

⏱️ Chapters
00:00 Benchmark Problem
01:39 Code Needle
05:40 First Tests
07:43 Setup Guide
10:26 Results Matrix
13:01 [[concepts/data-hallucination|Hallucination]] Trap
15:44 Recall Patterns

#coding     #llm    #softwaredevelopment

#### Tags
`software developer`, `programmer`, `software development`, `programming`, `developer`, `developer tests`, `m3 chip`, `machine learning`, `llm`, `m3max`, `m3 machine learning`, `m3 ai`, `webui`, `openui`, `open webui`, `local ai`, `local chatgpt`, `chatgpt`, `ipx`, `gmktec`, `nuc`, `beelink`, `mini pc`, `m4 pro`, `mac mini`, `apple`, `apple mini`, `mini`, `m4 mini`, `m3 ultra`, `mac studio`, `ryzen`, `Al Max+ 395`, `ollama`, `comfy ui`, `tiiny`, `macbook`, `macbook neo`, `turboquant`, `quantization`, `code`, `ai code`, `code llm`, `coding llm`

#### URLs
- https://gobii.ai/r/sdqHF
- https://www.amazon.com/shop/alexziskind
- https://youtu.be/bAao58hXo9w
- https://youtu.be/JbnBt_Aytd0
- https://youtu.be/xyKEQjUzfAk
- https://youtu.be/l3zIwPgan7M
- https://youtu.be/fdvzQAWXU7A
- https://youtu.be/2Acht_5_HTo
- https://youtu.be/Y2FOUg_jo7k
- https://www.youtube.com/playlist?list=PLPwbI_iIX3aQCRdFGM7j4TY_7STfv2aXX
- https://www.youtube.com/playlist?list=PLPwbI_iIX3aSlUmRtYPfbQHt4n0YaX0qw
- https://github.com/alexziskind1/codeneedle

#### YouTube Playlist URLs
- https://www.youtube.com/playlist?list=PLPwbI_iIX3aQCRdFGM7j4TY_7STfv2aXX
- https://www.youtube.com/playlist?list=PLPwbI_iIX3aSlUmRtYPfbQHt4n0YaX0qw

## Related Concepts
- [[concepts/code-quality-evaluation|Code Quality Evaluation]]
- [[concepts/large-language-model-llm|Large Language Model (LLM)]]
- [[concepts/recall|Recall]]

## Related Entities
- [[entities/alex-ziskind|Alex Ziskind]]