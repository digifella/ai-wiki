---
type: concept
domain: ai-agents
tags:
  - "full-fine-tuning"
  - "model-training"
  - "parameter-updates"
  - "deep-learning"
  - "gpu-compute"
  - "catastrophic-forgetting"
aliases:
  - "Full Fine-Tuning"
  - "Complete Fine-Tuning"
  - "Full Parameter Fine-Tuning"
summary: Full fine-tuning updates all trainable parameters of a pre-trained model, offering high performance potential but requiring significant computational resources and carrying a risk of catastrophic forgetting.
updated: 2026-07-11
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Full Fine-Tuning

**Full [[concepts/fine-tuning|Fine-Tuning]]** refers to the process of updating all [[concepts/total-parameters|trainable parameters]] of a [[concepts/pre-trained-model|pre-trained model]] during the adaptation [[concepts/phase|phase]]. Unlike [[concepts/model-fine-tuning|Parameter-Efficient Fine-Tuning]] (PEFT) methods, which freeze the [[concepts/base-model-weights|base model weights]] and train only a small subset of additional parameters, full fine-tuning modifies the entire weight matrix of the [[concepts/neural-network|neural network]].

## Characteristics

- **Parameter Update**: Every weight in the model is updated via [[concepts/backpropagation|backpropagation]].
- **Resource Intensity**: Requires significant [[concepts/vram|GPU memory]] and computational power, often necessitating distributed training or large-scale hardware clusters.
- **Performance**: Generally yields the highest potential [[concepts/performance-gains|performance gains]] for domain-specific tasks, as the model can fully adapt its internal representations.
- **Catastrophic Forgetting**: Higher risk of losing general knowledge acquired during pre-training compared to PEFT methods.

## Comparison with Parameter-Efficient Fine-Tuning

Full fine-tuning is the baseline against which efficiency techniques are measured. Recent advancements in [[concepts/ai-model-fine-tuning|Parameter-Efficient Fine-Tuning]] aim to achieve comparable performance with a fraction of the computational cost.

- **[[concepts/low-rank-adaptation|LoRA]] Integration**: [[lab-notes/2026-06-26-Low-Rank-Adaptation-LoRA-for-Efficient-AI-Model-Fine-Tun|Low-Rank Adaptation (LoRA) for Efficient AI Model Fine-Tuning]] highlights how [[concepts/lora-adapter|Low-Rank Adaptation]] addresses the computational and [[concepts/memory|memory]] bottlenecks inherent in full fine-tuning.
    - [[concepts/supervised-fine-tuning|LoRA]] freezes the pre-trained [[concepts/model-weights|model weights]] and injects trainable rank decomposition matrices into each layer of the [[concepts/transformer-models|Transformer architecture]].
    - This approach significantly reduces the number of trainable parameters, making fine-tuning accessible on [[concepts/consumer-grade-hardware|consumer-grade hardware]] while maintaining [[concepts/performance-matching|performance parity]] with full fine-tuning in many [[concepts/scenarios|scenarios]].
    - The technique is part of a broader class of [[concepts/parameter-efficient-adaptation|Parameter-Efficient Adaptation]] (PEA) techniques designed to mitigate the high costs of updating [[concepts/large-language-model-llm|large language models]].

## Use Cases

- Domain-specific adaptation where maximum performance is critical and [[concepts/computational-resources|computational resources]] are abundant.
- Scenarios where the target distribution differs significantly from the pre-[[concepts/custom-dataset|training data]], requiring substantial shifts in model weights.

## References

- [Low-Rank Adaptation (LoRA) for Efficient AI Model Fine-Tuning](https://www.youtube.com/watch?v=U80tjcThl9Q)
