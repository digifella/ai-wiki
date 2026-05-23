---
type: entity
summary: Engram is a large language model technique that introduces a new axis of sparsity through conditional memory and scalable lookup.
updated: 2026-05-23
---
# Engram

[[entities/deepseek]]'s [[entities/deepseek-engram|Engram]] is a technique for [[concepts/large-language-models]] that introduces a new axis of sparsity through [[concepts/conditional-memory|conditional memory]] via [[concepts/scalable-lookup|scalable lookup]].

## Core Problem
Current [[concepts/transformer-architectures|Transformer architectures]] waste computation by failing to distinguish between:
- Tasks requiring deep thought (computationally intensive)
- Tasks requiring simple [[concepts/recall|recall]] (which could be handled via [[concepts/memory|memory]] lookup)

## Key Innovation
[[concepts/engram|Engram]] implements a [[concepts/scalable-lookup|scalable lookup]] mechanism to conditionally access [[concepts/memory|memory]] for simple [[concepts/recall|recall]] tasks, reducing unnecessary computation while maintaining performance on complex [[concepts/reasoning|reasoning]] tasks.

[[concepts/date-2026-04-13|2026]] 04 14 DeepSAeek Engram paper [[concepts/prompt-engineering|Prompt Engineering]] channel
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-DeepSeek-Engram-Solving-LLM-Inefficiency-Through-Context-Aware|DeepSeek Engram Solving LLM Inefficiency Through Context Aware]] · [▶ source](https://www.youtube.com/watch?v=DmtoVnTkQnM)