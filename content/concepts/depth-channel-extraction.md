---
type: concept
domain: security-infrastructure
summary: The process of isolating spatial distance information from an image to create a grayscale representation where pixel luminance corresponds to the distance from the camera lens.
updated: 2026-05-23
group: data-pipelines-sync-storage
---
# Depth channel extraction

The process of isolating spatial distance information from an image to create a grayscale representation where pixel luminance corresponds to the distance from the camera lens.

## Applications
- **[[concepts/lens-blur]]**: Simulating realistic bokeh by applying depth-dependent convolution.
- **[[concepts/3d-photo-adjustments]]**: Executing localized [[concepts/photo-tonal-adjustments|color grading]], lighting, and atmospheric effects based on spatial planes.
- **Compositing**: Creating seamless [[concepts/integration|integration]] between foreground and background elements using depth-aware [[concepts/masking|masking]].

## Implementation & Resources
- **[[concepts/photoshop|Photoshop]] [[concepts/depth-map|Depth Map]]**: Utilizing grayscale maps for precise, non-destructive manipulation of photographic depth.
- **Tool Integration**: Leveraging depth data within [[concepts/camera-raw]] and [[concepts/lightroom]] to [[concepts/motivation|drive]] advanced blur algorithms.
- **Reference**: [[entities/piximperfect]] ([[entities/unmesh-dinda|Unmesh Dinda]]) - *[[concepts/3d-photo-manipulation|Photoshop Depth Map]]: Mastering Precise 3D Photo [[concepts/adjustments|Adjustments]]*.

## Related Notes
- 2026 04 22 [[concepts/depth-maps|Photoshop Depth Map]] Mastering Precise [[concepts/3d-photo-adjustments|3D Photo Adjustments]]
## Source Notes
- 2026-04-22: Photoshop · [▶ source](https://youtu.be/ljf8IhxqS20)
- 2026-04-07: [[lab-notes/2026-04-07-Google-NotebookLM-Customizing-Design-for-Professional-Presentations-vi|Google NotebookLM Customizing Design for Professional Presentations vi]] · [▶ source](https://www.youtube.com/watch?v=hqquu7H7X0w)
- 2026-04-27: AI Context Layer Architectures: Karpathy