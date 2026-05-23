---
type: concept
domain: ai-agents
tags:
  - "retrieval-augmented-generation"
  - "rag"
  - "agentic-rag"
  - "generative-ai"
  - "knowledge-base"
  - "chromadb"
  - "llm"
aliases:
  - "RAG"
  - "Agentic RAG Systems"
  - "OpenRAG"
summary: Retrieval Augmented Generation is a technique that enhances generative AI by retrieving relevant information from external knowledge bases to improve response accuracy and relevance.
updated: 2026-05-23
group: multimodal-generative-media
---
# Retrieval Augmented Generation Rag

[[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) is a technique that combines a generative [[concepts/statistical-language-modeling|language model]] with an [[concepts/external-knowledge|external knowledge]] retrieval system. Instead of relying solely on the [[concepts/parameters|parameters]] learned during [[concepts/training|training]], [[concepts/contextualized-language-understanding|RAG systems]] fetch relevant documents or data from a [[concepts/knowledge-base|knowledge base]] before generating a response. This approach allows AI systems to provide answers grounded in current, domain-specific, or proprietary information that may not have been present in the model's [[concepts/language-data|training data]].

## Core Components

A typical RAG system consists of three main parts: a retrieval component that searches an external knowledge base for relevant information, a ranking or filtering stage that selects the most pertinent results, and a generation component that uses both the retrieved context and the user's query to produce a response. The retrieval system often employs [[concepts/data-embedding|vector embeddings]] and similarity search to identify relevant documents quickly. The generative model then synthesizes this retrieved information into a coherent answer, reducing hallucinations and improving [[concepts/factual-accuracy|factual accuracy]].

## Applications and Variations

RAG has become foundational to [[concepts/enterprise-ai|enterprise AI]] systems where accuracy and traceability are critical. Variants include [[concepts/agentic-rag-systems|agentic RAG]], which enables [[concepts/agentic-ai|AI agents]] to iteratively refine retrieved information and [[entities/make|make]] decisions based on multiple knowledge sources. RAG systems are commonly used in [[concepts/fact-based-queries|question-answering]] systems, customer support chatbots, and document-based AI assistants. The quality of RAG [[concepts/output|output]] depends significantly on both the retrieval mechanism and how well the underlying knowledge base is organized and maintained.
## Source Notes
- 2026-04-07: Karpathy's LLM Wiki: Watch Me Build a [[concepts/knowledge-base|Knowledge Base From]]
- 2026-04-08: Next Evolution of Retrieval-Augmented Generation
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)