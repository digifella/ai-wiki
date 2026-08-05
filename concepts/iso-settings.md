---
type: concept
domain: creative-pursuits
tags:
  - "iso-settings"
  - "digital-noise"
  - "signal-amplification"
  - "dynamic-range"
  - "low-light-photography"
  - "image-sensitivity"
aliases:
  - "ISO Sensitivity"
  - "Sensor Gain"
  - "Camera ISO"
summary: ISO settings adjust the sensitivity of a digital image sensor to light by amplifying the signal, which enables faster shutter speeds in low-light conditions but increases electronic noise.
updated: 2026-07-11
group: photography-cameras
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# ISO Settings

**ISO** denotes the sensitivity of a digital image sensor to [[concepts/light|light]]. Increasing ISO amplifies the signal from the sensor, allowing for faster shutter speeds or smaller apertures in low-light conditions, but simultaneously amplifies electronic noise.

## Core Mechanics
- **Signal Amplification**: ISO adjusts the gain applied to the analog signal before it is converted to [[concepts/digital-information|digital data]].
- **Native ISO**: The base sensitivity range of the sensor where dynamic range and [[concepts/camera-raw|signal-to-noise ratio]] are optimal (typically ISO 100–400).
- **Expanded ISO**: Settings below (Low) or above (High) native range, often resulting in reduced dynamic range or increased noise.

## Noise and ISO Interaction
- **[[concepts/digital-image-noise|Digital Noise]]**: Random variation of brightness or color information in images, primarily consisting of:
  - **Luminance Noise**: Grain-like [[concepts/texture|texture]] affecting brightness.
  - **Chrominance Noise**: Colored speckles, generally more objectionable than luminance noise.
- **Inverse Relationship**: Higher ISO settings exponentially increase noise floor, degrading image quality.
- **Trade-offs**: Using higher ISO is often preferable to underexposing an image and brightening it in post-processing, as modern sensors handle high ISO amplification better than shadow lifting.

## Best Practices & Mitigation
- **Expose to the Right (ETTR)**: Maximize [[concepts/exposure|exposure]] without clipping highlights to optimize signal-to-noise ratio.
- **Native Range Preference**: Stay within native ISO whenever possible.
- **Post-Processing**: Noise reduction is more effective on luminance than chrominance; color noise should be addressed first.

## Related Resources
- [[concepts/dynamic-range]]
- Signal-to-Noise Ratio
- [[concepts/digital-image-processing]]
- [[lab-notes/2026-06-04-Demystifying-Digital-Image-Noise-Causes-Prevention-and-P|Demystifying Digital Image Noise: Causes, Prevention, and Post-Processing Solutions]]
