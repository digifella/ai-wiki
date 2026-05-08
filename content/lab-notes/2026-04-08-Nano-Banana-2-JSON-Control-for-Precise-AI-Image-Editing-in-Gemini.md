---
wiki-ingested: true
title: "Nano Banana 2: JSON Control for Precise AI Image Editing in Gemini"
created: "2026-04-08 09:12"
date: 2026-04-08
source: lab-summary
api:
tags:
  - "lab"
  - "inbox"
  - "lab_summary"
wiki-ready: true
domain: ai-agents
group: google-ai-ecosystem
---
## Nano Banana 2: JSON Control for Precise AI Image Editing in Gemini
**Clip title:** [[concepts/camera-angle-control|Nano Banana 2]]: The [[concepts/lighting-control|JSON Control Hack]]
**Author / channel:** renderdrop
**URL:** https://www.youtube.com/watch?v=uQc4TGhvDHc

### Summary
The video introduces a "game-changer" for [[concepts/image-data-manipulation|AI image editing]], addressing the
common frustration of [[concepts/ai-models|AI models]] "hallucinating" or ruining an entire image
when a user attempts a minor modification. The [[concepts/solution|solution]] presented involves
using the JSON (JavaScript Object Notation) code format within Google's
[[entities/gemini-app|Gemini app]], powered by the Nano Banana 2 model (specifically [[entities/gemini-3|Gemini 3]].1
Pro). This method grants users "ultimate control" by breaking down an image
into a structured code format, allowing for [[concepts/granular-manipulation|granular manipulation]] of
individual elements, camera angles, lighting, and other properties, thereby
preventing unintended alterations and maintaining the original image's
[[concepts/integrity|integrity]].

The [[concepts/tutorial|tutorial]] demonstrates this powerful technique through five distinct [[concepts/scenarios|use cases]]. First, for **Colors & Materials**, the video shows how to analyze an
interior [[concepts/design|design]] image to generate a detailed JSON code. Users can then
precisely edit specific objects' colors (e.g., changing an armchair from
cream to [[concepts/light|light]] blue) and materials (e.g., velvet or oak wood) by modifying
the JSON, with the AI executing only the specified changes while preserving
all other elements and the scene's perspective. The second use case tackles
more complex **Object/Furniture Swaps**, illustrating how to replace an
entire armchair with a new one. This involves generating JSON for both the
existing scene and the new object, then cleanly merging them (using a
separate Gemini chat to avoid errors) to ensure the new furniture is
perfectly integrated, including correct positioning and realistic [[concepts/shadows|shadows]],
even if its original orientation was different.

The third and fourth [[concepts/use-cases|use cases]] delve into environmental and technical
aspects. **Weather & Lighting** demonstrates transforming a sunny interior
into a moody, rainy day, or a golden hour scene. The key here is using a
specialized JSON prompt focused on lighting, weather, and shadows, and
understanding that precise wording is crucial to prevent the AI from making
unwanted changes (like removing curtains to "show" rain). For **Camera
Perspective**, a notoriously difficult task for AI, the video showcases
extracting a complex [fisheye perspective](https://en.wikipedia.org/wiki/Fisheye_Perspective) from one image's JSON and applying
it to a different interior scene. Despite the AI needing to "hallucinate"
the expanded edges, the core perspective transfer is achieved flawlessly,
demonstrating impressive control over photographic properties.

Finally, the video explores **Changing [[concepts/text|Text]] & Logos**, a challenge many AI
models struggle with regarding [[concepts/logical-consistency|consistency]] and [[concepts/texture|texture]]. By generating a
JSON focused on [[concepts/typography|typography]] and branding elements, the presenter
successfully changes "THE BREAD OF LIFE" (composed of toast letters) to
"SUB TO RENDER DROP," accurately replicating the bread texture and text
[[concepts/structure|structure]]. A more advanced example replaces a complex Louis Vuitton logo,
formed by boats in the sea, with a custom "R" logo, again showcasing the
ability to maintain the intricate object arrangement and overall coherence.
The conclusion emphasizes that this JSON-based method provides an
unprecedented level of detailed control, mitigating AI's tendency to
generalize or hallucinate, and encourages viewers to try the provided
prompts to experience this precision themselves.

## Related Concepts
- [[concepts/json|JSON Control]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_Control)
- [[concepts/ai-image-editing|AI Image Editing]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Image_Editing)
- [[concepts/json|JSON]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON)
- [[concepts/hallucination|AI Hallucination]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Hallucination)
- [[concepts/ai-image-editing|Precise Image Editing]] — [Wikipedia](https://en.wikipedia.org/wiki/Precise_Image_Editing)
- [[concepts/granular-manipulation|Granular Manipulation]] — [Wikipedia](https://en.wikipedia.org/wiki/Granular_Manipulation)
- Image [[concepts/integrity|Integrity]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Integrity)
- [Object Swapping](https://en.wikipedia.org/wiki/Object_Swapping) — [Wikipedia](https://en.wikipedia.org/wiki/Object_Swapping)
- [Camera Perspective](https://en.wikipedia.org/wiki/Camera_Perspective) — [Wikipedia](https://en.wikipedia.org/wiki/Camera_Perspective)
- Lighting & [[concepts/shadows|Shadows]] — [Wikipedia](https://en.wikipedia.org/wiki/Lighting_%26_Shadows)
- [[concepts/typography|Typography]] & Branding — [Wikipedia](https://en.wikipedia.org/wiki/Typography_%26_Branding)
- [[concepts/texture|Texture]] [[concepts/preservation|Preservation]] — [Wikipedia](https://en.wikipedia.org/wiki/Texture_Preservation)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- Fisheye Perspective — [Wikipedia](https://en.wikipedia.org/wiki/Fisheye_Perspective)
- [Material Modification](https://en.wikipedia.org/wiki/Material_Modification) — [Wikipedia](https://en.wikipedia.org/wiki/Material_Modification)
- Image [[concepts/logical-consistency|Consistency]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Consistency)
- [[concepts/structured-prompting-workflows|Structured Prompting]] — [Wikipedia](https://en.wikipedia.org/wiki/Structured_Prompting)
- [[concepts/json|JavaScript Object Notation]] — [Wikipedia](https://en.wikipedia.org/wiki/JavaScript_Object_Notation)
