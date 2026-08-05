---
type: concept
domain: ai-agents
tags:
  - "ai-agents"
  - "natural-language"
  - "interpretability"
  - "prompt-engineering"
  - "skill-evolution"
  - "transparency"
aliases:
  - "Natural Language Instructions"
  - "Text-Based Agent Config"
  - "Readable Agent Directives"
  - "Markdown Skills"
summary: Human-readable instructions encode AI agent behaviors and constraints in natural language formats like Markdown to prioritize transparency, modularity, and interpretability over compiled code.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Human-Readable Instructions

**Human-Readable [[concepts/instructions|Instructions]]** refer to the practice of [[concepts/encoding|encoding]] [[concepts/ai-agent|AI agent]] behaviors, constraints, and [[concepts/skills|skills]] in natural language formats (e.g., Markdown, plain text) rather than compiled code or opaque binary [[concepts/parameters|weights]]. This approach prioritizes [[concepts/opacity|transparency]], ease of editing, and direct [[concepts/interpretability|interpretability]] by both humans and [[concepts/large-language-model-llm|Large Language Models]] (LLMs).

## Core Principles

- **Transparency**: Instructions are visible and editable, allowing for immediate [[concepts/debugging|debugging]] and refinement without recompilation.
- **Modularity**: Skills can be encapsulated in discrete documents, enabling plug-and-play integration into [[concepts/multi-agent-workflows|agent workflows]].
- **Interpretability**: The [[concepts/open-source-philosophy|logic]] behind an agent's action is traceable to specific textual [[concepts/recommendations|directives]].

## Recent Developments

- **[[concepts/executive-strategy-for-skill-evolution|SkillOpt Framework]]**: [[concepts/2026-04-30-microsoft|Microsoft Research]] introduced [[lab-notes/2026-06-24-SkillOpt-Microsofts-Text-Based-Evolution-of-AI-Agent-Ski|SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills]], a strategy for self-evolving [[concepts/agent-harnesses|agent skills]].
    - **Mechanism**: Trains a "[[concepts/skill-document|skill document]]" as a human-readable Markdown file.
    - **Benefit**: Allows agents to update their own behavioral instructions in a format that remains interpretable and editable by humans, bridging the gap between automated optimization and manual oversight.
    - **Source**: [SkillOpt: Microsoft's Text-Based Evolution of AI Agent Skills](https://www.youtube.com/watch?v=yj17Fvyr09s)

## Related Concepts

- [[entities/prompt-engineering]]
- [[concepts/ai-agent-architecture]]
- [[concepts/markdown]]
