---
type: concept
domain: history-anthropology
tags:
  - "ai-architecture"
  - "agentic-systems"
  - "workflow-pattern"
  - "computational-transformation"
  - "input-generate-output"
  - "no-code-development"
aliases:
  - "IGO architecture"
  - "AI workflow pattern"
  - "Computational transformation layer"
  - "Autonomous agent design pattern"
summary: A design pattern for AI workflows and autonomous agents that transforms an initial state through a computational transformation layer to reach a terminal state.
updated: 2026-07-11
group: architecture-cities-heritage
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=history-anthropology name=History & Anthropology

# Input-Generate-Output architecture

A fundamental design pattern for AI workflows and [[concepts/agentic-systems|autonomous agents]], where a system transforms a starting state through a computational transformation layer to reach a [[concepts/cli|terminal]] state.

## Core Components
- **Input**: The initial data, [[concepts/user-query|user query]], or environmental trigger that initiates the workflow.
- **Generate**: The processing layer involving [[concepts/reasoning|reasoning]], computation, or transformation. This often involves [[concepts/prompt-chaining]], [[concepts/llms]], and the integration of tools.
- **Output**: The resulting artifact, response, or actionable product produced by the system.

## Implementations
- **[[entities/google-opal|Google Opal]] ([[concepts/scientific-experiment|Experiment]])**: A [[concepts/no-code|no-code]] implementation of this architecture from [[entities/google-labs]].
    - Allows users to describe, create, and share [[concepts/ai-mini-apps|AI mini-apps]] using natural language.
    - Leverages the architecture by chaining together prompts, models, and tools.

## Backlinks
- 2026 04 14 [[concepts/no-code|No code]] [[concepts/ai-development|AI development]] using [[concepts/workflow-creation|Opal]]
