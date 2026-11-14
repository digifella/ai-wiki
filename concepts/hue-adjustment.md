---
type: concept
domain: creative-pursuits
tags:
  - "photoshop"
  - "color-correction"
  - "vectorscope"
  - "skin-tone"
  - "ai-masking"
  - "camera-raw"
  - "hue-adjustment"
  - "color-grading"
  - "skin-tone-correction"
  - "hsl-model"
aliases:
  - "Hue Shifting"
  - "Selective Hue Correction"
summary: Hue adjustment shifts an image's color spectrum while preserving luminance and saturation, often utilizing vectorscope analysis and AI masking for precise skin tone correction.
updated: 2026-10-04
generated: { by: "nemoclaw-wiki-ingest/qwen3.6-27b", at: "2026-08-08T20:31:52+00:00" }
group: lightroom-color-workflows
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Hue Adjustment

**Hue Adjustment** refers to the process of shifting the color spectrum of an image without significantly altering its luminance or saturation. It is a fundamental technique in [[concepts/photo-tonal-adjustments|Color Grading]] and [[concepts/photo-editing|Photo Editing]] used to correct [[concepts/color-casts|color casts]], create mood, or achieve specific aesthetic goals.

## Core Concepts

*   **HSL/HSV Model**: Hue is the attribute of color perception (e.g., red, blue, green) distinct from Saturation and Brightness.
*   **Selective Color Correction**: Adjusting hue in specific ranges (e.g., shifting only reds toward orange) to refine [[concepts/skin-tones|skin tones]] or correct white balance errors.
*   **Vectorscope Analysis**: A diagnostic tool used to visualize hue and saturation data, ensuring colors fall within broadcast-safe limits and natural skin [[concepts/tone|tone]] ranges.

## Advanced Techniques: Vectorscope & AI Masking

Recent workflows integrate Vectorscope analysis with [[concepts/ai-masking]] for precise control over complex subjects, particularly human skin.

*   **Vectorscope in [[entities/camera-raw|Camera Raw]]**: Utilizing the Vectorscope feature in [[entities/adobe-photoshop|Adobe Photoshop]]'s [[concepts/camera-raw-filter|Camera Raw Filter]] allows for visual [[concepts/verification|verification]] of skin tone accuracy.
*   **AI-Assisted [[concepts/accuracy|Precision]]**: Combining [[concepts/ai-based-selection|AI masking]] with hue adjustments enables targeted correction of skin tones without affecting the rest of the image.
*   **Natural-Looking Results**: This [[concepts/hybrid-approach|hybrid approach]] helps achieve perfect, natural-looking skin tones by aligning AI-selected regions with vectorscope data.
*   **Workflow Integration**: This method is detailed in recent tutorials focusing on precise [[concepts/adobe-photoshop|Photoshop]] [[concepts/skin-tone-correction|skin tone correction]].

For a detailed breakdown of this workflow, see [[lab-notes/2026-08-09-Vectorscope-AI-Masking-for-Precise-Photoshop-Skin-Tone-C|Vectorscope & AI Masking for Precise Photoshop Skin Tone Correction]].

## References

*   [[entities/adobe-photoshop|Photoshop]] Training Channel. "The Vectorscope Trick for PERFECT [[concepts/skin-tones|Skin Tones]] in [[concepts/adobe-photoshop|Photoshop]]." [Vectorscope & AI Masking for Precise Photoshop Skin Tone Correction](https://www.youtube.com/watch?v=oZAC8R6zL8A).
