---
type: concept
domain: security-infrastructure
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
updated: 2026-05-23
group: data-pipelines-sync-storage
---
# Document To Slide Workflow

The Document To Slide [[concepts/workflow|Workflow]] is a process for converting written [[concepts/notes|notes]] and documents into presentation [[entities/google-slides|slides]] using [[entities/gartner|Google NotebookLM]] and [[concepts/gemini|Gemini]]. This workflow leverages AI-assisted tools to streamline the transformation of source material into professionally formatted presentations, reducing manual formatting work and enabling faster [[concepts/iteration|iteration]] on slide [[concepts/design|design]].

## Process Overview

The workflow begins with [[concepts/feedback|source notes]] or documents that are ingested into [[entities/google-notebooklm|Google NotebookLM]], which analyzes the content and structures key information. [[entities/gemini-app|Gemini]], [[concepts/google-search|Google]]'s AI model, is then used to customize the design and layout of resulting [[concepts/google-slides|slides]], allowing users to adapt the [[concepts/output|output]] for specific professional contexts. The combination of these tools enables rapid conversion from unstructured notes to formatted presentation decks.

## Key Components

Google NotebookLM serves as the initial processing layer, organizing source material into a structured format suitable for presentation. Gemini handles the design [[concepts/customization|customization]] [[concepts/phase|phase]], applying styling, layout principles, and formatting [[concepts/adjustments|adjustments]] to create professional-quality slides. This separation of functions allows for both efficient content extraction and flexible design [[concepts/power|control]] without requiring manual slide creation from scratch.
