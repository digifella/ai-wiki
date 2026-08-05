---
type: concept
domain: creative-pursuits
tags:
  - "color-theory"
  - "hue"
  - "chroma"
  - "color-grading"
  - "digital-imaging"
  - "lightroom"
aliases:
  - "Hue vs Chroma Distinction"
  - "Color Attributes"
  - "Hue and Intensity"
summary: This page defines hue as the dominant wavelength identifying color identity and chroma as the perceptual intensity or purity independent of lightness, detailing their technical equivalents and application in digital colo
updated: 2026-07-11
group: lightroom-color-workflows
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Hue vs. Chroma

**Hue** and **[[entities/chroma|Chroma]]** are fundamental attributes of color in [[concepts/color-theory|color theory]], distinct from **Lightness** (or Value). While often confused, they represent different dimensions of human color perception and digital color processing.

## Definitions

*   **Hue**: The attribute of a color that distinguishes it from others (e.g., red vs. blue). It corresponds to the dominant wavelength of [[concepts/light|light]]. On a color wheel, hue is represented by the angular position.
*   **Chroma**: The intensity, purity, or saturation of a color relative to its own brightness. High chroma indicates a vivid, [[concepts/hue|pure color]]; low chroma indicates a muted or grayish color. Unlike saturation, chroma is perceptually uniform and independent of lightness.

## Key Distinctions

| Attribute | Focus | Analogous Concept | Technical Equivalent |
| :--- | :--- | :--- | :--- |
| **Hue** | "What color is it?" | Temperature (Warm/Cool) | H in HSL/HSV |
| **Chroma** | "How strong is the color?" | Vividness/Purity | C in LCH/CIE L*C*h |

## Application in Color Grading

In digital imaging and post-processing, distinguishing between hue and chroma is critical for natural-looking grades.

*   [[lab-notes/2026-05-23-Lightroom-Color-Grading-Foundations-Tools-and-Cinematic|Lightroom Color Grading: Foundations, Tools, and Cinematic Techniques]] highlights that color significantly influences emotion and aesthetic.
*   Adjusting **Hue** shifts the [[concepts/hsl-hue|color identity]] (e.g., making [[concepts/skin-tones|skin tones]] warmer or cooler) without necessarily changing their intensity.
*   Adjusting **Chroma** affects the vibrancy. Over-increasing chroma can lead to banding and unnatural appearances, whereas reducing it creates muted, cinematic, or desaturated looks.
*   Effective grading often involves balancing these two: maintaining neutral chroma while shifting hue for mood, or boosting chroma selectively only in specific hue ranges (e.g., oranges for skin, blues for [[concepts/shadows|shadows]]).

## Related Concepts

*   Saturation: Similar to [[entities/chroma|chroma]] but dependent on lightness; can be misleading in high/low brightness areas.
*   LCH Color Space: A perceptually uniform color space that separates Lightness, Chroma, and Hue, ideal for precise grading.
*   Color Temperature: Often manipulated via hue shifts in the red/blue spectrum.
