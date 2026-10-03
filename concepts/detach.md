---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-14" }
group: developer-tooling-clis
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Detach

Detach is a [[concepts/tmux-sessions|tmux]] operation that disconnects the current client from a session while allowing that session to continue running in the background. When a user detaches from a [[concepts/session|tmux session]] by pressing CTRL + B followed by D, the session persists on the server with all processes and [[concepts/microsoft-windows|windows]] intact. This separation between the client [[concepts/connection|connection]] and the session itself is fundamental to tmux's design, distinguishing it from simply closing a [[concepts/cli|terminal]] window, where all running processes would typically terminate.

## Primary Use Cases

Detaching is essential for long-running tasks that need to persist beyond the lifespan of a local network connection or terminal session. It allows users to initiate processes on a remote server and disconnect, returning to the session later to check progress or interact with the output. This capability is particularly valuable in unstable network environments or when working across different devices, as it ensures that computational work is not lost due to client-side interruptions.

## Reattachment

Once detached, a tmux session remains active until it is explicitly killed or the server shuts down. Users can reconnect to the same session from any new terminal window or different machine by listing available sessions and attaching to the desired one. This seamless reattachment process ensures [[concepts/continuity|continuity]] of work, enabling developers and system administrators to maintain stateful environments without the overhead of restarting applications or reconfiguring settings.
## Source Notes
