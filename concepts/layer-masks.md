---
type: concept
domain: creative-pursuits
group: photoshop-layer-workflows
tags:
  - "photoshop"
  - "layer-masks"
  - "photo-compositing"
  - "image-blending"
  - "selective-editing"
aliases:
  - "masking"
  - "layer masking"
  - "selective layer visibility"
summary: Layer masks in Photoshop are used to combine elements from multiple photos and correct specific details such as closed eyes in group images.
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Layer Masks

Layer masks are a fundamental technique in [[concepts/photoshop|Photoshop]] that enable [[concepts/non-destructive-editing|non-destructive editing]] by controlling the visibility of specific areas within a layer. Rather than permanently deleting or erasing content, a layer mask uses grayscale values to determine [[concepts/opacity|transparency]]: white reveals the layer content, black conceals it, and gray values create partial transparency. This approach preserves the original image data while allowing flexible [[concepts/adjustments|adjustments]] that can be modified or removed at any time.

## Common Applications

Layer masks are particularly useful for combining elements from multiple photographs. A photographer might use masks to blend exposures, merge backgrounds, or integrate subjects from different shots into a single composition. In group photography, masks help correct specific issues—such as replacing a closed eye from one frame with an open eye from another—without affecting the rest of the image. They also facilitate subtle corrections like smoothing transitions between edited and unedited areas, or selectively applying adjustments to portions of an image.

## Creating and Editing Masks

A layer mask is created as a separate grayscale channel linked to a layer. Users paint or fill this mask with black, white, or shades of gray to control what appears or disappears. Since the mask operates independently from the layer content, the original pixels remain intact; modifying the mask simply changes what is visible. Common tools for editing masks include brushes, gradients, and selection-based fills, allowing for both precise and broad adjustments depending on the desired effect.

## Source Notes
- 2026-04-09: Photoshop's "Blend If" Explained | Pixel-Perfect
- 2026-04-10: [[lab-notes/2026-04-10-Photoshops-Blend-If-Pixel-Perfect-Transparency-via-Brightness-and-Colo|Photoshops Blend If Pixel Perfect Transparency via Brightness and Colo]] · [▶ source](https://www.youtube.com/watch?v=Wkti_IX3Qzk)
- 2026-04-16: [[lab-notes/2026-04-16-Precise-Dehazing-Hazy-Backgrounds-using-Photoshops-Object-Selection|Precise Dehazing Hazy Backgrounds using Photoshops Object Selection]] · [▶ source](https://www.youtube.com/watch?v=-KD8X-_5Cb4)
