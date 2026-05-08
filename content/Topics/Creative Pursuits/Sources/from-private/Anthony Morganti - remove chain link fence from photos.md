---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
---
<https://www.youtube.com/watch?v=1C4-CIEFTcU>
Here is a [[concepts/summary|summary]] of the video [[concepts/tutorial|tutorial]] by Anthony Morganti on how to remove chain-link fences from photos using [[entities/adobe|Adobe]] [[concepts/photoshop|Photoshop]].

# How to Remove Chain Link Fences in Photoshop

Anthony Morganti demonstrates two modern methods for removing chain-link fences (specifically from zoo photography). While older methods were labor-intensive, new Photoshop tools make the process significantly faster.

## Method 1: The [[concepts/remove-tool|Remove Tool]] (Wires and Cables)

This method attempts to use the built-in "Wires and Cables" detection. It is the preferred first step as it attempts to keep the original pixels intact.
**1\. Configure Preferences for Best Results:**

* **Mac:** Go to `Photoshop 2026` > `Settings` > `Image Processing`.
* **PC:** Go to `Edit` > `Preferences` > `Image Processing`.
* **Settings:** Change "Remove Tool Processing" from "Faster" to **"More Stable"**. It is recommended to set "[[concepts/select-subject|Select Subject]]" to **Cloud** and all other processing options to **More Stable**.

**2\. Select the Remove Tool:**

* Press the `**J**` key. Ensure you have the actual **Remove Tool** selected (icon looks like a bandage with stars), not the Spot Healing Brush or Patch Tool.

**3\. Execute Removal:**

* In the [[concepts/contextual-task-bar|Contextual Task Bar]] or Options Bar, locate the **Find Distractions** dropdown menu.
* Select **Wires and cables**.
* **Note:** While designed for power lines, this often works on fences.
	* _Success Rate:_ In Anthony’s [[concepts/testing|testing]], it worked perfectly on 2/5 images, failed on 2/5, and partially worked on 1/5.

**4\. Clean Up:**

* If the tool leaves small artifacts (grass, fence fragments), use the Remove Tool manually to paint over and fix the remaining distractions.

* * *

## Method 2: Generative Fill (The "Game Changer")

This method uses [[concepts/generative-ai|Generative AI]]. It is highly effective but may alter the appearance of the animal or the background. It consumes Generative Credits.
**1\. Select the Entire Image:**

* Press **Command + A** (Mac) or **Control + A** (PC) to select the whole canvas.

**2\. Open Generative Fill:**

* Click the **Generative Fill** button on the Contextual Task Bar.

**3\. Choose the Correct Model (Crucial Step):**

* Click the model dropdown menu.
* Select the Partner Model: **[[entities/gemini-3|Gemini 3]] (with [[entities/nano-banana-pro|Nano Banana Pro]])**.
	* _Note:_ The [[entities/speaker|speaker]] emphasizes using this specific third-party model over the standard [[entities/adobe-firefly|Adobe Firefly]] [[concepts/models|models]] for this task.

**4\. Enter a Specific Prompt:**

* Do not just type "Remove fence." Be descriptive to prevent the AI from changing the subject.
* **Recommended Prompt:** "Remove the chain link fence that is in front of the animal."
* Click **Generate**.

**5\. Handling Results:**

* **Variations:** Third-party models usually provide only one variation. If you want another, click the "Generate" icon again.
* **Troubleshooting:** If the AI changes the background or animal too much (e.g., changing the position of the animal), try being more specific with the prompt (e.g., "Remove the chain link fence that is behind the animal on the right side of the image").

### Summary of Advice

* **Method 1** is safer for maintaining the reality of the photo but has a lower success rate.
* **Method 2** is a "game changer" for difficult images but should be considered a last resort or for personal enjoyment only, as it creates AI-generated pixels that may not represent reality (making it ineligible for photojournalism or contests).

## Related Concepts
- [[concepts/wire-removal|wire removal]] — [Wikipedia](https://en.wikipedia.org/wiki/wire_removal)
- [[concepts/image-editing|image editing]] — [Wikipedia](https://en.wikipedia.org/wiki/image_editing)
- [[concepts/photoshop-techniques|Photoshop techniques]] — [Wikipedia](https://en.wikipedia.org/wiki/Photoshop_techniques)
- [[concepts/generative-fill|Generative Fill]] — [Wikipedia](https://en.wikipedia.org/wiki/Generative_Fill)
- [[concepts/wires-and-cables-detection|Wires and Cables detection]] — [Wikipedia](https://en.wikipedia.org/wiki/Wires_and_Cables_detection)

## Related Entities
- [[entities/anthony-morganti|Anthony Morganti]] — [Wikipedia](https://en.wikipedia.org/wiki/Anthony_Morganti)
- [[entities/adobe-photoshop|Adobe Photoshop]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Photoshop)
- Gemini 3 (with Nano Banana Pro) — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_3_%28with_Nano_Banana_Pro%29)