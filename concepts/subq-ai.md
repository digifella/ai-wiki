---
type: concept
domain: ai-agents
tags:
  - "ai"
  - "llm"
  - "architecture"
  - "context-window"
  - "sparse-attention"
  - "verification"
  - "subquadratic"
  - "open-weight"
  - "multimodality"
  - "coding"
aliases:
  - "Subquadratic AI"
  - "SubQ"
  - "Sparse Attention Model"
summary: Subq Ai is an experimental model by Subquadratic that claims to support a 12 million token context window with significant efficiency gains through sparse attention mechanisms, though these claims currently lack independ
updated: 2026-07-12
group: applied-ai-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Sparse Attention

Sparse [[concepts/attention|Attention]] is an architectural optimization in [[concepts/large-language-model|large language models]] that replaces standard quadratic [[concepts/self-attention|self-attention]] with selective routing, token compression, or structured patterns. This approach aims to maintain long-range [[concepts/dependency-tracking|dependency tracking]] while reducing computational cost and enabling extended [[concepts/context-window|context windows]] beyond conventional Transformer [[concepts/computational-scaling|scaling]] limits.

### Key Implementations & Developments

- **SubQ AI:** An [[concepts/experimental-model|experimental model]] by Subquadratic claiming 12 million [[concepts/tokens|tokens]] support and ~52x efficiency gains over dense attention. Claims rely on architectural efficiency but lack independent [[concepts/verification|verification]], reproducibility metrics, or public [[concepts/benchmark-testing|benchmarking]].
- **[[concepts/minimax-m3|MiniMax M3]]:** A recently released [[concepts/open-weight|open-weight]] LLM demonstrating frontier capabilities in [[concepts/coding|coding]] and agentic [[concepts/reasoning|reasoning]]. It utilizes sparse [[concepts/attention-mechanisms|attention mechanisms]] to support a [[concepts/1-million-token-context|1 million token context]] window and [[concepts/native-multimodality|native multimodality]], offering a verified alternative for testing [[concepts/sparse-attention-architecture|sparse attention]] efficacy in [[concepts/open-source|open-source]] contexts. See [[lab-notes/2026-06-01-MiniMax-M3-Open-Weight-LLMs-Frontier-Coding-Native-Multi|MiniMax M3: Open-Weight LLM's Frontier Coding, Native Multimodality, and Sparse Attention]] for detailed analysis.

### Architectural Implications

- **Efficiency vs. [[concepts/density|Density]]:** Sparse attention reduces the $O(N^2)$ complexity of dense attention, allowing models to process larger inputs at lower hardware costs.
- **Verification Status:** While commercial claims (e.g., SubQ) remain unverified, open-weight implementations like [[concepts/minimax|MiniMax]] M3 provide reproducible benchmarks for assessing the trade-offs between sparsity and performance in coding and reasoning tasks.
