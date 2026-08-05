---
wiki-ingested: true
title: "VibeThinker-3B: Small Model Achieves Frontier Reasoning, Outperforming Giants"
date: 2026-06-20
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: reasoning-context-prompting
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

Generated: 2026-06-20 · API: [[entities/gemini-25-flash|Gemini 2.5 Flash]] · Modes: Summary

---

## VibeThinker-3B: Small Model Achieves Frontier Reasoning, Outperforming Giants
**Clip title:** VibeThinker 3B - Taking on Giant Models
**[[entities/tasia-custode|Author]] / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=_a9Vv5dfW24

### Summary
The video introduces VibeThinker-3B, a compact 3-billion-parameter [[concepts/statistical-language-modeling|language model]] developed by [[entities/weibo-ai-lab|Weibo AI Lab]] (a Singapore-based arm of [[entities/china|China]]'s Weibo, similar to Twitter). The central claim is that this small model can achieve "frontier-level verifiable [[concepts/reasoning|reasoning]]" performance, outperforming much larger and more widely recognized models like [[entities/thinking-with-3-pro|Gemini 3 Pro]], [[concepts/opus|Claude Opus]], GLM-5, and [[concepts/deepseek-ai|DeepSeek]] on specific mathematical and [[concepts/coding-benchmarks|coding benchmarks]]. This challenges the conventional wisdom that only extremely large models can [[entities/excel|excel]] at [[concepts/complex-reasoning|complex reasoning]] tasks.

VibeThinker-3B is not trained from scratch but is built upon an older [[concepts/pre-trained-model|base model]], Qwen2.5-Coder-3B. Its remarkable performance stems from a sophisticated "Spectrum-to-Signal post-training paradigm." This pipeline incorporates several advanced techniques: a two-stage curriculum-based [[concepts/supervised-fine-tuning|supervised fine-tuning]] (SFT) focusing initially on broad coverage across domains like math, code, and STEM, followed by a hard-reasoning SFT stage that filters out easy problems and short reasoning traces to force deeper, long-horizon [[concepts/human-cognition|thinking]]. It also utilizes multi-domain [[concepts/reinforcement-learning|reinforcement learning]] (RL) for math, code, and STEM, with an emphasis on optimizing for accuracy and then efficiency (shorter correct answers), and offline self-distillation to encourage diverse [[concepts/solution|solution]] strategies.

The model's underlying [[concepts/philosophy|philosophy]], termed the "Parametric Compression-Coverage Hypothesis," suggests that intelligence in "parameter-dense domains" with clear [[concepts/verification|verification]] signals (like [[concepts/mathematical-reasoning|mathematical reasoning]] or coding) can be compressed into compact reasoning cores, unlike broad, open-[[concepts/expertise|domain knowledge]] which requires vast parameter coverage. Benchmarks presented in the video show VibeThinker-3B achieving scores comparable to or even surpassing top-tier models on tasks such as AIME, IMO-AnswerBench, LiveCodeBench v6, and HMMT. Notably, its performance is further enhanced by a test-time [[concepts/computational-scaling|scaling]] strategy called Claim-Level [[concepts/software-reliability|Reliability]] Assessment (CLR), which generates multiple answers and selects the most reliable one. However, the model does not perform as well on general knowledge benchmarks, reinforcing its specialized nature.

The video also includes demonstrations illustrating VibeThinker-3B's capabilities. It excels at coding tasks and [[concepts/open-source-philosophy|logic]] puzzles, consistently producing lengthy and coherent chains of thought to arrive at correct solutions. Conversely, when tasked with generating a long essay or creating a complex SVG drawing, its limitations become apparent; it either produces condensed responses citing [[concepts/infrastructure-limitations|platform constraints]] or generates rudimentary and incomplete outputs, sometimes mixing languages. This highlights that while VibeThinker-3B is exceptional in its niche of verifiable reasoning, it lacks the broad generalization and comprehensive knowledge seen in much larger, [[concepts/general-purpose-models|general-purpose models]]. Overall, VibeThinker-3B represents a significant research contribution, offering a complementary path to achieving advanced AI capabilities through highly specialized and efficient small models, which could be leveraged to train even better [[concepts/open-weight-models|open models]] in the future.

### Video Description & Links
#### Description
In this video, I look at VibeCoder 3b and how it is beating some models that are 300x its size on certain benchmarks by improving its reasoning and chain of thought to be better for specific [[concepts/scenarios|use cases]].  While the model is not for production it shows what could be done with these techniques.

Thanks to Dell for Sponsoring the [[concepts/computational-resources|Compute]]
#DellProPrecision #DellProMax 

Paper: https://arxiv.org/abs/2606.16140
[[concepts/parameters|Weights]]: https://huggingface.co/WeiboAI/VibeThinker-3B
[[entities/github|Github]]: https://github.com/WeiboAI/VibeThinker

Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:16 VibeThinker-3B
03:33 Benchmarks
05:16 VibeThinker-3B Paper
05:46 Architecture
09:00 Demo

#### Tags
`VibeThinker-3B`, `small language model`, `SLM reasoning`, `verifiable reasoning`, `compact AI model`, `small model reasoning`, `WeiboAI`, `Qwen2.5 Coder`, `reinforcement learning`, `AIME 2026`, `math reasoning`, `code reasoning`, `STEM AI`, `efficient AI`, `AI benchmarks`, `open source AI`, `small AI model`, `post training`, `AI scaling`

#### URLs
- https://arxiv.org/abs/2606.16140
- https://huggingface.co/WeiboAI/VibeThinker-3B
- https://github.com/WeiboAI/VibeThinker
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/frontier-reasoning|Frontier Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Frontier_Reasoning)
- [[concepts/small-language-models|Small Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Small_Language_Models)
- [[concepts/mathematically-verifiable-reasoning|Mathematically Verifiable Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Mathematically_Verifiable_Reasoning)
- VibeThinker-3B — [Wikipedia](https://en.wikipedia.org/wiki/VibeThinker-3B)
- Spectrum-to-Signal Post-Training — [Wikipedia](https://en.wikipedia.org/wiki/Spectrum-to-Signal_Post-Training)
- Parametric Compression-Coverage Hypothesis — [Wikipedia](https://en.wikipedia.org/wiki/Parametric_Compression-Coverage_Hypothesis)
- Curriculum-Based Supervised Fine-Tuning — [Wikipedia](https://en.wikipedia.org/wiki/Curriculum-Based_Supervised_Fine-Tuning)
- Hard-Reasoning SFT — [Wikipedia](https://en.wikipedia.org/wiki/Hard-Reasoning_SFT)
- Multi-Domain Reinforcement Learning — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Domain_Reinforcement_Learning)
- Offline Self-Distillation — [Wikipedia](https://en.wikipedia.org/wiki/Offline_Self-Distillation)
- Claim-Level Reliability Assessment — [Wikipedia](https://en.wikipedia.org/wiki/Claim-Level_Reliability_Assessment)
- Test-Time Scaling — [Wikipedia](https://en.wikipedia.org/wiki/Test-Time_Scaling)
- Long-Horizon Thinking — [Wikipedia](https://en.wikipedia.org/wiki/Long-Horizon_Thinking)
- [[concepts/verifiable-reasoning|Chain of Thought]] — [Wikipedia](https://en.wikipedia.org/wiki/Chain_of_Thought)
- [[concepts/ai-coding|Code Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_Generation)
- [[concepts/specialized-ai-models|Specialized AI Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Specialized_AI_Models)

## Related Entities
- [[entities/weibo-ai-lab|Weibo AI Lab]] — [Wikipedia](https://en.wikipedia.org/wiki/Weibo_AI_Lab)
- [[entities/gemini-3-pro|Gemini 3 Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_3_Pro)
- [[entities/claude-opus|Claude Opus]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus)
- [[entities/glm-5|GLM-5]] — [Wikipedia](https://en.wikipedia.org/wiki/GLM-5)
- [[entities/deepseek|DeepSeek]] — [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)
- Qwen2.5-Coder-3B — [Wikipedia](https://en.wikipedia.org/wiki/Qwen2.5-Coder-3B)
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- Weibo — [Wikipedia](https://en.wikipedia.org/wiki/Weibo)
- [[entities/dell|Dell]] — [Wikipedia](https://en.wikipedia.org/wiki/Dell)
- AIME — [Wikipedia](https://en.wikipedia.org/wiki/AIME)
- IMO-AnswerBench — [Wikipedia](https://en.wikipedia.org/wiki/IMO-AnswerBench)
- LiveCodeBench — [Wikipedia](https://en.wikipedia.org/wiki/LiveCodeBench)