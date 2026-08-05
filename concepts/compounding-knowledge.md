---
type: concept
domain: ai-agents
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
updated: 2026-07-11
group: ai-foundations-concepts
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Compounding Knowledge

Compounding Knowledge refers to the approach of building persistent, evolving [[concepts/knowledge-bases|knowledge bases]] using [[concepts/large-language-model-llm|large language models]] (LLMs) rather than relying solely on [[concepts/answer-generation|retrieval-augmented generation]] (RAG) systems. This methodology emphasizes the accumulation and refinement of structured information over time, allowing knowledge to build upon itself incrementally. The concept draws an analogy to compound interest in finance, where gains accumulate and reinvest to produce [[concepts/exponential-growth|exponential growth]].

## Core Approach

Rather than treating each LLM interaction as a discrete query-response cycle, compounding knowledge systems maintain editable, updatable knowledge repositories that persist between interactions. As the system encounters new information or refines existing understanding, these changes are integrated back into the [[concepts/knowledge-base|knowledge base]] itself. This creates a [[concepts/user-feedback-loop|feedback loop]] where the quality and comprehensiveness of the knowledge base improve over successive interactions, with each refinement becoming available for future use.

## Implementation and Examples

[[entities/andrej-karpathy|Andrej Karpathy]]'s [[concepts/llm-wiki|LLM Wiki]] project exemplifies this approach, demonstrating how structured knowledge can be systematically built and updated within an LLM-augmented workflow. Such systems typically involve humans and LLMs collaboratively maintaining a knowledge base—identifying gaps, correcting errors, and organizing information in ways that become increasingly useful over time. This differs from [[concepts/contextualized-language-understanding|RAG systems]], which retrieve static external information to ground LLM responses without necessarily improving the underlying knowledge source.

The advantage of compounding knowledge lies in its potential to create more reliable and specialized knowledge resources tailored to specific domains or [[concepts/scenarios|use cases]]. As the knowledge base grows more comprehensive and accurate, subsequent queries can draw on higher-quality information, potentially reducing hallucinations and improving the relevance of LLM outputs.
## Source Notes
- 2026-04-07: Karpathy
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
- 2026-04-12: [[lab-notes/2026-04-12-Heres-what-it-actually-does-how-to-build-it-yourself|Heres what it actually does how to build it yourself]]
- 2026-04-19: [[lab-notes/2026-04-19-Karpathy-Loop-Auto-Optimize-AI-Inhuman-Iteration-for-Agent-Improvement|Karpathy Loop Auto Optimize AI Inhuman Iteration for Agent Improvement]] · [▶ source](https://www.youtube.com/watch?v=xnG8h3UnNFI)
- 2026-04-27: AI Context Layer Architectures: Karpathy
