---
type: concept
domain: security-infrastructure
group: data-pipelines-sync-storage
tags:
  - "concept"
  - "presentation-automation"
  - "notebooklm-workflow"
  - "document-to-slides"
  - "ai-design"
  - "google-gemini"
aliases:
  - "notes-to-slides-workflow"
  - "notebooklm-presentation-workflow"
summary: A workflow for converting notes into presentations using Google NotebookLM and Gemini.
updated: 2026-05-01
---
# Document To Slide Workflow

The Document To Slide Workflow is a process for converting written notes and documents into presentation [[entities/google-slides|slides]] using [[entities/gartner|Google NotebookLM]] and [[concepts/gemini|Gemini]]. This workflow leverages AI-assisted tools to streamline the transformation of source material into professionally formatted presentations, reducing manual formatting work and enabling faster [[concepts/iteration|iteration]] on slide design.

## Process Overview

The workflow begins with [[concepts/feedback|source notes]] or documents that are ingested into Google NotebookLM, which analyzes the content and structures key information. Gemini, [[concepts/google-search|Google]]'s AI model, is then used to customize the design and layout of resulting slides, allowing users to adapt the output for specific professional contexts. The combination of these tools enables rapid conversion from unstructured notes to formatted presentation decks.

## Key Components

Google NotebookLM serves as the initial processing layer, organizing source material into a structured format suitable for presentation. Gemini handles the design [[concepts/customization|customization]] phase, applying styling, layout principles, and formatting [[concepts/adjustments|adjustments]] to create professional-quality slides. This separation of functions allows for both efficient content extraction and flexible design control without requiring manual slide creation from scratch.
