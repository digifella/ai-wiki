---
type: concept
domain: ai-agents
summary: Vocabulary size represents the total number of unique tokens in a tokenizer and determines the dimensionality of embedding and output layers, affecting model parameters, memory requirements, and computational complexity.
updated: 2026-05-23
group: ai-foundations-concepts
---
# Vocabulary Size

The total number of unique [[concepts/tokens|tokens]] present within a model's Tokenizer.

## Architectural Impact
- Defines the input/output dimensionality for the Embedding Matrix and the final [[concepts/output|output]] projection layer.
- Directly [[concepts/musical-scales|scales]] the number of [[concepts/parameters|parameters]] within the model's weight tensors.

## LLM Inference & Performance
- **[[concepts/memory|Memory]] and Loading**: Larger vocabulary sizes increase the scale of the tensor collection that must be loaded and managed via [[concepts/memory-mapping|Memory Mapping]] during [[concepts/llm-inference|LLM Inference]] (see 2026 04 22 LLM [[concepts/inference-engines|Inference Engines]] [[concepts/memory|Memory]] Mapping and [[concepts/software-performance|Performance Optimization]]).
- **[[concepts/computational-complexity|Computational Complexity]]**: Affects Performance Optimization strategies, as a high vocabulary cardinality increases the computational overhead required for calculating Logits and the Softmax [[concepts/distribution|distribution]].

2026 04 22 LLM Inference Engines Memory Mapping and Performance Optimization
## Source Notes

- 2026-04-22: LLM Inference · [▶ source](https://www.youtube.com/watch?v=B18zBnjZKmc)