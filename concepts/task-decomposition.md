---
type: concept
domain: ai-agents
tags:
  - "task-decomposition"
  - "ai-agents"
  - "context-window"
  - "code-generation"
  - "iterative-development"
  - "orchestration"
aliases:
  - "Subtasking"
  - "Prompt Chaining"
  - "Atomic Task Breakdown"
  - "Iterative Prompting"
summary: Breaking complex tasks into smaller, manageable subtasks to overcome context window constraints in AI systems, often orchestrated by specialized models.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Task Decomposition

Breaking [[concepts/complex-tasks|complex tasks]] into smaller, manageable subtasks to overcome limitations like [[concepts/context-window|context window]] constraints in [[concepts/ai-models|AI systems]].

## Key Principles
- **Atomicity**: Subtasks must be small enough to complete within context window limits (e.g., <1k [[concepts/tokens|tokens]] for [[concepts/agentic-ai|AI agents]]).
- **Sequential Dependencies**: Subtasks ordered to build incrementally (output of one informs next).
- **Context Minimization**: Each subtask uses only necessary context from prior steps.

## AI Coding Workflow (Claude Implementation)
- **Problem**: [[concepts/ai-agents|AI agents]] fail at "one-shot" large [[concepts/code-generation|code generation]] due to **[[concepts/context-window-limitations|context window limitations]]**.
- **[[concepts/solution|Solution]]**: Decompose [[concepts/coding|coding]] tasks into iterative, context-aware subtasks.
- **Workflow**:
  - Break feature into atomic steps (e.g., "parse input", "validate data", "generate output").
  - For each step:
    - Generate code snippet.
    - Validate against constraints.
    - Pass result to next subtask.

## Advanced Orchestration Examples
- **[[concepts/fugu-ultra|Sakana Fugu Ultra]]**: Demonstrates high-level orchestration of complex tasks via [[concepts/task-decomposition|task decomposition]].
  - **[[concepts/app-cloning|App Cloning]]**: Converts screenshots into working applications by breaking down [[concepts/user-experience-design|UI/UX]] replication into discrete coding subtasks.
  - **[[concepts/advanced-reasoning|Complex Problem Solving]]**: Handles intricate [[concepts/open-source-philosophy|logic]] by chaining [[concepts/specialized-sub-agents|specialized agents]] (e.g., [[concepts/ai-agent-framework|Hermes Agent]]) to solve sub-problems sequentially.
  - See: [[lab-notes/2026-07-08-Fugu-Ultra-AI-Orchestrates-App-Cloning-and-Complex-Probl|Fugu Ultra AI Orchestrates App Cloning and Complex Problem Solving]]

## References
- [Fugu Ultra AI Orchestrates App Cloning and Complex Problem Solving](https://www.youtube.com/watch?v=5axGfgIDIRE)
