---
type: concept
domain: ai-agents
tags:
  - "rag-systems"
  - "agentic-rag"
  - "knowledge-graphs"
  - "ai-agents"
  - "retrieval-augmented-generation"
aliases:
  - "Agentic RAG with Knowledge Graphs"
  - "Advanced RAG Systems"
summary: This concept covers building advanced Retrieval-Augmented Generation (RAG) systems for AI agents by combining Agentic RAG with Knowledge Graphs.
updated: 2026-07-11
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom Knowledge Bases

Custom Knowledge [[concepts/number-systems|Bases]] are specialized data repositories designed to enhance [[concepts/agentic-ai|AI agents]] by providing structured access to domain-specific information. Rather than relying solely on [[concepts/pre-trained-model|pre-trained model]] [[concepts/weights|weights]], these systems enable agents to retrieve and [[concepts/purpose|reason]] over dynamically organized data tailored to particular [[concepts/scenarios|use cases]]. This approach significantly extends an agent's capabilities beyond its [[concepts/language-data|training data]], allowing it to work with current, proprietary, or specialized information that would otherwise be unavailable.

## Retrieval-Augmented Generation (RAG)

The foundation of custom knowledge bases is [[concepts/answer-generation|Retrieval-Augmented Generation]], which combines [[concepts/knowledge-bases|information retrieval]] with language generation. When an agent receives a query, the RAG system retrieves relevant documents or data from the [[concepts/knowledge-base|knowledge base]], then uses this context to generate more accurate and [[concepts/citation-grounding|grounded responses]]. This reduces [[concepts/data-hallucination|hallucination]] and ensures that agent outputs are anchored in actual source material rather than [[concepts/inference|model inference]] alone.

## Knowledge Graphs and Agentic RAG

Advanced implementations combine [[concepts/context-utilization|RAG with knowledge graphs]], which represent information as interconnected [[concepts/nodes|entities]] and [[concepts/relationships|relationships]]. This creates semantic structure that enables agents to understand context and make logical connections across different pieces of information. [[concepts/agentic-rag-systems|Agentic RAG]] takes this further by allowing agents to autonomously decide what information to retrieve, how to refine searches, and when to reason over multiple retrieved sources—moving beyond passive [[concepts/document-retrieval|retrieval]] to active information-seeking behavior.

## Practical Applications

Custom knowledge bases support [[concepts/ai-agents|AI agents]] across various domains, from customer service systems that need access to current product catalogs and [[concepts/policies|policies]], to research assistants working with [[entities/tomasz-janowski|academic]] databases, to enterprise systems requiring integration with proprietary organizational data. The flexibility of these systems means they can be adapted to different data formats, update frequencies, and query patterns depending on the agent's specific requirements.
## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-Marp-System-AI-Generated-Markdown-Presentations|Marp System AI Generated Markdown Presentations]] · [▶ source](https://www.youtube.com/watch?v=RBcc_ezfh1s)
