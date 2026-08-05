---
type: concept
domain: science-physics-research
tags:
  - "machine-learning"
  - "deep-learning"
  - "neural-networks"
  - "transformers"
  - "attention-mechanism"
  - "nlp"
aliases:
  - "Self-Attention"
  - "Scaled Dot-Product Attention"
  - "QKV Attention"
  - "Multi-Head Attention"
summary: The Transformer attention mechanism computes weighted input token representations based on global context using Query, Key, and Value projections to capture long-range dependencies.
updated: 2026-07-12
group: engineering-systems-robotics-autonomous-vehicles
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=science-physics-research name=Science, Physics & Research

# Transformer Attention Mechanism

Core computation layer in [[concepts/transformer-architectures|Transformer architectures]] that computes weighted representations of input [[concepts/tokens|tokens]] based on global context, enabling [[concepts/parallel-processing|parallel processing]] and long-range dependency capture.

## Key Components
- **QKV Projections:** Input [[concepts/dense-vectors|embeddings]] are linearly projected into Query ($Q$), Key ($K$), and Value ($V$) matrices to [[concepts/compute|compute]] [[concepts/attention-mechanisms|attention]] scores.
- **[[concepts/attention|Attention]] [[concepts/weights|Weights]]:** Derived from similarity between queries and keys, scaled and normalized via softmax to determine information [[concepts/flow|flow]] from values.
- **[[concepts/contextual-embeddings|Contextual Embeddings]]:** Output vectors aggregate values weighted by attention scores, producing representations conditioned on the entire sequence.
- **[[concepts/multi-head-attention|Multi-Head Attention]]:** Parallel attention computations over distinct subspaces capture diverse relational patterns.

## Related Resources
- [[lab-notes/2026-05-06-Transformer-Attention-Mechanism-Explained-Contextual-Emb|Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System]]
- 3Blue1Brown visual explanation: "Attention in [[concepts/transformers|transformers]], step-by-step" link demonstrates intuitive mechanics of QKV interactions and embedding transformations.
- Foundational to [[concepts/large-language-model]] performance in [[concepts/transformer-models|sequence modeling]] and generative tasks.
