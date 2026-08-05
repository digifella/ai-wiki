---
type: concept
domain: creative-pursuits
tags:
  - "image-editing"
  - "post-processing"
  - "fringing-removal"
  - "mask-refinement"
  - "compositing"
  - "halo-reduction"
  - "edge-cleanup"
  - "digital-retouching"
aliases:
  - "Fringing Removal"
  - "Edge Refinement"
  - "Halo Reduction"
  - "Mask Cleanup"
summary: Edge cleanup comprises post-processing techniques to remove artifacts like color fringing and halos from masked subject boundaries to ensure seamless compositing.
updated: 2026-07-11
group: photoshop-layer-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Edge Cleanup

**Edge Cleanup** refers to the post-processing techniques used to remove artifacts, halos, or fringing around the boundaries of a masked subject in digital [[concepts/image-editing|image editing]]. This is critical for [[concepts/digital-compositing|compositing]] subjects with fine details (e.g., hair, fur) onto new backgrounds without visible seams.

## Key Techniques & Resources

- **[[concepts/clipping-masks|Clipping Masks]] for Fringing Removal**: Utilizing clipping masks to isolate and refine edge pixels without altering the original mask [[concepts/opacity|transparency]]. This method allows for targeted color correction or blending mode [[concepts/adjustments|adjustments]] specifically at the boundary layers. [[lab-notes/2026-06-06-Photoshop-Fringing-Solution-Clipping-Masks-for-Edge-Clea|Photoshop Fringing Solution: Clipping Masks for Edge Cleanup]]
- **Decontaminate Colors**: Advanced [[concepts/masking-tools|masking tools]] that sample edge pixels and replace background-colored fringe with colors derived from the subject’s interior pixels.
- **Refine Edge/Select and Mask**: Interface for adjusting radius, shift edge, and smoothness to soften harsh cutouts and reduce aliasing.

## Common Artifacts

- **Color Fringing**: Unwanted colored borders (often white or background-colored) remaining after background removal.
- **Halos**: Soft [[entities/glow|glow]] artifacts around the subject caused by anti-aliasing blending with the old background.
- **Hard Edges**: Pixelated boundaries resulting from low-[[concepts/solution|resolution]] [[concepts/layer-masks|masking]] or aggressive [[concepts/contrast|contrast]] adjustments.

## Workflow Integration

1. Perform initial Selection using Lasso Tool, Pen Tool, or AI-assisted selection.
2. Apply initial Layer Mask to isolate the subject.
3. Inspect edges at 100%+ zoom for fringing.
4. Apply cleanup techniques (see above) using [[concepts/adjustment-layers|adjustment layers]] clipped to the subject layer.
5. Final composite against new background.

## Related Concepts

- [[concepts/photoshop]]
- [[concepts/digital-compositing|Compositing]]
- [[concepts/fine-structure-constant|Alpha]] Channel
- Anti-aliasing
