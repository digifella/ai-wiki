---
wiki-ingested: true
title: "Photoshop Light Adjustment Layer: Functionality, Tonal Controls, and \"Pause\" Demystified"
date: 2026-09-17
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: creative-pursuits
group: photoshop-layer-workflows
type: "source-summary"
aliases:
  - "lab-notes/2026-09-17-Photoshop-Light-Adjustment-Layer-Functionality-Tonal-Con"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

## Photoshop Light Adjustment Layer: Functionality, Tonal Controls, and "Pause" Demystified
**Clip title:** [[concepts/adobe-photoshop|Photoshop]]'s NEW Light Adjustment Layer is NOT Broken!
**Author / channel:** Photoshop Training Channel
**URL:** https://www.youtube.com/watch?v=M-ux9hgZd9A

### Summary
This video provides a comprehensive explanation of [[concepts/adobe-photoshop|Photoshop]]'s new "Light" adjustment layer, which integrates Camera Raw's powerful tonal controls into a non-destructive, layer-based workflow. The main topic revolves around understanding the functionality of the six tonal sliders (Exposure, [[concepts/contrast|Contrast]], Highlights, [[concepts/shadows|Shadows]], [[concepts/whites|Whites]], and [[concepts/blacks|Blacks]]) and demystifying a commonly perceived "bug" where the layer appears to pause during certain editing actions. The presenter, Jesús Ramirez, details what each slider controls within the image's tonal range, emphasizing that Exposure and Contrast scale overall light, while Highlights and Shadows work on specific bright and dark areas without clipping pure whites or blacks.

A key point of the video is distinguishing between the new [[concepts/light-adjustment-layer|Light adjustment layer]] and Photoshop's older Brightness/Contrast adjustment. Older adjustment layers, like Curves and Levels, operate based on a pre-calculated "lookup table" – they take an input pixel value and output a corresponding new value, irrespective of the pixel's location or surrounding content. In contrast, the new Light layer, particularly its Highlights and Shadows sliders, *measures* the actual image content underneath to determine what constitutes a "highlight" or "shadow." This distinction is crucial for understanding why the layer "pauses."

The "pause" that users report is not a bug but an intentional function. When changes are made to layers *below* the Light adjustment layer (e.g., painting, cropping, applying clipping masks, or reordering layers), the Light layer's internal "measurement" of highlights and shadows becomes outdated. Photoshop then pauses to re-read the updated image information and recalculate the tonal map, ensuring the Highlights and Shadows adjustments remain accurate and relevant. Sliders like Exposure, Contrast, Whites, and Blacks do not cause this pause because they rely on fixed mathematical operations rather than dynamic image analysis.

The video concludes by recommending a strategic workflow: perform global tone adjustments on RAW files in Camera Raw or Lightroom first, then use the Light adjustment layer in Photoshop for targeted, masked, or selective adjustments. This non-destructive approach allows for immense flexibility, leveraging Photoshop's blend modes, opacity controls, and masking capabilities. The presenter also notes that the Light adjustment layer is not available in certain color modes (like CMYK, Lab, Grayscale) or 32-bit images, defaulting to the older Brightness/Contrast in those cases. Ultimately, mastering the Light adjustment layer involves understanding its dynamic measurement process and how it interacts with the layers beneath it, turning a perceived problem into a powerful feature.

### Video Description & Links
#### Description
Learn what every slider in Photoshop's new Light adjustment layer does, why it pauses, and where it belongs in your layer stack.

The Light adjustment layer brings the six Camera Raw tone sliders into the Adjustments panel as a real layer: Exposure, Contrast, Highlights, Shadows, Whites, and Blacks. 

It arrived in Photoshop 27.10 and replaced the Brightness/Contrast adjustment layer, which is still available from the Light version menu in the Properties Panel. 

It is the same math as Camera Raw, and this video proves it with a Difference blend test against a Lightroom export.

You will learn why the Light adjustment layer pauses when you paint on a layer below it, which two sliders cause the pause and which four never do, and how a lookup table differs from a measurement. 

You will also see how cropping, clipping masks, and layer masks change the result without touching a slider, how to use Blend If on a Light layer, and the placement rule that keeps the layer from pausing again.

This one is for anyone who opened Photoshop, found Brightness/Contrast missing, or tried the new layer and thought it was broken.

- How to use the Light adjustment layer in Photoshop
- How to bring back the Brightness/Contrast adjustment layer
- How to read a histogram to compare Brightness and Exposure
- How to stop the Light adjustment layer from pausing
- How to use clipping masks and layer masks with a Light adjustment layer
- How to use Blend If on an adjustment layer
- How to compare Photoshop's Light sliders to Lightroom with a Difference blend

📚 INDEX - Light Adjustment Layer Photoshop

00:00 - Introduction
00:30 - The Six Light Sliders
02:23 - Bring Back Brightness/Contrast
05:49 - Why the Light Layer Pauses
07:06 - Lookup Tables vs Measurements
09:39 - Black and White Bars Test
12:08 - Clarity and Dehaze Pause
13:27 - Cropping and Clipping Masks
15:41 - Layer Masks and Blend If
18:20 - Light Layer vs Lightroom Test
20:02 - Unsupported Modes and LUTs
20:35 - Final Thoughts

💾 TUTORIAL DOWNLOAD
► https://photoshoptrainingchannel.com/light-adjustment-layer-photoshop/

🔗 LINKS
How to Use Blend If in Photoshop ► https://www.youtube.com/watch?v=Wkti_IX3Qzk
Cut Out ANYTHING in Photoshop Without Selection Tools ► https://www.youtube.com/watch?v=mectUNmeOz8

Premium Tutorials ► http://ptcvids.com/shop

👍 CONNECT

📝 CREDITS
● Photoshop video tutorials by Jesús Ramirez

#PhotoshopTutorial #AdjustmentLayers #PTCvids

#### Tags
`adobe photoshop tutorial`, `photoshop tutorials`, `adjustment layers`, `Light Adjustment Layer`

#### URLs
- https://photoshoptrainingchannel.com/light-adjustment-layer-photoshop/
- https://www.youtube.com/watch?v=Wkti_IX3Qzk
- https://www.youtube.com/watch?v=mectUNmeOz8
- http://ptcvids.com/shop

## Related Concepts
- [[concepts/light-adjustment-layer|Light adjustment layer]]
- [[concepts/skin-tone-correction|Camera Raw]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- [[concepts/non-destructive-workflow|tonal controls]]
- [[concepts/non-destructive-workflow|non-destructive workflow]]
- [[concepts/semi-automatic-camera-modes|exposure]]
- [[concepts/contrast|contrast]]
- [[concepts/highlights|highlights]]
- [[concepts/shadows|shadows]] — [Wikipedia](https://en.wikipedia.org/wiki/Shadow)
- [[concepts/whites|whites]] — [Wikipedia](https://en.wikipedia.org/wiki/White_people)
- [[concepts/blacks|blacks]] — [Wikipedia](https://en.wikipedia.org/wiki/Black_people)
- [[concepts/dreamy-edit|selective masking]]

## Related Entities
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Photoshop — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- Camera Raw — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- Lightroom — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Lightroom)
- [[entities/adobe|Adobe]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe)