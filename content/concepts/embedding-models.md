---
type: concept
domain: ai-agents
updated: 2026-05-23
group: model-efficiency-compression
---
- "embedding"
  - "rag"
  - "[[concepts/fine-tuning|fine-tuning]]"
  - "[[concepts/machine-learning|machine-learning]]"
group: model-efficiency-compression

# Embedding Models

Embedding [[concepts/models|models]] are [[concepts/vector-representations|vector representations]] that capture semantic meaning of data, enabling efficient similarity search in AI systems. They form the backbone of [[concepts/retrieval-augmented-generation-rag]] pipelines by converting [[concepts/unstructured-data|unstructured data]] (documents, [[concepts/images|images]]) into dense vectors.

## Key Concepts

- **Role in RAG**: Embedding models enable [[concepts/natural-language-search|semantic search]] by transforming [[concepts/text|text]] into vectors where similar concepts reside in proximity, critical for [[concepts/rag]] relevance
- **Domain-Specific Optimization**: [[concepts/fine-tuning|Fine-tuning]] embedding models on specialized data (e.g., medical, legal) significantly improves retrieval [[concepts/accuracy|accuracy]] over general-[[concepts/purpose|purpose]] models
- **Methodology**: Uses contrastive loss on [[concepts/domain-specific-data|domain-specific data]] to align embeddings with retrieval objectives, as demonstrated in [[entities/adam-lucek|Adam Lucek]] RAG [[concepts/embedding-model-fine-tuning|embedding model fine tuning]]
- **Evaluation**: Requires domain-specific metrics (e.g., [[concepts/recall|recall]]@k, precision) rather than generic benchmarks
- **[[entities/adam-lucek|Adam Lucek]]'s Contributions**: Focuses on optimizing RAG pipelines by fine-tuning embedding models for [[concepts/domain-specific-data|domain-specific data]], emphasizing the importance of embedding models in RAG

## Related Approaches

- **[[concepts/graph-rag|Graph RAG]]**: Emerging technique leveraging [[concepts/knowledge-graphs|knowledge graphs]]
## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!
- 2026-04-07: [[lab-notes/2026-04-07-AI-Guided-Software-Development-Leveraging-Claude-Code-Agent-Skills-for|AI Guided Software Development Leveraging Claude Code Agent Skills for]] · [▶ source](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 2026-04-12: [[lab-notes/2026-04-12-MiniMax-M27-Open-Source-LLM-Technical-Overview-and-Deployment-Summary|MiniMax M27 Open Source LLM Technical Overview and Deployment Summary]] · [▶ source](https://www.youtube.com/watch?v=CUvb-i5niKA)
- 2026-04-21: Google DeepMind
- 2026-04-22: Google Gemma · [▶ source](https://www.youtube.com/watch?v=ZxQ2DuejRhU)
- 2026-04-28: Apple