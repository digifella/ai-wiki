---
type: concept
domain: ai-agents
tags:
  - "low-rank-adaptation"
  - "parameter-efficient-fine-tuning"
  - "diffusion-models"
  - "model-compression"
  - "hardware-efficiency"
aliases:
  - "LoRA"
  - "Low-Rank Adaptation"
  - "PEFT Adapter"
summary: A LoRA adapter is a parameter-efficient fine-tuning technique that adds low-rank matrices to frozen model layers, enabling task-specific adaptation with minimal computational overhead and memory usage.
updated: 2026-07-11
group: model-efficiency-compression
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

- "[[concepts/ai-model-fine-tuning|lora]]"
  - "ai"
  - "[[concepts/image-and-video-diffusion-models|diffusion-models]]"
  - "[[concepts/fine-tuning|fine-tuning]]"
  - "[[concepts/machine-learning|machine-learning]]"
group: model-efficiency-compression

# LoRA Adapter

A **[[concepts/supervised-fine-tuning|LoRA]] ([[concepts/low-rank-adaptation|Low-Rank Adaptation]])** adapter is a parameter-efficient [[concepts/fine-tuning|fine-tuning]] technique for large [[concepts/ai-models|AI models]] that adds low-rank matrices to existing layers instead of modifying all parameters. This enables task-specific adaptation with minimal computational overhead and [[concepts/memory-management|memory usage]].

## Key Characteristics
- **Minimal parameter addition**: Typically requires only 0.1–1% of original [[concepts/active-parameters|model parameters]]
- **Hardware efficiency**: Enables training on consumer GPUs with low [[concepts/vram|VRAM]] (e.g., 12GB+ cards)
- **Swapability**: Multiple adapters can be toggled without retraining
- **Preserves [[concepts/pre-trained-model|base model]]**: Base [[concepts/weights|weights]] remain frozen during [[concepts/inference|inference]]

## Practical Application: Face Generation with FLUX.1
[[entities/adam-lucek|Adam Lucek]] demonstrated training a LoRA adapter on [[entities/flux1|FLUX.1]] ([[entities/black-forest-labs|Black Forest Labs]]' diffusion model) to reliably generate images of a specific person across diverse [[concepts/scenarios|scenarios]]. Key details:
- **Goal**: Create consistent person-specific generation without full [[concepts/model-retraining|model retraining]]
- **Hardware**: Achieved with low VRAM (e.g., 24GB consumer GPU)
- **Process**: Trained adapter on facial data
- **Video Demonstration**: [Training FLUX.1 LoRA Adapter on Faces | Low VRAM Image Generation](https://www.youtube.com/watch?v=Drw6tnvtA5I)
- **Tools/Setup**: Detailed in 2026 04 14 [[concepts/community-interest|Adam Lucek Flux model]] for Open AI generated image gen
