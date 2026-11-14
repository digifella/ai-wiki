---
type: concept
domain: tools-platforms-infrastructure
group: developer-tooling-clis
tags:
  - "concept"
  - "tmux"
  - "session-management"
  - "terminal-multiplexing"
  - "process-persistence"
  - "devops"
  - "local-computing"
aliases:
  - "tmux Sessions"
  - "Persistent Terminal Sessions"
summary: Technique for maintaining long-running tmux sessions that persist across terminal disconnections using detach and reattach commands.
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Persistent Computing

Persistent computing is a technique for maintaining long-running processes and terminal sessions that continue operating independently of the connection through which they were initiated. This approach is particularly valuable for remote work, long-duration tasks, and server administration, where network interruptions or terminal closures would otherwise terminate active programs. By decoupling the session lifecycle from the client connection, users can ensure that critical computations, data transfers, or interactive shells survive transient connectivity issues.

The primary mechanism for achieving this in Unix-like environments involves terminal multiplexers such as `tmux` or `screen`. These tools create a server process that manages one or more client sessions. When a user disconnects from the remote host, the multiplexer server remains active in the background, preserving the state of all running applications and the terminal buffer. Upon reconnecting, the user can reattach to the existing session, restoring the exact environment as it was left, including open files, running scripts, and command history.

This capability is essential for managing jobs that exceed typical network stability windows or require extended execution times. It prevents data loss associated with unexpected disconnects and allows administrators to monitor progress on long-running builds, compilations, or data processing pipelines without maintaining an active SSH session. The technique effectively transforms a fragile, connection-dependent terminal into a robust, stateful computing environment.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
- 2026-04-07: [[lab-notes/2026-04-07-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)
