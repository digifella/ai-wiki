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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Rephrasing Prompts

Rephrasing prompts are system instructions designed to improve the quality of user queries before an AI agent processes them. Rather than responding directly to an initial question, the agent first analyzes the user's intent and reconstructs the query for greater clarity, precision, and appropriate scope. This intermediate step reduces ambiguity and helps align the query with what the user actually needs, rather than what they initially asked.

## Mechanism

The rephrasing process typically involves step-by-step reasoning where the agent examines the original query to identify potential ambiguities, missing context, or overly broad constraints. By breaking down the user's input, the system can infer the underlying goal and formulate a more effective version of the prompt. This reconstructed query is then passed to the main processing pipeline, ensuring that the subsequent response is more accurate and relevant to the user's true objective.

## Benefits

Implementing rephrasing prompts enhances the overall reliability of AI agents by mitigating the effects of vague or poorly structured user inputs. It allows the system to handle complex or ambiguous requests more gracefully, reducing the likelihood of hallucinations or irrelevant answers. This approach is particularly useful in domains where precision is critical, as it ensures that the agent operates within the correct parameters before generating a final output.
