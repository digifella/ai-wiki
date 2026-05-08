---
type: concept
domain: philosophy-religion
group: philosophy-ethics-logic
tags:
  - "concept"
  - "knowledge-bases"
  - "llm"
  - "rag"
  - "ai-systems"
  - "information-organization"
aliases:
  - "Knowledge Base Systems"
  - "LLM Knowledge Management"
summary: Systems for organizing and storing persistent knowledge that large language models can access and build upon, as demonstrated in Karpathy's LLM Wiki project.
updated: 2026-05-01
---
# Persistent Knowledge Bases

[[concepts/compounding-knowledge|Persistent knowledge bases]] are systems designed to store and organize information in a form that [[concepts/large-language-model-llm|large language models]] (LLMs) can access, retrieve, and build upon across multiple interactions. Unlike traditional retrieval-augmented generation (RAG) systems that treat each query independently, persistent knowledge bases maintain structured information over time, allowing LLMs to accumulate context and develop deeper understanding of domains. These systems serve as external [[concepts/memory|memory]] layers that complement the fixed knowledge encoded in a model's [[concepts/parameters|parameters]].

## Architecture and Implementation

Persistent knowledge bases typically combine structured [[entities/storage|storage]] with indexing and retrieval mechanisms. Karpathy's LLM Wiki project exemplifies this approach, demonstrating how knowledge can be organized in a way that supports both human navigation and [[concepts/machine-learning-model|machine learning model]] access. [[concepts/knowledge-graphs|Knowledge graphs]] represent one implementation strategy, where information is stored as interconnected nodes and [[concepts/relationships|relationships]], enabling the system to surface relevant context while maintaining explicit connections between concepts. This structured approach differs from unorganized document collections, providing more systematic ways to query and reason about stored information.

## Purpose and Limitations

These systems address a key limitation of LLMs: their inability to learn or retain information beyond their [[concepts/training-data|training data]] without external augmentation. By maintaining persistent records that models can access, organizations can keep information current without retraining models. However, persistent knowledge bases remain tools for [[concepts/knowledge-bases|information retrieval]] and reference rather than true [[concepts/learning|learning]] systems; they enhance what models can access but do not fundamentally change how models process or internalize knowledge.

## Source Notes
- 2026-04-07: Karpathy's LLM Wiki: Watch Me Build a [[concepts/knowledge-base|Knowledge Base From]]
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)
- 2026-04-27: AI Context Layer Architectures: Karpathy