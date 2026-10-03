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
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-21" }
---
# Deepseek Engram

DeepSeek Engram is a machine learning architecture technique that introduces conditional memory access through scalable lookup mechanisms. Rather than retrieving all stored information uniformly during inference, Engram enables models to selectively access memory based on contextual conditions. This selective access pattern is formalized as a new axis of sparsity in large language model design, complementing existing sparsity approaches in attention and computation.

The architecture addresses a fundamental inefficiency in traditional language models by decoupling memory retrieval from standard attention heads. By implementing scalable lookup tables, the system allows for the storage of vast amounts of external knowledge without proportionally increasing the computational cost of every forward pass. This mechanism operates as a sparse activation layer, where only relevant memory entries are queried and integrated into the model's context window based on specific input triggers.

This approach offers a distinct alternative to dense parameter scaling and standard key-value cache expansion. It provides a method for enhancing model capability and factual accuracy through externalized storage while maintaining inference efficiency. The conditional nature of the access ensures that computational resources are allocated dynamically, focusing processing power on the specific data points required for the current query rather than processing the entire memory bank.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-DeepSeek-Engram-Solving-LLM-Inefficiency-Through-Context-Aware|DeepSeek Engram Solving LLM Inefficiency Through Context Aware]] · [▶ source](https://www.youtube.com/watch?v=DmtoVnTkQnM)
