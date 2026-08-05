---
wiki-ingested: true
title: "DeepReinforce's Ornith-1.0: Self-Scaffolding Open-Source LLMs for Agentic AI"
date: 2026-06-27
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

Generated: 2026-06-27 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## DeepReinforce's Ornith-1.0: Self-Scaffolding Open-Source LLMs for Agentic AI
**Clip title:** Introducing Ornith 1.0
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=uD4-uy0GmHE

### Summary
DeepReinforce has launched Ornith-1.0, a family of [[concepts/open-source|open-source]] [[concepts/large-language-model-llm|Large Language Models]] (LLMs) specifically designed for [[concepts/autonomous-ai-coding-agent|agentic coding]]. This [[concepts/deployment|release]] comes at a time when larger, proprietary models like GPT-5.6 face potential government restrictions, underscoring the growing [[concepts/value|importance]] of accessible [[concepts/open-weight|open-weight]] alternatives. The core [[concepts/innovation|innovation]] behind Ornith-1.0 is its "self-scaffolding" capability, where the models are trained to write their own "harnesses"—task-specific code and logic—on the fly, effectively merging the development of AI models with their operational frameworks. This approach aims to make [[concepts/ai-agents|AI agents]] more autonomous and adaptable, moving beyond reliance on human-designed interfaces.

The Ornith-1.0 family comprises four models: a 9B Dense model, a 31B Dense model, and two [[entities/mixture-of-experts|Mixture-of-Experts]] (MoE) models, 35B and 397B. These are not entirely new [[concepts/pre-trained-models|pre-trained models]] but rather advanced fine-tunes or mid-trains built upon existing foundational models like [[concepts/23b-parameter-models|Gemma 4]] and Qwen 3.5. A significant aspect of this release is that DeepReinforce has made all variants, including the largest, openly available. Performance evaluations indicate that Ornith-1.0 models achieve state-of-the-art results among open-source counterparts of comparable size on various coding benchmarks, such as Terminal-Bench 2.1 and [[concepts/swe-bench-verified|SWE-Bench Verified]]. Impressively, the flagship 397B MoE model even surpasses [[concepts/anthropic-models|Claude Opus 4.7]] on certain benchmarks, while the smaller 9B model demonstrates remarkably strong capabilities for resource-efficient [[concepts/on-premise-deployment|local deployment]].

The groundbreaking aspect of Ornith-1.0 lies in its self-improving training framework. Unlike traditional methods that rely on fixed, human-designed harnesses, Ornith-1.0 learns to generate both [[concepts/solution|solution]] trajectories (rollouts) and the task-specific harnesses that guide them. This is achieved through a [[concepts/reinforcement-learning|reinforcement learning]] (RL) process, specifically using a generalized policy optimization (GRPO) update, which jointly optimizes the scaffold and the resulting solution. The model discovers better search trajectories and generates higher-quality solutions by iteratively improving both components. To mitigate the risk of "reward hacking"—where an AI might find loopholes to achieve high rewards without truly accomplishing the intended task—Ornith implements a robust three-layered defense mechanism. This includes immutable environmental boundaries, a deterministic monitor that flags unauthorized actions, and a frozen LLM judge that can veto outcomes if intent-level [[concepts/gaming|gaming]] is detected.

The practical utility of Ornith-1.0 is demonstrated through various coding tasks shown in the video. It successfully generates complex SVG images, answers in-depth [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) questions, and creates functional [[concepts/python|Python]] harnesses for real-world applications. Examples include a weather forecast tool that intelligently adapts to the lack of an API key by finding a free, no-API-key alternative, and a Twitter (now X) news harvester that navigates API changes and offers [[concepts/customization|customization]]. The models can even extend their functionality by building a Gradio [[concepts/user-interface|user interface]] for these generated tools. Overall, Ornith-1.0 represents a significant leap forward in agentic coding, offering powerful, [[concepts/open-source-ai-models|open-source LLMs]] that are not only efficient but also capable of intelligently self-scaffolding their operational logic, paving the way for more autonomous and versatile [[concepts/ai-models|AI systems]].

### Video Description & Links
#### Description
In this video, I look at the Ornith 1.0 family of agentic coding models.  Both what they can do and how they were created.

Thanks to Dell for Sponsoring the [[concepts/computational-resources|Compute]]
#DellProPrecision #DellProMax 

📖 Blog: https://deep-reinforce.com/ornith_1_0.html
🤗 HF: https://huggingface.co/collections/deepreinforce-ai/ornith-10


Twitter: https://x.com/Sam_Witteveen 

