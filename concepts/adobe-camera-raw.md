---
type: concept
domain: creative-pursuits
tags:
  - "Adobe"
  - "Camera-Raw"
  - "Lightroom"
  - "Gradient"
  - "Tutorial"
  - "raw-processing"
  - "non-destructive-editing"
  - "gradient-tool"
  - "lightroom-classic"
  - "photoshop-plugin"
  - "reflection-removal"
  - "generative-fill"
  - "workaround"
aliases:
  - "ACR"
  - "Adobe Camera Raw"
summary: Adobe Camera Raw is a raw image processing plugin for Photoshop and the engine for Lightroom Classic's Develop module, featuring tools like the bidirectional gradient and limitations in reflection removal.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-27T20:38:03+00:00" }
group: photography-cameras
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Adobe Camera Raw

**[[entities/adobe-camera-raw|Adobe Camera Raw]] (ACR)** is a raw [[concepts/image-processing|image processing]] plugin for [[entities/adobe-photoshop|Adobe Photoshop]] and standalone application. It serves as the [[concepts/engine|engine]] for [[entities/lightroom-classic|Lightroom Classic]]'s [[concepts/adobe-lightroom-develop-module|Develop module]], allowing [[concepts/non-destructive-workflow|non-destructive editing]] of RAW files.

## Recent Feature Updates

### Bidirectional Gradient
ACR has introduced a new **[[concepts/bidirectional-gradient|bidirectional gradient]]** tool, enhancing control over [[concepts/photo-tonal-adjustments|tonal adjustments]] across an image.

- **Cross-Platform Parity**: Users of [[concepts/lightroom|Lightroom]] Classic can replicate this specific effect using alternative [[concepts/layer-masks|masking]] or gradient techniques.
- **[[concepts/tutorial|Tutorial]] Reference**: For a step-by-step guide on achieving this in Lightroom Classic, see [[lab-notes/2026-08-12-Replicating-ACRs-New-Bidirectional-Gradient-in-Lightroom|Replicating ACR's New Bidirectional Gradient in Lightroom Classic]].

### Reflection Removal Limitations & Workarounds
While ACR and Lightroom include "Distraction Removal > Reflection" tools, they may fail on complex [[concepts/glass-reflections|glass reflections]].

- **Limitation**: Built-in removal tools often struggle with intricate reflections, leaving artifacts or incomplete removal.
- **Workaround**: Utilize [[concepts/photoshop|Photoshop]]'s **[[concepts/generative-fill|Generative Fill]]** for superior results when native tools fail.
- **Guide**: See [[lab-notes/2026-08-28-Lightroom-Reflection-Removal-Limitations-and-Photoshop-G|Lightroom Reflection Removal Limitations and Photoshop Generative Fill Workaround]] for detailed [[concepts/instructions|instructions]].

## References
- [Lightroom Reflection Removal Limitations and Photoshop Generative Fill Workaround](https://www.youtube.com/watch?v=Qv_E9IyzCpU)
