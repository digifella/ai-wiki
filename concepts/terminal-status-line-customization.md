---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "claude-code"
  - "terminal-customization"
  - "status-line"
  - "cli-tools"
  - "developer-productivity"
  - "ai-assisted-coding"
  - "personalization"
aliases:
  - "Claude Code Status Line"
  - "Terminal Status Bar Customization"
  - "/statusline Command"
summary: A Claude Code feature that enables real-time modification of the terminal's bottom status bar using the /statusline add command.
updated: 2026-07-12
group: developer-tooling-clis
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Terminal status line customization

Feature within [[entities/claude-code]] that enables user-driven [[concepts/personalization|personalization]] of the [[concepts/cli|terminal]]'s bottom status bar.

- **Functionality (v1.0.71):** Allows real-time modification of the status line to display dynamic information.
- **Mechanism:** Uses `/statusline add [query]` [[concepts/commands|commands]] to append data.
- **[[concepts/use-cases|Use Cases]]:**
	- [[concepts/external-data-integration|External data integration]] (e.g., `/statusline add the weather in London with emojis`)
	- [[concepts/session|Session]] [[concepts/metadata|metadata]] (e.g., tracking session duration)
	- [[concepts/llm]] context (e.g., displaying the active model)

Backlink: 2026 04 14 New [[concepts/ai-assisted-coding|Claude Code]] features
