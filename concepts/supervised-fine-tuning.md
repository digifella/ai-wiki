---
type: concept
domain: ai-agents
tags:
  - "supervised-fine-tuning"
  - "large-language-models"
  - "hugging-face-trl"
  - "weight-updates"
  - "model-alignment"
  - "lora"
  - "parameter-efficient-fine-tuning"
aliases:
  - "SFT"
  - "Supervised Fine-Tuning"
  - "SF-Tuning"
  - "LoRA"
  - "Low-Rank Adaptation"
summary: A technique for adapting pre-trained language models to specific tasks or domains by updating model weights using labeled input-output pairs, often utilizing parameter-efficient methods like LoRA to reduce computational costs.
updated: 2026-07-12
group: training-fine-tuning-evaluation
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Supervised Fine-Tuning

A technique for adapting pre-trained language models to specific tasks or domains by updating [[concepts/model-weights|model weights]] using labeled [[concepts/training-data|input-output pairs]]. Involves training on a curated dataset to align [[concepts/model-behavior|model behavior]] with desired outputs while preserving base capabilities.

## Key Implementation Details
- Uses [[entities/hugging-face]]'s [[concepts/trl-library|TRL library]] for efficient supervised [[concepts/fine-tuning|fine-tuning]] (SFT) pipelines
- Requires labeled dataset matching target task (e.g., persona embodiment, domain-specific language)
- Typically involves incremental weight [[concepts/software-updates|updates]] rather than full retraining
- Leverages [[concepts/parameter-efficient-fine-tuning|Parameter-Efficient Fine-Tuning]] ([[concepts/parameter-efficient-adaptation|PEFT]]) techniques, such as [[concepts/lora|Low-Rank Adaptation (LoRA)]], to address significant computational and [[concepts/memory|memory]] costs associated with [[concepts/full-fine-tuning|full fine-tuning]]
- [[concepts/lora-adapter|LoRA]] freezes [[concepts/pre-trained-model|pre-trained model]] [[concepts/parameters|weights]] and injects trainable rank decomposition matrices into each layer of the [[concepts/transformer-models|Transformer architecture]], significantly reducing the number of [[concepts/total-parameters|trainable parameters]]

## Example: Fine-Tuning OSS-20B
- Demonstrated in [[entities/fahd-mirza]]'s [[concepts/tutorial|tutorial]] for training [[entities/oss-20b|OSS-20B]] to embody a specific persona using a small [[concepts/custom-dataset|custom dataset]]
- System: [[entities/ubuntu|Ubuntu]] 22.04 LTS
- Process: [[concepts/custom-dataset|

## Related Concepts
- [[lab-notes/2026-06-26-Low-Rank-Adaptation-LoRA-for-Efficient-AI-Model-Fine-Tun|Low-Rank Adaptation (LoRA) for Efficient AI Model Fine-Tuning]]

## References
- [Low-Rank Adaptation (LoRA) for Efficient AI Model Fine-Tuning](https://www.youtube.com/watch?v=U80tjcThl9Q)
