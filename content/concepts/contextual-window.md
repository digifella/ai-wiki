---
type: concept
domain: ai-agents
group: reasoning-context-prompting
tags:
  - "context-management"
  - "claude-code"
  - "session-resumption"
  - "token-optimization"
  - "llm-memory"
  - "prompt-engineering"
aliases:
  - "context-length"
  - "session-persistence"
  - "memory-management"
summary: Claude Code allows users to resume previous sessions and manage context by viewing usage and adding custom memories.
updated: 2026-05-01
---
# Contextual Window

A contextual window refers to the amount of conversational history and information that an [[concepts/ai-agent|AI agent]] can access and maintain during interactions. In the context of [[concepts/ai-assisted-coding|Claude Code]], managing the contextual window is essential for maintaining [[concepts/continuity|continuity]] across multiple sessions and ensuring the AI retains relevant information about ongoing projects.

## Session Resumption

Claude Code allows users to resume previous sessions without losing accumulated context. By [[concepts/running|running]] the `[[concepts/claude-ai|claude]] —resume` command within a project, users can view all prior Claude Code sessions and select which one to continue. This capability prevents [[concepts/context-loss|context loss]] when returning to interrupted or long-running projects and maintains the thread of conversation and work history.

## Memory Management

Users can extend and customize their contextual window by adding memories that persist across sessions. This is accomplished by prefixing [[concepts/commands|commands]] with `#` followed by information Claude should retain. These custom memories serve as anchoring points within the [[concepts/context-window|context window]], allowing the AI to [[concepts/recall|recall]] project-specific details, preferences, or [[concepts/instructions|instructions]] without requiring users to re-establish context manually in each new [[concepts/session|session]].

## Source Notes
- 2026-04-07: Qwen 3.6 Plus: Open-Source AI
- 2026-04-10: [[lab-notes/2026-04-10-Qwen-36-Plus-Open-Source-AIs-Agentic-Capabilities-and-Frontier|Qwen 36 Plus Open Source AIs Agentic Capabilities and Frontier]] · [▶ source](https://www.youtube.com/watch?v=FuUISGqIC3k)
- 2026-04-22: Google · [▶ source](https://www.youtube.com/watch?v=2DlsrKlF7XQ)
- 2026-04-29: OpenClaw · [▶ source](https://www.youtube.com/watch?v=L7FF8Zgab3M)