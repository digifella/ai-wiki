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
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Self Editing Search Agents

Self Editing Search Agents are systems that refine search queries dynamically during the retrieval-augmented generation (RAG) process to improve information retrieval quality. Rather than executing a single static query against a knowledge base, these agents monitor the relevance and completeness of retrieved results and iteratively adjust subsequent queries based on intermediate findings. This adaptive approach addresses limitations inherent in keyword matching and initial query formulation, where single queries often fail to capture the full context needed for comprehensive answers.

## Core Mechanism

The core operation involves a feedback loop where an agent evaluates search results against relevance criteria and modifies subsequent queries accordingly. If initial results prove insufficient or tangential, the agent reformulates the query using alternative keywords, adjusted scope, or refined conceptual framing. This process continues until the agent determines that retrieved information adequately addresses the underlying information need, or until predefined iteration limits are reached.

## Practical Applications

Self editing search agents prove particularly useful in creative and research domains where information needs are complex or multi-faceted. Writers researching historical contexts, designers exploring aesthetic precedents, and analysts synthesizing information across multiple domains benefit from systems that can refine their searches in response to what they learn. By reducing manual query reformulation, these agents lower friction in knowledge-intensive creative work.

## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation
