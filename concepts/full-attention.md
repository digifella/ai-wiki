---
type: concept
domain: ai-agents
tags:
  - "transformer-architecture"
  - "attention-mechanism"
  - "computational-complexity"
  - "llm-inference"
  - "context-window"
  - "sparse-attention"
aliases:
  - "Standard Attention"
  - "Global Attention"
  - "Quadratic Attention"
  - "Full Context Attention"
summary: Full Attention is a Transformer mechanism where every token attends to every other token, resulting in quadratic computational complexity that serves as a baseline for efficiency optimizations.
updated: 2026-07-11
group: reasoning-context-prompting
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Full Attention

**Full [[concepts/attention|Attention]]** refers to the standard Transformer mechanism where every token in a sequence attends to every other token, resulting in quadratic [[concepts/complexity-classes|computational complexity]] $O(N^2)$ relative to sequence length. While effective for capturing long-range dependencies, this approach becomes a bottleneck for [[concepts/large-language-model]] (LLM) [[concepts/inference|inference]] and training at scale.

## Core Characteristics
- **Global Context**: Each position has direct access to all previous positions.
- **Computational Cost**: [[concepts/memory|Memory]] and [[concepts/computational-resources|compute]] requirements scale quadratically with [[concepts/context-window-size|context window size]].
- **Baseline Standard**: Serves as the reference point for efficiency improvements in [[concepts/sparse-attention-architecture|Sparse Attention]], Sliding Window Attention, and [[concepts/inference-optimization]] optimizations.

## Recent Developments & Optimizations
Efforts to mitigate the quadratic cost of full attention have led to various architectural innovations. Notable recent work includes:

- **[[concepts/minimax-m3|Minimax M3]] Optimizations**:
	- [[lab-notes/2026-06-22-Minimax-M3s-Optimized-Attention-for-Efficient-LLM-Infere|Minimax M3's Optimized Attention for Efficient LLM Inference]] details specific architectural [[concepts/adjustments|adjustments]] in the [[entities/minimax|Minimax M3]] model.
	- Focuses on reducing inference latency while maintaining [[concepts/ai-performance-evaluation|performance metrics]] comparable to standard full [[concepts/attention-mechanisms|attention mechanisms]].
	- Highlights the trade-off between [[concepts/algorithm-efficiency|computational efficiency]] and context [[concepts/storing|retention]] in modern LLMs.

## Related Concepts
- [[concepts/self-attention|Attention Mechanism]]
- [[concepts/transformer-models|Transformer Architecture]]
- [[concepts/inference|Inference]] Efficiency
- [[concepts/context-window]]

## References
- [Minimax M3's Optimized Attention for Efficient LLM Inference](https://www.youtube.com/watch?v=-zIF318p7J8)
