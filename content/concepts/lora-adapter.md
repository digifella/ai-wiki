---
type: concept
domain: ai-agents
updated: 2026-04-14
group: model-efficiency-compression
---
- "lora"
  - "ai"
  - "diffusion-models"
  - "[[concepts/fine-tuning|fine-tuning]]"
  - "[[concepts/machine-learning|machine-learning]]"
group: model-efficiency-compression

# LoRA Adapter

A **LoRA (Low-Rank Adaptation)** adapter is a parameter-efficient [[concepts/fine-tuning|fine-tuning]] technique for large [[concepts/ai-models|AI models]] that adds low-rank matrices to existing layers instead of modifying all [[concepts/parameters|parameters]]. This enables task-specific adaptation with minimal computational overhead and [[concepts/memory-management|memory usage]].

## Key Characteristics
- **Minimal parameter addition**: Typically requires only 0.1–1% of original [[concepts/active-parameters|model parameters]]
- **[[concepts/hardware|Hardware]] efficiency**: Enables [[concepts/training|training]] on consumer GPUs with low [[concepts/vram|VRAM]] (e.g., 12GB+ cards)
- **Swapability**: Multiple adapters can be toggled without retraining
- **Preserves base model**: Base [[concepts/weights|weights]] remain frozen during [[concepts/inference|inference]]

## Practical Application: Face Generation with FLUX.1
[[entities/adam-lucek|Adam Lucek]] demonstrated [[concepts/training|training]] a LoRA adapter on [[entities/flux1|FLUX.1]] ([[entities/black-forest-labs|Black Forest Labs]]' diffusion model) to reliably generate [[concepts/images|images]] of a specific person across diverse [[concepts/scenarios|scenarios]]. Key details:
- **Goal**: Create consistent person-specific generation without full model retraining
- **[[concepts/hardware|Hardware]]**: Achieved with low VRAM (e.g., 24GB consumer GPU)
- **Process**: Trained adapter on facial data
- **Video Demonstration**: [Training FLUX.1 LoRA Adapter on Faces | Low VRAM Image Generation](https://www.youtube.com/watch?v=Drw6tnvtA5I)
- **Tools/Setup**: Detailed in 2026 04 14 [[concepts/community-interest|Adam Lucek Flux model]] for Open AI generated image gen
