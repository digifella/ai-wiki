---
type: concept
domain: creative-pursuits
tags:
  - "concept"
  - "portrait-retouching"
  - "photoshop-techniques"
  - "subject-isolation"
  - "photo-editing"
  - "masking-methods"
  - "camera-raw"
aliases:
  - "portrait masking"
  - "selective subject adjustment"
summary: A Photoshop and Camera Raw technique for isolating and selectively adjusting portrait subjects, enhanced by AI-driven tools in recent updates.
updated: 2026-07-12
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Subject Masking

Subject [[concepts/layer-masks|masking]] is a digital [[concepts/photo-editing|photo editing]] technique used to isolate a [[concepts/portrait-photography|portrait]] subject from its background, allowing selective [[concepts/adjustments|adjustments]] to be applied independently to each area. By creating a precise mask around the subject—typically the person's face and body—editors can modify [[concepts/exposure|exposure]], color, [[concepts/contrast|contrast]], and [[concepts/sharpness|sharpness]] without affecting the surrounding areas. This selective approach enables more refined control over the final image and is a standard workflow in professional [[concepts/portrait-retouching|portrait retouching]].

## Creating the Mask

Masks can be created through several methods in [[concepts/photoshop|Photoshop]], ranging from manual selection tools to automated features. The quickest approach uses [[entities/adobe-photoshop|Photoshop]]'s [[concepts/select-subject-tool|Select Subject tool]], which uses [[concepts/machine-learning|machine learning]] to detect and isolate portrait subjects automatically. More precise results can be achieved with manual selection tools like the Pen Tool or Quick [[concepts/selection-brush|Selection Brush]].

### Recent Enhancements in Camera Raw 18.4

Recent [[concepts/software-updates|updates]] to [[concepts/camera-raw|Camera Raw]] have significantly streamlined [[concepts/foregroundbackground-separation|subject isolation]] workflows. As detailed in [[lab-notes/2026-06-21-Camera-Raw-18.4-Updates-AI-Masking-Gradients-and-Workflo|Camera Raw 18.4 Updates: AI Masking, Gradients, and Workflow Enhancements]], version 18.4 introduces:

*   **Improved AI Subject [[concepts/masking|Masking]]:** Enhanced accuracy in automatically detecting and isolating subjects, reducing the need for manual refinement in complex backgrounds.
*   **Bidirectional [[concepts/gradient-tools|Linear Gradients]]:** New gradient tools allow for more nuanced lighting adjustments that can complement subject masks.
*   **Vectorscope Integration:** Improved [[concepts/color-analysis|color analysis]] tools help ensure that adjustments made via subject masks maintain color fidelity.
*   **[[concepts/workflow-enhancements|Workflow Enhancements]]:** General performance improvements and UI updates that [[concepts/speed|speed]] up the masking process within the [[entities/camera-raw-filter|Camera Raw]] environment.

## References

*   [Camera Raw 18.4 Updates: AI Masking, Gradients, and Workflow Enhancements](https://www.youtube.com/watch?v=Aj_xqQI3gs0)
