---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "AI"
  - "Agent"
  - "Safety"
  - "Performance"
  - "Jev"
  - "System1"
  - "Harness"
  - "system-1-harness"
  - "ai-agent-safety"
  - "decision-model"
  - "agent-loop"
  - "jev-framework"
  - "BM25"
  - "Agentic-Search"
  - "Lexical-Scoring"
aliases:
  - "System 1 Control"
  - "Agent Safety Harness"
  - "Jev-Powered Harness"
  - "BM25 Agentic Search"
summary: "A structural pattern using a dedicated decision model like Jev to regulate the continuous loop of a primary reasoning model for improved agent performance and safety, incorporating lexical search strategies like BM25 for agentic retrieval."
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-10-02T21:06:55+00:00" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# System 1 Harness

A structural pattern for managing [[concepts/ai-agent]] performance and safety by introducing a dedicated [[concepts/decision-model|decision model]] ("[[concepts/harness|harness]]) to regulate the continuous [[concepts/loop|loop]] of a primary [[concepts/reasoning-model|reasoning model]].

## Core Concepts

- **The Loop Problem**: Standard [[concepts/ai-agents|AI agents]] often operate in a continuous loop driven by a single "[[concepts/reasoning|reasoning]] model," which can lead to uncontrolled execution or safety failures.
- **The Harness [[concepts/solution|Solution]]**: Introducing a "System 1" [[concepts/style|style]] harness allows for rapid, low-latency [[concepts/decision-making|decision-making]] to gate, guide, or interrupt the reasoning model.
- **Jev-Powered Integration**: Utilizing [[entities/jev]] (a decision model framework) to optimize this harness, ensuring that agent actions are aligned with safety and performance constraints.
- **[[concepts/agentic-search|Agentic Search]] Dynamics**: Effective [[concepts/agent-loops|agent loops]] require robust [[concepts/document-retrieval|retrieval]] [[concepts/causes|mechanisms]]. The integration of lexical scoring functions like [[concepts/bm25-ranking|BM25]] within the [[concepts/operational-loop|agent loop]] has demonstrated "unreasonable effectiveness" for agentic search tasks, complementing semantic [[concepts/dense-vectors|embeddings]]. See [[lab-notes/2026-10-03-BM25s-Unreasonable-Effectiveness-in-LLM-Driven-Agentic-S|BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search]] for detailed analysis on leveraging BM25 for search inside an agent loop.

## References

- [BM25's Unreasonable Effectiveness in LLM-Driven Agentic Search](https://www.youtube.com/watch?v=fZH97QHHYjY)
