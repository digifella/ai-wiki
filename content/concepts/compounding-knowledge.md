---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "llm-wiki"
  - "knowledge-bases"
  - "persistent-knowledge"
  - "rag"
  - "knowledge-management"
aliases:
  - "Karpathy's LLM Wiki"
  - "Persistent Knowledge Bases"
summary: The text discusses the development of persistent knowledge bases using LLMs, specifically referencing Andrej Karpathy's LLM Wiki project.
updated: 2026-05-01
---
# Compounding Knowledge

Compounding Knowledge refers to the approach of building persistent, evolving knowledge bases using [[concepts/large-language-model-llm|large language models]] (LLMs) rather than relying solely on retrieval-augmented generation (RAG) systems. This methodology emphasizes the accumulation and refinement of structured information over time, allowing knowledge to build upon itself in a manner analogous to how compound interest works in finance.

## Persistent Knowledge Bases and LLMs

The concept gained [[concepts/attention-mechanisms|attention]] through projects like [[entities/andrej-karpathy|Andrej Karpathy]]'s [[concepts/llm-wiki|LLM Wiki]], which demonstrates practical approaches to constructing and maintaining machine-readable knowledge repositories. Rather than querying external sources on-demand, persistent knowledge bases maintain an organized, continuously updated store of information that the LLM can reference and augment. This approach aims to address limitations in [[concepts/traditional-rag|traditional RAG]] systems, such as latency and the challenge of maintaining [[concepts/logical-consistency|consistency]] across multiple queries.

## Building and Iterating Knowledge

The process involves systematically documenting information in structured formats that LLMs can effectively process and extend. As new information is encountered or validated, it can be integrated into the existing [[concepts/knowledge-base|knowledge base]], creating layers of refinement. This iterative development allows the knowledge base to become increasingly comprehensive and reliable over successive cycles of use and improvement.

## Source Notes
- 2026-04-07: Karpathy
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-04-27: AI Context Layer Architectures: Karpathy