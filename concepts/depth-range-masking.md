---
type: concept
domain: creative-pursuits
tags:
  - "adobe-camera-raw"
  - "photoshop"
  - "masking"
  - "depth-based-adjustments"
  - "local-adjustments"
  - "photo-editing"
  - "neural-filters"
aliases:
  - "depth masking"
  - "depth range mask"
summary: Adobe Camera Raw 18.3 introduced depth range masking; Photoshop enhancements now allow generating depth maps for any photo, removing dependency on native camera depth data.
updated: 2026-07-11
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Depth Range Masking

Depth Range [[concepts/layer-masks|Masking]] is a selective editing feature introduced in [[entities/adobe-camera-raw|Adobe Camera Raw]] 18.3 that uses depth information to create masks for targeted [[concepts/adjustments|adjustments]]. It automatically identifies and isolates planes of focus—foreground, subject, and background—based on distance from the camera, allowing precise application of color, [[concepts/exposure|exposure]], and other adjustments without manual selection.

## How It Works

*   **Native Data Analysis:** The feature analyzes depth data embedded in image files from modern cameras and computational photography systems.
*   **Range Selection:** Users specify a depth range, and the mask applies adjustments only to pixels within that distance.
*   **[[concepts/efficiency-principles|Workflow Efficiency]]:** Replaces precise [[concepts/manual-masking|manual masking]] or complex layering techniques with automated [[concepts/disconnection|isolation]] of depth planes.

## Enhancements in Photoshop

Recent [[concepts/software-updates|updates]] to [[entities/adobe-photoshop]] significantly expand the utility of this feature by decoupling it from native camera depth data requirements. As detailed in [[lab-notes/2026-05-26-Photoshops-Enhanced-Depth-Range-Mask-Creating-Depth-Maps|Photoshop's Enhanced Depth Range Mask: Creating Depth Maps for Any Photo]], the following improvements are now available:

*   **Universal [[concepts/depth-map|Depth Map]] Generation:** The tool can now generate [[concepts/depth-maps|depth maps]] for *any* photograph, regardless of whether the original file contains depth information. This leverages AI/ML processing to infer depth from 2D images.
*   **Integration:** The enhanced feature is integrated directly into the current shipping version of [[concepts/photoshop|Photoshop]], streamlining the workflow for users who do not have access to depth-aware hardware.
*   **[[concepts/accessibility|Accessibility]]:** Removes the barrier of requiring specific modern cameras or computational photography systems to use depth-based [[concepts/masking|masking]].

## Practical Applications

*   **Background Isolation:** Adjusting backgrounds separately from the subject for [[concepts/portrait-photography]] or product editing.
*   **Atmospheric Effects:** Applying vignettes or fog effects to specific depth layers.
*   **Selective Exposure:** Balancing exposure between foreground subjects and distant backgrounds in [[concepts/landscape-photography|landscape photography]].
