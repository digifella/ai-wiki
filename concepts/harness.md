---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "llm"
  - "orchestration"
  - "engineering"
  - "harness"
  - "prompt-engineering"
  - "llm-orchestration"
  - "harness-design"
  - "ai-agents"
  - "model-optimization"
  - "coding-agents"
  - "bare-core"
  - "batteries-included"
aliases:
  - "Orchestration Framework"
  - "LLM Wrapper"
  - "Engineering Layer"
  - "Execution Control"
  - "Coding Agent Harness"
summary: A Harness is an orchestration framework that wraps a Large Language Model to control execution flow, manage context, and integrate external tools. Performance differentiation is now dominated by harness design rather than base model selection.
updated: 2026-07-19
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-19" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Harness

A Harness denotes the orchestration framework or [[entities/national-academies|engineering]] layer that wraps a [[concepts/large-language-model]] (LLM) to control execution [[concepts/flow|flow]], manage context, and integrate [[concepts/external-tools|external tools]]. Performance differentiation is now dominated by [[concepts/harness-design|harness design]] rather than [[concepts/pre-trained-model|base model]] selection.

## Core Insights

- **Orchestration Priority**: [[entities/stanford-university|Stanford]] research indicates that LLM performance variance is primarily determined by orchestration code quality, superseding [[concepts/architectural-improvements|architectural improvements]]. [[lab-notes/2026-05-05-Orchestration-Over-Architecture-Harness-Engineering-for|Orchestration Over Architecture: Harness Engineering for Optimal LLM Performance]]
- **Engineering Shift**: Development focus moves from weight training to structural control, implementing robust [[entities/

## Coding Agent Architectures

The design of the harness significantly dictates the utility of coding agents, creating a spectrum between minimalism and comprehensive integration:

- **Bare Core vs. Batteries Included**: Recent analysis highlights a critical divergence in harness design for coding agents. The "Bare Core" approach (exemplified by Pi) focuses on minimal overhead and direct model interaction, whereas "Batteries Included" frameworks (exemplified by Claude Code) provide extensive pre-configured tooling, context management, and workflow automation out-of-the-box.
- **Performance Impact**: The choice between these architectures impacts developer experience and model efficacy. A well-designed harness can mitigate model limitations, while a poor one can bottleneck even the most capable [[concepts/large-language-model|LLM]].
- **Detailed Analysis**: For a comparative breakdown of these specific implementations, see [[lab-notes/2026-07-19-AI-Coding-Agent-Harnesses-Bare-Core-Pi-vs.-Batteries-Inc|AI Coding Agent Harnesses: Bare Core (Pi) vs. Batteries Included (Claude Code)]].

## References

- [AI Coding Agent Harnesses: Bare Core (Pi) vs. Batteries Included (Claude Code)](https://www.youtube.com/watch?v=QpceyQQwC_E)
