---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
---
<https://www.youtube.com/watch?v=UorIb_rGZuc>
This video by Colin Smith from [[entities/photoshopcafe|PhotoshopCAFE]] compares three upscaling tools available in [[concepts/photoshop|Photoshop]] (specifically Photoshop Beta at the time of recording) that utilize AI: Generative Upscale, Preserve Details 2.0 (found in Image Size), and Super Zoom (a Neural Filter).
**Video Overview:**
The [[concepts/tutorial|tutorial]] aims to demonstrate the effectiveness of these [[concepts/ai-powered-tools|AI-powered tools]] in enlarging images and increasing [[concepts/solution|resolution]], comparing their performance on both a photograph and a graphic [[concepts/design|design]].
**1\. Generative Upscale (New in Photoshop Beta)**

* **Access:** `Image > Generative Upscale...` or `Image > Image Size...` then click "Open in Generative Upscale..."
* **Functionality:** Allows [[concepts/scaling|scaling]] the image by 2x, 3x, or 4x. **Note:** In the Beta version, the maximum output resolution is 4096px, and generative credits are not deducted.
* **Demo 1 (Photograph - Violinist):** Original size: 667px x 1000px. Upscaled to 4x (2668px x 4000px). The tool creates a new document with two layers: "4x upscale" (the generative result) and "Original" (which is actually a poorly upscaled version of the original for comparison, _not_ the true low-res original). **Observation:** The Generative Upscale image shows significantly more detail than the poorly upscaled "Original" layer. However, some smooth areas (like the background bokeh) can appear _too_ smooth, almost cartoon-like, compared to the original photo's natural blur. Details in textures like leather are noticeably enhanced.
* **Demo 2 (Graphic Design - Book Cover):** Original size: 572px x 1000px. Upscaled to 4x (2288px x 4032px). **Observation:** For [[concepts/typography|typography]] and sharp lines, Generative Upscale often generates smoother, less crisp edges, sometimes losing the original sharpness of text and fine graphic elements. It might also subtly alter facial features in the embedded photo.

**2\. Preserve Details 2.0 (Existing AI Tool in Image Size)**

* **Access:** `Image > Image Size...` then set "Resample" to "Preserve Details 2.0".
* **Functionality:** This is an older AI-based upscaling algorithm within Photoshop's Image Size dialog.
* **Demo 1 (Photograph - Violinist):** A duplicate of the _original low-res_ image was used. Manually resized to 4000px height using "Preserve Details 2.0". **Observation (compared to Generative Upscale):** Preserve Details 2.0 retained _more natural detail_ in areas like the violin's wood and the woman's bracelet, where Generative Upscale tended to smooth more. It produced a more "realistic" upscaling for photographic textures.
* **Demo 2 (Graphic Design - Book Cover):** Upscaled using "Preserve Details 2.0". **Observation (compared to Generative Upscale):** Preserve Details 2.0 maintained significantly sharper typography and clearer details in the embedded photo's textures (like the sweater) than Generative Upscale.

**3\. Super Zoom (Neural Filter)**

* **Access:** `Filter > Neural Filters > Super Zoom`.
* **Functionality:** This Neural Filter also uses AI to upscale images, offering options for 2x, 3x, or 4x zoom, plus controls for JPEG artifact removal, noise reduction, sharpening, and face detail enhancement.
* **Demo 1 (Photograph - Violinist):** Upscaled to 4x using default settings. **Observation (compared to Generative Upscale & Preserve Details 2.0):** Super Zoom tended to smooth out faces more than Preserve Details 2.0. While it offers good upscaling, it didn't consistently outperform the other two for natural photographic detail.
* **Demo 2 (Graphic Design - Book Cover):** Upscaled to 4x using default settings. **Observation (compared to Generative Upscale & Preserve Details 2.0):** Super Zoom performed exceptionally well on typography, making it much sharper and clearer than Generative Upscale. It also offered good clarity for the graphic elements.

**Overall Verdict by Colin Smith:**

* **For Photographs:**
	**Generative Upscale** is generally good for overall upscaling, especially for larger prints, though it might over-smooth some areas. **Preserve Details 2.0** often yields more _natural_ and _accurate_ detail retention for realistic photographic textures. **Super Zoom** can be good, but in this test, it sometimes smoothed out facial features more than desired. **Recommendation:** Users can **mix and match** the results using [[concepts/layer-masks|layer masks]] to combine the best aspects of each tool for different parts of an image. For instance, using Generative Upscale for the overall image and [[concepts/masking|masking]] in areas from Preserve Details 2.0 for finer textures.
	
* **For Graphic Designs (with typography and sharp lines):**
	**Super Zoom (Neural Filter)** is generally the **best choice** due to its superior sharpness and clarity on typography and distinct graphic elements. **Preserve Details 2.0** comes in second, also offering good sharpness for graphics. **Generative Upscale** is less ideal for graphics as it tends to smooth out sharp edges and text, leading to a less crisp result.
	

The fact that Generative Upscale is still in Beta suggests promising future improvements, potentially leading to even better and more versatile results.

## Related Concepts
- [[concepts/generative-upscale|Generative Upscale]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_Upscale)
- [[concepts/ai-powered-upscaling|AI-powered upscaling]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-powered_upscaling)
- [[concepts/image-size|Image Size]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Size)
- [[concepts/neural-filters|Neural Filters]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_Filters)

## Related Entities
- [[entities/colin-smith|Colin Smith]] — [Wikipedia](https://en.wikipedia.org/wiki/Colin_Smith)
- [[entities/neural-filter|Neural Filter]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_Filter)
- Preserve Details 2.0 — [Wikipedia](https://en.wikipedia.org/wiki/Preserve_Details_2.0)
- Super Zoom — [Wikipedia](https://en.wikipedia.org/wiki/Super_Zoom)
- [[entities/photoshop-beta|Photoshop Beta]] — [Wikipedia](https://en.wikipedia.org/wiki/Photoshop_Beta)
- [[entities/adobe-photoshop|Adobe Photoshop]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)