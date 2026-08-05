---
wiki-ingested: true
domain: creative-pursuits
group: lightroom-color-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

<https://www.youtube.com/watch?v=-_VRZp-0zeM>
This video provides a detailed [[concepts/tutorial|tutorial]] on utilizing the "Landscape" [[concepts/masking|masking]] feature in [[entities/adobe|Adobe]] [[entities/lightroom-classic|Lightroom Classic]], which also applies to [[entities/lightroom-cc|Lightroom CC]] and [[concepts/camera-raw|Camera Raw]].
Here's a breakdown of the key steps and concepts demonstrated:

1. **Initial Image [[concepts/preparation|Preparation]]:**
	The presenter starts with a landscape image that has already undergone basic adjustments: straightening and minor tweaks to [[concepts/exposure|Exposure]], Highlights, Shadows, Whites, and [[concepts/blacks|Blacks]] sliders in the Basic panel.
	
2. **Accessing Landscape Masking:**
	To access the [[concepts/masking-tools|masking tools]], click the circular "Masking" icon in the [[concepts/develop-module|Develop module]]'s right-hand panel. From the "Add New Mask" options, select "Landscape."
	
3. **Lightroom's AI Detection:**
	Lightroom's AI immediately begins "Detecting Landscape Features." Once analyzed, it presents a list of identified elements such as: Sky [[concepts/architecture|Architecture]] Vegetation Water Artificial Ground Natural Ground (Mountains would also appear if present in the scene, but were not in the demo images). Hovering over each element in the list [[entities/will|will]] display a red overlay on the image, showing exactly what Lightroom has identified for that specific category.
	
4. **Evaluating AI Mask [[concepts/accuracy|Accuracy]]:**
	The presenter [[concepts/notes|notes]] that while impressive, the AI isn't always perfect. For example: "Architecture" might miss parts of buildings or include non-architectural elements (like rocks mistaken for buildings). "Vegetation" might include parts of man-made structures (like a satellite dish on a building or a lighthouse top). "Natural Ground" and "Artificial Ground" can sometimes overlap or incorrectly include areas from the other.
	
5. **[[concepts/workflow|Workflow]] 1: Creating and Refining Individual Masks (Less Efficient):**
	The presenter initially demonstrates selecting one element (e.g., "Architecture"), clicking "Create Mask," and then using the "Add" and "Subtract" brush tools to manually refine the mask. He adds a missing section of a building and removes incorrectly selected areas. Once refined, adjustments like Exposure, Texture, and Clarity can be applied to that specific masked area. _Commentary:_ This method works but is inefficient if you plan to adjust multiple landscape elements.
	
6. **Workflow 2: Creating Multiple Separate Masks (Recommended Efficient Method):**
	The presenter deletes all previous masks to start fresh. He goes back to the "Landscape" option. This time, he checks _all_ the identified elements (Sky, Architecture, Vegetation, Water, Artificial Ground, Natural Ground). **Crucial Step:** Before clicking "Create Mask," ensure the "Create X separate masks" checkbox (where X is the number of selected elements) is checked. Click "Create Mask." Lightroom now generates individual, separate masks for each selected landscape element, all grouped under "New Landscape" in the Masks panel.
	
7. **Refining and Adjusting Separate Masks:**
	The user can now select each individual mask in the Masks panel and apply adjustments specific to that element, refining it with brushes if necessary: **Natural Ground:** He subtracts flower beds and adjusts exposure to brighten the grass. He also uses the "[[concepts/point-color|Point Color]]" tool to shift the [[concepts/hue|hue]], saturation, and luminance of specific green tones in the grass, adding tonal variation. **Artificial Ground:** Applied texture and clarity. **Water:** Subtracted part of a sidewalk/fence and darkened the water's exposure while boosting highlights. **Vegetation:** Subtracted a satellite dish and part of the lighthouse. He then increased exposure and saturation for the overall vegetation. **Sky:** Applied Dehaze, Clarity, and Texture to enhance the cloud detail.
	
8. **Before and After Comparison:**
	The presenter showcases the overall impact of these targeted adjustments by toggling the visibility of all masks on and off. The image appears more vibrant and "popped."
	
9. **Second Example (Pond Scene):**
	A second landscape image with a pond and trees is briefly shown, demonstrating that the same efficient workflow (bulk mask creation, then individual refinement) can be applied to different scenes, highlighting the versatility of the feature.
	
10. **Conclusion & Future Outlook:**
	The presenter emphasizes the power of landscape masking for adding significant enhancements to images. He anticipates that Adobe will continue to improve the accuracy of these AI-driven selections over time, making manual refinements less necessary in future updates.

## Related Concepts
- [[concepts/landscape-masking|Landscape Masking]] — [Wikipedia](https://en.wikipedia.org/wiki/Landscape_Masking)
- [[concepts/ai-detection|AI Detection]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Detection)
- [[concepts/ai-masking|Image Masking]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Masking)
- [[concepts/shadows|Shadows]] — [Wikipedia](https://en.wikipedia.org/wiki/Shadows)
- [[concepts/whites|Whites]] — [Wikipedia](https://en.wikipedia.org/wiki/Whites)
- [[concepts/blacks-sliders|Blacks sliders]] — [Wikipedia](https://en.wikipedia.org/wiki/Blacks_sliders)

## Related Entities
- [[entities/anthony-morganti|Anthony Morganti]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthony_Morganti)
- {'name': 'Anthony Morganti', 'type': 'person'} — [Wikipedia](https://en.wikipedia.org/wiki/%7B%27name%27%3A_%27Anthony_Morganti%27%2C_%27type%27%3A_%27person%27%7D)