---
wiki-ingested: true
title: "Photoshop cafe"
created: "2026-04-14 10:48"
date: 2026-04-14
source: onedrive-vault
tags:
  - "inbox"
  - "ai-tools"
  - "onedrive-import"
wiki-ready: true
domain: creative-pursuits
group: photoshop-layer-workflows
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# [[concepts/photoshop|Photoshop]] cafe

---
---
<https://www.youtube.com/watch?v=dWiOA5YZXwc>
This video provides a detailed overview of Photoshop's new "Harmonize" feature, found in the [[entities/photoshop-beta|Photoshop Beta]] version, explaining its functionality, limitations, and how to work around them for optimal results.
**Key Features and [[concepts/workflow|Workflow]]:**

* **Accessing Harmonize:** The feature is currently available in **[[entities/adobe-photoshop|Adobe Photoshop]] (Beta)**. Users can download it via the [[entities/creative-cloud-app|Creative Cloud app]] by navigating to "Apps" and then selecting the "Beta" tab.
* **Basic Application:** Start with a subject image and easily **remove its background** using the "[[concepts/remove-background|Remove Background]]" button in the [[concepts/contextual-task-bar|contextual task bar]]. Use the **[[concepts/move-tool|Move Tool]]** to drag the cut-out subject layer into a new background image document (by dragging it onto the tab of the target image). **Resize and reposition** the subject using **Ctrl+T (Cmd+T on Mac)** for Free Transform. Click the "Harmonize" button in the contextual task bar. Photoshop's [[concepts/generative-ai|Generative AI]] (Firefly) [[entities/will|will]] automatically **adjust the subject's lighting, color, and add realistic [[concepts/shadows|shadows]]** to match the new background scene. The feature provides **three different variations** of the harmonized result, allowing users to choose the best fit.

**Limitations and Workarounds:**

1. **[[concepts/solution|Resolution]] Limitation:**
	**Problem:** Harmonize works by generating an _entire layer_ based on a 1024x1024 pixel grid. This means if your subject is small relative to the canvas, the _generated_ parts (like shadows or relit areas) can appear pixelated or lower resolution when viewed closely on a high-resolution image. The background elements _within_ the generated patch are also re-generated at this lower resolution. **Workaround (Smart Object Trick):** After cutting out your subject and placing it on the new background, select the subject layer. Make a **selection around the subject and a _small_ amount of the surrounding background** using the Rectangular Marquee tool. The key is to select just enough background for Harmonize to understand the scene's lighting/color, but not so much that the 1024x1024 generative patch becomes too stretched. Press **Ctrl+J (Cmd+J on Mac)** to duplicate _only the selected area of the background_ onto a new layer. Select _both_ your subject layer and this newly created small background layer. **Right-click** on the selected layers and choose **"Convert to Smart Object."** **Double-click the Smart Object thumbnail** in the Layers panel to open it as a new document. Now, with the Smart Object open (which Photoshop perceives as a smaller, contained document), apply **Harmonize**. This will generate the harmonized result at a higher effective resolution within this smaller context. Press **Ctrl+S (Cmd+S on Mac)** to save the Smart Object. Close the Smart Object tab. The main document will update with the higher-resolution harmonized subject and its integrated elements. **Note on Transparency:** Harmonize does not automatically handle complex transparencies like in a glass (as seen in the couple example). [[concepts/manual-masking|Manual masking]] or refinement of the subject's mask may still be necessary.
	
2. **Shadow & [[concepts/light|Light]] [[concepts/integration|Integration]]:**
	**Problem:** The generated shadows and lighting adjustments are _embedded_ within the harmonized layer. If you decide to move your subject after applying Harmonize, the shadows will move unnaturally with it, revealing the original background underneath. **Workaround:** If you need to reposition the subject, you must first hide the harmonized layer, move the original subject layer, and then re-apply Harmonize (which consumes another generative credit). The Smart Object trick also helps here because the harmonized elements are contained within the Smart Object, making movement more flexible.
	

**Harmonize's Role in Creative Work:**

* **Strengths:** Excellent for achieving **realistic blending** quickly and efficiently. Can generate complex realistic elements like water reflections (e.g., the boat example shows it creating the correct underside reflection). Speeds up the compositing process, especially for realistic scenes. Very useful for **quick mock-ups** and concepting. Empowers **less experienced users** to create more believable composites than before.
* **Limitations ([[concepts/skills|Skills]] Not Replaced):** It doesn't replace advanced **retouching skills** for high-resolution images where fine detail is critical (due to the 1024x1024 generative patch limitation). It may not be suitable for **stylized composites** where the artist wants to apply specific, non-realistic lighting or color grading effects. Human expertise is still vital for artistic direction and precise control.

**Call to Action:**
The [[concepts/creator|creator]], [[entities/colin-smith|Colin Smith]], encourages viewers to learn more about **#TeamWater** at **teamwater.org**. This initiative aims to raise $40 million to provide fresh, clean water to millions of people, noting that $1 can provide clean water for one person for a year, and $20 for a decade.

* * *

Commenter suggests to duplicate the cutout and apply as a percentage to the original image to [[concepts/tone|tone]] down harmonisation and also to minimise resolution loss.