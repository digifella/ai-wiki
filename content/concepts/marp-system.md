---
type: concept
domain: tools-platforms
group: developer-tooling-clis
tags:
  - "marp"
  - "slide-generation"
  - "developer-tools"
  - "presentation-markup"
  - "markdown"
  - "presentation-tools"
aliases:
  - "Marp"
summary: A system used for LLM-driven slide generation.
updated: 2026-05-01
title: marp system
---
# Marp System

Marp is a tool and platform designed for creating presentations through [[concepts/markdown-guide|markdown syntax]]. The system converts plain text [[concepts/markdown|markdown]] files into [[concepts/slide-decks|slide decks]], allowing users to write presentation content in a structured text format rather than using traditional slide editing interfaces. This approach emphasizes simplicity and version control compatibility, as markdown files can be easily tracked in git repositories and edited in standard text editors.

## LLM Integration

The [[concepts/llm-driven-slide-generation|Marp system]] has become relevant to LLM-driven workflows as [[concepts/large-language-model-llm|large language models]] can generate markdown presentation content directly. This enables users to prompt AI systems to produce entire presentations in markdown format, which Marp then renders into [[entities/google-slides|slides]]. This capability bridges the gap between natural language generation and presentation creation, allowing for rapid prototyping of slide decks without manual formatting steps.

## Key Characteristics

[[concepts/markdown-based-presentation-tools|Marp presentations]] are defined by their simplicity and portability. The markdown-to-slides conversion process supports styling and layout [[concepts/customization|customization]] while maintaining the readability of the source markdown. The system's text-based [[entities/nature|nature]] makes it particularly suitable for programmatic generation, including output from language models, while remaining accessible for manual editing and refinement.

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-Marp-System-AI-Generated-Markdown-Presentations|Marp System AI Generated Markdown Presentations]] · [▶ source](https://www.youtube.com/watch?v=RBcc_ezfh1s)