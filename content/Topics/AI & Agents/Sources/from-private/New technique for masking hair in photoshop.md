---
wiki-ingested: true
domain: creative-pursuits
group: photoshop-layer-workflows
---
<https://www.youtube.com/watch?v=WSfSs9wmbO8>
This video provides a comprehensive guide on achieving precise [[concepts/hair-masking|hair masking]] in [[concepts/photoshop|Photoshop]], exploring both automatic AI-powered methods and traditional manual techniques. The presenter emphasizes that while AI has advanced significantly, a combination of approaches, along with clever [[concepts/problem-solving|problem-solving]], yields the best results.
Here's a detailed [[concepts/summary|summary]] of the [[concepts/highlights|key takeaways]] and techniques:
**1\. Photoshop [[concepts/setup|Setup]] for Enhanced AI Processing (0:28)**

* For optimal "Select Subject" results, go to **Photoshop > Settings (Mac) / Edit > Preferences ([[entities/windows|Windows]]) > Image Processing**.
* Under "Select Subject and [[concepts/remove-background|Remove Background]]," choose **Cloud (Detailed results)**. This utilizes Adobe's servers for more accurate AI processing.
* Restart Photoshop to ensure the settings take effect.

**2\. Automatic [[concepts/ai-powered-masking|AI Selection]] (Select Subject) (0:57)**

* **Method:** Select any of the selection tools (e.g., Quick Selection Tool), then click "Select Subject" in the options bar.
* **Demonstration (Woman with wavy hair):** The initial selection is "fairly good" (1:11). Masking the subject reveals a clean cutout (1:15). However, upon zooming in and comparing with the original image (Shift-click on mask to toggle visibility), fine hair strands are "eaten up" and lost (1:32). This indicates the automatic method isn't perfect for high-detail hair. **Conclusion:** While convenient, pure AI automatic selection may sacrifice intricate hair details, especially against complex backgrounds.

**3\. Traditional Method: Channels + Manual Refinement (2:02)**

* **Principle:** This method leverages color channels to create high-[[concepts/contrast|contrast]] masks for hair.
* **Steps:** **Duplicate a Channel (2:12):** Go to the "Channels" panel. Preview Red, Green, and Blue channels to find the one with the highest contrast between the hair and the background (e.g., hair is bright, background is dark). In this example, the Red channel offered the best contrast. Duplicate this channel. **Adjust Levels (2:33):** Press **[[entities/ctrlcmd|Ctrl/Cmd]] + L** to open Levels. Drag the **black slider (left)** to the right to make the background areas completely black, but be careful not to "eat" into the hair too much. Drag the **white slider (right)** to the left to make the hair completely white, again, without making it too harsh. **Load Selection & Mask (3:20):** Hold **Ctrl/Cmd** and click on the duplicated channel's thumbnail to load it as a selection. Go back to the "Layers" panel, select the subject layer, and click the "Add Layer Mask" icon (3:37). **Refine Mask with Brush Tool (3:46):** **Overlay Blend Mode for Edge Cleanup (4:16):** With the mask selected, choose the **Brush Tool (B)**. Set the foreground color to **Black**. Change the **brush blend mode** in the options bar to **Overlay**. Set the **Flow** to **10-20%**. This allows you to paint away gray areas (semi-transparent pixels from the mask) without affecting pure white or black areas, effectively cleaning up halos from the original background. **Normal Blend Mode for Subject Interior (5:22):** Once halos are cleaned, change the brush blend mode back to **Normal**. Set foreground color to **White**. Paint inside the subject to ensure it's fully opaque (white on the mask), making sure not to paint over the refined hair edges. **Invert Selection for Background (5:58):** Press **Ctrl/Cmd + Shift + I** to invert the selection (now selecting the background). Set foreground to **Black**. Paint to fully remove any remaining unwanted background areas without disturbing the intricate hair selection. **Conclusion:** This traditional method provides significantly better hair detail and overall [[concepts/accuracy|accuracy]] compared to the initial AI selection.

**4\. Removing Halos/Color Fringing on New Background (6:43)**

