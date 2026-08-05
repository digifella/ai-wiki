---
title: "Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary"
date: 2026-07-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary
Generated: 2026-07-22 · API: Gemini 2.5 Flash · Modes: Summary

---

## Ternary Bonsai 27B vs. Qwen 27B: LLM Performance Benchmarking Summary
**Clip title:** Ternary Bonsai 27B benchmarked and tested vs Qwen 27B - 16GB Local LLM setup
**Author / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=83QRLhKueC8

### Summary
This video presents an in-depth comparison of the Ternary Bonsai 27B model, utilizing different drafters (Q4_1 4-bit and BF16 16-bit), against the Qwen 3.6 27B MTP model. The core concept behind Ternary Bonsai is its use of ternary weights (-1, 0, or +1) instead of traditional floating-point numbers, allowing for a smaller model footprint and faster calculations. Additionally, Bonsai employs smaller "drafter" models that work alongside the main 27B base model to accelerate token prediction, a mechanism conceptually similar to MTP but implemented externally. The speaker notes that the base 27B model is around 7GB, with the Q4 drafter adding approximately 2GB and the BF16 drafter adding about 7GB.

The evaluation covered various benchmarks, revealing a mixed performance picture for Bonsai. In performance benchmarks, Bonsai with the Q4 drafter demonstrated significantly higher decode speeds (22 tokens/s) compared to Qwen (8.5 tokens/s) and especially to Bonsai's BF16 drafter (1 token/s). However, Qwen excelled in prefill speed, achieving over 100 tokens/s against Bonsai's Q4 at around 40 tokens/s. Memory retrieval tests ("Needle-in-a-Haystack") showed both Bonsai drafters struggling at 50% context depth (80% pass rate) at 128k context, while Qwen performed better (93%). Interestingly, at 256k context, the BF16 Bonsai achieved a perfect 100% accuracy, outperforming Qwen, though this came with a significantly longer runtime. Bonsai truly shined in the Agency benchmark, achieving a rare 100% pass rate in tool-calling and reasoning tasks, notably faster than Qwen, which scored 95%. In the OpenAI HumanEval Python coding challenges, Bonsai also outperformed Qwen with a higher pass rate (77% vs 63%) and a faster runtime.

However, Bonsai's performance significantly declined when faced with practical coding challenges. In the Dungeon Crawler test, Bonsai struggled with different clients, either failing to write files or generating non-functional UIs and getting stuck in repetitive thinking loops when prompted to fix issues. In contrast, Qwen successfully generated a fully functional dungeon in a single attempt. Similarly, Bonsai failed to interact effectively with Blender, causing crashes and error loops, leading to the cancellation of the planned game engine test. Qwen, while slower due to hardware, managed to perform the Blender tasks. A final unexpected result came from the Sand Physics Simulator: Bonsai initially produced a non-functional UI and got stuck, but when given Qwen's *buggy* code (which Qwen itself quickly fixed), Bonsai impressively identified and resolved the issue without getting caught in its typical thinking loops.

In conclusion, the Ternary Bonsai 27B model demonstrates impressive speed and strong performance in agentic tasks and Python challenges, often surpassing Qwen in these areas. However, its capabilities in generating new, complex code are limited, frequently leading to non-functional outputs and getting trapped in self-correction loops. Its unexpected aptitude for debugging or making targeted fixes to existing code, as shown in the final Sand Physics test, suggests a potential niche for Bonsai as a supplementary tool alongside more capable models for specific, smaller-scale code refinements or debugging, leveraging its speed advantage. Despite its strengths, the speaker questions if the significant system resources required for both the base and drafter models are justified given its overall inconsistent intelligence for broader coding tasks.

### Video Description & Links
#### Description
In this video I want to check out Ternary Bonsai 27B from Prism ML. The claim is 95% of FP16 intelligence retained, is that the case in my testing?


I run through a few coding tests which are:
1. Performance
2. Memory
3. Agency
4. OpenAI Human Eval
5. Dungeon Crawler
6. Blender
7. Sand Physics


If you're interested in local LLMs, AI and homelabs - feel free to subscribe!


Ternary Bonsai: https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
Qwen: https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF
GitHub: https://github.com/lukesdevlab/youtube
HumanEval: https://github.com/openai/human-eval
Patreon: https://www.patreon.com/cw/LukesDevLab

#localllm #localai #homelab #llamacpp #homelab #openai #qwen #27b #bonsai #prism-ml

Chapters:
0:00 Coming Up
0:07 Intro
0:20 Models
3:12 Tests Overview
4:22 Target System Specs
4:49 Performance
6:50 Memory
9:25 Agency
11:05 OpenAI HumanEval
12:56 Dungeon Crawler - Bonsai Cline (failed)
15:40 Dungeon Crawler - Bonsai
19:30 Dungeon Crawler - Qwen
21:22 Blender - Bonsai
23:27 Blender - Qwen
25:24 Sand Physics - Bonsai
28:02 Sand Physics - Qwen
29:49 Bonsai bug fix test
31:12 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `prism-ml`, `bonsai`, `27b`, `finetune`

#### URLs
- https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
- https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF
- https://github.com/lukesdevlab/youtube
- https://github.com/openai/human-eval
- https://www.patreon.com/cw/LukesDevLab
