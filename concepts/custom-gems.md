---
type: concept
domain: ai-agents
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: ai-foundations-concepts
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Custom Gems

Custom [[entities/google-gemini-gems|Gems]] is a technique for controlling image generation in [[entities/chatgpt|ChatGPT]] Image 2.0 through structured JSON-formatted prompts processed via the [[concepts/gemini-25-flash|Gemini 2.5 Flash]] API. Rather than relying solely on [[concepts/human-readable-instructions|natural language instructions]], this approach enables users to specify parameters and requirements in a machine-readable format, providing [[concepts/granular-control|granular control]] over the [[concepts/output-generation|output generation]] process.

## Implementation

The method works by [[concepts/encoding|encoding]] image generation specifications into JSON structures that are then passed to Gemini 2.5 Flash for processing. This intermediary step allows for more precise manipulation of visual elements, such as [[concepts/writing|composition]], [[concepts/style|style]], and lighting, which may be difficult to achieve consistently with standard text-based prompts. By leveraging the API's ability to interpret [[concepts/json-structuring|structured data]], users can define exact constraints and attributes for the [[concepts/image-generation-model|image generation model]].

This structured approach facilitates advanced control over the creative process, allowing for repeatable and predictable results. It is particularly useful for workflows requiring specific aesthetic or technical outcomes, as the [[concepts/json-format|JSON format]] reduces [[concepts/ambiguity|ambiguity]] and ensures that all necessary parameters are explicitly defined before the image generation request is executed.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Google-Gemini-and-NotebookLM-Key-Updates-and-Enhanced-AI-Integration|Google Gemini and NotebookLM Key Updates and Enhanced AI Integration]] · [▶ source](https://www.youtube.com/watch?v=6YWPGjqOEmk)
- 2026-04-26: [[lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control|Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control]] · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)
