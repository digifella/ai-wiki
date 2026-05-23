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
updated: 2026-05-23
group: ai-foundations-concepts
---
# Custom Gems

Custom Gems refers to a technique for achieving advanced [[concepts/power|control]] over [[entities/chatgpt-image-20|ChatGPT Image 2.0]] through the use of JSON-formatted prompts. This approach leverages [[concepts/gemini-25-models|Gemini 2.5]] Flash as the underlying API to [[concepts/structure|structure]] and process detailed [[concepts/instructions|instructions]] for image generation tasks. The method enables users to specify [[concepts/parameters|parameters]] and requirements in a machine-readable format, moving beyond natural language alone to provide more precise control over [[concepts/output|output]] characteristics.

## Application and Purpose

The technique was documented and demonstrated by [[entities/craig-does-ai|Craig Does AI]], who tested the [[concepts/capabilities|capabilities]] of ChatGPT Image 2.0 and identified how JSON prompt structures could be used to achieve more consistent and controlled results. By formatting prompts as JSON objects, users can specify multiple aspects of the desired output simultaneously—such as [[concepts/style|style]] parameters, composition requirements, or specific technical attributes—which the model can interpret more systematically than conventional [[concepts/text|text]] prompts alone.

## Technical Implementation

The approach operates [[concepts/assistive-technology|at]] the intersection of [[entities/chatgpt|ChatGPT]]'s image generation capabilities and [[concepts/gemini|Gemini]]'s prompt processing framework. JSON serves as the structural format for [[concepts/encoding|encoding]] complex instructions that would otherwise require verbose or ambiguous [[concepts/natural-language-descriptions|natural language descriptions]]. This enables a more deterministic [[concepts/workflow|workflow]] for users requiring repeatability or precise specification of image generation parameters.
## Source Notes
- 2026-04-07: [[lab-notes/2026-04-07-Google-Gemini-and-NotebookLM-Key-Updates-and-Enhanced-AI-Integration|Google Gemini and NotebookLM Key Updates and Enhanced AI Integration]] · [▶ source](https://www.youtube.com/watch?v=6YWPGjqOEmk)
- 2026-04-26: [[lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control|Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control]] · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)