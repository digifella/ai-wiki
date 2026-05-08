---
type: concept
domain: history-anthropology
tags:
  - "architecture"
  - "ai"
  - "no-code"
  - "automation"
  - "google-labs"
  - "ai-workflows"
  - "design-patterns"
  - "agent-architecture"
  - "prompt-chaining"
aliases:
  - "IGO architecture"
  - "input-generate-output pattern"
summary: "A design pattern for AI workflows and autonomous agents that transforms an initial state through a computational transformation layer to reach a terminal state."
updated: 2026-04-21
group: architecture-cities-heritage
---
# Input-Generate-Output architecture

A fundamental [[concepts/design|design]] pattern for AI [[concepts/workflow|workflows]] and autonomous [[concepts/agentic-ai|agents]], where a system transforms a starting state through a computational transformation layer to reach a terminal state.

## Core Components
- **Input**: The initial data, [[concepts/user-query|user query]], or environmental trigger that initiates the workflow.
- **Generate**: The processing layer involving [[concepts/reasoning|reasoning]], computation, or transformation. This often involves [[concepts/prompt-chaining]], [[concepts/llms]], and the [[concepts/integration|integration]] of tools.
- **Output**: The resulting artifact, response, or actionable product produced by the system.

## Implementations
- **[[entities/google-opal|Google Opal]] (Experiment)**: A [[concepts/no-code|no-code]] implementation of this [[concepts/architecture|architecture]] from [[entities/google-labs]].
    - Allows users to describe, create, and share [[concepts/ai-mini-apps|AI mini-apps]] using natural language.
    - Leverages the architecture by chaining together prompts, [[concepts/models]], and tools.

## Backlinks
- 2026 04 14 No code [[concepts/ai-development|AI development]] using Opal
