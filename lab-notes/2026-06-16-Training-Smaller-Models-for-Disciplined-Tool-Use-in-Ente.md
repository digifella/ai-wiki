---
title: Training Smaller Models for Disciplined Tool Use in Enterprise AI
date: 2026-06-16
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
---
# Training Smaller Models for Disciplined Tool Use in Enterprise AI
Generated: 2026-06-16 · API: Gemini 2.5 Flash · Modes: Summary

---

## Training Smaller Models for Disciplined Tool Use in Enterprise AI
**Clip title:** Stop Making Models Bigger, Make Them Behave — Kobie Crawford, Snorkel
**Author / channel:** AI Engineer
**URL:** https://www.youtube.com/watch?v=TNwJ1LMiENk

### Summary
This presentation by Kobie Crawford, Developer Advocate at Snorkel.AI, introduces a paradigm shift in AI development: "Stop Making Models Bigger. Make Them Behave." The core argument is that simply increasing model size doesn't necessarily lead to better performance, especially for complex enterprise tasks requiring tool use and precision, such as financial analysis. Instead, the focus should be on instilling "tool discipline" through targeted training.

The video highlights a critical problem with monolithic large language models (LLMs) in real-world applications. For tasks like financial analysis, which demand tool use, multi-step reasoning, SQL execution across schemas, and numerical calculations, larger models (exemplified by a 235 billion parameter model) often struggle. Despite their vast knowledge, these models frequently exhibit "undisciplined" behavior: they skip schema inspections, fail to identify correct table structures or column names, execute poorly formed SQL queries, retrieve bad data, and ultimately hallucinate answers. This demonstrates that raw reasoning capability doesn't guarantee effective task performance when proper tool interaction is lacking.

Snorkel.AI, in collaboration with the rLLM project at UC Berkeley, proposes a solution utilizing Reinforcement Learning (RL) and high-quality datasets to train smaller models for specific behaviors. Their approach involved generating a meticulously verified dataset (FinQA) containing both single and multi-table queries, ensuring correctness in query results and mathematical calculations. They then fine-tuned a 4 billion parameter model (Qwen3-4B-Instruct-2507) using RL within a specialized agentic environment equipped with tools like `get_table_names`, `get_table_info`, `sql_query`, and a calculator. Remarkably, this training, conducted using 8xH100 GPUs over approximately 21 hours, cost under $500.

The results were compelling: the RL-trained 4B model achieved a Pass@1 score of 59.7% on the Snorkel FinQA benchmark, significantly outperforming the 235B parameter model's 51.4%. The smaller model showcased crucial behaviors like discovering available tables, inspecting table schemas, and self-correcting faulty SQL queries—abilities the much larger model lacked, leading it to hallucinate. A surprising finding was that training exclusively on single-table data yielded the best performance, suggesting that foundational tool-use discipline is more critical than exposure to complex multi-table reasoning initially. The overall takeaway is that focusing on training for the *right behavior* rather than just scaling up model size can lead to more efficient, reliable, and deployable AI systems, advocating for a shift towards modular, role-based AI and investments in richer, real-world complexity benchmarks.

### Video Description & Links
#### Description
Qwen 3 235B was asked for YouTube's year over year ad revenue growth from 2023 to 2024. It queried a table that didn't exist, tried again, got nothing back both times, and hallucinated an answer. The 4B model Snorkel finetuned with RL called `get_table_name` first, inspected the schema, ran a query, hit a column error, self-corrected, and got the right answer. The training run cost under $500.

Kobe Crawford covers why tool discipline matters more than reasoning depth for this class of tasks, how single table training transferred cleanly to harder multi table problems (13.9% to 26.6% on the FinQA reasoning benchmark), and why breaking evals into rubrics helps identify which specific behavior to fix before writing any training data.

Speaker info:
- https://www.linkedin.com/in/kobie-crawford
- https://snorkel.ai/author/kobie-crawford/

#### Tags
`ai`, `ai engineer`, `ai engineering`, `software development`, `tech`, `startups`, `software architecture`, `machine learning`

#### URLs
- https://www.linkedin.com/in/kobie-crawford
- https://snorkel.ai/author/kobie-crawford/
