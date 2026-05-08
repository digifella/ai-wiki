---
wiki-ingested: true
title: "Nano Banana 2: JSON Control for Precise AI Image Editing in Gemini"
created: "2026-04-07 21:00"
date: 2026-04-07
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
into a structured code format, allowing for granular manipulation of
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
extracting a complex fisheye perspective from one image's JSON and applying
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
- [[concepts/hallucination|AI Hallucination]] — [Wikipedia](https://en.wikipedia.org/wiki/AI_Hallucination)
- [[concepts/json-format|JSON format]] — [Wikipedia](https://en.wikipedia.org/wiki/JSON_format)
- [[concepts/prompt-engineering|Prompt Engineering]] — [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Engineering)
- [Object Swapping](https://en.wikipedia.org/wiki/Object_Swapping) — [Wikipedia](https://en.wikipedia.org/wiki/Object_Swapping)
- [[concepts/typography|Typography]] — [Wikipedia](https://en.wikipedia.org/wiki/Typography)
- [Camera Perspective](https://en.wikipedia.org/wiki/Camera_Perspective) — [Wikipedia](https://en.wikipedia.org/wiki/Camera_Perspective)
- Lighting and [[concepts/shadows|Shadows]] — [Wikipedia](https://en.wikipedia.org/wiki/Lighting_and_Shadows)
- [[concepts/material-properties|Material Properties]] — [Wikipedia](https://en.wikipedia.org/wiki/Material_Properties)
- Image [[concepts/integrity|Integrity]] — [Wikipedia](https://en.wikipedia.org/wiki/Image_Integrity)
- [[concepts/texture|Texture]] Manipulation — [Wikipedia](https://en.wikipedia.org/wiki/Texture_Manipulation)
- Interior [[concepts/design|Design]] — [Wikipedia](https://en.wikipedia.org/wiki/Interior_Design)
- Visual [[concepts/logical-consistency|Consistency]] — [Wikipedia](https://en.wikipedia.org/wiki/Visual_Consistency)
- [[concepts/granular-manipulation|Granular Manipulation]] — [Wikipedia](https://en.wikipedia.org/wiki/Granular_Manipulation)
- [Brand Identity](https://en.wikipedia.org/wiki/Brand_Identity) — [Wikipedia](https://en.wikipedia.org/wiki/Brand_Identity)
