---
wiki-ingested: true
title: "Jev: TypeSafe AI's System 1 Classification for Software Automation"
date: 2026-09-19
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
type: "source-summary"
aliases:
  - "lab-notes/2026-09-19-Jev-TypeSafe-AIs-System-1-Classification-for-Software-Au"
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

## Jev: TypeSafe AI's System 1 Classification for Software Automation
**Clip title:** Jev - The Ultimate Classification Model?
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=X117w2Rark8

### Summary
The video discusses a new paradigm for [[concepts/weathernext-3|AI models]], contrasting the current focus of frontier labs on "[[concepts/reasoning|reasoning]]" with the practical needs of [[concepts/software-automation|software automation]]. For the past two years, leading [[entities/ai-labs|AI labs]] like [[entities/openai|OpenAI]], Anthropic, and [[entities/google|Google]] [[entities/google-gemini|Gemini]] have prioritized developing models capable of "[[concepts/system-2-thinking|System 2 thinking]]" – slow, deliberate, and effortful [[concepts/reasoning|reasoning]] achieved through longer [[concepts/chains-of-thought|chains of thought]] and extensive "[[concepts/thinking-budgets|thinking budgets]]." While these models are powerful for complex problems, they are often slow, require significant computational resources (tokens), and obscure their internal reasoning processes, making them inefficient and expensive for the rapid, clear-cut decisions software applications frequently demand.

A new company, [[entities/typesafe-ai|TypeSafe AI]], led by [[entities/diogo-almeida|Diogo Almeida]] (a co-author of OpenAI's seminal InstructGPT paper), introduces "Jev," a "[[concepts/system-one-model|System One model]]" designed to address this gap. Almeida argues that most decisions within software applications are not [[concepts/complex-reasoning|complex reasoning]] problems but rather simple classification tasks – akin to "System 1 thinking" which is fast, intuitive, and automatic. Jev eschews the conversational interface common to current LLMs and instead functions more like a direct function call, optimized for returning precise, structured data rather than free-form text.

Jev takes unstructured `state` (e.g., a customer support ticket, an agent trace, or a log file) and a set of `typed questions`. These questions fall into three categories: "Choice" (picking from a provided list), "Score" (rating on a defined scale), and "Noul" (a yes/no probability). The model outputs a direct, machine-readable value (e.g., JSON), eliminating the need for post-processing or parsing text responses. This design significantly improves efficiency, delivering end-to-end response times between 70-500ms, which is 40x-200x faster than traditional frontier models for similar tasks. Furthermore, TypeSafe AI implements a unique pricing model where output tokens are free, as the model generates the entire structured output in a single, parallel pass, drastically reducing costs.

Practical demonstrations highlight Jev's capabilities across various automation scenarios, including quickly routing customer support tickets, performing code reviews to detect issues like SQL injection, moderating content, assisting with agent tool selection, and executing complex sequential workflows for tasks like order fulfillment. Jev reliably delivers high-confidence answers with explicit probabilities for each option and is designed to prevent hallucinations, ensuring type-safe outputs that adhere to a predefined schema. TypeSafe AI attributes this performance to a novel [[concepts/model-architecture|model architecture]], a parallel sampler, and a training method called [[concepts/calibrated-decisions|Reinforcement Learning for Calibrated Decisions]] ([[concepts/rlcd|RLCD]]), which optimizes for "epistemically honest probabilities" on [[concepts/system-one-intelligence|System One]] tasks.

In conclusion, Jev represents a strategic departure from the general-purpose, chat-focused LLMs by specializing in fast, structured, and reliable decision-making for software automation. By offering quick, cost-effective, and non-hallucinatory outputs tailored for classification and similar tasks, TypeSafe AI aims to provide a more suitable and efficient AI interface for software applications. This approach challenges the prevailing trend of fine-tuning large, slow models for tasks that could be handled by a more specialized, 'System One' intelligence, potentially paving the way for more impactful and integrated AI solutions in enterprise software.

### Video Description & Links
#### Description
Jev by Typesafe AI is an interesting new model that focuses more on System 1 thinking with extremely high-speed results to be able to do a variety of different classification tasks.

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
00:32 Kinds of Reasoning
01:54 Jev by TypeSafe AI
03:29 Kinds of Questions
04:56 Demo
05:31 Demo: Choice
06:29 Demo: Score
07:45 Demo: Noul
09:18 Practical Demo
11:50 Stringing Actions Together
12:49 How it works

#### Tags
`Jev`, `TypeSafe AI`, `System One model`, `System 1 model`, `Diogo Almeida`, `structured output`, `typed output`, `LLM classification`, `text classification`, `LLM latency`, `inference latency`, `low latency AI`, `LLM as a judge`, `chain of thought`, `reasoning models`, `InstructGPT`, `instruction tuning`, `RLHF`, `OpenAI`, `agent routing`, `function calling`, `tool calling`, `AI for developers`, `AI engineering`, `LLM API`, `decision model`, `calibrated probabilities`, `classifier`, `prompt engineering`, `structured generation`

#### URLs
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/system-1-classification|System 1 classification]]
- [[concepts/system-2-thinking|System 2 thinking]]
- [[concepts/software-automation|software automation]]
- [[concepts/zero-shot-prompting|reasoning models]] — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_model)
- [[concepts/thinking-budgets|thinking budgets]]
- [[concepts/chains-of-thought|chains of thought]]
- [[concepts/zero-shot-prompting|TypeSafe AI]]
- [[concepts/calibrated-decisions|Reinforcement Learning for Calibrated Decisions]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/rlcd|RLCD]] — [Wikipedia](https://en.wikipedia.org/wiki/Jev_%28AI_model%29)
- [[concepts/output-validation|hallucination prevention]]
- low-latency [[concepts/ai-inference|inference]]

## Related Entities
- [[entities/jev|Jev]]
- [[entities/sam-witteveen|Sam Witteveen]]
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[entities/google-gemini|Google Gemini]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_Gemini)
- [[entities/typesafe-ai|TypeSafe AI]]
- [[entities/diogo-almeida|Diogo Almeida]] — [Wikipedia](https://en.wikipedia.org/wiki/Diogo_Almeida)
- Anthropic — [Wikipedia](https://en.wikipedia.org/wiki/Anthropic)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- InstructGPT — [Wikipedia](https://en.wikipedia.org/wiki/GPT-3)