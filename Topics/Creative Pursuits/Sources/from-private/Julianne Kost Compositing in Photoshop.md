---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

<https://www.youtube.com/watch?v=bMXJwZuzP14>
Here is a step-by-step guide to the compositing [[concepts/workflow|workflow]] demonstrated in the video, utilizing both traditional [[concepts/photoshop|Photoshop]] tools and new AI-powered features.

# Compositing in [[entities/adobe|Adobe]] Photoshop: New & Traditional Techniques

**Instructor:** Julieanne Kost

* * *

## 1\. Document Setup & Importing

1. **Create New Document:** Set dimensions to **20x20 inches** at **300 [[concepts/pixel-density|ppi]]**, **[[concepts/16-bit-depth|16-bit]]**, in **[[concepts/adobe-rgb|Adobe RGB]]**.
2. **Import from [[concepts/lightroom|Lightroom]]:** Select images in [[entities/lightroom-classic|Lightroom Classic]], right-click, and choose **Edit In > Open as Smart Object Layers in Photoshop**.
	* _Why Smart Objects?_ They retain raw data for non-destructive edits (like temperature/tint) and allow resizing/transforming without quality loss.
3. **Organize Layers:** Drag all layers into the main 20x20 document. Close the source document.

## 2\. Building the Environment

Use **Edit > Free Transform** (or `Cmd/Ctrl + T`) to resize and position elements.

* **Sky:** Transform to fit. Double-click the Smart Object thumbnail to open **Camera Raw**. Adjust **Temperature** to shift the color from pink to blue (avoids banding compared to standard HSL adjustments).
* **Ice (Ground):** Position at the bottom. Add a **Layer Mask**. Use the **Gradient Tool (G)** with a black-to-white linear gradient to fade the top horizon line seamlessly into the sky.
* **Hot Spring:** Use the **Object Selection Tool** (Rectangle mode) to select the pool. Add a Layer Mask.
	* _Tip:_ Use the **Feather** slider in the Properties panel to soften the mask edges non-destructively.
* **Steam:** Layer over the pool. Set **Blend Mode** to **Soft [[concepts/light|Light]]** and **[[concepts/opacity|Opacity]]** to **30%**.
* **Organization:** Select all environment layers and group them (`Cmd/Ctrl + G`), naming the group "Environment".

## 3\. Adding the Figure (The Suit)

1. **Isolate Subject:** Select the layer with the person. In the **[[concepts/contextual-task-bar|Contextual Task Bar]]**, click **[[concepts/remove-background|Remove Background]]**.
2. **Refine Mask:** Use the **Brush Tool (B)** with black paint on the mask to hide the head, feet, and legs, making the figure appear submerged in the water.
3. **Create Shadow:**
	* Use the **[[concepts/selection-brush|Selection Brush]] Tool** to paint a rough shadow shape under the coat.
	* Add a **Curves Adjustment Layer** to darken the selected area.
	* Feather the mask in the Properties panel to soften the shadow edges.

## 4\. Generating High-Quality Assets with [[entities/adobe-firefly|Adobe Firefly]]

For elements where the original photo is low quality or grainy (like the film photo of the dog), use [[concepts/generative-ai|generative AI]].

### Generating the Dog Head

1. Go to **firefly.adobe.com** and choose **Generate Image**.
2. **Reference Image:** Upload the original photo of the dog to guide the [[concepts/structure|structure]].
3. **Prompt:** Describe the image (e.g., _"Photograph of an adult yellow Labrador looking directly at camera..."_). Specify technical details like _"f/22, no blur, deep focus"_.
4. **Generate:** Select the best result and download it.
5. **Import:** Place the file into Photoshop as a Smart Object.
6. **Blending:**
	* Remove the background.
	* Group the layer and add a mask to hide the neck/chest area.
	* Use the **Selection Brush** to highlight the transition area between the dog's neck and the suit collar.
	* Use **[[concepts/generative-fill|Generative Fill]]** with a blank prompt (or describe the fur) to seamlessly blend the fur over the jacket.

### Generating the Wings

1. Export the original wing layers as a JPEG to use as a **Reference Image** in Firefly.
2. **Prompt:** _"Photograph of two complete white wings of a heron, fully spread..."_
3. **Generate & Import:** Place the result into Photoshop, remove the background, and duplicate/flip the layer to create a pair. Group them behind the figure.

