---
type: concept
domain: creative-pursuits
tags:
  - "lightroom-classic"
  - "ai-masking"
  - "subject-selection"
  - "photo-editing"
  - "local-adjustments"
  - "machine-learning"
aliases:
  - "Select Subject"
  - "AI Subject Masking"
  - "Automatic Subject Selection"
summary: Select Subject Masking is an AI-driven feature in Adobe Lightroom Classic that automatically isolates primary subjects for targeted local adjustments.
updated: 2026-07-12
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Select Subject Masking

**Select [[concepts/subject-masking|Subject Masking]]** is an AI-driven feature in [[concepts/adobe|Adobe]] [[entities/lightroom-classic|Lightroom Classic]] that automatically identifies and isolates the primary subject within an image for targeted [[concepts/adjustments|adjustments]]. It utilizes [[concepts/artificial-intelligence-models|machine learning models]] to distinguish foreground subjects from backgrounds, enabling precise local edits without manual brushing.

## Key Features & Updates

### Lightroom Classic 15.4 Enhancements
As detailed in [[lab-notes/2026-06-20-Lightroom-Classic-15.4-Enhanced-AI-Masking-Assisted-Cull|Lightroom Classic 15.4: Enhanced AI Masking, Assisted Culling, Duplicate Detection]], version 15.4 significantly expands the capabilities of subject [[concepts/layer-masks|masking]]:

- **Enhanced AI [[concepts/accuracy|Precision]]**: Improved algorithmic accuracy for complex subjects, reducing edge artifacts and improving selection fidelity.
- **Workflow Integration**: Tighter integration with [[concepts/assisted-culling]] and [[concepts/duplicate-detection|Duplicate Detection]] to streamline [[concepts/batch-processing|batch processing]].
- **Expanded [[concepts/masking-tools|Masking Tools]]**: New options for refining AI-generated masks, allowing for more [[concepts/granular-control|granular control]] over exposure, color, and [[concepts/clarity-slider|clarity]] adjustments.

## Workflow Application

1. **Selection**: Activate the [[concepts/masking|Masking]] panel and choose "[[concepts/select-subject|Select Subject]]."
2. **Refinement**: Use the new 15.4 tools to invert, expand, or contract the mask as needed.
3. **Adjustment**: Apply local adjustments (e.g., [[concepts/exposure]], [[concepts/contrast]], [[concepts/lightroom]]) exclusively to the masked area.
4. **Batch Processing**: Leverage assisted culling features to apply similar masking [[concepts/open-source-philosophy|logic]] across similar images.

## Related Concepts

- [[entities/adobe-lightroom|Adobe Lightroom]] Classic
- AI-Powered Editing
- [[concepts/local-adjustments]]
- [[concepts/photo-culling|Image Culling]]

## References

- [Lightroom Classic 15.4: Enhanced AI Masking, Assisted Culling, Duplicate Detection](https://www.youtube.com/watch?v=Mh68jrWr1NE)
