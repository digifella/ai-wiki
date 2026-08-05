---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "tmux"
  - "terminal-multiplexing"
  - "session-management"
  - "keyboard-shortcuts"
  - "background-processes"
aliases:
  - "tmux detach"
  - "session detaching"
summary: Detaching a tmux session using the CTRL + B then D shortcut allows the session to continue running in the background.
updated: 2026-07-14
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Detach

Detach is a tmux operation that disconnects the current client from a session while allowing that session to continue running in the background. When you detach from a tmux session by pressing CTRL + B followed by D, the session persists on the server with all processes and windows intact. This separation between the client connection and the session itself is fundamental to tmux's design, distinguishing it from simply closing a terminal window, where all running processes would typically terminate.

## Primary Use Cases

Detaching is essential for long-running tasks that need to continue executing after you disconnect from your terminal. A common workflow involves starting a build process, database migration, or data analysis script within a tmux session, detaching from it, closing your laptop or terminal, and reconnecting later to check on progress. This capability is particularly valuable for remote work over SSH connections, where network interruptions or session timeouts would otherwise interrupt your work.

## Reattaching to Sessions

Sessions that have been detached remain available on the server and can be reattached at any time using the `tmux attach-session` command or the shortcut `tmux a`. The `tmux list-sessions` command displays all available sessions, showing their creation time and whether they are currently attached to a client. This allows you to manage multiple concurrent sessions, each with their own set of windows and panes, switching between them as needed.

## Source Notes
