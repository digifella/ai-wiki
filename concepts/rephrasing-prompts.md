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
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Rephrasing Prompts

Rephrasing prompts are system instructions designed to improve the quality of user queries before an AI agent processes them. Rather than responding directly to an initial question, the agent first analyzes the user's intent and reconstructs the query for greater clarity, precision, and appropriate scope. This intermediate step reduces ambiguity and helps align the query with what the user actually needs, rather than what they initially asked.

## Mechanism

The rephrasing process typically involves step-by-step reasoning where the agent examines the original query to identify unclear terms, implicit assumptions, missing context, or scope creep. The agent then produces a revised version that is more specific, removes potential misinterpretations, and frames the question in a form more likely to generate a useful response. This reformulated query may be shown to the user for confirmation or processed directly, depending on the implementation.

## Benefits and Limitations

Rephrasing prompts can significantly reduce wasted effort by clarifying intent early, particularly for open-ended or complex requests. However, they add latency and processing steps, and the rephrased query may occasionally drift from what the user actually intended if the agent makes incorrect assumptions about context or priority. The effectiveness of this approach depends heavily on the quality of the system instructions and the domain-specificity of the use case.
