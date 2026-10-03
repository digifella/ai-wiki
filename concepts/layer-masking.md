---
type: concept
domain: creative-pursuits
tags:
  - "layer-masking"
  - "non-destructive-editing"
  - "photoshop-workflows"
  - "compositing"
  - "edge-cleanup"
aliases:
  - "Grayscale Masks"
  - "Selective Layer Revealing"
  - "Mask-based Blending"
summary: Layer masking is a non-destructive editing technique that uses grayscale masks to selectively reveal or hide parts of an image layer, enabling precise compositing and edge refinement.
updated: 2026-07-11
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Layer masking

[[concepts/non-destructive-editing|Non-destructive editing]] technique using grayscale masks to selectively reveal or hide parts of a layer (white = reveal, black = hide).

## Key applications
- **[[concepts/digital-compositing|Compositing]] multiple images**: Combine optimal elements from similar shots (e.g., fixing closed eyes in group photos)
- **Seamless blending**: Merge elements between layers without destructive edits
- **[[concepts/accuracy|Precision]] editing**: Adjust masks with brush tools for soft transitions
- **[[concepts/edge-cleanup|Edge cleanup]] & Fringing removal**: Use [[concepts/clipping-masks|clipping masks]] to isolate subjects and refine edges (e.g., hair/fur) against new backgrounds to eliminate color fringing, as demonstrated in [[lab-notes/2026-06-06-Photoshop-Fringing-Solution-Clipping-Masks-for-Edge-Clea|Photoshop Fringing Solution: Clipping Masks for Edge Cleanup]]

## Workflow example: Combining photos in Photoshop
- **Problem**: Fix issues like closed eyes in group photos across multiple shots
- **Steps**:
  - Load images into a layer stack and auto-align
  - Apply [[concepts/layer-masks|layer masks]] to each layer
  - Use mask to selectively reveal best elements (e.g., open eyes from one layer, clear background from another)
- **Key insight**: Works without tripod alignment; relies on auto-alignment and [[concepts/mask-refinement|mask refinement]]

2026 04 14 [[concepts/combining-photos|Combining photos]] in [[concepts/photoshop|Photoshop]]
## Source Notes
- 2026-04-14: [[lab-notes/2026-04-14-Dark-Code-AI-Generated-Softwares-Comprehension-Gap-and-Untraceable-Ris|Dark Code AI Generated Softwares Comprehension Gap and Untraceable Ris]] · [▶ source](https://www.youtube.com/watch?v=E1idsrv79tI)
- 2026-04-21: Adobe · [▶ source](https://www
- 2026-06-06: [[lab-notes/2026-06-06-Photoshop-Fringing-Solution-Clipping-Masks-for-Edge-Clea|Photoshop Fringing Solution: Clipping Masks for Edge Cleanup]] (PHLEARN) · [▶ source](https://www.youtube.com/watch?v=_BMgsnO-6t4)
