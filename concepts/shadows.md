---
type: concept
domain: creative-pursuits
tags:
  - "photoshop"
  - "adjustment-layer"
  - "tonal-control"
  - "camera-raw"
  - "light"
  - "lightroom"
  - "video-tutorial"
  - "shadows"
  - "non-destructive-editing"
aliases:
  - "Shadow Range"
  - "Shadow Detail"
  - "Shadow Tint"
summary: Shadows are the darkest areas of an image where light intensity is lowest, managed through tools like Levels, Curves, and the modern Light adjustment layer to preserve detail and contrast.
updated: 2026-09-26
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-09-16T20:43:21+00:00" }
group: lightroom-color-workflows
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Shadows

## Overview
In digital imaging and [[concepts/adobe-photoshop|Photoshop]], shadows refer to the darkest areas of an image where light intensity is lowest. Managing shadows is critical for maintaining detail, [[concepts/contrast|contrast]], and depth.

## Key Concepts
- **Shadow Range:** The tonal range typically defined as the darkest 30-40% of the histogram.
- **Shadow Detail:** Recovering information in underexposed areas without introducing noise or flattening contrast.
- **Shadow Tint:** Color casts often present in shadow regions due to ambient light or white balance issues.

## Tools & Techniques

### Traditional Adjustment Layers
- **Levels:** Adjusting the black point to define shadow depth.
- **Curves:** Precise control over shadow tonal response.
- **Shadows/Highlights:** Dedicated tool for lifting shadows while protecting highlights.

### Modern Workflow: Light Adjustment Layer
The introduction of the **Light** adjustment layer integrates [[entities/camera-raw|Camera Raw]] tonal controls directly into the layer stack, offering [[concepts/non-destructive-workflow|non-destructive editing]].

- **Functionality:** Provides granular control over tonal ranges, specifically targeting shadows and highlights independently.
- **Tonal Controls:** Allows for precise adjustment of exposure, contrast, highlights, shadows, [[concepts/whites|whites]], and [[concepts/blacks|blacks]] within a single layer interface.
- **Workflow Integration:** Replaces the need for multiple separate adjustment layers for basic tonal corrections, streamlining the [[concepts/non-destructive-editing|non-destructive]] workflow.
- **User Guidance:** Recent updates (2026) have clarified functionality to address user confusion regarding its behavior and interface. See [[lab-notes/2026-09-17-Photoshops-New-Light-Adjustment-Layer-Understanding-Func|Photoshop's New Light Adjustment Layer: Understanding Functionality and "Pauses\]] for detailed breakdowns of specific controls and common misconceptions.

## References
- [Photoshop's New Light Adjustment Layer: Understanding Functionality and "Pauses\](https://www.youtube.com/watch?v=M-ux9hgZd9A) ([[entities/adobe-photoshop|Photoshop]] Training Channel, 2026-09-17)
