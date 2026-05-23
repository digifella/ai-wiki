---
type: concept
domain: creative-pursuits
tags:
  - "color-grading"
  - "selective-adjustments"
  - "masking"
  - "adobe-camera-raw"
  - "tonal-correction"
  - "local-adjustments"
aliases:
  - "selective color grading"
  - "regional color adjustment"
  - "masked color correction"
summary: Local color grading applies selective color, tonal, and contrast adjustments to isolated image regions using masks rather than affecting the entire frame.
updated: 2026-05-23
group: lightroom-color-workflows
---
# Local Color Grading

**Local [[concepts/photo-tonal-adjustments|Color Grading]]** refers to the selective application of color [[concepts/adjustments|adjustments]], tonal shifts, and [[concepts/contrast|contrast]] modifications to specific regions or objects within an image, rather than applying global changes to the entire frame. This technique allows for precise artistic [[concepts/power|control]], enhancing depth, directing viewer [[concepts/attention-mechanisms|attention]], and correcting localized [[concepts/color-casts|color casts]].

## Core Mechanics
- **Selection Isolation:** Utilizes masks (luma, [[concepts/range|range]], or AI-based subject masks) to isolate targets.
- **Parameter Adjustment:** Modifies [[concepts/hue|hue]], saturation, luminance, temperature, and tint within the masked area.
- **[[concepts/layer-styles|Blend Modes]]:** Often employed to interact with underlying pixels (e.g., Overlay, Soft [[concepts/light|Light]]) for non-destructive [[concepts/integration|integration]].

## Integration with Adobe Camera Raw (ACR)
Recent updates to [[entities/adobe-camera-raw]] have significantly expanded [[concepts/capabilities|capabilities]] for [[concepts/local-adjustments|local adjustments]], specifically regarding color precision and [[concepts/layer-masks|masking]] fidelity.

- See: [[lab-notes/2026-05-22-Adobe-Camera-Raw-Updates-Enhanced-Masking-Local-Color-Gr|Adobe Camera Raw Updates: Enhanced Masking, Local Color Grading, White Balance]]

### Key Enhancements (2026)
- **Enhanced [[concepts/masking|Masking]] Refinements:** Improved edge detection and refinement tools allow for cleaner selections around complex subjects (hair, foliage, transparent objects).
- **Local Color Grading Tools:** New dedicated controls for [[concepts/fine-tuning|fine-tuning]] color profiles within specific masked areas, separating global look tables from local intent.
- **Extended White Balance:** Capability to apply localized white balance corrections, addressing mixed lighting [[concepts/scenarios|scenarios]] without affecting shadow/highlight color [[concepts/integrity|integrity]] globally.

## Related Concepts
- [[concepts/lightroom]]
- [[concepts/layer-masks|Masking]] (Image Processing)
- White Balance
- [[entities/adobe-camera-raw]]
