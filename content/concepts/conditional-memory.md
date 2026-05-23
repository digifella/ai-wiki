---
type: concept
domain: tools-platforms
updated: 2026-05-23
group: platforms-runtimes-environments
---
# Conditional Memory

A mechanism in [[concepts/large-language-models|large language models (LLMs)]] that enables selective activation of [[concepts/memory|memory]] modules based on task requirements, optimizing [[concepts/algorithm-efficiency|computational efficiency]] by distinguishing between [[concepts/deep-reasoning|deep reasoning]] and simple [[concepts/recall|recall]].

## Key Insights from DeepSeek's Engram Paper

- **Core Problem**: Current [[concepts/transformer-architectures|Transformer architectures]] waste computation by treating all tasks uniformly, failing to distinguish between **deep thought** (complex [[concepts/reasoning|reasoning]]) and **simple [[concepts/recall|recall]]** ([[concepts/factual-knowledge|factual knowledge]]).
- **[[concepts/solution|Solution]]**: *Conditional Memory via [[concepts/scalable-lookup|Scalable Lookup]]* introduces a new axis of **sparsity** through a scalable memory lookup system.
- **Mechanism**: [[concepts/models|Models]] conditionally access pre-stored knowledge only when required, reducing unnecessary computation for recall tasks.
- **Impact**: Enables efficient resource allocation without compromising performance on [[concepts/complex-reasoning|complex reasoning]] tasks.

## Related Concepts

- Sparsity in LLMs
- Transformer [[concepts/architecture|Architecture]]
- Memory-Augmented [[concepts/neural-networks|Neural Networks]]
- [[entities/prompt-engineering]]

## Backlinks

- 2026 04 14 DeepSAeek [[entities/deepseek-engram|Engram]] paper [[concepts/prompt-based-modeling|Prompt Engineering]] channel
## Source Notes

- 2026-04-23: [[lab-notes/2026-04-23-Engine-Survival-The-Critical-Role-of-Oil-Pressure-and-Warning-Lights|Engine Survival: The Critical Role of Oil Pressure and Warning Lights]] · [▶ source](https://www.youtube.com/watch?v=mmCfOazZCNQ)
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]