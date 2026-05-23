---
type: concept
domain: ai-agents
summary: Breaking complex tasks into smaller, manageable subtasks to overcome context window constraints in AI systems.
updated: 2026-05-23
group: applied-ai-workflows
---
# Task Decomposition

Breaking [[concepts/complex-tasks|complex tasks]] into smaller, manageable subtasks to overcome limitations like [[concepts/context-window|context window]] constraints in AI systems.

## Key Principles
- **Atomicity**: Subtasks must be small enough to complete within context window limits (e.g., <1k [[concepts/tokens|tokens]] for [[concepts/agentic-ai|AI agents]]).
- **Sequential Dependencies**: Subtasks ordered to build incrementally ([[concepts/output|output]] of one informs next).
- **Context Minimization**: Each subtask uses only necessary context from prior steps.

## AI Coding Workflow (Claude Implementation)
- **Problem**: [[concepts/ai-agents|AI agents]] fail [[concepts/assistive-technology|at]] "one-shot" large [[concepts/code-generation|code generation]] due to **[[concepts/context-window-limitations|context window limitations]]**.
- **[[concepts/solution|Solution]]**: Decompose [[concepts/coding|coding]] tasks into iterative, context-aware subtasks.
- **[[concepts/workflow|Workflow]]**:
  - Break feature into atomic steps (e.g., "parse input", "validate data", "generate output").
  - For each step:
    * Provide current code state and minimal relevant context.
    * Give focused instruction (e.g., "Fix the `parse_input` function").
    * Use [[entities/agent|agent]] output to inform next step.
  - Avoid large "one-shot" prompts; iterate incrementally.

## Related Concepts
- [[concepts/context-window]]
- Iterative Development
- [[concepts/ai-agent|AI Agent]]
- [[concepts/ai-coding]]

Backlink: 2026 04 14 Fixing long [[concepts/running|running]] [[concepts/ai-assisted-coding|Claude code]] sessions
## Source Notes
- 2026-04-08: How to make Claude Code less dumb
- 2026-04-07: [[lab-notes/2026-04-07-Qwen-Coder-Local-AI-Replacing-Paid-Models-for-Coding-Tasks|Qwen Coder Local AI Replacing Paid Models for Coding Tasks]] · [▶ source](https://www.youtube.com/watch?v=jDeeoHSc2kw)