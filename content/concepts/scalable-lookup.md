---
type: concept
domain: tools-platforms
summary: A technique for large language models that optimizes computation by distinguishing between simple recall and deep computational tasks.
updated: 2026-05-23
group: developer-tooling-clis
---
# Scalable Lookup

A technique enabling efficient [[concepts/memory|memory]] access in [[concepts/large-language-models|large language models (LLMs)]] by distinguishing between simple [[concepts/recall|recall]] and deep computational tasks, reducing redundant processing.

## Core Innovation
- **[[concepts/conditional-memory|Conditional Memory]] via Scalable Lookup** ([[entities/deepseek|DeepSeek]] [[concepts/engram|Engram]] paper): Introduces a new axis of sparsity that avoids wasteful computation in [[concepts/transformers|Transformers]] by:
  - Distinguishing tasks requiring deep thought (computationally intensive) from simple [[concepts/recall|recall]] ([[concepts/memory|memory]] lookup)
  - Enabling scalable memory retrieval without increasing model [[concepts/parameter-count|parameter count]]
  - Providing task-specific computation allocation

## Key Implications
- Eliminates redundant processing for recall-based tasks (e.g., [[concepts/factual-recall|fact retrieval]] vs. [[concepts/reasoning|reasoning]])
- Reduces computational [[concepts/cost|cost]] while maintaining model capacity
- Enables more efficient LLM [[concepts/inference|inference]] through selective

## Inference Infrastructure
- LLM execution involves complex [[concepts/inference-engines|inference engines]] and [[concepts/memory-mapping|memory mapping]] rather than simple executable file execution.
- Optimization requires managing the intricate loading and [[concepts/deployment|deployment]] of model components.
- Related: 2026 04 22 [[concepts/llm-inference|LLM Inference Engines]] Memory Mapping and [[concepts/software-performance|Performance Optimization]]
## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]