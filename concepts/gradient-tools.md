---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "digital-image-processing"
  - "selective-editing"
  - "gradient-tools"
  - "non-destructive-editing"
  - "camera-raw"
  - "ai-masking"
aliases:
  - "Gradient Filters"
  - "Gradient Adjustments"
  - "Linear Gradients"
  - "Radial Gradients"
summary: Gradient tools enable localized, edge-free adjustments to exposure, color, and contrast in digital image processing, often integrating with AI masking for precise control.
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Gradient Tools

Gradient tools in [[concepts/digital-image-processing|digital image processing]] allow for the gradual transition of [[concepts/adjustments|adjustments]] across an image, enabling localized control over [[concepts/exposure|exposure]], color, and [[concepts/contrast|contrast]] without hard edges. They are fundamental to Selective Editing and [[concepts/non-destructive-editing]] workflows.

## Core Concepts

- **[[concepts/linear-gradients|Linear Gradients]]**: Apply adjustments along a straight line, transitioning from one value to another.
- **Radial Gradients**: Apply adjustments in a circular or elliptical pattern, often used for [[concepts/vignette-effects|vignetting]] or spotlight effects.
- **[[concepts/layer-masks|Masking]] Integration**: Modern gradient tools often integrate with [[concepts/ai-masking]] to refine edges and target specific subjects or skies.

## Recent Developments (2026)

- **Bidirectional Linear Gradients**: Introduced in [[concepts/camera-raw|Camera Raw]] 18.4 [[concepts/software-updates|Updates]]: [[concepts/ai-based-selection|AI Masking]], Gradients, and [[concepts/workflow-enhancements|Workflow Enhancements]], this feature allows for more complex gradient transitions that can expand or contract from both ends of the gradient line, offering finer control over transition zones.
- **Enhanced [[concepts/ai-powered-masking|AI Masking]]**: Improved subject detection [[concepts/algorithms|algorithms]] allow gradients to automatically adhere to subject boundaries, reducing manual refinement.
- **Vectorscope Integration**: New workflow enhancements include better visualization of color shifts within gradient adjustments via vectorscopes.

## References

- [Camera Raw 18.4 Updates: AI Masking, Gradients, and Workflow Enhancements](https://www.youtube.com/watch?v=Aj_xqQI3gs0)
## Source Notes
- 2026-06-21: [[lab-notes/2026-06-21-Camera-Raw-18.4-Updates-AI-Masking-Gradients-and-Workflo|Camera Raw 18.4 Updates: AI Masking, Gradients, and Workflow Enhancements]]
