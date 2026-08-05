---
type: concept
domain: ai-agents
tags:
  - "cognitive-architecture"
  - "human-cognition"
  - "memory-systems"
  - "production-rules"
  - "ai-agents"
  - "act-r"
  - "soar"
  - "clarion"
aliases:
  - "Cognitive Frameworks"
  - "Mental Models for AI"
  - "Simulation of Human Cognition"
summary: Cognitive architectures are comprehensive theories that model the mind's structure and function to simulate human cognition in artificial intelligence systems.
updated: 2026-07-11
group: agent-systems-skills
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Cognitive Architectures

**Cognitive architectures** are comprehensive theories of the structure and function of [[concepts/the-mind|the mind]], providing a formal framework for simulating [[concepts/human-cognition|human cognition]] in [[concepts/ai-technologies|Artificial Intelligence]] systems. They model information processing, [[concepts/memory|memory]] systems, and control structures to explain how intelligent behavior emerges.

## Core Components

- **Memory Systems**: Subsystems for [[concepts/storing|storing]] and [[concepts/retrieving|retrieving]] information.
  - **Episodic Memory**: Context-specific past experiences.
  - **Semantic Memory**: General [[concepts/factual-knowledge|factual knowledge]].
  - **Procedural Memory**: [[concepts/skills|Skills]] and action sequences.
  - **[[concepts/short-term-memory|Working Memory]]**: Temporary [[entities/storage|storage]] for active manipulation.
- **Production Rules**: Condition-action pairs that [[concepts/ambition|drive]] behavior.
- **Attentional Control**: [[concepts/causes|Mechanisms]] for selecting relevant stimuli or internal states.
- **[[concepts/learning|Learning]] Mechanisms**: Processes for modifying architecture parameters based on [[concepts/experience|experience]].

## Key Models

- **ACT-R**: Adaptive Control of Thought-Rational; focuses on declarative and procedural memory.
- **SOAR**: [[concepts/problem-solving|Problem-solving]] spaces and [[concepts/production-grade-infrastructure|production systems]].
- **CLARION**: Dual-process model with implicit and explicit representations.
- **ACT-R**: Emphasizes modular [[concepts/memory-structures|memory structures]].

## Relevance to AI Agents

Modern [[concepts/large-language-models]] (LLMs) often lack [[concepts/persistent-state|persistent state]], necessitating external cognitive architectures to achieve agentic behaviors. Integrating structured memory types allows [[concepts/agentic-ai|AI agents]] to maintain context, learn from interactions, and plan long-term.

- See: [[lab-notes/2026-05-27-AI-Agent-Memory-Types-CoALA-Framework-Overview|AI Agent Memory Types: CoALA Framework Overview]] for a breakdown of the four memory types (short-term, factual, [[concepts/learned-skills|learned skills]], and planning) proposed by IBM's [[concepts/coala-framework|CoALA framework]], drawing direct parallels to human cognitive structures.
