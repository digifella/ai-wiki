---
type: concept
domain: ai-agents
tags:
  - "prompting-strategy"
  - "context-window"
  - "iterative-development"
  - "ai-coding"
  - "problem-solving"
aliases:
  - "Single Prompt Approach"
  - "Monolithic Generation"
  - "All-at-once Prompting"
summary: The One-Shot Approach attempts to generate complete solutions in a single prompt, often failing due to context window limitations, which can be mitigated by breaking tasks into iterative steps.
updated: 2026-07-12
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# One-Shot Approach

A technique where an [[concepts/ai-agent|AI agent]] attempts to generate a complete [[concepts/solution|solution]] (e.g., full application or complex feature) in a single prompt. Prone to failure due to **[[concepts/context-window-limitations|context window limitations]]** in large models.

## Problem
- **[[concepts/context-window|Context Window]] Constraints**: Models like [[entities/claude|Claude]] have fixed context lengths (e.g., 200k [[concepts/tokens|tokens]]), making it impossible to process large codebases or complex features in one interaction.
- **Result**: Incomplete or inaccurate outputs when attempting "one-shot" generation for non-trivial tasks.

## Solution: Incremental Workflow
- Developed by [[entities/anthropic|Anthropic]] and adapted by the [[entities/video-creator|video creator]] to overcome context limitations.
- Breaks tasks into iterative, manageable steps instead of monolithic prompts.
- Enables long-running agents to maintain context through progressive refinement.

## Related Concepts
- [[concepts/context-window]]
- [[concepts/ai-coding|AI Coding]] Agent
- Long-Running Tasks

2026 04 14 Fixing long running [[concepts/ai-assisted-coding|Claude code]] sessions
