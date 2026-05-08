---
type: concept
domain: tools-platforms
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
updated: 2026-05-01
---
# Detach

Detach is a tmux operation that disconnects the current client from a [[concepts/session|session]] while allowing that session to continue [[concepts/running|running]] in the background. This is achieved by pressing CTRL + B followed by D. The session persists on the server and can be reconnected to later, making it useful for long-running processes.

## Use Cases

Detaching is particularly valuable when running persistent workloads that should not be interrupted. Common use cases include [[entities/python|Python]] jobs, [[entities/docker-desktop|Docker]] services, [[entities/ollama|Ollama]] downloads, and long-running scripts or editor sessions. By detaching rather than terminating the session, users can close their terminal or disconnect from a remote server without stopping these processes.

## Reconnecting

A detached session remains active indefinitely until explicitly killed or the tmux server stops. Users can view all available sessions with `tmux list-sessions` and reconnect to a specific session using `tmux attach-session -t <session-name>`. This allows work to be resumed exactly where it was left off.

## Source Notes
- 2026-04-24: [[lab-notes/2026-04-24-Report-Top-10-Worst-EVs-to-Avoid---Analysis-of-Performance-and-Value|Report: Top 10 Worst EVs to Avoid - Analysis of Performance and Value]] · [▶ source](https://www.youtube.com/watch?v=QJuwX8H7Pss)