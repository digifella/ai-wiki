---
type: concept
domain: creative-pursuits
tags:
  - "concept"
  - "image-editing"
  - "ai-generated-images"
  - "json-control"
  - "gemini"
  - "prompt-engineering"
aliases:
  - "Nano Banana 2"
  - "JSON Image Control"
summary: A technique for using JSON control structures to achieve precise editing control in AI-generated images within Google's Gemini.
updated: 2026-05-23
group: ai-image-generation-editing
---
# Image Element Decomposition

Image Element Decomposition is a technique for controlling the generation and editing of specific components within AI-generated [[concepts/images|images]] using JSON-formatted [[concepts/power|control]] structures. The method was developed for use with [[concepts/google-search|Google]]'s [[concepts/gemini|Gemini]] image generation system and addresses the challenge of achieving [[concepts/granular-control|granular control]] over individual elements in synthetic images without requiring [[concepts/full-image-regeneration|full image regeneration]].

## Technical Approach

The technique leverages JSON as a structured format to specify which elements of an image should be modified, their properties, and desired changes. Rather than describing edits in natural language, users encode [[concepts/instructions|instructions]] as machine-readable JSON objects that [[entities/gemini-app|Gemini]] can parse and apply with greater precision. This allows for targeted modifications to specific visual components—such as objects, colors, positions, or styles—while leaving other elements unchanged.

## Application and Limitations

Image Element Decomposition is primarily suited for [[concepts/iterative-refinement|iterative refinement]] workflows where users need repeated, precise [[concepts/adjustments|adjustments]] to generated imagery. The effectiveness of the approach depends on Gemini's ability to reliably interpret and execute JSON-specified edits, which may vary depending on image complexity and the specificity of requested modifications. The technique represents an alternative to conventional [[concepts/prompt-based-modeling|prompt engineering]] for users seeking more systematic control over image generation outputs.
## Source Notes
- 2026-04-08: Nano Banana 2: The JSON Control Hack