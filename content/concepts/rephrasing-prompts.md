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
updated: 2026-05-01
---
# Rephrasing Prompts

Rephrasing prompts are [[concepts/system-instructions|system instructions]] designed to improve the quality of user queries before an [[concepts/ai-agent|AI agent]] processes them. Rather than responding directly to an initial question, the agent first analyzes the user's intent and reconstructs the query for greater clarity, precision, and appropriate scope. This intermediate step reduces [[concepts/ambiguity|ambiguity]] and helps align the query with what the user actually needs, rather than what they initially asked.

The technique employs structured [[concepts/reasoning|reasoning]] to break down complex requests into their component parts. The agent identifies unclear [[concepts/terminology|terminology]], unstated assumptions, and scope creep, then reformulates the prompt using step-by-step logic. This approach is particularly useful for open-ended or multifaceted questions where the original phrasing may be too broad, too narrow, or conceptually muddled. By rephrasing before answering, the agent can provide more targeted and useful [[concepts/responses|responses]].

Rephrasing prompts typically function as part of a broader [[concepts/system-prompt|system prompt]] framework that positions the AI as an expert advisor. The agent may seek clarification directly from the user about their underlying goals, constraints, and context before proceeding with a full response. This conversational clarification phase, combined with internal rephrasing, ensures that subsequent answers are calibrated to actual needs rather than literal question wording.
