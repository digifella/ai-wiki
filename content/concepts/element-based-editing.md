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
updated: 2026-05-01
---
# Element Based Editing

Element Based Editing is a technique for controlling AI-generated [[concepts/images|images]] through [[concepts/structured-data|structured JSON]] formatting rather than natural [[concepts/natural-language-prompting|language prompts]] alone. By breaking down visual composition into discrete, named elements and specifying their properties in [[concepts/json-format|JSON format]], users can achieve more precise and reproducible results when using compatible [[concepts/ai-image-generation|AI image generation]] models like [[concepts/google-search|Google]]'s [[concepts/gemini|Gemini]].

## How It Works

The method involves defining image components as JSON objects with properties such as position, size, color, style, and other visual attributes. Instead of relying solely on descriptive text, the [[concepts/json-structuring|structured data]] format allows the AI to interpret spatial [[concepts/relationships|relationships]] and element-specific [[concepts/instructions|instructions]] more literally. This approach reduces [[concepts/ambiguity|ambiguity]] in [[concepts/prompting|prompting]] and enables users to make granular [[concepts/adjustments|adjustments]] to specific parts of an image without regenerating the entire composition.

## Applications and Limitations

Element Based Editing is particularly useful for projects requiring consistent layouts, precise positioning of multiple objects, or [[concepts/iterative-refinement|iterative refinement]] of specific image regions. The technique's effectiveness depends on the AI model's ability to parse and respond to JSON-formatted instructions, which remains an evolving capability. Current applications are limited to models explicitly designed to accept this input format, and results can vary based on the complexity of the JSON [[concepts/structure|structure]] and the specificity of the instructions provided.

## Source Notes
- 2026-04-07: Nano Banana 2: The JSON Control Hack