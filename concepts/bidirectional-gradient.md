---
type: concept
domain: creative-pursuits
tags:
  - "gradient"
  - "photo-editing"
  - "adobe"
  - "lightroom"
  - "camera-raw"
  - "tutorial"
  - "bidirectional-gradient"
  - "gradient-tool"
  - "lighting-effects"
aliases:
  - "Dual-Direction Gradient"
  - "Bidirectional Linear Adjustment"
summary: A gradient tool feature that applies linear adjustments from both ends of the gradient line to create natural transitions, originally introduced in Adobe Camera Raw and later integrated into Lightroom Classic.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-11T20:36:55+00:00" }
group: lightroom-color-workflows
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Bidirectional Gradient

A [[concepts/gradient-tool|gradient tool]] feature allowing linear [[concepts/adjustments|adjustments]] to be applied from both ends of the gradient line simultaneously, enabling more natural transitions and complex lighting effects.

## Key Features
- **Dual-Direction Control**: Adjustments fade in from both the start and end points of the gradient line.
- **Natural Transitions**: Reduces harsh lines compared to traditional single-direction gradients.
- **[[entities/adobe|Adobe]] Ecosystem**: Originally introduced in [[concepts/adobe-camera-raw|Adobe Camera Raw]].

## Implementation & Workarounds

### Adobe Camera Raw (ACR)
- [[concepts/native-support|Native support]] for bidirectional gradients.
- Allows precise control over transition zones from both ends.

### Lightroom Classic
- **Native Support**: As of late 2025/2026, [[entities/lightroom-classic|Lightroom Classic]] has integrated bidirectional gradient capabilities to match ACR.
- **Replication Guide**: For users on older versions or seeking specific workflow tips, see [[lab-notes/2026-08-12-Replicating-ACRs-New-Bidirectional-Gradient-in-Lightroom|Replicating ACR's New Bidirectional Gradient in Lightroom Classic]].
- **Manual Workaround**: Prior to native support, users could simulate this effect by:
  - Applying two overlapping [[concepts/gradient-tools|linear gradients]] with opposite directions.
  - Using the [[concepts/layer-masks|Masking]] brush with low [[concepts/flow|flow]] and multiple passes.

## References
- [Replicating ACR's New Bidirectional Gradient in Lightroom Classic](https://www.youtube.com/watch?v=SHOGHmkN_s8) by [[entities/colin-smith-channel|photoshopCAFE]] ([[entities/colin-smith|Colin Smith]]), 2026-08-12.
