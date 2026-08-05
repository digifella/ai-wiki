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
updated: 2026-07-17
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Persistent Computing

Persistent computing is a technique for maintaining long-running processes and terminal sessions that continue operating independently of the connection through which they were initiated. This approach is particularly valuable for remote work, long-duration tasks, and server administration, where network interruptions or terminal closures would otherwise terminate active processes. By decoupling sessions from the underlying connection, users can disconnect and reconnect without losing their work environment or interrupting executing programs.

## Implementation

The most common implementation of persistent computing uses terminal multiplexers such as tmux or GNU Screen. These tools create virtual sessions that run on the remote server, persisting even after the user disconnects. A session is initiated with a multiplexer command, and processes are launched within that session. When the connection drops or the user closes their terminal, the session remains active on the server. The user can later reconnect and reattach to the same session, resuming work exactly where they left off.

## Practical Applications

Persistent computing is essential for system administrators managing remote servers, developers running long-compilation tasks or tests, and data scientists executing extended analyses. It eliminates the need to restart interrupted work and reduces the impact of unreliable network connections. Sessions can also be shared among multiple users, enabling collaborative access to the same terminal environment or allowing others to monitor ongoing processes.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
- 2026-04-07: [[lab-notes/2026-04-07-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)
