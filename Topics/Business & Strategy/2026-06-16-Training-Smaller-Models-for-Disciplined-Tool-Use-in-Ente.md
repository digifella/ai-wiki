---
wiki-ingested: true
title: Training Smaller Models for Disciplined Tool Use in Enterprise AI
date: 2026-06-16
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: business-strategy
group: enterprise-strategy-future-work
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=business-strategy name=Business & Strategy

Generated: 2026-06-16 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Training Smaller Models for Disciplined Tool Use in Enterprise AI
**Clip title:** Stop Making Models Bigger, Make Them Behave — Kobie Crawford, Snorkel
**[[entities/tasia-custode|Author]] / channel:** AI Engineer
**URL:** https://www.youtube.com/watch?v=TNwJ1LMiENk

### Summary
This presentation by [[entities/kobie-crawford|Kobie Crawford]], [[concepts/developer|Developer]] Advocate at [[entities/snorkelai|Snorkel.AI]], introduces a [[concepts/mindset-shift|paradigm shift]] in [[concepts/ai-development|AI development]]: "Stop Making Models Bigger. Make Them Behave." The core argument is that simply increasing [[concepts/code-size|model size]] doesn't necessarily lead to better performance, especially for complex enterprise tasks requiring [[concepts/acting|tool use]] and [[concepts/accuracy|precision]], such as financial analysis. Instead, the focus should be on instilling "tool discipline" through targeted training.

The video highlights a critical problem with monolithic [[concepts/large-language-model-llm|large language models]] (LLMs) in real-world applications. For tasks like financial analysis, which demand [[concepts/acting|tool use]], [[concepts/deep-reasoning|multi-step reasoning]], SQL execution across schemas, and numerical calculations, larger models (exemplified by a 235 billion parameter model) often struggle. Despite their vast knowledge, these models frequently exhibit "undisciplined" behavior: they skip schema inspections, fail to identify correct table structures or column names, execute poorly formed SQL queries, retrieve bad data, and ultimately hallucinate answers. This demonstrates that raw reasoning capability doesn't guarantee effective task performance when proper tool interaction is lacking.

Snorkel.AI, in collaboration with the rLLM project at UC Berkeley, proposes a [[concepts/solution|solution]] utilizing [[concepts/reinforcement-learning|Reinforcement Learning]] (RL) and [[concepts/excellence|high-quality]] datasets to train smaller models for specific behaviors. Their approach involved generating a meticulously verified dataset (FinQA) containing both single and multi-table queries, ensuring [[concepts/accuracy|correctness]] in query results and mathematical calculations. They then fine-tuned a 4 billion parameter model (Qwen3-4B-Instruct-2507) using RL within a specialized agentic environment equipped with tools like `get_table_names`, `get_table_info`, `sql_query`, and a calculator. Remarkably, this training, conducted using 8xH100 GPUs over approximately 21 hours, cost under $500.

The results were compelling: the RL-trained 4B model achieved a Pass@1 score of 59.7% on the Snorkel FinQA benchmark, significantly outperforming the 235B parameter model's 51.4%. The smaller model showcased crucial behaviors like discovering available tables, inspecting table schemas, and self-correcting faulty SQL queries—abilities the much larger model lacked, leading it to hallucinate. A surprising finding was that training exclusively on single-table data yielded the best performance, suggesting that foundational [[concepts/tool-use-automation|tool-use]] discipline is more critical than [[concepts/exposure|exposure]] to complex multi-table reasoning initially. The overall takeaway is that focusing on training for the *right behavior* rather than just [[concepts/computational-scaling|scaling]] up [[concepts/code-size|model size]] can lead to more efficient, reliable, and deployable [[concepts/ai-models|AI systems]], advocating for a shift towards modular, role-based AI and investments in richer, real-world complexity benchmarks.

### Video Description & Links
#### Description
[[concepts/qwen-llm|Qwen]] 3 235B was asked for YouTube's year over year [[concepts/ad-revenue|ad revenue]] growth from 2023 to 2024. It queried a table that didn't exist, tried again, got nothing back both times, and hallucinated an answer. The 4B model Snorkel finetuned with RL called `get_table_name` first, inspected the schema, ran a query, hit a column error, self-corrected, and got the right answer. The training run cost under $500.