🕵️ Interested in building [[concepts/llm-based-agents|LLM Agents]]? Fill out the form below
Building LLM Agents Form: https://drp.li/dIMes

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:18 Blog
01:55 [[concepts/open-source-machine-learning|Hugging Face]]: Ornith 1.0
02:17 Architecture
02:43 Benchmarks
08:27 PAL paper
09:25 Demo
09:35 Draw Pelican Demo
09:59 RAG Question
10:25 Creating Weather [[concepts/harness|Harness]]
13:15 Get the Latest AI News on Twitter

#### Tags
`Ornith 1.0`, `Ornith`, `DeepReinforce`, `Ornith AI model`, `self-scaffolding LLM`, `agentic coding model`, `open source coding model`, `coding LLM`, `AI coding agent`, `self-improving AI`, `reinforcement learning`, `RL scaffold`, `SWE-bench Verified`, `Terminal-Bench`, `Claude Opus 4.8`, `run LLM locally`, `local LLM`, `GGUF`, `open source LLM`, `best open source coding model`, `Gemma 4`, `Qwen 3.5`, `DeepSeek V4`, `AI news`, `reward hacking`

#### URLs
- https://deep-reinforce.com/ornith_1_0.html
- https://huggingface.co/collections/deepreinforce-ai/ornith-10
- https://x.com/Sam_Witteveen
- https://drp.li/dIMes
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/agentic-ai|Agentic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_AI)
- [[concepts/qwen-llms|Open-Source LLMs]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Source_LLMs)
- [[concepts/agentic-ai|Agentic Coding]] — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Coding)
- [[concepts/open-weight-models|Open-Weight Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Open-Weight_Models)
- [[concepts/large-language-models|Large Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Large_Language_Models)
- [[concepts/proprietary-cloud-based-models|Proprietary Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Proprietary_Models)
- [[concepts/export-control|Government Restrictions]] — [Wikipedia](https://en.wikipedia.org/wiki/Government_Restrictions)
- [[concepts/unconscious-competence|Model Training]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Training)
- [[concepts/large-language-models|Self-Scaffolding]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-Scaffolding)
- [[concepts/mixture-of-experts|Mixture-of-Experts]] — [Wikipedia](https://en.wikipedia.org/wiki/Mixture-of-Experts)
- [[concepts/machine-learning|Reinforcement Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_Learning)
- Generalized Policy Optimization — [Wikipedia](https://en.wikipedia.org/wiki/Generalized_Policy_Optimization)
- Reward Hacking — [Wikipedia](https://en.wikipedia.org/wiki/Reward_Hacking)
- [[concepts/fine-tuning|Fine-Tuning]] — [Wikipedia](https://en.wikipedia.org/wiki/Fine-Tuning)
- [[concepts/computer-use|Autonomous AI Agents]] — [Wikipedia](https://en.wikipedia.org/wiki/Autonomous_AI_Agents)
- Task-Specific Harnesses — [Wikipedia](https://en.wikipedia.org/wiki/Task-Specific_Harnesses)
- [[concepts/coding-benchmarks|Coding Benchmarks]] — [Wikipedia](https://en.wikipedia.org/wiki/Coding_Benchmarks)
- [[concepts/visual-rag|Retrieval Augmented Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Retrieval_Augmented_Generation)
- [[concepts/local-deployment|Local Deployment]] — [Wikipedia](https://en.wikipedia.org/wiki/Local_Deployment)

## Related Entities
- [[entities/ornith-10|Ornith-1.0]] — [Wikipedia](https://en.wikipedia.org/wiki/Ornith-1.0)
- [[entities/sam-witteveen|Sam Witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/Sam_Witteveen)
- [[entities/gpt-56|GPT-5.6]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.6)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- DeepReinforce — [Wikipedia](https://en.wikipedia.org/wiki/DeepReinforce)
- [[entities/gemma-4|Gemma 4]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemma_4)
- [[entities/qwen-35|Qwen 3.5]] — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3.5)
- [[entities/claude-opus-47|Claude Opus 4.7]] — [Wikipedia](https://en.wikipedia.org/wiki/Claude_Opus_4.7)
- Terminal-Bench 2.1 — [Wikipedia](https://en.wikipedia.org/wiki/Terminal-Bench_2.1)
- SWE-Bench Verified — [Wikipedia](https://en.wikipedia.org/wiki/SWE-Bench_Verified)
- Gradio — [Wikipedia](https://en.wikipedia.org/wiki/Gradio)
- Twitter — [Wikipedia](https://en.wikipedia.org/wiki/Twitter)