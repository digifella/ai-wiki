---
type: concept
domain: ai-agents
tags:
  - "retrieval-augmented-generation"
  - "large-language-models"
  - "context-engineering"
  - "knowledge-bases"
  - "ai-agents"
  - "persistent-memory"
aliases:
  - "Retrieval-Augmented Generation"
  - "RAG Framework"
  - "LLM Augmentation"
  - "Traditional RAG"
summary: Retrieval-Augmented Generation is a framework that optimizes Large Language Model outputs by retrieving relevant information from external knowledge bases to augment the model's context window.
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

title: "RAG"

# RAG

**[[concepts/answer-generation|Retrieval-Augmented Generation]] (RAG)** is a framework used to optimize the output of a [[concepts/large-language-model|Large Language Model]] (LLM) by [[concepts/retrieving|retrieving]] relevant, authoritative information from an external [[concepts/knowledge-base|knowledge base]] to augment the model's [[concepts/context-window|context window]].

### Paradigms & Evolutions
- **[[concepts/traditional-rag|Traditional RAG]]**: Relies on the [[concepts/document-retrieval|retrieval]] of discrete, often static, document chunks to ground [[concepts/model-behavior|model responses]] in [[concepts/external-data|external data]].
- **[[concepts/llm-wiki|LLM Wiki pattern]]**:
	- Employs an LLM to autonomously maintain and evolve a structured wiki.
	- Focuses on a self-sustaining, continuously updating knowledge architecture rather than reactive retrieval of isolated snippets.
	- Reference: 2026 04 10 Karpathys [[concepts/llm-wiki|L
- **Persistent Memory Augmentation**:
	- Addresses limitations of traditional RAG by providing AI agents with a persistent, searchable "second brain" for long-term memory retention.
	- Example: [[lab-notes/2026-07-08-Gbrain-Open-Source-Second-Brain-for-AI-Agent-Persistent|Gbrain: Open-Source Second Brain for AI Agent Persistent Memory]] integrates with agents like [[concepts/agentic-ai|Hermes Agent]]]]]]]]]]]]]]]] to maintain state across sessions.

### References
- [Gbrain: Open-Source Second Brain for AI Agent Persistent Memory](https://www.youtube.com/watch?v=-fSjdYzrFvA)
