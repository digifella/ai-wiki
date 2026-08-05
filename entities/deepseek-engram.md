---
type: entity
tags:
  - "conditional-memory"
  - "scalable-lookup"
  - "sparsity"
  - "llm-efficiency"
  - "deepseek"
  - "context-aware-retrieval"
aliases:
  - "Engram"
summary: DeepSeek Engram introduces conditional memory via scalable lookup as a new axis of sparsity.
updated: 2026-07-21
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
# DeepSeek Engram

DeepSeek Engram is a machine learning architecture technique that introduces conditional memory access through scalable lookup mechanisms. Rather than retrieving all stored information uniformly during inference, Engram enables models to selectively access memory based on contextual conditions. This selective access pattern is formalized as a new axis of sparsity in large language model design, complementing existing sparsity approaches in attention and computation.

## Memory Access and Efficiency

The architecture addresses a fundamental inefficiency in traditional language models: the uniform retrieval of all stored information regardless of context. By implementing conditional lookup, Engram allows models to activate only relevant memory components when needed. This reduces computational overhead while maintaining the ability to access the full range of stored information when contextually appropriate, creating a more efficient use of model capacity.

## Relationship to Model Architecture

Engram functions as a component within broader model design rather than a standalone technique. It integrates with existing sparse computation methods to reduce redundant memory access and improve inference efficiency. The approach is particularly relevant for scaling large language models, where memory access costs constitute a significant portion of computational expense.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-DeepSeek-Engram-Solving-LLM-Inefficiency-Through-Context-Aware|DeepSeek Engram Solving LLM Inefficiency Through Context Aware]] · [▶ source](https://www.youtube.com/watch?v=DmtoVnTkQnM)
