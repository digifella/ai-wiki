---
wiki-ingested: true
title: "Jev: TypeSafe AI's New Frontier Model for Reliable Automation"
date: 2026-09-18
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: open-systems-local-models
type: "source-summary"
aliases:
  - "lab-notes/2026-09-18-Jev-TypeSafe-AIs-New-Frontier-Model-for-Reliable-Automat"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Jev: TypeSafe AI's New Frontier Model for Reliable Automation
**Clip title:** This New Frontier Model Is Not An LLM.
**Author / channel:** Tim Carambat
**URL:** https://www.youtube.com/watch?v=933mV9Xqo4I

### Summary
The video introduces "Jev," a "System One model" developed by [[entities/typesafe-ai|TypeSafe AI]], which positions itself as a significant departure from traditional [[concepts/large-language-models|Large Language Models]] (LLMs) like [[entities/chatgpt|ChatGPT]]. The speaker, Timothy Carambat, highlights that while he doesn't consider himself an influencer, he felt compelled to discuss Jev due to its immense potential. He explains that traditional LLMs, despite their intelligence, face challenges such as "mode dropping," overconfidence, and a general lack of reliability for automation, often requiring human intervention in the loop.

TypeSafe AI's launch video, presented by founder [[entities/diogo-almeida|Diogo Almeida]] (who co-created ChatGPT and [[concepts/reinforcement-learning-from-human-feedback|RLHF]]), emphasizes that existing LLMs, optimized for human preferences, struggle with true automation due to their sequential generation process. Jev, on the other hand, is built with a new architecture, sampler, and a [[concepts/calibrated-decisions|Reinforcement Learning for Calibrated Decisions]] ([[concepts/rlcd|RLCD]]) algorithm, specifically optimized for automation. It boasts parallel processing instead of sequential [[concepts/computation|computation]], allowing it to provide answers "near instantly" – hundreds of times faster than traditional LLMs for structured queries.

A key differentiator for Jev is its ability to output decisions with calibrated probabilities and confidence levels, rather than just generating words. This structured output means Jev cannot hallucinate and offers a high degree of reliability. Furthermore, TypeSafe AI claims Jev is significantly more cost-effective, with input tokens priced per billion (at $0.042) and output tokens being free, making its intelligence-per-dollar "off the charts." The speaker clarifies that this model excels at deterministic tasks like categorizing emails or making specific selections from a limited set of options, providing a direct, reliable, and parseable output.

In conclusion, Jev is presented not as a competitor to LLMs in conversational AI, but as a complementary tool crucial for building robust, automated AI systems. It fills the gap where traditional LLMs are inefficient or unreliable due to their [[concepts/reasoning|reasoning]] process and potential for hallucination. By providing fast, cheap, and deterministic outputs for tasks like [[concepts/tool-calls|tool calling]], filtering, and classification, Jev enables developers to build more reliable systems and even implement complex functionalities like model routing, where Jev could determine which specialized model is best suited for a given task. This marks a fundamental shift towards more dependable and scalable AI applications, potentially even running effectively on [[concepts/consumer-hardware|consumer hardware]].

### Video Description & Links
#### Description
Recently in the news or on X there was an announcement from TypeSafe, which has team members who founded the concept of RLHF and InstructGPT, move toward making a different type of frontier model.

I applied for access, but through a friend got some exposure to what this model can do. Its not AGI (and doesn't have to be!) but it will 100% make more reliable AI systems and automations possible.

Essentially, this allows you to tap into the intelligence of frontier models, but fully constrain their output to some known set of values. This means zero hallucinations as well as super fast parallel [[concepts/ai-inference|inference]] - since it functionally works like classifier and ranks options by probability.

*References* :
AnythingLLM: https://anythingllm.com/
TypeSafe Website: https://typesafe.ai/
Manifesto: https://typesafe.ai/manifesto
System One Model (JEV): https://typesafe.ai/blog/introducing-system-one-models-and-jev

*Chapters* :
0:00 Welcome back!
0:57 System One Model (Jev) Launch Video
3:40 Why do these models need to exist?
6:10 How does this differ from LLMs in use and speed?
10:09 Deterministic Outputs
11:32 What are some more use cases?
12:50 This is going to make more AI Automations more reliable
14:00 My opinion on this new class of models

#### URLs
- https://anythingllm.com/
- https://typesafe.ai/
- https://typesafe.ai/manifesto
- https://typesafe.ai/blog/introducing-system-one-models-and-jev

## Related Concepts
- [[concepts/system-one-model|System One model]]
- [[concepts/system-one-model|TypeSafe AI]]
- [[concepts/reliable-automation|Reliable Automation]]
- [[concepts/post-transformer-ai|LLM limitations]]
- [[concepts/mode-drop|Mode drop]]
- [[concepts/calibrated-decisions|Reinforcement Learning for Calibrated Decisions]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/rlcd|RLCD]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/tool-calls|Tool calling]]
- [[concepts/inference-speed|Inference speed]]
- [[concepts/model-performance|Cost-effectiveness]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost-effectiveness_analysis)
- [[concepts/consumer-hardware|Consumer hardware]]

## Related Entities
- [[entities/jev|Jev]]
- [[entities/typesafe-ai|TypeSafe AI]]
- [[entities/tim-carambat|Tim Carambat]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- [[entities/diogo-almeida|Diogo Almeida]] — [Wikipedia](https://en.wikipedia.org/wiki/Diogo_Almeida)
- [[entities/chatgpt|ChatGPT]] — [Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- RLHF — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
- InstructGPT — [Wikipedia](https://en.wikipedia.org/wiki/GPT-3)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- YouTube — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)
- X — [Wikipedia](https://en.wikipedia.org/wiki/X)