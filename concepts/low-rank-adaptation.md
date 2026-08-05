---
type: concept
domain: biology-life-sciences
tags:
  - "machine-learning"
  - "peft"
  - "fine-tuning"
  - "transformer"
  - "diffusion-models"
  - "parameter-efficient"
  - "low-rank-adaptation"
  - "parameter-efficient-fine-tuning"
  - "transformer-architecture"
  - "deep-learning"
aliases:
  - "LoRA"
  - "Low-Rank Adaptation"
  - "PEFT LoRA"
  - "Lora Fine-Tuning"
summary: Low-Rank Adaptation is a parameter-efficient fine-tuning method that freezes pre-trained weights and injects trainable low-rank decomposition matrices into specific layers to reduce computational overhead while maintaining performance.
updated: 2026-07-11
group: life-systems-adaptation-discovery
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=biology-life-sciences name=Biology & Life Sciences

# Low-Rank Adaptation (LoRA)

**[[concepts/lora-adapter|Low-Rank Adaptation]]** is a Parameter-Efficient [[concepts/fine-tuning|Fine-Tuning]] technique that freezes [[concepts/pre-trained-model|pre-trained model]] [[concepts/weights|weights]] and injects trainable low-rank decomposition matrices into specific layers. Instead of updating the full weight matrix $W$, [[concepts/ai-model-fine-tuning|LoRA]] learns a delta $\Delta W = A \times B$, where $A \in \mathbb{R}^{r \times d}$ and $B \in \mathbb{R}^{m \times r}$ with rank $r \ll \min(m, d)$. This approach drastically reduces [[concepts/total-parameters|trainable parameters]] and [[concepts/memory|memory]] footprint, prevents catastrophic forgetting, and achieves [[concepts/performance-matching|performance parity]] with full [[concepts/model-fine-tuning|fine-tuning]] across diverse tasks.

## Mechanism
- Replaces weight [[concepts/software-updates|updates]] with low-rank factorization, [[concepts/storing|storing]] only the small matrices $A$ and $B$ rather than the full weight delta.
- Integrates seamlessly with existing [[concepts/transformer-architecture|Transformer]] layers by adding the low-rank update to the frozen [[concepts/base-model-weights|pre-trained weights]] during [[concepts/inference|inference]] ($W_{new} = W_{frozen} + \Delta W$).

## Context & Resources
- See [[lab-notes/2026-06-26-Low-Rank-Adaptation-LoRA-for-Efficient-AI-Model-Fine-Tun|Low-Rank Adaptation (LoRA) for Efficient AI Model Fine-Tuning]] for a detailed overview of [[concepts/parameter-efficient-adaptation|Parameter-Efficient Adaptation]] (PEA) techniques and the computational benefits of [[concepts/supervised-fine-tuning|LoRA]].
- [Low-Rank Adaptation (LoRA) for Efficient AI Model Fine-Tuning](https://www.youtube.com/watch?v=U80tjcThl9Q) (Video by [[entities/jia-bin-huang|Jia-Bin Huang]])
