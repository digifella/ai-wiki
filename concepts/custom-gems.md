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
updated: 2026-07-14
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom Gems

Custom Gems is a technique for controlling image generation in ChatGPT Image 2.0 through structured JSON-formatted prompts processed via the Gemini 2.5 Flash API. Rather than relying solely on natural language instructions, this approach enables users to specify parameters and requirements in a machine-readable format, providing granular control over the output generation process.

## Implementation

The method works by encoding image generation specifications into JSON structures that are then passed to Gemini 2.5 Flash for processing. This intermediary step allows for more precise parameter definition and constraint specification than conventional text prompts alone. The JSON format standardizes how requirements are communicated to the image generation system, reducing ambiguity in instruction interpretation.

## Use Cases

Custom Gems are particularly useful in workflows requiring consistent, repeatable image generation with specific technical or aesthetic requirements. By defining parameters explicitly in machine-readable form, users can achieve more predictable results across multiple generation attempts and more easily automate image creation pipelines within larger AI agent systems.

## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Google-Gemini-and-NotebookLM-Key-Updates-and-Enhanced-AI-Integration|Google Gemini and NotebookLM Key Updates and Enhanced AI Integration]] · [▶ source](https://www.youtube.com/watch?v=6YWPGjqOEmk)
- 2026-04-26: [[lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control|Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control]] · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)
