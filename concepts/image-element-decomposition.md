---
type: concept
domain: creative-pursuits
group: ai-image-generation-editing
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
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Image Element Decomposition

Image Element Decomposition is a technique for achieving granular control over specific components within AI-generated images. Rather than regenerating an entire image when refinements are needed, this method uses JSON-formatted control structures to specify and modify individual elements of synthetic images. The approach was developed for Google's Gemini image generation system to address practical constraints in AI image generation workflows.

## How It Works

The technique involves structuring image components as discrete, addressable elements within a JSON framework. Users can then target specific elements—such as objects, backgrounds, or stylistic properties—and apply modifications to them independently. This allows for iterative refinement of particular aspects without losing other successfully generated elements or requiring computationally expensive full regeneration cycles.

## Applications

Image Element Decomposition is particularly useful in creative workflows where precision and efficiency are valued. Rather than describing an entire scene again to adjust a single component, creators can make surgical edits to targeted elements, reducing iteration time and resource consumption. The technique proves effective for design work, illustration refinement, and other creative pursuits where specific visual elements require adjustment while maintaining the integrity of surrounding compositional elements.

## Source Notes
- 2026-04-08: Nano Banana 2: The JSON Control Hack
