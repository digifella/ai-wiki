---
type: concept
domain: creative-pursuits
tags:
  - "image-processing"
  - "signal-processing"
  - "filtering"
  - "computer-vision"
  - "noise-reduction"
  - "convolution"
  - "feature-detection"
  - "visual-effects"
aliases:
  - "Gaussian Filter"
  - "Linear Blur"
  - "Smoothed Image Processing"
summary: Gaussian Blur is a linear, separable image processing technique that smooths images by convolving them with a Gaussian function to reduce noise and high-frequency details.
updated: 2026-07-11
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Gaussian Blur

**Gaussian Blur** is a widely used [[concepts/image-input-processing|image processing]] and [[concepts/computer-vision|computer vision]] technique that smooths images by convolving them with a Gaussian function. It reduces high-frequency content (fine details) and noise while preserving low-frequency content (broad shapes).

## Mathematical Foundation
The operation applies a weighted average to each pixel, where the weight decreases according to a [[concepts/bell-curve|normal distribution]] curve centered on the pixel itself. The degree of blurring is controlled by the **standard deviation** ($\sigma$), known as the blur radius.

$$ G(x, y) = \frac{1}{2\pi\sigma^2} e^{-\frac{x^2 + y^2}{2\sigma^2}} $$

## Key Characteristics
- **Linearity**: As a linear filter, it does not introduce ringing artifacts (unlike sinc-based filters).
- **Separability**: The 2D Gaussian kernel can be decomposed into two 1D passes, significantly reducing [[concepts/complexity-classes|computational complexity]] from $O(n^2)$ to $O(n)$.
- **Isotropy**: The filter is rotationally invariant, meaning the blur effect is uniform in all directions.

## Applications
- **Noise Reduction**: Suppresses Gaussian noise and high-frequency artifacts.
- **Feature Detection**: Pre-processing step for Canny edge detection and Scale-invariant feature transform (SIFT).
- **Image Pyramids**: Used in Laplacian and Gaussian pyramids for multi-scale analysis.
- **Visual Effects**: Simulates depth of field or out-of-focus areas.

## Relation to Image Noise Management
While Gaussian Blur reduces noise, it indiscriminately smooths edges, potentially degrading image [[concepts/sharpness|sharpness]]. Modern workflows often prefer non-linear filters (e.g., Bilateral filter, Non-local means) for noise reduction to preserve edges. For a broader context on handling [[concepts/digital-image-noise|digital noise]] [[concepts/causes|causes]] and post-processing alternatives, see [[lab-notes/2026-06-04-Demystifying-Digital-Image-Noise-Causes-Prevention-and-P|Demystifying Digital Image Noise: Causes, Prevention, and Post-Processing Solutions]].

## Related Concepts
- Convolution
- Kernel ([[concepts/image-input-processing|image processing]])
- Frequency domain filtering
- Low-pass filter
