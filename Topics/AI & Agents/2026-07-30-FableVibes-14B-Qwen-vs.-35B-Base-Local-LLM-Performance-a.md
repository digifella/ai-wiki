---
wiki-ingested: true
title: "FableVibes 14B (Qwen) vs. 35B Base: Local LLM Performance and Intelligence"
date: 2026-07-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-07-30 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## FableVibes 14B (Qwen) vs. 35B Base: Local LLM Performance and Intelligence
**Clip title:** [[concepts/qwen3-model|Qwen 3.6]] 14B A3B FableVibes benchmarked and tested vs Base [[entities/qwen-35b|Qwen 35B]] - 16GB [[concepts/local-ai-configuration|Local LLM setup]]
**[[entities/tasia-custode|Author]] / channel:** Luke's Dev Lab
**URL:** https://www.youtube.com/watch?v=DBEd5dpxaNQ

### Summary
This video by Luke's Dev Lab thoroughly evaluates a fine-tuned [[concepts/qwen-36-35b-a3b|Qwen 3.6-35B]] A3B model, dubbed "[[concepts/large-language-model|FableVibes 14B]]," against its larger, original counterpart, the [[concepts/unsloth-studio|Unsloth]] Qwen 3.6-35B A3B [[concepts/pre-trained-model|base model]]. The primary [[concepts/purpose|objective]] is to assess the trade-offs between [[concepts/code-size|model size]], performance, and intelligence, as the 14B variant is a pruned version of the 35B model, designed to fit into systems with 16GB of [[concepts/vram|VRAM]]. The FableVibes 14B was tested in Q8 and Q4 quantizations, while the base model was initially tested in Q4KM and later in IQ4NL [[concepts/parameter-reduction|quantization]] for comparison. The evaluation covers five key benchmarks: performance (prefill and decode [[concepts/speed|speed]]), [[concepts/memory|memory]] [[concepts/document-retrieval|retrieval]], agency (tool-calling and multi-step [[concepts/scenarios|scenarios]]), [[concepts/whisper-transcription|OpenAI]] HumanEval ([[concepts/python|Python]] [[concepts/coding|coding]] challenges), and two custom coding challenges (Sand [[concepts/physics|Physics]] Simulator and Dungeon Crawler).

In terms of raw performance, the FableVibes 14B Q4 model exhibited remarkable speed, significantly outperforming both the 14B Q8 and the 35B base model in prefill (ingesting prompts) and decode (generating [[concepts/tokens|tokens]]). For instance, the 14B Q4 achieved prefill speeds of around 900-1000 tokens/second compared to ~180 tokens/second for the base model, and decode speeds of 65 tokens/second versus 37-38 tokens/second. Curiously, the 14B Q8 was found to be slower than the base Q4KM. For memory retrieval (Needle-in-a-Haystack), both 14B models achieved a perfect 15/15 pass rate, with the 14B Q4 completing the task much faster. The base model managed 14/15 passes, showing a slight dip in [[concepts/recall|recall]] at 100% context depth. Across the Agency 2.0 benchmark, all models performed comparably well in tool-calling and complex multi-step scenarios, scoring between 94% and 98% pass rates, though the base model, despite its slightly higher accuracy, took notably longer to execute tasks.

However, the intelligence gap became strikingly evident in the coding-focused benchmarks. In the OpenAI HumanEval Python challenges, the base Qwen 3.6-35B A3B model clearly outperformed its 14B counterparts, achieving an 80% overall pass rate compared to 56-59% for the 14B variants. The smaller models frequently failed to answer questions or became stuck in [[concepts/human-cognition|thinking]] [[concepts/loops|loops]]. This trend was amplified in the custom coding challenges: the 14B FableVibes models consistently struggled with generating correct and functional code for the Sand Physics Simulator and Dungeon Crawler, often requiring multiple prompts for fixes, leading to inconclusive or buggy results, or getting trapped in iterative [[concepts/thought-processes|thought processes]]. In stark [[concepts/contrast|contrast]], the base model proved highly capable, often producing fully functional and correct code for these complex simulations in a single shot.

The video concludes that while the fine-tuned FableVibes 14B model offers substantial speed advantages, it comes at a significant cost to its intelligence and [[concepts/advanced-reasoning|complex problem-solving]] capabilities, especially in reasoning and coding tasks. The base Qwen 3.6-35B A3B model remains superior for tasks requiring advanced logical thought and [[concepts/code-generation|code generation]]. A crucial takeaway is the impact of quantization: when the base model was re-tested with IQ4NL quantization (instead of Q4KM), it delivered an exceptionally clean, perfect, and one-shot [[concepts/solution|solution]] for the demanding Dungeon Crawler challenge, highlighting that optimal quantization can further enhance a model's performance for specific intelligence-heavy applications. Therefore, for serious coding and [[concepts/complex-reasoning|complex reasoning]], the larger base model, particularly with an advanced quantization, is the recommended choice.

