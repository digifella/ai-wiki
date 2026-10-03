---
type: concept
domain: ai-agents
tags:
  - "lean-prompts"
  - "prompting-paradigm"
  - "external-context"
  - "rag"
  - "attention-mechanism"
aliases:
  - "Lean Prompting"
  - "Minimalist Prompting"
summary: Lean Prompts is a paradigm that minimizes in-context instructions and offloads data to external mechanisms like RAG to leverage model capabilities efficiently.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-25T20:31:13+00:00" }
group: reasoning-context-prompting
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Lean Prompts

**Lean Prompts** refer to a modern prompting paradigm where users minimize in-context instructions and rely on the model's inherent capabilities, while offloading specific, variable, or verbose data to **External Context** mechanisms (e.g., RAG, file attachments, or system-level context windows).

## Core Principles
- **Minimize In-Context Instructions**: Avoid verbose explanations of the model's role or basic task definitions; assume the model is already "smart" and capable.
- **Maximize External Context**: Move static, large, or variable data out of the prompt text and into dedicated context sources.
- **Shift in Strategy**: Effective prompting is no longer about "teaching" the model how to think, but about efficiently structuring the input data it needs to act.

## Recent Developments
- **Industry Shift**: Both Anthropic and [[entities/openai]] have updated their internal guidelines and model behaviors to favor leaner inputs.
- **Key Insight**: As models improve, verbose prompting often yields diminishing returns or even performance degradation due to [[concepts/attention-mechanism|attention]] dilution.
- **Source Analysis**: See [[lab-notes/2026-08-26-Anthropic-and-OpenAIs-New-Prompting-Rules-Leaner-Prompts|Anthropic and OpenAI's New Prompting Rules: Leaner Prompts and External Context]] for a detailed breakdown of this shift.
- **Video Reference**: [Anthropic and OpenAI's New Prompting Rules: Leaner Prompts and External Context](https://www.youtube.com/watch?v=OiplQPjdA4c) by [[entities/enovair|Enovair]] discusses the transition from outdated, instruction-heavy prompting to this new efficiency-focused approach.

## Implementation
- Use RAG for large documents instead of pasting text into the prompt.
- Use System Prompts for persistent role definitions rather than repeating them in every user message.
- Keep user messages concise and focused on the specific query or action required.
