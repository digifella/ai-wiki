---
type: concept
domain: ai-agents
summary: Traditional RAG enhances LLM responses by retrieving relevant external documents before generation to improve accuracy and reduce hallucinations.
updated: 2026-05-23
group: applied-ai-workflows
---
# Traditional RAG

Traditional RAG ([[concepts/answer-generation|Retrieval-Augmented Generation]]) is a foundational framework that enhances LLM [[concepts/responses|responses]] by retrieving relevant external documents before generation. It combines retrieval systems with generative [[concepts/models|models]] to improve factual [[concepts/accuracy|accuracy]] and reduce hallucinations.

## Limitations
- Inability to model [[concepts/relationships|relationships]] between retrieved documents
- Context fragmentation due to fixed [[concepts/text-chunking|chunking strategies]]
- Limited coherence across multiple retrieved passages
- Inefficient handling of complex multi-step [[concepts/reasoning|reasoning]] (video: [[entities/discover-ai-channel|Discover AI channel]] - [[concepts/graph-rag|Graph RAG]] evolved)

## Evolution
The video [[entities/discover-ai-channel|Discover AI channel]] - [[concepts/entity-relation-graphs|Graph RAG]] evolved documents RAG's progression beyond traditional approaches:
- [[concepts/graphrag|GraphRAG]]: Uses [[concepts/knowledge-graphs|knowledge graphs]] to represent document relationships
- LightRAG: Optimizes for low-latency, resource-efficient retrieval
- [[concepts/pathrag|PathRAG]]: Implements path-based context retrieval for complex queries

## Related Concepts
- [[concepts/answer-generation|Retrieval-Augmented Generation]]
- [[concepts/vector-store|Knowledge Graph]]
- [[concepts/knowledge-bases|Information Retrieval]]
- [[concepts/llm-hallucination|LLM Hallucination]]

[[concepts/date-2026-04-13|2026]] 04 14 [[entities/discover-ai-channel|Discover AI channel]] [[concepts/graph-rag|Graph RAG]] evolved
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-1-Bit-LLMs-BitNet-Bonsai-and-Efficient-On-Device-Deployment|1 Bit LLMs BitNet Bonsai and Efficient On Device Deployment]] · [▶ source](https://www.youtube.com/watch?v=0fWFetwHkVE)
- 2026-04-14: # RAG plus [[concepts/knowledge-graphs|knowledge graphs]] using [[concepts/graphiti|GRAPHITI]] --- --- <https://www.youtube.com/watch?v=PxcOIINgiaA> This video By [[entities/cole-medin|Cole Medin]] provides a comprehensive overview of [[concepts/answer-generation|Retrieval Augmented Generation]] (RAG) and introduces [[concepts/graphiti|Graphiti]], an [[concepts/open-source|open-source]] platform designed to address RAG's limitatio (RAG plus knowledge graphs using GRAPHITI)
- 2026-04-23: Claude · [▶ source](https://www.youtube.com/watch?v=KpG2yBi5I10)