* **Problem:** Even with a good mask, remnants of the original background color (halos) can appear around the edges when placing the subject on a new background.
* **Solution 1: Screen Blend Mode (7:16)** Duplicate the subject layer (**Ctrl/Cmd + J**). Change the blend mode of the duplicated layer to **Screen**. This blend mode makes black pixels transparent, effectively removing dark halos. **Problem:** The entire subject may become too bright. **Solution 2: Group Masking for Localized Brightness (8:00)** Group the original subject layer (**Ctrl/Cmd + G**). Add a layer mask to this **Group**. Select the **Brush Tool (B)**, set foreground to **Black**, blend mode to **Normal**. Paint on the _group mask_ over the main body of the subject (avoiding hair edges) to selectively reveal the original, darker tones of the subject, blending seamlessly with the Screen-blended hair edges.
* **Solution 3: Color Adjustment Layer for Specific Fringes (8:50)** Create a new layer above the grouped subject (**Shift+Ctrl/Cmd+N**). Create a **Clipping Mask** by holding **Alt/Option** and clicking between this new layer and the grouped subject. Change the new layer's blend mode to **Color**. Select the **Brush Tool (B)**. Hold **Alt/Option** to temporarily switch to the Eyedropper Tool and sample a hair color adjacent to the fringe. Paint over the color fringe. This [[entities/will|will]] apply the sampled hair color to the fringe without affecting the lightness/darkness. Adjust the layer's **[[concepts/opacity|Opacity]]** to fine-tune the effect. Alternatively, use a **Hue/Saturation Adjustment Layer** (9:59). Create a clipping mask. Use the eyedropper icon within the Hue/Saturation panel to select the specific [[concepts/color-range-control|color range]] of the fringe (e.g., blue/green). Adjust the "Saturation" slider to -100 to desaturate the fringe, or move the "[[concepts/hue|Hue]]" slider to match the hair color.

**5\. Limitations of [[concepts/generative-ai|Generative AI]] for Hair (12:02)**

* **Demonstration (Girl with flowers, busy background):** "Select Subject" still works reasonably well but leaves noticeable issues with fine hair strands against the complex floral background (12:15). Using **Generative Fill** (Lasso selection around missing hair, then type "Hair" as a prompt): While it attempts to generate hair, upon zooming in, the quality is "terrible" and "garbage" (13:10), not visually convincing or seamless. AI currently struggles with the organic complexity of individual hair strands.
* **Manual Hair Painting for Complex Backgrounds (13:36)** Select the mask. Use the **Lasso Tool** to select larger areas of unwanted background near the hair. Fill with black (**Alt/Option + Backspace**) to remove them (13:47). Use specialized **Hair Brushes** (downloadable from presenter) with **White** foreground color to paint individual hair strands directly onto the mask (14:10). This requires patience but offers the highest accuracy. Create new layers (with clipping masks) to paint individual flyaway hairs using sampled colors from the hair itself, ensuring realism (14:41).

**Conclusion (15:23)**

* Despite advancements in AI, especially in Photoshop's "Select Subject," it is **not always enough** for highly precise or complex hair masking.
* Combining **automatic AI selection with traditional channel masking and meticulous manual refinement** (using techniques like the brush tool with different blend modes and specialized brushes) is key to achieving professional, high-[[concepts/solution|resolution]] results.
* The presenter emphasizes the importance of being **practical and clever**, using the right tool or combination of tools for the specific challenge, rather than relying solely on a single AI solution.
* Photoshop, through its diverse toolset and continuous [[concepts/ai-integration|AI integration]], still stands out as the best platform for complex image manipulation tasks like hair masking compared to other AI-only solutions.

## Related Concepts
- [[concepts/select-subject|Select Subject]] — [Wikipedia](https://en.wikipedia.org/wiki/Select_Subject)
- [[concepts/ai-powered-methods|AI-powered methods]] — [Wikipedia](https://en.wikipedia.org/wiki/AI-powered_methods)
- [[concepts/smart-objects|Image Processing]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Processing)
- [[concepts/precision-masking|Precision Masking]] — [Wikipedia](https://en.wikipedia.org/wiki/Precision_Masking)
- [[concepts/cloud-computing|Cloud Computing]] — [Wikipedia](https://en.wikipedia.org/wiki/Cloud_Computing)

## Related Entities
- [[entities/adobe|Adobe]] — [Wikipedia](https://en.wikipedia.org/wiki/Adobe)