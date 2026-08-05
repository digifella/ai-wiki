---
type: concept
domain: ai-agents
group: multimodal-generative-media
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
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Retrieval Augmented Generation Rag

Retrieval Augmented Generation (RAG) is a technique that combines information retrieval with generative language models to produce more accurate and contextually relevant responses. Rather than relying solely on knowledge encoded during model training, RAG systems retrieve relevant documents, passages, or data from external knowledge bases before generating answers. This two-stage approach allows generative models to access up-to-date information and domain-specific content that may not be present in their training data.

## How RAG Works

A RAG system operates in two main phases. First, the retrieval component searches an external knowledge base to find documents or passages relevant to a user's query. Second, the generation component uses both the original query and the retrieved information as context to produce a response. This contrasts with standard generative models, which generate responses based only on learned patterns. By grounding generation in retrieved facts, RAG systems reduce hallucinations and improve factual accuracy.

## Applications and Advantages

RAG is particularly valuable for applications requiring current information, such as question-answering systems, customer support, and research assistance. It allows organizations to integrate proprietary data, recent publications, or specialized knowledge without retraining models. The technique also provides transparency, since retrieved sources can be cited alongside generated responses, making answers more verifiable and trustworthy than those from standalone generative models.

## Source Notes
- 2026-04-07: Karpathy's LLM Wiki: Watch Me Build a [[concepts/knowledge-base|Knowledge Base From]]
- 2026-04-08: Next Evolution of Retrieval-Augmented Generation
- 2026-04-10: [[lab-notes/2026-04-10-Karpathys-LLM-Wiki-Beyond-RAG-for-Persistent-Knowledge-Bases|Karpathys LLM Wiki Beyond RAG for Persistent Knowledge Bases]] · [▶ source](https://www.youtube.com/watch?v=zVEb19AwkqM)
