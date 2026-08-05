---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

<https://www.youtube.com/watch?v=ufLkBKtmgZM>

Here is a summary of the video [[concepts/tutorial|tutorial]] by Blake Rudis (f64 Academy) regarding the new **Color and Vibrance** tool in [[entities/photoshop-2025|Photoshop 2025]].

# Mastering the New "Color and Vibrance" Tool in Photoshop

## Overview

Photoshop 2025 introduces a new adjustment layer called **Color and Vibrance**. This tool integrates the **Temperature and Tint** sliders (previously exclusive to [[entities/adobe-camera-raw|Adobe Camera Raw]] and [[concepts/lightroom|Lightroom]]) directly into Photoshop as a layer. It replaces the legacy "Vibrance" adjustment layer.

### The Controls

* **Temperature:** Shifts color between Blue (Cool) and Yellow (Warm).
* **Tint:** Shifts color between Green and Magenta.
* **Vibrance & Saturation:** Standard saturation controls (legacy actions using these [[entities/will|will]] still work).

* * *

## Comparison: Why is this unique?

Blake argues that this tool functions differently than existing color tools in Photoshop:

* **Vs. Hue/Saturation (HSL):** HSL targets specific color ranges. The new tool affects the global "feel" of the image, shifting warmth or coolness across tones.
* **Vs. Color Balance:** While Color Balance shifts specific channels (Shadows/Midtones/Highlights), the [[concepts/color-and-vibrance-tool|Color and Vibrance tool]] creates a more complex "Warmth" or "Coolness."
	* _Example:_ Moving the slider to Warm doesn't just add Yellow; it adds a mix of Yellow and Orange. Moving to Cool adds Cyan and Blue.
* **Vs. Photo Filter:** Photo Filters often drastically alter the luminosity (brightness) of an image. The Color and Vibrance tool changes color temperature while preserving tonal values much better.

* * *

## The Core [[concepts/philosophy|Philosophy]]: Color Grading vs. White Balance

While the tool _can_ fix white balance, Blake recommends doing corrective white balance in RAW processing (Lightroom/ACR).
**The true power of this tool is for Local Color Grading.** Because it is an adjustment layer, it can be combined with **Masks** and **[[concepts/blend-if|Blend-If]]** to create painterly depth (Push/Pull technique) similar to the Hudson River School [[concepts/style|style]] of painting.

* * *

## Practical Applications & Techniques

### 1\. Localized Warmth and Coolness (Landscape)

Instead of warming the whole image:

1. Add a **Color and Vibrance** layer and shift it to **Warm (Yellow)**.
2. Adjust the **Tint (Magenta)** to refine the [[concepts/tone|tone]].
3. Invert the mask (Black) and use a soft white brush to paint the warmth _only_ where the sunlight hits the landscape.
4. _Optional:_ Create a second layer, shift to **Cool (Blue)**, and paint into the [[concepts/shadows|shadows]] to create [[concepts/color-contrast|color contrast]].

### 2\. Subject [[concepts/disconnection|Separation]] (Wildlife/Portrait)

Create separation between the subject and the background:

1. Use **[[concepts/select-subject|Select Subject]]** to isolate the subject (e.g., an Elk).
2. Add the adjustment layer: **Warm up** the subject and add a slight **Magenta** tint. Increase Vibrance.
3. Duplicate the layer and **Invert** the mask (so it targets the background).
4. On the background layer: **Cool down** the temperature and add a **Green** tint to contrast with the magenta subject.

### 3\. [[concepts/advanced-blending|Advanced Blending]] with "Blend-If"

Target specific tonal ranges without manual brushing:

1. Add a **Color and Vibrance** layer and shift it to **Cool (Blue)**.
2. Open **Layer Styles** (double-click the layer).
3. Use **Blend-If (Underlying Layer)**: Drag the white slider to the left (holding Alt/Option to split the slider).
4. **Result:** The blue tint is restricted _only_ to the darkest shadows, leaving the highlights unaffected. This creates a "baked sunlight" effect where shadows remain cool while the sun stays warm.

* * *

## Technical Insight

Blake theorizes that under the hood, this tool behaves similarly to a **Solid Color Fill** layer set to the **Vivid [[concepts/light|Light]]** blend mode with a reduced **Fill** [[concepts/opacity|opacity]]. It effectively combines complex blending [[concepts/mathematics|mathematics]] into a simple slider interface, making high-end color grading accessible to beginners.

## Related Concepts
- [[concepts/color-temperature|Color Temperature]] — [Wikipedia](https://en.wikipedia.org/wiki/Color_Temperature)
- [[concepts/color-tint|Color Tint]] — [Wikipedia](https://en.wikipedia.org/wiki/Color_Tint)
- [[concepts/saturation-control|Saturation Control]] — [Wikipedia](https://en.wikipedia.org/wiki/Saturation_Control)
- [[concepts/adjustment-layers|Adjustment Layers]] — [Wikipedia](https://en.wikipedia.org/wiki/Adjustment_Layers)

## Related Entities
- Blake Rudis (f64 Academy) — [Wikipedia](https://en.wikipedia.org/wiki/Blake_Rudis_%28f64_Academy%29)
- [[entities/adobe-photoshop-2025|Adobe Photoshop 2025]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop_2025)