---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

<https://www.youtube.com/watch?v=61jK2mcGRNc>
This [[concepts/tutorial|tutorial]] by Colin Smith from PhotoshopCAFE demonstrates how to effectively use the new **Landscape Masks** in [[concepts/lightroom|Lightroom]] and [[concepts/camera-raw|Camera Raw]]. He introduces his comprehensive "Masks in Lightroom & Camera Raw" course for those who want to delve deeper.
The tutorial features two main examples:
**1\. Rocky Landscape Image (0:25)**

* **Accessing the Mask:** Colin navigates to the [[concepts/develop-module|Develop module]] in [[entities/lightroom-classic|Lightroom Classic]], clicks the [[concepts/masking|Masking]] tool, and selects **Landscape**. Lightroom's AI analyzes the image and identifies various features.
* **Detected Features (0:40):** For this image, Lightroom detected **Sky**, **Mountains**, **Vegetation**, and **Natural Ground**. Colin [[concepts/notes|notes]] that Landscape Masks can also identify [[concepts/architecture|Architecture]], Water, and Artificial Ground in other images.
* **Creating Separate Masks (1:13):** He chooses to create _separate masks_ for Sky, Mountains, and Vegetation. He observes some overlap, particularly between Vegetation and Natural Ground, and between Mountains and Natural Ground (as the rocks are part of natural ground).
* **Adjusting Mountains (2:05):** **Goal:** Bring back detail in the underexposed rocky mountains, which were losing detail due to strong sunlight and saturation clipping. **Adjustments:** He _decreases Blacks_ (e.g., to -42) to reveal more detail and _decreases Saturation_ (e.g., to -12) to prevent clipping and improve readability. **Adding Texture (3:16):** He increases **Texture** (e.g., to +23) to further "chisel out" the details in the rocks, making them more prominent. **Result:** The mountains appear more defined and less "clipped" in color.
* **Adjusting Sky (3:49):** **Goal:** Reduce the "cartoony" look in the sky, potentially caused by a polarizer. **Adjustments:** He _decreases Saturation_ (e.g., to -12) to make the blue less intense. He also _decreases Highlights_ (e.g., to -37) and _increases Shadows_ (e.g., to +29) to add more [[concepts/contrast|contrast]] and detail to the clouds. **Result:** The sky appears more natural with improved cloud [[concepts/slms|definition]].
* **Adjusting Vegetation (4:27):** **Goal:** Brighten the foliage without over-brightening the entire ground. **Adjustments:** He _increases Exposure_ (e.g., to +0.19) or _increases Shadows_ (e.g., to +33) to lighten the foliage. **Refinement - Subtracting with Brush (4:52):** To selectively apply the brightening, he uses the **Subtract** option with a **Brush** tool. By reducing the brush **Density** and **Flow** (e.g., to 70 each), he selectively removes the adjustment from the grass and fence, allowing the trees to receive more of the brightening effect while the foreground remains less affected.
* **Overall Adjustment (6:27):** After [[concepts/masking-tools|local adjustments]], he suggests returning to the global Basic panel for overall [[concepts/fine-tuning|fine-tuning]], such as adjusting the **Temperature** of the entire image if desired.

**2\. House in Hawaii Image (7:15)**

* **Accessing the Mask (7:21):** Again, he selects **Landscape** masking.
* **Detected Features (7:28):** Lightroom identifies **Sky**, **Architecture** (the house), **Vegetation**, and **Natural Ground**.
* **Adjusting Architecture (8:20):** **Goal:** Bring out detail in the shadowed areas of the building. **Adjustments:** He _increases Shadows_ (e.g., to +68) to lift the dark areas, revealing more structural detail. He briefly tries [[concepts/exposure|Exposure]] but decides against it to maintain natural look. **Result:** The house becomes much more visible and detailed.
* **Adjusting Sky (9:20):** **Goal:** Address the bright, potentially blown-out sky behind the trees. **Adjustments:** He _decreases Highlights_ (e.g., to -78) to recover some detail in the bright areas. **Refinement - Subtracting from Tree Trunks (9:33):** He demonstrates using the **Subtract** option with a **Brush** and **Auto Mask** enabled (Feather 79, Flow 100, Density 100). This allows him to "paint away" the sky mask from the tree trunks that were incorrectly selected, showing the background through the leaves. **Result:** The sky is toned down, and the edges of the tree canopy are better defined, though he acknowledges masking isn't always perfect.
* **Adjusting Vegetation (11:30):** **Goal:** Enhance the green foliage. **Adjustments:** He _decreases Highlights_ (e.g., to -48) and _increases Shadows_ (e.g., to +16). He then adds a "touch of Saturation" (e.g., to +16) to make the foliage pop. **Result:** The vegetation looks more vibrant and natural.
* **Adjusting Natural Ground (12:19):** **Goal:** De-emphasize the foreground ground to draw focus to the house. **Adjustments:** He _decreases Highlights_ (e.g., to -45), _decreases Exposure_ (e.g., to -0.28), and _increases Blacks_ (e.g., to +16). **Result:** The ground becomes slightly darker, making the house more prominent in the composition without looking artificial.
* **Overall Adjustment (13:20):** He concludes by applying a slight overall **Temperature** adjustment (e.g., to 5,687 K) to warm up the entire image, noting that such global adjustments should be done carefully after local masks.

**Conclusion (13:48):** Colin reiterates the power and versatility of Landscape Masks for various types of photos. He encourages viewers to check out his full course, watch more of his videos, leave comments, and subscribe to his channel.

## Related Concepts
- [[concepts/landscape-masking|Landscape Masking]] — [Wikipedia](https://en.wikipedia.org/wiki/Landscape_Masking)
- [[concepts/ai-assisted-editing|AI-assisted image editing]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-assisted_image_editing)
- [[concepts/image-analysis|Feature Detection]] — [Wikipedia](https://en.wikipedia.org/wiki/Feature_Detection)

## Related Entities
- [[entities/colin-smith|Colin Smith]] — [Wikipedia](https://en.wikipedia.org/wiki/Colin_Smith)
- [[entities/photoshopcafe|PhotoshopCAFE]] — [Wikipedia](https://en.wikipedia.org/wiki/PhotoshopCAFE)
- Lightroom — [Wikipedia](https://en.wikipedia.org/wiki/Lightroom)
- Camera Raw — [Wikipedia](https://en.wikipedia.org/wiki/Camera_Raw)