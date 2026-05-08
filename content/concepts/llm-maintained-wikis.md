---
type: concept
domain: ai-agents
group: model-efficiency-compression
tags:
  - "concept"
  - "llm-wiki"
  - "knowledge-base"
  - "rag-alternative"
  - "persistent-memory"
  - "karpathy"
aliases:
  - "LLM-maintained knowledge bases"
  - "persistent knowledge systems"
summary: Systems where large language models maintain and update wiki-style knowledge bases as an alternative to traditional retrieval-augmented generation approaches.
updated: 2026-05-01
---
# LLM Maintained Wikis

LLM Maintained Wikis are systems where [[concepts/large-language-model-llm|large language models]] actively participate in creating, organizing, and updating structured knowledge bases, rather than passively retrieving information from static sources. This approach represents an alternative to traditional retrieval-augmented generation (RAG), where LLMs query external databases to supplement their [[concepts/responses|responses]]. In LLM-maintained wikis, the model takes a more direct role in knowledge curation, [[concepts/writing|writing]] new entries, revising existing content, and organizing information hierarchically as new information is encountered or learned.

## Architecture and Implementation

These systems typically involve an LLM that can both read and write to a persistent [[concepts/knowledge-base|knowledge base]] with wiki-like [[concepts/structure|structure]]. The model processes information and explicitly decides what should be stored, how it should be categorized, and how different pieces of knowledge relate to one another. This requires the system to maintain [[concepts/logical-consistency|consistency]] across entries, resolve conflicts between new and existing information, and manage the evolving structure of the knowledge base over time.

## Distinction from RAG

While retrieval-augmented generation focuses on finding and incorporating relevant existing information during [[concepts/inference|inference]], LLM-maintained wikis emphasize the generative and organizational aspects of [[concepts/knowledge-management|knowledge management]]. The model functions partly as both knowledge worker and curator, creating lasting artifacts that can inform future interactions rather than treating each query independently. This allows for the development of more coherent, interconnected knowledge structures that evolve with the model's outputs.

## Source Notes
- 2026-04-07: Karpathy's LLM Wiki: Watch Me Build a [[concepts/knowledge-base|Knowledge Base From]]
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)