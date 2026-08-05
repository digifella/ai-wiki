---
type: concept
domain: ai-agents
tags:
  - "concept"
  - "llm-generation"
  - "slide-presentations"
  - "markdown"
  - "marp"
  - "ai-automation"
  - "multimodal"
aliases:
  - "AI-Generated Presentations"
  - "Markdown Slide Generation"
  - "Marp System"
summary: System for automatically generating presentation slides from markdown using LLMs and tools like Marp.
updated: 2026-07-11
group: multimodal-generative-media
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# LLM Driven Slide Generation

LLM-driven slide generation is an automated approach to creating presentation decks by leveraging [[concepts/large-language-model-llm|large language models]] to convert structured text—typically [[concepts/markdown|markdown]]—into formatted [[concepts/google-slides|slides]]. Rather than manually authoring [[entities/google-slides|slides]] through traditional presentation software, this approach uses LLMs to interpret content and generate appropriate slide layouts, transitions, and formatting. Tools like [[concepts/marp-system|Marp]], a markdown-based presentation ecosystem, serve as the [[concepts/visual-rendering|rendering]] [[concepts/engine|engine]] that converts the generated markdown into [[concepts/visual-slide-design|visual presentations]].

## Workflow and Process

The typical workflow involves providing source content to an LLM, which then generates markdown following [[entities/marp|Marp]]'s syntax conventions. The LLM handles structuring the content into logical slide divisions, determining appropriate heading hierarchies, and formatting code blocks, lists, and other elements suitable for presentation. The generated markdown is then processed by Marp to produce the final presentation, typically as HTML or PDF output.

## Technical Architecture

The system combines three primary components: the LLM that performs content interpretation and markdown generation, the markdown specification (usually Marp dialect) that defines slide structure, and the [[concepts/fat-rendering|rendering]] engine that converts markdown into visual output. This [[concepts/separation-of-concerns|separation of concerns]] allows flexibility in swapping LLM providers while maintaining consistent markdown output, and enables [[concepts/app-updates|version control]] of presentations as text files rather than proprietary binary formats.

## Applications and Limitations

This approach is effective for generating presentations from [[concepts/chat-prompt|structured input]] like [[concepts/technical-documentation|technical documentation]], lecture [[concepts/notes|notes]], or standardized content [[concepts/templates|templates]]. The main limitations include challenges with complex visual layouts that markdown cannot easily express, dependency on LLM quality for content organization, and the requirement that source material be sufficiently structured for meaningful automation.
## Source Notes
- 2026-04-12: [[concepts/claude-code|Claude Code + Karpathy Slides Just Changed Presentations Forever (MARP System)]]
