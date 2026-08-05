---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-16
title: marp system
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

Marp is a markdown-based presentation tool that generates slide decks from plain text files. Rather than using graphical editing interfaces, users write presentations in standard markdown syntax, which Marp then renders into formatted slides. This text-first approach makes presentations easier to version control, share via git repositories, and integrate into software development workflows.

## Core Functionality

The system reads markdown files containing slide content and converts them into presentation formats, typically HTML or PDF. Slide breaks are defined using markdown delimiters, while formatting is applied through markdown syntax and inline directives. Marp supports theming and customization options to control the visual appearance of generated slides without requiring users to work with design tools directly.

## LLM Integration

Marp has become relevant in LLM-driven workflows where language models generate presentation content programmatically. Because the output format is plain text markdown rather than proprietary binary files, LLMs can more reliably generate valid presentation syntax. This enables automated slide generation pipelines where an LLM produces markdown that Marp immediately converts into usable presentations, streamlining content creation for reports, documentation, and communication materials.

## Source Notes
- 2026-04-12: [[lab-notes/2026-04-12-Marp-System-AI-Generated-Markdown-Presentations|Marp System AI Generated Markdown Presentations]] · [▶ source](https://www.youtube.com/watch?v=RBcc_ezfh1s)
