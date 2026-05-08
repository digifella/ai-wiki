---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
---
eg to bring elements from one to the other or to fix closed eyes in group photos
<https://www.youtube.com/watch?v=_x4ywYieB8c>
This [[concepts/photoshop|Photoshop]] [[concepts/tutorial|tutorial]] by Colin Smith of [[entities/photoshopcafe|PhotoshopCAFE]] demonstrates how to combine the best elements from multiple similar photos, even if they weren't shot with a tripod. The core technique involves loading images into a stack, auto-aligning them, and then using layer masks to selectively reveal parts of different layers.
Here's a detailed [[concepts/summary|summary]] of the steps and [[concepts/highlights|key takeaways]]:

1. **The Problem (0:00-0:20):**
	Often, when shooting a dynamic scene like waves, you take multiple shots to capture different moments (e.g., different wave heights, different bird positions). Instead of choosing "this OR that" shot, you can combine "this AND that" to create a more compelling final image.
	
2. **Loading Photos into a Stack (0:20-0:54):**
	Instead of opening images individually, go to `File > Scripts > Load Files into Stack`. Click "Browse" to navigate to your image [[concepts/files|files]]. Select the two (or more) images you wish to combine (e.g., `combine_morro-2.jpg` and `combine_morro.jpg`). Click "Open," then "OK" in the "Load Layers" dialog box. Photoshop [[entities/will|will]] automatically open each selected image as a separate layer within a single document.
	
3. **Auto-Aligning Layers (1:12-1:40):**
	Since the photos were handheld, they won't be perfectly aligned. Select _all_ the layers you want to align in the Layers panel (click the top layer, then Shift-click the bottom layer). Go to `Edit > Auto-Align Layers`. In the "Auto-Align Layers" dialog box, keep the "Auto" projection selected (Photoshop will intelligently determine the best alignment). Click "OK." Photoshop will automatically adjust the layers to align their common features.
	
4. **Setting Up for Blending with a Layer Mask (2:00-3:24):**
	Determine which layer you want as your "base" (the background) and which one contains the elements you want to bring in (the foreground elements). In this example, the layer with the "better birds and front splash" (`combine_morro.jpg`) is chosen to be the top layer, while the layer with the "back splash" (`combine_morro-2.jpg`) remains the bottom layer. Select the _top_ layer (the one you want to selectively reveal parts of). To create a layer mask that _hides_ the entire top layer initially, hold down `Alt` ([[entities/windows|Windows]]) or `Option` (Mac) and click the "Add layer mask" icon (the square with a circle) at the bottom of the Layers panel. This creates a black mask.
	
5. **Painting on the Layer Mask (3:24-5:46):**
	Ensure your foreground color is **White** (press `D` to reset colors to default black/white, then `X` to swap if needed). Painting with white on a black mask will reveal the content of that layer. Select the **Brush Tool** (`B`). In the Brush settings (top toolbar or Brush panel), choose a **"Soft Round" brush** from the "General Brushes" presets. Set the **Hardness to 0%** for a smooth, feathered edge. **Adjust [[concepts/brush-size|brush size]]:** Use the `[` and `]` bracket keys, or `Alt/Option + Right-click drag left/right`. **Adjust [[concepts/brush-hardness|brush hardness]]:** Use `Alt/Option + Right-click drag up/down`. **Paint to reveal:** Carefully paint with the white brush over the areas on the image where you want to reveal elements from the current (top) layer (e.g., the birds, or the specific splash). **Paint to hide:** If you paint too much and want to hide part of the current layer (revealing the layer below), hit the `X` key to switch your foreground color to **Black**, and paint over the unwanted area. _Tip:_ Hold `Shift` and click on the layer mask thumbnail in the Layers panel to see the mask itself (white areas are revealed, black areas are hidden). This helps in precise [[concepts/masking|masking]].
	

**Conclusion (5:46-End):** The combined image now features the best elements from both original photographs, creating a composite that wasn't possible with a single shot. This technique of aligning layers and using selective masking is versatile for various photographic blending needs.

NOTE: commenter suggested starting with a WHITE mask and painting with a BLACK brush to paint the areas you want to save (which will disappear when painted) and THEN invert the mask makes it easier to see what you are doing.

## Related Concepts
- [[concepts/layer-masks|Layer Masks]] — [Wikipedia](https://en.wikipedia.org/wiki/Layer_Masks)
- [[concepts/selective-reveal|Selective Reveal]] — [Wikipedia](https://en.wikipedia.org/wiki/Selective_Reveal)
- [[concepts/composite-imaging|Composite Imaging]] — [Wikipedia](https://en.wikipedia.org/wiki/Composite_Imaging)
- Auto-Align Layers — [Wikipedia](https://en.wikipedia.org/wiki/Auto-Align_Layers)

## Related Entities
- [[entities/colin-smith|Colin Smith]] — [Wikipedia](https://en.wikipedia.org/wiki/Colin_Smith)