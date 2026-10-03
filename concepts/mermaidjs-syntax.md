---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "concept"
  - "mermaid"
  - "syntax"
  - "diagram"
  - "visualization"
  - "mindmap"
  - "documentation"
aliases:
  - "Mermaid syntax"
  - "Mermaid.js diagrams"
summary: Reference guide for Mermaid.js syntax, including mindmap generation and diagram creation methods.
updated: 2026-07-11
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Mermaidjs Syntax

Mermaid.js is a JavaScript-based diagramming tool that renders [[concepts/diagrams|diagrams]] from text-based syntax, eliminating the need for separate graphical applications. The syntax uses a Markdown-inspired format designed for readability, allowing developers and documentation authors to embed diagram definitions directly into HTML, [[concepts/markdown-files|Markdown files]], and documentation platforms. Mermaid processes these text definitions client-side in the browser, converting them into SVG diagrams dynamically.

## Core Diagram Types

Mermaid supports multiple diagram types including flowcharts, sequence diagrams, class diagrams, state diagrams, entity relationship diagrams, Gantt charts, and pie charts. Each diagram type has its own syntax conventions, though they share common principles. Flowcharts use [[entities/nodejs|node]] declarations and arrow operators to define connections, while sequence diagrams describe interactions between actors using message syntax. The consistent approach across diagram types makes [[concepts/learning|learning]] progressively easier as users become familiar with core patterns.

## Mindmap and Advanced Features

Mermaid includes support for [[concepts/mindmap-generation|mindmap generation]], a hierarchical diagram format useful for [[concepts/brainstorming|brainstorming]] and organizational visualization. Mindmaps are defined with indentation-based syntax that represents parent-child [[concepts/relationships|relationships]]. Beyond basic diagrams, Mermaid offers styling options, theming capabilities, and configuration settings that allow [[concepts/customization|customization]] of colors, fonts, and visual properties without modifying the core diagram syntax.

## Integration and Usage

Because Mermaid renders in the browser using [[concepts/javascript|JavaScript]], integration is straightforward for web-based platforms. Many documentation tools including [[entities/github|GitHub]], GitLab, [[entities/notion|Notion]], and [[concepts/obsidian|Obsidian]] have native or plugin-based Mermaid support, allowing diagrams to be displayed directly without [[concepts/data-preprocessing|preprocessing]]. This approach maintains diagram definitions as human-readable text while providing visual output, making [[concepts/app-updates|version control]] and collaborative editing practical.
## Source Notes
