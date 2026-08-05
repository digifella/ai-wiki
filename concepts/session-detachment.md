---
type: concept
domain: ai-agents
group: agent-systems-skills
tags:
  - "concept"
  - "tmux"
  - "session-management"
  - "process-persistence"
  - "terminal-multiplexing"
  - "detachment"
aliases:
  - "tmux session detachment"
  - "persistent terminal sessions"
summary: A tmux technique for running persistent sessions that continue executing after detaching from the terminal.
updated: 2026-07-18
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-18" }
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

# Session Detachment

Session detachment is a [[concepts/terminal-multiplexing|terminal multiplexing]] technique that allows processes to continue executing on a remote server after a user disconnects from their [[concepts/cli|terminal]] [[concepts/session|session]]. This is achieved by decoupling the running process from the terminal [[concepts/connection|connection]] itself, enabling the process to persist independently. The primary tool implementing this pattern is [[entities/tmux|tmux]], a terminal multiplexer that maintains sessions server-side regardless of client connection status.

## Use Cases

Session detachment is particularly valuable for long-running tasks on remote machines. A user can start a process, detach from the session, close their terminal or disconnect from the network, and the process continues uninterrupted. This is essential for tasks like system backups, data processing jobs, or software compilations that may take hours or days to complete. When the user reconnects later, they can reattach to the same session and observe the results or check on progress.

## Technical Implementation

When a user detaches from a tmux session using the standard keyboard shortcut (Ctrl+B then D), the tmux server maintains the session state in memory on the remote machine. The running processes remain attached to the session rather than to the terminal connection, allowing them to execute independently. Network interruptions or terminal closures do not affect the session. Users can later reconnect and reattach to the session from the same machine or a different one, resuming their work exactly where they left off.

## Source Notes
- 2026-04-14: The Starlink Breakthrough Everyone Missed
