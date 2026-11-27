---
type: entity
tags:
  - "ai-image-generation"
  - "text-to-image"
  - "black-forest-labs"
  - "lora-fine-tuning"
  - "low-vram-inference"
aliases:
  - "FLUX.1"
  - "Black Forest Labs Flux"
  - "Flux AI model"
summary: An AI image generation model developed by Black Forest Labs designed for text-to-image synthesis and compatible with LoRA adapter fine-tuning.
updated: 2026-07-12
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
# FLUX.1

[[concepts/ai-image-generation|AI image generation]] model developed by [[entities/black-forest-labs]], designed for high-fidelity text-to-[[concepts/visual-rendering|image synthesis]] with efficient training capabilities.

## Key Features
- Supports diverse text prompts and complex subject generation
- Optimized for low [[concepts/vram|VRAM]] [[concepts/inference|inference]] and training
- Compatible with [[concepts/lora-adapter|LoRA adapter]] [[concepts/fine-tuning|fine-tuning]] for domain-specific adaptation

## Training Applications
- Demonstrated face recreation training via [[concepts/lora-adapter|LoRA adapter]] to consistently generate specific person images across varied [[concepts/scenarios|scenarios]] ([[entities/adam-lucek|Adam Lucek]]'s implementation)
- Achieved reliable results with [[concepts/low-vram-requirements|low VRAM requirements]] (demonstrated in [2026-04-14 video](https://youtu.be/Drw6tnvtA5I))
- Video title: "Training [[entities/flux1|FLUX.1]] ([[entities/black-forest-labs|Black Forest Labs]]) [[concepts/lora-adapter|LoRA Adapter]] on [[concepts/faces|Faces]] | Low VRAM Image Generation"
- Main goal: To demonstrate how to train [[concepts/ai-image-generation|AI image generation]] using FLUX.1 with [[concepts/ai-model-fine-tuning|LoRA]] adapter for low VRAM image generation

Backlink: 2026 04 14 [[concepts/community-interest|Adam Lucek Flux model]] for Open AI generated image gen
