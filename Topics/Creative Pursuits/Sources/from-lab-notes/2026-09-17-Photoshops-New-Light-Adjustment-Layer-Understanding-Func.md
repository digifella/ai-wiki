---
wiki-ingested: true
title: "Photoshop's New Light Adjustment Layer: Understanding Functionality and \"Pauses\""
date: 2026-09-17
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: creative-pursuits
group: photoshop-layer-workflows
type: "source-summary"
aliases:
  - "lab-notes/2026-09-17-Photoshops-New-Light-Adjustment-Layer-Understanding-Func"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

## Photoshop's New Light Adjustment Layer: Understanding Functionality and "Pauses"
**Clip title:** [[concepts/adobe-photoshop|Photoshop]]'s NEW Light Adjustment Layer is NOT Broken!
**Author / channel:** Photoshop Training Channel
**URL:** https://www.youtube.com/watch?v=M-ux9hgZd9A

### Summary
The video provides a comprehensive explanation of [[concepts/adobe-photoshop|Photoshop]]'s new "[[concepts/light-adjustment-layer|Light Adjustment Layer]]," introduced in the 2026 update, addressing common user confusion regarding its functionality and occasional "pauses." This new layer brings the powerful tonal controls previously found in [[entities/camera-raw|Camera Raw]] and Lightroom—Exposure, [[concepts/contrast|Contrast]], Highlights, [[concepts/shadows|Shadows]], [[concepts/whites|Whites]], and [[concepts/blacks|Blacks]]—directly into Photoshop's non-destructive, layer-based workflow. The presenter, Jesús Ramirez, details what each slider accomplishes, emphasizing that the Light Adjustment Layer offers control over the entire tonal range, from the brightest highlights to the deepest shadows, allowing for flexible masking and reordering.

A key distinction is made between "lookup" and "measurement" based adjustment layers, which clarifies why the "pause" occurs. Older adjustment layers like Curves and Levels operate using fixed lookup tables, meaning a specific input value always yields the same output value regardless of the surrounding pixels or underlying layers. However, the Highlights and Shadows sliders (along with Clarity, Dehaze, and Grain) in the new Light Adjustment Layer are "measurement-based." They dynamically read and analyze the image content underneath to determine what constitutes a highlight or shadow before applying an adjustment. Therefore, if any changes are made to the layers below the Light Adjustment Layer, these measurement-based sliders must re-read the updated image information to recalculate their effect, causing the momentary pause, which is a designed feature, not a bug.

For optimal workflow, especially with RAW files, the video recommends performing initial global tone adjustments in Camera Raw or Lightroom first, then utilizing the Light Adjustment Layer in Photoshop for more localized, masked adjustments. To mitigate the "pausing" effect caused by measurement-based sliders, a strategic approach is suggested: use separate Light Adjustment Layers. One layer can manage Exposure, Contrast, Whites, and Blacks (which are lookup-based and don't trigger recalculations from underlying changes), positioned anywhere in the layer stack. A second Light Adjustment Layer, specifically for Highlights and Shadows, should then be placed either directly above the background layer or at the very top of the stack to ensure it always measures the final composite image, minimizing unexpected pauses.

The video also highlights the flexibility of the Light Adjustment Layer, noting it is a "real layer" that supports blend modes, opacity, layer styles, clipping masks, and traditional masks, allowing for sophisticated image manipulation. It clarifies that Photoshop retains access to legacy Brightness and Contrast adjustment layers (pre-2007 and pre-2026 versions) for users who prefer their simpler, histogram-shifting behavior. While the math behind the Light Adjustment Layer is identical to Camera Raw/Lightroom, its integration into Photoshop's dynamic layer stack necessitates the periodic re-measurement that leads to the pauses. Understanding this fundamental difference between lookup and measurement processes is crucial for mastering the Light Adjustment Layer and leveraging its full potential.

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
- [[concepts/light-adjustment-layer|Light Adjustment Layer]]
- [[concepts/shadows|Shadows]] — [Wikipedia](https://en.wikipedia.org/wiki/Shadow)
- [[concepts/whites|Whites]] — [Wikipedia](https://en.wikipedia.org/wiki/White_people)
- [[concepts/blacks|Blacks]] — [Wikipedia](https://en.wikipedia.org/wiki/Black_people)
- [[concepts/skin-tone-correction|Camera Raw]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- [[concepts/non-destructive-workflow|Tonal Controls]]
- [[concepts/semi-automatic-camera-modes|Exposure]]
- [[concepts/contrast|Contrast]]
- [[concepts/highlights|Highlights]]
- [[concepts/non-destructive-workflow|Non-destructive Workflow]]
- Layer Stack — [Wikipedia](https://en.wikipedia.org/wiki/Printed_circuit_board)
- [[concepts/scenic-photography|Masking]]
- Blend Modes — [Wikipedia](https://en.wikipedia.org/wiki/Blend_modes)

## Related Entities
- [[entities/adobe-photoshop|Adobe Photoshop]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- [[entities/camera-raw|Camera Raw]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- Photoshop — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- Lightroom — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Lightroom)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]]
- Dehaze — [Wikipedia](https://en.wikipedia.org/wiki/Alain_Dehaze)
- Grain — [Wikipedia](https://en.wikipedia.org/wiki/Grain)