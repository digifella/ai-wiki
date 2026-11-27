---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "lightroom"
  - "camera-raw"
  - "gradient"
  - "photoshopCAFE"
  - "tutorial"
  - "gradient-tool"
  - "photo-editing"
  - "local-adjustments"
  - "adobe-camera-raw"
  - "lightroom-classic"
aliases:
  - "Gradient Tool"
  - "Gradient Adjustment Tool"
summary: The gradient tool applies gradual transitions between adjustments across an image to localize edits and manage dynamic range, with recent Adobe updates introducing bidirectional gradient support.
updated: 2026-10-03
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-11T20:37:18+00:00" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Gradient Tool

The **gradient tool** is a fundamental adjustment instrument in [[concepts/photo-editing|photo editing]] software, used to apply gradual transitions between [[concepts/adjustments|adjustments]] (such as [[concepts/exposure|exposure]], [[concepts/contrast|contrast]], or color) across an image. It is critical for localizing edits, managing [[concepts/dynamic-range|dynamic range]], and creating natural-looking skies or foregrounds.

## Key Developments

### Bidirectional Gradient Support
Recent [[concepts/software-updates|updates]] to [[entities/adobe|Adobe]]'s ecosystem have introduced advanced gradient capabilities, specifically the **[[concepts/bidirectional-gradient|bidirectional gradient]]** feature.

- **Feature Overview**: [[entities/adobe-camera-raw|Adobe Camera Raw]] (ACR) has implemented a new bidirectional gradient tool, allowing for more complex and natural transition curves compared to traditional linear or [[concepts/gradient-tools|radial gradients]].
- **[[entities/lightroom-classic|Lightroom Classic]] Workaround**: Users of **[[concepts/lightroom|Lightroom]] Classic** can replicate this specific bidirectional effect using techniques demonstrated in recent tutorials.
- **[[concepts/tutorial|Tutorial]] Reference**: For a step-by-step guide on achieving this effect in Lightroom Classic, see [[lab-notes/2026-08-12-Replicating-ACRs-New-Bidirectional-Gradient-in-Lightroom|Replicating ACR's New Bidirectional Gradient in Lightroom Classic]].
- **Source**: The method was detailed by [[entities/colin-smith|Colin Smith]] of **[[entities/colin-smith-channel|photoshopCAFE]]** in the video [Replicating ACR's New Bidirectional Gradient in Lightroom Classic](https://www.youtube.com/watch?v=SHOGHmkN_s8).

## Related Concepts
- [[concepts/adobe-camera-raw]]
- [[entities/lightroom-classic|Lightroom Classic]]
- [[concepts/local-adjustments|Local Adjustments]]
- [[concepts/layer-masks|Masking]]
