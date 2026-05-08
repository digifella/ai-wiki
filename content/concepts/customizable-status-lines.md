---
type: concept
domain: tools-platforms
tags:
  - "claude-code"
  - "terminal"
  - "customization"
  - "cli"
  - "terminal-ui"
  - "cli-customization"
  - "status-line"
aliases:
  - "status line customization"
  - "Claude Code status bar"
summary: "A feature in Claude Code that allows users to personalize the terminal status line by appending dynamic or static information via CLI commands."
updated: 2026-04-20
group: developer-tooling-clis
---
# Customizable Status Lines

A feature in [[entities/claude-code]] that allows users to personalize the status line located at the bottom of the terminal interface.

- **Version Introduced:** [[concepts/claude-code|Claude Code]] 1.0.71
- **Functionality:** Enables appending dynamic or static information to the status bar via CLI [[concepts/commands|commands]].
- **Usage:** Uses the `/statusline add` command syntax.
	- **Examples:**
		- `/statusline add the weather in London with emojis`
		- `/statusline add how long I've been in the [[concepts/session|session]], the model being used`

2026 04 14 New [[concepts/ai-assisted-coding|Claude Code]] features

## Source Notes

- 2026-04-14: I Looked At Amazon After They Fired 16,000 Engineers. Their AI Broke Everything.