---
type: concept
domain: creative-pursuits
tags:
  - "linear-gradients"
  - "css"
  - "svg"
  - "adobe-camera-raw"
  - "photo-editing"
  - "color-stops"
  - "vector-graphics"
  - "web-development"
aliases:
  - "Linear Gradient"
  - "CSS Linear Gradient"
  - "SVG Gradient"
  - "ACR Gradient Tool"
summary: A linear gradient is a graphical fill transitioning between colors along a straight line, implemented in CSS and SVG, with recent enhancements in Adobe Camera Raw 18.4 for bidirectional control and AI masking.
updated: 2026-07-11
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Linear Gradients

A **Linear Gradient** is a graphical fill that transitions smoothly between two or more colors along a straight line. It is defined by a starting point, an ending point (or angle), and a series of color stops.

## Technical Implementation

### CSS
In [[concepts/web-development|web development]], [[concepts/gradient-tools|linear gradients]] are created using the `linear-gradient()` function.
- **Syntax**: `linear-gradient([<angle> | to <side-or-corner>], <color-stop-list>)`
- **Direction**: Defaults to `to bottom` (180deg). Can be specified via degrees or [[concepts/keywords|keywords]] (e.g., `to right`, `45deg`).
- **Color Stops**: Defined as `<color> [<percentage>]`. If no position is specified, stops are distributed evenly.

### Vector Graphics
In SVG and vector editors, linear gradients are defined by a coordinate system (`x1, y1, x2, y2`) or an angle, mapping color interpolation across the shape's bounding box or user space.

## Recent Developments & Software Updates

### Adobe Camera Raw (ACR) 18.4
As of June 2026, [[concepts/whites|Adobe Camera Raw]] introduced significant enhancements to gradient tools, specifically regarding [[concepts/layer-masks|masking]] and directional control. See [[lab-notes/2026-06-21-Camera-Raw-18.4-Updates-AI-Masking-Gradients-and-Workflo|Camera Raw 18.4 Updates: AI Masking, Gradients, and Workflow Enhancements]] for detailed breakdown.

Key [[concepts/software-updates|updates]] include:
- **Bidirectional Linear Gradients**: New capability to apply gradients that expand from a center point or interact bidirectionally, offering finer control over [[concepts/local-adjustments|local adjustments]] in [[concepts/photo-editing|photo editing]] workflows.
- **AI-Enhanced [[concepts/masking|Masking]]**: Integration of AI [[concepts/subject-masking|subject masking]] to automatically isolate areas for gradient application, reducing manual selection time.
- **[[concepts/workflow-enhancements|Workflow Enhancements]]**: Improved vectorscope integration and UI refinements for gradient tool [[concepts/accuracy|precision]].

## Related Concepts
- [[concepts/gradient-tools|Radial Gradients]]
- Conic Gradients
- Color Interpolation
- [[entities/adobe-camera-raw]]

## References
- [Camera Raw 18.4 Updates: AI Masking, Gradients, and Workflow Enhancements](https://www.youtube.com/watch?v=Aj_xqQI3gs0)
