---
type: concept
domain: ai-agents
tags:
  - "ai/deep-learning"
  - "transformers"
  - "attention-mechanism"
  - "nlp"
  - "llm-architecture"
  - "qkv"
updated: 2026-05-23
group: reasoning-context-prompting
---
# Multi-Head Attention

Multi-Head [[concepts/attention-mechanisms|Attention]] (MHA) is a foundational mechanism in [[concepts/transformer-architectures|Transformer architectures]] that allows the model to jointly attend to information from different representation subspaces [[concepts/assistive-technology|at]] different positions. It extends Scaled Dot-Product [[concepts/attention|Attention]] by projecting inputs into $h$ distinct heads, computing attention in parallel, and concatenating the outputs before a final linear transformation.

## Formulation

For input matrix $X$, learnable weight matrices generate Queries ($Q$), Keys ($K$), and Values ($V$):
$$ Q = XW^Q, \quad K = XW^K, \quad V = XW^V $$

Attention is computed per head $i$ using the attention function, then concatenated and projected:
$$ \[[concepts/text|text]]{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)W^O $$
$$ \text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V $$

## Properties & Function

- **Subspace Representation:** Each head learns distinct features (e.g., syntactic [[concepts/structure|structure]], semantic role, positional relations), increasing model expressivity without proportional computational [[concepts/cost|cost]].
- **Dynamic Contextualization:** Attention [[concepts/weights|weights]] are computed based on Query-Key-Value interactions, allowing the model to adaptively weight token contributions based on global sequence context.
- **Parallel Execution:** Heads operate independently, enabling efficient computation across [[concepts/hardware|hardware]] accelerators.
- **[[concepts/output|Output]] Aggregation:** Concatenated heads are linearly projected via $W^O$ to blend learned features, mitigating interference between specialized heads.

## Integrated Analysis

- [[lab-notes/2026-05-06-Transformer-Attention-Mechanism-Explained-Contextual-Emb|Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System]] integrates 3Blue1Brown's visual intuition on how the [[concepts/qkv-system|QKV system]] constructs Contextual Embedding vectors by measuring geometric relevance between token representations.
- The QKV mechanism functions as a relational query interface: Queries probe the sequence via Keys to generate attention scores, which weight Values to produce output vectors enriched with position-dependent context.
- Visual analysis indicates that individual heads can specialize in capturing specific patterns, such as character-level n-grams, syntactic dependencies, or long-[[concepts/range|range]] semantic links, collectively enabling [[concepts/large-language-model]] coherence.

## Related Concepts

- Scaled Dot-Product [[concepts/attention-mechanisms|Attention]]
- [[concepts/self-attention]]
- [[concepts/cross-attention]]
- Encoder-Decoder [[concepts/architecture|Architecture]]
- Positional [[concepts/encoding|Encoding]]
