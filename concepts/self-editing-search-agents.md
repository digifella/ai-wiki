---
type: concept
domain: creative-pursuits
group: lightroom-color-workflows
tags:
  - "concept"
  - "rag"
  - "search-agents"
  - "information-retrieval"
  - "ai-workflows"
aliases:
  - "Self-Editing RAG"
  - "Chroma Context-1"
summary: A search agent approach that self-edits queries to improve retrieval-augmented generation efficiency.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Self Editing Search Agents

Self Editing Search Agents are systems that refine search queries dynamically during the retrieval-augmented generation (RAG) process to improve information retrieval quality. Rather than executing a single static query against a knowledge base, these agents monitor the relevance and completeness of retrieved results and iteratively adjust subsequent queries based on intermediate findings. This adaptive approach addresses limitations inherent in keyword matching and initial query formulation, where single queries often fail to capture the full context needed for complex creative or technical tasks.

## Mechanism of Action

The core functionality relies on a feedback loop between the retrieval component and the generation model. After an initial query retrieves a set of documents, the agent evaluates the sufficiency of the information relative to the user's intent. If the retrieved data is deemed incomplete or irrelevant, the system generates a modified query—often by adding specific constraints, synonyms, or contextual details—and performs a new search. This cycle continues until the accumulated information meets a predefined threshold of quality or a maximum iteration limit is reached.

## Applications in Creative Pursuits

In the domain of creative pursuits, these agents facilitate more nuanced research workflows. Writers, designers, and artists often require information that spans multiple domains or lacks precise terminology. By allowing the agent to self-correct its search strategy, the system can uncover obscure references, verify factual details across disparate sources, and synthesize a richer context for the creative output. This reduces the manual effort required to iterate on search terms and ensures that the final generated content is grounded in a more comprehensive evidence base.

## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
