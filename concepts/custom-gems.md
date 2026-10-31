---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "chatgpt-image-2.0"
  - "json-prompts"
  - "gemini-2.5-flash"
  - "prompt-engineering"
  - "image-control"
aliases:
  - "JSON Prompts for Advanced ChatGPT Image 2.0 Control"
summary: The document details the use of JSON prompts via Gemini 2.5 Flash for advanced control over ChatGPT Image 2.0.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom Gems

Custom Gems is a technique for controlling image generation in ChatGPT Image 2.0 through structured JSON-formatted prompts processed via the Gemini 2.5 Flash API. Rather than relying solely on natural language instructions, this approach enables users to specify parameters and requirements in a machine-readable format, providing granular control over the output generation process.

The implementation involves defining a JSON schema that outlines specific attributes such as style, composition, lighting, and subject details. This schema is then passed to the Gemini 2.5 Flash model, which interprets the structured data to guide the image generation engine. By decoupling the logical constraints from the creative description, users can achieve more consistent and predictable results compared to standard prompt engineering methods.

This method is particularly useful for workflows requiring precise adherence to visual specifications or for integrating image generation into automated systems. The use of the Gemini 2.5 Flash API ensures efficient processing of these complex structures, allowing for rapid iteration and refinement of image parameters without the ambiguity often associated with free-form text prompts.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Google-Gemini-and-NotebookLM-Key-Updates-and-Enhanced-AI-Integration|Google Gemini and NotebookLM Key Updates and Enhanced AI Integration]] · [▶ source](https://www.youtube.com/watch?v=6YWPGjqOEmk)
- 2026-04-26: [[lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control|Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control]] · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)
