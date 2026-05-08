---
type: concept
domain: ai-agents
group: open-systems-local-models
tags:
  - "embeddings"
  - "multimodal"
  - "multilingual"
  - "vector-representations"
  - "retrieval"
  - "rag"
  - "universal-models"
aliases:
  - "Jina v4"
  - "Jina Embeddings v4"
summary: Jina Embeddings v4 is a universal embedding model designed for multimodal and multilingual retrieval tasks.
updated: 2026-05-01
---
# Jina Embeddings V4

Jina Embeddings V4 is a [[concepts/image-embeddings|universal embedding model]] developed for retrieval-augmented generation (RAG) systems that process multiple modalities and languages. Unlike earlier embedding models optimized for single modalities, V4 supports simultaneous processing of text, [[concepts/images|images]], and other content types within a unified embedding space, enabling cross-modal [[concepts/natural-language-search|semantic search]] and retrieval.

## Multimodal and Multilingual Capabilities

The model is engineered to handle both multimodal inputs—allowing users to embed and search across documents containing text and images together—and multilingual content. This design allows organizations to build [[concepts/contextualized-language-understanding|RAG systems]] that can retrieve relevant information regardless of the content type or language, reducing the need for separate embedding pipelines for different modalities.

## Applications in RAG Systems

V4 is particularly suited for modern RAG architectures where documents may contain mixed content types. By creating a shared embedding space for text and images, the model enables more sophisticated retrieval strategies, such as searching for images using text queries or retrieving textual context based on image inputs. This flexibility makes it applicable to complex [[concepts/knowledge-bases|information retrieval]] tasks across diverse domains and document types.

## Source Notes

- 2026-04-23: Anthropic · [▶ source](https://www.youtube.com/watch?v=aO5k3haUz9Q)