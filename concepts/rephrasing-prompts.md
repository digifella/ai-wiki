---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "prompt-engineering"
  - "query-clarification"
  - "step-by-step-reasoning"
  - "system-prompts"
  - "response-optimization"
aliases:
  - "prompt-clarification"
  - "query-rephrasing"
  - "prompt-refinement"
summary: A system prompt designed to rephrase user queries for enhanced clarity, precision, and optimal scope using step-by-step reasoning.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Rephrasing Prompts

Rephrasing prompts are system instructions designed to improve the quality of user queries before an AI agent processes them. Rather than responding directly to an initial question, the agent first analyzes the user's intent and reconstructs the query for greater clarity, precision, and appropriate scope. This intermediate step reduces ambiguity and helps align the query with what the user actually needs, rather than what they initially asked.

The process typically involves a step-by-step reasoning phase where the agent identifies potential ambiguities, missing context, or logical gaps in the original input. By explicitly outlining these observations, the system ensures that the rephrased version captures the underlying goal accurately. This method prevents misinterpretation that often arises from vague or poorly structured initial requests.

Once the analysis is complete, the agent generates a refined version of the query that is optimized for the downstream task. This rephrased input serves as a more effective prompt for the core model, leading to higher accuracy and more relevant outputs. The technique is particularly useful in complex domains where precise terminology and clear constraints are critical for successful execution.
