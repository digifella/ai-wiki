---
type: concept
domain: ai-agents
summary: A structural paradigm for agentic AI where execution logic is represented as a directed graph capable of cycles and state management.
updated: 2026-05-23
group: agent-systems-skills
---
# Graph-based agent workflows

A structural paradigm for [[concepts/agentic-ai]] where execution logic is represented as a directed graph. Unlike linear DAG ([[concepts/directed-acyclic-graph-dag|Directed Acyclic Graph]]) chains, graph-based workflows enable cycles, [[concepts/loops|loops]], and complex state transitions, allowing [[concepts/agents|agents]] to iterate on tasks and self-correct.

## Core Architecture
- **[[concepts/nodes|Nodes]]**: Atomic units of computation or specific agentic actions.
- **Edges**: Directed paths between nodes; includes Conditional Logic to determine transitions based on current State.
- **State Management**: A persistent, shared object containing the context and [[concepts/memory|memory]] that evolves throughout the graph traversal.

## Key Frameworks
- [[concepts/langgraph|LangGraph]]: A framework for building stateful, multi-actor [[concepts/software|applications]] with cyclic [[concepts/capabilities|capabilities]], often used within the [[entities/langchain|Langchain]] ecosystem.

## Implementations & Examples
- **[[concepts/multi-modal-researcher|Langchain researcher]] with [[concepts/gemini|Gemini]] 2.5**:
    - A "[[entities/gemini|Gemini]] 2.5 [[concepts/multi-modal-researcher|Multi-modal researcher]]" built using [[concepts/langgraph-framework|LangGraph]].
    - D
- **[[concepts/claude-code|Claude Code]] [[concepts/ai-coding|AI coding]] [[entities/agent|agent]]**:
    - Utilization of [[concepts/test-driven-development|Test-Driven Development]] ([[concepts/testing|TDD]]) and [[concepts/custom-tools|custom tools]] to optimize productivity workflows.
    - Source: [[entities/yifan|Yifan]] ([[entities/beyond-the-hype|Beyond the Hype]] channel).

2026 04 14 [[concepts/developer-workflow|Claude Code workflow]] Yifan [[entities/beyond-the-hype|Beyond the Hype]] channel
