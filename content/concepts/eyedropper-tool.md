---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: developer-tooling-clis
---
# Eyedropper Tool

The Eyedropper Tool is a [[concepts/color-sampling|color sampling]] utility in [[entities/adobe|Adobe]] [[concepts/camera-raw|Camera Raw]] that allows users to select and analyze specific colors from an image. By clicking on any area of a photograph, the tool captures the color values [[concepts/assistive-technology|at]] that point, enabling precise color [[concepts/adjustments|adjustments]] and corrections based on actual image data rather than estimates.

## Variance Control

A key feature of the Eyedropper Tool in [[entities/camera-raw-filter|Camera Raw]] is the [[concepts/color-variance-control|Color Variance Control]] slider, which was demonstrated in instructional content by Adobe educator [[entities/julianne-kost|Julianne Kost]]. This slider allows users to expand the selection [[concepts/range|range]] beyond a single pixel, affecting a broader area of similar colors in the image. This capability is particularly useful when working with [[concepts/photo-tonal-adjustments|color grading]] and targeted adjustments, as it enables users to refine how much of the surrounding color spectrum is included when sampling and applying corrections.

The tool integrates with Camera Raw's non-destructive [[concepts/photography-workflow|editing workflow]], meaning color selections and adjustments made with the eyedropper can be modified or removed at any point without permanently altering the original image data. This makes it a flexible option for photographers and editors working with raw [[concepts/files|files]] who need to [[entities/make|make]] precise, reversible color decisions.
## Source Notes
- 2026-04-14: Julianne Kost - using the new variance slider in Camera Raw
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Camera-Raw-183-Depth-Masking-Lens-Correction-Film-Presets-Overvi|Adobe Camera Raw 183 Depth Masking Lens Correction Film Presets Overvi]] · [▶ source](https://www.youtube.com/watch?v=2WDnMKtmCeY)
- 2026-04-21: Adobe · [▶ source](https://www.youtube.com/watch?v=JgfxoI4HYH4)