---
type: concept
domain: creative-pursuits
tags:
  - "color-grading"
  - "photo-editing"
  - "adobe-camera-raw"
  - "color-modification"
  - "digital-imaging"
aliases:
  - "color range"
  - "color adjustment boundaries"
summary: "Color range control is a mechanism used to define the specific boundaries of color modification within a digital image to prevent unintended shifts in adjacent pixels."
updated: 2026-04-20
group: lightroom-color-workflows
---
# Color range control

The mechanism of defining the specific boundaries of color modification within a digital image. This involves limiting or expanding the scope of [[concepts/adjustments|adjustments]] to specific hues, saturations, or luminance levels to prevent unintended color shifts in adjacent pixels.

## Core Mechanisms
- [[concepts/point-color]]: Targeted adjustment via specific [[concepts/color-sampling|color sampling]].
- [[concepts/color-mixer]]: Broad-spectrum adjustments using [[concepts/hue]], Saturation, and Luminance [[concepts/parameters|parameters]].
- Variance: A tool for regulating the breadth of influence for a specific color sample.

## Recent Developments
- **[[entities/adobe-camera-raw|Adobe Camera Raw]]: [[concepts/color-contrast|Variance Slider]]** (2026-04-14)
    - Located within the [[concepts/point-color]] section of the [[concepts/color-mixer]].
    - Allows users to control the range of colors affected by a [[concepts/point-color]] adjustment after sampling a specific color in an image.
    - Documentation source: [[entities/glyn-dewis|Glyn Dewis]]

2026 04 14 New [[concepts/variance-filter|Camera Raw Variance filter]]

## Source Notes
- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-13: [[lab-notes/2026-04-13-Lightroom-Classic-v15-AI-Powered-Enhancements-for-Creative-Control-and|Lightroom Classic v15 AI Powered Enhancements for Creative Control and]] · [▶ source](https://www.youtube.com/watch?v=dKXqg50v1sA)
- 2026-04-18: [[lab-notes/2026-04-18-Adobe-Camera-Raw-183-Depth-Masking-Lens-Correction-Film-Presets-Overvi|Adobe Camera Raw 183 Depth Masking Lens Correction Film Presets Overvi]] · [▶ source](https://www.youtube.com/watch?v=2WDnMKtmCeY)
- 2026-04-21: Lightroom · [▶ source](https://youtu.be/HvCiSOkCoUk)
- 2026-04-30: Photoshop · [▶ source](https://www.youtube.com/watch?v=VRiszHrA2T4)