## 5\. Adding Details & Accessories

### The Crown (Lantern)

1. **Isolate:** Remove the background of the lantern photo.
2. **Refine:** Use the **Selection Brush** to select the top and bottom extraneous parts. Fill the selection with Black on the mask to hide them.
3. **Blend:** Position on the dog's head. Select the seam between head and crown and use **Generative Fill** to create a natural fit.

### The Buttons

1. **Remove Old Buttons:** Use the **[[concepts/remove-tool|Remove Tool]]** (with "Create New Layer" checked) to wipe away the original buttons.
2. **Add New Buttons:** Use the **Marquee Tool (M)** to select the button area.
3. **Generative Fill:** Prompt for _"three golden buttons shaped like dog bones"_.
4. **Fixing [[concepts/color-casts|Color Casts]]:** If the generation alters the suit color:
	* Invert the Generative Fill mask.
	* Paint with black to hide the mismatched suit area, revealing only the buttons.
	* Add a **Drop Shadow** layer [[concepts/style|style]] to give the buttons depth.

### Floating Lanterns

1. Use the **Selection Brush** to paint an area in the water.
2. **Generative Fill:** Prompt for _"three golden illuminated flower lanterns floating in the water"_.

## 6\. Global Adjustments & Color Grading

To unify the composite, apply adjustments on top of all layers.

1. **Texture:** Add a photo of paper texture. Set **Blend Mode** to **Soft Light**.
2. **Color Unification:** Add a blurred background photo with warm tones. Set **Blend Mode** to **Color** to apply a consistent color palette to the whole scene.
	* _Masking:_ If the color overlay dulls specific elements (like the golden lanterns), mask those areas out so their original vibrancy shows through.
3. **Vignette:** Add a **Curves** layer to darken the image. Use a **Radial Gradient** mask (inverted) to keep the center bright and darken the edges.
4. **Color Pop:** Use a **Curves** layer to brighten specific gold elements (crown, buttons, lanterns). Load the selection from the crown's mask to target these areas specifically.

* * *

**Key Takeaway:** By combining traditional [[concepts/masking|masking]] and photography with the power of Generative Fill and Adobe Firefly, you can create high-[[concepts/solution|resolution]], surreal composites that maintain a cohesive photographic look.

## Related Concepts
- [[concepts/layer-renaming|Layer Management]] — [Wikipedia](https://en.wikipedia.org/wiki/Layer_Management)
- [[concepts/smart-objects|Smart Objects]] — [Wikipedia](https://en.wikipedia.org/wiki/Smart_Objects)
- [[concepts/non-destructive-editing|Non-Destructive Editing]] — [Wikipedia](https://en.wikipedia.org/wiki/Non-Destructive_Editing)
- Free Transform — [Wikipedia](https://en.wikipedia.org/wiki/Free_Transform)
- [[concepts/camera-raw|Camera Raw]] — [Wikipedia](https://en.wikipedia.org/wiki/Camera_Raw)
- Gradient Tool — [Wikipedia](https://en.wikipedia.org/wiki/Gradient_Tool)
- Object Selection Tool — [Wikipedia](https://en.wikipedia.org/wiki/Object_Selection_Tool)
- Feather slider — [Wikipedia](https://en.wikipedia.org/wiki/Feather_slider)
- Soft [[concepts/light|Light]] Blend Mode — [Wikipedia](https://en.wikipedia.org/wiki/Soft_Light_Blend_Mode)
- Curves Adjustment Layer — [Wikipedia](https://en.wikipedia.org/wiki/Curves_Adjustment_Layer)
- [[concepts/selection-brush|Selection Brush]] Tool — [Wikipedia](https://en.wikipedia.org/wiki/Selection_Brush_Tool)
- Firefly AI — [Wikipedia](https://en.wikipedia.org/wiki/Firefly_AI)

## Related Entities
- [[entities/julieanne-kost|Julieanne Kost]] — [Wikipedia](https://en.wikipedia.org/wiki/Julieanne_Kost)
- [[entities/adobe-photoshop|Adobe Photoshop]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)