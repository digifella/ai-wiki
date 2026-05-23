---
type: entity
tags:
  - "terminal-multiplexer"
  - "session-management"
  - "persistent-processes"
  - "dev-tools"
aliases:
  - "terminal multiplexer"
  - "tmux sessions"
summary: Tmux allows for the creation of persistent terminal sessions that can be detached without killing the running processes.
updated: 2026-05-23
---
# Tmux

[[concepts/tmux-sessions|Tmux]] is a terminal multiplexer that enables users to create and manage multiple [[concepts/terminal-multiplexing|terminal sessions]] within a single window or across different [[entities/windows|windows]]. A key feature of tmux is its ability to create [[concepts/background-processes|persistent sessions]] that continue [[concepts/running|running]] even after the user disconnects or closes their terminal. This allows long-running processes—such as [[entities/python|Python]] scripts, [[entities/docker-desktop|Docker]] services, or downloads—to continue executing in the background without interruption.

## Sessions and Detachment

Users can create a new [[concepts/session|tmux session]] using the command `tmux new -s [session-name]`. Once inside a session, any process or application can be launched and left running. To disconnect from an active session without terminating the running processes, users press Ctrl+B followed by D to [[concepts/detach|detach]]. The session remains alive on the server, preserving the state of all running [[concepts/software|applications]].

## Use Cases

Tmux is particularly useful for remote server work, where network interruptions or terminal [[concepts/fastening-devices|closures]] would otherwise kill running processes. It allows developers and system administrators to maintain multiple independent workspaces, manage long-duration tasks reliably, and reconnect to previous sessions from different machines or [[concepts/assistive-technology|at]] different times.

- 2026-04-08 [2026-04-08-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI](2026-04-08-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI.md) ← [[concepts/ad-generation|Claude Cowork]] Automating Workflows With Local File Access And Ai
- 2026-04-10 [2026-04-10-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI](2026-04-10-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI.md) ← Claude Cowork Automating Workflows With Local File Access And Ai
- 2026-04-07 [2026-04-07-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI](2026-04-07-Claude-CoWork-Automating-Workflows-with-Local-File-Access-and-AI.md) ← Claude Cowork Automating Workflows With Local File Access And Ai
## Source Notes