---
type: concept
domain: creative-pursuits
tags:
  - "computational-photography"
  - "depth-of-field"
  - "bokeh"
  - "image-processing"
  - "depth-mapping"
aliases:
  - "Portrait Mode"
  - "Depth Effects"
  - "Bokeh Simulation"
summary: Portrait Mode is a computational photography technique that uses depth maps generated via stereo vision, LiDAR, or AI to simulate shallow depth of field and blur backgrounds.
updated: 2026-07-12
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Portrait Mode

**[[concepts/portrait-photography|Portrait]] Mode** is a computational photography technique that simulates a shallow depth of field (large aperture) typically associated with long [[concepts/focal-length|focal length]] lenses, creating a blurred background ([[concepts/lens-blur|bokeh]]) while keeping the subject in [[concepts/sharpness|sharp focus]]. This effect isolates the subject from the environment, mimicking the aesthetic of professional [[concepts/dslr-photography|DSLR]] or mirrorless camera [[concepts/optics|optics]] on devices with fixed or smaller apertures.

## Technical Foundation

The core mechanism relies on generating a high-[[concepts/solution|resolution]] **Depth Map** from the input image. This map assigns a depth value to every pixel, allowing the [[concepts/fat-rendering|rendering]] [[concepts/engine|engine]] to apply [[concepts/gaussian-blur|Gaussian blur]] or other defocus [[concepts/algorithms|algorithms]] selectively based on distance from the camera.

*   **Stereo Photography:** Uses multiple camera lenses (e.g., dual-camera systems on smartphones) to calculate parallax and derive depth data.
*   **[[concepts/lidar|LiDAR]]:** Employs [[concepts/light|light]] detection and ranging sensors to capture precise spatial geometry.
*   **AI/ML Estimation:** Utilizes [[concepts/neural-networks|neural networks]] trained on massive datasets to infer depth from single images based on object recognition, lighting, and [[concepts/texture|texture]] cues.

## Evolution and Software Integration

Modern [[concepts/image-editing|image editing]] suites have integrated depth-aware editing tools, transitioning from simple blur overlays to pixel-accurate depth mapping.

*   **[[concepts/photoshop|Adobe Photoshop]] & [[concepts/camera-raw|Camera Raw]]:** Recent [[concepts/software-updates|updates]] have significantly enhanced depth estimation capabilities for 2D images that lack native depth data.
    *   See detailed analysis: [[lab-notes/2026-05-26-Photoshops-Enhanced-Depth-Range-Mask-Creating-Depth-Maps|Photoshop's Enhanced Depth Range Mask: Creating Depth Maps for Any Photo]]
    *   The enhanced **[[concepts/depth-range-masking|Depth Range Mask]]** feature allows users to create accurate [[concepts/depth-maps|depth maps]] for any photo within [[entities/adobe-camera-raw|Adobe Camera Raw]], extending bokeh and lighting controls to non-native depth images.
    *   This updates the previous limitation where depth effects were primarily reserved for photos taken with devices supporting native depth capture (e.g., [[entities/iphone-pro|iPhone Pro]] series with LiDAR).

## Key Parameters

*   **Aperture [[concepts/simulation|Simulation]]:** Controls the intensity of the background blur (f-stop equivalence).
*   **Focus Point:** Determines the plane of sharpness; can be manually adjusted or auto-detected.
*   **[[concepts/edge-refinement|Edge Refinement]]:** Algorithms designed to prevent [[concepts/haloing|haloing]] or fringing along subject boundaries, critical for hair and complex textures.

## Related Concepts

*   [[concepts/lens-blur|Bokeh]]
*   [[concepts/camera-settings]]
*   Computational Photography
*   [[concepts/depth-map]]
*   [[entities/adobe-photoshop]]
