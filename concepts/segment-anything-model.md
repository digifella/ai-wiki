---
type: concept
domain: creative-pursuits
tags:
  - "image-segmentation"
  - "computer-vision"
  - "zero-shot-learning"
  - "meta-ai"
  - "generative-ai"
  - "mask-generation"
aliases:
  - "SAM"
  - "Segment Anything"
  - "Meta SAM"
  - "SA-1B Model"
summary: The Segment Anything Model (SAM) is a foundational image segmentation model developed by Meta AI that enables zero-shot segmentation of any object in any image using various prompts without task-specific training.
updated: 2026-07-12
group: ai-image-generation-editing
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Segment Anything Model (SAM)

**Segment Anything Model (SAM)** is a foundational image segmentation model developed by [[entities/meta-ai|Meta AI]]. It introduces a zero-shot segmentation capability, allowing it to segment any object in any image with minimal [[concepts/prompting|prompting]], without requiring [[concepts/neural-network-fine-tuning|task-specific training]].

## Core Architecture & Capabilities

- **Zero-Shot [[concepts/abstraction|Generalization]]**: Trained on the **SA-1B** dataset (1 billion masks on 11 million images), SAM generalizes to new image distributions and tasks without [[concepts/fine-tuning|fine-tuning]].
- **Promptable Interface**: Supports multiple prompt types:
  - Points (positive/negative)
  - [[concepts/bounding-boxes|Bounding boxes]]
  - Text prompts (via integration with CLIP or similar models)
  - Automatic mask generation (no prompts required)
- **Real-Time Performance**: Designed for efficiency, enabling real-time segmentation on standard hardware.
- **Hierarchical Mask Output**: Generates multiple masks per prompt to handle [[concepts/ambiguity|ambiguity]] and varying levels of granularity.

## Applications & Integrations

- **[[concepts/medical-imaging-technology|Medical Imaging]]**: Adapted for precise organ/tumor segmentation with minimal labeled data.
- **Video Segmentation**: Extended to **Video SAM** for consistent [[concepts/object-tracking|object tracking]] and segmentation across frames.
- **[[concepts/generative-ai-workflows|Generative AI Workflows]]**: Used as a [[concepts/data-preprocessing|preprocessing]] step for [[concepts/image-inpainting|Inpainting]] and Outpainting to generate precise masks for targeted editing.
  - See: [[lab-notes/2026-06-26-ComfyUI-Inpainting-Workflow-SAM-Powered-Automatic-Maskin|ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing]] for a practical implementation in [[entities/comfyui]].

## Key Technical Details

- **Image Encoder**: ViT-H ([[concepts/computer-vision|Vision]] Transformer) backbone for feature extraction.
- **Prompt Encoder**: Processes sparse (points/boxes) and dense (masks) prompts.
- **Mask Decoder**: Lightweight transformer that combines image and prompt [[concepts/dense-vectors|embeddings]] to predict segmentation masks.

## References

- [ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing](https://www.youtube.com/watch?v=fJFnHkU6hzo)
