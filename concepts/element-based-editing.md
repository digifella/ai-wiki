---
type: concept
domain: creative-pursuits
group: lightroom-color-workflows
tags:
  - "concept"
  - "ai-image-editing"
  - "json-control"
  - "gemini"
  - "nano-banana"
  - "precise-editing"
  - "prompt-engineering"
aliases:
  - "JSON Control for AI Image Editing"
  - "Nano Banana 2"
summary: A technique using JSON control in Gemini for precise AI-based image editing.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Element Based Editing

Element Based Editing is a structured approach to AI image generation that uses JSON formatting to define and control visual components with precision. Rather than relying exclusively on natural language descriptions, this technique decomposes a desired image into discrete, named elements—such as objects, figures, backgrounds, and lighting conditions—and specifies their properties programmatically. This method is particularly effective with AI models that support structured input, such as Google's Gemini, which can interpret and act on JSON-formatted specifications.

## How It Works

The technique involves creating a JSON structure that describes each visual element in a scene along with relevant attributes such as position, size, color, style, and relationship to other elements. Users define these parameters explicitly rather than hoping the model will interpret vague language correctly. The AI system then processes this structured data to generate images that more closely match the specified composition, resulting in greater consistency between iterations and more predictable outcomes than text-only prompting.

## Advantages and Applications

Element Based Editing offers several practical benefits for creative workflows. It enables reproducible results, making it easier to generate variations on a theme or maintain visual consistency across multiple images. The explicit nature of JSON specifications reduces ambiguity and the need for multiple refinement iterations. This approach is particularly useful for projects requiring precise control over composition, such as concept art, design prototyping, or generating assets with specific technical requirements.

## Source Notes
- 2026-04-07: Nano Banana 2: The JSON Control Hack
