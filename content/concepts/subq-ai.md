---
type: concept
domain: undecided
tags:
  - "ai"
  - "llm"
  - "architecture"
  - "context-window"
  - "sparse-attention"
  - "verification"
  - "subquadratic"
updated: 2026-05-23
group: needs-review
---
# SubQ AI

SubQ AI is an experimental [[concepts/large-language-model|large language model]] developed by Subquadratic, designed to extend long-context processing beyond conventional Transformer [[concepts/computational-scaling|scaling]] limits. Public disclosures emphasize architectural efficiency and unverified capacity claims.

- **[[concepts/context-window|Context Window]]:** Claims support for 12 million [[concepts/tokens|tokens]], asserting ~52x efficiency gains over standard dense [[concepts/attention-mechanisms|attention]] [[concepts/scaling|scaling]].
- **Sparse [[concepts/attention|Attention]] [[concepts/architecture|Architecture]]:** Replaces quadratic [[concepts/self-attention|self-attention]] with selective routing and token compression to maintain long-[[concepts/range|range]] [[concepts/dependency-tracking|dependency tracking]] [[concepts/assistive-technology|at]] reduced computational [[concepts/cost|cost]].
- **[[concepts/verification|Verification]] Concerns:** Independent [[concepts/benchmark-testing|benchmarking]], architectural documentation, and reproducibility metrics are currently absent; claims remain unverified and subject to community scrutiny.
- **Analysis Source:** Initial [[concepts/summary|summary]] generated via [[entities/gemini-25-flash]] API (2026-05-06); discussed in coverage by [[entities/tim-carambat|Tim Carambat]].
- **Video Reference:** https://www.youtube.com/watch?v=34I9hKjJbSM
- **Documentation:** [[lab-notes/2026-05-06-SubQ-AI-12M-Token-Context-Sparse-Attention-Architecture|SubQ AI: 12M Token Context, Sparse Attention Architecture, and Verification Concerns]]
