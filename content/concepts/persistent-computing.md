---
type: concept
domain: tools-platforms
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
updated: 2026-05-23
group: developer-tooling-clis
---
# Persistent Computing

Persistent computing refers to a technique for maintaining long-[[concepts/running|running]] processes and sessions that continue operating independently of the terminal or [[concepts/connection|connection]] through which they were initiated. The method relies on [[concepts/session-management|session management]] tools, most commonly [[concepts/tmux-sessions|tmux]] ([[entities/tmux|terminal multiplexer]]), which allows users to [[concepts/detach|detach]] from an active [[concepts/session|session]] and reattach to it later without interrupting the processes running within that session.

## Core Mechanism

When a user detaches from a tmux session, the terminal connection closes while the session itself remains active on the remote server. All running processes continue to execute in the background. The user can later reattach to the same session from a different terminal or connection, picking up exactly where they left off. This approach is particularly valuable for remote work [[concepts/scenarios|scenarios]] where network interruptions, terminal [[concepts/fastening-devices|closures]], or system restarts would otherwise terminate long-running tasks.

## Practical Applications

Persistent computing is widely used for maintaining server processes, running time-intensive computations, and managing remote [[concepts/developer-platforms|development environments]]. System administrators rely on it to keep services running across administrative sessions, while researchers and developers use it to execute long-running scripts or analyses that may take hours or days to complete. The technique eliminates the need to restart processes after accidental disconnections or planned terminal closures.
## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
- 2026-04-07: [[lab-notes/2026-04-07-Anthropic-Dispatch-Remote-Desktop-AI-Integration-Claude-and-OpenClaw|Anthropic Dispatch Remote Desktop AI Integration Claude and OpenClaw]] · [▶ source](https://www.youtube.com/watch?v=1_VlT1vhN04)
- 2026-04-17: [[lab-notes/2026-04-17-Bridging-the-AI-Agent-Speed-Gap-Rebuilding-Human-Centric-Web-Infrastru|Bridging the AI Agent Speed Gap Rebuilding Human Centric Web Infrastru]] · [▶ source](https://www.youtube.com/watch?v=XlfumXPPrLY)