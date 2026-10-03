---
type: concept
domain: ai-agents
tags:
  - "prompting"
  - "llm-optimization"
  - "claude-opus"
  - "cost-efficiency"
  - "anthropic"
aliases:
  - "Prompting Guidelines"
  - "LLM Interaction Rules"
  - "Claude Opus 5.5 Prompting"
summary: This page outlines core principles and model-specific optimization strategies for interacting with Large Language Models, with a focus on cost-efficiency and updated rules for Anthropic Claude Opus 5.5.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-24T20:37:27+00:00" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Prompting Rules

Core principles and optimization strategies for interacting with [[concepts/large-language-models|Large Language Models]] (LLMs), specifically tailored to model-specific behaviors and [[concepts/cost-efficiency|cost-efficiency]].

## Anthropic Claude Opus 5.5 Specifics

Recent analysis indicates that legacy prompting techniques may be inefficient or costly for [[entities/claude-opus-55]]. Key updates include:

- **Strategy Shift:** Methods effective in previous model generations are less efficient for [[entities/opus-5|Opus 5]].5 [[lab-notes/2026-09-24-Anthropic-Claude-Opus-5.5-Prompting-Rules-and-Optimizati|Anthropic Claude Opus 5.5 Prompting Rules and Optimization Guide]].
- **Cost Awareness:** Optimization is critical to manage API costs associated with this model tier.
- **Source Analysis:** Detailed breakdown of 12 new rules provided by RoboNuggets ([[entities/jay-e|Jay E]]).

## General Prompting Principles

- **Clarity:** Explicit instructions reduce hallucination rates.
- **[[concepts/context-length|Context Window]]:** Manage input length to maintain performance.
- **Iterative Refinement:** Use feedback loops to improve [[concepts/output-quality|output quality]].

## References

- [Anthropic Claude Opus 5.5 Prompting Rules and Optimization Guide](https://www.youtube.com/watch?v=vsGwx28z4jk)
