---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: data-pipelines-sync-storage
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Document To Slide Workflow

The Document To Slide Workflow is a process for converting written [[concepts/notes|notes]] and documents into [[concepts/slide-decks|presentation slides]] using [[concepts/ai-powered-tools|AI-powered tools]], primarily [[concepts/notebooklm|Google NotebookLM]] and [[concepts/gemini|Gemini]]. This workflow leverages automated analysis and generation capabilities to transform source material into formatted presentations, reducing the manual effort required for slide creation and enabling faster [[concepts/iteration|iteration]] on content organization and design.

## Process Overview

The workflow typically begins by uploading source documents or notes into NotebookLM, which analyzes the content and identifies key themes, arguments, and supporting evidence. The system then generates a structured outline or script that serves as the foundation for the presentation. This initial analysis ensures that the resulting slides remain faithful to the source material while organizing information in a logical [[concepts/flow|flow]] suitable for visual display.

## Generation and Refinement

Once the content structure is established, the workflow utilizes Gemini to generate the actual slide content. This stage involves drafting text for individual slides, suggesting appropriate visual layouts, and creating [[entities/speaker|speaker]] notes. Users can then review and refine the output, making [[concepts/adjustments|adjustments]] to [[concepts/tone|tone]], detail level, or design elements. The iterative nature of this process allows for [[concepts/rapid-prototyping|rapid prototyping]] of presentations, where changes to the source document can quickly propagate through the generated slides.
