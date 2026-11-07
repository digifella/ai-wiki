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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Detach

Detach is a tmux operation that disconnects the current client from a session while allowing that session to continue running in the background. When a user detaches from a tmux session by pressing CTRL + B followed by D, the session persists on the server with all processes and windows intact. This separation between the client connection and the session itself is fundamental to tmux's design, distinguishing it from simply closing a terminal window, where all running processes are typically terminated.

The primary utility of detaching lies in maintaining long-running tasks across network interruptions or when switching between different workspaces. Because the session remains active on the remote host, users can reattach to it later from any location using the `tmux attach` command, resuming their work exactly where they left off. This capability is essential for system administrators and developers who need to ensure the continuity of critical processes regardless of local network stability.

Unlike standard terminal emulators that terminate processes upon closure, tmux treats the session as an independent entity. Detaching merely removes the visual interface without affecting the underlying shell or applications. This architecture enables seamless transitions between local and remote environments, ensuring that computational work is not lost due to client-side disconnections or hardware changes.

## Source Notes
