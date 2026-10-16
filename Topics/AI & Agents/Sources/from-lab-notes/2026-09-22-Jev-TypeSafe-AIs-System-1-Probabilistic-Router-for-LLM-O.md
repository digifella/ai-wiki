---
wiki-ingested: true
title: "Jev: TypeSafe AI's System 1 Probabilistic Router for LLM Orchestration"
date: 2026-09-22
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: ai-agents
group: agent-systems-skills
type: "source-summary"
aliases:
  - "lab-notes/2026-09-22-Jev-TypeSafe-AIs-System-1-Probabilistic-Router-for-LLM-O"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

## Jev: TypeSafe AI's System 1 Probabilistic Router for LLM Orchestration
**Clip title:** How to Build Things with Jev & OpenJevs
**Author / channel:** Sam Witteveen
**URL:** https://www.youtube.com/watch?v=ZR7anrL50xs

### Summary
This video introduces Jev, a "[[concepts/system-1-model|System 1 model]]" developed by [[entities/typesafe-ai|TypeSafe AI]], designed to act as an intelligent router for [[concepts/large-language-models|Large Language Models]] (LLMs). Rather than generating text, Jev's core function is to make rapid, probabilistic decisions about how to process user prompts. Users provide Jev with a "state" (the content to be judged) and a set of "[[concepts/typed-questions|typed questions]]" tailored to various criteria. Jev then returns precise, typed answers along with confidence and probability scores, allowing applications to automate complex routing decisions. This approach aims to replace traditional `if/else` logic for LLM orchestration with a more efficient and context-aware system.

Jev offers three primary question types for making these decisions: "Choice" to categorize a request (e.g., as chit-chat, code, or an image generation task); "Score" to rate the input on a custom rubric (e.g., difficulty from 1 to 10); and "Noul" to determine the truthfulness of a statement (e.g., "does this contain private data?"). All three questions are processed simultaneously in a single API call, contributing to Jev's remarkable speed, with typical end-to-end response times ranging from 70-500 milliseconds. A key benefit highlighted is [[concepts/cost-efficiency|cost-efficiency]], as Jev charges only for input tokens (around $0.042 per million tokens) and provides output tokens for free, making it a very economical solution for intelligent routing.

The video demonstrates a practical Jev Router implementation running locally on a machine, which acts as an API endpoint. This router integrates with various LLMs, including a local MiniCPM5-2B for general chat, [[concepts/competitive-programming|DeepSeek V4.1 Flash]] (via OpenRouter) for code-related tasks, and a local Qwen-Image-2.1 for image generation. A critical aspect of this setup is [[concepts/privacy|privacy]]; Jev can detect Personally Identifiable Information (PII) within a prompt and, based on configured rules, ensure that such requests are handled exclusively by local models, preventing sensitive data from being sent to cloud-based services. This intelligent routing allows for optimal use of resources, directing simple or private tasks to smaller, local models and more complex or non-private tasks to powerful cloud models.

In conclusion, Jev offers a powerful and flexible framework for building agentic AI applications, allowing developers to orchestrate multiple LLMs effectively. By providing a fast, cheap, and reliable decision-making layer, it enables applications to dynamically route prompts based on task type, difficulty, and [[concepts/privacy|privacy]] requirements. The demo effectively showcases how Jev can intelligently manage diverse user requests while optimizing for cost (the entire demo cost less than one cent) and performance. Ultimately, Jev empowers developers to rethink their AI architecture, prioritizing efficiency, cost savings, and data privacy in their LLM-powered solutions.

### Video Description & Links
#### Description
In this video, we build a model router using both the API-based original Jev and also using Semif. 

👨‍💻 Github: code will be up in the next day or so
📺 2nd Channel: Coming Soon!!

🕵️ Interested in building LLM Agents? Fill out the form below

👨‍💻Github:
https://github.com/samwit/llm-tutorials

⏱️Time Stamps:
00:00 Intro
01:45 Quick Recap on Jev
05:59 Model Router Demo
06:21 Models Used for both Local and Cloud
07:18 Running using any Model
07:37 Running using AutoJev
11:47 Architecture
15:06 Running using SemIf
16:46 Stats

#### Tags
`jev`, `jev router`, `llm router`, `ai router`, `model routing`, `llm routing`, `local llm`, `local ai`, `run llm locally`, `openai compatible api`, `lm studio`, `ollama`, `openrouter`, `minicpm`, `minicpm5 2b`, `deepseek`, `deepseek v4.1`, `qwen image`, `qwen image 2.1`, `typesafe ai`, `small language model`, `slm`, `llm cost optimization`, `cheap llm`, `llm privacy`, `pii`, `keep data local`, `self hosted ai`, `ai agents`, `agent routing`, `prompt routing`, `semantic router`, `python ai`, `ai tutorial`, `open source ai`, `sam witteveen`

#### URLs
- https://github.com/samwit/llm-tutorials

## Related Concepts
- [[concepts/system-1-model|System 1 model]]
- [[concepts/probabilistic-router|probabilistic router]]
- [[concepts/zero-shot-prompting|LLM orchestration]]
- [[concepts/typed-questions|typed questions]]
- [[concepts/session-context|state management]] — [Wikipedia](https://en.wikipedia.org/wiki/State_management)
- [[concepts/zero-shot-prompting|TypeSafe AI]]
- [[concepts/cost-efficiency|cost efficiency]] — [Wikipedia](https://en.wikipedia.org/wiki/Cost_efficiency)
- low latency [[concepts/ai-inference|inference]]
- [[concepts/vision-language-model|agentic AI]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_agent)

## Related Entities
- [[entities/jev|Jev]]
- [[entities/typesafe-ai|TypeSafe AI]]
- [[entities/sam-witteveen|Sam Witteveen]]
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- OpenRouter — [Wikipedia](https://en.wikipedia.org/wiki/OpenRouter)