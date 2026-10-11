---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Eyedropper Tool

The Eyedropper Tool serves as a precise color sampling utility within Adobe Camera Raw, allowing users to extract exact color values directly from an image. By clicking on any specific pixel or area within a photograph, the tool captures objective color data at that point, providing a reliable reference for subsequent adjustments. This direct sampling method eliminates the need for visual estimation or memory, thereby ensuring accuracy in color correction workflows.

The tool is primarily utilized for setting white balance and neutralizing unwanted color casts. Users can click on areas that should appear neutral (such as grays or whites) to automatically adjust the image’s color temperature and tint, correcting imbalances caused by lighting conditions. This function is essential for achieving natural-looking colors and maintaining consistency across a series of images.

In addition to white balance correction, the Eyedropper Tool supports variance slider controls to fine-tune the sampling range. These controls allow users to adjust the sensitivity of the color selection, determining how closely adjacent pixels must match the sampled color to be included in the adjustment. This feature provides greater control over the precision of the color data extraction, accommodating both uniform and complex color distributions within an image.

## Source Notes
- 2026-04-14: Julianne Kost - using the new variance slider in Camera Raw
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Camera-Raw-183-Depth-Masking-Lens-Correction-Film-Presets-Overvi|Adobe Camera Raw 183 Depth Masking Lens Correction Film Presets Overvi]] · [▶ source](https://www.youtube.com/watch?v=2WDnMKtmCeY)
- 2026-04-21: Adobe · [▶ source](https://www.youtube.com/watch?v=JgfxoI4HYH4)
