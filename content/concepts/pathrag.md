---
type: concept
domain: ai-agents
updated: 2026-05-23
group: applied-ai-workflows
---
# PathRAG

PathRAG is an advanced [[concepts/rag]] technique that extends [[concepts/graph-retrieval-augmented-generation|GraphRAG]] and LightRAG by retrieving along paths in [[concepts/knowledge-graphs|knowledge graphs]] to handle multi-hop queries and complex [[concepts/relationships|relationships]].

## Evolution of RAG Systems
From the [Discover AI channel - Graph RAG evolved](https://www.youtube.com/watch?v=oetP9uksUwM):
- **[[concepts/traditional-rag|Traditional RAG]]**: Limited by [[concepts/document-chunking|document chunking]] and lack of semantic connections despite [[concepts/algorithmic-optimization|optimization techniques]] (e.g., [[concepts/chunking-strategies|chunking strategies]], pre/post-[[concepts/pre-retrieval-optimization|retrieval optimization]]).
- **[[concepts/graphrag|GraphRAG]]**: Uses knowledge graphs to model [[concepts/entity-relationships|entity relationships]] for contextual retrieval.
- **LightRAG**: Efficient, lightweight variant of GraphRAG optimized for scalability.
- **PathRAG**: Retrieves along graph paths to capture multi-hop relationships, enabling deeper context for complex queries.

For [[concepts/implementation-details|implementation details]], see the [video](https://www.youtube.com/watch?v=oetP9uksUwM).

2026 04 14 [[entities/discover-ai-channel|Discover AI channel]] [[concepts/entity-relation-graphs|Graph RAG]] evolved
## Source Notes

- 2026-04-14: How to get TACK SHARP photos with any camera!