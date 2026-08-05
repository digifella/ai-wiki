---
type: concept
domain: ai-agents
group: ai-foundations-concepts
tags:
  - "concept"
  - "json-prompting"
  - "gemini-api"
  - "image-analysis"
  - "metadata-extraction"
  - "ai-prompting"
  - "structured-output"
aliases:
  - "JSON Prompting Techniques"
  - "Gemini Image Control"
summary: A concept covering JSON-based prompting techniques for controlling image analysis and metadata extraction in Google's Gemini AI model.
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Image Breakdown

Image Breakdown is a prompting technique that uses JSON-based structured formats to guide AI vision models in analyzing images and extracting metadata. Rather than relying solely on natural language instructions, this approach provides explicit schemas that define which data points should be extracted and specify their required format in the model's response. This method has proven particularly effective with Google's Gemini AI model, which supports JSON output modes that allow developers to receive structured, predictable responses from image analysis tasks.

## How it Works

In an Image Breakdown workflow, a user provides both an image and a JSON schema that describes the desired output structure. The schema acts as a template, specifying fields, data types, and any constraints on the extracted information. The AI model then analyzes the image according to this schema and returns metadata and observations formatted as valid JSON. This approach reduces ambiguity in what the model should extract and makes the results easier to integrate into downstream applications and databases.

## Applications

Image Breakdown is useful for automating tasks that require consistent, machine-readable output from visual analysis. Common use cases include document processing, product cataloging, scene understanding, and quality control workflows where structured data extraction from images is needed. The technique is particularly valuable in systems where consistency and data format compliance are important for subsequent processing steps.

## Source Notes
- 2026-04-07: Total Control: Why I Prompt Gemini with JSON (And Why You
- 2026-04-09: Photoshop
- 2026-04-10: [[lab-notes/2026-04-10-Photoshops-Blend-If-Pixel-Perfect-Transparency-via-Brightness-and-Colo|Photoshops Blend If Pixel Perfect Transparency via Brightness and Colo]] · [▶ source](https://www.youtube.com/watch?v=Wkti_IX3Qzk)
- 2026-04-25: [[lab-notes/2026-04-25-Advanced-AI-Video-Production-Using-GPT-Image-2-and-Iterative-Prompt-Engineering|Advanced AI Video Production Using GPT Image 2 and Iterative Prompt Engineering]] · [▶ source](https://www.youtube.com/watch?v=XdQq90Ug8eY)
- 2026-04-26: [[lab-notes/2026-04-26-Craig-Does-AI-JSON-Prompts-for-Advanced-ChatGPT-Image-2.0-Control|Craig Does AI: JSON Prompts for Advanced ChatGPT Image 2.0 Control]] · [▶ source](https://www.youtube.com/watch?v=qXUww5tnLHs)
