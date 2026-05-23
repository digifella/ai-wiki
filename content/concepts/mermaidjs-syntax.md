---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: developer-tooling-clis
---
# Mermaidjs Syntax

Mermaid.js is a JavaScript-based diagramming and charting tool that uses a simple, [[concepts/markdown|Markdown]]-inspired syntax to generate [[concepts/diagrams|diagrams]] dynamically. It allows developers and documentation authors to create visual representations directly from [[concepts/text|text]] definitions, eliminating the need for separate diagramming [[concepts/software|software]]. The syntax is designed to be human-readable and can be embedded in web pages, documentation platforms, and Markdown [[concepts/files|files]].

## Core Diagram Types

Mermaid supports several diagram types, each with its own syntax conventions. Flowcharts use [[entities/nodejs|node]] definitions and arrow connectors to represent processes and decisions. Sequence diagrams visualize interactions between entities over time. Gantt charts display project timelines and task dependencies. State diagrams model system states and transitions. Class diagrams represent object-oriented structures. Additionally, mindmaps allow hierarchical [[concepts/organization|organization]] of concepts starting from a central root node, with branches expanding outward to represent subtopics and [[concepts/relationships|relationships]].

## Syntax Basics

Diagrams in Mermaid are defined using keyword declarations that specify the diagram type, followed by node or element definitions. Connections between elements use standardized operators: `-->` for simple arrows in flowcharts, `-->|label|` to add text labels to relationships, and specialized syntax for other diagram types. The syntax supports configuration options for customizing appearance, including colors, fonts, and styling. [[concepts/code|Code]] blocks using triple backticks with the `mermaid` language identifier enable rendering in compatible Markdown environments and documentation tools like [[entities/github|GitHub]], GitLab, and [[entities/notion|Notion]].
## Source Notes
- 2026-04-14: How to get TACK SHARP photos with any camera!