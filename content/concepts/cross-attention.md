---
type: concept
domain: ai-agents
updated: 2026-05-23
group: reasoning-context-prompting
---
# Cross-Attention

## Definition
Cross-[[concepts/attention-mechanisms|attention]] is an [[concepts/attention|attention]] mechanism in [[concepts/transformer-architectures|Transformer architectures]] where query ($Q$) tensors are derived from a distinct sequence compared to the key ($K$) and value ($V$) tensors. Enables information exchange between modalities or across encoder-decoder boundaries.

## Mechanism
- **Formula:** $\[[concepts/text|text]]{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$.
- **Complexity:** $O(N \cdot M \cdot d)$, where $N$ is query length and $M$ is source sequence length.
- **[[concepts/contrast|Contrast]]:** Differs from [[concepts/self-attention]] where $Q, K, V$ originate from the same input sequence.

## Applications
- Encoder-Decoder [[concepts/models|models]]: [[concepts/decoder-layers|Decoder layers]] query encoder representations (e.g., T5, BART).
- Multimodal alignment: Text queries attend to image/video patches (e.g., CLIP, Flamingo, [[entities/llava]]).
- Diffusion models: UNet blocks condition generation via cross-attention with text embeddings.
- ControlNet/Adapter: Inject auxiliary signals through cross-attention pathways.

## Optimizations
- Sparse attention: Prunes or subsets attention interactions to reduce memory/compute.
- Linear attention: Kernelized approximations for near-linear [[concepts/computational-scaling|scaling]].
- FlashAttention: I/O-aware tiling for efficient dense attention computation.

## Recent Developments
- SubQ (Subquadratic, 2026) implements a [[concepts/sparse-attention-architecture|sparse attention architecture]] supporting a 12M token [[concepts/context-window|context window]].
- Reports claim 52x efficiency improvements over standard dense attention baselines.
- Sparse cross-attention strategies may resolve quadratic bottlenecks in ultra-long context or high-resolution multimodal fusion.
- [[concepts/verification|Verification]] concerns raised regarding context fidelity and efficiency metric reproducibility.
- Reference: [[lab-notes/2026-05-06-SubQ-AI-12M-Token-Context-Sparse-Attention-Architecture|SubQ AI: 12M Token Context, Sparse Attention Architecture, and Verification Concerns]].
