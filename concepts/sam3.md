---
type: concept
domain: creative-pursuits
tags:
  - "segment-anything-model"
  - "image-segmentation"
  - "video-segmentation"
  - "zero-shot-ai"
  - "comfyui"
  - "mask-generation"
  - "meta-ai"
aliases:
  - "Segment Anything Model 3"
  - "SAM 3"
  - "Meta SAM3"
summary: SAM3 is the third iteration of Meta's foundational vision model for image segmentation, featuring enhanced precision, real-time video segmentation, and improved promptability for complex object boundaries.
updated: 2026-07-12
group: ai-image-generation-editing
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# SAM3

**[[concepts/segment-anything-model|Segment Anything Model]] 3 ([[entities/sam3|SAM3]])** is the third [[concepts/iteration|iteration]] of [[entities/meta|Meta]]'s foundational vision model for image segmentation. It builds upon the zero-shot [[concepts/abstraction|generalization]] capabilities of SAM and SAM2, introducing enhanced [[concepts/accuracy|precision]], real-time video segmentation, and improved promptability for complex object boundaries.

## Key Capabilities
- **Zero-Shot Segmentation**: Generates high-fidelity masks for any object in an image without prior training on specific classes.
- **Promptable Interface**: Accepts points, boxes, text, or existing masks as prompts to refine segmentation outputs.
- **Video Segmentation**: Tracks and segments objects across video frames with temporal [[concepts/logical-consistency|consistency]].
- **Integration Ready**: Designed for embedding into downstream workflows such as [[concepts/image-inpainting|Inpainting]], [[concepts/image-editing]], and [[concepts/autonomous-ai-agents]].

## Applications in ComfyUI
SAM3 is frequently integrated into [[entities/comfyui]] workflows to automate the [[concepts/layer-masks|masking]] process for Inpainting and [[concepts/targeted-image-editing|targeted image editing]]. By replacing manual [[concepts/mask-creation|mask creation]] with [[concepts/automatic-masking|automatic segmentation]], users can achieve precise edits with minimal effort.

- **[[concepts/ai-masking|Automated Masking]]**: SAM3 [[concepts/nodes|nodes]] can generate masks from simple point prompts, enabling rapid iteration in editing pipelines.
- **Targeted Editing**: Used in conjunction with Stable Diffusion or other [[concepts/image-and-video-diffusion-models|diffusion models]] to isolate specific regions for inpainting or outpainting.
- **[[concepts/efficiency-principles|Workflow Efficiency]]**: Reduces the [[concepts/cognitive-load|cognitive load]] of [[concepts/manual-masking|manual masking]], allowing focus on creative direction rather than technical execution.

## Related Concepts
- [[concepts/segment-anything-model|Segment Anything Model]]
- [[concepts/computer-vision]]
- [[concepts/image-editing]]
- [[entities/comfyui]]
- [[concepts/image-inpainting|Inpainting]]

## References
- [ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing](https://www.youtube.com/watch?v=fJFnHkU6hzo)
- [[lab-notes/2026-06-26-ComfyUI-Inpainting-Workflow-SAM-Powered-Automatic-Maskin|ComfyUI Inpainting Workflow: SAM-Powered Automatic Masking and Targeted Image Editing]]
