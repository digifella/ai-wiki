---
type: concept
domain: ai-agents
group: applied-ai-workflows
tags:
  - "ai-generated-content"
  - "presentation-tools"
  - "claude"
  - "cursor"
  - "html-export"
  - "pdf-generation"
aliases:
  - "AI Slide Generation"
  - "Claude Presentations"
  - "Automated Presentation Creation"
summary: Method for generating presentations using Claude AI integrated with Cursor, outputting to HTML and PDF formats.
updated: 2026-05-01
---
# AI Powered Presentations

AI-powered presentations is a method for generating presentation [[entities/google-slides|slides]] using [[concepts/anthropic-ai|Claude AI]], typically integrated with the [[concepts/cursor|Cursor]] code editor. Users provide natural [[concepts/natural-language-prompting|language prompts]] describing their presentation content, [[concepts/structure|structure]], and requirements. [[concepts/claude-ai|Claude]] processes these inputs to generate organized slide layouts, [[entities/speaker|speaker]] notes, and formatting specifications that can be output to multiple formats including HTML and PDF.

## Generation Workflow

The generation process begins when a user specifies presentation [[concepts/parameters|parameters]] through text prompts—such as topic, target audience, number of slides, and desired [[concepts/style|visual style]]. Claude analyzes these requirements and generates presentation code and markup, which can then be refined through iterative [[concepts/prompting|prompting]]. The Cursor integration allows developers to edit and preview generated presentations within their [[concepts/coding-workspace|development environment]] before final output.

## Output Formats

Generated presentations can be exported to HTML for web-based viewing and sharing, or converted to PDF for static [[concepts/distribution|distribution]]. HTML output enables interactive features and responsive design, while PDF provides a portable format suitable for offline viewing and printing. The choice of format depends on the intended use case and audience requirements.
