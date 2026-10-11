---
type: concept
domain: creative-pursuits
group: photoshop-layer-workflows
tags:
  - "ai-upscaling"
  - "photoshop-beta"
  - "generative-upscale"
  - "image-enhancement"
  - "photoshop-tools"
aliases:
  - "Photoshop AI Upscaling Comparison"
  - "Generative Upscale Tools"
summary: A comparison of three AI-driven upscaling tools available in Photoshop Beta.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Preserving Details 2.0

Preserving Details 2.0 refers to a suite of AI-powered upscaling tools integrated into Photoshop Beta that use machine learning to enlarge images while maintaining fine details and texture information. These tools address a fundamental limitation of traditional interpolation methods, which often produce pixelation and loss of detail when images are enlarged beyond their native resolution. Adobe's implementation employs generative AI to reconstruct visual information intelligently rather than simply repeating or blending existing pixels.

## Available Tools

The feature set within Photoshop Beta includes three distinct upscaling algorithms designed for different use cases. The primary option, often labeled as "Preserve Details 2.0," utilizes a neural network to enhance texture and edge definition during enlargement. A second variant, typically referred to as "Super Resolution," is designed to double the linear dimensions of an image while quadrupling the total pixel count, effectively creating a higher-resolution output from standard dynamic range (SDR) files. A third option, "Neural Filters" based upscaling, allows for more targeted adjustments by applying specific AI models to restore detail in areas prone to degradation, such as skies or skin textures.

## Technical Implementation

Unlike traditional bicubic or bilinear interpolation, which calculate new pixel values based on weighted averages of neighboring pixels, Preserving Details 2.0 analyzes the semantic content of the image. This approach allows the software to infer missing details based on learned patterns from vast datasets of high-resolution imagery. The process occurs locally on the user's device, leveraging GPU acceleration to manage the computational load. Users can adjust the degree of upscaling and noise reduction through a dedicated dialog box, which provides a real-time preview of the reconstructed details against the original input.

## Comparison and Utility

The integration of these tools allows photographers and digital artists to recover detail in images that would otherwise appear soft or blocky when enlarged. While traditional methods struggle with high-frequency details, the AI-driven approach attempts to synthesize plausible textures that match the surrounding context. This makes the feature particularly useful for preparing images for large-format printing or for recovering detail in downsampled assets. The tools are accessible via the Image > Image Size menu or through the Camera Raw Filter interface, depending on the file format and workflow context.

## Source Notes
- 2026-04-10: [[lab-notes/2026-04-10-Photoshop-Betas-AI-Rotate-Object-3D-Manipulation-of-2D-Images|Photoshop Betas AI Rotate Object 3D Manipulation of 2D Images]] · [▶ source](https://www.youtube.com/watch?v=2k9lIsGazqc)
- 2026-04-26: Gemini · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)