### Video Description & Links
#### Description
In this video I want to check out Qwen 3.6 14B A3B FableVibes from tvall43. Starting with Qwen3.6-35B-A3B-heretic the model was then pruned down to 14B via REAP. Let's see how the speed boost affects intelligence.


I run through a few coding tests which are:
1. Performance
2. Memory
3. Agency
4. OpenAI Human Eval
5. Sand Physics
6. Dungeon Crawler


If you're interested in [[concepts/hardware-heavy-models|local LLMs]], AI and homelabs - feel free to subscribe!


Fablevibes: https://huggingface.co/tvall43/Qwen3.6-14B-A3B-FableVibes-GGUF
Qwen: https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF
[[entities/github|GitHub]]: https://github.com/lukesdevlab/youtube
HumanEval: https://github.com/openai/human-eval
Patreon: https://www.patreon.com/cw/LukesDevLab

#localllm #localai #homelab #llamacpp #homelab #openai #qwen #35B #14B #fablevibes #A3B

Chapters:
0:00 Intro
0:14 Model
1:07 Tests Overview
2:09 Target [[concepts/hardware-compatibility|System Specs]]
2:25 Performance
3:49 Memory
4:52 Agency
7:27 OpenAI HumanEval
8:53 Sand Physics - 14B Q4
11:55 Sand Physics - 14B Q8
13:38 Sand Physics - Qwen 35B
14:46 Dungeon Crawler - 14B Q4
16:45 Dungeon Crawler - 14B Q8
18:21 Dungeon Crawler - Qwen 35B [[concepts/q4-k-m|Q4_K_M]]
19:52 Dungeon Crawler - Qwen 35B IQ4_NL
21:13 Conclusion

#### Tags
`ai`, `llm`, `local llm`, `comparison`, `benchmarks`, `qwen`, `35b`, `14b`, `a3b`, `moe`, `fable`, `fablevibes`

#### URLs
- https://huggingface.co/tvall43/Qwen3.6-14B-A3B-FableVibes-GGUF
- https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF
- https://github.com/lukesdevlab/youtube
- https://github.com/openai/human-eval
- https://www.patreon.com/cw/LukesDevLab

## Related Concepts
- [[concepts/large-language-model|Large Language Model]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Model)
- [[concepts/model-pruning|Model Pruning]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Pruning)
- [[concepts/sufficient-parameters|Parameter Efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Parameter_Efficiency)
- [[concepts/local-inference|Local Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Inference)
- [[concepts/unsloth|Unsloth]] — [Wikipedia](https://en.wikipedia.org/wiki/Unsloth)
- [[concepts/intelligence-trade-off|Intelligence Trade-off]] — [Wikipedia](https://en.wikipedia.org/wiki/Intelligence_Trade-off)
- [[concepts/model-compression|Quantization]] — [Wikipedia](https://en.wikipedia.org/wiki/Quantization)
- Q8 Quantization — [Wikipedia](https://en.wikipedia.org/wiki/Q8_Quantization)
- Q4 Quantization — [Wikipedia](https://en.wikipedia.org/wiki/Q4_Quantization)
- Q4KM Quantization — [Wikipedia](https://en.wikipedia.org/wiki/Q4KM_Quantization)
- IQ4NL Quantization — [Wikipedia](https://en.wikipedia.org/wiki/IQ4NL_Quantization)
- Prefill Speed — [Wikipedia](https://en.wikipedia.org/wiki/Prefill_Speed)
- Decode Speed — [Wikipedia](https://en.wikipedia.org/wiki/Decode_Speed)
- [[concepts/retrieving|Memory Retrieval]] — [Wikipedia](https://en.wikipedia.org/wiki/Memory_Retrieval)
- Needle-in-a-Haystack — [Wikipedia](https://en.wikipedia.org/wiki/Needle-in-a-Haystack)
- [[concepts/tool-calling|Tool-calling]] — [Wikipedia](https://en.wikipedia.org/wiki/Tool-calling)

## Related Entities
- [[entities/fablevibes-14b|FableVibes 14B]] — [Wikipedia](https://en.wikipedia.org/wiki/FableVibes_14B)
- [[entities/qwen-36-35b-a3b|Qwen 3.6-35B A3B]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.6-35B_A3B)
- [[entities/lukes-dev-lab|Luke's Dev Lab]] — [Wikipedia](https://en.wikipedia.org/wiki/Luke%27s_Dev_Lab)
- [[entities/unsloth|Unsloth]] — [Wikipedia](https://en.wikipedia.org/wiki/Unsloth)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- HumanEval — [Wikipedia](https://en.wikipedia.org/wiki/HumanEval)
- Sand Physics Simulator — [Wikipedia](https://en.wikipedia.org/wiki/Sand_Physics_Simulator)
- Dungeon Crawler — [Wikipedia](https://en.wikipedia.org/wiki/Dungeon_Crawler)
- Agency 2.0 — [Wikipedia](https://en.wikipedia.org/wiki/Agency_2.0)
- [[entities/qwen-36|Qwen 3.6]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.6)
- FableVibes — [Wikipedia](https://en.wikipedia.org/wiki/FableVibes)