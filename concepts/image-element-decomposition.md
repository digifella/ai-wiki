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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=creative-pursuits name=Creative Pursuits

# Image Element Decomposition

Image Element Decomposition is a technique designed to provide granular control over specific components within AI-generated images. Developed for Google's Gemini image generation system, this method addresses practical constraints in creative workflows by allowing users to refine individual elements without regenerating the entire image. Instead of relying on broad textual prompts, the approach utilizes JSON-formatted control structures to define the semantic layout of the target output.

The mechanism operates by parsing JSON objects that map out the desired composition, specifying attributes such as object placement, style, and interaction between distinct visual elements. This structured data format enables precise manipulation of the image's internal representation, facilitating iterative editing processes that are more efficient than prompt-based regeneration. By isolating specific components, creators can adjust details like lighting, texture, or object positioning with high fidelity.

This technique supports complex creative workflows by decoupling the generation of individual elements from the final composite image. It allows for the assembly of images from pre-defined or dynamically generated parts, offering a level of precision that is difficult to achieve through natural language prompts alone. The use of JSON ensures that the control structures are machine-readable and easily integrable into automated pipelines, enhancing reproducibility and consistency in digital art production.

## Source Notes
- 2026-04-08: Nano Banana 2: The JSON Control Hack
