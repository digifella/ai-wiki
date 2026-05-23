---
type: concept
domain: ai-agents
updated: 2026-05-23
group: reasoning-context-prompting
---
# Contextual Embeddings

Dynamic [[concepts/vector-representations|vector representations]] of [[concepts/tokens|tokens]] where the embedding varies based on the surrounding sequence context, enabling resolution of polysemy and long-[[concepts/range|range]] dependencies. Unlike static embeddings, these are computed on-the-fly by the model's [[concepts/architecture|architecture]].

## Mechanism & Properties
- **[[concepts/transformer-models|Transformer Architecture]]:** Contextual embeddings emerge from `[[concepts/self-attention]]` layers within `Transformer` [[concepts/models|models]]. Each layer refines token representations by aggregating information from other positions in the sequence.
- **QKV Computation:** The `Attention Mechanism` projects inputs into `Query`, `Key`, and `Value` spaces. [[concepts/attention-mechanisms|Attention]] scores are derived from dot products of Q and K, normalized via softmax, and applied to V to [[concepts/compute|compute]] weighted context aggregations.
- **Dynamic Representation:** A single token yields distinct vectors depending on neighbors, capturing semantic nuance absent in fixed-lookup embeddings.
- **Layer-wise Evolution:** Contextual depth increases through stacked layers; early layers capture local syntax/adjacency, while deeper layers model global semantics and abstract [[concepts/relationships|relationships]].
- **Visual Intuition:** 3Blue1Brown's breakdown clarifies how [[concepts/attention|attention]] [[concepts/weights|weights]] function as dynamic focus mechanisms to construct rich, position-aware embeddings.

## Sources & Notes
- [[lab-notes/2026-05-06-Transformer-Attention-Mechanism-Explained-Contextual-Emb|Transformer Attention Mechanism Explained: Contextual Embeddings and QKV System]]
