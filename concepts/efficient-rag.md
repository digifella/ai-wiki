---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "concept"
  - "retrieval-augmented-generation"
  - "rag"
  - "search-agents"
  - "prompt-engineering"
  - "ai-optimization"
aliases:
  - "RAG Optimization"
  - "Self-Editing Search Agent"
summary: An approach to improving retrieval-augmented generation systems through self-editing search agents.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Efficient Rag

Efficient RAG is an approach to improving [[concepts/retrieval-augmented-generation|retrieval-augmented generation]] (RAG) systems through the integration of self-editing capabilities into search agents. Traditional RAG systems treat document retrieval as a largely static process: an agent retrieves candidate documents based on an initial query and passes them directly to a [[concepts/language-model|language model]] for answer generation. Efficient RAG instead enables agents to iteratively refine their search queries and document selections based on intermediate results, reducing the number of irrelevant documents processed and improving answer quality.

## Key Mechanisms

The core innovation in Efficient RAG is the ability for search agents to evaluate retrieved documents and reformulate queries when results appear insufficient or off-target. Rather than committing to a single retrieval step, the agent can assess whether the retrieved documents adequately address the original question. If gaps are identified, the agent modifies its search strategy—adjusting keywords, broadening or narrowing scope, or reframing the query—before attempting another retrieval cycle. This feedback loop typically continues until the agent determines that sufficient relevant information has been gathered.

## Practical Benefits

By reducing the number of documents passed to language models for processing, Efficient RAG decreases computational costs and latency compared to standard RAG approaches. The iterative refinement also tends to produce more accurate answers, as the system focuses on progressively more relevant source material. This is particularly valuable in domains with large document collections where initial queries may be ambiguous or where relevant information is scattered across multiple documents requiring targeted searching.

## Source Notes
- 2026-04-08: [[lab-notes/2026-04-08-Chroma-Context-1-Self-Editing-Search-Agent-for-Efficient-RAG|Chroma Context 1 Self Editing Search Agent for Efficient RAG]] · [▶ source](https://www.youtube.com/watch?v=7f1bHER4kRM)
