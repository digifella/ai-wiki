---
type: concept
domain: ai-agents
group: agent-systems-skills
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
updated: 2026-05-01
---
# Self Editing Search Agents

Self Editing Search Agents are systems that refine their own search queries during the retrieval-augmented generation (RAG) process to improve the relevance and quality of retrieved information. Rather than executing a single static search, these [[concepts/agents|agents]] monitor the results they obtain and iteratively revise their query formulation based on what they find. This approach addresses a common limitation in [[concepts/contextualized-language-understanding|RAG systems]] where initial queries may be poorly matched to the indexed content or may retrieve tangentially relevant material that degrades downstream generation quality.

## Core Mechanism

The self-editing cycle typically operates by executing an initial search, evaluating the relevance of retrieved results against the task at hand, and then reformulating the query if needed. The agent uses signals from the retrieval step—such as relevance scores, result diversity, or match with expected content patterns—to decide whether to modify terms, adjust specificity, or try alternative phrasings. This [[concepts/feedback|feedback]] loop continues until either satisfactory results are obtained or a maximum [[concepts/iteration|iteration]] threshold is reached.

## Application in Creative Pursuits

In creative domains, self-editing search agents prove particularly useful when sourcing inspiration, reference material, or domain knowledge. Writers, designers, and other creators benefit from tools that can adaptively search for relevant examples and information without requiring multiple manual query reformulations. By automating the refinement of searches, these agents reduce the [[concepts/friction|friction]] between initial information need and useful result retrieval, allowing creators to focus on synthesis and originality rather than search strategy.

## Source Notes
- 2026-04-07: Next Evolution of Retrieval-Augmented Generation