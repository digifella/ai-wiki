---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "modular-capabilities"
  - "autonomous-execution"
  - "llm-extensions"
  - "skill-persistence"
  - "self-improvement"
  - "long-running-agents"
aliases:
  - "Agent Skill"
  - "Modular Capability"
  - "Executable Skill"
  - "Skill Module"
summary: A Skill is a modular, executable capability that extends the reasoning of autonomous AI agents by providing structured interfaces for action, memory, and external tool interaction, enabling robust long-running execution.
updated: 2026-07-12
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# SKILL.md

## Definition
A **[[concepts/skill|Skill]]** in the context of [[concepts/action-oriented-ai|autonomous AI agents]] is a modular, executable capability that allows an agent to perform specific tasks, interact with [[concepts/external-tools|external tools]], or process information in a structured manner. [[concepts/skills|Skills]] extend the base [[concepts/reasoning-capabilities|reasoning capabilities]] of a [[concepts/large-language-model-llm|Large Language Model (LLM)]] by providing defined interfaces for action and [[concepts/memory|memory]].

## Key Characteristics
- **Modularity**: Skills are discrete units that can be added, removed, or updated without retraining the core model.
- **Autonomy**: Agents can dynamically select and execute skills based on user intent or environmental cues.
- **[[concepts/data-persistence|Persistence]]**: [[concepts/learned-skills|Learned skills]] can be stored in [[concepts/vector-databases|vector databases]] or file systems for long-term [[concepts/memory|memory]] [[concepts/storing|retention]].
- **Robust Long-Running Execution**: Effective autonomous execution requires distinguishing between mere prolonged [[concepts/reasoning|reasoning]] and reliable, sustained work over extended periods. This involves a [[concepts/one-shot-large-applications|seven-component harness]] to ensure stability and [[concepts/software-reliability|reliability]] during long-duration tasks [[lab-notes/2026-07-06-Building-Robust-Long-Running-AI-Agents-with-a-Seven-Comp|Building Robust, Long-Running AI Agents with a Seven-Component Harness]].

## References
- [Building Robust, Long-Running AI Agents with a Seven-Component Harness](https://www.youtube.com/watch?v=ju7R6jer6_M)