Kobe Crawford covers why tool discipline matters more than reasoning depth for this class of tasks, how single table training transferred cleanly to harder multi table problems (13.9% to 26.6% on the FinQA reasoning benchmark), and why breaking evals into rubrics helps identify which specific behavior to fix before [[concepts/writing|writing]] any [[concepts/custom-dataset|training data]].

[[entities/speaker|Speaker]] info:
- https://www.linkedin.com/in/kobie-crawford
- https://snorkel.ai/author/kobie-crawford/

#### Tags
`ai`, `ai engineer`, `ai engineering`, `software development`, `tech`, `startups`, `software architecture`, `machine learning`

#### URLs
- https://www.linkedin.com/in/kobie-crawford
- https://snorkel.ai/author/kobie-crawford/

## Related Concepts
- [[concepts/model-size|model size]] — [Wikipedia](https://en.wikipedia.org/wiki/model_size)
- [[concepts/disciplined-tool-use|disciplined tool use]] — [Wikipedia](https://en.wikipedia.org/wiki/disciplined_tool_use)
- [[concepts/enterprise-ai|enterprise AI]] — [Wikipedia](https://en.wikipedia.org/wiki/enterprise_AI)
- [[concepts/precision-task|precision task]] — [Wikipedia](https://en.wikipedia.org/wiki/precision_task)
- [[concepts/light-web|financial analysis]] — [Wikipedia](https://en.wikipedia.org/wiki/financial_analysis)
- Reinforcement Learning (RL) — [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_Learning_%28RL%29)
- [[concepts/small-language-models|Small Language Models]] — [Wikipedia](https://en.wikipedia.org/wiki/Small_Language_Models)
- SQL Query Generation — [Wikipedia](https://en.wikipedia.org/wiki/SQL_Query_Generation)
- [[concepts/hallucination|Model Hallucination]] — [Wikipedia](https://en.wikipedia.org/wiki/Model_Hallucination)
- Schema Inspection — [Wikipedia](https://en.wikipedia.org/wiki/Schema_Inspection)
- [[concepts/self-improvement|Self-Correction]] — [Wikipedia](https://en.wikipedia.org/wiki/Self-Correction)
- Agentic Environment — [Wikipedia](https://en.wikipedia.org/wiki/Agentic_Environment)
- Pass@1 Score — [Wikipedia](https://en.wikipedia.org/wiki/Pass%401_Score)
- FinQA Benchmark — [Wikipedia](https://en.wikipedia.org/wiki/FinQA_Benchmark)
- Role-Based AI — [Wikipedia](https://en.wikipedia.org/wiki/Role-Based_AI)
- [[concepts/multi-step-reasoning|Multi-Step Reasoning]] — [Wikipedia](https://en.wikipedia.org/wiki/Multi-Step_Reasoning)

## Related Entities
- [[entities/kobie-crawford|Kobie Crawford]] — [Wikipedia](https://en.wikipedia.org/wiki/Kobie_Crawford)
- [[entities/snorkelai|Snorkel.AI]] — [Wikipedia](https://en.wikipedia.org/wiki/Snorkel.AI)
- UC Berkeley — [Wikipedia](https://en.wikipedia.org/wiki/UC_Berkeley)
- rLLM Project — [Wikipedia](https://en.wikipedia.org/wiki/rLLM_Project)
- Qwen3-4B-Instruct-2507 — [Wikipedia](https://en.wikipedia.org/wiki/Qwen3-4B-Instruct-2507)
- Qwen 3 235B — [Wikipedia](https://en.wikipedia.org/wiki/Qwen_3_235B)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- [[entities/ai-engineer|AI Engineer]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Engineer)
- FinQA — [Wikipedia](https://en.wikipedia.org/wiki/FinQA)
- H100 GPUs — [Wikipedia](https://en.wikipedia.org/wiki/H100_GPUs)
- [[entities/youtube|YouTube]] — [Wikipedia](https://en.wikipedia.org/wiki/YouTube)