---
type: concept
domain: tools-platforms
tags:
  - "claude-cli"
  - "session-management"
  - "context-tracking"
  - "developer-workflow"
  - "memory-management"
aliases:
  - "Claude Code CLI Sessions"
  - "Context Resume"
summary: The Claude Code CLI allows users to resume previous sessions, monitor context usage, and add custom memories.
updated: 2026-05-23
group: developer-tooling-clis
---
# Code Rewriting

[[concepts/code|Code]] Rewriting is a feature set within the [[concepts/ai-assisted-coding|Claude Code]] CLI that enables developers to maintain [[concepts/continuity|continuity]] and efficiency across multiple [[concepts/coding|coding]] sessions. The tooling addresses the practical challenge of [[concepts/context-loss|context loss]] and resource management when working on extended projects.

## Session Management

The [[concepts/claude-code|Claude Code]] CLI allows users to resume previous sessions rather than starting from scratch each time. By [[concepts/running|running]] the `[[concepts/claude-ai|claude]] —resume` command within a project directory, developers can view a list of all prior Claude Code sessions and select one to continue from, preserving the conversational context and project state without losing accumulated progress or [[concepts/reasoning|reasoning]].

## Context Monitoring and Custom Memory

The CLI provides visibility into context usage, allowing developers to understand what information is consuming their available [[concepts/context-window|context window]]. Users can establish custom memories that persist across multiple sessions by prefacing input with the `#` symbol followed by [[concepts/instructions|instructions]] or information they want Claude to retain. This capability helps manage long-term project continuity without repeatedly re-explaining project details or requirements.
