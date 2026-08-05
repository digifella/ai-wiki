---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "workflow"
  - "context-window"
  - "long-context"
  - "pflash"
  - "hermes-agent"
  - "agent-workflow"
  - "context-window-management"
  - "task-decomposition"
  - "iterative-refinement"
aliases:
  - "Agent Workflow"
  - "Iterative Agent Process"
  - "Structured AI Action Sequence"
  - "Context-Aware Agent Loop"
summary: Agent Workflow is a structured sequence of iterative actions for AI agents to handle complex tasks through task decomposition, addressing context window limitations in long-running sessions via iterative refinement and adaptive prefill techniques.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Agent Workflow

Structured sequence of actions for [[concepts/agentic-ai|AI agents]] to handle [[concepts/complex-tasks|complex tasks]], especially addressing **[[concepts/context-window|context window]] limitations** in [[concepts/long-running-sessions|long-running sessions]]. Key principle: avoid "one-shot" generation of large applications.

- **Core Challenge**: [[concepts/ai-coding-agents|AI coding agents]] (e.g., [[entities/claude-ai]]) fail when attempting monolithic [[concepts/code-generation|code generation]] due to [[concepts/context-window-limitations]].
- **Effective [[concepts/solution|Solution]]**: Iterative [[concepts/task-decomposition|task decomposition]] and refinement (adapted from [[entities/anthropic]]'s approach), breaking complex features into manageable steps.
- **Practical Implementation**:
  - Use incremental code generation with explicit context resets
  - Maintain task-specific [[concepts/memory|memory]] buffers
  - Validate intermediate outputs before proceeding
- **Advanced [[concepts/context-management|Context Management]]**:
  - [[lab-notes/2026-06-03-Adaptive-PFlash-and-Hermes-Agent-Self-Tuning-LLM-Prefill|Adaptive PFlash and Hermes Agent: Self-Tuning LLM Prefill for Long Contexts]] demonstrates self-tuning prefill [[concepts/causes|mechanisms]] for long contexts on single GPUs, enhancing efficiency beyond standard window management.
  - Adaptive compression features in [[concepts/prefill-flash|PFlash]] allow for optimized handling of extensive historical data without full regeneration.
- **Source**: Fixing long running [[concepts/claude-code|Claude code]] sessions demonstrates this workflow efficacy.
