---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "color-sampling"
  - "adobe-camera-raw"
  - "image-editing"
  - "color-adjustment"
aliases:
  - "color-picker"
  - "color-sampler"
summary: A tool used in Adobe Camera Raw to sample and select colors from images, demonstrated with variance slider controls.
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Eyedropper Tool

The Eyedropper Tool is a [[concepts/color-sampling|color sampling]] utility in [[concepts/adobe-camera-raw|Adobe Camera Raw]] that allows photographers and editors to extract precise color values directly from their images. By clicking on any pixel or area within a photograph, users capture exact color data at that specific point, providing an [[concepts/purpose|objective]] reference for making subsequent [[concepts/adjustments|adjustments]]. This direct sampling approach eliminates reliance on visual estimation or [[concepts/memory|memory]], making it particularly useful for maintaining [[concepts/color-accuracy|color accuracy]] and [[concepts/logical-consistency|consistency]] across editing workflows.

## Function and Application

Within Camera Raw, the tool serves as a critical interface for color correction and [[concepts/white-balance-adjustments|white balance adjustments]]. It enables users to define neutral points or specific hues by sampling from the image itself, which helps in calibrating the overall tonal range. The tool is often integrated with [[concepts/color-contrast|variance slider]] controls, allowing for fine-tuned adjustments to the sampled color's intensity and temperature. This functionality ensures that [[concepts/photo-tonal-adjustments|color grading]] decisions are based on actual data from the source file rather than subjective interpretation.

## Workflow Integration

The Eyedropper Tool is frequently used in conjunction with other adjustment panels to streamline the [[concepts/editing-workflow-optimization|editing process]]. By establishing a baseline color value, editors can quickly apply corrections that affect the entire image uniformly. This method is especially valuable in professional workflows where consistency across multiple images is required. The tool’s ability to provide immediate [[concepts/feedback|feedback]] on color changes helps users make informed decisions about [[concepts/exposure|exposure]], contrast, and color balance without disrupting the overall [[concepts/writing|composition]].
## Source Notes
- 2026-04-14: Julianne Kost - using the new variance slider in Camera Raw
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Camera-Raw-183-Depth-Masking-Lens-Correction-Film-Presets-Overvi|Adobe Camera Raw 183 Depth Masking Lens Correction Film Presets Overvi]] · [▶ source](https://www.youtube.com/watch?v=2WDnMKtmCeY)
- 2026-04-21: Adobe · [▶ source](https://www.youtube.com/watch?v=JgfxoI4HYH4)
