---
wiki-ingested: true
title: "Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware"
date: 2026-06-30
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-30 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Ornith 9B Agentic Coding LLM: Local Performance Evaluation on Consumer Hardware
**Clip title:** New [[concepts/autonomous-ai-coding-agent|Agentic Coding]] Model Ornith 9B — Is It Worth Running Locally?
**[[entities/tasia-custode|Author]] / channel:** Bart Slodyczka
**URL:** https://www.youtube.com/watch?v=nFiLFCrsg1w

### Summary
The video provides a detailed overview and practical demonstration of Ornith-1.0, a new family of [[concepts/open-source|open-source]] [[concepts/large-language-model-llm|Large Language Models]] (LLMs) specifically specialized for "[[concepts/agentic-ai|agentic coding]]." Released by Deep Reinforce, these models are available in various sizes: 9B (dense), 31B (dense), 35B (MoE - [[entities/mixture-of-experts|Mixture of Experts]]), and 397B (MoE), with three of the four being [[concepts/open-weight|open-weight]] for [[concepts/local-deployment|local deployment]]. The video's primary focus is on testing the performance of the smallest, 9B dense model, on a consumer-grade 16GB Mac Mini to evaluate its real-[[entities/earth|world]] capabilities for coding tasks.

The presenter highlights that Ornith-1.0 is built upon pre-trained [[concepts/23b-parameter-models|Gemma 4]] and [[concepts/qwen-llm|Qwen]] 3.5 models and claims state-of-the-art performance among [[concepts/reasoning-models|open-source models]] of comparable size on [[concepts/coding-benchmarks|coding benchmarks]]. While acknowledging these benchmark results, the video expresses skepticism, emphasizing that the most effective evaluation comes from testing on one's own use case and hardware. The benchmarks mentioned in the accompanying paper primarily assess the model's ability to operate within existing codebases (e.g., executing tool calls, finding/fixing bugs) rather than building projects from scratch, which is the specific focus of the video's practical tests. For the local setup, the 9B model consumes approximately 12GB of RAM on the Mac Mini, utilizing LM Studio for [[concepts/local-execution|local execution]] and [[concepts/bash-tool|Pi Agent]] as the coding [[concepts/harness|harness]].

During practical testing, the 9B model demonstrated significant limitations in building a project from scratch. When tasked with creating a simple tower defense game in a single HTML file, the 9B model produced code riddled with functional and logical errors (e.g., undeclared functions, incorrect variable names, syntax issues). It entered a recursive [[concepts/debugging|debugging]] [[concepts/loop|loop]] with Pi Agent, requiring extensive human intervention and indicating a severe lack of [[concepts/accuracy|precision]] for generative coding. In [[concepts/contrast|contrast]], the presenter quickly demonstrated that the larger 35B model, when given the exact same prompt (though running on more powerful hardware, a Mac Studio, for performance), successfully generated a fully functional and playable tower defense game in a single attempt, exhibiting superior code quality and [[concepts/speed|speed]] (around 100 tokens/second compared to the 9B's ~16 tokens/second).

The conclusion and main takeaway are clear: while the smaller 9B Ornith model might be suitable for basic conversational tasks and potentially some debugging within a tightly controlled environment, its precision and capacity for complex, from-scratch agentic coding are severely limited. Users should either temper their expectations and reduce the scope of work for such small models or opt for significantly larger models like the 35B variant, which offer the necessary accuracy and functional capabilities to generate robust, working code effectively and efficiently. The video underscores the [[concepts/value|importance]] of adequate [[concepts/code-size|model size]] and computational power for achieving satisfactory results in agentic coding tasks.

### Video Description & Links
#### Description
In this video I test out the new open source agentic coding model Ornith 1.0 9b on my 16gb M4 Mac Mini. We load it up in Lm Studio and understand the full [[concepts/memory|memory]] requirement for [[concepts/parameters|weights]] + context, we plug it into pi [[concepts/agentic-harness|agent harness]] to run it through a coding task, we then [[concepts/feynmans-three-step-scientific-method|compare]] results to that of the bigger Ornith 35b model, and finally we understand if the 9b is worth running locally for coding tasks.

📬👀 Subscribe to my blog for more tests, tips, and walkthroughs: https://blog.workingmodels.ai/

👉 Connect with me: https://x.com/bartslodyczka
👉 Get in touch: bart@supportlaunchpad.com

#### URLs
- https://blog.workingmodels.ai/
- https://x.com/bartslodyczka

## Related Concepts
- [[concepts/agentic-ai|Agentic Coding]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Coding)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/mixture-of-experts|Mixture of Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_Experts)
- [[concepts/dense-models|Dense Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Dense_Models)
- [[concepts/open-weight-models|Open-Weight Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Weight_Models)
- [[concepts/local-inference|Local Inference]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Inference)
- [[concepts/open-weights-models|Consumer Hardware]] — [Wikipedia](https://en.wikipedia.org/wiki/Consumer_Hardware)
- [[concepts/world-knowledge|Model Evaluation]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Evaluation)
- [[concepts/deep-reinforce|Deep Reinforce]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Reinforce)
- [[concepts/qwen-llms|Ornith-1.0]] — [Wikipedia](https://en.wikipedia.org/wiki/Ornith-1.0)
- Deep [[concepts/reinforcement-learning|Reinforcement Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Reinforcement_Learning)
- [[concepts/lm-studio|LM Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Studio)
- [[concepts/write-tool|Pi Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi_Agent)
- [[concepts/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_4)
- Qwen 3.5 — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.5)
- Recursive Debugging — [Wikipedia](https://en.wikipedia.org/wiki/Recursive_Debugging)
- [[concepts/ai-coding|Code Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_Generation)
- [[concepts/world-knowledge|Benchmarking]] — [Wikipedia](https://en.wikipedia.org/wiki/Benchmarking)

## Related Entities
- [[entities/bart-slodyczka|Bart Slodyczka]] — [Wikipedia](https://en.wikipedia.org/wiki/Bart_Slodyczka)
- [[entities/deep-reinforce|Deep Reinforce]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Reinforce)
- [[entities/ornith-9b|Ornith 9B]] — [Wikipedia](https://en.wikipedia.org/wiki/Ornith_9B)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/ornith-10|Ornith-1.0]] — [Wikipedia](https://en.wikipedia.org/wiki/Ornith-1.0)
- Mac Mini — [Wikipedia](https://en.wikipedia.org/wiki/Mac_Mini)
- [[entities/mac-studio|Mac Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/Mac_Studio)
- [[entities/lm-studio|LM Studio]] — [Wikipedia](https://en.wikipedia.org/wiki/LM_Studio)
- [[entities/pi-agent|Pi Agent]] — [Wikipedia](https://en.wikipedia.org/wiki/Pi_Agent)
- [[entities/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_4)
- [[entities/qwen-35|Qwen 3.5]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.5)
- Ornith 35B — [Wikipedia](https://en.wikipedia.org/wiki/Ornith_35B)