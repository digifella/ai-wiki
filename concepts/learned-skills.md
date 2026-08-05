---
type: concept
domain: ai-agents
tags:
  - "learned-skills"
  - "procedural-knowledge"
  - "ai-agents"
  - "cognitive-architectures"
  - "coala-framework"
  - "memory-types"
  - "automation"
aliases:
  - "Procedural Knowledge"
  - "Acquired Skills"
  - "Agent Competencies"
  - "Automated Task Execution"
summary: Learned skills represent procedural knowledge acquired through practice, enabling AI agents to execute tasks automatically with reduced cognitive load and long-term persistence.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Learned Skills

**Learned [[concepts/skills|Skills]]** represent [[concepts/procedural-knowledge|procedural knowledge]] acquired through practice, distinct from [[concepts/factual-knowledge|declarative knowledge]] (facts) or short-term working [[concepts/memory|memory]]. In [[concepts/cognitive-architectures|cognitive architectures]] and AI frameworks, this corresponds to the ability to perform tasks automatically without conscious deliberation.

## Key Characteristics
- **Procedural Nature**: Focuses on *how* to do something rather than *what* is known.
- **Automation**: Repeated execution reduces [[concepts/cognitive-load|cognitive load]], moving tasks from controlled to automatic processing.
- **[[concepts/data-persistence|Persistence]]**: Unlike short-term memory, learned skills are retained long-term, forming part of an agent's or individual's core competency.

## AI Context: CoALA Framework
In the [[concepts/coala-framework|CoALA framework]] for [[concepts/ai-agent-memory|AI Agent memory]], "Learned Skills" are one of the four critical memory types, analogous to human procedural memory.

- **Distinction**: Separated from semantic memory (facts) and episodic memory (experiences) to optimize [[concepts/speed|inference speed]] and [[concepts/workflow-automation|task execution]].
- **Source Analysis**: As detailed in [[lab-notes/2026-05-27-AI-Agent-Memory-Types-CoALA-Framework-Overview|AI Agent Memory Types: CoALA Framework Overview]], [[entities/martin-keen|Martin Keen]] ([[entities/ibm-technology|IBM Technology]]) categorizes this memory type as essential for agents to execute [[concepts/complex-workflows|complex workflows]] without re-computing basic operations.
- **Implementation**: Often realized through fine-tuned [[concepts/model-weights|model weights]], [[concepts/reinforcement-learning|reinforcement learning]] [[concepts/policies|policies]], or [[concepts/tool-use-automation|tool-use]] [[concepts/excellence|proficiency]] that persists across sessions.

## Related Concepts
- Procedural [[concepts/memory|Memory]]
- [[concepts/short-term-memory]]
- Semantic Memory
- Episodic Memory
- [[concepts/ai-agent-architecture]]
