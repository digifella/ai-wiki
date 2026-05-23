---
type: concept
domain: tools-platforms
tags:
  - "lightroom"
  - "camera-raw"
  - "masking"
  - "selection-tools"
  - "image-editing"
  - "ai-masks"
aliases:
  - "Subject Selection"
  - "AI Subject Mask"
summary: The Select Subject Tool is a feature in Lightroom and Camera Raw used to create and refine mask edges.
updated: 2026-05-23
group: developer-tooling-clis
---
# Select Subject Tool

The [[concepts/select-subject|Select Subject]] Tool is a [[concepts/layer-masks|masking]] feature available in [[entities/adobe-lightroom|Adobe Lightroom]] and [[concepts/camera-raw-filter|Camera Raw Filter]] that enables users to automatically detect and isolate subjects within an image. The tool uses [[concepts/ai-technologies|artificial intelligence]] to recognize the primary subject or subjects in a photograph and generates mask edges based on this analysis. This [[concepts/automation|automation]] serves as a starting point for more complex [[concepts/masking|masking]] workflows, particularly useful when working with [[concepts/images|images]] containing distinct foreground and background elements.

## Refining Mask Edges

Once the tool generates an initial selection, users can refine and adjust the resulting mask edges through additional editing controls. This refinement capability is particularly valuable for correcting imprecise selections along object boundaries, such as hair, fur, or complex silhouettes. The ability to improve mask [[concepts/accuracy|accuracy]] directly within the masking interface streamlines the [[concepts/workflow|workflow]] for photographers who need precise [[concepts/power|control]] over localized [[concepts/adjustments|adjustments]].

## Practical Applications

The Select Subject Tool is commonly used to isolate subjects for targeted adjustments such as [[concepts/exposure|exposure]], color, or [[concepts/tone|tone]] corrections while leaving the background unaffected. It is particularly effective in landscape and [[concepts/portrait-photography|portrait photography]] where separating the subject from its surroundings is a primary editing goal. By automating the initial selection process, the tool reduces the time spent on [[concepts/manual-masking|manual masking]] while maintaining the flexibility for manual refinement when needed.
## Source Notes
- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.
- 2026-04-07: [[lab-notes/2026-04-07-Lightroom-Classic-Single-Click-Automated-AI-Mask-Presets-for-Landscape|Lightroom Classic Single Click Automated AI Mask Presets for Landscape]] · [▶ source](https://www.youtube.com/watch?v=tVCV0VmoZnw)
- 2026-04-22: Photoshop · [▶ source](https://youtu.be/SYUfAfvsQzI)