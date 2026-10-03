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
updated: 2026-10-04
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: ai-image-generation-editing
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Image Element Decomposition

Image Element Decomposition is a technique for achieving [[concepts/granular-control|granular control]] over specific components within AI-generated images. Rather than regenerating an entire image when refinements are needed, this method uses JSON-formatted control structures to specify and modify individual elements of synthetic images. The approach was developed for [[concepts/google-search|Google]]'s [[concepts/gemini|Gemini]] image generation system to address practical constraints in [[concepts/ai-image-generation|AI image generation]] workflows.

## Mechanism

The technique involves structuring image components as discrete, addressable elements within a JSON frame. This structure allows users to target specific attributes, such as color, position, or [[concepts/texture-slider|texture]], without altering the underlying generative model's global output. By isolating these variables, the system can apply targeted edits that maintain [[concepts/logical-consistency|consistency]] with the original [[concepts/writing|composition]] while allowing for precise [[concepts/adjustments|adjustments]].

## Workflow Integration

This method streamlines the [[concepts/iterative-refinement|iterative process]] of digital art creation by reducing the computational overhead associated with full regeneration. Users can define complex scenes through hierarchical JSON objects, enabling the AI to interpret and render specific [[concepts/instructions|instructions]] with higher fidelity. This capability supports more efficient workflows for creative professionals who require exact control over visual details in synthetic media.
## Source Notes
- 2026-04-08: Nano Banana 2: The JSON Control Hack
